(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{30:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(22),c=a.n(r),i=a(7),o=a(8),l=a(10),j=a(9),h=a(18),u=a(2),d=(a(30),a(0)),b=(n.Component,a(15)),m=a(19),p=a.n(m),f=a(23),O=a(14),v=a(25),y=a(11),x=(a(33),a.p+"static/media/loading.c61ecb2f.gif"),g=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state=JSON.parse(sessionStorage.getItem("state"))||{data:[],loading:!0,bigLetters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",monthNames:["December","January","February","March","April","May","June","July","August","September","October","November"],lang:"us-US",requestStr:"/task0/users"},e.onChangeValue=e.onChangeValue.bind(Object(O.a)(e)),e}return Object(o.a)(a,[{key:"setState",value:function(e){Object(v.a)(Object(y.a)(a.prototype),"setState",this).call(this,e),sessionStorage.setItem("state",JSON.stringify(this.state))}},{key:"updateData",value:function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://yalantis-react-school-api.yalantis.com/api",e.next=3,fetch("".concat("https://yalantis-react-school-api.yalantis.com/api").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).forEach((function(e){return e.active=!1})),this.setState({data:n,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeValue",value:function(e){var t=this.state.data,a=t.find((function(t){return t.id===e.target.name}));a.active=!a.active,this.setState({data:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.monthNames,s=t.bigLetters,r=t.lang,c=t.requestStr;if(this.state.loading&&this.updateData(c),this.state.loading)return Object(d.jsxs)("div",{className:"employeesBlock",children:[Object(d.jsx)("h1",{children:"Employees page"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"loading-wrapper",children:Object(d.jsx)("img",{src:x,className:"loading",alt:"Loading gif"})})]});var i,o=a.sort((function(e,t){var a=e.firstName.toLowerCase(),n=t.firstName.toLowerCase();return a<n?-1:a>n?1:0})),l=[],j=Object(b.a)(s);try{var h=function(){var e=i.value;0===(u=o.filter((function(t){return e===t.firstName[0]}))).length&&(u="No Employees"),l.push({character:e,filteredEmployees:u})};for(j.s();!(i=j.n()).done;){var u;h()}}catch(C){j.e(C)}finally{j.f()}for(var m=l.map((function(t){var a=t.character,n=t.filteredEmployees,s=[];if("No Employees"===n)s.push(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h4",{className:"attention-color",children:"No Employees"})}));else{var r,c=Object(b.a)(n);try{for(c.s();!(r=c.n()).done;){var i=r.value,o=i.firstName,l=i.lastName,j=i.id,h=i.active,u=Object(d.jsx)(d.Fragment,{children:"".concat(o," ").concat(l)}),m=h?Object(d.jsxs)("div",{style:{color:"#0075FF"},children:[" ",u," "]}):Object(d.jsxs)(d.Fragment,{children:[" ",u," "]});s.push(Object(d.jsxs)("div",{className:"allEmployeesList-letterCard-employeesList-item",children:[m,Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"radio",value:"not active",name:j,checked:!h,onChange:e.onChangeValue})," ","not active ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"radio",value:"active",name:j,checked:h,onChange:e.onChangeValue})," ","active ",Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})]},j))}}catch(C){c.e(C)}finally{c.f()}}return Object(d.jsxs)("div",{className:"allEmployeesList-letterCard",children:[Object(d.jsx)("h3",{children:a}),Object(d.jsx)("div",{className:"allEmployeesList-letterCard-employeesList",children:s})]})})),p=a.sort((function(e,t){var a=e.lastName.toLowerCase(),n=t.lastName.toLowerCase();return a<n?-1:a>n?1:0})).filter((function(e){return!0===e.active})),f=[],O=new Date(Date.now()).toLocaleDateString(r,{month:"long"});n[0]!==O;)n.push(n.shift());var v,y=Object(b.a)(n);try{var g=function(){var e=v.value;0===(N=p.filter((function(t){return e===new Date(Date.parse(t.dob)).toLocaleDateString("us-US",{month:"long"})}))).length&&(N="No Employees"),f.push({month:e,filteredActiveEmployees:N})};for(y.s();!(v=y.n()).done;){var N;g()}}catch(C){y.e(C)}finally{y.f()}return Object(d.jsxs)("div",{className:"employeesBlock",children:[Object(d.jsx)("h1",{children:"Employees page"}),Object(d.jsx)("h2",{children:"#version 3"}),Object(d.jsx)("hr",{}),JSON.stringify(f),Object(d.jsxs)("div",{className:"allEmployeesList",children:[Object(d.jsx)("h2",{children:"Employees"}),Object(d.jsx)("div",{className:"letterCards-wrapper",children:m})]})]})}}]),a}(n.Component),N=g,C=(a(34),n.Component,a(35),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("main",{children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsx)(u.a,{to:"/employees"})}),Object(d.jsx)(u.b,{exact:!0,path:"/employees",children:Object(d.jsx)(N,{})}),Object(d.jsx)(u.b,{path:"*",children:Object(d.jsx)(N,{})})]})})})})}}]),a}(n.Component));c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d2e4a057.chunk.js.map