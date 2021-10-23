class fetchImages {
  constructor(url = "https://pixabay.com/api/") {
    this.url = url;
    this._searchQuery = "";
    this._page = 1;
    this._totalImages = 0;
    this._api = "1030453-4271fa747ef92e686e2b519ac";
  }

  get searchQuery() {
    return this._searchQuery;
  }

  set searchQuery(value) {
    return (this._searchQuery = value);
  }

  get page() {
    return this._page;
  }

  set page(value) {
    return (this._page += value);
  }

  resetPage() {
    return (this._page = 1);
  }

  get totalImages() {
    return this._totalImages;
  }

  set totalImages(value) {
    return (this._totalImages = value);
  }

  async querySearch() {
    try {
      const response = await fetch(
        `${this.url}?q=${this._searchQuery}&page=${this._page}&key=${this._api}&orientation=horizontal&per_page=12`
      );
      const data = await response.json();

      this.totalImages = data.total;
      return data.hits;
    } catch (error) {
      console.log(error);
    }
  }
}

export default fetchImages;
