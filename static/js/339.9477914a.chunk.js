"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[339],{7608:function(t,n,e){e.d(n,{x:function(){return o}});var r=e(6444),a=e(407),o=(0,r.ZP)("div")(a.cp,a.Dh,a.$_,a.bK,a.Cg,a.AF,a.Oq)},4339:function(t,n,e){e.r(n),e.d(n,{ContactsView:function(){return Y}});var r,a,o,i,p,s,c=e(7608),d=e(2791),b=e(5705),l=e(4050),u=(e(7427),e(168)),x=e(6444),g=x.ZP.p(r||(r=(0,u.Z)(["\n\tcolor: #be6161;\n\ttext-transform: lowercase;\n\tfont-size: 15px;\n"]))),f=(0,x.ZP)(b.l0)(a||(a=(0,u.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n"]))),m=x.ZP.label(o||(o=(0,u.Z)(["\n\tdisplay: block;\n\tmargin-top: 10px;\n\tpadding: 5px 10px;\n\tfont-size: 15px;\n\tfont-weight: 600;\n\tcolor: #9e0e0e;\n\ttext-transform: uppercase;\n\n\t/* background-image: linear-gradient(\n\t\t180deg,\n\t\trgba(105, 2, 210, 1) 0%,\n\t\trgba(106, 53, 156, 1) 15%,\n\t\trgba(181, 137, 214, 1) 55%,\n\t\trgba(183, 163, 203, 1) 100%\n\t); */\n\n\t/* color: transparent;\n\tbackground-clip: text;\n\t-webkit-background-clip: text; */\n"]))),h=(0,x.ZP)(b.gN)(i||(i=(0,u.Z)(["\n\tdisplay: block;\n\twidth: 93%;\n\tmargin: auto;\n\tpadding: 13px;\n\tmargin-top: 20px;\n\n\tbox-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n\t\trgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n\t\trgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n\toutline: none;\n\tborder: 0;\n\n\tborder-radius: 20px;\n\n\tfont-family: 'Roboto', sans-serif;\n\t/* font-family: 'deathNote';\n\tfont-size: 30px;\n\tfont-weight: 700; */\n\n\tbackground: rgb(245, 152, 152);\n\tbackground: linear-gradient(\n\t\t270deg,\n\t\trgba(245, 152, 152, 0.533) 0%,\n\t\trgba(246, 203, 203, 0.755) 36%,\n\t\trgb(213, 133, 133) 75%,\n\t\trgb(172, 124, 124) 100%\n\t);\n\n\tcolor: #553c9a;\n\n\t:-webkit-autofill {\n\t\ttransition: all 5000s ease-in-out 0s;\n\t}\n"]))),k=x.ZP.div(p||(p=(0,u.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-top: 10px;\n"]))),w=x.ZP.button(s||(s=(0,u.Z)(["\n\tmargin-top: 20px;\n\twidth: 120px;\n\theight: 40px;\n\tpadding: 5px;\n\tfont-family: 'deathNote';\n\tfont-size: 20px;\n\tfont-weight: 700;\n\t/* font-size: 14px;\n\tfont-weight: 700; */\n\n\topacity: 1;\n\tbackground: #faacacfa;\n\tbackground-image: linear-gradient(to left, #ed0606, #d39393);\n\tbackground-image: #9e0e0e;\n\tborder: 2px solid #d39292;\n\tbackground: #e14a4ab8;\n\n\tcolor: transparent;\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n\n\tcursor: pointer;\n\ttransition: transform 250ms linear;\n\n\t:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t:disabled {\n\t\topacity: 0.5;\n\t\ttransform: scale(1);\n\t}\n"]))),y=e(9434),v=function(t){return t.contacts.items},Z=function(t){return t.contacts.isLoading},j=function(t){return t.contacts.error},P=function(t){return t.contacts.filter},z=e(3329),C=function(t){var n=t.name;return(0,z.jsx)(b.Bc,{name:n,render:function(t){return(0,z.jsx)(g,{children:t})}})},F=l.object().shape({name:l.string().min(3).required(),number:l.string().min(5).required()});function L(t){var n=t.submitForm,e=(0,y.v9)(Z);return(0,z.jsx)(b.J9,{initialValues:{name:"",number:""},validationSchema:F,onSubmit:function(t,e){var r=t.name,a=t.number,o=e.resetForm,i={name:r,number:a};console.log(i),n(i),o()},children:(0,z.jsxs)(f,{children:[(0,z.jsxs)(m,{children:["name",(0,z.jsx)(h,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,z.jsx)(C,{name:"name",title:"title"})]}),(0,z.jsxs)(m,{children:["id",(0,z.jsx)(h,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,z.jsx)(C,{name:"number",title:"title"})]}),(0,z.jsx)(k,{children:(0,z.jsx)(w,{type:"submit",disabled:e,children:e?"...Adding":"Add person"})})]})})}var N,B,q,A,R,_,S,D=e(885),I=x.ZP.li(N||(N=(0,u.Z)(["\n\tborder: 2px solid #f27b7b;\n\tbackground: transparent;\n\tposition: relative;\n\tmargin-bottom: 20px;\n\tpadding: 16px 10px;\n\tcolor: #9e0e0e;\n\n\t:hover {\n\t\tz-index: 1;\n\t}\n\n\t:before {\n\t\tborder: 2px solid #d39292;\n\t\tposition: absolute;\n\t\ttop: -14px;\n\t\tpadding: 2px 10px;\n\t\tfont-size: 11px;\n\t\tfont-weight: bold;\n\t\tcolor: #9e0e0e;\n\t\tbackground: #e2bbbb;\n\t\tcounter-increment: li;\n\t\tcontent: counter(li);\n\t\t-webkit-transition-duration: 0.3s;\n\t\ttransition-duration: 0.3s;\n\t}\n\n\t:hover:before {\n\t\tbackground: #9e0e0e;\n\t\tcolor: #fff;\n\t\t-webkit-transform: translate(-12px, 0);\n\t\t-ms-transform: translate(-12px, 0);\n\t\t-o-transform: translate(-12px, 0);\n\t\ttransform: translate(-12px, 0);\n\t}\n\n\t:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\t-webkit-transition-duration: 0.4s;\n\t\ttransition-duration: 0.4s;\n\t\t-webkit-transition-property: width;\n\t\ttransition-property: width;\n\t\tz-index: -1;\n\t\tbackground: #d19c9c4a;\n\n\t\theight: 100%;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\twidth: 0;\n\t}\n\n\t:hover:after {\n\t\twidth: 100%;\n\t}\n"]))),K=x.ZP.button(B||(B=(0,u.Z)(["\n\tmargin-left: 20px;\n\twidth: 20px;\n\theight: 20px;\n\n\tposition: absolute;\n\ttop: 15px;\n\tright: 20px;\n\twidth: 24px;\n\theight: 24px;\n\topacity: 0.5;\n\tcursor: pointer;\n\ttransition: opacity ease 0.5s;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n\n\t::before,\n\t::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 8px;\n\t\tleft: -2px;\n\t\twidth: 24px;\n\t\theight: 3px;\n\t\tbackground: #f27b7b;\n\t\tdisplay: block;\n\t\t/* display: ","; */\n\t}\n\n\t::before {\n\t\ttransform: rotate(45deg);\n\t}\n\n\t::after {\n\t\ttransform: rotate(-45deg);\n\t}\n"])),(function(t){return t.onLoad?"none":"block"})),M=function(t){var n=t.id,e=t.name,r=t.number,a=t.deleteBtn,o=(0,y.v9)(Z),i=(0,d.useState)(!1),p=(0,D.Z)(i,2),s=p[0],c=p[1];return(0,z.jsxs)(I,{children:[e,": ",r,(0,z.jsx)(K,{type:"button",onClick:function(){a(n),c(!0)},children:s&&o&&"..."})]})},E=x.ZP.ul(q||(q=(0,u.Z)(["\n  margin: 20px 0 0;\n  padding: 0;\n  list-style: none;\n  counter-reset: li;\n"]))),J=function(t){var n=t.contacts,e=t.deleteBtn;return(0,z.jsx)(E,{children:n.map((function(t){var n=t.id,r=t.name,a=t.number;return(0,z.jsx)(M,{id:n,name:r,number:a,deleteBtn:e},n)}))})},O=x.ZP.label(A||(A=(0,u.Z)(["\n\tdisplay: block;\n\tmargin-top: 10px;\n\tpadding: 5px 10px;\n\tfont-size: 15px;\n\tfont-weight: 600;\n\t/* color: #fff; */\n\ttext-transform: uppercase;\n\n\tbackground-image: linear-gradient(to left, #9a3c3c, #e08d8d);\n\tcolor: transparent;\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n"]))),V=x.ZP.input(R||(R=(0,u.Z)(["\n\tdisplay: block;\n\twidth: 93%;\n\tmargin: auto;\n\tmargin-top: 20px;\n\tmargin-bottom: 20px;\n\tpadding: 13px;\n\n\tbox-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n\t\trgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n\t\trgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\toutline: none;\n\tborder: 0;\n\tborder-radius: 20px;\n\tfont-family: 'Roboto', sans-serif;\n\t/* background: rgb(245, 229, 152);\n\tbackground: linear-gradient(\n\t\t270deg,\n\t\trgba(245, 229, 152, 0.5333634918811274) 0%,\n\t\trgba(246, 246, 203, 0.7550520696559874) 36%,\n\t\trgba(255, 254, 203, 1) 75%,\n\t\trgba(254, 255, 216, 1) 100%\n\t); */\n\n\tbackground: rgb(245, 152, 152);\n\tbackground: linear-gradient(\n\t\t270deg,\n\t\trgba(245, 152, 152, 0.533) 0%,\n\t\trgba(246, 203, 203, 0.755) 36%,\n\t\trgb(213, 133, 133) 75%,\n\t\trgb(172, 124, 124) 100%\n\t);\n\n\tcolor: #553c9a;\n"]))),G=function(t){var n=t.changeInput;return(0,z.jsxs)(O,{children:["Find person by Name",(0,z.jsx)(V,{type:"text",name:"filter",onChange:n})]})},H=x.ZP.h1(_||(_=(0,u.Z)(["\n\tfont-size: 70px;\n\tfont-weight: 600;\n\t/* background-image: linear-gradient(to left, #553c9a, #b393d3); */\n\tbackground-image: linear-gradient(\n\t\t180deg,\n\t\trgba(255, 5, 5) 0%,\n\t\trgba(156, 53, 53, 1) 15%,\n\t\trgba(227, 136, 136, 1) 55%,\n\t\trgba(253, 253, 253, 1) 100%\n\t);\n\n\tcolor: transparent;\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n\n\tfont-family: 'deathNote';\n\tfont-size: 40px;\n\tfont-weight: 700;\n"]))),T=x.ZP.h2(S||(S=(0,u.Z)(["\n\tfont-size: 40px;\n\tfont-weight: 600;\n\tbackground-image: linear-gradient(\n\t\t180deg,\n\t\trgba(255, 5, 5) 0%,\n\t\trgba(156, 53, 53, 1) 15%,\n\t\trgba(227, 136, 136, 1) 55%,\n\t\trgba(253, 253, 253, 1) 100%\n\t);\n\tcolor: transparent;\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n"]))),$=e(5299),Q=e(1538),U=e(6052),W=e(4289),X=e(7689);function Y(){var t=(0,y.v9)(v),n=(0,y.v9)(P),e=(0,y.v9)(j),r=(0,y.v9)(W.M7),a=(0,y.I0)(),o=(0,X.s0)();e&&$.Report.failure("Error. Pls try again"),(0,d.useEffect)((function(){a((0,U.yF)())}),[a,r,o]);var i=function(n){return t.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))},p=function(){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return(0,z.jsxs)(c.x,{width:"800px",pb:2,pt:2,pl:6,pr:6,ml:"auto",mr:"auto",mt:5,mb:5,minHeight:"1000px",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",bg:"black",children:[(0,z.jsx)(H,{children:"Death Note"}),(0,z.jsx)(L,{submitForm:function(t){i(t.name)?$.Report.info("".concat(t.name," is already in contacts!")):(console.log(t),a((0,U.uK)(t)))}}),(0,z.jsx)(T,{children:"List Of Death"}),(0,z.jsx)(G,{changeInput:function(t){return a((0,Q.M)(t.currentTarget.value))}}),(0,z.jsx)(J,{contacts:p,deleteBtn:function(t){return a((0,U.GK)(t))}})]})}}}]);
//# sourceMappingURL=339.9477914a.chunk.js.map