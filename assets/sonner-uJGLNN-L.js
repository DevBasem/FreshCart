import{R as e}from"./react-Bt3bhBdA.js";import{W as Ct}from"./react-dom-BXlFuNsz.js";function Mt(o,{insertAt:a}={}){if(!o||typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css",a==="top"&&r.firstChild?r.insertBefore(g,r.firstChild):r.appendChild(g),g.styleSheet?g.styleSheet.cssText=o:g.appendChild(document.createTextNode(o))}Mt(`html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);var zt=o=>{switch(o){case"success":return Yt;case"info":return Lt;case"warning":return Pt;case"error":return jt;default:return null}},It=Array(12).fill(0),Rt=({visible:o})=>e.createElement("div",{className:"sonner-loading-wrapper","data-visible":o},e.createElement("div",{className:"sonner-spinner"},It.map((a,r)=>e.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),Yt=e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},e.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Pt=e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},e.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Lt=e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},e.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),jt=e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},e.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Dt=()=>{let[o,a]=e.useState(!1);return e.useEffect(()=>{let r=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",r),()=>window.removeEventListener("visibilitychange",r)},[]),o},ct=1,At=class{constructor(){this.subscribe=o=>(this.subscribers.push(o),()=>{let a=this.subscribers.indexOf(o);this.subscribers.splice(a,1)}),this.publish=o=>{this.subscribers.forEach(a=>a(o))},this.addToast=o=>{this.publish(o),this.toasts=[...this.toasts,o]},this.create=o=>{var a;let{message:r,...g}=o,v=typeof(o==null?void 0:o.id)=="number"||((a=o.id)==null?void 0:a.length)>0?o.id:ct++,l=this.toasts.find(u=>u.id===v),y=o.dismissible===void 0?!0:o.dismissible;return l?this.toasts=this.toasts.map(u=>u.id===v?(this.publish({...u,...o,id:v,title:r}),{...u,...o,id:v,dismissible:y,title:r}):u):this.addToast({title:r,...g,dismissible:y,id:v}),v},this.dismiss=o=>(o||this.toasts.forEach(a=>{this.subscribers.forEach(r=>r({id:a.id,dismiss:!0}))}),this.subscribers.forEach(a=>a({id:o,dismiss:!0})),o),this.message=(o,a)=>this.create({...a,message:o}),this.error=(o,a)=>this.create({...a,message:o,type:"error"}),this.success=(o,a)=>this.create({...a,type:"success",message:o}),this.info=(o,a)=>this.create({...a,type:"info",message:o}),this.warning=(o,a)=>this.create({...a,type:"warning",message:o}),this.loading=(o,a)=>this.create({...a,type:"loading",message:o}),this.promise=(o,a)=>{if(!a)return;let r;a.loading!==void 0&&(r=this.create({...a,promise:o,type:"loading",message:a.loading,description:typeof a.description!="function"?a.description:void 0}));let g=o instanceof Promise?o:o(),v=r!==void 0;return g.then(l=>{if(l&&typeof l.ok=="boolean"&&!l.ok){v=!1;let y=typeof a.error=="function"?a.error(`HTTP error! status: ${l.status}`):a.error,u=typeof a.description=="function"?a.description(`HTTP error! status: ${l.status}`):a.description;this.create({id:r,type:"error",message:y,description:u})}else if(a.success!==void 0){v=!1;let y=typeof a.success=="function"?a.success(l):a.success,u=typeof a.description=="function"?a.description(l):a.description;this.create({id:r,type:"success",message:y,description:u})}}).catch(l=>{if(a.error!==void 0){v=!1;let y=typeof a.error=="function"?a.error(l):a.error,u=typeof a.description=="function"?a.description(l):a.description;this.create({id:r,type:"error",message:y,description:u})}}).finally(()=>{var l;v&&(this.dismiss(r),r=void 0),(l=a.finally)==null||l.call(a)}),r},this.custom=(o,a)=>{let r=(a==null?void 0:a.id)||ct++;return this.create({jsx:o(r),id:r,...a}),r},this.subscribers=[],this.toasts=[]}},E=new At,Ht=(o,a)=>{let r=(a==null?void 0:a.id)||ct++;return E.addToast({title:o,...a,id:r}),r},$t=Ht,Qt=Object.assign($t,{success:E.success,info:E.info,warning:E.warning,error:E.error,custom:E.custom,message:E.message,promise:E.promise,dismiss:E.dismiss,loading:E.loading}),Ut=3,Wt="32px",Ft=4e3,Kt=356,bt=14,Ot=20,Vt=200;function Xt(...o){return o.filter(Boolean).join(" ")}var qt=o=>{var a,r,g,v,l,y,u;let{invert:M,toast:t,unstyled:et,interacting:V,setHeights:T,visibleToasts:d,heights:P,index:z,toasts:at,expanded:F,removeToast:X,closeButton:q,style:ot,cancelButtonStyle:S,actionButtonStyle:K,className:nt="",descriptionClassName:G="",duration:J,position:rt,gap:I=bt,loadingIcon:O,expandByDefault:j,classNames:p,icons:x,closeButtonAriaLabel:R="Close toast",pauseWhenPageIsHidden:Q,cn:b}=o,[k,st]=e.useState(!1),[s,h]=e.useState(!1),[f,C]=e.useState(!1),[L,m]=e.useState(!1),[it,D]=e.useState(0),[Z,A]=e.useState(0),ut=e.useRef(null),H=e.useRef(null),yt=z===0,xt=z+1<=d,w=t.type,$=t.dismissible!==!1,wt=t.className||"",Et=t.descriptionClassName||"",_=e.useMemo(()=>P.findIndex(n=>n.toastId===t.id)||0,[P,t.id]),kt=e.useMemo(()=>{var n;return(n=t.closeButton)!=null?n:q},[t.closeButton,q]),mt=e.useMemo(()=>t.duration||J||Ft,[t.duration,J]),lt=e.useRef(0),U=e.useRef(0),pt=e.useRef(0),W=e.useRef(null),[ft,Nt]=rt.split("-"),gt=e.useMemo(()=>P.reduce((n,i,c)=>c>=_?n:n+i.height,0),[P,_]),ht=Dt(),Bt=t.invert||M,dt=w==="loading";U.current=e.useMemo(()=>_*I+gt,[_,gt]),e.useEffect(()=>{st(!0)},[]),e.useLayoutEffect(()=>{if(!k)return;let n=H.current,i=n.style.height;n.style.height="auto";let c=n.getBoundingClientRect().height;n.style.height=i,A(c),T(N=>N.find(B=>B.toastId===t.id)?N.map(B=>B.toastId===t.id?{...B,height:c}:B):[{toastId:t.id,height:c,position:t.position},...N])},[k,t.title,t.description,T,t.id]);let Y=e.useCallback(()=>{h(!0),D(U.current),T(n=>n.filter(i=>i.toastId!==t.id)),setTimeout(()=>{X(t)},Vt)},[t,X,T,U]);e.useEffect(()=>{if(t.promise&&w==="loading"||t.duration===1/0||t.type==="loading")return;let n,i=mt;return F||V||Q&&ht?(()=>{if(pt.current<lt.current){let c=new Date().getTime()-lt.current;i=i-c}pt.current=new Date().getTime()})():(lt.current=new Date().getTime(),n=setTimeout(()=>{var c;(c=t.onAutoClose)==null||c.call(t,t),Y()},i)),()=>clearTimeout(n)},[F,V,j,t,mt,Y,t.promise,w,Q,ht]),e.useEffect(()=>{let n=H.current;if(n){let i=n.getBoundingClientRect().height;return A(i),T(c=>[{toastId:t.id,height:i,position:t.position},...c]),()=>T(c=>c.filter(N=>N.toastId!==t.id))}},[T,t.id]),e.useEffect(()=>{t.delete&&Y()},[Y,t.delete]);function Tt(){return x!=null&&x.loading?e.createElement("div",{className:"loader","data-visible":w==="loading"},x.loading):O?e.createElement("div",{className:"sonner-loader","data-visible":w==="loading"},O):e.createElement(Rt,{visible:w==="loading"})}return e.createElement("li",{"aria-live":t.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:H,className:b(nt,wt,p==null?void 0:p.toast,(a=t==null?void 0:t.classNames)==null?void 0:a.toast,p==null?void 0:p.default,p==null?void 0:p[w],(r=t==null?void 0:t.classNames)==null?void 0:r[w]),"data-sonner-toast":"","data-styled":!(t.jsx||t.unstyled||et),"data-mounted":k,"data-promise":!!t.promise,"data-removed":s,"data-visible":xt,"data-y-position":ft,"data-x-position":Nt,"data-index":z,"data-front":yt,"data-swiping":f,"data-dismissible":$,"data-type":w,"data-invert":Bt,"data-swipe-out":L,"data-expanded":!!(F||j&&k),style:{"--index":z,"--toasts-before":z,"--z-index":at.length-z,"--offset":`${s?it:U.current}px`,"--initial-height":j?"auto":`${Z}px`,...ot,...t.style},onPointerDown:n=>{dt||!$||(ut.current=new Date,D(U.current),n.target.setPointerCapture(n.pointerId),n.target.tagName!=="BUTTON"&&(C(!0),W.current={x:n.clientX,y:n.clientY}))},onPointerUp:()=>{var n,i,c,N;if(L||!$)return;W.current=null;let B=Number(((n=H.current)==null?void 0:n.style.getPropertyValue("--swipe-amount").replace("px",""))||0),tt=new Date().getTime()-((i=ut.current)==null?void 0:i.getTime()),St=Math.abs(B)/tt;if(Math.abs(B)>=Ot||St>.11){D(U.current),(c=t.onDismiss)==null||c.call(t,t),Y(),m(!0);return}(N=H.current)==null||N.style.setProperty("--swipe-amount","0px"),C(!1)},onPointerMove:n=>{var i;if(!W.current||!$)return;let c=n.clientY-W.current.y,N=n.clientX-W.current.x,B=(ft==="top"?Math.min:Math.max)(0,c),tt=n.pointerType==="touch"?10:2;Math.abs(B)>tt?(i=H.current)==null||i.style.setProperty("--swipe-amount",`${c}px`):Math.abs(N)>tt&&(W.current=null)}},kt&&!t.jsx?e.createElement("button",{"aria-label":R,"data-disabled":dt,"data-close-button":!0,onClick:dt||!$?()=>{}:()=>{var n;Y(),(n=t.onDismiss)==null||n.call(t,t)},className:b(p==null?void 0:p.closeButton,(g=t==null?void 0:t.classNames)==null?void 0:g.closeButton)},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,t.jsx||e.isValidElement(t.title)?t.jsx||t.title:e.createElement(e.Fragment,null,w||t.icon||t.promise?e.createElement("div",{"data-icon":""},t.promise||t.type==="loading"&&!t.icon?t.icon||(x==null?void 0:x.loading)||Tt():null,t.type!=="loading"?t.icon||(x==null?void 0:x[w])||zt(w):null):null,e.createElement("div",{"data-content":""},e.createElement("div",{"data-title":"",className:b(p==null?void 0:p.title,(v=t==null?void 0:t.classNames)==null?void 0:v.title)},t.title),t.description?e.createElement("div",{"data-description":"",className:b(G,Et,p==null?void 0:p.description,(l=t==null?void 0:t.classNames)==null?void 0:l.description)},t.description):null),t.cancel?e.createElement("button",{"data-button":!0,"data-cancel":!0,style:t.cancelButtonStyle||S,onClick:n=>{var i;$&&(Y(),(i=t.cancel)!=null&&i.onClick&&t.cancel.onClick(n))},className:b(p==null?void 0:p.cancelButton,(y=t==null?void 0:t.classNames)==null?void 0:y.cancelButton)},t.cancel.label):null,t.action?e.createElement("button",{"data-button":"",style:t.actionButtonStyle||K,onClick:n=>{var i;(i=t.action)==null||i.onClick(n),!n.defaultPrevented&&Y()},className:b(p==null?void 0:p.actionButton,(u=t==null?void 0:t.classNames)==null?void 0:u.actionButton)},t.action.label):null))};function vt(){if(typeof window>"u"||typeof document>"u")return"ltr";let o=document.documentElement.getAttribute("dir");return o==="auto"||!o?window.getComputedStyle(document.documentElement).direction:o}var Zt=o=>{let{invert:a,position:r="bottom-right",hotkey:g=["altKey","KeyT"],expand:v,closeButton:l,className:y,offset:u,theme:M="light",richColors:t,duration:et,style:V,visibleToasts:T=Ut,toastOptions:d,dir:P=vt(),gap:z,loadingIcon:at,icons:F,containerAriaLabel:X="Notifications",pauseWhenPageIsHidden:q,cn:ot=Xt}=o,[S,K]=e.useState([]),nt=e.useMemo(()=>Array.from(new Set([r].concat(S.filter(s=>s.position).map(s=>s.position)))),[S,r]),[G,J]=e.useState([]),[rt,I]=e.useState(!1),[O,j]=e.useState(!1),[p,x]=e.useState(M!=="system"?M:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),R=e.useRef(null),Q=g.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=e.useRef(null),k=e.useRef(!1),st=e.useCallback(s=>K(h=>h.filter(({id:f})=>f!==s.id)),[]);return e.useEffect(()=>E.subscribe(s=>{if(s.dismiss){K(h=>h.map(f=>f.id===s.id?{...f,delete:!0}:f));return}setTimeout(()=>{Ct.flushSync(()=>{K(h=>{let f=h.findIndex(C=>C.id===s.id);return f!==-1?[...h.slice(0,f),{...h[f],...s},...h.slice(f+1)]:[s,...h]})})})}),[]),e.useEffect(()=>{if(M!=="system"){x(M);return}M==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?x("dark"):x("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:s})=>{x(s?"dark":"light")})},[M]),e.useEffect(()=>{S.length<=1&&I(!1)},[S]),e.useEffect(()=>{let s=h=>{var f,C;g.every(L=>h[L]||h.code===L)&&(I(!0),(f=R.current)==null||f.focus()),h.code==="Escape"&&(document.activeElement===R.current||(C=R.current)!=null&&C.contains(document.activeElement))&&I(!1)};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[g]),e.useEffect(()=>{if(R.current)return()=>{b.current&&(b.current.focus({preventScroll:!0}),b.current=null,k.current=!1)}},[R.current]),S.length?e.createElement("section",{"aria-label":`${X} ${Q}`,tabIndex:-1},nt.map((s,h)=>{var f;let[C,L]=s.split("-");return e.createElement("ol",{key:s,dir:P==="auto"?vt():P,tabIndex:-1,ref:R,className:y,"data-sonner-toaster":!0,"data-theme":p,"data-rich-colors":t,"data-y-position":C,"data-x-position":L,style:{"--front-toast-height":`${((f=G[0])==null?void 0:f.height)||0}px`,"--offset":typeof u=="number"?`${u}px`:u||Wt,"--width":`${Kt}px`,"--gap":`${bt}px`,...V},onBlur:m=>{k.current&&!m.currentTarget.contains(m.relatedTarget)&&(k.current=!1,b.current&&(b.current.focus({preventScroll:!0}),b.current=null))},onFocus:m=>{m.target instanceof HTMLElement&&m.target.dataset.dismissible==="false"||k.current||(k.current=!0,b.current=m.relatedTarget)},onMouseEnter:()=>I(!0),onMouseMove:()=>I(!0),onMouseLeave:()=>{O||I(!1)},onPointerDown:m=>{m.target instanceof HTMLElement&&m.target.dataset.dismissible==="false"||j(!0)},onPointerUp:()=>j(!1)},S.filter(m=>!m.position&&h===0||m.position===s).map((m,it)=>{var D,Z;return e.createElement(qt,{key:m.id,icons:F,index:it,toast:m,duration:(D=d==null?void 0:d.duration)!=null?D:et,className:d==null?void 0:d.className,descriptionClassName:d==null?void 0:d.descriptionClassName,invert:a,visibleToasts:T,closeButton:(Z=d==null?void 0:d.closeButton)!=null?Z:l,interacting:O,position:s,style:d==null?void 0:d.style,unstyled:d==null?void 0:d.unstyled,classNames:d==null?void 0:d.classNames,cancelButtonStyle:d==null?void 0:d.cancelButtonStyle,actionButtonStyle:d==null?void 0:d.actionButtonStyle,removeToast:st,toasts:S.filter(A=>A.position==m.position),heights:G.filter(A=>A.position==m.position),setHeights:J,expandByDefault:v,gap:z,loadingIcon:at,expanded:rt,pauseWhenPageIsHidden:q,cn:ot})}))})):null};export{Qt as U,Zt as f};
