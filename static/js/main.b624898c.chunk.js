(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{30:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(11),o=n.n(r),s=n(13),u=n(14),i=n(17),b=n(15),l=n(6),j=n(7),d=n.n(j),h=n(18),f=n(9),m=n.n(f),p=n(2),O=Object(p.b)("contacts/fetchContactsRequest"),v=Object(p.b)("contacts/fetchContactsSuccess"),C=Object(p.b)("contacts/fetchContactsError"),x=Object(p.b)("contacts/addContactRequest"),g=Object(p.b)("contacts/addContactSuccess"),N=Object(p.b)("contacts/addContactError"),y=Object(p.b)("contacts/deleteContactRequest"),k=Object(p.b)("contacts/deleteContactSuccess"),w=Object(p.b)("contacts/deleteContactError"),I=Object(p.b)("contacts/changeFilter");m.a.defaults.baseURL="http://localhost:3000/";var S,A,D={fetchContacts:function(){return function(){var t=Object(h.a)(d.a.mark((function t(e){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(O()),t.prev=1,t.next=4,m.a.get("/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(C(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(h.a)(d.a.mark((function n(c){var a,r,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},c(x()),n.prev=2,n.next=5,m.a.post("/contacts",a);case 5:r=n.sent,o=r.data,c(g(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(N(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(h.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(y()),e.prev=1,e.next=4,m.a.delete("/contacts/".concat(t));case 4:n(k(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(w(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},L=n(4),q=n(16),z=n(3),F=Object(p.c)([],(S={},Object(L.a)(S,v,(function(t,e){return e.payload})),Object(L.a)(S,g,(function(t,e){var n=e.payload;return[].concat(Object(q.a)(t),[n])})),Object(L.a)(S,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),S)),E=Object(p.c)("",Object(L.a)({},I,(function(t,e){return e.payload}))),R=Object(p.c)(!1,(A={},Object(L.a)(A,O,(function(){return!0})),Object(L.a)(A,v,(function(){return!1})),Object(L.a)(A,C,(function(){return!1})),Object(L.a)(A,x,(function(){return!0})),Object(L.a)(A,g,(function(){return!1})),Object(L.a)(A,N,(function(){return!1})),Object(L.a)(A,y,(function(){return!0})),Object(L.a)(A,k,(function(){return!1})),Object(L.a)(A,w,(function(){return!1})),A)),J=Object(z.b)({items:F,filter:E,loading:R}),M=n(12),P=function(t){return t.contacts.loading},T=function(t){return t.contacts.filter},Z=Object(M.a)([function(t){return t.contacts.items},T],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),B=n(1),U=Object(l.b)((function(t){return{value:T(t)}}),(function(t){return{onChange:function(e){return t(I(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h3",{children:"Find contacts by name"}),Object(B.jsx)("input",{type:"text",className:"input",value:e,name:"filter",onChange:n})]})})),$=n(21),G=n.n($),H=(n(71),function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=G.a.generate(),t.phoneInputId=G.a.generate(),t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handlePhoneChange=function(e){t.setState({number:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(B.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(B.jsxs)("label",{className:"form-label",htmlFor:this.nameInputId,children:[Object(B.jsx)("span",{className:"form-label-title",children:"Name"}),Object(B.jsx)("input",{className:"input",type:"text",id:this.nameInputId,value:this.state.name,onChange:this.handleNameChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(B.jsxs)("label",{className:"form-label",htmlFor:this.phoneInputId,children:[Object(B.jsx)("span",{className:"form-label-title",children:"Number"}),Object(B.jsx)("input",{className:"input",type:"tel",id:this.phoneInputId,value:this.state.number,name:"number",onChange:this.handlePhoneChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(B.jsx)("button",{className:"form-button button",type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component)),K=Object(l.b)(null,(function(t){return{onSubmit:function(e){var n=e.name,c=e.number;return t(D.addContact(n,c))}}}))(H),Q=(n(30),function(t){var e=t.id,n=t.name,c=t.number,a=t.onDeleteContact;return Object(B.jsxs)("li",{className:"contact-list-item",children:[Object(B.jsxs)("span",{className:"contact-list-name",children:[n," "]}),Object(B.jsxs)("span",{className:"contact-list-number",children:[c," "]}),Object(B.jsx)("button",{type:"button",className:"button",onClick:function(){return a(e)},children:"Delete"})]})}),V=Object(l.b)((function(t){return{contacts:Z(t)}}),(function(t){return{onDeleteContact:function(e){return t(D.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(B.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(B.jsx)(Q,{id:t.id,name:t.name,number:t.number,onDeleteContact:n},t.id)}))})})),W=(n(72),n(73),function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("div",{className:"phonebook",children:[Object(B.jsx)("h1",{children:"Phonebook"}),Object(B.jsx)(K,{}),Object(B.jsx)("h2",{children:"Contacts"}),Object(B.jsx)(U,{}),this.props.isLoadingContacts&&Object(B.jsx)("h1",{children:"Loading"}),Object(B.jsx)(V,{})]})})})}}]),n}(c.Component)),X=Object(l.b)((function(t){return{isLoadingContacts:P(t)}}),(function(t){return{fetchContacts:function(){return t(D.fetchContacts())}}}))(W),Y=n(32),_=n.n(Y),tt=n(8),et=[].concat(Object(q.a)(Object(p.d)({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}})),[_.a]),nt=Object(z.b)({contacts:J}),ct=Object(p.a)({reducer:nt,middleware:et,devTools:!0});o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(l.a,{store:ct,children:Object(B.jsx)(X,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.b624898c.chunk.js.map