(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b283"],{"17f6":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("template",{slot:"header"},[a("el-row",[a("el-col",{staticStyle:{"margin-right":"10px"},attrs:{span:24}},[a("el-alert",{attrs:{title:"用户管理",type:"info",closable:!1}})],1),a("el-col",{attrs:{span:5}})],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{prop:"name",label:"用户名",width:"180"}}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"180"}}),a("el-table-column",{attrs:{prop:"role[0].display_name",label:"权限",width:"180"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别 0 == 女 | 1 == 男 "}}),a("el-table-column",{attrs:{prop:"email",label:"email"}})],1),a("el-row",{staticStyle:{height:"80px"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-col",{attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":10,total:e.checked},on:{"current-change":e.page}})],1)],1)],2)},n=[],o=(a("7f7f"),a("ac6a"),a("cadf"),a("551c"),a("92d5")),i=a("4328"),r=a.n(i),s={name:"role",data:function(){return{num:10,value3:"",state1:"",checked:0,pages:1,centerDialogVisible:!1,multipleSelection:[],tableData:[],textarea:"",form:{name:"",region:"",textarea:""}}},methods:{querySearch:function(e,t){var a=this.restaurants,l=e?a.filter(this.createFilter(e)):a;t(l)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e){console.log(e)},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},page:function(e){this.pages=e,this.initrole()},handleSelectionChange:function(e){console.log(e),this.multipleSelection=e},addrole:function(){this.centerDialogVisible=!0},onSubmit:function(){var e=this;if(console.log("submit!"),""!=this.form.name)if(""!=this.form.region){var t=r.a.stringify({name:this.form.name,display_name:this.form.region,description:this.form.textarea});Object(o["h"])(t).then(function(t){if(console.log(t),t.status){var a="";for(var l in t.data.errors)console.log(l),a+=t.data.errors[l][0]+" ";e.$message({message:t.status+" "+a,center:!0,type:"error"})}else;}),console.log(this.form)}else this.$message({message:"请选择用户身份",center:!0,type:"error"});else this.$message({message:"请输入用户姓名",center:!0,type:"error"})},initrole:function(){var e=this,t={page:this.pages,limit:10};Object(o["I"])(t).then(function(t){console.log(t),e.tableData=t.data.data,e.checked=t.data.paginate.total})},selec:function(e){console.log(e)}},mounted:function(){this.initrole()},watch:{}},c=s,u=(a("e2a5"),a("2877")),p=Object(u["a"])(c,l,n,!1,null,null,null);t["default"]=p.exports},9560:function(e,t,a){},e2a5:function(e,t,a){"use strict";var l=a("9560"),n=a.n(l);n.a}}]);
//# sourceMappingURL=chunk-b283.b5c2fd72.js.map