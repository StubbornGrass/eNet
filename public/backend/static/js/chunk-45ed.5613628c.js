(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ed"],{"2a93":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("d2-container",[o("template",{slot:"header"},[o("el-row",[o("el-col",{staticStyle:{"margin-right":"10px"},attrs:{span:3}},[o("el-alert",{attrs:{title:"商品二级类别管理",type:"info",closable:!1}})],1),o("el-col",{attrs:{span:5}},[o("el-button",{attrs:{type:"primary",plain:""},on:{click:e.add_good}},[e._v("添加")])],1)],1)],1),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[o("el-table-column",{attrs:{type:"index",width:"50"}}),o("el-table-column",{attrs:{prop:"goods_type_second_name",label:"商品类别名称",width:"180"}}),o("el-table-column",{attrs:{prop:"goods_type_second_desc",label:"商品类别描述"}}),o("el-table-column",{attrs:{prop:"goods_type_id.goods_type_name",label:"商品一级专区"}}),o("el-table-column",{attrs:{prop:"created_at",label:"开始时间"}}),o("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}}),o("el-table-column",{attrs:{label:"操作",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(o){e.edit_type(t.row)}}},[e._v("编辑")]),o("el-button",{attrs:{type:"danger",plain:""},on:{click:function(o){e.del_val(t.row)}}},[e._v("删除")])]}}])})],1),o("el-row",{staticStyle:{height:"80px"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[o("el-col",{attrs:{span:24}},[o("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":10,total:e.checked},on:{"current-change":e.page}})],1)],1),o("el-dialog",{attrs:{title:e.num,visible:e.centerDialogVisible,width:"30%",center:"","before-close":e.clear},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"商品类别名称"}},[o("el-input",{attrs:{placeholder:"请输入商品类别名称"},model:{value:e.form.goods_type_second_name,callback:function(t){e.$set(e.form,"goods_type_second_name",t)},expression:"form.goods_type_second_name"}})],1),o("el-form-item",{attrs:{label:"商品类别描述"}},[o("el-input",{attrs:{placeholder:"请输入商品类别描述"},model:{value:e.form.goods_type_second_desc,callback:function(t){e.$set(e.form,"goods_type_second_desc",t)},expression:"form.goods_type_second_desc"}})],1),o("el-form-item",{attrs:{label:"选择商品分区"}},[o("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.form.goods_type_id,callback:function(t){e.$set(e.form,"goods_type_id",t)},expression:"form.goods_type_id"}},e._l(e.listdata,function(e){return o("el-option",{key:e.id,attrs:{label:e.goods_type_name,value:e.id}})}))],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.clear}},[e._v("取 消")]),"编辑商品类别管理"!==e.num?o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确 定")]):e._e(),"编辑商品类别管理"==e.num?o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit_type}},[e._v("确 定")]):e._e()],1)],1)],2)},a=[],n=(o("cadf"),o("551c"),o("92d5")),i=o("6cf5"),l=o("4328"),c=o.n(l),r={name:"reclassify_home",data:function(){return{num:"",value3:"",state1:"",checked:0,tableData:[],listdata:[],dialogVisible:!1,pages:1,centerDialogVisible:!1,form:{goods_type_second_name:"",goods_type_second_desc:"",goods_type_id:""}}},methods:{querySearch:function(e,t){var o=this.restaurants,s=e?o.filter(this.createFilter(e)):o;t(s)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},add_good:function(){this.num="添加商品类别管理",this.centerDialogVisible=!0},onSubmit:function(){var e=this,t=c.a.stringify(this.form);Object(n["e"])(t).then(function(t){e.msg(t)})},edit_type:function(e){this.num="编辑商品类别管理",console.log(e),this.form={goods_type_second_name:e.goods_type_second_name,goods_type_second_desc:e.goods_type_second_desc,id:e.id,goods_type_id:e.goods_type_id.id},this.centerDialogVisible=!0},onSubmit_type:function(){var e=this,t={goods_type_second_name:this.form.goods_type_second_name,goods_type_second_desc:this.form.goods_type_second_desc,goods_type_id:this.form.goods_type_id},o=this.form.id;Object(n["B"])(t,o).then(function(t){e.msg(t)})},del_val:function(e){var t=this;console.log(e),Object(n["q"])(e.id).then(function(e){t.msg(e)})},page:function(e){console.log(e),this.pages=e,this.init_goods()},init_goods:function(){var e=this,t={page:this.pages,limit:10};Object(n["T"])(t).then(function(t){e.tableData=t.data.data,e.checked=t.data.paginate.total})},msg:function(e){if(e.code)return this.$message({message:e.message,center:!0,type:"success"}),this.clear(),void this.init_goods();Object(i["a"])(e,this)},clear:function(){this.centerDialogVisible=!1,this.form={goods_type_second_name:"",goods_type_second_desc:"",goods_type_id:""}}},mounted:function(){var e=this;this.init_goods(),Object(n["S"])().then(function(t){console.log(t),e.listdata=t.data})}},d=r,_=(o("3590"),o("2877")),p=Object(_["a"])(d,s,a,!1,null,null,null);t["default"]=p.exports},3590:function(e,t,o){"use strict";var s=o("903e"),a=o.n(s);a.a},"903e":function(e,t,o){}}]);
//# sourceMappingURL=chunk-45ed.5613628c.js.map