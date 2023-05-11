(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{5099:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return fn}});var r,o,i,a,s,c,u,l,d,p=t(9434),f=t(9439),h=t(2791),m=t(168),x=t(8789),v=t(1439),g=x.ZP.form(r||(r=(0,m.Z)(["\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: ","px;\n  top: 50%;\n  left: 50%;\n  background-color:","\n  padding: ","px;\n  margin-bottom: 50px;\n  border-radius: 10px;\n"])),v.r.gap[3],v.r.colors.white,v.r.padding[2]),Z=(x.ZP.label(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: ","px;\n"])),v.r.gap[1]),x.ZP.input(i||(i=(0,m.Z)(["\n  border: 1px solid ",";\n  padding: ","px;\n  border-radius: 20px;\n  width: 100px;\n"])),v.r.colors.second,v.r.padding[2]),x.ZP.button(a||(a=(0,m.Z)(["\n  background-color: ",";\n  padding: 20px 250px;\n  border-radius: 10px;\n  color: ",";\n  text-transform: uppercase;\n  font-size: ",";\n  border: none;\n"])),v.r.colors.green,v.r.colors.white,v.r.typography.medium)),b=t(3634),y=function(n){return n.contacts.items},j=function(n){return n.contacts.error},w=function(n){return n.contacts.isLoading},P=function(n){return n.filter},z=t(4014),C=t(1743),S=t(184),k=function(){var n=(0,h.useState)(""),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=(0,h.useState)(""),i=(0,f.Z)(o,2),a=i[0],s=i[1],c=(0,p.I0)(),u=(0,p.v9)(y),l=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":s(o);break;default:return}},d=function(){r(""),s("")};return(0,S.jsxs)(g,{onSubmit:function(n){n.preventDefault(),u.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?(0,z.oX)(t):u.find((function(n){return n.number===a}))?(0,z.DA)(a):(c((0,b.uK)({name:t,number:a})),d())},children:[(0,S.jsx)(C.Z,{sx:{width:"70ch"},id:"outlined-basic",label:"Name",variant:"outlined",value:t,onChange:l,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,S.jsx)(C.Z,{sx:{width:"70ch"},id:"outlined-basic",label:"Number",variant:"outlined",value:a,onChange:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,S.jsx)(Z,{type:"submit",children:"Add contact"})]})},E=x.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 5px;\n  > p {\n    font-size: {theme.typography.text};\n  }\n"]))),L=x.ZP.ul(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: ","px;\n  font-size: ",";\n  background-color: ",";\n"])),v.r.gap[3],v.r.padding[2],v.r.typography.text,v.r.colors.white),A=x.ZP.li(u||(u=(0,m.Z)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  width: 100%;\n  gap: ",";\n  font-size: ",";\n"])),v.r.gap[3],v.r.typography.text),I=x.ZP.button(l||(l=(0,m.Z)(["\n  background-color: ",";\n  padding: 10px 20px;\n  color: ",";\n  border-radius: 10px;\n  transition: transform 300ms ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n"])),v.r.colors.green,v.r.colors.white),_=t(3017),M=t(9952),F=t(3229),N=function(){var n=(0,p.I0)(),e=(0,p.v9)(P),t=(0,p.v9)(y),r=(0,p.v9)(j),o=(0,p.v9)(w);(0,h.useEffect)((function(){n((0,b.yF)())}),[n]);var i=function(){var n=e.toLowerCase(),r=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return 0===r.length&&e&&(0,z.Gj)(),r}();return(0,S.jsxs)(L,{children:[o&&(0,S.jsx)(_.a,{}),r&&(0,z.YZ)(),i.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,S.jsxs)(A,{children:[(0,S.jsxs)("div",{children:[(0,S.jsxs)(E,{children:[(0,S.jsx)(M.Z,{fontSize:"large",color:"primary"}),(0,S.jsx)("p",{children:r})]}),(0,S.jsxs)(E,{children:[(0,S.jsx)(F.Z,{fontSize:"large",color:"primary"}),(0,S.jsx)("p",{children:o})]})]}),(0,S.jsx)(I,{type:"button",onClick:function(){return n((0,b.GK)(t))},children:"Delete"})]},t)}))]})},R=x.ZP.div(d||(d=(0,m.Z)(["\n  display: flex;\n  padding: ","px;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"])),v.r.padding[2],v.r.colors.white),T=t(4808),D=t(5403),q=t(4942),G=t(3366),K=t(7462),O=t(8182),V=t(4419),B=t(4036),H=t(890),J=t(3840),W=t(2930),X=t(6934),Y=t(5878),$=t(1217);function Q(n){return(0,$.Z)("MuiInputAdornment",n)}var U,nn,en,tn,rn=(0,Y.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),on=t(1402),an=["children","className","component","disablePointerEvents","disableTypography","position","variant"],sn=(0,X.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["position".concat((0,B.Z)(t.position))],!0===t.disablePointerEvents&&e.disablePointerEvents,e[t.variant]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,K.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&(0,q.Z)({},"&.".concat(rn.positionStart,"&:not(.").concat(rn.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),cn=h.forwardRef((function(n,e){var t=(0,on.Z)({props:n,name:"MuiInputAdornment"}),r=t.children,o=t.className,i=t.component,a=void 0===i?"div":i,s=t.disablePointerEvents,c=void 0!==s&&s,u=t.disableTypography,l=void 0!==u&&u,d=t.position,p=t.variant,f=(0,G.Z)(t,an),m=(0,W.Z)()||{},x=p;p&&m.variant,m&&!x&&(x=m.variant);var v=(0,K.Z)({},t,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:c,position:d,variant:x}),g=function(n){var e=n.classes,t=n.disablePointerEvents,r=n.hiddenLabel,o=n.position,i=n.size,a=n.variant,s={root:["root",t&&"disablePointerEvents",o&&"position".concat((0,B.Z)(o)),a,r&&"hiddenLabel",i&&"size".concat((0,B.Z)(i))]};return(0,V.Z)(s,Q,e)}(v);return(0,S.jsx)(J.Z.Provider,{value:null,children:(0,S.jsx)(sn,(0,K.Z)({as:a,ownerState:v,className:(0,O.Z)(g.root,o),ref:e},f,{children:"string"!==typeof r||l?(0,S.jsxs)(h.Fragment,{children:["start"===d?U||(U=(0,S.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,S.jsx)(H.Z,{color:"text.secondary",children:r})}))})}));function un(){var n=(0,p.I0)(),e=(0,p.v9)(P);return(0,S.jsx)(R,{children:(0,S.jsx)(C.Z,{value:e,onChange:function(e){n((0,T.h)(e.currentTarget.value))},placeholder:" ",id:"input-with-icon-textfield",label:"Find contact by name",InputProps:{startAdornment:(0,S.jsx)(cn,{position:"start",children:(0,S.jsx)(D.Z,{})})},variant:"standard"})})}var ln=x.ZP.div(nn||(nn=(0,m.Z)(["\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: ","px;\n  margin-top: 100px;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n"])),v.r.padding[2],v.r.colors.gray,v.r.colors.black),dn=x.ZP.h1(en||(en=(0,m.Z)(["\n  font-size: ",";\n  text-align: center;\n  margin-bottom: 20px;\n"])),v.r.typography.title),pn=x.ZP.h2(tn||(tn=(0,m.Z)(["\n  font-size: ",";\n  text-align: center;\n  margin-bottom: 20px;\n"])),v.r.typography.title),fn=function(){var n=(0,p.v9)(w),e=0===(0,p.v9)(y).length;return(0,S.jsxs)(ln,{children:[n&&(0,S.jsx)(_.a,{}),(0,S.jsx)(dn,{children:"Phonebook"}),(0,S.jsx)(k,{}),e?(0,S.jsx)(dn,{children:"There are no contacts"}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(pn,{children:"Contacts"}),(0,S.jsx)(un,{}),(0,S.jsx)(N,{})]})]})}},9952:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");e.Z=a},3229:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"LocalPhone");e.Z=a},5403:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=a},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},4454:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return m},unsupportedProp:function(){return x},useControlled:function(){return v.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return b.Z}});var r=t(5902),o=t(4036),i=t(8949).Z,a=t(9201),s=t(3199);var c=function(n,e){return function(){return null}},u=t(9103),l=t(8301),d=t(7602);t(7462);var p=function(n,e){return function(){return null}},f=t(2971).Z,h=t(162),m=t(6248).Z;var x=function(n,e,t,r,o){return null},v=t(8744),g=t(9683),Z=t(2071),b=t(3031),y={configure:function(n){r.Z.configure(n)}}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=99.533a0d9d.chunk.js.map