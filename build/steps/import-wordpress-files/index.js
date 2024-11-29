(()=>{"use strict";const e=window.wp.blocks,t=window.wp.primitives,n=window.ReactJSXRuntime,i=(0,n.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,n.jsx)(t.Path,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})}),l=window.wp.i18n,a=window.wp.blockEditor,o=window.wp.components,r=window.wp.element,s={sort:function(e,t,n){return"asc"===n?e-t:t-e},isValid:function(e,t){if(""===e)return!1;if(!Number.isInteger(Number(e)))return!1;if(t?.elements){const n=t?.elements.map((e=>e.value));if(!n.includes(Number(e)))return!1}return!0},Edit:"integer"},d={sort:function(e,t,n){return"asc"===n?e.localeCompare(t):t.localeCompare(e)},isValid:function(e,t){if(t?.elements){const n=t?.elements?.map((e=>e.value));if(!n.includes(e))return!1}return!0},Edit:"text"},c={sort:function(e,t,n){const i=new Date(e).getTime(),l=new Date(t).getTime();return"asc"===n?i-l:l-i},isValid:function(e,t){if(t?.elements){const n=t?.elements.map((e=>e.value));if(!n.includes(e))return!1}return!0},Edit:"datetime"},u={datetime:function({data:e,field:t,onChange:i,hideLabelFromVision:l}){const{id:a,label:s}=t,d=t.getValue({item:e}),c=(0,r.useCallback)((e=>i({[a]:e})),[a,i]);return(0,n.jsxs)("fieldset",{className:"dataviews-controls__datetime",children:[!l&&(0,n.jsx)(o.BaseControl.VisualLabel,{as:"legend",children:s}),l&&(0,n.jsx)(o.VisuallyHidden,{as:"legend",children:s}),(0,n.jsx)(o.TimePicker,{currentTime:d,onChange:c,hideLabelFromVision:!0})]})},integer:function({data:e,field:t,onChange:i,hideLabelFromVision:l}){var a;const{id:s,label:d,description:c}=t,u=null!==(a=t.getValue({item:e}))&&void 0!==a?a:"",m=(0,r.useCallback)((e=>i({[s]:Number(e)})),[s,i]);return(0,n.jsx)(o.__experimentalNumberControl,{label:d,help:c,value:u,onChange:m,__next40pxDefaultSize:!0,hideLabelFromVision:l})},radio:function({data:e,field:t,onChange:i,hideLabelFromVision:l}){const{id:a,label:s}=t,d=t.getValue({item:e}),c=(0,r.useCallback)((e=>i({[a]:e})),[a,i]);return t.elements?(0,n.jsx)(o.RadioControl,{label:s,onChange:c,options:t.elements,selected:d,hideLabelFromVision:l}):null},select:function({data:e,field:t,onChange:i,hideLabelFromVision:a}){var s,d;const{id:c,label:u}=t,m=null!==(s=t.getValue({item:e}))&&void 0!==s?s:"",p=(0,r.useCallback)((e=>i({[c]:e})),[c,i]),f=[{label:(0,l.__)("Select item"),value:""},...null!==(d=t?.elements)&&void 0!==d?d:[]];return(0,n.jsx)(o.SelectControl,{label:u,value:m,options:f,onChange:p,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:a})},text:function({data:e,field:t,onChange:i,hideLabelFromVision:l}){const{id:a,label:s,placeholder:d}=t,c=t.getValue({item:e}),u=(0,r.useCallback)((e=>i({[a]:e})),[a,i]);return(0,n.jsx)(o.TextControl,{label:s,placeholder:d,value:null!=c?c:"",onChange:u,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:l})}};function m(e){if(Object.keys(u).includes(e))return u[e];throw"Control "+e+" not found"}function p(e){return e.map((e=>{var t,n,i,l;const a="integer"===(o=e.type)?s:"text"===o?d:"datetime"===o?c:{sort:(e,t,n)=>"number"==typeof e&&"number"==typeof t?"asc"===n?e-t:t-e:"asc"===n?e.localeCompare(t):t.localeCompare(e),isValid:(e,t)=>{if(t?.elements){const n=t?.elements?.map((e=>e.value));if(!n.includes(e))return!1}return!0},Edit:()=>null};var o;const r=e.getValue||(({item:t})=>t[e.id]),u=null!==(t=e.sort)&&void 0!==t?t:function(e,t,n){return a.sort(r({item:e}),r({item:t}),n)},p=null!==(n=e.isValid)&&void 0!==n?n:function(e,t){return a.isValid(r({item:e}),t)},f=function(e,t){return"function"==typeof e.Edit?e.Edit:"string"==typeof e.Edit?m(e.Edit):e.elements?m("select"):"string"==typeof t.Edit?m(t.Edit):t.Edit}(e,a),x=e.render||(e.elements?({item:t})=>{const n=r({item:t});return e?.elements?.find((e=>e.value===n))?.label||r({item:t})}:r);return{...e,label:e.label||e.id,header:e.header||e.label||e.id,getValue:r,render:x,sort:u,isValid:p,Edit:f,enableHiding:null===(i=e.enableHiding)||void 0===i||i,enableSorting:null===(l=e.enableSorting)||void 0===l||l}}))}const f=(0,n.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(t.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})});function x({title:e,onClose:t}){return(0,n.jsx)(o.__experimentalVStack,{className:"dataforms-layouts-panel__dropdown-header",spacing:4,children:(0,n.jsxs)(o.__experimentalHStack,{alignment:"center",children:[(0,n.jsx)(o.__experimentalHeading,{level:2,size:13,children:e}),(0,n.jsx)(o.__experimentalSpacer,{}),t&&(0,n.jsx)(o.Button,{__next40pxDefaultSize:!1,className:"dataforms-layouts-panel__dropdown-header-action",label:(0,l.__)("Close"),icon:f,onClick:t})]})})}function h({data:e,field:t,onChange:i}){const[a,s]=(0,r.useState)(null),d=(0,r.useMemo)((()=>({anchor:a,placement:"left-start",offset:36,shift:!0})),[a]);return(0,n.jsxs)(o.__experimentalHStack,{ref:s,className:"dataforms-layouts-panel__field",children:[(0,n.jsx)("div",{className:"dataforms-layouts-panel__field-label",children:t.label}),(0,n.jsx)("div",{children:(0,n.jsx)(o.Dropdown,{contentClassName:"dataforms-layouts-panel__field-dropdown",popoverProps:d,focusOnMount:!0,toggleProps:{size:"compact",variant:"tertiary",tooltipPosition:"middle left"},renderToggle:({isOpen:i,onToggle:a})=>(0,n.jsx)(o.Button,{className:"dataforms-layouts-panel__field-control",size:"compact",variant:"tertiary","aria-expanded":i,"aria-label":(0,l.sprintf)(
// translators: %s: Field name.
// translators: %s: Field name.
(0,l.__)("Edit %s"),t.label),onClick:a,children:(0,n.jsx)(t.render,{item:e})}),renderContent:({onClose:l})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{title:t.label,onClose:l}),(0,n.jsx)(t.Edit,{data:e,field:t,onChange:i,hideLabelFromVision:!0},t.id)]})})})]})}const g=[{type:"regular",component:function({data:e,fields:t,form:i,onChange:l}){const a=(0,r.useMemo)((()=>{var e;return p((null!==(e=i.fields)&&void 0!==e?e:[]).map((e=>t.find((({id:t})=>t===e)))).filter((e=>!!e)))}),[t,i.fields]);return(0,n.jsx)(o.__experimentalVStack,{spacing:4,children:a.map((t=>(0,n.jsx)(t.Edit,{data:e,field:t,onChange:l},t.id)))})}},{type:"panel",component:function({data:e,fields:t,form:i,onChange:l}){const a=(0,r.useMemo)((()=>{var e;return p((null!==(e=i.fields)&&void 0!==e?e:[]).map((e=>t.find((({id:t})=>t===e)))).filter((e=>!!e)))}),[t,i.fields]);return(0,n.jsx)(o.__experimentalVStack,{spacing:2,children:a.map((t=>(0,n.jsx)(h,{data:e,field:t,onChange:l},t.id)))})}}];function _({form:e,...t}){var i;const l=(a=null!==(i=e.type)&&void 0!==i?i:"regular",g.find((e=>e.type===a)));var a;return l?(0,n.jsx)(l.component,{form:e,...t}):null}const b=JSON.parse('{"UU":"playground-step/import-wordpress-files","DD":"Import WordPress files"}');(0,e.registerBlockType)(b.UU,{icon:i,edit:function({attributes:e,setAttributes:t,isSelected:l}){const{wordPressFilesZip:r}=e,{url:s}=r;return(0,n.jsx)("div",{...(0,a.useBlockProps)(),children:(0,n.jsx)(o.Placeholder,{preview:(0,n.jsxs)(o.__experimentalVStack,{style:{width:"100%"},children:[(0,n.jsxs)(o.__experimentalHStack,{justify:"left",align:"center",spacing:3,children:[(0,n.jsx)(o.Icon,{icon:i,size:28,className:"step-icon"}),(0,n.jsxs)(o.__experimentalVStack,{spacing:1,children:[(0,n.jsx)(o.__experimentalText,{upperCase:!0,size:12,weight:500,color:"#949494",children:b.DD}),!l&&(0,n.jsx)(o.__experimentalText,{weight:600,children:`from ${s||"{zip url}"}`})]})]}),l&&(0,n.jsx)(_,{data:{url:s},fields:[{id:"url",label:"Url",type:"text",placeholder:"Enter the URL of the zip file"}],form:{fields:["url"]},onChange:e=>{t({wordPressFilesZip:{...r,...e}})}})]})})})}})})();