(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={item:"ImageGalleryItem_item__2ey0n",image:"ImageGalleryItem_image__2xsbt"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},14:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__gboaM",center:"ImageGallery_center__1xxlp"}},17:function(e,t,a){e.exports={button:"Button_button__3QF_k"}},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(9),c=a.n(s),o=a(3),i=a(4),u=a(6),l=a(5),h=a(8),m=a.n(h),p=a(0),d=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handlerSearchQuery=function(t){e.setState({searchQuery:t.currentTarget.value})},e.handlerSubmit=function(t){if(t.preventDefault(),""===e.state.searchQuery.trim())return alert("Enter query search");e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(p.jsx)("header",{className:m.a.header,children:Object(p.jsxs)("form",{className:m.a.form,onSubmit:this.handlerSubmit,children:[Object(p.jsx)("button",{type:"submit",className:m.a.button,children:Object(p.jsx)("span",{className:m.a.label,children:"Search"})}),Object(p.jsx)("input",{className:m.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handlerSearchQuery})]})})}}]),a}(n.Component),b=d,g=a(7),j=a.n(g),y=a(10),f=a(15),O=a(16),v=a.n(O),_=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://pixabay.com/api/";Object(o.a)(this,e),this.url=t,this._searchQuery="",this._page=1,this._totalImages=0,this._api="1030453-4271fa747ef92e686e2b519ac"}return Object(i.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"totalImages",get:function(){return this._totalImages},set:function(e){return this._totalImages=e}},{key:"querySearch",value:function(){var e=Object(y.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this.url,"?q=").concat(this._searchQuery,"&page=").concat(this._page,"&key=").concat(this._api,"&orientation=horizontal&per_page=12"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,this.totalImages=a.total,e.abrupt("return",a.hits);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),x=_,k=a(12),S=a.n(k),w=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.images.map((function(t){var a=t.id,n=t.webformatURL,r=t.largeImageURL;return Object(p.jsx)("li",{id:a,className:S.a.item,children:Object(p.jsx)("a",{href:r,onClick:e.props.onOpenModal,children:Object(p.jsx)("img",{src:n,"data-modal":r,alt:"",className:S.a.image})})},a)}))}}]),a}(n.Component),I=w,M=a(17),Q=a.n(M),C=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("button",{className:Q.a.button,onClick:this.props.onClick,children:"Load more"})}}]),a}(n.Component),N=C,E=a(13),L=a.n(E),R=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onCloseModal=function(t){"Escape"!==t.code&&t.currentTarget!==t.target||e.props.onOpenModal(t)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal)}},{key:"render",value:function(){return Object(s.createPortal)(Object(p.jsx)("div",{className:L.a.overlay,onClick:this.onCloseModal,children:Object(p.jsx)("div",{className:L.a.modal,children:this.props.children})}),document.getElementById("modal-root"))}}]),a}(n.Component),q=R,A=a(14),B=a.n(A),D=new x,F="idle",G="pending",P="resolved",T="rejected",U="empty",J=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[],status:F,error:null,isModalOpen:!1,modalImage:null,totalRemainingImages:0},e.onLoadMore=function(){D.page=1,D.querySearch().then((function(t){e.setState((function(e){return{images:[].concat(Object(f.a)(e.images),Object(f.a)(t)),totalRemainingImages:e.totalRemainingImages-12}})),window.scrollTo({top:document.getElementById("gallery-images").scrollHeight,behavior:"smooth"})}))},e.onOpenModal=function(t){t.preventDefault();var a=t.currentTarget.href;e.setState((function(e){return{isModalOpen:!e.isModalOpen,modalImage:a}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(y.a)(j.a.mark((function e(t){var a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.searchQuery,n=this.props.searchQuery,a===n){e.next=16;break}return this.setState({status:G}),e.prev=4,D.searchQuery=n,D.resetPage(),e.next=9,D.querySearch();case 9:r=e.sent,this.setState({images:r,status:r.length>0?P:U,totalRemainingImages:D.totalImages>12?D.totalImages-12:0}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({error:e.t0,status:T});case 16:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,n=e.error,r=e.isModalOpen,s=e.modalImage;return"idle"===a?Object(p.jsx)(p.Fragment,{}):"empty"===a?Object(p.jsx)("p",{children:"Sorry, but nothing matched your search terms. Please try again with some different keywords."}):"pending"===a?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(v.a,{className:B.a.center,type:"ThreeDots",color:"#3f51b5",height:100,width:100})}):"resolved"===a?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:B.a.gallery,id:"gallery-images",children:Object(p.jsx)(I,{images:t,onOpenModal:this.onOpenModal})}),this.state.totalRemainingImages>0&&Object(p.jsx)(N,{onClick:this.onLoadMore}),r&&Object(p.jsx)(q,{onOpenModal:this.onOpenModal,children:Object(p.jsx)("img",{src:s,alt:""})})]}):"rejected"===a?Object(p.jsx)("p",{children:n.message}):void 0}}]),a}(n.Component),V=J,W=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handlerSearchQuery=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{onSubmit:this.handlerSearchQuery}),Object(p.jsx)(V,{searchQuery:this.state.searchQuery})]})}}]),a}(n.Component),z=W;a(44);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={header:"Searchbar_header__34uEY",form:"Searchbar_form__XuKjc",button:"Searchbar_button__MhnaU",label:"Searchbar_label__1BV3w",input:"Searchbar_input__2C4aO"}}},[[45,1,2]]]);
//# sourceMappingURL=main.e16a8ff2.chunk.js.map