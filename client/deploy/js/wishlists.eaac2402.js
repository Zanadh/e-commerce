(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wishlists"],{"6f0e":function(t,s,e){"use strict";var o=e("cdec"),c=e.n(o);c.a},cdec:function(t,s,e){},e596:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[t._m(0),e("hr"),e("h2",[t._v("Your Wishlist")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3 sidebar"}),e("div",{staticClass:"col-9 bg-light"},[e("table",{staticClass:"table table-hover"},[t._m(1),e("tbody",t._l(t.wishlists,(function(t,s){return e("RowWishlist",{key:t.ProductId,attrs:{wishlist:t,count:s}})})),1)])])])])},c=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row text-left ml-2 mt-2"},[e("p",{},[t._v("Home > Wishlist")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Image")]),e("th",{attrs:{scope:"col"}},[t._v("Product Name")]),e("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("th",{attrs:{scope:"row"}},[t._v(t._s(t.count+1))]),e("td",[e("img",{attrs:{src:t.wishlist.Product.image_url,width:"200px",alt:""}})]),e("td",[t._v(t._s(t.wishlist.Product.name))]),e("td",[e("button",{staticClass:"btn btn-warning mr-2",on:{click:t.toCart}},[t._v(" Move to Cart ")]),e("button",{staticClass:"btn btn-outline-danger",on:{click:t.removeWl}},[t._v(" Remove ")])])])},n=[],i=e("aa22"),r={name:"WL-ROW",props:["wishlist","count"],methods:{removeWl:function(){var t=this,s=this.wishlist.ProductId;console.log(s),i["a"].delete("wishlist/".concat(s),{headers:{access_token:localStorage.access_token}}).then((function(s){var e=s.data;console.log(e),t.$store.dispatch("fetch_wishlists")})).catch((function(s){console.log(s.response),s.response&&t.$store.commit("SET_ERRMSG",s.response.data.msg)}))},toCart:function(){var t=this,s=this.wishlist.ProductId;console.log(s),i["a"].post("cart",{productId:s},{headers:{access_token:localStorage.access_token}}).then((function(s){var e=s.data;console.log(e),t.removeWl(),t.$store.dispatch("fetch_cart")})).catch((function(s){console.log(s.response),s.response&&t.$store.commit("SET_ERRMSG",s.response.data.msg)}))}}},l=r,h=e("2877"),u=Object(h["a"])(l,a,n,!1,null,null,null),d=u.exports,_={name:"Wishlist",components:{RowWishlist:d},computed:{wishlists:function(){return this.$store.state.wishlists}}},v=_,m=(e("6f0e"),Object(h["a"])(v,o,c,!1,null,"2a3f5f42",null));s["default"]=m.exports}}]);
//# sourceMappingURL=wishlists.eaac2402.js.map