(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{260:function(t,i,e){"use strict";e.r(i);var n={i18n:{"zh-CN":{group1:"所有城市",group2:"浙江",group3:"江苏",city1:[{text:"杭州",id:1001},{text:"温州",id:1002},{text:"宁波",id:1003},{text:"义乌",id:1004}],city2:[{text:"无锡",id:1011},{text:"常州",id:1012},{text:"莆田",id:1013},{text:"三明",id:1014}]},"en-US":{group1:"All",group2:"Group1",group3:"Group2",city1:[{text:"Delaware",id:1001},{text:"Florida",id:1002},{text:"Georqia",id:1003},{text:"Indiana",id:1004}],city2:[{text:"Alabama",id:1011},{text:"Kansas",id:1012},{text:"Louisiana",id:1013},{text:"Texas",id:1014}]}},data:function(){return{mainActiveIndex:0,activeId:1001}},computed:{items:function(){return[{text:this.$t("group1"),children:this.$t("city1").concat(this.$t("city2"))},{text:this.$t("group2"),children:this.$t("city1")},{text:this.$t("group3"),children:this.$t("city2")}]}},methods:{onNavClick:function(t){this.mainActiveIndex=t},onItemClick:function(t){console.log(t),this.activeId=t.id}}},c=e(0),o=Object(c.a)(n,function(){var t=this.$createElement,i=this._self._c||t;return i("demo-section",[i("demo-block",{attrs:{title:this.$t("basicUsage")}},[i("van-tree-select",{attrs:{items:this.items,"main-active-index":this.mainActiveIndex,"active-id":this.activeId},on:{navclick:this.onNavClick,itemclick:this.onItemClick}})],1)],1)},[],!1,null,null,null);o.options.__file="index.vue";i.default=o.exports}}]);