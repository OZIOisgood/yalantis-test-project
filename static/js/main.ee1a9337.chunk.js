(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{30:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(22),r=a.n(c),i=a(7),l=a(8),o=a(10),j=a(9),h=a(17),d=a(2),u=(a(30),a(0)),b=(s.Component,a(21)),p=a(18),m=a.n(p),O=a(23),f=a(14),v=a(25),x=a(11),y=(a(33),a.p+"static/media/loading.c61ecb2f.gif"),g=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state=JSON.parse(sessionStorage.getItem("state"))||{data:[],loading:!0,bigLetters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",monthNames:["December","January","February","March","April","May","June","July","August","September","October","November"],lang:"us-US",requestStr:"/task0/users"},e.onChangeValue=e.onChangeValue.bind(Object(f.a)(e)),e}return Object(l.a)(a,[{key:"setState",value:function(e){Object(v.a)(Object(x.a)(a.prototype),"setState",this).call(this,e),sessionStorage.setItem("state",JSON.stringify(this.state))}},{key:"updateData",value:function(){var e=Object(O.a)(m.a.mark((function e(t){var a,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://yalantis-react-school-api.yalantis.com/api",e.next=3,fetch("".concat("https://yalantis-react-school-api.yalantis.com/api").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:(s=e.sent).forEach((function(e){return e.active=!1})),this.setState({data:s,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeValue",value:function(e){var t=this.state.data,a=t.find((function(t){return t.id===e.target.name}));a.active=!a.active,this.setState({data:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,s=(t.monthNames,t.bigLetters),n=(t.lang,t.requestStr);if(this.state.loading&&this.updateData(n),this.state.loading)return Object(u.jsxs)("div",{className:"employeesBlock",children:[Object(u.jsx)("h1",{children:"Employees page"}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"loading-wrapper",children:Object(u.jsx)("img",{src:y,className:"loading",alt:"Loading gif"})})]});var c,r=a.sort((function(e,t){var a=e.firstName.toLowerCase(),s=t.firstName.toLowerCase();return a<s?-1:a>s?1:0})),i=[],l=Object(b.a)(s);try{var o=function(){var e=c.value;0===(j=r.filter((function(t){return e===t.firstName[0]}))).length&&(j="No Employees"),i.push({character:e,filteredEmployees:j})};for(l.s();!(c=l.n()).done;){var j;o()}}catch(d){l.e(d)}finally{l.f()}var h=i.map((function(t){var a=t.character,s=t.filteredEmployees,n=[];if("No Employees"===s)n.push(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h4",{className:"attention-color",children:"No Employees"})}));else{var c,r=Object(b.a)(s);try{for(r.s();!(c=r.n()).done;){var i=c.value,l=i.firstName,o=i.lastName,j=i.id,h=i.active,p=Object(u.jsx)(u.Fragment,{children:"".concat(l," ").concat(o)}),m=h?Object(u.jsxs)("div",{style:{color:"#0075FF"},children:[" ",p," "]}):Object(u.jsxs)(u.Fragment,{children:[" ",p," "]});n.push(Object(u.jsxs)("div",{className:"allEmployeesList-letterCard-employeesList-item",children:[m,Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"radio",value:"not active",name:j,checked:!h,onChange:e.onChangeValue})," ","not active ",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",value:"active",name:j,checked:h,onChange:e.onChangeValue})," ","active ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})]},j))}}catch(d){r.e(d)}finally{r.f()}}return Object(u.jsxs)("div",{className:"allEmployeesList-letterCard",children:[Object(u.jsx)("h3",{children:a}),Object(u.jsx)("div",{className:"allEmployeesList-letterCard-employeesList",children:n})]})}));return Object(u.jsxs)("div",{className:"employeesBlock",children:[Object(u.jsx)("h1",{children:"Employees page"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"allEmployeesList",children:[Object(u.jsx)("h2",{children:"Employees"}),Object(u.jsx)("div",{className:"letterCards-wrapper",children:h})]})]})}}]),a}(s.Component),N=g,C=(a(34),s.Component,a(35),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)(h.a,{children:Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsx)("main",{children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{exact:!0,path:"/",children:Object(u.jsx)(d.a,{to:"/employees"})}),Object(u.jsx)(d.b,{exact:!0,path:"/employees",children:Object(u.jsx)(N,{})}),Object(u.jsx)(d.b,{path:"*",children:Object(u.jsx)(N,{})})]})})})})}}]),a}(s.Component));r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ee1a9337.chunk.js.map