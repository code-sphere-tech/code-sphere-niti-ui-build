var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var ee=x.prototype=new b;ee.constructor=x,_(ee,y.prototype),ee.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function E(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var D=/\/+/g;function O(e,t){return typeof e==`object`&&e&&e.key!=null?E(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function k(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,k(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+O(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(D,`$&/`)+`/`),k(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(D,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+O(a,u),c+=k(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+O(a,u++),c+=k(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return k(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function A(e,t,n){if(e==null)return e;var r=[],i=0;return k(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function se(e){var t=w.T,n={};n.types=t===null?null:t.types,w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,oe)}catch(e){oe(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}}function ce(e){var t=w.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else se(ce.bind(null,e))}var le={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=le,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.addTransitionType=ce,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=se,e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{var t=u().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),m=o(((e,t)=>{t.exports=p()})),h={app:{name:`NITI`,tagline:`Build Skills. Gain Experience. Get Certified.`},company:{name:`CS NITI`,shortName:`NITI`,logo:`/assets/logo.svg`,favicon:`/assets/favicon.svg`,avatarPlaceholder:`/assets/avatar-placeholder.svg`,description:`NITI i.e. Novel Innovation Training Initiative is a learning, training, internship and certification platform designed to help you build real, career-ready skills.`},website:{url:`https://niti.example.com`,title:`NITI — Learn. Intern. Get Certified.`},contact:{email:`support@niti.example`},social:{linkedin:`#`,github:`#`,instagram:`#`,youtube:`#`},copyright:{label:`All rights reserved.`,year:new Date().getFullYear()},navigation:{home:`Home`,learning:`My Learning`,certificates:`Certificates`,referrals:`Referrals`,opportunities:`Opportunities`,profile:`Profile`}},g=c(u(),1);function _(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function v(e){if(Array.isArray(e))return e}function y(e){if(Array.isArray(e))return _(e)}function b(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,k(r.key),r)}}function ee(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ae(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function C(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function te(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ne(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?T(Object(n),!0).forEach(function(t){C(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function D(e,t){return v(e)||te(e,t)||ae(e,t)||ne()}function O(e){return y(e)||w(e)||ae(e)||re()}function ie(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function k(e){var t=ie(e,`string`);return typeof t==`symbol`?t:t+``}function A(e){"@babel/helpers - typeof";return A=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},A(e)}function ae(e,t){if(e){if(typeof e==`string`)return _(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}var oe=function(){},se={},ce={},le=null,ue={mark:oe,measure:oe};try{typeof window<`u`&&(se=window),typeof document<`u`&&(ce=document),typeof MutationObserver<`u`&&(le=MutationObserver),typeof performance<`u`&&(ue=performance)}catch{}var de=(se.navigator||{}).userAgent,fe=de===void 0?``:de,j=se,M=ce,pe=le,me=ue;j.document;var N=!!M.documentElement&&!!M.head&&typeof M.addEventListener==`function`&&typeof M.createElement==`function`,he=~fe.indexOf(`MSIE`)||~fe.indexOf(`Trident/`),ge,_e=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,ve=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,ye={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},be={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},xe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],P=`classic`,Se=`duotone`,Ce=`sharp`,we=`sharp-duotone`,Te=`chisel`,Ee=`etch`,De=`graphite`,Oe=`jelly`,ke=`jelly-duo`,Ae=`jelly-fill`,je=`mosaic`,Me=`notdog`,Ne=`notdog-duo`,Pe=`pixel`,Fe=`slab`,Ie=`slab-duo`,Le=`slab-press`,Re=`slab-press-duo`,ze=`thumbprint`,Be=`utility`,Ve=`utility-duo`,He=`utility-fill`,Ue=`vellum`,We=`whiteboard`,Ge=`Classic`,Ke=`Duotone`,qe=`Sharp`,Je=`Sharp Duotone`,Ye=`Chisel`,Xe=`Etch`,Ze=`Graphite`,Qe=`Jelly`,$e=`Jelly Duo`,et=`Jelly Fill`,tt=`Mosaic`,nt=`Notdog`,rt=`Notdog Duo`,it=`Pixel`,at=`Slab`,ot=`Slab Duo`,st=`Slab Press`,ct=`Slab Press Duo`,lt=`Thumbprint`,ut=`Utility`,dt=`Utility Duo`,ft=`Utility Fill`,pt=`Vellum`,mt=`Whiteboard`,ht=[P,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We];ge={},C(C(C(C(C(C(C(C(C(C(ge,P,Ge),Se,Ke),Ce,qe),we,Je),Te,Ye),Ee,Xe),De,Ze),Oe,Qe),ke,$e),Ae,et),C(C(C(C(C(C(C(C(C(C(ge,je,tt),Me,nt),Ne,rt),Pe,it),Fe,at),Ie,ot),Le,st),Re,ct),ze,lt),Be,ut),C(C(C(C(ge,Ve,dt),He,ft),Ue,pt),We,mt);var gt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},_t={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},vt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),yt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},bt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],xt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},St=[`kit`];C(C({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Ct={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},wt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Tt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Et={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Dt,Ot={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},kt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Dt={},C(C(C(C(C(C(C(C(C(C(Dt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),C(C(C(C(C(C(C(C(C(C(Dt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),C(C(C(C(Dt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),C(C({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var At={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},jt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Mt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Nt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(kt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Pt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Ft=[1,2,3,4,5,6,7,8,9,10],It=Ft.concat([11,12,13,14,15,16,17,18,19,20]),Lt=[].concat(O(Object.keys(jt)),Pt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY],Ft.map(function(e){return`${e}x`}),It.map(function(e){return`w-${e}`})),Rt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},F=`___FONT_AWESOME___`,zt=16,Bt=`fa`,Vt=`svg-inline--fa`,I=`data-fa-i2svg`,Ht=`data-fa-pseudo-element`,Ut=`data-fa-pseudo-element-pending`,Wt=`data-prefix`,Gt=`data-icon`,Kt=`fontawesome-i2svg`,qt=`async`,Jt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Yt=[`::before`,`::after`,`:before`,`:after`],Xt=function(){try{return!0}catch{return!1}}();function Zt(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[P]}})}var Qt=E({},ye);Qt[P]=E(E(E(E({},{"fa-duotone":`duotone`}),ye[P]),xt.kit),xt[`kit-duotone`]);var $t=Zt(Qt),en=E({},yt);en[P]=E(E(E(E({},{duotone:`fad`}),en[P]),Et.kit),Et[`kit-duotone`]);var tn=Zt(en),nn=E({},Mt);nn[P]=E(E({},nn[P]),Tt.kit);var rn=Zt(nn),an=E({},At);an[P]=E(E({},an[P]),Ct.kit),Zt(an);var on=_e,sn=`fa-layers-text`,cn=ve;Zt(E({},gt));var ln=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],un=be,dn=[].concat(O(St),O(Lt)),fn=j.FontAwesomeConfig||{};function pn(e){var t=M.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function mn(e){return e===``?!0:e===`false`?!1:e===`true`||e}M&&typeof M.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=D(e,2),n=t[0],r=t[1],i=mn(pn(n));i!=null&&(fn[r]=i)});var hn={styleDefault:`solid`,familyDefault:P,cssPrefix:Bt,replacementClass:Vt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fn.familyPrefix&&(fn.cssPrefix=fn.familyPrefix);var L=E(E({},hn),fn);L.autoReplaceSvg||(L.observeMutations=!1);var R={};Object.keys(hn).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(t){L[e]=t,gn.forEach(function(e){return e(R)})},get:function(){return L[e]}})}),Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){L.cssPrefix=e,gn.forEach(function(e){return e(R)})},get:function(){return L.cssPrefix}}),j.FontAwesomeConfig=R;var gn=[];function _n(e){return gn.push(e),function(){gn.splice(gn.indexOf(e),1)}}var z=zt,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vn(e){if(e&&N){var t=M.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=M.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return M.head.insertBefore(t,r),e}}var yn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function bn(){for(var e=12,t=``;e-->0;)t+=yn[Math.random()*62|0];return t}function V(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function xn(e){return e.classList?V(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Sn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Cn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Sn(e[n])}" `},``).trim()}function wn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Tn(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function En(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Dn(e){var t=e.transform,n=e.width,r=n===void 0?zt:n,i=e.height,a=i===void 0?zt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&he?`translate(${t.x/z-r/2}em, ${t.y/z-a/2}em) `:s?`translate(calc(-50% + ${t.x/z}em), calc(-50% + ${t.y/z}em)) `:`translate(${t.x/z}em, ${t.y/z}em) `,c+=`scale(${t.size/z*(t.flipX?-1:1)}, ${t.size/z*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var On=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function kn(){var e=Bt,t=Vt,n=R.cssPrefix,r=R.replacementClass,i=On;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var An=!1;function jn(){R.autoAddCss&&!An&&(vn(kn()),An=!0)}var Mn={mixout:function(){return{dom:{css:kn,insertCss:jn}}},hooks:function(){return{beforeDOMElementCreation:function(){jn()},beforeI2svg:function(){jn()}}}},H=j||{};H[F]||(H[F]={}),H[F].styles||(H[F].styles={}),H[F].hooks||(H[F].hooks={}),H[F].shims||(H[F].shims=[]);var U=H[F],Nn=[],Pn=function(){M.removeEventListener(`DOMContentLoaded`,Pn),Fn=1,Nn.map(function(e){return e()})},Fn=!1;N&&(Fn=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),Fn||M.addEventListener(`DOMContentLoaded`,Pn));function In(e){N&&(Fn?setTimeout(e,0):Nn.push(e))}function Ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Sn(e):`<${t} ${Cn(r)}>${a.map(Ln).join(``)}</${t}>`}function Rn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Bn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:zn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Vn(e){return O(e).length===1?e.codePointAt(0).toString(16):null}function Hn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Un(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Hn(t);typeof U.hooks.addPack==`function`&&!r?U.hooks.addPack(e,Hn(t)):U.styles[e]=E(E({},U.styles[e]||{}),i),e===`fas`&&Un(`fa`,t)}var Wn=U.styles,Gn=U.shims,Kn=Object.keys(rn),qn=Kn.reduce(function(e,t){return e[t]=Object.keys(rn[t]),e},{}),Jn=null,Yn={},Xn={},Zn={},Qn={},$n={};function er(e){return~dn.indexOf(e)}function tr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!er(i)?i:null}var nr=function(){var e=function(e){return Bn(Wn,function(t,n,r){return t[r]=Bn(n,e,{}),t},{})};Yn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Xn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),$n=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Wn||R.autoFetchSvg,n=Bn(Gn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Zn=n.names,Qn=n.unicodes,Jn=lr(R.styleDefault,{family:R.familyDefault})};_n(function(e){Jn=lr(e.styleDefault,{family:R.familyDefault})}),nr();function rr(e,t){return(Yn[e]||{})[t]}function ir(e,t){return(Xn[e]||{})[t]}function W(e,t){return($n[e]||{})[t]}function ar(e){return Zn[e]||{prefix:null,iconName:null}}function or(e){var t=Qn[e],n=rr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function G(){return Jn}var sr=function(){return{prefix:null,iconName:null,rest:[]}};function cr(e){var t=P,n=Kn.reduce(function(e,t){return e[t]=`${R.cssPrefix}-${t}`,e},{});return ht.forEach(function(r){(e.includes(n[r])||e.some(function(e){return qn[r].includes(e)}))&&(t=r)}),t}function lr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?P:t,r=$t[n][e];if(n===Se&&!e)return`fad`;var i=tn[n][e]||tn[n][r],a=e in U.styles?e:null;return i||a||null}function ur(e){var t=[],n=null;return e.forEach(function(e){var r=tr(R.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function dr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var fr=Nt.concat(bt);function pr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=dr(e.filter(function(e){return fr.includes(e)})),a=dr(e.filter(function(e){return!fr.includes(e)})),o=D(i.filter(function(e){return r=e,!xe.includes(e)}),1)[0],s=o===void 0?null:o,c=cr(i),l=E(E({},ur(a)),{},{prefix:lr(s,{family:c})});return E(E(E({},l),_r({values:e,family:c,styles:Wn,config:R,canonical:l,givenPrefix:r})),mr(n,r,l))}function mr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?ar(i):{},o=W(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Wn.far&&Wn.fas&&!R.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var hr=ht.filter(function(e){return e!==P||e!==Se}),gr=Object.keys(Mt).filter(function(e){return e!==P}).map(function(e){return Object.keys(Mt[e])}).flat();function _r(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Se,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&hr.includes(n)&&(Object.keys(s).find(function(e){return gr.includes(e)})||l.autoFetchSvg)&&(r.prefix=vt.get(n).defaultShortPrefixId,r.iconName=W(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=G()||`fas`),r}var vr=function(){function e(){b(this,e),this.definitions={}}return ee(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=E(E({},e.definitions[n]||{}),t[n]),Un(n,t[n]);var r=rn[P][n];r&&Un(r,t[n]),nr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),yr=[],K={},q={},br=Object.keys(q);function xr(e,t){var n=t.mixoutsTo;return yr=e,K={},Object.keys(q).forEach(function(e){br.indexOf(e)===-1&&delete q[e]}),yr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),A(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){K[e]||(K[e]=[]),K[e].push(r[e])})}e.provides&&e.provides(q)}),n}function Sr(e,t){var n=[...arguments].slice(2);return(K[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function J(e){var t=[...arguments].slice(1);(K[e]||[]).forEach(function(e){e.apply(null,t)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function Cr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||G();if(t)return t=W(n,t)||t,Rn(wr.definitions,n,t)||Rn(U.styles,n,t)}var wr=new vr,X={noAuto:function(){R.autoReplaceSvg=!1,R.observeMutations=!1,J(`noAuto`)},config:R,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(J(`beforeI2svg`,e),Y(`pseudoElements2svg`,e),Y(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,In(function(){Tr({autoReplaceSvgRoot:t}),J(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(A(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=lr(e[0]);return{prefix:n,iconName:W(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${R.cssPrefix}-`)>-1||e.match(on))){var r=pr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=G();return{prefix:i,iconName:W(i,e)||e}}}},library:wr,findIconDefinition:Cr,toHtml:Ln},Tr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?M:e;(Object.keys(U.styles).length>0||R.autoFetchSvg)&&N&&R.autoReplaceSvg&&X.dom.i2svg({node:t})};function Er(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Ln(e)})}}),Object.defineProperty(e,"node",{get:function(){if(N){var t=M.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Dr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Tn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=wn(E(E({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Or(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${R.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:E(E({},i),{},{id:o}),children:r}]}]}function kr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Ar(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[R.replacementClass,a?`${R.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:E(E({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!kr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[I]=``);var _=E(E({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E({},l.styles)}),v=r.found&&n.found?Y(`generateAbstractMask`,_)||{children:[],attributes:{}}:Y(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Or(_):Dr(_)}function jr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=E(E({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[I]=``);var l=E({},a.styles);Tn(i)&&(l.transform=Dn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=wn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Mr(e){var t=e.content,n=e.extra,r=E(E({},n.attributes),{},{class:n.classes.join(` `)}),i=wn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Nr=U.styles;function Pr(e){var t=e[0],n=e[1],r=D(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${R.cssPrefix}-${un.GROUP}`},children:[{tag:`path`,attributes:{class:`${R.cssPrefix}-${un.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${R.cssPrefix}-${un.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Fr={found:!1,width:512,height:512};function Ir(e,t){!Xt&&!R.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Lr(e,t){var n=t;return t===`fa`&&R.styleDefault!==null&&(t=G()),new Promise(function(r,i){if(n===`fa`){var a=ar(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Nr[t]&&Nr[t][e]){var o=Nr[t][e];return r(Pr(o))}Ir(e,t),r(E(E({},Fr),{},{icon:R.showMissingIcons&&e&&Y(`missingIconAbstract`)||{}}))})}var Rr=function(){},zr=R.measurePerformance&&me&&me.mark&&me.measure?me:{mark:Rr,measure:Rr},Br=`FA "7.3.1"`,Vr=function(e){return zr.mark(`${Br} ${e} begins`),function(){return Hr(e)}},Hr=function(e){zr.mark(`${Br} ${e} ends`),zr.measure(`${Br} ${e}`,`${Br} ${e} begins`,`${Br} ${e} ends`)},Ur={begin:Vr,end:Hr},Wr=function(){};function Gr(e){return typeof(e.getAttribute?e.getAttribute(I):null)==`string`}function Kr(e){var t=e.getAttribute?e.getAttribute(Wt):null,n=e.getAttribute?e.getAttribute(Gt):null;return t&&n}function qr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function Jr(){return R.autoReplaceSvg===!0?$r.replace:$r[R.autoReplaceSvg]||$r.replace}function Yr(e){return M.createElementNS(`http://www.w3.org/2000/svg`,e)}function Xr(e){return M.createElement(e)}function Zr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Yr:Xr:t;if(typeof e==`string`)return M.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Zr(e,{ceFn:n}))}),r}function Qr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var $r={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(Zr(e),t)}),t.getAttribute(I)===null&&R.keepOriginalSource){var n=M.createComment(Qr(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~xn(t).indexOf(R.replacementClass))return $r.replace(e);var r=RegExp(`${R.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===R.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Ln(e)}).join(`
`);t.setAttribute(I,``),t.innerHTML=a}};function ei(e){e()}function ti(e,t){var n=typeof t==`function`?t:Wr;if(e.length===0)n();else{var r=ei;R.mutateApproach===qt&&(r=j.requestAnimationFrame||ei),r(function(){var t=Jr(),r=Ur.begin(`mutate`);e.map(t),r(),n()})}}var ni=!1;function ri(){ni=!0}function ii(){ni=!1}var ai=null;function oi(e){if(pe&&R.observeMutations){var t=e.treeCallback,n=t===void 0?Wr:t,r=e.nodeCallback,i=r===void 0?Wr:r,a=e.pseudoElementsCallback,o=a===void 0?Wr:a,s=e.observeMutationsRoot,c=s===void 0?M:s;ai=new pe(function(e){if(!ni){var t=G();V(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Gr(e.addedNodes[0])&&(R.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&R.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Gr(e.target)&&~ln.indexOf(e.attributeName)){if(e.attributeName===`class`&&Kr(e.target)){var r=pr(xn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Wt,a||t),s&&e.target.setAttribute(Gt,s)}else qr(e.target)&&i(e.target)}})}}),N&&ai.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function si(){ai&&ai.disconnect()}function ci(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function li(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=pr(xn(e));return i.prefix||=G(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=ir(i.prefix,e.innerText)||rr(i.prefix,Vn(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ui(e){return V(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function di(){return{iconName:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=li(e),r=n.iconName,i=n.prefix,a=n.rest,o=ui(e),s=Sr(`parseNodeAttributes`,{},e);return E({iconName:r,prefix:i,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?ci(e):[],attributes:o}},s)}var pi=U.styles;function mi(e){var t=R.autoReplaceSvg===`nest`?fi(e,{styleParser:!1}):fi(e);return~t.extra.classes.indexOf(sn)?Y(`generateLayersText`,e,t):Y(`generateSvgReplacementMutation`,e,t)}function hi(){return[].concat(O(bt),O(Nt))}function gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();var n=M.documentElement.classList,r=function(e){return n.add(`${Kt}-${e}`)},i=function(e){return n.remove(`${Kt}-${e}`)},a=R.autoFetchSvg?hi():xe.concat(Object.keys(pi));a.includes(`fa`)||a.push(`fa`);var o=[`.${sn}:not([${I}])`].concat(a.map(function(e){return`.${e}:not([${I}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=V(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Ur.begin(`onTree`),l=s.reduce(function(e,t){try{var n=mi(t);n&&e.push(n)}catch(e){Xt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){ti(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mi(e).then(function(e){e&&ti([e],t)})}function vi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Cr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Cr(i||{}),e(r,E(E({},n),{},{mask:i}))}}var yi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Er(E({type:`icon`},e),function(){return J(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Ar({icons:{main:Pr(v),mask:s?Pr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:E(E({},B),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},bi={mixout:function(){return{icon:vi(yi)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=gi,e.nodeCallback=_i,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?M:t,r=e.callback;return gi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Lr(n,r),o.iconName?Lr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=D(o,2),u=l[0],d=l[1];t([e,Ar({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=wn(a);o.length>0&&(n.style=o);var s;return Tn(i)&&(s=Y(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},xi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Er({type:`layer`},function(){J(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${R.cssPrefix}-layers`].concat(O(r)).join(` `)},children:n}]})}}}},Si={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Er({type:`counter`,content:e},function(){return J(`beforeDOMElementCreation`,{content:e,params:t}),Mr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-counter`].concat(O(a))}})})}}}},Ci={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Er({type:`text`,content:e},function(){return J(`beforeDOMElementCreation`,{content:e,params:t}),jr({content:e,transform:E(E({},B),r),extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-text`].concat(O(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(he){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,jr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},wi=RegExp(`"`,`ug`),Ti=[1105920,1112319],Ei=E(E(E(E({},{FontAwesome:{normal:`fas`,400:`fas`}}),_t),Rt),wt),Di=Object.keys(Ei).reduce(function(e,t){return e[t.toLowerCase()]=Ei[t],e},{}),Oi=Object.keys(Di).reduce(function(e,t){var n=Di[t];return e[t]=n[900]||O(Object.entries(n))[0][1],e},{});function ki(e){return Vn(O(e.replace(wi,``))[0]||``)}function Ai(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(wi,``),r=n.codePointAt(0),i=r>=Ti[0]&&r<=Ti[1],a=n.length===2&&n[0]===n[1];return i||a||t}function ji(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Di[n]||{})[i]||Oi[n]}function Mi(e,t){var n=`${Ut}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=V(e.children).filter(function(e){return e.getAttribute(Ht)===t})[0],o=j.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(cn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=ji(s,l),p=ki(d),m=c[0].startsWith(`FontAwesome`),h=Ai(o),g=rr(f,p),_=g;if(m){var v=or(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Wt)!==f||a.getAttribute(Gt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=di(),b=y.extra;b.attributes[Ht]=t,Lr(g,f).then(function(i){var a=Ar(E(E({},y),{},{icons:{main:i,mask:sr()},prefix:f,iconName:_,extra:b,watchable:!0})),o=M.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Ln(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ni(e){return Promise.all([Mi(e,`::before`),Mi(e,`::after`)])}function Pi(e){return e.parentNode!==document.head&&!~Jt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ht)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Fi=function(e){return!!e&&Yt.some(function(t){return e.includes(t)})},Ii=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=S(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Fi(a)){var o=Yt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Li(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(N){var n;if(t)n=e;else if(R.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=S(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=S(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=S(Ii(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){R.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=V(n).filter(Pi).map(Ni),i=Ur.begin(`searchPseudoElements`);ri(),Promise.all(r).then(function(){i(),ii(),e()}).catch(function(){i(),ii(),t()})})}}var Ri={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Li,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?M:t;R.searchPseudoElements&&Li(n)}}},zi=!1,Bi={mixout:function(){return{dom:{unwatch:function(){ri(),zi=!0}}}},hooks:function(){return{bootstrap:function(){oi(Sr(`mutationObserverCallbacks`,{}))},noAuto:function(){si()},watch:function(e){var t=e.observeMutationsRoot;zi?ii():oi(Sr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Vi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Hi={mixout:function(){return{parse:{transform:function(e){return Vi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Vi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:E({},a.outer),children:[{tag:`g`,attributes:E({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:E(E({},t.icon.attributes),a.path)}]}]}}}},Ui={x:0,y:0,width:`100%`,height:`100%`};function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Gi(e){return e.tag===`g`?e.children:[e]}xr([Mn,bi,xi,Si,Ci,Ri,Bi,Hi,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?pr(n.split(` `).map(function(e){return e.trim()})):sr();return r.prefix||=G(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=En({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:E(E({},Ui),{},{fill:`white`})},p=c.children?{children:c.children.map(Wi)}:{},m={tag:`g`,attributes:E({},d.inner),children:[Wi(E({tag:c.tag,attributes:E(E({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:E({},d.outer),children:[m]},g=`mask-${a||bn()}`,_=`clip-${a||bn()}`,v={tag:`mask`,attributes:E(E({},Ui),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Gi(u)},v]};return t.push(y,{tag:`rect`,attributes:E({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ui)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;j.matchMedia&&(t=j.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:E(E({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=E(E({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:E(E({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:E(E({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:E(E({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:E(E({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:E(E({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:E(E({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:E(E({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:X}),X.noAuto;var Z=X.config;X.library,X.dom;var Ki=X.parse;X.findIconDefinition,X.toHtml;var qi=X.icon;X.layer,X.text,X.counter,m();function Ji(e){return e-=0,e===e}function Yi(e){return Ji(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Xi=(e,t)=>g.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Zi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Qi=new Map,$i=1e3;function ea(e){if(Qi.has(e))return Qi.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Yi(n);t[e.startsWith(`webkit`)?Zi(e):e]=r}}}n=a+1}if(Qi.size===$i){let e=Qi.keys().next().value;e&&Qi.delete(e)}return Qi.set(e,t),t}function ta(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),ta(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=ea(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Yi(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Xi)))}return e(t.tag,{...a,...u},...r)}var na=ta.bind(null,g.createElement),ra=(e,t)=>{let n=(0,g.useId)();return e||(t?n:void 0)},ia=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var aa=`searchPseudoElementsFullScan`in Z&&typeof Z.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,oa=Number.parseInt(aa)>=7,sa=()=>oa,ca=`fa`,Q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},la={left:`fa-pull-left`,right:`fa-pull-right`},ua={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},da={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},$={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},fa={default:`fa-layers`};function pa(e){let t=Z.cssPrefix||Z.familyPrefix||ca;return t===ca?e:e.replace(new RegExp(String.raw`(?<=^|\s)${ca}-`,`g`),`${t}-`)}function ma(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:ee,buzz:S,float:C,jello:w,spinSnap:te,spinSnap4:ne,spinSnap8:re,swing:T,wag:E,className:D}=e,O=[];return D&&O.push(...D.split(` `)),t&&O.push(Q.beat),n&&O.push(Q.fade),r&&O.push(Q.beatFade),i&&O.push(Q.bounce),a&&O.push(Q.shake),o&&O.push(Q.spin),c&&O.push(Q.spinReverse),s&&O.push(Q.spinPulse),l&&O.push(Q.pulse),u&&O.push($.fixedWidth),d&&O.push($.inverse),f&&O.push($.border),p===!0&&O.push($.flip),(p===`horizontal`||p===`both`)&&O.push($.flipHorizontal),(p===`vertical`||p===`both`)&&O.push($.flipVertical),m!=null&&O.push(da[m]),h!=null&&h!==0&&O.push(ua[h]),g!=null&&O.push(la[g]),_&&O.push($.swapOpacity),sa()?(v&&O.push($.rotateBy),y&&O.push($.widthAuto),b&&O.push($.canvasSquare),x&&O.push($.canvasRoomy),ee&&O.push(Q.flip360),S&&O.push(Q.buzz),C&&O.push(Q.float),w&&O.push(Q.jello),te&&O.push(Q.spinSnap),ne&&O.push(Q.spinSnap4),re&&O.push(Q.spinSnap8),T&&O.push(Q.swing),E&&O.push(Q.wag),(Z.cssPrefix||Z.familyPrefix||ca)===ca?O:O.map(pa)):O}var ha=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function ga(e){if(e)return ha(e)?e:Ki.icon(e)}function _a(e){return Object.keys(e)}var va=new ia(`FontAwesomeIcon`),ya={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},ba=new Set(Object.keys(ya)),xa=g.forwardRef((e,t)=>{let n={...ya,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=ra(c,!!i),d=ra(s,!!o),f=ga(r);if(!f)return va.error(`Icon lookup is undefined`,r),null;let p=ma(n),m=typeof l==`string`?Ki.transform(l):l,h=ga(i),g=qi(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return va.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of _a(n))ba.has(e)||(v[e]=n[e]);return na(_[0],v)});xa.displayName=`FontAwesomeIcon`,`${fa.default}${$.fixedWidth}`;var Sa={prefix:`fas`,iconName:`calendar-check`,icon:[448,512,[],`f274`,`M320 0c17.7 0 32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32zm22 161.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 331.2 137 279.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 195.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Ca={prefix:`fas`,iconName:`arrow-trend-up`,icon:[576,512,[],`e098`,`M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7-169.4 169.4c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z`]},wa={prefix:`fas`,iconName:`medal`,icon:[448,512,[127941],`f5a2`,`M224.3 128L139.7-12.9c-6.5-10.8-20.1-14.7-31.3-9.1L21.8 21.3C9.9 27.2 5.1 41.6 11 53.5L80.6 192.6c-30.1 33.9-48.3 78.5-48.3 127.4 0 106 86 192 192 192s192-86 192-192c0-48.9-18.3-93.5-48.3-127.4L437.6 53.5c5.9-11.9 1.1-26.3-10.7-32.2L340.2-22.1c-11.2-5.6-24.9-1.6-31.3 9.1L224.3 128zm30.8 142.5c1.4 2.8 4 4.7 7 5.1l50.1 7.3c7.7 1.1 10.7 10.5 5.2 16l-36.3 35.4c-2.2 2.2-3.2 5.2-2.7 8.3l8.6 49.9c1.3 7.6-6.7 13.5-13.6 9.9l-44.8-23.6c-2.7-1.4-6-1.4-8.7 0l-44.8 23.6c-6.9 3.6-14.9-2.2-13.6-9.9l8.6-49.9c.5-3-.5-6.1-2.7-8.3l-36.3-35.4c-5.6-5.4-2.5-14.8 5.2-16l50.1-7.3c3-.4 5.7-2.4 7-5.1l22.4-45.4c3.4-7 13.3-7 16.8 0l22.4 45.4z`]},Ta={prefix:`fas`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z`]},Ea={prefix:`fas`,iconName:`indian-rupee-sign`,icon:[320,512,[`indian-rupee`,`inr`],`e1bc`,`M0 64C0 46.3 14.3 32 32 32l264 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-76.7 0c17.7 19.8 30.1 44.6 34.7 72l42 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-42 0c-10.4 62.2-60.8 110.9-123.8 118.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c35.8 0 66.1-23.5 76.3-56L24 200c-13.3 0-24-10.7-24-24s10.7-24 24-24l164.3 0c-10.2-32.5-40.5-56-76.3-56L32 96C14.3 96 0 81.7 0 64z`]},Da={prefix:`fas`,iconName:`wallet`,icon:[512,512,[],`f555`,`M64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L72 128c-13.3 0-24-10.7-24-24S58.7 80 72 80l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L64 32zM416 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z`]},Oa={prefix:`fas`,iconName:`trophy`,icon:[512,512,[127942],`f091`,`M144.3 0l224 0c26.5 0 48.1 21.8 47.1 48.2-.2 5.3-.4 10.6-.7 15.8l49.6 0c26.1 0 49.1 21.6 47.1 49.8-7.5 103.7-60.5 160.7-118 190.5-15.8 8.2-31.9 14.3-47.2 18.8-20.2 28.6-41.2 43.7-57.9 51.8l0 73.1 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-73.1c-16-7.7-35.9-22-55.3-48.3-18.4-4.8-38.4-12.1-57.9-23.1-54.1-30.3-102.9-87.4-109.9-189.9-1.9-28.1 21-49.7 47.1-49.7l49.6 0c-.3-5.2-.5-10.4-.7-15.8-1-26.5 20.6-48.2 47.1-48.2zM101.5 112l-52.4 0c6.2 84.7 45.1 127.1 85.2 149.6-14.4-37.3-26.3-86-32.8-149.6zM380 256.8c40.5-23.8 77.1-66.1 83.3-144.8L411 112c-6.2 60.9-17.4 108.2-31 144.8z`]},ka={prefix:`fas`,iconName:`calendar-days`,icon:[448,512,[`calendar-alt`],`f073`,`M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z`]},Aa={prefix:`fas`,iconName:`up-right-from-square`,icon:[512,512,[`external-link-alt`],`f35d`,`M290.4 19.8C295.4 7.8 307.1 0 320 0L480 0c17.7 0 32 14.3 32 32l0 160c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9L400 157.3 246.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L354.7 112 297.4 54.6c-9.2-9.2-11.9-22.9-6.9-34.9zM0 176c0-44.2 35.8-80 80-80l80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-80 0c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 176z`]},ja={prefix:`fas`,iconName:`gift`,icon:[512,512,[127873],`f06b`,`M321.5 68.8C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-73.3 0 34.8-59.2zm-131 0l34.8 59.2-73.3 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zm89.6-24.3l-24.1 41-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4zM480 272l-200 0 0 208 136 0c35.3 0 64-28.7 64-64l0-144zm-248 0l-200 0 0 144c0 35.3 28.7 64 64 64l136 0 0-208z`]},Ma={prefix:`fas`,iconName:`share-nodes`,icon:[512,512,[`share-alt`],`f1e0`,`M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z`]},Na={prefix:`fas`,iconName:`file-zipper`,icon:[384,512,[`file-archive`],`f1c6`,`M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM64 72c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 48C74.7 48 64 58.7 64 72zm0 96c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zm64 72l-32 0c-17.7 0-32 14.3-32 32l0 48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-48c0-17.7-14.3-32-32-32zm-16 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z`]},Pa={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},Fa={prefix:`fas`,iconName:`clipboard-check`,icon:[384,512,[],`f46c`,`M256 0c23.7 0 44.4 12.9 55.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0zm26.9 212.6c-10.7-7.8-25.7-5.4-33.5 5.3l-85.6 117.7-26.5-27.4c-9.2-9.5-24.4-9.8-33.9-.6s-9.8 24.4-.6 33.9l46.4 48c4.9 5.1 11.8 7.8 18.9 7.3s13.6-4.1 17.8-9.8L288.2 246.1c7.8-10.7 5.4-25.7-5.3-33.5zM136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64z`]},Ia={prefix:`fas`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},La={prefix:`fas`,iconName:`folder-open`,icon:[576,512,[128194,128449,61717],`f07c`,`M56 225.6L32.4 296.2 32.4 96c0-35.3 28.7-64 64-64l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4l117.3 0c35.3 0 64 28.7 64 64l0 16-365.4 0c-41.3 0-78 26.4-91.1 65.6zM477.8 448L99 448c-32.8 0-55.9-32.1-45.5-63.2l48-144C108 221.2 126.4 208 147 208l378.8 0c32.8 0 55.9 32.1 45.5 63.2l-48 144c-6.5 19.6-24.9 32.8-45.5 32.8z`]},Ra={prefix:`fas`,iconName:`chevron-right`,icon:[320,512,[9002],`f054`,`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`]},za={prefix:`fas`,iconName:`fire`,icon:[448,512,[128293],`f06d`,`M160.5-26.4c9.3-7.8 23-7.5 31.9 .9 12.3 11.6 23.3 24.4 33.9 37.4 13.5 16.5 29.7 38.3 45.3 64.2 5.2-6.8 10-12.8 14.2-17.9 1.1-1.3 2.2-2.7 3.3-4.1 7.9-9.8 17.7-22.1 30.8-22.1 13.4 0 22.8 11.9 30.8 22.1 1.3 1.7 2.6 3.3 3.9 4.8 10.3 12.4 24 30.3 37.7 52.4 27.2 43.9 55.6 106.4 55.6 176.6 0 123.7-100.3 224-224 224S0 411.7 0 288c0-91.1 41.1-170 80.5-225 19.9-27.7 39.7-49.9 54.6-65.1 8.2-8.4 16.5-16.7 25.5-24.2zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-17.3-22.1-49.1-62.4-65.3-83-5.4-6.9-15.2-8-21.5-1.9-18.3 17.8-51.5 56.8-51.5 104.3 0 68.6 50.6 109.2 113.7 109.2z`]},Ba={prefix:`fas`,iconName:`users`,icon:[640,512,[],`f0c0`,`M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z`]},Va={prefix:`fas`,iconName:`certificate`,icon:[576,512,[],`f0a3`,`M239.2-8c-6.1-6.2-15-8.7-23.4-6.4S200.9-5.6 198.8 2.8L183.5 63c-1.1 4.4-5.6 7-9.9 5.7L113.8 51.9c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l16.9 59.8c1.2 4.3-1.4 8.8-5.7 9.9L35.1 166.5c-8.4 2.1-15 8.7-17.3 17.1s.2 17.3 6.4 23.4l44.5 43.3c3.2 3.1 3.2 8.3 0 11.5L24.3 305.1c-6.2 6.1-8.7 15-6.4 23.4s8.9 14.9 17.3 17.1l60.2 15.3c4.4 1.1 7 5.6 5.7 9.9L84.2 430.5c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l59.8-16.9c4.3-1.2 8.8 1.4 9.9 5.7l15.3 60.2c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l43.3-44.5c3.1-3.2 8.3-3.2 11.5 0L337.3 520c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3L393.1 449c1.1-4.4 5.6-7 9.9-5.7l59.8 16.9c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-16.9-59.8c-1.2-4.3 1.4-8.8 5.7-9.9l60.2-15.3c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-44.5-43.3c-3.2-3.1-3.2-8.3 0-11.5l44.5-43.3c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-60.2-15.3c-4.4-1.1-7-5.6-5.7-9.9l16.9-59.8c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1L403 68.8c-4.3 1.2-8.8-1.4-9.9-5.7L377.8 2.8c-2.1-8.4-8.7-15-17.1-17.3s-17.3 .2-23.4 6.4L294 36.5c-3.1 3.2-8.3 3.2-11.5 0L239.2-8z`]},Ha={prefix:`fas`,iconName:`sack-dollar`,icon:[512,512,[128176],`f81d`,`M328 112l-144 0-37.3-74.5c-1.8-3.6-2.7-7.6-2.7-11.6 0-14.3 11.6-25.9 25.9-25.9L342.1 0c14.3 0 25.9 11.6 25.9 25.9 0 4-.9 8-2.7 11.6L328 112zM169.6 160l172.8 0 48.7 40.6C457.6 256 496 338 496 424.5 496 472.8 456.8 512 408.5 512l-305.1 0C55.2 512 16 472.8 16 424.5 16 338 54.4 256 120.9 200.6L169.6 160zM260 224c-11 0-20 9-20 20l0 4c-28.8 .3-52 23.7-52 52.5 0 25.7 18.5 47.6 43.9 51.8l41.7 7c6 1 10.4 6.2 10.4 12.3 0 6.9-5.6 12.5-12.5 12.5L216 384c-11 0-20 9-20 20s9 20 20 20l24 0 0 4c0 11 9 20 20 20s20-9 20-20l0-4.7c25-4.1 44-25.7 44-51.8 0-25.7-18.5-47.6-43.9-51.8l-41.7-7c-6-1-10.4-6.2-10.4-12.3 0-6.9 5.6-12.5 12.5-12.5l47.5 0c11 0 20-9 20-20s-9-20-20-20l-8 0 0-4c0-11-9-20-20-20z`]},Ua={prefix:`fas`,iconName:`sun`,icon:[576,512,[9728],`f185`,`M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z`]},Wa={prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},Ga={prefix:`fas`,iconName:`user-plus`,icon:[640,512,[],`f234`,`M285.7 304c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L77.7 512C61.3 512 48 498.7 48 482.3 48 383.8 127.8 304 226.3 304l59.4 0zM528 80c13.3 0 24 10.7 24 24l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24zM256 248a120 120 0 1 1 0-240 120 120 0 1 1 0 240z`]},Ka={prefix:`fas`,iconName:`calendar-day`,icon:[448,512,[],`f783`,`M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zm0 256c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0z`]},qa={prefix:`fas`,iconName:`link`,icon:[576,512,[128279,`chain`],`f0c1`,`M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z`]},Ja={prefix:`fas`,iconName:`chart-line`,icon:[512,512,[`line-chart`],`f201`,`M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z`]},Ya={prefix:`fas`,iconName:`building`,icon:[384,512,[127970,61687],`f1ad`,`M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z`]},Xa={prefix:`fas`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`]},Za={prefix:`fas`,iconName:`right-from-bracket`,icon:[512,512,[`sign-out-alt`],`f2f5`,`M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z`]},Qa={prefix:`fas`,iconName:`file`,icon:[384,512,[128196,128459,61462],`f15b`,`M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z`]},$a={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]},eo={prefix:`fas`,iconName:`house`,icon:[512,512,[127968,63498,63500,`home`,`home-alt`,`home-lg-alt`],`f015`,`M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z`]},to={prefix:`fas`,iconName:`sliders`,icon:[512,512,[`sliders-h`],`f1de`,`M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z`]},no={prefix:`fas`,iconName:`laptop-code`,icon:[640,512,[],`f5fc`,`M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z`]},ro={prefix:`fas`,iconName:`user`,icon:[448,512,[128100,62144,62470,`user-alt`,`user-large`],`f007`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z`]},io={prefix:`fas`,iconName:`ticket`,icon:[576,512,[127903],`f145`,`M64 64C28.7 64 0 92.7 0 128l0 64C0 200.8 7.4 207.7 15.7 210.6 34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6-18.8-6.5-32.3-24.4-32.3-45.4s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zM416 336l0-160-256 0 0 160 256 0zM112 160c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-192z`]},ao={prefix:`fas`,iconName:`gauge-high`,icon:[512,512,[62461,`tachometer-alt`,`tachometer-alt-fast`],`f625`,`M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64 0-16.2-6-31.1-16-42.3l69.5-138.9c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L261.1 288.2c-1.7-.1-3.4-.2-5.1-.2-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z`]},oo={prefix:`fas`,iconName:`arrow-right`,icon:[512,512,[8594],`f061`,`M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z`]},so={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},co={prefix:`fas`,iconName:`file-lines`,icon:[384,512,[128441,128462,61686,`file-alt`,`file-text`],`f15c`,`M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z`]},lo={prefix:`fas`,iconName:`tags`,icon:[576,512,[],`f02c`,`M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7 45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z`]},uo={prefix:`fas`,iconName:`circle-check`,icon:[512,512,[61533,`check-circle`],`f058`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},fo={prefix:`fas`,iconName:`moon`,icon:[512,512,[127769,9214],`f186`,`M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z`]},po={prefix:`fas`,iconName:`circle-play`,icon:[512,512,[61469,`play-circle`],`f144`,`M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z`]},mo={prefix:`fas`,iconName:`rotate-right`,icon:[512,512,[`redo-alt`,`rotate-forward`],`f2f9`,`M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z`]},ho={prefix:`fas`,iconName:`chevron-down`,icon:[448,512,[],`f078`,`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]},go={prefix:`fas`,iconName:`inbox`,icon:[512,512,[],`f01c`,`M91.8 32C59.9 32 32.9 55.4 28.4 86.9L.6 281.2c-.4 3-.6 6-.6 9.1L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-125.7c0-3-.2-6.1-.6-9.1L483.6 86.9C479.1 55.4 452.1 32 420.2 32L91.8 32zm0 64l328.5 0 27.4 192-59.9 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L64.3 288 91.8 96z`]},_o={prefix:`fas`,iconName:`hourglass-half`,icon:[384,512,[`hourglass-2`],`f252`,`M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1l67.9 67.9-67.9 67.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1l-67.9-67.9 67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32S369.7 0 352 0L32 0zM96 75l0-11 192 0 0 11c0 19-5.6 37.4-16 53L112 128c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9l67.9-67.9 67.9 67.9c4.6 4.6 8.6 9.6 12.2 14.9L112 384z`]},vo={prefix:`fas`,iconName:`chevron-left`,icon:[320,512,[9001],`f053`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`]},yo={prefix:`fas`,iconName:`star`,icon:[576,512,[11088,61446],`f005`,`M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z`]},bo={prefix:`fas`,iconName:`flag`,icon:[448,512,[127988,61725],`f024`,`M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-121.6 62.7-18.8c41.9-12.6 87.1-8.7 126.2 10.9 42.7 21.4 92.5 24 137.2 7.2l37.1-13.9c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-11.8 5.9c-44.9 22.5-97.8 22.5-142.8 0-36.4-18.2-78.3-21.8-117.2-10.1L64 54.4 64 32z`]},xo={prefix:`fas`,iconName:`triangle-exclamation`,icon:[512,512,[9888,`exclamation-triangle`,`warning`],`f071`,`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`]},So={prefix:`fas`,iconName:`graduation-cap`,icon:[576,512,[127891,`mortar-board`],`f19d`,`M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z`]},Co={prefix:`fas`,iconName:`lock`,icon:[384,512,[128274],`f023`,`M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z`]},wo={prefix:`fas`,iconName:`house-laptop`,icon:[640,512,[`laptop-house`],`e066`,`M448 240l19.9 0c15.5 0 28.1-12.6 28.1-28.1 0-7.6-3.1-14.9-8.6-20.2L283.5-4.9C276.1-12 266.3-16 256-16s-20.1 4-27.5 11.1L24.6 191.7C19.1 197 16 204.3 16 211.9 16 227.4 28.6 240 44.1 240l19.9 0 0 144c0 35.3 28.7 64 64 64l85.7 0c7.4-6.6 16.4-11.4 26.3-14l0-130c0-5.5 .7-10.9 2-16l-10 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24 144 0zM352 352l160 0 0 128-160 0 0-128zm-64-32l0 160-32 0c-8.8 0-16 7.2-16 16 0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16l-32 0 0-160c0-17.7-14.3-32-32-32l-224 0c-17.7 0-32 14.3-32 32z`]},To={prefix:`fas`,iconName:`download`,icon:[448,512,[],`f019`,`M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z`]},Eo={prefix:`fas`,iconName:`award`,icon:[448,512,[],`f559`,`M245.9-25.9c-13.4-8.2-30.3-8.2-43.7 0-24.4 14.9-39.5 18.9-68.1 18.3-15.7-.4-30.3 8.1-37.9 21.9-13.7 25.1-24.8 36.2-49.9 49.9-13.8 7.5-22.2 22.2-21.9 37.9 .7 28.6-3.4 43.7-18.3 68.1-8.2 13.4-8.2 30.3 0 43.7 14.9 24.4 18.9 39.5 18.3 68.1-.4 15.7 8.1 30.3 21.9 37.9 22.1 12.1 33.3 22.1 45.1 41.5L42.7 458.5c-5.9 11.9-1.1 26.3 10.7 32.2l86 43c11.5 5.7 25.5 1.4 31.7-9.8l52.8-95.1 52.8 95.1c6.2 11.2 20.2 15.6 31.7 9.8l86-43c11.9-5.9 16.7-20.3 10.7-32.2l-48.6-97.2c11.7-19.4 23-29.4 45.1-41.5 13.8-7.5 22.2-22.2 21.9-37.9-.7-28.6 3.4-43.7 18.3-68.1 8.2-13.4 8.2-30.3 0-43.7-14.9-24.4-18.9-39.5-18.3-68.1 .4-15.7-8.1-30.3-21.9-37.9-25.1-13.7-36.2-24.8-49.9-49.9-7.5-13.8-22.2-22.2-37.9-21.9-28.6 .7-43.7-3.4-68.1-18.3zM224 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z`]},Do={prefix:`fas`,iconName:`file-pdf`,icon:[576,512,[],`f1c1`,`M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l80 0 0-112c0-35.3 28.7-64 64-64l176 0 0-165.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM240 380c-11 0-20 9-20 20l0 128c0 11 9 20 20 20s20-9 20-20l0-28 12 0c33.1 0 60-26.9 60-60s-26.9-60-60-60l-32 0zm32 80l-12 0 0-40 12 0c11 0 20 9 20 20s-9 20-20 20zm96-80c-11 0-20 9-20 20l0 128c0 11 9 20 20 20l32 0c28.7 0 52-23.3 52-52l0-64c0-28.7-23.3-52-52-52l-32 0zm20 128l0-88 12 0c6.6 0 12 5.4 12 12l0 64c0 6.6-5.4 12-12 12l-12 0zm88-108l0 128c0 11 9 20 20 20s20-9 20-20l0-44 28 0c11 0 20-9 20-20s-9-20-20-20l-28 0 0-24 28 0c11 0 20-9 20-20s-9-20-20-20l-48 0c-11 0-20 9-20 20z`]},Oo={prefix:`fas`,iconName:`shield-halved`,icon:[512,512,[`shield-alt`],`f3ed`,`M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z`]},ko={prefix:`fas`,iconName:`globe`,icon:[512,512,[127760],`f0ac`,`M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z`]},Ao={prefix:`fas`,iconName:`arrow-left`,icon:[512,512,[8592],`f060`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z`]},jo={prefix:`fas`,iconName:`copy`,icon:[448,512,[],`f0c5`,`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`]},Mo={prefix:`fas`,iconName:`door-closed`,icon:[448,512,[128682],`f52a`,`M32 64C32 28.7 60.7 0 96 0L352 0c35.3 0 64 28.7 64 64l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64zM320 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z`]},No={prefix:`fas`,iconName:`bolt`,icon:[448,512,[9889,`zap`],`f0e7`,`M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z`]},Po={prefix:`fas`,iconName:`arrow-up-right-from-square`,icon:[512,512,[`external-link`],`f08e`,`M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z`]},Fo={prefix:`fas`,iconName:`briefcase`,icon:[512,512,[128188],`f0b1`,`M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z`]},Io={prefix:`fas`,iconName:`coins`,icon:[512,512,[],`f51e`,`M128 96l0-16c0-44.2 86-80 192-80S512 35.8 512 80l0 16c0 30.6-41.3 57.2-102 70.7-2.4-2.8-4.9-5.5-7.4-8-15.5-15.3-35.5-26.9-56.4-35.5-41.9-17.5-96.5-27.1-154.2-27.1-21.9 0-43.3 1.4-63.8 4.1-.2-1.3-.2-2.7-.2-4.1zM432 353l0-46.2c15.1-3.9 29.3-8.5 42.2-13.9 13.2-5.5 26.1-12.2 37.8-20.3l0 15.4c0 26.8-31.5 50.5-80 65zm0-96l0-33c0-4.5-.4-8.8-1-13 15.5-3.9 30-8.6 43.2-14.2s26.1-12.2 37.8-20.3l0 15.4c0 26.8-31.5 50.5-80 65zM0 240l0-16c0-44.2 86-80 192-80s192 35.8 192 80l0 16c0 44.2-86 80-192 80S0 284.2 0 240zm384 96c0 44.2-86 80-192 80S0 380.2 0 336l0-15.4c11.6 8.1 24.5 14.7 37.8 20.3 41.9 17.5 96.5 27.1 154.2 27.1s112.3-9.7 154.2-27.1c13.2-5.5 26.1-12.2 37.8-20.3l0 15.4zm0 80.6l0 15.4c0 44.2-86 80-192 80S0 476.2 0 432l0-15.4c11.6 8.1 24.5 14.7 37.8 20.3 41.9 17.5 96.5 27.1 154.2 27.1s112.3-9.7 154.2-27.1c13.2-5.5 26.1-12.2 37.8-20.3z`]},Lo={prefix:`fas`,iconName:`location-dot`,icon:[384,512,[`map-marker-alt`],`f3c5`,`M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z`]},Ro={prefix:`fas`,iconName:`list-check`,icon:[512,512,[`tasks`],`f0ae`,`M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z`]},zo={prefix:`fas`,iconName:`book-open`,icon:[512,512,[128214,128366],`f518`,`M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z`]},Bo={prefix:`fas`,iconName:`circle-info`,icon:[512,512,[`info-circle`],`f05a`,`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`]};export{wa as $,Qa as A,ko as B,Ia as C,u as Ct,Mo as D,jo as E,bo as F,go as G,_o as H,La as I,qa as J,Ea as K,ao as L,Do as M,Na as N,To as O,za as P,Pa as Q,Xa as R,Fa as S,f as St,Io as T,c as Tt,eo as U,So as V,wo as W,Lo as X,Ro as Y,Co as Z,vo as _,Da as _t,Eo as a,Oo as at,Bo as b,h as bt,Fo as c,Ua as ct,Ka as d,xo as dt,fo as et,ka as f,Oa as ft,ho as g,Ba as gt,$a as h,Ga as ht,Po as i,Ma as it,co as j,Ta as k,Ya as l,lo as lt,Ja as m,ro as mt,oo as n,mo as nt,No as o,to as ot,Va as p,Aa as pt,no as q,Ca as r,Ha as rt,zo as s,yo as st,Ao as t,Za as tt,Sa as u,io as ut,Ra as v,so as vt,Wa as w,o as wt,po as x,m as xt,uo as y,xa as yt,ja as z};