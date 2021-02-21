(function(t){function e(e){for(var n,a,i=e[0],c=e[1],s=e[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);C&&C(e);while(d.length)d.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var t,e=0;e<l.length;e++){for(var o=l[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(l.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},l=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/kirsh-note/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var C=c;l.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e623"),o("e379"),o("5dc8"),o("37e1");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("Header"),o("v-main",[this.$store.state.dialog?o("ModalWindow"):t._e(),0===t.allNotes.length?o("GreetingIcon",{staticClass:"greeting-icon"}):t._e(),this.$store.state.alertNoteError?o("AlertError"):t._e(),o("main",{staticClass:"mt-8 pl-3 pr-3"},[o("ListNotes",{attrs:{"all-notes":t.allNotes}})],1)],1)],1)},l=[],a=o("5530"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Title note","hide-details":"auto"},model:{value:t.titleNote,callback:function(e){t.titleNote=e},expression:"titleNote"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{solo:"",label:"Note text"},model:{value:t.contentNote,callback:function(e){t.contentNote=e},expression:"contentNote"}})],1),o("div",{staticClass:"d-flex justify-space-around mb-5"},t._l(t.colorsForPicker,(function(e,n){return o("div",{key:n,staticClass:"picker",class:{picker__active:t.colorNote===e},style:{backgroundColor:e},on:{click:function(o){t.colorNote=e}}})})),0),o("div",{staticClass:"modal-footer d-flex justify-space-between pa-3"},[o("v-btn",{attrs:{color:"error"},on:{click:t.hideModal}},[t._v(" Close ")]),o("v-btn",{attrs:{color:"blue"},on:{click:t.createNote}},[t._v(" "+t._s(null!==this.singleNote?"Update note":"Create")+" ")])],1)],1)],1)},c=[],s=o("2f62"),C={name:"ModalWindow",computed:Object(a["a"])({},Object(s["e"])(["dialog","singleNote"])),mounted:function(){null!==this.singleNote&&this.updateValue()},destroyed:function(){this.titleNote="",this.contentNote="",this.colorNote=""},data:function(){return{colorsForPicker:["#d9be75","#e34d75","#7587d9","#6c36c9"],notes:[],titleNote:"",contentNote:"",colorNote:""}},methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(s["b"])(["createNewNote","updateNote"])),Object(s["d"])(["editorModal","hideModal","showError","hideError"])),{},{createNote:function(){var t=this;""!==this.titleNote&&""!==this.colorNote&&""!==this.contentNote&&null===this.singleNote?(this.createNewNote({id:(new Date).getTime(),title:this.titleNote,content:this.contentNote,colorNote:this.colorNote}),this.hideModal(),this.titleNote="",this.contentNote="",this.colorNote=""):null!==this.singleNote?this.updateNote({id:this.singleNote.id,title:this.titleNote,content:this.contentNote,colorNote:this.colorNote}):(this.showError(),setTimeout((function(){t.hideError()}),2e3))},updateValue:function(){if(null!==this.singleNote){var t=this.singleNote,e=t.title,o=t.content,n=t.colorNote;this.titleNote=e,this.contentNote=o,this.colorNote=n}}})},u=C,d=o("2877"),f=o("6544"),h=o.n(f),p=o("8336"),v=o("b0af"),V=o("62ad"),b=o("169a"),N=o("8654"),g=o("a844"),m=Object(d["a"])(u,i,c,!1,null,null,null),H=m.exports;h()(m,{VBtn:p["a"],VCard:v["a"],VCol:V["a"],VDialog:b["a"],VTextField:N["a"],VTextarea:g["a"]});var _=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"alert__note-error mx-auto",attrs:{"max-width":"340",outlined:""}},[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-content",[o("div",{staticClass:"alert__note-title overline mb-4"},[t._v(" YOUR NOTE IS EMPTY ")]),o("v-list-item-subtitle",{staticClass:"alert__note-subtitle mb-1"},[t._v(" Please fill in all fields and select a note color ")])],1)],1)],1)},M=[],w={name:"AlertError",computed:Object(a["a"])({},Object(s["e"])(["alertNoteError"]))},L=w,x=o("da13"),j=o("5d23"),O=Object(d["a"])(L,_,M,!1,null,null,null),Z=O.exports;h()(O,{VCard:v["a"],VListItem:x["a"],VListItemContent:j["a"],VListItemSubtitle:j["b"]});var k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"d-flex flex-row flex-wrap"},t._l(t.allNotes,(function(t){return o("div",{key:t.id},[o("Note",{attrs:{note:t}})],1)})),0)},E=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"black pa-2 mr-4 mb-5",style:{backgroundColor:t.note.colorNote+"!important"},attrs:{elevation:"5",rounded:"","max-width":"250"}},[o("v-card-title",{staticClass:"black--text font-weight-bold"},[t._v(t._s(t.note.title))]),o("v-card-text",{staticClass:"black--text font-weight-regular"},[t._v(t._s(t.note.content))]),o("div",{staticClass:"d-flex justify-end"},[o("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.showEditModal(t.note)}}},[o("path",{staticClass:"note-icon",attrs:{d:"M19 8L15 12H18C18 15.31 15.31 18 12 18C10.99 18 10.03 17.75 9.2 17.3L7.74 18.76C8.97 19.54 10.43 20 12 20C16.42 20 20 16.42 20 12H23L19 8ZM6 12C6 8.69 8.69 6 12 6C13.01 6 13.97 6.25 14.8 6.7L16.26 5.24C15.03 4.46 13.57 4 12 4C7.58 4 4 7.58 4 12H1L5 16L9 12H6Z",fill:"black"}})]),o("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.deleteNote(t.note)}}},[o("path",{staticClass:"note-icon",attrs:{d:"M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z",fill:"black"}})])])],1)},T=[],A={name:"Note",props:{note:{}},methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(s["b"])(["deleteNote"])),Object(s["d"])(["editorModal"])),{},{showEditModal:function(t){this.editorModal(t)}})},P=A,$=o("99d9"),S=Object(d["a"])(P,y,T,!1,null,null,null),G=S.exports;h()(S,{VCard:v["a"],VCardText:$["a"],VCardTitle:$["b"]});var I={name:"ListsNote",components:{Note:G},props:{allNotes:{}}},D=I,B=Object(d["a"])(D,k,E,!1,null,null,null),F=B.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"d-flex justify-center align-center",attrs:{width:"300",height:"300",viewBox:"0 0 112 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M7.26562 42.293C7.16016 43.1953 6.82617 43.8926 6.26367 44.3848C5.70508 44.873 4.96094 45.1172 4.03125 45.1172C3.02344 45.1172 2.21484 44.7559 1.60547 44.0332C1 43.3105 0.697266 42.3438 0.697266 41.1328V40.3125C0.697266 39.5195 0.837891 38.8223 1.11914 38.2207C1.4043 37.6191 1.80664 37.1582 2.32617 36.8379C2.8457 36.5137 3.44727 36.3516 4.13086 36.3516C5.03711 36.3516 5.76367 36.6055 6.31055 37.1133C6.85742 37.6172 7.17578 38.3164 7.26562 39.2109H6.13477C6.03711 38.5312 5.82422 38.0391 5.49609 37.7344C5.17188 37.4297 4.7168 37.2773 4.13086 37.2773C3.41211 37.2773 2.84766 37.543 2.4375 38.0742C2.03125 38.6055 1.82812 39.3613 1.82812 40.3418V41.168C1.82812 42.0938 2.02148 42.8301 2.4082 43.377C2.79492 43.9238 3.33594 44.1973 4.03125 44.1973C4.65625 44.1973 5.13477 44.0566 5.4668 43.7754C5.80273 43.4902 6.02539 42.9961 6.13477 42.293H7.26562ZM11.7012 39.6328C11.5371 39.6055 11.3594 39.5918 11.168 39.5918C10.457 39.5918 9.97461 39.8945 9.7207 40.5V45H8.63672V38.6602H9.69141L9.70898 39.3926C10.0645 38.8262 10.5684 38.543 11.2207 38.543C11.4316 38.543 11.5918 38.5703 11.7012 38.625V39.6328ZM15.2168 45.1172C14.3574 45.1172 13.6582 44.8359 13.1191 44.2734C12.5801 43.707 12.3105 42.9512 12.3105 42.0059V41.8066C12.3105 41.1777 12.4297 40.6172 12.668 40.125C12.9102 39.6289 13.2461 39.2422 13.6758 38.9648C14.1094 38.6836 14.5781 38.543 15.082 38.543C15.9062 38.543 16.5469 38.8145 17.0039 39.3574C17.4609 39.9004 17.6895 40.6777 17.6895 41.6895V42.1406H13.3945C13.4102 42.7656 13.5918 43.2715 13.9395 43.6582C14.291 44.041 14.7363 44.2324 15.2754 44.2324C15.6582 44.2324 15.9824 44.1543 16.248 43.998C16.5137 43.8418 16.7461 43.6348 16.9453 43.377L17.6074 43.8926C17.0762 44.709 16.2793 45.1172 15.2168 45.1172ZM15.082 39.4336C14.6445 39.4336 14.2773 39.5938 13.9805 39.9141C13.6836 40.2305 13.5 40.6758 13.4297 41.25H16.6055V41.168C16.5742 40.6172 16.4258 40.1914 16.1602 39.8906C15.8945 39.5859 15.5352 39.4336 15.082 39.4336ZM22.8633 45C22.8008 44.875 22.75 44.6523 22.7109 44.332C22.207 44.8555 21.6055 45.1172 20.9062 45.1172C20.2812 45.1172 19.7676 44.9414 19.3652 44.5898C18.9668 44.2344 18.7676 43.7852 18.7676 43.2422C18.7676 42.582 19.0176 42.0703 19.5176 41.707C20.0215 41.3398 20.7285 41.1562 21.6387 41.1562H22.6934V40.6582C22.6934 40.2793 22.5801 39.9785 22.3535 39.7559C22.127 39.5293 21.793 39.416 21.3516 39.416C20.9648 39.416 20.6406 39.5137 20.3789 39.709C20.1172 39.9043 19.9863 40.1406 19.9863 40.418H18.8965C18.8965 40.1016 19.0078 39.7969 19.2305 39.5039C19.457 39.207 19.7617 38.9727 20.1445 38.8008C20.5312 38.6289 20.9551 38.543 21.416 38.543C22.1465 38.543 22.7188 38.7266 23.1328 39.0938C23.5469 39.457 23.7617 39.959 23.7773 40.5996V43.5176C23.7773 44.0996 23.8516 44.5625 24 44.9062V45H22.8633ZM21.0645 44.1738C21.4043 44.1738 21.7266 44.0859 22.0312 43.9102C22.3359 43.7344 22.5566 43.5059 22.6934 43.2246V41.9238H21.8438C20.5156 41.9238 19.8516 42.3125 19.8516 43.0898C19.8516 43.4297 19.9648 43.6953 20.1914 43.8867C20.418 44.0781 20.709 44.1738 21.0645 44.1738ZM26.9473 37.125V38.6602H28.1309V39.498H26.9473V43.4297C26.9473 43.6836 27 43.875 27.1055 44.0039C27.2109 44.1289 27.3906 44.1914 27.6445 44.1914C27.7695 44.1914 27.9414 44.168 28.1602 44.1211V45C27.875 45.0781 27.5977 45.1172 27.3281 45.1172C26.8438 45.1172 26.4785 44.9707 26.2324 44.6777C25.9863 44.3848 25.8633 43.9688 25.8633 43.4297V39.498H24.709V38.6602H25.8633V37.125H26.9473ZM32.0332 45.1172C31.1738 45.1172 30.4746 44.8359 29.9355 44.2734C29.3965 43.707 29.127 42.9512 29.127 42.0059V41.8066C29.127 41.1777 29.2461 40.6172 29.4844 40.125C29.7266 39.6289 30.0625 39.2422 30.4922 38.9648C30.9258 38.6836 31.3945 38.543 31.8984 38.543C32.7227 38.543 33.3633 38.8145 33.8203 39.3574C34.2773 39.9004 34.5059 40.6777 34.5059 41.6895V42.1406H30.2109C30.2266 42.7656 30.4082 43.2715 30.7559 43.6582C31.1074 44.041 31.5527 44.2324 32.0918 44.2324C32.4746 44.2324 32.7988 44.1543 33.0645 43.998C33.3301 43.8418 33.5625 43.6348 33.7617 43.377L34.4238 43.8926C33.8926 44.709 33.0957 45.1172 32.0332 45.1172ZM31.8984 39.4336C31.4609 39.4336 31.0938 39.5938 30.7969 39.9141C30.5 40.2305 30.3164 40.6758 30.2461 41.25H33.4219V41.168C33.3906 40.6172 33.2422 40.1914 32.9766 39.8906C32.7109 39.5859 32.3516 39.4336 31.8984 39.4336ZM40.8164 43.4121L42.293 38.6602H43.4531L40.9043 45.9785C40.5098 47.0332 39.8828 47.5605 39.0234 47.5605L38.8184 47.543L38.4141 47.4668V46.5879L38.707 46.6113C39.0742 46.6113 39.3594 46.5371 39.5625 46.3887C39.7695 46.2402 39.9395 45.9688 40.0723 45.5742L40.3125 44.9297L38.0508 38.6602H39.2344L40.8164 43.4121ZM44.0449 41.7715C44.0449 41.1504 44.166 40.5918 44.4082 40.0957C44.6543 39.5996 44.9941 39.2168 45.4277 38.9473C45.8652 38.6777 46.3633 38.543 46.9219 38.543C47.7852 38.543 48.4824 38.8418 49.0137 39.4395C49.5488 40.0371 49.8164 40.832 49.8164 41.8242V41.9004C49.8164 42.5176 49.6973 43.0723 49.459 43.5645C49.2246 44.0527 48.8867 44.4336 48.4453 44.707C48.0078 44.9805 47.5039 45.1172 46.9336 45.1172C46.0742 45.1172 45.377 44.8184 44.8418 44.2207C44.3105 43.623 44.0449 42.832 44.0449 41.8477V41.7715ZM45.1348 41.9004C45.1348 42.6035 45.2969 43.168 45.6211 43.5938C45.9492 44.0195 46.3867 44.2324 46.9336 44.2324C47.4844 44.2324 47.9219 44.0176 48.2461 43.5879C48.5703 43.1543 48.7324 42.5488 48.7324 41.7715C48.7324 41.0762 48.5664 40.5137 48.2344 40.084C47.9062 39.6504 47.4688 39.4336 46.9219 39.4336C46.3867 39.4336 45.9551 39.6465 45.627 40.0723C45.2988 40.498 45.1348 41.1074 45.1348 41.9004ZM55.0898 44.373C54.668 44.8691 54.0488 45.1172 53.2324 45.1172C52.5566 45.1172 52.041 44.9219 51.6855 44.5312C51.334 44.1367 51.1562 43.5547 51.1523 42.7852V38.6602H52.2363V42.7559C52.2363 43.7168 52.627 44.1973 53.4082 44.1973C54.2363 44.1973 54.7871 43.8887 55.0605 43.2715V38.6602H56.1445V45H55.1133L55.0898 44.373ZM60.8613 39.6328C60.6973 39.6055 60.5195 39.5918 60.3281 39.5918C59.6172 39.5918 59.1348 39.8945 58.8809 40.5V45H57.7969V38.6602H58.8516L58.8691 39.3926C59.2246 38.8262 59.7285 38.543 60.3809 38.543C60.5918 38.543 60.752 38.5703 60.8613 38.625V39.6328ZM65.2031 45V39.498H64.2012V38.6602H65.2031V38.1211C65.2031 37.4141 65.4043 36.8633 65.8066 36.4688C66.2129 36.0742 66.7852 35.877 67.5234 35.877C67.9609 35.877 68.5137 35.9961 69.1816 36.2344L69 37.1484C68.5117 36.9531 68.0469 36.8555 67.6055 36.8555C67.1406 36.8555 66.8047 36.9609 66.5977 37.1719C66.3945 37.3789 66.293 37.6914 66.293 38.1094V38.6602H67.5879V39.498H66.293V45H65.2031ZM69.7207 45H68.6309V38.6602H69.7207V45ZM74.5488 39.6328C74.3848 39.6055 74.207 39.5918 74.0156 39.5918C73.3047 39.5918 72.8223 39.8945 72.5684 40.5V45H71.4844V38.6602H72.5391L72.5566 39.3926C72.9121 38.8262 73.416 38.543 74.0684 38.543C74.2793 38.543 74.4395 38.5703 74.5488 38.625V39.6328ZM79.2422 43.3184C79.2422 43.0254 79.1309 42.7988 78.9082 42.6387C78.6895 42.4746 78.3047 42.334 77.7539 42.2168C77.207 42.0996 76.7715 41.959 76.4473 41.7949C76.127 41.6309 75.8887 41.4355 75.7324 41.209C75.5801 40.9824 75.5039 40.7129 75.5039 40.4004C75.5039 39.8809 75.7227 39.4414 76.1602 39.082C76.6016 38.7227 77.1641 38.543 77.8477 38.543C78.5664 38.543 79.1484 38.7285 79.5938 39.0996C80.043 39.4707 80.2676 39.9453 80.2676 40.5234H79.1777C79.1777 40.2266 79.0508 39.9707 78.7969 39.7559C78.5469 39.541 78.2305 39.4336 77.8477 39.4336C77.4531 39.4336 77.1445 39.5195 76.9219 39.6914C76.6992 39.8633 76.5879 40.0879 76.5879 40.3652C76.5879 40.627 76.6914 40.8242 76.8984 40.957C77.1055 41.0898 77.4785 41.2168 78.0176 41.3379C78.5605 41.459 79 41.6035 79.3359 41.7715C79.6719 41.9395 79.9199 42.1426 80.0801 42.3809C80.2441 42.6152 80.3262 42.9023 80.3262 43.2422C80.3262 43.8086 80.0996 44.2637 79.6465 44.6074C79.1934 44.9473 78.6055 45.1172 77.8828 45.1172C77.375 45.1172 76.9258 45.0273 76.5352 44.8477C76.1445 44.668 75.8379 44.418 75.6152 44.0977C75.3965 43.7734 75.2871 43.4238 75.2871 43.0488H76.3711C76.3906 43.4121 76.5352 43.7012 76.8047 43.916C77.0781 44.127 77.4375 44.2324 77.8828 44.2324C78.293 44.2324 78.6211 44.1504 78.8672 43.9863C79.1172 43.8184 79.2422 43.5957 79.2422 43.3184ZM83.209 37.125V38.6602H84.3926V39.498H83.209V43.4297C83.209 43.6836 83.2617 43.875 83.3672 44.0039C83.4727 44.1289 83.6523 44.1914 83.9062 44.1914C84.0312 44.1914 84.2031 44.168 84.4219 44.1211V45C84.1367 45.0781 83.8594 45.1172 83.5898 45.1172C83.1055 45.1172 82.7402 44.9707 82.4941 44.6777C82.248 44.3848 82.125 43.9688 82.125 43.4297V39.498H80.9707V38.6602H82.125V37.125H83.209ZM89.666 38.6602L89.7012 39.457C90.1855 38.8477 90.8184 38.543 91.5996 38.543C92.9395 38.543 93.6152 39.2988 93.627 40.8105V45H92.543V40.8047C92.5391 40.3477 92.4336 40.0098 92.2266 39.791C92.0234 39.5723 91.7051 39.4629 91.2715 39.4629C90.9199 39.4629 90.6113 39.5566 90.3457 39.7441C90.0801 39.9316 89.873 40.1777 89.7246 40.4824V45H88.6406V38.6602H89.666ZM94.9746 41.7715C94.9746 41.1504 95.0957 40.5918 95.3379 40.0957C95.584 39.5996 95.9238 39.2168 96.3574 38.9473C96.7949 38.6777 97.293 38.543 97.8516 38.543C98.7148 38.543 99.4121 38.8418 99.9434 39.4395C100.479 40.0371 100.746 40.832 100.746 41.8242V41.9004C100.746 42.5176 100.627 43.0723 100.389 43.5645C100.154 44.0527 99.8164 44.4336 99.375 44.707C98.9375 44.9805 98.4336 45.1172 97.8633 45.1172C97.0039 45.1172 96.3066 44.8184 95.7715 44.2207C95.2402 43.623 94.9746 42.832 94.9746 41.8477V41.7715ZM96.0645 41.9004C96.0645 42.6035 96.2266 43.168 96.5508 43.5938C96.8789 44.0195 97.3164 44.2324 97.8633 44.2324C98.4141 44.2324 98.8516 44.0176 99.1758 43.5879C99.5 43.1543 99.6621 42.5488 99.6621 41.7715C99.6621 41.0762 99.4961 40.5137 99.1641 40.084C98.8359 39.6504 98.3984 39.4336 97.8516 39.4336C97.3164 39.4336 96.8848 39.6465 96.5566 40.0723C96.2285 40.498 96.0645 41.1074 96.0645 41.9004ZM103.576 37.125V38.6602H104.76V39.498H103.576V43.4297C103.576 43.6836 103.629 43.875 103.734 44.0039C103.84 44.1289 104.02 44.1914 104.273 44.1914C104.398 44.1914 104.57 44.168 104.789 44.1211V45C104.504 45.0781 104.227 45.1172 103.957 45.1172C103.473 45.1172 103.107 44.9707 102.861 44.6777C102.615 44.3848 102.492 43.9688 102.492 43.4297V39.498H101.338V38.6602H102.492V37.125H103.576ZM108.662 45.1172C107.803 45.1172 107.104 44.8359 106.564 44.2734C106.025 43.707 105.756 42.9512 105.756 42.0059V41.8066C105.756 41.1777 105.875 40.6172 106.113 40.125C106.355 39.6289 106.691 39.2422 107.121 38.9648C107.555 38.6836 108.023 38.543 108.527 38.543C109.352 38.543 109.992 38.8145 110.449 39.3574C110.906 39.9004 111.135 40.6777 111.135 41.6895V42.1406H106.84C106.855 42.7656 107.037 43.2715 107.385 43.6582C107.736 44.041 108.182 44.2324 108.721 44.2324C109.104 44.2324 109.428 44.1543 109.693 43.998C109.959 43.8418 110.191 43.6348 110.391 43.377L111.053 43.8926C110.521 44.709 109.725 45.1172 108.662 45.1172ZM108.527 39.4336C108.09 39.4336 107.723 39.5938 107.426 39.9141C107.129 40.2305 106.945 40.6758 106.875 41.25H110.051V41.168C110.02 40.6172 109.871 40.1914 109.605 39.8906C109.34 39.5859 108.98 39.4336 108.527 39.4336Z",fill:"black"}}),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M58.6192 24L50.5459 32.1999L47.3545 28.95L45.9737 30.35L50.5459 35L60 25.4001L58.6192 24ZM54.6664 33.0943L56.5459 35L66 25.4001L64.6192 24L56.5459 32.1999L56.0462 31.6932L54.6664 33.0943Z",fill:"black"}}),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M62.4374 2C63.0921 2 63.7197 2.26142 64.1781 2.72342L67.279 5.82432C67.7407 6.286 68.0001 6.91217 68.0001 7.56508C68.0001 8.21799 67.7407 8.84416 67.279 9.30584L55.9575 20.6238C55.259 21.4295 54.2689 21.9245 53.1346 22.0023H48V21.0023L48.0032 16.7873C48.0884 15.7328 48.5787 14.7523 49.3265 14.0934L60.6954 2.72463C61.1564 2.26083 61.7834 2 62.4374 2ZM53.064 20.0048C53.5982 19.967 54.0955 19.7184 54.4948 19.2616L62.0567 11.6997L58.3023 7.94519L50.6961 15.5496C50.291 15.9079 50.0403 16.4092 50 16.8678V20.0029L53.064 20.0048ZM59.7167 6.53115L63.4709 10.2855L65.8648 7.89162C65.9514 7.80502 66.0001 7.68756 66.0001 7.56508C66.0001 7.4426 65.9514 7.32514 65.8648 7.23854L62.7611 4.13486C62.6755 4.04855 62.5589 4 62.4374 4C62.3158 4 62.1992 4.04855 62.1136 4.13486L59.7167 6.53115Z",fill:"black"}})])},W=[],J={},U=Object(d["a"])(J,R,W,!1,null,null,null),Y=U.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{app:"",color:"purple darken-4"}},[o("div",{staticClass:"d-flex align-center"},[o("h2",{staticClass:"logo-name white--text"},[t._v("Kirsh Note")])]),o("v-spacer"),o("v-btn",{staticClass:"purple lighten-5",on:{click:function(e){return e.stopPropagation(),t.editorModal(null)}}},[t._v(" Create note ")])],1)},q=[],z={name:"Header",methods:Object(a["a"])({},Object(s["d"])(["editorModal"]))},Q=z,X=o("40dc"),tt=o("2fa4"),et=Object(d["a"])(Q,K,q,!1,null,null,null),ot=et.exports;h()(et,{VAppBar:X["a"],VBtn:p["a"],VSpacer:tt["a"]});var nt={name:"App",components:{Header:ot,ModalWindow:H,AlertError:Z,ListNotes:F,GreetingIcon:Y},computed:Object(a["a"])(Object(a["a"])({},Object(s["c"])(["allNotes"])),Object(s["b"])(["GET_DATA"])),mounted:function(){this.GET_DATA}},rt=nt,lt=(o("5c0b"),o("7496")),at=o("f6c4"),it=Object(d["a"])(rt,r,l,!1,null,null,null),ct=it.exports;h()(it,{VApp:lt["a"],VMain:at["a"]});var st={notes:[],dialog:!1,alertNoteError:!1,greetingAlert:!0,singleNote:null},Ct={allNotes:function(t){return t.notes}},ut=(o("96cf"),o("1da1")),dt=o("bc3a"),ft=o.n(dt),ht={GET_DATA:function(){var t=Object(ut["a"])(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,ft.a.get("http://localhost:3000/notes/").then((function(t){return o("GET_API_DATA",t.data),t})).catch((function(t){return console.log(t),t}));case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),createNewNote:function(t,e){var o=t.commit;o("create_note",e)},deleteNote:function(t,e){var o=t.commit;o("delete_note",e)},updateNote:function(t,e){var o=t.commit;o("update_note",e)}},pt=(o("4de4"),o("4160"),o("159b"),function(t,e){t.notes=e}),vt=function(t,e){var o=e.id,n=e.title,r=e.content,l=e.colorNote;return ft.a.post("http://localhost:3000/notes/",{id:o,title:n,content:r,colorNote:l}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)})),""!==e?t.notes.push(e):null},Vt=function(t,e){var o=e.id;t.notes=t.notes.filter((function(t){return t.id!==o})),ft.a.delete("http://localhost:3000/notes/".concat(o)).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))},bt=function(t,e){return t.dialog=!0,t.singleNote=e},Nt=function(t){return t.dialog=!1,t.singleNote=null},gt=function(t){t.alertNoteError=!0},mt=function(t){t.alertNoteError=!1},Ht=function(t){null===t.notes.length&&(t.greetingAlert=!1)},_t=function(t,e){var o=e.id,r=e.title,l=e.content,a=e.colorNote;t.notes.forEach((function(i,c){i.id===e.id&&(n["a"].set(t.notes,c,e),ft.a.patch("http://localhost:3000/notes/".concat(o),{id:o,title:r,content:l,colorNote:a}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)})))})),t.dialog=!1},Mt={GET_API_DATA:pt,create_note:vt,delete_note:Vt,hideModal:Nt,showError:gt,hideError:mt,hideGreetingAlert:Ht,editorModal:bt,update_note:_t};n["a"].use(s["a"]);var wt=new s["a"].Store({state:st,getters:Ct,actions:ht,mutations:Mt}),Lt=o("f309");n["a"].use(Lt["a"]);var xt=new Lt["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:wt,vuetify:xt,render:function(t){return t(ct)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"9c0c":function(t,e,o){}});
//# sourceMappingURL=app.52fc2083.js.map