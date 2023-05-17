(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{5099:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return dn}});var r,o,i,a,s,c,u,l=t(9434),d=t(9439),p=t(2791),f=t(168),h=t(8789),m=t(1439),v=h.ZP.form(r||(r=(0,f.Z)(["\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: ","px;\n  top: 50%;\n  left: 50%;\n  background-color:","\n  padding: ","px;\n  margin-bottom: 50px;\n  border-radius: 10px;\n"])),m.r.gap[3],m.r.colors.white,m.r.padding[2]),x=h.ZP.button(o||(o=(0,f.Z)(["\n  background-color: ",";\n  padding: 20px 250px;\n  border-radius: 10px;\n  color: ",";\n  text-transform: uppercase;\n  font-size: ",";\n  border: none;\n"])),m.r.colors.green,m.r.colors.white,m.r.typography.medium),g=t(3634),Z=function(n){return n.contacts.contacts},b=function(n){return n.contacts.error},y=function(n){return n.contacts.isLoading},j=function(n){return n.filter},w=t(4014),P=t(1743),z=t(184),C=function(){var n=(0,p.useState)(""),e=(0,d.Z)(n,2),t=e[0],r=e[1],o=(0,p.useState)(""),i=(0,d.Z)(o,2),a=i[0],s=i[1],c=(0,l.I0)(),u=(0,l.v9)(Z),f=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":s(o);break;default:return}},h=function(){r(""),s("")};return(0,z.jsxs)(v,{onSubmit:function(n){n.preventDefault(),u.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?(0,w.oX)(t):u.find((function(n){return n.number===a}))?(0,w.DA)(a):(c((0,g.uK)({name:t,number:a})),h())},children:[(0,z.jsx)(P.Z,{sx:{width:"70ch"},id:"outlined-basic",label:"Name",variant:"outlined",value:t,onChange:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,z.jsx)(P.Z,{sx:{width:"70ch"},id:"outlined-basic",label:"Number",variant:"outlined",value:a,onChange:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,z.jsx)(x,{type:"submit",children:"Add contact"})]})},S=h.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 5px;\n  > p {\n    font-size: {theme.typography.text};\n  }\n"]))),k=h.ZP.ul(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: ","px;\n  font-size: ",";\n  background-color: ",";\n"])),m.r.gap[3],m.r.padding[2],m.r.typography.text,m.r.colors.white),E=h.ZP.li(s||(s=(0,f.Z)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  width: 100%;\n  gap: ",";\n  font-size: ",";\n"])),m.r.gap[3],m.r.typography.text),I=h.ZP.button(c||(c=(0,f.Z)(["\n  background-color: ",";\n  padding: 10px 20px;\n  color: ",";\n  border-radius: 10px;\n  transition: transform 300ms ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n"])),m.r.colors.green,m.r.colors.white),L=t(3017),A=t(9952),_=t(3229),M=function(){var n=(0,l.I0)(),e=(0,l.v9)(j),t=(0,l.v9)(Z),r=(0,l.v9)(b),o=(0,l.v9)(y);(0,p.useEffect)((function(){n((0,g.yF)())}),[n]);var i=function(){var n=e.toLowerCase(),r=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return 0===r.length&&e&&(0,w.Gj)(),r}();return(0,z.jsxs)(k,{children:[o&&(0,z.jsx)(L.a,{}),r&&(0,w.YZ)(),i.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,z.jsxs)(E,{children:[(0,z.jsxs)("div",{children:[(0,z.jsxs)(S,{children:[(0,z.jsx)(A.Z,{fontSize:"large",color:"primary"}),(0,z.jsx)("p",{children:r})]}),(0,z.jsxs)(S,{children:[(0,z.jsx)(_.Z,{fontSize:"large",color:"primary"}),(0,z.jsx)("p",{children:o})]})]}),(0,z.jsx)(I,{type:"button",onClick:function(){return n((0,g.GK)(t))},children:"Delete"})]},t)}))]})},F=h.ZP.div(u||(u=(0,f.Z)(["\n  display: flex;\n  padding: ","px;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"])),m.r.padding[2],m.r.colors.white),N=t(4808),R=t(5403),T=t(4942),D=t(3366),q=t(7462),G=t(8182),K=t(4419),O=t(4036),V=t(890),B=t(3840),H=t(2930),J=t(6934),W=t(5878),X=t(1217);function Y(n){return(0,X.Z)("MuiInputAdornment",n)}var $,Q,U,nn,en=(0,W.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),tn=t(1402),rn=["children","className","component","disablePointerEvents","disableTypography","position","variant"],on=(0,J.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["position".concat((0,O.Z)(t.position))],!0===t.disablePointerEvents&&e.disablePointerEvents,e[t.variant]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,q.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&(0,T.Z)({},"&.".concat(en.positionStart,"&:not(.").concat(en.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),an=p.forwardRef((function(n,e){var t=(0,tn.Z)({props:n,name:"MuiInputAdornment"}),r=t.children,o=t.className,i=t.component,a=void 0===i?"div":i,s=t.disablePointerEvents,c=void 0!==s&&s,u=t.disableTypography,l=void 0!==u&&u,d=t.position,f=t.variant,h=(0,D.Z)(t,rn),m=(0,H.Z)()||{},v=f;f&&m.variant,m&&!v&&(v=m.variant);var x=(0,q.Z)({},t,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:c,position:d,variant:v}),g=function(n){var e=n.classes,t=n.disablePointerEvents,r=n.hiddenLabel,o=n.position,i=n.size,a=n.variant,s={root:["root",t&&"disablePointerEvents",o&&"position".concat((0,O.Z)(o)),a,r&&"hiddenLabel",i&&"size".concat((0,O.Z)(i))]};return(0,K.Z)(s,Y,e)}(x);return(0,z.jsx)(B.Z.Provider,{value:null,children:(0,z.jsx)(on,(0,q.Z)({as:a,ownerState:x,className:(0,G.Z)(g.root,o),ref:e},h,{children:"string"!==typeof r||l?(0,z.jsxs)(p.Fragment,{children:["start"===d?$||($=(0,z.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,z.jsx)(V.Z,{color:"text.secondary",children:r})}))})}));function sn(){var n=(0,l.I0)(),e=(0,l.v9)(j);return(0,z.jsx)(F,{children:(0,z.jsx)(P.Z,{value:e,onChange:function(e){n((0,N.h)(e.currentTarget.value))},placeholder:" ",id:"input-with-icon-textfield",label:"Find contact by name",InputProps:{startAdornment:(0,z.jsx)(an,{position:"start",children:(0,z.jsx)(R.Z,{})})},variant:"standard"})})}var cn=h.ZP.div(Q||(Q=(0,f.Z)(["\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: ","px;\n  margin-top: 100px;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n"])),m.r.padding[2],m.r.colors.gray,m.r.colors.black),un=h.ZP.h1(U||(U=(0,f.Z)(["\n  font-size: ",";\n  text-align: center;\n  margin-bottom: 20px;\n"])),m.r.typography.title),ln=h.ZP.h2(nn||(nn=(0,f.Z)(["\n  font-size: ",";\n  text-align: center;\n  margin-bottom: 20px;\n"])),m.r.typography.title);function dn(){var n=(0,l.v9)(y),e=(0,l.v9)(Z),t=(0,l.I0)();return(0,p.useEffect)((function(){t((0,g.yF)())}),[t]),(0,z.jsxs)(cn,{children:[n&&(0,z.jsx)(L.a,{}),(0,z.jsx)(un,{children:"Phonebook"}),(0,z.jsx)(C,{}),0===e.length?(0,z.jsx)(un,{children:"There are no contacts"}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ln,{children:"Contacts"}),(0,z.jsx)(sn,{}),(0,z.jsx)(M,{})]})]})}},9952:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");e.Z=a},3229:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"LocalPhone");e.Z=a},5403:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=a},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},4454:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return m},unsupportedProp:function(){return v},useControlled:function(){return x.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return b.Z}});var r=t(5902),o=t(4036),i=t(8949).Z,a=t(9201),s=t(3199);var c=function(n,e){return function(){return null}},u=t(9103),l=t(8301),d=t(7602);t(7462);var p=function(n,e){return function(){return null}},f=t(2971).Z,h=t(162),m=t(6248).Z;var v=function(n,e,t,r,o){return null},x=t(8744),g=t(9683),Z=t(2071),b=t(3031),y={configure:function(n){r.Z.configure(n)}}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=99.e0a30573.chunk.js.map