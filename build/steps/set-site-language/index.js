(()=>{"use strict";const e=window.wp.blocks,n=window.wp.primitives,t=window.ReactJSXRuntime,l=(0,t.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.Path,{d:"M17.5 10h-1.7l-3.7 10.5h1.7l.9-2.6h3.9l.9 2.6h1.7L17.5 10zm-2.2 6.3 1.4-4 1.4 4h-2.8zm-4.8-3.8c1.6-1.8 2.9-3.6 3.7-5.7H16V5.2h-5.8V3H8.8v2.2H3v1.5h9.6c-.7 1.6-1.8 3.1-3.1 4.6C8.6 10.2 7.8 9 7.2 8H5.6c.6 1.4 1.7 2.9 2.9 4.4l-2.4 2.4c-.3.4-.7.8-1.1 1.2l1 1 1.2-1.2c.8-.8 1.6-1.5 2.3-2.3.8.9 1.7 1.7 2.5 2.5l.6-1.5c-.7-.6-1.4-1.3-2.1-2z"})}),i=JSON.parse('{"UU":"playground-step/set-site-language","DD":"Set Site Language"}'),a=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.components,s=window.wp.element,d={sort:function(e,n,t){return"asc"===t?e-n:n-e},isValid:function(e,n){if(""===e)return!1;if(!Number.isInteger(Number(e)))return!1;if(n?.elements){const t=n?.elements.map((e=>e.value));if(!t.includes(Number(e)))return!1}return!0},Edit:"integer"},c={sort:function(e,n,t){return"asc"===t?e.localeCompare(n):n.localeCompare(e)},isValid:function(e,n){if(n?.elements){const t=n?.elements?.map((e=>e.value));if(!t.includes(e))return!1}return!0},Edit:"text"},u={sort:function(e,n,t){const l=new Date(e).getTime(),i=new Date(n).getTime();return"asc"===t?l-i:i-l},isValid:function(e,n){if(n?.elements){const t=n?.elements.map((e=>e.value));if(!t.includes(e))return!1}return!0},Edit:"datetime"},m={datetime:function({data:e,field:n,onChange:l,hideLabelFromVision:i}){const{id:a,label:o}=n,d=n.getValue({item:e}),c=(0,s.useCallback)((e=>l({[a]:e})),[a,l]);return(0,t.jsxs)("fieldset",{className:"dataviews-controls__datetime",children:[!i&&(0,t.jsx)(r.BaseControl.VisualLabel,{as:"legend",children:o}),i&&(0,t.jsx)(r.VisuallyHidden,{as:"legend",children:o}),(0,t.jsx)(r.TimePicker,{currentTime:d,onChange:c,hideLabelFromVision:!0})]})},integer:function({data:e,field:n,onChange:l,hideLabelFromVision:i}){var a;const{id:o,label:d,description:c}=n,u=null!==(a=n.getValue({item:e}))&&void 0!==a?a:"",m=(0,s.useCallback)((e=>l({[o]:Number(e)})),[o,l]);return(0,t.jsx)(r.__experimentalNumberControl,{label:d,help:c,value:u,onChange:m,__next40pxDefaultSize:!0,hideLabelFromVision:i})},radio:function({data:e,field:n,onChange:l,hideLabelFromVision:i}){const{id:a,label:o}=n,d=n.getValue({item:e}),c=(0,s.useCallback)((e=>l({[a]:e})),[a,l]);return n.elements?(0,t.jsx)(r.RadioControl,{label:o,onChange:c,options:n.elements,selected:d,hideLabelFromVision:i}):null},select:function({data:e,field:n,onChange:l,hideLabelFromVision:i}){var o,d;const{id:c,label:u}=n,m=null!==(o=n.getValue({item:e}))&&void 0!==o?o:"",p=(0,s.useCallback)((e=>l({[c]:e})),[c,l]),f=[{label:(0,a.__)("Select item"),value:""},...null!==(d=n?.elements)&&void 0!==d?d:[]];return(0,t.jsx)(r.SelectControl,{label:u,value:m,options:f,onChange:p,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:i})},text:function({data:e,field:n,onChange:l,hideLabelFromVision:i}){const{id:a,label:o,placeholder:d}=n,c=n.getValue({item:e}),u=(0,s.useCallback)((e=>l({[a]:e})),[a,l]);return(0,t.jsx)(r.TextControl,{label:o,placeholder:d,value:null!=c?c:"",onChange:u,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:i})}};function p(e){if(Object.keys(m).includes(e))return m[e];throw"Control "+e+" not found"}function f(e){return e.map((e=>{var n,t,l,i;const a="integer"===(o=e.type)?d:"text"===o?c:"datetime"===o?u:{sort:(e,n,t)=>"number"==typeof e&&"number"==typeof n?"asc"===t?e-n:n-e:"asc"===t?e.localeCompare(n):n.localeCompare(e),isValid:(e,n)=>{if(n?.elements){const t=n?.elements?.map((e=>e.value));if(!t.includes(e))return!1}return!0},Edit:()=>null};var o;const r=e.getValue||(({item:n})=>n[e.id]),s=null!==(n=e.sort)&&void 0!==n?n:function(e,n,t){return a.sort(r({item:e}),r({item:n}),t)},m=null!==(t=e.isValid)&&void 0!==t?t:function(e,n){return a.isValid(r({item:e}),n)},f=function(e,n){return"function"==typeof e.Edit?e.Edit:"string"==typeof e.Edit?p(e.Edit):e.elements?p("select"):"string"==typeof n.Edit?p(n.Edit):n.Edit}(e,a),g=e.render||(e.elements?({item:n})=>{const t=r({item:n});return e?.elements?.find((e=>e.value===t))?.label||r({item:n})}:r);return{...e,label:e.label||e.id,header:e.header||e.label||e.id,getValue:r,render:g,sort:s,isValid:m,Edit:f,enableHiding:null===(l=e.enableHiding)||void 0===l||l,enableSorting:null===(i=e.enableSorting)||void 0===i||i}}))}const g=(0,t.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})});function h({title:e,onClose:n}){return(0,t.jsx)(r.__experimentalVStack,{className:"dataforms-layouts-panel__dropdown-header",spacing:4,children:(0,t.jsxs)(r.__experimentalHStack,{alignment:"center",children:[(0,t.jsx)(r.__experimentalHeading,{level:2,size:13,children:e}),(0,t.jsx)(r.__experimentalSpacer,{}),n&&(0,t.jsx)(r.Button,{__next40pxDefaultSize:!1,className:"dataforms-layouts-panel__dropdown-header-action",label:(0,a.__)("Close"),icon:g,onClick:n})]})})}function x({data:e,field:n,onChange:l}){const[i,o]=(0,s.useState)(null),d=(0,s.useMemo)((()=>({anchor:i,placement:"left-start",offset:36,shift:!0})),[i]);return(0,t.jsxs)(r.__experimentalHStack,{ref:o,className:"dataforms-layouts-panel__field",children:[(0,t.jsx)("div",{className:"dataforms-layouts-panel__field-label",children:n.label}),(0,t.jsx)("div",{children:(0,t.jsx)(r.Dropdown,{contentClassName:"dataforms-layouts-panel__field-dropdown",popoverProps:d,focusOnMount:!0,toggleProps:{size:"compact",variant:"tertiary",tooltipPosition:"middle left"},renderToggle:({isOpen:l,onToggle:i})=>(0,t.jsx)(r.Button,{className:"dataforms-layouts-panel__field-control",size:"compact",variant:"tertiary","aria-expanded":l,"aria-label":(0,a.sprintf)(
// translators: %s: Field name.
// translators: %s: Field name.
(0,a.__)("Edit %s"),n.label),onClick:i,children:(0,t.jsx)(n.render,{item:e})}),renderContent:({onClose:i})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{title:n.label,onClose:i}),(0,t.jsx)(n.Edit,{data:e,field:n,onChange:l,hideLabelFromVision:!0},n.id)]})})})]})}const _=[{type:"regular",component:function({data:e,fields:n,form:l,onChange:i}){const a=(0,s.useMemo)((()=>{var e;return f((null!==(e=l.fields)&&void 0!==e?e:[]).map((e=>n.find((({id:n})=>n===e)))).filter((e=>!!e)))}),[n,l.fields]);return(0,t.jsx)(r.__experimentalVStack,{spacing:4,children:a.map((n=>(0,t.jsx)(n.Edit,{data:e,field:n,onChange:i},n.id)))})}},{type:"panel",component:function({data:e,fields:n,form:l,onChange:i}){const a=(0,s.useMemo)((()=>{var e;return f((null!==(e=l.fields)&&void 0!==e?e:[]).map((e=>n.find((({id:n})=>n===e)))).filter((e=>!!e)))}),[n,l.fields]);return(0,t.jsx)(r.__experimentalVStack,{spacing:2,children:a.map((n=>(0,t.jsx)(x,{data:e,field:n,onChange:i},n.id)))})}}];function b({form:e,...n}){var l;const i=(a=null!==(l=e.type)&&void 0!==l?l:"regular",_.find((e=>e.type===a)));var a;return i?(0,t.jsx)(i.component,{form:e,...n}):null}(0,e.registerBlockType)(i.UU,{icon:l,edit:function({attributes:e,setAttributes:n,isSelected:a}){const{language:s}=e;return(0,t.jsx)("p",{...(0,o.useBlockProps)(),children:(0,t.jsx)(r.Placeholder,{preview:(0,t.jsxs)(r.__experimentalVStack,{style:{width:"100%"},children:[(0,t.jsxs)(r.__experimentalHStack,{justify:"left",align:"center",spacing:3,children:[(0,t.jsx)(r.Icon,{icon:l,size:28,className:"step-icon"}),(0,t.jsxs)(r.__experimentalVStack,{spacing:1,children:[(0,t.jsx)(r.__experimentalText,{upperCase:!0,size:12,weight:500,color:"#949494",children:i.DD}),!a&&(0,t.jsx)(r.__experimentalText,{weight:600,children:`to ${s||"{language code}"}`})]})]}),a&&(0,t.jsx)(b,{data:e,fields:[{id:"language",label:"Language",type:"text",placeholder:"e.g. 'en_US'"}],form:{fields:["language"]},onChange:n})]})})})}})})();