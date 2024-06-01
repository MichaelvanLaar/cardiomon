(function(){"use strict";function i(r,t,e,s,a,c,u,Rt){var n=typeof r=="function"?r.options:r;t&&(n.render=t,n.staticRenderFns=e,n._compiled=!0),s&&(n.functional=!0),c&&(n._scopeId="data-v-"+c);var l;if(u?(l=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__<"u"&&(o=__VUE_SSR_CONTEXT__),a&&a.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(u)},n._ssrRegister=l):a&&(l=Rt?function(){a.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(n.functional){n._injectStyles=l;var Yt=n.render;n.render=function(jt,h){return l.call(h),Yt(jt,h)}}else{var _=n.beforeCreate;n.beforeCreate=_?[].concat(_,l):[l]}return{exports:r,options:n}}const d={props:{data:[Object,Array],stats:[Boolean,Array],tab:String,tabs:Array,timespan:Object}},m={mixins:[d]};var v=function(){var t=this,e=t._self._c;return e("k-panel-inside",{staticClass:"k-retour-view"},[e("k-header",{scopedSlots:t._u([{key:"buttons",fn:function(){return[t.stats?e("k-retour-timespan",{attrs:{timespan:t.timespan}}):t._t("buttons")]},proxy:!0}])},[t._v(" "+t._s(t.$t("view.retour"))+" ")]),t.stats?[e("k-retour-stats",{attrs:{data:t.stats,timespan:t.timespan}}),e("k-retour-tabs",{attrs:{tab:t.tab,tabs:t.tabs}},[t._t("buttons")],2)]:t._e(),t._t("default")],2)},$=[],b=i(m,v,$,!1,null,null,null,null);const y=b.exports,k={mixins:[d],data(){return{searching:!1,q:null,sortDirection:"asc",pagination:{page:1,limit:20}}},computed:{buttons(){return[]},columns(){return{}},empty(){return{}},filteredItems(){let r=this.data;return this.q&&(r=r.filter(t=>JSON.stringify(t).toLowerCase().includes(this.q.toLowerCase()))),r},index(){return(this.pagination.page-1)*this.pagination.limit+1},paginatedItems(){return this.sortedItems.slice(this.index-1,this.pagination.limit*this.pagination.page)},sortedItems(){return this.sortBy?this.$helper.array.sortBy(this.$helper.object.clone(this.filteredItems),`${this.sortBy} ${this.sortDirection}`):this.filteredItems}},methods:{id(r){return encodeURIComponent(r.replace(/\//g,""))},onCell(){},onHeader({columnIndex:r}){this.sortBy===r?this.sortDirection==="desc"?r=null:this.sortDirection="desc":this.sortDirection="asc",this.sortBy=r,this.pagination.page=1},options(){return[]},async toggleSearch(r=!1){if(r&&this.q){this.q=null;return}this.q=null,this.searching=!this.searching,this.searching&&(await this.$nextTick(),this.$refs.search.focus())}}};var g=function(){var t=this,e=t._self._c;return e("k-retour-view",t._b({staticClass:"k-retour-collection-view",scopedSlots:t._u([{key:"buttons",fn:function(){return[t.stats?t._e():e("k-button",{attrs:{icon:"heart",link:"https://paypal.me/distantnative",size:"sm",theme:"positive",variant:"filled"}},[t._v(" "+t._s(t.$t("retour.system.support"))+" ")]),t.searching?e("k-search-input",{ref:"search",staticClass:"k-models-section-search k-input",attrs:{autofocus:!0,placeholder:t.$t("filter")+" …",value:t.q},on:{input:function(s){t.q=s,t.pagination.page=1}},nativeOn:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"esc",27,s.key,["Esc","Escape"])?null:t.toggleSearch(!0)}}}):t._e(),e("k-button",{attrs:{title:t.$t("filter"),icon:"filter",size:"sm",variant:"filled"},on:{click:t.toggleSearch}}),t._l(t.buttons,function(s,a){return e("k-button",t._b({key:a,attrs:{size:"sm",variant:"filled"}},"k-button",s,!1))})]},proxy:!0}])},"k-retour-view",t.$props,!1),[t.filteredItems.length===0?e("k-empty",t._b({attrs:{layout:"table"}},"k-empty",t.empty,!1)):e("k-table",{attrs:{columns:t.columns,index:t.index,rows:t.paginatedItems},on:{cell:t.onCell,header:t.onHeader},scopedSlots:t._u([{key:"header",fn:function({columnIndex:s,label:a}){return[e("span",[t._v(" "+t._s(a)+" "),s===t.sortBy?e("k-icon",{attrs:{type:t.sortDirection==="asc"?"angle-up":"angle-down"}}):t._e()],1)]}},{key:"options",fn:function({row:s}){return[e("k-options-dropdown",{attrs:{options:t.options(s)}})]}}])}),e("footer",{staticClass:"k-bar k-collection-footer"},[e("k-pagination",t._b({attrs:{details:!0,total:t.filteredItems.length},on:{paginate:function(s){t.pagination.page=s.page}}},"k-pagination",t.pagination,!1))],1)],1)},C=[],w=i(k,g,C,!1,null,null,null,null);const p=w.exports;var x=i({extends:p,data(){return{sortBy:null}},computed:{buttons(){return[{icon:"add",text:this.$t("add"),click:()=>this.$drawer("retour/redirects/create")}]},columns(){return{from:{label:this.$t("retour.redirects.from"),type:"path",width:"7/20",mobile:!0},to:{label:this.$t("retour.redirects.to"),type:"link",width:"7/20"},status:{label:this.$t("retour.redirects.status"),type:"status",width:"1/10"},priority:{label:this.$t("retour.redirects.priority.abbr"),type:"priority",width:"1/10"},hits:{label:this.$t("retour.hits"),width:"1/10",type:"count"}}},empty(){return{icon:"shuffle",text:this.$t("retour.redirects.empty")}}},methods:{onCell({row:r,columnIndex:t}){this.$drawer(`retour/redirects/${this.id(r.from)}/edit`,{query:{column:t}})},options(r){return[{text:this.$t("edit"),icon:"edit",click:()=>this.$drawer(`retour/redirects/${this.id(r.from)}/edit`)},{text:this.$t("remove"),icon:"trash",click:()=>this.$dialog(`retour/redirects/${this.id(r.from)}/delete`)}]}}},null,null,!1,null,null,null,null);const M=x.exports;var L=i({extends:p,data(){return{sortBy:"hits",sortDirection:"desc"}},computed:{buttons(){return[{icon:"trash",text:this.$t("retour.failures.clear"),click:()=>this.$dialog("retour/failures/flush")}]},columns(){return{path:{label:this.$t("retour.failures.path"),type:"path",width:"1/3",mobile:!0},referrer:{label:this.$t("retour.failures.referrer"),type:"path",width:"1/3"},last:{label:this.$t("retour.last"),type:"date",display:"D MMM YYYY, HH:mm:ss",width:"2/8"},hits:{label:this.$t("retour.hits"),type:"count",width:"1/16",align:"right"}}},empty(){return{icon:"cloud-off",text:this.$t("retour.failures.empty")}}},methods:{options(r){return[{text:this.$t("retour.failures.resolve"),icon:"add",click:()=>this.$drawer(`retour/failures/${this.id(r.path)}/resolve`)},{text:this.$t("remove"),icon:"trash",click:()=>this.$dialog(`retour/failures/${this.id(r.path)}/delete`)}]}}},null,null,!1,null,null,null,null);const F=L.exports,O={mixins:[d],computed:{reports(){return[{label:this.$t("retour.system.redirects"),value:String(this.data.redirects),icon:"shuffle"},{label:this.$t("retour.system.failures"),value:String(this.data.failures),icon:"cloud-off"},{label:this.$t("retour.system.deleteAfter"),value:this.$t("retour.system.deleteAfter.months",{count:this.data.deleteAfter}),icon:"trash"}]}}};var R=function(){var t=this,e=t._self._c;return e("k-retour-view",t._b({staticClass:"k-retour-system-view",scopedSlots:t._u([{key:"buttons",fn:function(){return[e("k-button",{attrs:{link:"https://paypal.me/distantnative",icon:"heart",size:"sm",target:"_blank",theme:"positive",variant:"filled"}},[t._v(" "+t._s(t.$t("retour.system.support"))+" ")])]},proxy:!0}])},"k-retour-view",t.$props,!1),[e("k-stats",{attrs:{reports:t.reports,size:"huge"}}),e("k-text",{staticClass:"k-help",attrs:{html:t.$t("retour.system.docs",{docs:"https://github.com/distantnative/retour-for-kirby"})}})],1)},Y=[],j=i(O,R,Y,!1,null,null,null,null);const S=j.exports,D={props:{data:Array},computed:{gradient(){let r="",t=0;const e=this.total/180;for(let s=0;s<this.data.length;s++)r+=`${this.data[s].color} ${t}deg,`,t+=this.data[s].data/e,r+=`${this.data[s].color} ${t}deg,`;return r+="transparent 180deg",r},icons(){return["shuffle","check-double","cloud-off"]},total(){return this.data.reduce((r,t)=>r+=t.data,0)}}};var A=function(){var t=this,e=t._self._c;return e("figure",{staticClass:"chart-pie"},[e("div",{staticClass:"graph",style:"--gradient: "+t.gradient}),e("figcaption",[t._l(t.data,function(s,a){return[e("k-icon",{key:s.label+"-icon",style:"--color:"+s.color,attrs:{type:t.icons[a]}}),e("span",{key:s.label+"-no"},[t._v(" "+t._s(new Intl.NumberFormat().format(s.data))+" ")]),e("span",{key:s.label+"-label"},[t._v(" "+t._s(s.label)+" ")])]})],2)])},z=[],q=i(D,A,z,!1,null,null,null,null);const B=q.exports,P={props:{data:Array,timespan:Object},computed:{axisY(){const r=this.max/5;return[1,2,3,4,5].map(t=>{let e=t*r;return e>=1e3&&(e=Math.floor(e/100)/10+"k"),e})},format(){return{day:"HH",week:"ddd",month:"D",year:"MMM",months:"MMM YY"}[this.timespan.unit]??"D MMM"},subunit(){return{day:"hour",year:"month"}[this.timespan.unit]??"day"},max(){let r=Math.max(...this.data.map(t=>t.areas.reduce((e,s)=>e+=s.data,0)));if(r>0){const t=r.toString().length,e=Math.pow(10,t)/4;return Math.ceil(r*1.1/e)*e}return 5}},methods:{bounds(r,t){const e=r.areas.slice(0,t).reduce((s,a)=>s+=a.data,0);return{path:e+r.areas[t].data,mask:e}},clip(r,t){let e=this.bounds(this.data[r],t),s={path:0,mask:0};return this.data[r+1]&&(s=this.bounds(this.data[r+1],t)),`--p0: ${e.path/this.max}; --p1: ${s.path/this.max}; --m0: ${e.mask/this.max}; --m1: ${s.mask/this.max};`},color(r,t){const e=this.data[r+1];if(e){const s=this.$library.dayjs(e.label),a=this.$library.dayjs();if(s.isAfter(a,this.subunit))return"transparent"}return t.color},isCurrent(r){const t=this.$library.dayjs();return this.$library.dayjs(r.label).isSame(t,this.subunit)},label(r){return this.$library.dayjs(r.label).format(this.format)},zoom(r){const t=this.$library.dayjs(r.label);this.$reload({query:{from:t.startOf(this.subunit).format("YYYY-MM-DD"),to:t.endOf(this.subunit).format("YYYY-MM-DD")}})}}};var Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"chart-areas"},[e("table",[e("thead",[e("tr",t._l(t.axisY,function(s){return e("th",{key:s},[t._v(" "+t._s(s)+" ")])}),0)]),e("tbody",t._l(t.data,function(s,a){return e("tr",{key:a,on:{dblclick:function(c){return t.zoom(s)}}},t._l(s.areas,function(c,u){return e("td",{key:a+"_"+u,style:`--color: ${t.color(a,c)}; ${t.clip(a,u)}`})}),0)}),0),e("tfoot",{attrs:{"data-less":t.data.length>31}},t._l(t.data,function(s){return e("tr",{key:s.label,attrs:{"data-current":t.isCurrent(s)},on:{dblclick:function(a){return t.zoom(s)}}},[e("td",[t._v(t._s(t.label(s)))])])}),0)])])},H=[],T=i(P,Z,H,!1,null,null,null,null);const I=T.exports,V={components:{Pie:B,Timeline:I},props:{data:Array,timespan:Object},computed:{areas(){return this.data.map(r=>({label:r.date,areas:[{data:r.redirected,color:"var(--color-blue-600)"},{data:r.resolved,color:"var(--color-gray-300)"},{data:r.failed,color:"var(--color-red-600)"}]}))},pie(){return[{data:this.data.reduce((r,t)=>r+=t.redirected,0),color:"var(--color-blue-600)",label:this.$t("retour.stats.redirected")},{data:this.data.reduce((r,t)=>r+=t.resolved,0),color:"var(--color-gray-300)",label:this.$t("retour.stats.resolved")},{data:this.data.reduce((r,t)=>r+=t.failed,0),color:"var(--color-red-600)",label:this.$t("retour.stats.failed")}]}}};var N=function(){var t=this,e=t._self._c;return e("section",{staticClass:"k-retour-stats"},[e("pie",{attrs:{data:t.pie}}),e("timeline",{attrs:{data:t.areas,timespan:t.timespan}})],1)},U=[],E=i(V,N,U,!1,null,null,null,null);const W=E.exports,X={props:{tab:String,tabs:Array}};var J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"k-retour-tabs",attrs:{"data-end":t.tabs.length<2}},[e("k-tabs",{attrs:{tab:t.tab,tabs:t.tabs}}),e("k-button-group",[t._t("default")],2)],1)},G=[],K=i(X,J,G,!1,null,null,null,null);const Q=K.exports,tt={props:{timespan:Object},computed:{dropdown(){return[...this.units.map(r=>{if(!(r==="all"&&!this.timespan.hasAll))return{text:this.$t("retour.stats.mode."+r),icon:this.icon(r),current:this.isCurrentUnit(r),click:()=>this.set(r)}}),"-",{text:this.$t("retour.timespan.today.label"),icon:"merge",click:()=>this.set("today")},{text:this.$t("retour.timespan.set.label"),icon:"calendar",click:()=>this.$dialog("retour/timespan")}].filter(Boolean)},units(){return["all","year","month","day"]}},methods:{icon(r){return this.isCurrentUnit(r)===!0?this.timespan.isCurrent?"circle-focus":"circle-nested":"circle"},isCurrentUnit(r){return r===this.timespan.unit||r==="all"&&this.timespan.isAll},navigate(r){const t=this.timespan.unit,e=this.$library.dayjs(this.timespan.from),s=this.$library.dayjs(this.timespan.to);this.update({from:e[r](1,t).startOf(t),to:s[r](1,t).endOf(t)})},set(r){if(r==="all")return this.update({from:this.$library.dayjs(this.timespan.first),to:this.$library.dayjs(this.timespan.last)});let t=this.$library.dayjs(this.timespan.from);(r===this.timespan.unit||r==="today")&&(r=this.timespan.unit,t=this.$library.dayjs()),this.update({from:t.startOf(r),to:t.endOf(r)})},update({from:r,to:t}){this.$reload({query:{from:r.format("YYYY-MM-DD"),to:t.format("YYYY-MM-DD")}})}}};var et=function(){var t=this,e=t._self._c;return e("k-button-group",{staticClass:"k-retour-timespan",attrs:{layout:"collapsed"}},[e("k-button",{attrs:{dropdown:!0,text:t.timespan.label,icon:"calendar",size:"sm",variant:"filled"},on:{click:function(s){return t.$refs.units.toggle()}}}),e("k-dropdown-content",{ref:"units",attrs:{options:t.dropdown,"align-x":"end"}}),e("k-button",{attrs:{icon:"angle-left",size:"sm",variant:"filled",disabled:!t.timespan.hasPrev||t.timespan.isAll},on:{click:function(s){return t.navigate("subtract")}}}),e("k-button",{attrs:{disabled:!t.timespan.hasNext||t.timespan.isAll,icon:"angle-right",size:"sm",variant:"filled"},on:{click:function(s){return t.navigate("add")}}})],1)},rt=[],st=i(tt,et,rt,!1,null,null,null,null);const at=st.exports,it={props:{row:Object},computed:{title(){return this.$t("retour.hits.last")+": "+(this.row.last??"-")}}};var nt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"k-count-preview-field",attrs:{title:t.title}},[t.row.hits>0?[t._v(" "+t._s(t.row.hits)+" "),e("k-icon",{attrs:{title:t.title,type:"clock"}})]:e("p",[t._v("–")])],2)},ot=[],lt=i(it,nt,ot,!1,null,null,null,null);const ct=lt.exports,ut={props:{column:{type:Object,default:()=>({})},field:Object,value:[String,Object]},computed:{isExternal(){return this.value&&this.value.startsWith("http")},link(){return this.isExternal?this.value:window.panel.$urls.site+"/"+this.value}}};var dt=function(){var t=this,e=t._self._c;return e("p",{staticClass:"k-text k-url-field-preview k-path-field-preview"},[e("k-link",{attrs:{to:t.link,title:`${t.column.label}: ${t.value}`,target:"_blank"},nativeOn:{click:function(s){s.stopPropagation()}}},[e("span",[t._v(t._s(t.value))])])],1)},pt=[],ft=i(ut,dt,pt,!1,null,null,null,null);const _t=ft.exports,ht={props:{value:Boolean,column:Object}};var mt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"k-priority-field-preview"},[t.value?e("k-icon",{attrs:{type:"bolt",title:t.column.label}}):e("p",[t._v("–")])],1)},vt=[],$t=i(ht,mt,vt,!1,null,null,null,null);const bt=$t.exports,f={computed:{color(){return this.value?parseInt(this.value)>=400?"var(--color-red-500)":parseInt(this.value)>=300?"var(--color-green-500)":"var(--color-blue-500)":"var(--color-gray-400)"}}},yt={mixins:[f],props:{value:Number,row:Object,column:Object}};var kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"k-text k-status-field-preview",attrs:{title:`${t.column.label}: ${t.value}`}},[e("k-icon",{style:"color: "+t.color,attrs:{type:"circle-filled"}}),e("code",[t._v(t._s(t.value))])],1)},gt=[],Ct=i(yt,kt,gt,!1,null,null,null,null);const wt=Ct.exports,xt={extends:"k-select-field",mixins:[f]};var Mt=function(){var t=this,e=t._self._c;return e("k-field",t._b({class:["k-select-field",t.$attrs.class],attrs:{input:t.id}},"k-field",t.$props,!1),[e("k-input",t._b({ref:"input",attrs:{type:"select"},on:{input:function(s){return t.$emit("input",s)}},scopedSlots:t._u([{key:"before",fn:function(){return[e("k-icon",{attrs:{type:"circle-filled",color:t.color}})]},proxy:!0}])},"k-input",t.$props,!1))],1)},Lt=[],Ft=i(xt,Mt,Lt,!1,null,null,null,null);const Ot=Ft.exports;panel.plugin("distantnative/retour",{components:{"k-count-field-preview":ct,"k-path-field-preview":_t,"k-priority-field-preview":bt,"k-status-field-preview":wt,"k-retour-stats":W,"k-retour-tabs":Q,"k-retour-timespan":at,"k-retour-view":y,"k-retour-redirects-view":M,"k-retour-failures-view":F,"k-retour-system-view":S},fields:{"retour-status":Ot},icons:{"circle-focus":'<path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path>',"check-double":'<path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>',"cloud-off":'<path d="M3.51472 2.10051L22.6066 21.1924L21.1924 22.6066L19.1782 20.5924C18.503 20.8556 17.7684 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 8.22228 5.12683 7.47418 5.36094 6.77527L2.10051 3.51472L3.51472 2.10051ZM7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C17.1858 19 17.3687 18.9873 17.5478 18.9628L7.03043 8.44519C7.01032 8.62736 7 8.81247 7 9ZM12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 16.0883 22.7103 17.1089 22.2037 17.9889L20.7111 16.4955C20.8974 16.0335 21 15.5287 21 15C21 12.79 19.21 11 17 11C16.4711 11 15.9661 11.1027 15.5039 11.2892L14.0111 9.7964C14.8912 9.28978 15.9118 9 17 9C17 6.23858 14.7614 4 12 4C10.9295 4 9.93766 4.33639 9.12428 4.90922L7.69418 3.48056C8.88169 2.55284 10.3763 2 12 2Z"></path>'}})})();
