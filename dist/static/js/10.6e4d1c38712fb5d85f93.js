webpackJsonp([10],{hFSP:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("h4",{staticClass:"card-title"},[t._v("Table with Links")]),t._v(" "),a("p",{staticClass:"category"},[t._v("Here is a subtitle for this table")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("el-table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"Name"}}),t._v(" "),a("el-table-column",{attrs:{prop:"job",label:"Job Position"}}),t._v(" "),a("el-table-column",{attrs:{prop:"salary",label:"Salary"}}),t._v(" "),a("el-table-column",{attrs:{label:"Actions"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"td-actions"},[a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"View Profile",expression:"'View Profile'",modifiers:{"top-center":!0}}],staticClass:"btn btn-info btn-link btn-xs",attrs:{href:"#"},on:{click:function(a){t.handleLike(e.$index,e.row)}}},[a("i",{staticClass:"fa fa-user"})]),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Edit Profile",expression:"'Edit Profile'",modifiers:{"top-center":!0}}],staticClass:"btn btn-warning btn-link btn-xs",on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Delete",expression:"'Delete'",modifiers:{"top-center":!0}}],staticClass:"btn btn-danger btn-link btn-xs",on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[a("i",{staticClass:"fa fa-close"})])])}}])})],1)],1)])]),t._v(" "),a("card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("h4",{staticClass:"card-title"},[t._v("Table with Switches")]),t._v(" "),a("p",{staticClass:"category"},[t._v("With some subtitle")])]),t._v(" "),a("div",{staticClass:"row table-full-width"},[a("div",{staticClass:"col-sm-12"},[a("el-table",{staticClass:"table-striped",attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"Name"}}),t._v(" "),a("el-table-column",{attrs:{prop:"job",label:"Job Position"}}),t._v(" "),a("el-table-column",{attrs:{prop:"salary",label:"Salary"}}),t._v(" "),a("el-table-column",{attrs:{label:"Active"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("l-switch",{model:{value:e.row.active,callback:function(a){t.$set(e.row,"active",a)},expression:"props.row.active"}})]}}])})],1)],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("h4",{staticClass:"card-title"},[t._v("Table Big Boy")]),t._v(" "),a("p",{staticClass:"category"},[t._v("A table for content management")]),t._v(" "),a("br")]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("el-table",{staticClass:"table-bigboy",staticStyle:{width:"100%"},attrs:{data:t.productsTable}},[a("el-table-column",{attrs:{"min-width":"220",label:"THUMB"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return[a("div",{staticClass:"img-container"},[a("img",{attrs:{src:e.image,alt:"Agenda"}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"220",label:"BLOG TITLE"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("p",[t._v(t._s(i.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"180",label:"DESCRIPTION",prop:"description"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100",label:"DATE",prop:"date"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){e.row;return[a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"View Post",expression:"'View Post'",modifiers:{"top-center":!0}}],staticClass:"btn-success btn-simple btn-link"},[a("i",{staticClass:"fa fa-image"})]),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Edit",expression:"'Edit'",modifiers:{"top-center":!0}}],staticClass:"btn-info btn-simple btn-link"},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Delete",expression:"'Delete'",modifiers:{"top-center":!0}}],staticClass:"btn-danger btn-simple btn-link"},[a("i",{staticClass:"fa fa-times"})])]}}])})],1)],1)])],1)])],1)},l=[],s={render:i,staticRenderFns:l};e.a=s},kdHf:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"ExtendedTables.vue",sourceRoot:""}])},kvNc:function(t,e,a){"use strict";function i(t){a("xc7w")}Object.defineProperty(e,"__esModule",{value:!0});var l=a("pnxw"),s=a("hFSP"),o=a("VU/8"),n=i,r=o(l.a,s.a,!1,n,null,null);e.default=r.exports},pnxw:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l,s=a("zL8q"),o=(a.n(s),a("bhVK"));e.a={components:(l={LSwitch:o.a},i(l,s.Table.name,s.Table),i(l,s.TableColumn.name,s.TableColumn),l),data:function(){return{tableData:[{name:"Andrew Mike",job:"Develop",salary:"€ 99,225",active:!1},{name:"John Doe",job:"Design",salary:"€ 89,241",active:!1},{name:"Alex Mike",job:"Design",salary:"€ 92,144",active:!1},{name:"Mike Monday",job:"Marketing",salary:"€ 49,990",active:!0},{name:"Paul dickens",job:"Communication",salary:"€ 69,201",active:!0}],productsTable:[{image:"static/img/blog-1.jpg",title:"10 Things that all designers do",description:"Most beautiful agenda for the office, really nice paper and black cover. Most beautiful agenda for the office.",date:"30/08/2016",views:"1,225"},{image:"static/img/blog-2.jpg",title:"Back to School Offer",description:"Design is not just what it looks like and feels like. Design is how it works.",date:"17/07/2016",views:"49,302"},{image:"static/img/blog-3.jpg",title:"First Dribbble Meetup in Romania",description:"A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.",date:"23/06/2016",views:"1,799"},{image:"static/img/blog-4.jpg",title:"How we created our startup with 0$",description:"A desk is a generally wooded piece of furniture and a type of useful table often used in a school or office setting for various academic or professional activities ...",date:"30/08/2016",views:"23,030"},{image:"static/img/blog-5.jpg",title:"To use or not to use Bootstrap",description:"The Office Chair adapts naturally to virtually every body and is a permanent fixture.",date:"10/05/2016",views:"13,763"}]}},methods:{handleLike:function(t,e){alert("Your clicked on Like button")},handleEdit:function(t,e){alert("Your want to edit "+e.name)},handleDelete:function(t,e){alert("Your want to delete "+e.name)},getSummaries:function(t){var e=this,a=t.columns,i=[];return a.forEach(function(t,l){if(0===l)i[l]="Total";else if(l<a.length-1)i[l]="";else{var s=0;e.productsTable.forEach(function(t){s+=t.quantity*t.price}),i[l]="€ "+s}}),i}}}},xc7w:function(t,e,a){var i=a("kdHf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("79d579d9",i,!0,{})}});
//# sourceMappingURL=10.6e4d1c38712fb5d85f93.js.map