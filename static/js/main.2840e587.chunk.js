(this.webpackJsonpgamespot=this.webpackJsonpgamespot||[]).push([[0],{89:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s,o,d,b,l,m,u,j,g,h=t(0),p=t.n(h),O=t(32),f=t.n(O),x=t(6),v=t(17),w=t(20),y=t.n(w),k=t(25),_=t(21),E=t.n(_),C="https://api.rawg.io/api/",S=(new Date).getFullYear(),G=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),A=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),I="".concat(S,"-").concat(A,"-").concat(G),L="".concat(S-1,"-").concat(A,"-").concat(G),z="".concat(S+1,"-").concat(A,"-").concat(G),D="games?key=".concat("0a246766e9ea43ddb0a6127be81a50be","&dates=").concat(L,",").concat(I,"&ordering=-rating&page_size=10"),N="games?key=".concat("0a246766e9ea43ddb0a6127be81a50be","&dates=").concat(I,",").concat(z,"&ordering=-added&page_size=10"),T="games?key=".concat("0a246766e9ea43ddb0a6127be81a50be","&dates&dates=").concat(L,",").concat(I,"&ordering=-released&page_size=10"),F=function(e){return"".concat(C,"games/").concat(e,"/screenshots?key=").concat("0a246766e9ea43ddb0a6127be81a50be")},R=function(e){return"".concat(C,"games?page_size=9&search=").concat(e,"&key=").concat("0a246766e9ea43ddb0a6127be81a50be")},H=t(7),P=t(97),M=t(33),X=function(e,n){return e.match(/media\/screenshorts/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games/","/media/resize/".concat(n,"/-/games/"))},B={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}},J={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}},U=t(1),V=Object(H.b)(P.a.div)(a||(a=Object(x.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]))),Y=function(e){var n=e.name,t=e.released,a=e.image,c=e.id,r=Object(v.b)();return Object(U.jsx)(V,{variants:J,initial:"hidden",animate:"show",onClick:function(){document.body.style.overflow="hidden",r(function(e){return function(){var n=Object(k.a)(y.a.mark((function n(t){var a,c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.get((r=e,"".concat(C,"games/").concat(r,"?key=").concat("0a246766e9ea43ddb0a6127be81a50be")));case 2:return a=n.sent,n.next=5,E.a.get(F(e));case 5:c=n.sent,t({type:"IS_LOADING"}),t({type:"GET_DETAIL",payload:{game:a.data,screen:c.data}});case 8:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()}(c))},children:Object(U.jsxs)(M.b,{to:"/games/".concat(c),children:[Object(U.jsx)(P.a.h3,{children:n}),Object(U.jsx)("p",{children:t}),Object(U.jsx)(P.a.img,{src:X(a,640),alt:n})]})})},q=t(4),K=t.p+"static/media/playstation.18cc4b9c.svg",Q=t.p+"static/media/steam.d7b8819f.svg",W=t.p+"static/media/xbox.3e7db735.svg",Z=t.p+"static/media/nintendo.f579be04.svg",$=t.p+"static/media/apple.5757c37e.svg",ee=t.p+"static/media/gamepad.c9269ef5.svg",ne=t(98),te=Object(H.b)(P.a.div)(c||(c=Object(x.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  // sidescroll\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #174c6c;\n  }\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"]))),ae=Object(H.b)(P.a.div)(r||(r=Object(x.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  position: absolute;\n  left: 10%;\n  color: black;\n  z-index: 10;\n  img {\n    width: 100%;\n    border-radius: 1rem;\n  }\n"]))),ce=Object(H.b)(P.a.div)(i||(i=Object(x.a)(["\n  display: flex;\n  align-item: center;\n  justify-content: space-between;\n  img {\n    width: 2rem;\n    height: 2rem;\n    display: inline;\n  }\n"]))),re=Object(H.b)(P.a.div)(s||(s=Object(x.a)(["\n  text-align: center;\n"]))),ie=Object(H.b)(P.a.div)(o||(o=Object(x.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    margin-left: 3rem;\n  }\n"]))),se=Object(H.b)(P.a.div)(d||(d=Object(x.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n  }\n"]))),oe=Object(H.b)(P.a.div)(b||(b=Object(x.a)(["\n  margin: 5rem 0rem;\n"]))),de=function(e){var n=e.pathId,t=Object(q.e)(),a=function(e){switch(e){case"PlayStation 4":return K;case"Xbox One":return W;case"PC":return Q;case"Nintendo Switch":return Z;case"IOS":return $;default:return ee}},c=Object(v.c)((function(e){return e.detail})),r=c.screen,i=c.game,s=c.isLoading;return Object(U.jsx)(h.Fragment,{children:!s&&Object(U.jsx)(te,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(U.jsxs)(ae,{layoutId:n,children:[Object(U.jsxs)(ce,{children:[Object(U.jsxs)("div",{className:"rating",children:[Object(U.jsx)(P.a.h3,{layoutId:"title ".concat(n),children:i.name}),Object(U.jsxs)("p",{children:["Rating:",i.rating]}),Object(U.jsx)(ne.a,{name:"half-rating-read",defaultValue:i.rating,precision:.1,readOnly:!0})]}),Object(U.jsxs)(re,{children:[Object(U.jsx)("h3",{children:"Platforms"}),Object(U.jsx)(ie,{children:i.platforms.map((function(e){return Object(U.jsx)("img",{alt:e.platform.name,src:a(e.platform.name)},e.platform.id)}))})]})]}),Object(U.jsx)(se,{children:Object(U.jsx)(P.a.img,{layoutId:"image ".concat(n),src:X(i.background_image,1280),alt:i.name})}),Object(U.jsx)(oe,{children:Object(U.jsx)("p",{children:i.description_raw})}),Object(U.jsx)("div",{className:"gallery",children:r.results.map((function(e){return Object(U.jsx)("img",{src:X(e.image,1280),alt:"game"},e.id)}))})]})})})},be=Object(H.b)(P.a.div)(l||(l=Object(x.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]))),le=Object(H.b)(P.a.div)(m||(m=Object(x.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]))),me=function(){var e=Object(v.b)(),n=Object(q.f)().pathname.split("/")[2];Object(h.useEffect)((function(){e(function(){var e=Object(k.a)(y.a.mark((function e(n){var t,a,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(C).concat(D));case 2:return t=e.sent,e.next=5,E.a.get("".concat(C).concat(T));case 5:return a=e.sent,e.next=8,E.a.get("".concat(C).concat(N));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:c.data.results,newGames:a.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[e]);var t=Object(v.c)((function(e){return e.games})),a=t.popular,c=t.newGames,r=t.upcoming,i=t.search;return Object(U.jsxs)(be,{variants:B,initial:"hidden",animate:"show",children:[n&&Object(U.jsx)(de,{}),i.length?Object(U.jsxs)("div",{className:"search",children:[Object(U.jsx)("h2",{children:"Searched Games"}),Object(U.jsx)(le,{children:i.map((function(e){return Object(U.jsx)(Y,{name:e.name,released:e.released,id:e.id,rating:e.rating,image:e.background_image},e.id)}))})]}):"",Object(U.jsx)("h2",{children:"Upcoming Games"}),Object(U.jsx)(le,{children:r.map((function(e){return Object(U.jsx)(Y,{name:e.name,released:e.released,id:e.id,rating:e.rating,image:e.background_image},e.id)}))}),Object(U.jsx)("h2",{children:"Popular Games"}),Object(U.jsx)(le,{children:a.map((function(e){return Object(U.jsx)(Y,{name:e.name,released:e.released,id:e.id,rating:e.rating,image:e.background_image},e.id)}))}),Object(U.jsx)("h2",{children:"New Games"}),Object(U.jsx)(le,{children:c.map((function(e){return Object(U.jsx)(Y,{name:e.name,released:e.released,id:e.id,rating:e.rating,image:e.background_image},e.id)}))})]})},ue=Object(H.a)(u||(u=Object(x.a)(["\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\n\nhtml{\n    &::-webkit-scrollbar{\n        width:0.5rem;\n    }\n    &::-webkit-scrollbar-thumb{\n        background-color:darkgrey;\n    }\n}\nbody{\n    font-family:'Raleway',sans-serif;\n    width:100%;\n    }\n    h2{\n        font-size:3rem;\n        font-family:'Abril Fatface',cursive;\n        font-weight:lighter; \n        color:#333;\n    }\n    h3{\n        font-size:1.3rem;\n        color:#333;\n        padding:1.5rem 0rem;\n    }\n    p{\n        font-size:1.2rem;\n        line-height:200%;\n        color:#696969;\n    }\n    a{\n        text-decoration:none;\n        color:#333;\n    }\n    img{\n        diplay:block;\n    }\n    input{\n    font-weight:bold;\n    font-family:'Raleway',sans-serif';\n    }\n"]))),je=t(13),ge=t.p+"static/media/logo.44083c6b.svg",he=Object(H.b)(P.a.div)(j||(j=Object(x.a)(["\n  padding: 3rem 5rem;\n  text-align: center;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    margin-top: 1rem;\n    // font-weight:bold;\n    // font-family:'Raleway',sans-serif';\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    background: #174c6c;\n    color: white;\n    cursor: pointer;\n    padding: 0.5rem 2rem;\n  }\n"]))),pe=Object(H.b)(P.a.div)(g||(g=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n  img {\n    height: 2rem;\n    width: 2rem;\n  }\n"]))),Oe=function(){var e=Object(v.b)(),n=Object(h.useState)(""),t=Object(je.a)(n,2),a=t[0],c=t[1];return Object(U.jsxs)(he,{variants:B,initial:"hidden",animate:"show",children:[Object(U.jsxs)(pe,{onClick:function(){e({type:"CLEAR_SEARCH"})},children:[Object(U.jsx)("img",{src:ge,alt:"logo"}),Object(U.jsx)("h1",{children:"GameSpot"})]}),Object(U.jsxs)("form",{className:"search",children:[Object(U.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},type:"text"}),Object(U.jsx)("button",{onClick:function(n){var t;n.preventDefault(),e((t=a,function(){var e=Object(k.a)(y.a.mark((function e(n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(R(t));case 2:a=e.sent,n({type:"FETCH_SEARCH",payload:{search:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),c("")},type:"submit",children:"Search"})]})]})},fe=function(){return Object(U.jsx)("div",{className:"App",children:Object(U.jsxs)(q.a,{path:["/games/:id","/"],children:[Object(U.jsx)(ue,{}),Object(U.jsx)(Oe,{}),Object(U.jsx)(me,{})]})})},xe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,99)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},ve=t(24),we=t(10),ye={popular:[],newGames:[],upcoming:[],search:[]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(we.a)(Object(we.a)({},e),{},{popular:n.payload.popular,upcoming:n.payload.upcoming,newGames:n.payload.newGames});case"FETCH_SEARCH":return Object(we.a)(Object(we.a)({},e),{},{search:n.payload.search});case"CLEAR_SEARCH":return Object(we.a)(Object(we.a)({},e),{},{search:[]});default:return Object(we.a)({},e)}},_e={game:{platforms:[]},screen:{results:[]},isLoading:!0},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(we.a)(Object(we.a)({},e),{},{game:n.payload.game,screen:n.payload.screen,isLoading:!1});case"IS_LOADING":return Object(we.a)(Object(we.a)({},e),{},{isLoading:!0});default:return Object(we.a)({},e)}},Ce=Object(ve.b)({games:ke,detail:Ee}),Se=t(57),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.c,Ae=Object(ve.d)(Ce,Ge(Object(ve.a)(Se.a)));f.a.render(Object(U.jsx)(p.a.StrictMode,{children:Object(U.jsx)(v.a,{store:Ae,children:Object(U.jsx)(M.a,{children:Object(U.jsx)(fe,{})})})}),document.getElementById("root")),xe()}},[[89,1,2]]]);
//# sourceMappingURL=main.2840e587.chunk.js.map