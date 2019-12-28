(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["documentation28"],{9161:function(e,s,r){"use strict";r.r(s);var n=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"maz-dropzone-doc"},[r("ComponentContainer",{staticClass:"flex direction-column",attrs:{code:e.codeExample,language:"js"}},[r("MazDropzone",{ref:"mazDropzone",attrs:{url:e.url,headers:e.headers,"max-filesize":e.maxFilesize},on:{"file-upload-error":e.error,"file-upload-success":e.success,"file-removed":function(s){e.successMessage=null}}}),e.errorMessage?r("div",{staticClass:"dropzone-error flex justify-center mt-2"},[r("span",{staticClass:"text-danger"},[e._v(" "+e._s(e.errorMessage)+" ")])]):e._e(),e.successMessage?r("div",{staticClass:"dropzone-success flex justify-center mt-2"},[r("span",{staticClass:"text-success"},[e._v(" "+e._s(e.successMessage)+" ")])]):e._e()],1)],1)},a=[],t={name:"MazDropzoneDoc",data:function(){return{url:"https://httpbin.org/post",headers:{"My-Awesome-Header":"header value"},maxFilesize:2,errorMessage:null,successMessage:null,codeExample:'<template>\n  <MazDropzone\n    ref="mazDropzone"\n    :url="url"\n    :headers="headers"\n    :max-filesize="maxFilesize"\n    @file-upload-error="error"\n    @file-upload-success="success"\n    @file-removed="successMessage = null"\n  />\n  <div\n    v-if="errorMessage"\n    class="dropzone-error flex justify-center mt-2"\n  >\n    <span class="text-danger">\n      {{ errorMessage }}\n    </span>\n  </div>\n  <div\n    v-if="successMessage"\n    class="dropzone-success flex justify-center mt-2"\n  >\n    <span class="text-success">\n      {{ successMessage }}\n    </span>\n  </div>\n</template>\n\nexport default {\n  data () {\n    return {\n      url: \'https://httpbin.org/post\',\n      headers: { \'My-Awesome-Header\': \'header value\' },\n      maxFilesize: 1,\n      errorMessage: null,\n      successMessage: null\n    }\n  },\n  methods: {\n    error (error) {\n      if (error) {\n        this.errorMessage = typeof error === \'string\' ? error : error.error.title\n      } else {\n        this.errorMessage = null\n      }\n    },\n    success () {\n      this.successMessage = \'Files uploaded !\'\n    }\n  }\n}'}},methods:{error:function(e){this.errorMessage=e?"string"===typeof e?e:e.error.title:null},success:function(){this.successMessage="Files uploaded !"}}},o=t,l=r("2877"),c=Object(l["a"])(o,n,a,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=documentation28.4d9c5205.js.map