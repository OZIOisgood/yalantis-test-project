(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{30:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(22),r=a.n(n),i=a(7),l=a(8),o=a(10),j=a(9),h=a(18),d=a(2),m=(a(30),a(0)),u=(s.Component,a(14)),p=a(19),b=a.n(p),O=a(23),v=a(15),f=a(25),y=a(11),x=(a(33),a.p+"static/media/loading.c61ecb2f.gif"),g=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state=JSON.parse(sessionStorage.getItem("state"))||{data:[],loading:!0,bigLetters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",monthNames:["December","January","February","March","April","May","June","July","August","September","October","November"],lang:"us-US",requestStr:"/task0/users"},e.onChangeValue=e.onChangeValue.bind(Object(v.a)(e)),e}return Object(l.a)(a,[{key:"setState",value:function(e){Object(f.a)(Object(y.a)(a.prototype),"setState",this).call(this,e),sessionStorage.setItem("state",JSON.stringify(this.state))}},{key:"updateData",value:function(){var e=Object(O.a)(b.a.mark((function e(t){var a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://yalantis-react-school-api.yalantis.com/api",e.next=3,fetch("".concat("https://yalantis-react-school-api.yalantis.com/api").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:(s=e.sent).forEach((function(e){return e.active=!1})),this.setState({data:s,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeValue",value:function(e){var t=this.state.data,a=t.find((function(t){return t.id===e.target.name}));a.active=!a.active,this.setState({data:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,s=t.monthNames,c=t.bigLetters,n=t.lang,r=t.requestStr;if(this.state.loading&&this.updateData(r),this.state.loading)return Object(m.jsxs)("div",{className:"employeesBlock",children:[Object(m.jsx)("h1",{children:"Employees page"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"loading-wrapper",children:Object(m.jsx)("img",{src:x,className:"loading",alt:"Loading gif"})})]});var i,l=a.sort((function(e,t){var a=e.firstName.toLowerCase(),s=t.firstName.toLowerCase();return a<s?-1:a>s?1:0})),o=[],j=Object(u.a)(c);try{var h=function(){var e=i.value;0===(d=l.filter((function(t){return e===t.firstName[0]}))).length&&(d="No Employees"),o.push({character:e,filteredEmployees:d})};for(j.s();!(i=j.n()).done;){var d;h()}}catch(E){j.e(E)}finally{j.f()}var p,b=o.map((function(t){var a=t.character,s=t.filteredEmployees,c=[];if("No Employees"===s)c.push(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("h4",{className:"attention-color",children:"No Employees"})}));else{var n,r=Object(u.a)(s);try{for(r.s();!(n=r.n()).done;){var i=n.value,l=i.firstName,o=i.lastName,j=i.id,h=i.active,d=Object(m.jsx)(m.Fragment,{children:"".concat(l," ").concat(o)}),p=h?Object(m.jsxs)("div",{style:{color:"#0075FF"},children:[" ",d," "]}):Object(m.jsxs)(m.Fragment,{children:[" ",d," "]});c.push(Object(m.jsxs)("div",{className:"allEmployeesList-letterCard-employeesList-item",children:[p,Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{type:"radio",value:"not active",name:j,checked:!h,onChange:e.onChangeValue})," ","not active ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"radio",value:"active",name:j,checked:h,onChange:e.onChangeValue})," ","active ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})]},j))}}catch(E){r.e(E)}finally{r.f()}}return Object(m.jsxs)("div",{className:"allEmployeesList-letterCard",children:[Object(m.jsx)("h3",{children:a}),Object(m.jsx)("div",{className:"allEmployeesList-letterCard-employeesList",children:c})]})})),O=a.sort((function(e,t){var a=e.lastName.toLowerCase(),s=t.lastName.toLowerCase();return a<s?-1:a>s?1:0})).filter((function(e){return!0===e.active})),v=[],f=Object(u.a)(s);try{var y=function(){var e=p.value;0===(g=O.filter((function(t){return e===new Date(Date.parse(t.dob)).toLocaleDateString("us-US",{month:"long"})}))).length&&(g="No Employees"),v.push({month:e,filteredActiveEmployees:g})};for(f.s();!(p=f.n()).done;){var g;y()}}catch(E){f.e(E)}finally{f.f()}var N=[];return N=v.filter((function(e){return"No Employees"===e.filteredActiveEmployees})).length===v.length?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("h4",{className:"attention-color",children:"Employees List is empty"})}):v.map((function(e){var t=e.month,a=e.filteredActiveEmployees,s=[];if("No Employees"===a)s.push(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("h4",{className:"attention-color",children:"No Employees"})}));else{var c,r=Object(u.a)(a);try{for(r.s();!(c=r.n()).done;){var i=c.value,l=i.firstName,o=i.lastName,j=i.dob,h=i.id,d=new Date(Date.parse(j)),p=d.toLocaleDateString(n,{year:"numeric"}),b=d.toLocaleDateString(n,{month:"long"}),O=d.toLocaleDateString(n,{day:"2-digit"});s.push(Object(m.jsx)("li",{className:"activeEmployeesList-monthCard-employeesList-item",children:"".concat(l," ").concat(o," - ").concat(O," ").concat(b,", ").concat(p," year")},h))}}catch(E){r.e(E)}finally{r.f()}}return Object(m.jsxs)("div",{className:"activeEmployeesList-monthCard",children:[Object(m.jsx)("h3",{children:t}),Object(m.jsx)("div",{className:"activeEmployeesList-monthCard-employeesList",children:Object(m.jsx)("ul",{children:s})})]})})),Object(m.jsxs)("div",{className:"employeesBlock",children:[Object(m.jsx)("h1",{children:"Employees page"}),Object(m.jsx)("h2",{children:"#version 14"}),Object(m.jsx)("hr",{}),JSON.stringify(O),Object(m.jsx)("hr",{}),JSON.stringify(v),Object(m.jsxs)("div",{className:"allEmployeesList",children:[Object(m.jsx)("h2",{children:"Employees"}),Object(m.jsx)("div",{className:"letterCards-wrapper",children:b})]}),Object(m.jsxs)("div",{className:"activeEmployeesList",children:[Object(m.jsx)("h2",{children:"Employees birthday"}),Object(m.jsx)("div",{className:"monthCard-wrapper",children:N})]})]})}}]),a}(s.Component),N=g,E=(a(34),s.Component,a(35),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)(h.a,{children:Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsx)("main",{children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{exact:!0,path:"/",children:Object(m.jsx)(d.a,{to:"/employees"})}),Object(m.jsx)(d.b,{exact:!0,path:"/employees",children:Object(m.jsx)(N,{})}),Object(m.jsx)(d.b,{path:"*",children:Object(m.jsx)(N,{})})]})})})})}}]),a}(s.Component));r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c4d66549.chunk.js.map