"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[316],{2498:function(e,r,n){n.d(r,{Z:function(){return s}});var t=n(577),a=n(184);function s(e){switch(e.message){case 400:t.Am.error("Login error. Please re-login");break;case 401:t.Am.error("Unauthorized. Please authenticate");break;case 500:t.Am.error("Server is not available. Please retry your request later");break;default:t.Am.error(null)}return(0,a.jsx)(t.Ix,{position:"top-center",autoClose:3e3,limit:1})}},7920:function(e,r,n){var t=n(885),a=n(2791),s=n(7022),l=n(3855),o=n(3360),i=n(184);r.Z=function(e){var r=e.title,n=e.buttonName,c=e.handleClick,m=e.isRegister,u=(0,a.useState)(""),f=(0,t.Z)(u,2),p=f[0],d=f[1],h=(0,a.useState)(""),X=(0,t.Z)(h,2),b=X[0],j=X[1],y=(0,a.useState)(""),v=(0,t.Z)(y,2),_=v[0],g=v[1];return(0,i.jsxs)(s.Z,{className:"mt-4 mb-5",children:[(0,i.jsx)("h1",{className:"mb-5",children:r}),(0,i.jsxs)(l.Z,{onSubmit:function(e){e.preventDefault(),c(p,b,_),d(""),j(""),g("")},children:[(0,i.jsxs)(l.Z.Group,{className:"mb-3",children:[(0,i.jsx)(l.Z.Label,{children:"Email address"}),(0,i.jsx)(l.Z.Control,{type:"email",value:p,placeholder:"Enter email",onChange:function(e){return d(e.target.value)},pattern:"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$",required:!0})]}),m&&(0,i.jsxs)(l.Z.Group,{className:"mb-3",children:[(0,i.jsx)(l.Z.Label,{children:"Name"}),(0,i.jsx)(l.Z.Control,{type:"text",value:_,placeholder:"Your name",onChange:function(e){return g(e.target.value)},required:!0})]}),(0,i.jsxs)(l.Z.Group,{className:"mb-3",children:[(0,i.jsx)(l.Z.Label,{children:"Password"}),(0,i.jsx)(l.Z.Control,{type:"password",value:b,placeholder:"Password",onChange:function(e){return j(e.target.value)},pattern:"/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/",title:"The password must be at least 6 characters using numbers, Latin, lowercase and uppercase characters.",required:!0})]}),(0,i.jsx)(o.Z,{variant:"primary",type:"submit",children:n})]})]})}},9388:function(e,r,n){n.d(r,{Z:function(){return c}});var t,a=n(168),s=n(9311),l=n.n(s),o=n(7031),i=n(184);function c(){return(0,i.jsx)(l(),{css:(0,o.css)(t||(t=(0,a.Z)(["\n        margin: 5% 50%;\n        display: block;\n      "]))),color:"#0d6efd",size:20})}},5285:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(2978),a=n(7022),s=n(501),l=n(7920),o=n(5154),i=n(184),c=function(){var e=(0,t.I0)();return(0,i.jsx)(l.Z,{title:"Registration Page",handleClick:function(r,n,t){e(o.Z.register({email:r,password:n,name:t}))},isRegister:!0,buttonName:"Sign in"})},m=n(9388),u=n(4289),f=n(2498);function p(){var e=(0,t.v9)(u.Z.getLoading),r=(0,t.v9)(u.Z.getError);return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(c,{}),e&&(0,i.jsx)(m.Z,{}),r&&(0,i.jsx)(f.Z,{message:r}),(0,i.jsxs)("p",{className:"ms-3",children:["Already registered? ",(0,i.jsx)(s.Link,{to:"login",children:"Click me"})]})]})}},9311:function(e,r,n){var t=this&&this.__makeTemplateObject||function(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e},a=this&&this.__extends||function(){var e=function(r,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},e(r,n)};return function(r,n){function t(){this.constructor=r}e(r,n),r.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}}(),s=this&&this.__createBinding||(Object.create?function(e,r,n,t){void 0===t&&(t=n),Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[n]}})}:function(e,r,n,t){void 0===t&&(t=n),e[t]=r[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(r,e,n);return l(r,e),r};Object.defineProperty(r,"__esModule",{value:!0});var i,c,m,u,f,p,d,h,X=o(n(2791)),b=n(7031),j=n(2098),y=[1,3,5],v=[b.keyframes(i||(i=t(["\n      25% {transform: translateX(-","rem) scale(0.75)}\n      50% {transform: translateX(-","rem) scale(0.6)}\n      75% {transform: translateX(-","rem) scale(0.5)}\n      95% {transform: translateX(0rem) scale(1)}\n    "],["\n      25% {transform: translateX(-","rem) scale(0.75)}\n      50% {transform: translateX(-","rem) scale(0.6)}\n      75% {transform: translateX(-","rem) scale(0.5)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])),y[0],y[1],y[2]),b.keyframes(c||(c=t(["\n      25% {transform: translateX(-","rem) scale(0.75)}\n      50% {transform: translateX(-","rem) scale(0.6)}\n      75% {transform: translateX(-","rem) scale(0.6)}\n      95% {transform: translateX(0rem) scale(1)}\n    "],["\n      25% {transform: translateX(-","rem) scale(0.75)}\n      50% {transform: translateX(-","rem) scale(0.6)}\n      75% {transform: translateX(-","rem) scale(0.6)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])),y[0],y[1],y[1]),b.keyframes(m||(m=t(["\n      25% {transform: translateX(-","rem) scale(0.75)}\n      75% {transform: translateX(-","rem) scale(0.75)}\n      95% {transform: translateX(0rem) scale(1)}\n    "],["\n      25% {transform: translateX(-","rem) scale(0.75)}\n      75% {transform: translateX(-","rem) scale(0.75)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])),y[0],y[0]),b.keyframes(u||(u=t(["\n      25% {transform: translateX(","rem) scale(0.75)}\n      75% {transform: translateX(","rem) scale(0.75)}\n      95% {transform: translateX(0rem) scale(1)}\n    "],["\n      25% {transform: translateX(","rem) scale(0.75)}\n      75% {transform: translateX(","rem) scale(0.75)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])),y[0],y[0]),b.keyframes(f||(f=t(["\n      25% {transform: translateX(","rem) scale(0.75)}\n      50% {transform: translateX(","rem) scale(0.6)}\n      75% {transform: translateX(","rem) scale(0.6)}\n      95% {transform: translateX(0rem) scale(1)}\n    "],["\n      25% {transform: translateX(","rem) scale(0.75)}\n      50% {transform: translateX(","rem) scale(0.6)}\n      75% {transform: translateX(","rem) scale(0.6)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])),y[0],y[1],y[1]),b.keyframes(p||(p=t(["\n      25% {transform: translateX(","rem) scale(0.75)}\n      50% {transform: translateX(","rem) scale(0.6)}\n      75% {transform: translateX(","rem) scale(0.5)}\n      95% {transform: translateX(0rem) scale(1)}\n    "],["\n      25% {transform: translateX(","rem) scale(0.75)}\n      50% {transform: translateX(","rem) scale(0.6)}\n      75% {transform: translateX(","rem) scale(0.5)}\n      95% {transform: translateX(0rem) scale(1)}\n    "])),y[0],y[1],y[2])],_=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.style=function(e){var n=r.props,a=n.size,s=n.color,l=n.speedMultiplier,o=j.parseLengthAndUnit(a),i=o.value,c=o.unit;return b.css(d||(d=t(["\n      position: absolute;\n      font-size: ",";\n      width: ",";\n      height: ",";\n      background: ",";\n      border-radius: 50%;\n      animation: "," ","s infinite;\n      animation-fill-mode: forwards;\n    "],["\n      position: absolute;\n      font-size: ",";\n      width: ",";\n      height: ",";\n      background: ",";\n      border-radius: 50%;\n      animation: "," ","s infinite;\n      animation-fill-mode: forwards;\n    "])),""+i/3+c,""+i+c,""+i+c,s,v[e],1.5/l)},r.wrapper=function(){return b.css(h||(h=t(["\n      position: relative;\n    "],["\n      position: relative;\n    "])))},r}return a(r,e),r.prototype.render=function(){var e=this.props,r=e.loading,n=e.css;return r?b.jsx("span",{css:[this.wrapper(),n]},b.jsx("span",{css:this.style(0)}),b.jsx("span",{css:this.style(1)}),b.jsx("span",{css:this.style(2)}),b.jsx("span",{css:this.style(3)}),b.jsx("span",{css:this.style(4)}),b.jsx("span",{css:this.style(5)})):null},r.defaultProps=j.sizeDefaults(15),r}(X.PureComponent);r.default=_}}]);
//# sourceMappingURL=register-page.48bf4d82.chunk.js.map