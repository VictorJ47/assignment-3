(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{32:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(19),i=n.n(a),s=(n(32),n(20)),o=n(27),u=n(18),j=n(21),d=n(22),b=n(23),l=n(26),h=n(16),O=n.n(h),x=n(7),m=n(2),p=n(0);var f=function(e){var t=e.accountBalance;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Welcome to Bank of React!"}),Object(p.jsxs)("h3",{children:["Account Balance: $",t.toFixed(2)]}),Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(x.b,{to:"/credits",children:"View Credits"})}),Object(p.jsx)("li",{children:Object(p.jsx)(x.b,{to:"/debits",children:"View Debits"})}),Object(p.jsx)("li",{children:Object(p.jsx)(x.b,{to:"/userProfile",children:"View Profile"})}),Object(p.jsx)("li",{children:Object(p.jsx)(x.b,{to:"/login",children:"Log In"})})]})})]})};var v=function(e){var t=e.userName,n=e.memberSince;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"User Profile"}),Object(p.jsxs)("p",{children:["Name: ",t]}),Object(p.jsxs)("p",{children:["Member Since: ",n]})]})},g=n(8);var S=function(e){var t=e.user,n=e.mockLogIn,r=Object(c.useState)(""),a=Object(g.a)(r,2),i=a[0],s=a[1],o=Object(c.useState)(!1),u=Object(g.a)(o,2),j=u[0],d=u[1];return j?Object(p.jsx)(m.a,{to:"/"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Log In"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({userName:i}),d(!0)},children:[Object(p.jsx)("input",{type:"text",value:i,onChange:function(e){s(e.target.value)},placeholder:"Enter your username",required:!0}),Object(p.jsx)("button",{type:"submit",children:"Log In"})]}),Object(p.jsxs)("p",{children:["Logged in as: ",t.userName]})]})};var L=function(e){var t=e.credits,n=e.addCredit,r=e.accountBalance,a=Object(c.useState)(""),i=Object(g.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)(""),j=Object(g.a)(u,2),d=j[0],b=j[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Credits"}),Object(p.jsxs)("h3",{children:["Account Balance: $",r.toFixed(2)]}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={description:s,amount:parseFloat(d),date:(new Date).toISOString()};n(t),o(""),b("")},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Description: "}),Object(p.jsx)("input",{type:"text",value:s,onChange:function(e){return o(e.target.value)},required:!0})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Amount: "}),Object(p.jsx)("input",{type:"number",step:"0.01",value:d,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(p.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(p.jsx)("h2",{children:"Credit History:"}),Object(p.jsx)("ul",{children:t.map((function(e,t){return Object(p.jsxs)("li",{children:[Object(p.jsx)("strong",{children:e.description})," - $",e.amount.toFixed(2)," on ",new Date(e.date).toLocaleDateString()]},t)}))}),Object(p.jsx)(x.b,{to:"/",children:"Return to Home"})]})};var B=function(e){var t=e.debits,n=e.addDebit,r=e.accountBalance,a=Object(c.useState)(""),i=Object(g.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)(""),j=Object(g.a)(u,2),d=j[0],b=j[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Debits"}),Object(p.jsxs)("h3",{children:["Account Balance: $",r.toFixed(2)]}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={description:s,amount:parseFloat(d),date:(new Date).toISOString()};n(t),o(""),b("")},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Description: "}),Object(p.jsx)("input",{type:"text",value:s,onChange:function(e){return o(e.target.value)},required:!0})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Amount: "}),Object(p.jsx)("input",{type:"number",step:"0.01",value:d,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(p.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(p.jsx)("h2",{children:"Debit History:"}),Object(p.jsx)("ul",{children:t.map((function(e,t){return Object(p.jsxs)("li",{children:[Object(p.jsx)("strong",{children:e.description})," - $",e.amount.toFixed(2)," on ",new Date(e.date).toLocaleDateString()]},t)}))}),Object(p.jsx)(x.b,{to:"/",children:"Return to Home"})]})},D=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).addCredit=function(t){var n=[].concat(Object(u.a)(e.state.creditList),[t]),c=e.state.accountBalance+t.amount;e.setState({creditList:n,accountBalance:c})},e.addDebit=function(t){var n=[].concat(Object(u.a)(e.state.debitList),[t]),c=e.state.accountBalance-t.amount;e.setState({debitList:n,accountBalance:c})},e.mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.state={accountBalance:1234567.89,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(O.a.mark((function e(){var t,n,c,r,a,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://moj-api.herokuapp.com/credits");case 3:return t=e.sent,e.next=6,fetch("https://moj-api.herokuapp.com/debits");case 6:return n=e.sent,e.next=9,t.json();case 9:return c=e.sent,e.next=12,n.json();case 12:r=e.sent,a=c.reduce((function(e,t){return e+t.amount}),0),i=r.reduce((function(e,t){return e+t.amount}),0),s=a-i,this.setState({creditList:c,debitList:r,accountBalance:s}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 22:case"end":return e.stop()}}),e,this,[[0,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsx)(x.a,{basename:"/bank-of-react-starter-code",children:Object(p.jsxs)("div",{children:[Object(p.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(f,{accountBalance:e.state.accountBalance})}}),Object(p.jsx)(m.b,{exact:!0,path:"/userProfile",render:function(){return Object(p.jsx)(v,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(p.jsx)(m.b,{exact:!0,path:"/login",render:function(){return Object(p.jsx)(S,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(p.jsx)(m.b,{exact:!0,path:"/credits",render:function(){return Object(p.jsx)(L,{credits:e.state.creditList,addCredit:e.addCredit,accountBalance:e.state.accountBalance})}}),Object(p.jsx)(m.b,{exact:!0,path:"/debits",render:function(){return Object(p.jsx)(B,{debits:e.state.debitList,addDebit:e.addDebit,accountBalance:e.state.accountBalance})}})]})})}}]),n}(c.Component),C=D,k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),k()}},[[43,1,2]]]);
//# sourceMappingURL=main.6afd6ca6.chunk.js.map