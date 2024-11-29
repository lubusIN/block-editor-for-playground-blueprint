(()=>{"use strict";const e=window.wp.blocks,n=window.wp.primitives,l=window.ReactJSXRuntime,t=(0,l.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(n.Path,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})}),i=window.wp.element,s=(window.wp.i18n,(0,l.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(n.Path,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})})),a=(0,l.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(n.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"})}),o=window.wp.blockEditor,c=window.wp.components,r=JSON.parse('{"UU":"playground-step/define-wp-config-consts","DD":"WP Config"}');(0,e.registerBlockType)(r.UU,{icon:t,edit:function({attributes:e,setAttributes:n,isSelected:p}){const{consts:x}=e,[d,w]=(0,i.useState)(!1),[u,h]=(0,i.useState)(""),[m,j]=(0,i.useState)(""),[g,_]=(0,i.useState)(Object.entries(x)),[v,f]=(0,i.useState)(void 0);(0,i.useEffect)((()=>{n({consts:Object.fromEntries(g)})}),[g]);const C=(e,n,l)=>{const t=g.map((([t,i],s)=>s!==e?[t,i]:"key"===n?[l,i]:"value"===n?[t,l]:void 0));_(t)};return(0,l.jsxs)("div",{...(0,o.useBlockProps)(),children:[(0,l.jsx)(c.Placeholder,{preview:(0,l.jsxs)(c.__experimentalVStack,{style:{width:"100%"},children:[(0,l.jsxs)(c.__experimentalHStack,{justify:"left",align:"center",spacing:3,children:[(0,l.jsx)(c.Icon,{icon:t,size:28,className:"step-icon"}),(0,l.jsxs)(c.__experimentalVStack,{spacing:1,children:[(0,l.jsx)(c.__experimentalText,{upperCase:!0,size:12,weight:500,color:"#949494",children:r.DD}),!p&&(0,l.jsx)(c.__experimentalText,{weight:600,children:(0,l.jsx)("pre",{children:JSON.stringify(x,null," ")})||"{config consts}"})]})]}),p&&(0,l.jsxs)(c.__experimentalVStack,{children:[(0,l.jsxs)(c.__experimentalHStack,{alignment:"bottom",children:[(0,l.jsx)(c.__experimentalInputControl,{label:"Name",value:u,onChange:e=>{h(e)}}),(0,l.jsx)(c.__experimentalInputControl,{label:"Value",value:m,onChange:e=>j(e)}),(0,l.jsx)(c.Button,{icon:s,label:"Add Config",onClick:()=>{_([...g,[u,m]]),h(""),j("")}})]}),x&&g.map((([e,n],t)=>(0,l.jsxs)(c.__experimentalHStack,{alignment:"bottom",children:[(0,l.jsx)(c.__experimentalInputControl,{label:"Name",value:e,onChange:e=>C(t,"key",e)}),(0,l.jsx)(c.__experimentalInputControl,{label:"Value",value:n,onChange:e=>C(t,"value",e)}),(0,l.jsx)(c.Button,{isDestructive:!0,icon:a,label:"Delete Config",onClick:()=>{f(t),w(!0)}})]},t)))]})]})}),(0,l.jsx)(c.__experimentalConfirmDialog,{isOpen:d,onConfirm:()=>{_(g.filter(((e,n)=>n!==v))),f(void 0),w(!1)},onCancel:()=>w(!1),children:"Delete Config?"})]})}})})();