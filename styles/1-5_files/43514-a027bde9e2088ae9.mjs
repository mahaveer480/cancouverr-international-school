"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[43514],{106183:(e,t,i)=>{var n;i.r(t),i.d(t,{default:()=>l});let a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ContextMenuClickthroughLogging_pin",selections:[{alias:null,args:null,concreteType:"AdData",kind:"LinkedField",name:"adData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ceAltImageSignature",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dpaCreativeType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"ArticleMetadata",kind:"LinkedField",name:"article",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:n,storageKey:null},{alias:null,args:null,concreteType:"RecipeMetadata",kind:"LinkedField",name:"recipe",plural:!1,selections:n,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:n,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackedLink",storageKey:null},{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"}],type:"Pin",abstractKey:null};a.hash="7b1ef02ffafe375cab4d3317e726a736";let l=a},315376:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(240760);function a({altText:e,autoAltText:t,i18n:i}){let a=e?(0,n.nk)(i._('This contains: {{ altText }}', 'web.altText', 'Alt text input by a human'),{altText:e}).join(""):"",l=t?(0,n.nk)(i._('This may contain: {{ autoAltText }}', 'web.altText', 'Alt text generated by a computer'),{autoAltText:t}).join(""):"";return a||l||""}},744652:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(667294),a=i(545007),l=i(883119),r=i(144326),s=i(115642),o=i(785893);function c({isCloseupButton:e,isDisabled:t,isFavorited:i,onTap:n,size:a}){let c=(0,r.ZP)(),{closeupWithinMasonryEnabled:u,isCloseupRelatedPinsAboveTheFoldEnabled:d}=(0,s.x4)();return e?(0,o.jsx)(l.hU,{accessibilityLabel:c._('Favorite icon', 'pinRep.footer.favoriteIcon', 'Accessible label for favorite icon on Pin'),bgColor:u?"white":void 0,disabled:t,icon:i?"star":"star-outline",iconColor:"darkGray",onClick:n,size:d?"sm":"lg"}):(0,o.jsx)(l.iP,{disabled:t,onTap:n,children:(0,o.jsx)(l.JO,{accessibilityLabel:c._('Favorite icon', 'pinRep.footer.favoriteIcon', 'Accessible label for favorite icon on Pin'),color:"default",icon:i?"star":"star-outline",size:a})})}var u=i(400416);function d({favorited:e,favoriteCount:t,isCloseupButton:i,onFavorite:s,onUnfavorite:d,pinId:_,size:p}){let h=(0,r.ZP)(),g=(0,a.I0)(),[y,v]=(0,n.useState)(!1),[f,m]=(0,n.useState)(e),[x,w]=(0,n.useState)(t??0),b=async()=>{(m(!f),v(!0),f)?(w(x-1),await g(async e=>{await (0,u.Z)({url:`/v3/pins/${_}/favorite/`,method:"DELETE"}),e({type:"PIN_FAVORITE",payload:{id:_,increment:-1,value:!1}})}),d()):(w(x+1),await g(async e=>{await (0,u.Z)({url:`/v3/pins/${_}/favorite/`,method:"POST"}),e({type:"PIN_FAVORITE",payload:{id:_,increment:1,value:!0}})}),s()),v(!1)},k=x<10?x:h._('9+', 'favoriteButton.favoriteCountText', 'Text shown when greater than 9 favorites on Pin');return(0,o.jsxs)(l.kC,{alignItems:"center",gap:{row:1,column:0},children:[void 0!==t&&x>0&&(0,o.jsx)(l.xv,{size:"200",weight:"bold",children:k}),(0,o.jsx)(c,{isCloseupButton:i,isDisabled:y,isFavorited:f,onTap:()=>{b()},size:p})]})}},279341:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(667294),a=i(883119),l=i(848823);let r=e=>`
  ::view-transition-group(${e}) {
    animation-timing-function: cubic-bezier(0.55, 0, 0, 1);
  }
`,s=({type:e,viewTransitionName:t})=>"image"===e?r(t):"video"===e?`
      ${r(t)}
      ::view-transition-old([view-transition-name="${t}"]) {
        display: none;
      }
      ::view-transition-new([view-transition-name="${t}"]) {
        animation: none;
      }
    `:"";var o=i(512541),c=i(785893);let u=({_enableViewTransitions:e,borderStyle:t,children:i,id:r,imageFit:u,suppressViewTransitionTags:d=!1,type:_})=>{let{inViewTransitionsExp:p,viewTransitionName:h}=(0,l.Z)({_enableViewTransitions:e,id:r,type:_}),[g,y]=(0,n.useState)(!1),v=(e||p)&&!!h&&!d&&(e||g),f="image"===_&&["contain","cover"].includes(u||"")?"100%":"inherit";return(0,c.jsxs)(a.xu,{dangerouslySetInlineStyle:{__style:{...t,...v?{viewTransitionName:h,contain:"layout"}:{}}},height:f,onMouseLeave:()=>y(!1),onMouseOver:()=>y(!0),width:f,children:[(0,c.jsx)(o.Z,{unsafeCSS:s({type:_,viewTransitionName:h})}),i]})}},848823:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(667294),a=i(973935),l=i(297728);let r=function({_enableViewTransitions:e=!1,id:t,type:i}){let{checkExperiment:r}=(0,l.F)(),s=r("dweb_view_transitions").anyEnabled;return{executeWithViewTransition:(0,n.useCallback)(t=>{document.startViewTransition&&(e||s)?document.startViewTransition(()=>{(0,a.flushSync)(t)}):t()},[e,s]),inViewTransitionsExp:s,viewTransitionName:i&&t?`pin-${i}-${t}`:""}}},182510:(e,t,i)=>{i.d(t,{Z:()=>n});function n({maxPrice:e,minPrice:t,price:i}){return e&&t?`${t}-${e}`:i}},889870:(e,t,i)=>{i.d(t,{Z:()=>f});var n,a=i(667294);i(167912);var l=i(573706),r=i(400416),s=i(384609),o=i(891985),c=i(947956),u=i(297728),d=i(151958),_=i(785893);let p=void 0!==n?n:n=i(106183),h=e=>(e??"").split(".").pop()??"",g=["png","jpg","jpeg","gif","bmp","tiff","webp","mp4","m4v","quicktime"],y=/\/pin\/\d+/,v=e=>{let t=e?.match(/\/pin\/(\d+)/);return t?t[1]:null};function f({clientTrackingParams:e,children:t,enableDLCollection:i=!1,hovered:n,pinKey:f,slotIndex:m,trafficSource:x,viewType:w}){let{logContextEvent:b}=(0,l.v)(),{checkExperiment:k}=(0,u.F)(),j=k("web_metrics_fix_right_click_clickthrough").anyEnabled,[P,A]=(0,a.useState)(),[S,Z]=(0,a.useState)(),[T,C]=(0,a.useState)(""),E=(0,s.Z)(p,f),{entityId:I,trackedLink:F,link:z,adData:L,dpaCreativeType:D}=E,O=F||z||"",M=L?.ceAltImageSignature,R=(0,a.useCallback)(e=>{if(j){let t=e.target,i=e.target?.src;for(;t&&"A"!==t.tagName;)t=t.parentElement;C(t?t.href:i||"")}A(!0)},[j]),N=(0,c.Z)({hasPin:!!E,hasPinRichMetadata:!!E.richMetadata,hasPinRichMetadataProducts:!!E.richMetadata?.products,hasPinRichMetadataArticle:!!E.richMetadata?.article,hasPinRichMetadataRecipe:!!E.richMetadata?.recipe,hasPinStoryPinData:!!E.storyPinData}),K=(0,d.Z)(E),$=()=>{let t=K();(0,r.Z)({url:"/v3/offsite/",data:{check_only:!1,pin_id:I,url:O,client_tracking_params:e,aux_data:JSON.stringify({clickthrough_type:"rightClick",objectId:I,...m||{},...t})}}).then(n=>{n&&(i?(b({view_type:3,event_type:8948,component:15166,element:15926,object_id_str:I,aux_data:{collection_pin_click_position:0,click_type:"clickthrough"},event_data:{dcoEventData:{clientCreativeType:D,ceAltImageSignature:M}}}),b({view_type:3,event_type:12,component:15166,element:15926,object_id_str:I,aux_data:{collection_pin_click_position:0,clickthrough_type:"rightClick"},event_data:{dcoEventData:{clientCreativeType:D,ceAltImageSignature:M}}}),b({view_type:3,event_type:7762,component:15166,element:15926,object_id_str:I,aux_data:{clickthrough_type:"rightClick"},event_data:{dcoEventData:{clientCreativeType:D,ceAltImageSignature:M}}})):(b({event_type:12,object_id_str:I,view_type:w,view_parameter:N,clientTrackingParams:e,aux_data:{clickthrough_type:"rightClick",...m||{},...t}}),b({event_type:8948,view_type:w,object_id_str:I,view_parameter:N,clientTrackingParams:e,aux_data:{click_type:"clickthrough",closeup_navigation_type:x&&(0,o.sV)(x)?"deeplink":"click",clickthrough_type:"rightClick",...m||{},...t}})))})},B=()=>{let t=K();b({event_type:8948,view_type:w,object_id_str:I,view_parameter:N,clientTrackingParams:e,aux_data:{click_type:"rightClick",closeup_navigation_type:x&&(0,o.sV)(x)?"deeplink":"click",...m||{},...t}})},V=e=>{if(P&&j){let t=y.test(T),i=g.includes(h(T)),n=v(e.target?.activeElement?.attributes?.href?.value||""),a=v(T);i||(t?n===a&&B():$(),A(!1)),window.removeEventListener(S,V,!1)}else P&&(/^\/pin/.test(e.target.activeElement.attributes.href?.value)||($(),A(!1)),window.removeEventListener(S,V,!1))};return(0,a.useEffect)(()=>{void 0!==window?.document?.hidden?Z("visibilitychange"):void 0!==window?.document?.msHidden?Z("msvisibilitychange"):void 0!==window?.document?.webkitHidden&&Z("webkitvisibilitychange")},[]),(0,a.useEffect)(()=>(P&&window&&window.addEventListener(S,V,!1),()=>window.removeEventListener(S,V)),[P,S]),(0,a.useEffect)(()=>(n&&window.addEventListener("contextmenu",R),()=>{window.removeEventListener("contextmenu",R)}),[R,n]),(0,_.jsx)(a.Fragment,{children:t})}},700337:(e,t,i)=>{i.d(t,{N:()=>r,Z:()=>l});var n=i(883119),a=i(785893);function l({children:e,fullWidth:t}){return(0,a.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{pointerEvents:"auto",width:t?"100%":void 0}},"data-test-id":"pointer-events-wrapper",children:e})}function r({children:e,enabled:t}){return t?(0,a.jsx)(l,{children:e}):e}},265780:(e,t,i)=>{i.d(t,{Z:()=>n});function n(e,t){return e.isAuth&&t===e.id}},934397:(e,t,i)=>{i.d(t,{Z:()=>n});function n(e,t){return!!(t.isAuth&&e)}},959064:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(265780),a=i(934397);function l(e,t,i){let l=(0,n.Z)(i,t),r=(0,a.Z)(e,i);return l||r}},619348:(e,t,i)=>{i.d(t,{DW:()=>l,I:()=>a,oo:()=>n,zI:()=>r});let n=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t&&[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]},a=.18,l=(e,t,i)=>.2126*(e/255)**2.2+.7151*(t/255)**2.2+.0721*(i/255)**2.2,r=e=>{let t=e.replace("#",""),i=parseInt(t.substr(0,2),16);return(299*i+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3<155}},261821:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(667294),a=i(883119),l=i(279341),r=i(410150),s=i(227595),o=i(785893);function c(e){(0,n.useContext)(s.Z),(0,r.ZP)();let{alt:t,borderStyle:i,color:c,children:u,crossOrigin:d,decoding:_,elementTiming:p,fetchPriority:h,fit:g,loading:y,naturalHeight:v,naturalWidth:f,onError:m,onLoad:x,id:w,role:b,sizes:k,src:j,srcSet:P,suppressViewTransitionTags:A,_enableViewTransitions:S,_fixCompletedOnLoad:Z}=e;return(0,o.jsx)(l.Z,{_enableViewTransitions:S,borderStyle:i,id:w,imageFit:g,suppressViewTransitionTags:A,type:"image",children:(0,o.jsx)(a.Ee,{_fixCompletedOnLoad:Z,alt:t,color:c,crossOrigin:d,decoding:_,elementTiming:p,fetchPriority:h,fit:g,loading:y,naturalHeight:v,naturalWidth:f,onError:m,onLoad:x,role:b,sizes:k,src:j,srcSet:P,children:u})})}},947956:(e,t,i)=>{i.d(t,{Z:()=>n});function n({hasPin:e,hasPinRichMetadata:t,hasPinRichMetadataProducts:i,hasPinRichMetadataArticle:n,hasPinRichMetadataRecipe:a,hasPinStoryPinData:l}){if(e){if(t)return i?144:n?141:a?145:139;if(l)return 157}return 140}},755349:(e,t,i)=>{function n(e){let t=Object.keys(e);return t.length>0?t.sort((t,i)=>e[i]-e[t]).slice(0,3):null}function a(e){let t=Object.values(e);return t.length>0?t.reduce((e,t)=>e+t,0):0}function l(e,t,i){return!e.isPromoted&&!e.isDownstreamPromotion&&!!(e.videos?.entityId||e.storyPinDataId)&&!t&&(!e.board?.isCollaborative||!e.board.collaboratedByMe)&&!i}i.d(t,{At:()=>n,J6:()=>l,Ud:()=>a})},302749:(e,t,i)=>{i.d(t,{A:()=>r,Z:()=>s});var n=i(667294),a=i(883119),l=i(785893);let r=({fill:e})=>{let t="half"===e?(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(a.xu,{position:"absolute",children:(0,l.jsx)(a.JO,{accessibilityLabel:"",color:"default",icon:"star-half",size:15})}),(0,l.jsx)(a.JO,{accessibilityLabel:"",color:"subtle",icon:"star",size:15})]}):(0,l.jsx)(a.JO,{accessibilityLabel:"",color:"full"===e?"default":"subtle",icon:"star",size:15});return(0,l.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{marginRight:"3px"}},"data-test-id":`rating-star-${e}`,display:"inlineBlock",children:t})};function s({max_rating:e,rating:t,display:i}){var n;let s=[],o=parseFloat(e)||5,c=5*(n=(n=parseFloat(t)||0)<=o?n:o)/o;if(Number.isNaN(c))return null;let u=Math.floor(c),d=c-u;return[...Array(u).keys()].forEach(e=>s.push((0,l.jsx)(r,{fill:"full"},e))),d>=.75?s.push((0,l.jsx)(r,{fill:"full"},s.length)):d>=.25&&s.push((0,l.jsx)(r,{fill:"half"},s.length)),[...Array(5-s.length).keys()].forEach(()=>s.push((0,l.jsx)(r,{fill:"empty"},s.length))),(0,l.jsx)(a.xu,{display:i?"flex":"inlineBlock",position:"relative",width:18*o,children:s})}},585579:(e,t,i)=>{i.d(t,{GZ:()=>n,OE:()=>a,zX:()=>l});let n=246,a=197,l=236},819239:(e,t,i)=>{i.d(t,{Z:()=>n});function n(e,t){let{organicVideosAutoplaying:i,promotedVideosAutoplaying:n}=t,a={...i,...n};return!!a[e]&&!a[e].paused}},843888:(e,t,i)=>{function n(e){let t=e.split("/");return[t[2],t[1]]}function a(e,t){return!e||!e.some(e=>e.pin_type===t)}i.d(t,{E:()=>a,J:()=>n})},53426:(e,t,i)=>{i.d(t,{Z:()=>p});var n=i(883119),a=i(144326),l=i(590338),r=i(240760),s=i(302749),o=i(730212),c=i(895607),u=i(785893);let d=({rating:e,textSize:t,type:i})=>{if("single"===i){let i=parseFloat(e);return Number.isNaN(i)?null:(0,u.jsxs)(n.kC,{alignItems:"center",children:[(0,u.jsx)(s.A,{fill:"full"}),(0,u.jsx)(n.xv,{size:t,children:i.toFixed(1)})]})}return(0,u.jsx)(s.Z,{display:"flex",rating:e})},_=({bracket:e,count:t,countFormat:i,countType:s,marginStart:c,textSize:d,underline:_,unauthPdp:p})=>{let{locale:h}=(0,o.B)(),g=(0,a.ZP)(),y=(0,l.Z)();if(null==t)return null;let v=y(h,t,{shortform:!0,shortform_maximum_fraction_digits:1});if("text"===i){let e="review"===s?g.ngettext('{{ count }} review', '{{ count }} reviews', t, 'webapp.app.www-unified.productStarRatings.RatingCountText', 'count: total reviews count'):g.ngettext('{{ count }} rating', '{{ count }} ratings', t, 'webapp.app.www-unified.productStarRatings.RatingCountText', 'count: total ratings count');v=(0,r.nk)(e,{count:t}).join("")}return e&&(v=`(${v})`),(0,u.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{borderBottom:_?"1px solid gray":"none"}},marginStart:c,children:(0,u.jsx)(n.xv,{color:_?"subtle":"default",size:d,underline:_,children:(0,u.jsx)(n.xu,{"data-test-id":"ratings-count-text",display:"inlineBlock",children:p?`(${v})`:v})})})};function p({bracket:e,count:t,countFormat:i,countType:a,rating:l,textSize:r,underline:s,unauthPdp:o}){return(0,c.Z)({count:t,rating:l})?(0,u.jsxs)(n.kC,{alignItems:"center",justifyContent:"start",children:[(0,u.jsx)(d,{rating:l,textSize:r,type:"multiple"}),(0,u.jsx)(_,{bracket:e,count:t,countFormat:i,countType:a,textSize:r,unauthPdp:o,underline:s})]}):null}},895607:(e,t,i)=>{i.d(t,{Z:()=>n});function n({count:e,rating:t}){return!!(t&&"None"!==t&&Number.isFinite(e))}},127566:(e,t,i)=>{i.d(t,{Z:()=>n});function n(e,t){return e&&e.includes("~0")&&(e=e.replace("~0","")),e||`${t||""}~0`}},227595:(e,t,i)=>{i.d(t,{Z:()=>n});let n=(0,i(667294).createContext)(void 0)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/43514-a027bde9e2088ae9.mjs.map