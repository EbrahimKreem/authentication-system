(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{328:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(327),i=a(68);t.a=function(e){var t=e.field;return r.a.createElement(o.a,{name:t},function(e){return r.a.createElement(i.a,{basic:!0,color:"red",pointing:"below",size:"small"},e)})}},340:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(458),i=a(327),c=a(328);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{field:"email"}),r.a.createElement(o.a.Field,null,r.a.createElement(i.b,{type:"email",name:"email",placeholder:"Email"})))}},341:function(e,t,a){"use strict";var n=a(337),r=a(0),o=a.n(r),i=a(458),c=a(455),l=a(43),u=a(327),s=a(328);t.a=function(e){var t=e.placeholder,a=e.name,m=Object(r.useState)(!1),d=Object(n.a)(m,2),p=d[0],f=d[1],b=function(e){return f(!p)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{field:a||"password"}),o.a.createElement(i.a.Field,null,o.a.createElement(u.b,{type:"password",name:a||"password"},function(e){var a=e.field;return o.a.createElement(c.a,Object.assign({},a,{type:p?"text":"password",icon:o.a.createElement(l.a,{name:p?"eye":"eye slash",circular:!0,link:!0,onClick:b}),placeholder:t||"Password"}))})))}},354:function(e,t,a){"use strict";var n=a(337),r=a(0),o=a.n(r),i=a(458),c=a(322),l=a(448),u=a(327),s=a(39),m=a(340),d=a(341),p=a(328),f=a(332),b=a.n(f),h=a(333),g=a(372),v=a(456),E=a(43),k=a(329),w=a(330),y=a.n(w);function j(){var e=Object(k.a)(["\n  {\n    me {\n      _id\n      name\n    }\n  }\n"]);return j=function(){return e},e}var O=y()(j());function S(){var e=Object(k.a)(["\n  mutation($data: AuthFacebookInput!) {\n    authFacebook(data: $data) {\n      token\n      user {\n        _id\n        name\n      }\n    }\n  }\n"]);return S=function(){return e},e}function I(){var e=Object(k.a)(["\n  mutation($data: AuthGoogleInput!) {\n    authGoogle(data: $data) {\n      user {\n        _id\n        name\n      }\n      token\n    }\n  }\n"]);return I=function(){return e},e}var F=y()(I()),L=y()(S()),x=function(e){var t=e.path,a=e.history,n=e.setIsLoading,r=Object(v.a)(F),i=function(){var e=Object(h.a)(b.a.mark(function e(t){var o,i,c,l;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.profileObj,i=t.googleId,e.prev=1,e.next=4,r({variables:{data:{name:o.name,googleId:i,email:o.email}},update:function(e,t){var a=t.data;e.writeQuery({query:O,data:{me:a.authGoogle.user}})}});case 4:c=e.sent,l=c.data,localStorage.setItem("token",l.authGoogle.token),a.push("/authentication-system/secret"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(!1);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(g.GoogleLogin,{clientId:"750525016321-hs6um0d2o34tksfeg9da78da501fto25.apps.googleusercontent.com",onSuccess:i,onFailure:i,render:function(e){return o.a.createElement("button",{onClick:function(){n(!0),e.onClick()},disabled:e.disabled,className:"ui google plus labeled icon button",type:"button"},o.a.createElement(E.a,{name:"google"})," ",t," With Google")}})},q=a(373),C=a.n(q),G=function(e){var t=e.path,a=e.history,n=e.setIsLoading,r=Object(v.a)(L),i=function(){var e=Object(h.a)(b.a.mark(function e(t){var o,i,c,l;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.name,i=t.userID,e.prev=1,e.next=4,r({variables:{data:{email:i,name:o,facebookId:i}},update:function(e,t){var a=t.data;e.writeQuery({query:O,data:{me:a.authFacebook.user}})}});case 4:c=e.sent,l=c.data,localStorage.setItem("token",l.authFacebook.token),a.push("/authentication-system/secret"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(!1);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(C.a,{appId:"351814088793425",autoLoad:!1,fields:"name,email,picture",callback:i,render:function(e){return o.a.createElement("button",{onClick:function(){n(!0),e.onClick()},disabled:e.disabled,className:"ui facebook right floated labeled icon button",type:"button"},o.a.createElement(E.a,{name:"facebook f"})," ",t," With Facebook")}})};t.a=function(e){var t=e.showUserName,a=e.validationSchema,f=e.initialValues,b=e.onSubmit,h=e.showForgotPasswordLink,g=void 0!==h&&h,v=e.path,E=void 0===v?"Register":v,k=e.history,w=Object(r.useState)(!1),y=Object(n.a)(w,2),j=y[0],O=y[1];return o.a.createElement(u.c,{initialValues:f,validationSchema:a,onSubmit:b},function(e){return o.a.createElement(i.a,{onSubmit:e.handleSubmit,loading:e.isSubmitting||j},t?o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{field:"name"}),o.a.createElement(i.a.Field,null,o.a.createElement(u.b,{type:"text",name:"name",placeholder:"Username"}))):null,o.a.createElement(m.a,null),o.a.createElement(d.a,null),g?o.a.createElement(s.b,{to:"/authentication-system/forgot-password",style:{float:"right",paddingTop:9}},"Forgot Password?"):null,o.a.createElement(c.a,{type:"submit",basic:!0},"Submit"),o.a.createElement(l.a,{horizontal:!0},o.a.createElement("p",null,o.a.createElement("em",null,"OR"))),o.a.createElement(x,{path:E,history:k,setIsLoading:O}),o.a.createElement(G,{path:E,history:k,setIsLoading:O}))})}},460:function(e,t,a){"use strict";a.r(t);var n=a(332),r=a.n(n),o=a(333),i=a(0),c=a.n(i),l=a(456),u=a(342),s=a(323),m=a(448),d=a(450),p=a(354),f=a(329),b=a(330),h=a.n(b);function g(){var e=Object(f.a)(["\n  mutation($data: LoginInputType!) {\n    login(data: $data) {\n      user {\n        _id\n        name\n      }\n      token\n    }\n  }\n"]);return g=function(){return e},e}var v=h()(g());function E(){var e=Object(f.a)(["\n  {\n    me {\n      _id\n      name\n    }\n  }\n"]);return E=function(){return e},e}var k=h()(E()),w=u.object().shape({email:u.string().email("Invalid email").required("Required"),password:u.string().min(8,"Too Short!").max(30,"Too Long!").required("Required")});t.default=function(e){var t=Object(l.a)(v);Object(i.useEffect)(function(){localStorage.getItem("token")&&e.history.push("/secret")},[]);var a=function(){var a=Object(o.a)(r.a.mark(function a(n,o){var i,c,l,u;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t({variables:{data:n},update:function(e,t){var a=t.data;e.writeQuery({query:k,data:{me:a.register.user}})}});case 3:i=a.sent,c=i.data,localStorage.setItem("token",c.login.token),e.history.push("/secret"),a.next=15;break;case 9:a.prev=9,a.t0=a.catch(0),l=a.t0.message.split(":")[1],u=l.toLowerCase().includes("email"),o.setFieldError(u?"email":"password",l),o.setSubmitting(!1);case 15:case"end":return a.stop()}},a,null,[[0,9]])}));return function(e,t){return a.apply(this,arguments)}}();return c.a.createElement("div",{className:"frm"},c.a.createElement(s.a,{stacked:!0},c.a.createElement(m.a,{horizontal:!0},c.a.createElement(d.a,null,c.a.createElement("em",null,"Login"))),c.a.createElement(p.a,Object.assign({showUserName:!1,initialValues:{email:"",password:""},validationSchema:w,onSubmit:a,showForgotPasswordLink:!0},e,{path:"Login"}))))}}}]);
//# sourceMappingURL=7.b609a037.chunk.js.map