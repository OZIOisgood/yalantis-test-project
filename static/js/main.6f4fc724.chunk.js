(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{30:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(22),r=a.n(c),i=a(7),o=a(8),l=a(10),j=a(9),h=a(17),u=a(2),d=(a(30),a(0)),b=(s.Component,a(21)),m=a(18),p=a.n(m),O=a(23),f=a(14),v=a(25),x=a(11),y=(a(33),a.p+"static/media/loading.c61ecb2f.gif"),g=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state=JSON.parse(sessionStorage.getItem("state"))||{data:[],loading:!0,bigLetters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",monthNames:["December","January","February","March","April","May","June","July","August","September","October","November"],lang:"us-US",requestStr:"/task0/users"},e.onChangeValue=e.onChangeValue.bind(Object(f.a)(e)),e}return Object(o.a)(a,[{key:"setState",value:function(e){Object(v.a)(Object(x.a)(a.prototype),"setState",this).call(this,e),sessionStorage.setItem("state",JSON.stringify(this.state))}},{key:"updateData",value:function(){var e=Object(O.a)(p.a.mark((function e(t){var a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://yalantis-react-school-api.yalantis.com/api",e.next=3,fetch("".concat("https://yalantis-react-school-api.yalantis.com/api").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:(s=e.sent).forEach((function(e){return e.active=!1})),this.setState({data:s,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeValue",value:function(e){var t=this.state.data,a=t.find((function(t){return t.id===e.target.name}));a.active=!a.active,this.setState({data:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,s=(t.monthNames,t.bigLetters),n=(t.lang,t.requestStr);if(this.state.loading&&this.updateData(n),this.state.loading)return Object(d.jsxs)("div",{className:"employeesBlock",children:[Object(d.jsx)("h1",{children:"Employees page"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"loading-wrapper",children:Object(d.jsx)("img",{src:y,className:"loading",alt:"Loading gif"})})]});var c,r=a.sort((function(e,t){var a=e.firstName.toLowerCase(),s=t.firstName.toLowerCase();return a<s?-1:a>s?1:0})),i=[],o=Object(b.a)(s);try{var l=function(){var e=c.value;0===(j=r.filter((function(t){return e===t.firstName[0]}))).length&&(j="No Employees"),i.push({character:e,filteredEmployees:j})};for(o.s();!(c=o.n()).done;){var j;l()}}catch(u){o.e(u)}finally{o.f()}var h=i.map((function(t){var a=t.character,s=t.filteredEmployees,n=[];if("No Employees"===s)n.push(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h4",{className:"attention-color",children:"No Employees"})}));else{var c,r=Object(b.a)(s);try{for(r.s();!(c=r.n()).done;){var i=c.value,o=i.firstName,l=i.lastName,j=i.id,h=i.active,m=Object(d.jsx)(d.Fragment,{children:"".concat(o," ").concat(l)}),p=h?Object(d.jsxs)("div",{style:{color:"#0075FF"},children:[" ",m," "]}):Object(d.jsxs)(d.Fragment,{children:[" ",m," "]});n.push(Object(d.jsxs)("div",{className:"allEmployeesList-letterCard-employeesList-item",children:[p,Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"radio",value:"not active",name:j,checked:!h,onChange:e.onChangeValue})," ","not active ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"radio",value:"active",name:j,checked:h,onChange:e.onChangeValue})," ","active ",Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})]},j))}}catch(u){r.e(u)}finally{r.f()}}return Object(d.jsxs)("div",{className:"allEmployeesList-letterCard",children:[Object(d.jsx)("h3",{children:a}),Object(d.jsx)("div",{className:"allEmployeesList-letterCard-employeesList",children:n})]})}));a.sort((function(e,t){var a=e.lastName.toLowerCase(),s=t.lastName.toLowerCase();return a<s?-1:a>s?1:0})).filter((function(e){return!0===e.active}));return Object(d.jsxs)("div",{className:"employeesBlock",children:[Object(d.jsx)("h1",{children:"Employees page"}),Object(d.jsx)("h2",{children:"#version 10"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"allEmployeesList",children:[Object(d.jsx)("h2",{children:"Employees"}),Object(d.jsx)("div",{className:"letterCards-wrapper",children:h})]})]})}}]),a}(s.Component),N=g,C=(a(34),s.Component,a(35),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("main",{children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsx)(u.a,{to:"/employees"})}),Object(d.jsx)(u.b,{exact:!0,path:"/employees",children:Object(d.jsx)(N,{})}),Object(d.jsx)(u.b,{path:"*",children:Object(d.jsx)(N,{})})]})})})})}}]),a}(s.Component));r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6f4fc724.chunk.js.map