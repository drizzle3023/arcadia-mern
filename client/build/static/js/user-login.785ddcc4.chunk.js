(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[7],{101:function(e,a,t){"use strict";var r=t(2),s=t.n(r),n=t(107);a.a=Object(n.d)((function(e){return s.a.createElement(n.a,e)}),{withRef:!1})},104:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return o}));var r=t(2),s=t.n(r),n=t(125),l=function(e){return s.a.createElement(n.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},o=function(e){return s.a.createElement("div",{className:"separator ".concat(e.className)})}},112:function(e,a,t){"use strict";var r=t(110),s=(t(108),t(109));t.d(a,"a",(function(){return s.a}));r.a},220:function(e,a,t){"use strict";t.r(a);var r=t(95),s=t(96),n=t(98),l=t(97),o=t(99),c=t(2),i=t.n(c),m=t(126),u=t(127),d=t(128),p=t(206),E=t(207),b=t(116),g=t(100),f=t(28),h=t(112),v=t(130),N=t(3),w=t(104),x=t(101),y=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(n.a)(this,Object(l.a)(a).call(this,e))).onUserLogin=function(e){t.props.loading||""!==e.email&&""!==e.password&&t.props.loginUser(e,t.props.history)},t.validateEmail=function(e){var a;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(a="Invalid email address"):a="Please enter your email address",a},t.validatePassword=function(e){var a;return e?e.length<4&&(a="Value must be longer than 3 characters"):a="Please enter your password",a},t.state={email:"demo@gogo.com",password:"gogo123"},t}return Object(o.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.props.error&&h.a.warning(this.props.error,"Login Error",3e3,null,null,"")}},{key:"render",value:function(){var e=this,a=this.state,t=a.password,r={email:a.email,password:t};return i.a.createElement(m.a,{className:"h-100"},i.a.createElement(w.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},i.a.createElement(u.a,{className:"auth-card"},i.a.createElement("div",{className:"position-relative image-side "},i.a.createElement("p",{className:"text-white h2"},"MAGIC IS IN THE DETAILS"),i.a.createElement("p",{className:"white mb-0"},"Please use your credentials to login.",i.a.createElement("br",null),"If you are not a member, please"," ",i.a.createElement(g.b,{to:"/register",className:"white"},"register"),".")),i.a.createElement("div",{className:"form-side"},i.a.createElement(g.b,{to:"/",className:"white"},i.a.createElement("span",{className:"logo-single"})),i.a.createElement(d.a,{className:"mb-4"},i.a.createElement(x.a,{id:"user.login-title"})),i.a.createElement(v.c,{initialValues:r,onSubmit:this.onUserLogin},(function(a){var t=a.errors,r=a.touched;return i.a.createElement(v.b,{className:"av-tooltip tooltip-label-bottom"},i.a.createElement(p.a,{className:"form-group has-float-label"},i.a.createElement(E.a,null,i.a.createElement(x.a,{id:"user.email"})),i.a.createElement(v.a,{className:"form-control",name:"email",validate:e.validateEmail}),t.email&&r.email&&i.a.createElement("div",{className:"invalid-feedback d-block"},t.email)),i.a.createElement(p.a,{className:"form-group has-float-label"},i.a.createElement(E.a,null,i.a.createElement(x.a,{id:"user.password"})),i.a.createElement(v.a,{className:"form-control",type:"password",name:"password",validate:e.validatePassword}),t.password&&r.password&&i.a.createElement("div",{className:"invalid-feedback d-block"},t.password)),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},i.a.createElement(g.b,{to:"/user/forgot-password"},i.a.createElement(x.a,{id:"user.forgot-password-question"})),i.a.createElement(b.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(e.props.loading?"show-spinner":""),size:"lg"},i.a.createElement("span",{className:"spinner d-inline-block"},i.a.createElement("span",{className:"bounce1"}),i.a.createElement("span",{className:"bounce2"}),i.a.createElement("span",{className:"bounce3"})),i.a.createElement("span",{className:"label"},i.a.createElement(x.a,{id:"user.login-button"})))))}))))))}}]),a}(c.Component);a.default=Object(f.b)((function(e){var a=e.authUser;return{user:a.user,loading:a.loading,error:a.error}}),{loginUser:N.I})(y)}}]);
//# sourceMappingURL=user-login.785ddcc4.chunk.js.map