(this["webpackJsonpnotes-client"]=this["webpackJsonpnotes-client"]||[]).push([[0],{192:function(e,t,a){e.exports=a.p+"static/media/NK.0890fdc1.svg"},216:function(e,t,a){e.exports=a(372)},221:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){},326:function(e,t,a){},327:function(e,t,a){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){},372:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(75),o=a.n(c),l=a(52),s=a(25),u=(a(221),a(11)),i=a.n(u),m=a(20),p=a(13),f=a(91),d=a(48),b=a(394),E=a(389),h=a(390),g=a(53),v=a(183),O=a(184),S=a(206),j=a(205),y=a(392),w=a(29);function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;w.b((function(a){t&&a.setExtras(t),w.a(e)}))}function x(e){var t={},a=e.toString();e instanceof Error||!e.message?e.config&&e.config.url&&(t.url=e.config.url):(t=e,a=e.message,e=new Error(a)),k(e,t),alert(a)}a(229);var I=function(e){Object(S.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(O.a)(a,[{key:"componentDidCatch",value:function(e,t){k(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"ErrorBoundary"},r.a.createElement("h3",null,"Sorry there was a problem loading this page")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(r.a.Component),C=Object(n.createContext)(null);function _(){return Object(n.useContext)(C)}var N=a(46);function T(e){var t=e.children,a=Object(N.a)(e,["children"]),n=Object(d.l)(),c=n.pathname,o=n.search,l=_().isAuthenticated;return r.a.createElement(d.d,a,l?t:r.a.createElement(d.c,{to:"/login?redirect=".concat(c).concat(o)}))}function L(e){var t=e.children,a=Object(N.a)(e,["children"]),n=_().isAuthenticated,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[[]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i"),n=a.exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("redirect");return r.a.createElement(d.d,a,n?r.a.createElement(d.c,{to:""===c||null===c?"/":c}):t)}var P=a(391);a(122),a(383),a(384),a(230);var A=a(386),R=a(387),D=a(395),z=a(385),G=a(191);a(326);function U(e){var t=e.isLoading,a=e.className,n=void 0===a?"":a,c=e.disabled,o=void 0!==c&&c,l=Object(N.a)(e,["isLoading","className","disabled"]);return r.a.createElement(z.a,Object.assign({className:"LoaderButton ".concat(n),disabled:o||t},l),t&&r.a.createElement(G.a,{glyph:"refresh",className:"spinning"}),l.children)}var B=a(103),H=a(104);function M(e){var t=Object(n.useState)(e),a=Object(p.a)(t,2),r=a[0],c=a[1];return[r,function(e){c(Object(H.a)({},r,Object(B.a)({},e.target.id,e.target.value)))}]}a(327);var K=a(192),F=a.n(K);function Y(){var e=_().userHasAuthenticated,t=Object(n.useState)(!1),a=Object(p.a)(t,2),c=a[0],o=a[1],l=M({email:"",password:""}),s=Object(p.a)(l,2),u=s[0],d=s[1];function b(){return(b=Object(m.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),o(!0),t.prev=2,t.next=5,f.a.signIn(u.email,u.password);case 5:e(!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),x(t.t0),o(!1);case 12:case"end":return t.stop()}}),t,null,[[2,8]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"Login"},r.a.createElement("img",{src:F.a,className:"logo"}),r.a.createElement("form",{onSubmit:function(e){return b.apply(this,arguments)}},r.a.createElement(A.a,{controlId:"email",bsSize:"large"},r.a.createElement(R.a,null,"Email"),r.a.createElement(D.a,{autoFocus:!0,type:"email",value:u.email,onChange:d})),r.a.createElement(A.a,{controlId:"password",bsSize:"large"},r.a.createElement(R.a,null,"Password"),r.a.createElement(D.a,{type:"password",value:u.password,onChange:d})),r.a.createElement(U,{block:!0,type:"submit",bsSize:"large",isLoading:c,disabled:!(u.email.length>0&&u.password.length>0)},"Login")))}var W=a(393);function q(e){return X.apply(this,arguments)}function X(){return(X=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(Date.now(),"-").concat(t.name),e.next=3,W.a.vault.put(a,t,{contentType:t.type});case 3:return n=e.sent,e.abrupt("return",n.key);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z="prod"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STAGE?{STRIPE_KEY:"pk_test_v1amvR35uoCNduJfkqGB8RLD",s3:{REGION:"us-east-1",BUCKET:"notes-app-2-api-prod-attachmentsbucket-1v9w7kkxnznb7"},apiGateway:{REGION:"us-east-1",URL:"https://api.serverless-stack.seed-demo.club/prod"},cognito:{REGION:"us-east-1",USER_POOL_ID:"us-east-1_mLbfKylhm",APP_CLIENT_ID:"mli2vaupiq3ga29m4698m6mrl",IDENTITY_POOL_ID:"us-east-1:4e377eff-0617-4098-b218-673490ffab8d"}}:{STRIPE_KEY:"pk_test_v1amvR35uoCNduJfkqGB8RLD",s3:{REGION:"us-east-1",BUCKET:"notes-app-2-api-dev-attachmentsbucket-qvdowkch2uj1"},apiGateway:{REGION:"us-east-1",URL:"https://api.serverless-stack.seed-demo.club/dev"},cognito:{REGION:"us-east-1",USER_POOL_ID:"us-east-1_f8l0OHPtp",APP_CLIENT_ID:"5r5o292r1n7s2vgje5u5c7vpq0",IDENTITY_POOL_ID:"us-east-1:b718098b-fe72-410b-b4c6-0750f9135672"}},J=Object(H.a)({MAX_ATTACHMENT_SIZE:5e6},Z);a(347);function $(){var e=Object(n.useRef)(null),t=Object(d.m)().id,a=Object(d.k)(),c=Object(n.useState)(null),o=Object(p.a)(c,2),l=o[0],s=o[1],u=Object(n.useState)(""),f=Object(p.a)(u,2),b=f[0],E=f[1],h=Object(n.useState)(!1),g=Object(p.a)(h,2),v=g[0],O=g[1],S=Object(n.useState)(!1),j=Object(p.a)(S,2),y=j[0],w=j[1];function k(e){return P.a.put("notes","/notes/".concat(t),{body:e})}function I(){return(I=Object(m.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(e.current&&e.current.size>J.MAX_ATTACHMENT_SIZE)){t.next=4;break}return alert("Please pick a file smaller than ".concat(J.MAX_ATTACHMENT_SIZE/1e6," MB.")),t.abrupt("return");case 4:if(O(!0),t.prev=5,!e.current){t.next=10;break}return t.next=9,q(e.current);case 9:r=t.sent;case 10:return t.next=12,k({content:b,attachment:r||l.attachment});case 12:a.push("/"),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),x(t.t0),O(!1);case 19:case"end":return t.stop()}}),t,null,[[5,15]])})))).apply(this,arguments)}function C(){return P.a.del("notes","/notes/".concat(t))}function _(){return(_=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),window.confirm("Are you sure you want to delete this note?")){e.next=4;break}return e.abrupt("return");case 4:return w(!0),e.prev=5,e.next=8,C();case 8:a.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),x(e.t0),w(!1);case 15:case"end":return e.stop()}}),e,null,[[5,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return P.a.get("notes","/notes/".concat(t))}function a(){return(a=Object(m.a)(i.a.mark((function t(){var a,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:if(a=t.sent,n=a.content,!(r=a.attachment)){t.next=9;break}return t.next=8,W.a.vault.get(r);case 8:a.attachmentURL=t.sent;case 9:E(n),s(a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),x(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[t]),r.a.createElement("div",{className:"Notes"},l&&r.a.createElement("form",{onSubmit:function(e){return I.apply(this,arguments)}},r.a.createElement(A.a,{controlId:"content"},r.a.createElement(D.a,{value:b,componentClass:"textarea",onChange:function(e){return E(e.target.value)}})),l.attachment&&r.a.createElement(A.a,null,r.a.createElement(R.a,null,"Attachment"),r.a.createElement(D.a.Static,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l.attachmentURL},l.attachment.replace(/^\w+-/,"")))),r.a.createElement(A.a,{controlId:"file"},!l.attachment&&r.a.createElement(R.a,null,"Attachment"),r.a.createElement(D.a,{onChange:function(t){e.current=t.target.files[0]},type:"file"})),r.a.createElement(U,{block:!0,type:"submit",bsSize:"large",bsStyle:"primary",isLoading:v,disabled:!(b.length>0)},"Save"),r.a.createElement(U,{block:!0,bsSize:"large",bsStyle:"danger",onClick:function(e){return _.apply(this,arguments)},isLoading:y},"Delete")))}var V=a(388);a(348);function Q(){var e=M({email:"",password:"",confirmPassword:"",confirmationCode:""}),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(d.k)(),l=Object(n.useState)(null),s=Object(p.a)(l,2),u=s[0],b=s[1],E=_().userHasAuthenticated,h=Object(n.useState)(!1),g=Object(p.a)(h,2),v=g[0],O=g[1];function S(e){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),e.prev=2,e.next=5,f.a.signUp({username:a.email,password:a.password});case 5:n=e.sent,O(!1),b(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),x(e.t0),O(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),e.prev=2,e.next=5,f.a.confirmSignUp(a.email,a.confirmationCode);case 5:return e.next=7,f.a.signIn(a.email,a.password);case 7:E(!0),o.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),x(e.t0),O(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"Signup"},null===u?r.a.createElement("form",{onSubmit:S},r.a.createElement(A.a,{controlId:"email",bsSize:"large"},r.a.createElement(R.a,null,"Email"),r.a.createElement(D.a,{autoFocus:!0,type:"email",value:a.email,onChange:c})),r.a.createElement(A.a,{controlId:"password",bsSize:"large"},r.a.createElement(R.a,null,"Password"),r.a.createElement(D.a,{type:"password",value:a.password,onChange:c})),r.a.createElement(A.a,{controlId:"confirmPassword",bsSize:"large"},r.a.createElement(R.a,null,"Confirm Password"),r.a.createElement(D.a,{type:"password",onChange:c,value:a.confirmPassword})),r.a.createElement(U,{block:!0,type:"submit",bsSize:"large",isLoading:v,disabled:!(a.email.length>0&&a.password.length>0&&a.password===a.confirmPassword)},"Signup")):r.a.createElement("form",{onSubmit:y},r.a.createElement(A.a,{controlId:"confirmationCode",bsSize:"large"},r.a.createElement(R.a,null,"Confirmation Code"),r.a.createElement(D.a,{autoFocus:!0,type:"tel",onChange:c,value:a.confirmationCode}),r.a.createElement(V.a,null,"Please check your email for the code.")),r.a.createElement(U,{block:!0,type:"submit",bsSize:"large",isLoading:v,disabled:!(a.confirmationCode.length>0)},"Verify")))}a(349);function ee(){var e=Object(n.useRef)(null),t=Object(d.k)(),a=Object(n.useState)(""),c=Object(p.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(!1),u=Object(p.a)(s,2),f=u[0],b=u[1];function E(){return(E=Object(m.a)(i.a.mark((function a(n){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),!(e.current&&e.current.size>J.MAX_ATTACHMENT_SIZE)){a.next=4;break}return alert("Please pick a file smaller than ".concat(J.MAX_ATTACHMENT_SIZE/1e6," MB.")),a.abrupt("return");case 4:if(b(!0),a.prev=5,!e.current){a.next=12;break}return a.next=9,q(e.current);case 9:a.t0=a.sent,a.next=13;break;case 12:a.t0=null;case 13:return r=a.t0,a.next=16,h({content:o,attachment:r});case 16:t.push("/"),a.next=23;break;case 19:a.prev=19,a.t1=a.catch(5),x(a.t1),b(!1);case 23:case"end":return a.stop()}}),a,null,[[5,19]])})))).apply(this,arguments)}function h(e){return P.a.post("notes","/notes",{body:e})}return r.a.createElement("div",{className:"NewNote"},r.a.createElement("form",{onSubmit:function(e){return E.apply(this,arguments)}},r.a.createElement(A.a,{controlId:"content"},r.a.createElement(D.a,{value:o,componentClass:"textarea",onChange:function(e){return l(e.target.value)}})),r.a.createElement(A.a,{controlId:"file"},r.a.createElement(R.a,null,"Attachment"),r.a.createElement(D.a,{onChange:function(t){e.current=t.target.files[0]},type:"file"})),r.a.createElement(U,{block:!0,type:"submit",bsSize:"large",bsStyle:"primary",isLoading:f,disabled:!(o.length>0)},"Create")))}var te=a(68);a(355);var ae=Object(te.injectStripe)((function(e){var t=e.isLoading,a=e.onSubmit,c=Object(N.a)(e,["isLoading","onSubmit"]),o=M({name:"",storage:""}),l=Object(p.a)(o,2),s=l[0],u=l[1],f=Object(n.useState)(!1),d=Object(p.a)(f,2),b=d[0],E=d[1],h=Object(n.useState)(!1),g=Object(p.a)(h,2),v=g[0],O=g[1];function S(){return(S=Object(m.a)(i.a.mark((function e(t){var n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.next=4,c.stripe.createToken({name:s.name});case 4:n=e.sent,r=n.token,o=n.error,E(!1),a(s.storage,{token:r,error:o});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t=b||t,r.a.createElement("form",{className:"BillingForm",onSubmit:function(e){return S.apply(this,arguments)}},r.a.createElement(A.a,{bsSize:"large",controlId:"storage"},r.a.createElement(R.a,null,"Storage"),r.a.createElement(D.a,{min:"0",type:"number",value:s.storage,onChange:u,placeholder:"Number of notes to store"})),r.a.createElement("hr",null),r.a.createElement(A.a,{bsSize:"large",controlId:"name"},r.a.createElement(R.a,null,"Cardholder's name"),r.a.createElement(D.a,{type:"text",value:s.name,onChange:u,placeholder:"Name on the card"})),r.a.createElement(R.a,null,"Credit Card Info"),r.a.createElement(te.CardElement,{className:"card-field",onChange:function(e){return O(e.complete)},style:{base:{fontSize:"18px",fontFamily:'"Open Sans", sans-serif'}}}),r.a.createElement(U,{block:!0,type:"submit",bsSize:"large",isLoading:t,disabled:!(""!==s.name&&""!==s.storage&&v)},"Purchase"))}));a(356);function ne(){var e=Object(d.k)(),t=Object(n.useState)(null),a=Object(p.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(p.a)(l,2),u=s[0],f=s[1];function b(e){return P.a.post("notes","/billing",{body:e})}function E(){return(E=Object(m.a)(i.a.mark((function t(a,n){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.token,!(c=n.error)){t.next=4;break}return x(c),t.abrupt("return");case 4:return f(!0),t.prev=5,t.next=8,b({storage:a,source:r.id});case 8:alert("Your card has been charged successfully!"),e.push("/"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),x(t.t0),f(!1);case 16:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){o(window.Stripe(J.STRIPE_KEY))}),[]),r.a.createElement("div",{className:"Settings"},r.a.createElement(te.StripeProvider,{stripe:c},r.a.createElement(te.Elements,null,r.a.createElement(ae,{isLoading:u,onSubmit:function(e,t){return E.apply(this,arguments)}}))))}a(357);function re(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h3",null,"Sorry, page not found!"))}function ce(){return r.a.createElement(d.g,null,r.a.createElement(d.d,{exact:!0,path:"/"},r.a.createElement(Y,null)),r.a.createElement(L,{exact:!0,path:"/login"},r.a.createElement(Y,null)),r.a.createElement(L,{exact:!0,path:"/signup"},r.a.createElement(Q,null)),r.a.createElement(T,{exact:!0,path:"/settings"},r.a.createElement(ne,null)),r.a.createElement(T,{exact:!0,path:"/notes/new"},r.a.createElement(ee,null)),r.a.createElement(T,{exact:!0,path:"/notes/:id"},r.a.createElement($,null)),r.a.createElement(d.d,null,r.a.createElement(re,null)))}a(358);var oe=function(){var e=Object(d.k)(),t=Object(n.useState)(!0),a=Object(p.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),u=Object(p.a)(l,2),v=u[0],O=u[1];function S(){return(S=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.currentSession();case 3:O(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"No current user"!==e.t0&&x(e.t0);case 9:o(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function j(){return(j=Object(m.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.signOut();case 2:O(!1),e.push("/login");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){S.apply(this,arguments)}()}),[]),!c&&r.a.createElement("div",{className:"App container"},r.a.createElement(b.a,{fluid:!0,collapseOnSelect:!0},r.a.createElement(b.a.Header,null,r.a.createElement(b.a.Brand,null,r.a.createElement(s.Link,{to:"/"},"Workspace")),r.a.createElement(b.a.Toggle,null)),r.a.createElement(b.a.Collapse,null,r.a.createElement(E.a,{pullRight:!0},v?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.LinkContainer,{to:"/settings"},r.a.createElement(h.a,null,"Settings")),r.a.createElement(h.a,{onClick:function(){return j.apply(this,arguments)}},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.LinkContainer,{to:"/signup"},r.a.createElement(h.a,null,"Signup")),r.a.createElement(g.LinkContainer,{to:"/login"},r.a.createElement(h.a,null,"Login")))))),r.a.createElement(I,null,r.a.createElement(C.Provider,{value:{isAuthenticated:v,userHasAuthenticated:O}},r.a.createElement(ce,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));y.a({dsn:"https://5f83aa2e21064e47bab8a1f308f940eb@sentry.io/5185720"}),l.a.configure({Auth:{mandatorySignIn:!0,region:J.cognito.REGION,userPoolId:J.cognito.USER_POOL_ID,identityPoolId:J.cognito.IDENTITY_POOL_ID,userPoolWebClientId:J.cognito.APP_CLIENT_ID},Storage:{region:J.s3.REGION,bucket:J.s3.BUCKET,identityPoolId:J.cognito.IDENTITY_POOL_ID},API:{endpoints:[{name:"notes",endpoint:J.apiGateway.URL,region:J.apiGateway.REGION}]}}),o.a.render(r.a.createElement(s.BrowserRouter,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[216,1,2]]]);
//# sourceMappingURL=main.52a8a1b8.chunk.js.map