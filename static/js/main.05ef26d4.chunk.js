(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{111:function(e,t,c){"use strict";c.r(t);var n,s,i=c(0),a=c.n(i),o=c(22),j=c.n(o),r=(c(79),c(30)),l=c(3),d=(c.p,c(80),c(120)),h=c(118),b=c(121),O=c(119),u=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],x=c(52),p=c(7),m=c(53),f=(c(81),c(1)),g=m.a.div(n||(n=Object(x.a)(["\n  padding: 40px;\n"]))),v=m.a.h4(s||(s=Object(x.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.\uc0c9\uc0c1}));function k(e){return Object(f.jsxs)("p",{children:["\uc7ac\uace0: ",e.stock[0]]})}var N=function(e){var t=Object(i.useState)(!0),c=Object(l.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)(""),o=Object(l.a)(a,2),j=(o[0],o[1]);Object(i.useEffect)((function(){console.log(123123);var e=setTimeout((function(){s(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var r=Object(p.g)().id,d=Object(p.f)();return e.shoes.find((function(e){return e.id===r})),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(g,{children:Object(f.jsx)(v,{className:"red",children:"Detail"})}),Object(f.jsx)("input",{onChange:function(e){j(e.target.value)}}),!0===n?Object(f.jsx)("div",{className:"my_alert2",children:Object(f.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4"})}):"",Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md-6",children:Object(f.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})}),Object(f.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(f.jsx)("h4",{className:"pt-5",children:e.shoes[r].title}),Object(f.jsx)("p",{children:e.shoes[r].content}),Object(f.jsxs)("p",{children:[e.shoes[r].price,"\uc6d0"]}),Object(f.jsx)(k,{stock:e.stock}),Object(f.jsx)("button",{className:"btn btn-danger",onClick:function(){e.setStock()},children:"\uc8fc\ubb38\ud558\uae30"}),Object(f.jsx)("button",{className:"btn btn-danger",onClick:function(){d.push("/")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},S=c(29),w=c(70),C=c.n(w);function B(e){return Object(f.jsxs)("div",{className:"col-md-4",children:[Object(f.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(e.i+1,".jpg"),width:"100%"}),Object(f.jsx)("h4",{children:e.shoes.title}),Object(f.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]})]})}var I=function(){var e=Object(i.useState)(u),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(!1),a=Object(l.a)(s,2),o=(a[0],a[1],Object(i.useState)([10,11,12])),j=Object(l.a)(o,2),x=j[0],m=j[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(d.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(d.a.Brand,{href:"#home",children:"ShoeShop"}),Object(f.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(b.a,{className:"me-auto",children:[Object(f.jsx)(b.a.Link,{as:S.b,to:"/",children:"Home"}),Object(f.jsx)(b.a.Link,{as:S.b,to:"/detail",children:"Detail"}),Object(f.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(f.jsx)(O.a.Item,{href:"#action/3.1",children:"Action"}),Object(f.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(f.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(f.jsx)(O.a.Divider,{}),Object(f.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(f.jsxs)(p.c,{children:[Object(f.jsxs)(p.a,{exact:!0,path:"/",children:[Object(f.jsxs)("div",{className:"background",children:[Object(f.jsx)("h1",{children:"Hello world"}),Object(f.jsx)("p",{children:"SALE"}),Object(f.jsx)("button",{children:"\ubc84\ud2bc"})]}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(f.jsx)(B,{shoes:c[t],i:t},t)}))}),Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){C.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e,t){n([].concat(Object(r.a)(c),Object(r.a)(e.data)))})).catch((function(e){console.log(e)}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(f.jsx)(p.a,{path:"/detail/:id",children:Object(f.jsx)(N,{shoes:c,stock:x,setStock:m})})]})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,122)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};j.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(S.a,{children:Object(f.jsx)(I,{})})}),document.getElementById("root")),D()},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){}},[[111,1,2]]]);
//# sourceMappingURL=main.05ef26d4.chunk.js.map