(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{106:function(e,t,i){(e.exports=i(11)(!1)).push([e.i,"\n.demo-swipe {\n  padding-bottom: 30px;\n}\n.demo-swipe .van-swipe {\n    cursor: pointer;\n}\n.demo-swipe .van-swipe-item {\n      color: #fff;\n      font-size: 20px;\n      text-align: center;\n      line-height: 150px\n}\n.demo-swipe .van-swipe-item:nth-child(even) {\n  background-color: #39a9ed;\n}\n.demo-swipe .van-swipe-item:nth-child(odd) {\n  background-color: #66c6f2;\n}\n.demo-swipe .van-swipe img {\n      width: 100%;\n      height: 240px;\n      display: block;\n      padding: 30px 60px;\n      box-sizing: border-box;\n      background-color: #fff;\n      pointer-events: none;\n}\n.demo-swipe--vertical {\n    height: 200px;\n}\n.demo-swipe--vertical .van-swipe-item {\n      line-height: 200px;\n}\n",""])},107:function(e,t,i){"use strict";var n=i(54);i.n(n).a},337:function(e,t,i){"use strict";i.r(t);var n={i18n:{"zh-CN":{title2:"图片懒加载",title3:"监听 change 事件",title4:"纵向滚动",title5:"设置滑块大小",message:"当前 Swipe 索引："},"en-US":{title2:"Image Lazyload",title3:"Change Event",title4:"Vertical Scrolling",title5:"Set Swiper Item Size",message:"Current Swipe index:"}},data:function(){return{images:["https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg","https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg","https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"]}},methods:{onChange:function(e){this.$toast(this.$t("message")+e)}}},a=(i(107),i(0)),s=Object(a.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("demo-section",[i("demo-block",{attrs:{title:e.$t("basicUsage")}},[i("van-swipe",{attrs:{autoplay:3e3}},[i("van-swipe-item",[e._v("1")]),i("van-swipe-item",[e._v("2")]),i("van-swipe-item",[e._v("3")]),i("van-swipe-item",[e._v("4")])],1)],1),i("demo-block",{attrs:{title:e.$t("title2")}},[i("van-swipe",{attrs:{autoplay:3e3}},e._l(e.images,function(e,t){return i("van-swipe-item",{key:t},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"image"}]})])}))],1),i("demo-block",{attrs:{title:e.$t("title3")}},[i("van-swipe",{on:{change:e.onChange}},[i("van-swipe-item",[e._v("1")]),i("van-swipe-item",[e._v("2")]),i("van-swipe-item",[e._v("3")]),i("van-swipe-item",[e._v("4")])],1)],1),i("demo-block",{attrs:{title:e.$t("title4")}},[i("van-swipe",{staticClass:"demo-swipe--vertical",attrs:{autoplay:3e3,vertical:""}},[i("van-swipe-item",[e._v("1")]),i("van-swipe-item",[e._v("2")]),i("van-swipe-item",[e._v("3")]),i("van-swipe-item",[e._v("4")])],1)],1),i("demo-block",{attrs:{title:e.$t("title5")}},[i("van-swipe",{attrs:{autoplay:3e3,width:300,loop:!1}},[i("van-swipe-item",[e._v("1")]),i("van-swipe-item",[e._v("2")]),i("van-swipe-item",[e._v("3")]),i("van-swipe-item",[e._v("4")])],1)],1)],1)},[],!1,null,null,null);s.options.__file="index.vue";t.default=s.exports},54:function(e,t,i){var n=i(106);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(10)(n,a);n.locals&&(e.exports=n.locals)}}]);