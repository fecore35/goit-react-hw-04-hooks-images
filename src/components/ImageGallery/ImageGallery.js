import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import pixabayAPI from "../../services/pixabay-api";
import ImageGalleryItem from "components/ImageGalleryItem";
import ButtonLoadMore from "components/Button";
import Modal from "components/Modal";
import s from "./ImageGallery.module.css";

const API = new pixabayAPI();
const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
  EMPTY: "empty",
};

function ImageGallery({ searchQuery }) {
  const [status, setStatus] = useState(Status.IDLE);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [totalRemainingImages, setTotalRemainingImages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    const getDate = async () => {
      setStatus(Status.PENDING);

      try {
        API.searchQuery = searchQuery;
        API.resetPage();

        const images = await API.querySearch();

        setImages(images);
        setStatus(() => (images.length > 0 ? Status.RESOLVED : Status.EMPTY));
        setTotalRemainingImages(() =>
          API.totalImages > 12 ? API.totalImages - 12 : 0
        );
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    };

    getDate();
  }, [searchQuery]);

  const onLoadMore = () => {
    API.page = 1;

    API.querySearch().then((nextImages) => {
      setImages((state) => [...state, ...nextImages]);
      setTotalRemainingImages((state) => state - 12);

      window.scrollTo({
        top: document.getElementById("gallery-images").scrollHeight,
        behavior: "smooth",
      });
    });
  };

  const onOpenModal = (event) => {
    event.preventDefault();
    const modalImage = event.currentTarget.href;

    setIsModalOpen((state) => !state);
    setModalImage(modalImage);
  };

  if (status === Status.IDLE) {
    return <></>;
  }

  if (status === Status.EMPTY) {
    return (
      <p>
        Sorry, but nothing matched your search terms. Please try again with some
        different keywords.
      </p>
    );
  }

  if (status === Status.PENDING) {
    return (
      <>
        <Loader
          className={s.center}
          type="ThreeDots"
          color="#3f51b5"
          height={100}
          width={100}
        />
      </>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ul className={s.gallery} id="gallery-images">
          <ImageGalleryItem images={images} onOpenModal={onOpenModal} />
        </ul>

        {totalRemainingImages > 0 && <ButtonLoadMore onClick={onLoadMore} />}

        {isModalOpen && (
          <Modal onOpenModal={onOpenModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
      </>
    );
  }

  if (status === Status.REJECTED) {
    return <p>{error.message}</p>;
  }
}

// class OldImageGallery extends Component {
//   state = {
//     images: [],
//     status: Status.IDLE,
//     error: null,
//     isModalOpen: false,
//     modalImage: null,
//     totalRemainingImages: 0,
//   };

//   async componentDidUpdate(prevProps) {
//     const prevSearchTerms = prevProps.searchQuery;
//     const nextSearchTerms = this.props.searchQuery;

//     if (prevSearchTerms !== nextSearchTerms) {
//       this.setState({ status: Status.PENDING });

//       try {
//         API.searchQuery = nextSearchTerms;
//         API.resetPage();

//         const images = await API.querySearch();

//         this.setState({
//           images,
//           status: images.length > 0 ? Status.RESOLVED : Status.EMPTY,
//           totalRemainingImages: API.totalImages > 12 ? API.totalImages - 12 : 0,
//         });
//       } catch (error) {
//         this.setState({
//           error,
//           status: Status.REJECTED,
//         });
//       }
//     }
//   }

//   onLoadMore = () => {
//     API.page = 1;

//     API.querySearch().then((nextImages) => {
//       this.setState((prevState) => ({
//         images: [...prevState.images, ...nextImages],
//         totalRemainingImages: prevState.totalRemainingImages - 12,
//       }));

//       window.scrollTo({
//         top: document.getElementById("gallery-images").scrollHeight,
//         behavior: "smooth",
//       });
//     });
//   };

//   onOpenModal = (event) => {
//     event.preventDefault();
//     const modalImage = event.currentTarget.href;

//     this.setState((prevState) => {
//       return { isModalOpen: !prevState.isModalOpen, modalImage };
//     });
//   };

//   render() {
//     const { images, status, error, isModalOpen, modalImage } = this.state;

//     if (status === "idle") {
//       return <></>;
//     }

//     if (status === "empty") {
//       return (
//         <p>
//           Sorry, but nothing matched your search terms. Please try again with
//           some different keywords.
//         </p>
//       );
//     }

//     if (status === "pending") {
//       return (
//         <>
//           <Loader
//             className={s.center}
//             type="ThreeDots"
//             color="#3f51b5"
//             height={100}
//             width={100}
//           />
//         </>
//       );
//     }

//     if (status === "resolved") {
//       return (
//         <>
//           <ul className={s.gallery} id="gallery-images">
//             <ImageGalleryItem images={images} onOpenModal={this.onOpenModal} />
//           </ul>

//           {this.state.totalRemainingImages > 0 && (
//             <ButtonLoadMore onClick={this.onLoadMore} />
//           )}

//           {isModalOpen && (
//             <Modal onOpenModal={this.onOpenModal}>
//               <img src={modalImage} alt="" />
//             </Modal>
//           )}
//         </>
//       );
//     }

//     if (status === "rejected") {
//       return <p>{error.message}</p>;
//     }
//   }
// }

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};

export default ImageGallery;
