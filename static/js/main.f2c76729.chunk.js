(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,c){e.exports={spiner:"Spiner_spiner__2YWlc"}},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(6),r=c.n(a),o=c(4),i=c(3),s=c(8),u=(c(21),c(10)),j=function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23292675-06f406722274daa99671b1028","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return e.hits}))},l=c(1),b=function(e){var t=e.onClose,c=e.picture;Object(n.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.code&&t(e)};return Object(l.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t(e)},children:Object(l.jsx)("div",{className:"Modal",children:Object(l.jsx)("img",{src:c,alt:""})})})},m=function(e){var t=e.pictures,c=Object(n.useState)(!1),a=Object(i.a)(c,2),r=a[0],o=a[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),j=u[0],m=u[1],O=function(e){o(!r),m(e)};return Object(l.jsxs)(l.Fragment,{children:[t.map((function(e){return Object(l.jsx)("li",{className:"ImageGalleryItem",children:Object(l.jsx)("img",{src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image",onClick:function(){return O(e.largeImageURL)},id:e.largeImageURL})},e.id)})),r&&Object(l.jsx)(b,{onClose:O,picture:j})]})},O=c(11),h=c(12),p=c(16),f=c(15),d=c(13),g=c.n(d),x=c(14),v=c.n(x),S=function(e){Object(p.a)(c,e);var t=Object(f.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:v.a.spiner,children:[" ",Object(l.jsx)(g.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100,timeout:3e3})]})}}]),c}(n.Component),y=function(e){var t=e.pictureTag,c=Object(n.useState)(null),a=Object(i.a)(c,2),r=a[0],o=a[1],s=Object(n.useState)(!1),b=Object(i.a)(s,2),O=b[0],h=b[1],p=Object(n.useState)(1),f=Object(i.a)(p,2),d=f[0],g=f[1],x=Object(n.useState)(!1),v=Object(i.a)(x,2),y=v[0],w=v[1];Object(n.useEffect)((function(){t&&(w(!0),j(t,1).then((function(e){o(e),h(!0),g(d+1)})).catch((function(e){return console.log(e)})).finally((function(){return w(!1)})))}),[t]);return Object(l.jsxs)("div",{className:"ImageContainer",children:[y&&Object(l.jsx)(S,{}),Object(l.jsx)("ul",{className:"ImageGallery",children:r&&Object(l.jsx)(m,{pictures:r})}),O&&Object(l.jsx)("button",{type:"button",className:"Button",onClick:function(){w(!0),j(t,d).then((function(e){o([].concat(Object(u.a)(r),Object(u.a)(e))),h(!0),g(d+1),w(!0),1!==d&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return console.log(e)})).finally(w(!1))},children:"Load more"})]})},w={picture:""},N=function(e){var t=e.onSubmit,c=Object(n.useState)(w),a=Object(i.a)(c,2),r=a[0],u=a[1];return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==r.picture.trim()?t(r.picture):s.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")},children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:function(e){u((function(t){return Object(o.a)(Object(o.a)({},t),{},{picture:e.target.value})}))}})]})})},k={pictureTag:""},C=function(){var e=Object(n.useState)(k),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N,{onSubmit:function(e){a((function(t){return Object(o.a)(Object(o.a)({},t),{},{pictureTag:e})}))}}),Object(l.jsx)(y,{pictureTag:c.pictureTag}),Object(l.jsx)(s.a,{autoClose:3e3})]})};c(43);r.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f2c76729.chunk.js.map