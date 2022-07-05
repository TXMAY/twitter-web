"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[739],{2387:function(e,t,s){s.d(t,{Z:function(){return a},e:function(){return r}});var n=s(4480),r=(0,n.cn)({key:"modalState",default:!1}),a=(0,n.cn)({key:"postIdState",default:""})},7969:function(e,t,s){var n=s(5893),r=s(3299),a=s(5675),l=s.n(a);t.Z=function(e){var t=e.providers;return(0,n.jsxs)("div",{className:"flex flex-col items-center space-y-20 pt-48",children:[(0,n.jsx)(l(),{src:"https://rb.gy/ogau5a",width:150,height:150,objectFit:"contain"}),(0,n.jsx)("div",{children:Object.values(t).map((function(e){return(0,n.jsx)("div",{children:(0,n.jsxs)("button",{className:"relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group",onClick:function(){return(0,r.signIn)(e.id,{callbackUrl:"/"})},children:[(0,n.jsx)("span",{className:"w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"}),(0,n.jsxs)("span",{className:"relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white",children:["Sign in with ",e.name]})]})},e.name)}))})]})}},7274:function(e,t,s){var n=s(4051),r=s.n(n),a=s(5893),l=s(4480),i=s(2387),o=s(3587),c=s(1),d=s(7294),u=s(19),x=s(6228),m=s(3299),h=s(5506),f=s(4634),p=s(5601),v=s(9050),b=s(2450),g=s(1163),j=s(4803),y=s.n(j);function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}function w(e,t,s,n,r,a,l){try{var i=e[a](l),o=i.value}catch(c){return void s(c)}i.done?t(o):Promise.resolve(o).then(n,r)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var n,r,a=[],l=!0,i=!1;try{for(s=s.call(e);!(l=(n=s.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(o){i=!0,r=o}finally{try{l||null==s.return||s.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(){var e,t=(0,m.useSession)().data,s=k((0,l.FV)(i.e),2),n=s[0],j=s[1],N=k((0,l.FV)(i.Z),2),Z=N[0],I=(N[1],(0,d.useState)()),S=I[0],C=I[1],F=(0,d.useState)(""),A=F[0],E=F[1],P=(0,g.useRouter)();(0,d.useEffect)((function(){return(0,u.cf)((0,u.JU)(x.db,"posts",Z),(function(e){C(e.data())}))}),[x.db]);var T=function(){var e,s=(e=r().mark((function e(s){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,(0,u.ET)((0,u.hJ)(x.db,"posts",Z,"comments"),{comment:A,username:t.user.name,tag:t.user.tag,userImg:t.user.image,timestamp:(0,u.Bt)()});case 3:j(!1),E(""),P.push("/".concat(Z));case 6:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(n,r){var a=e.apply(t,s);function l(e){w(a,n,r,l,i,"next",e)}function i(e){w(a,n,r,l,i,"throw",e)}l(void 0)}))});return function(e){return s.apply(this,arguments)}}();return(0,a.jsx)(o.u.Root,{show:n,as:d.Fragment,children:(0,a.jsx)(c.V,{as:"div",className:"fixed z-50 inset-0 pt-8",onClose:j,children:(0,a.jsxs)("div",{className:"flex items-start justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,a.jsx)(o.u.Child,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)(c.V.Overlay,{className:"fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity"})}),(0,a.jsx)(o.u.Child,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsxs)("div",{className:"inline-block align-bottom bg-black rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full",children:[(0,a.jsx)("div",{className:"flex items-center px-1.5 py-2 border-b border-gray-700",children:(0,a.jsx)("div",{className:"hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0",onClick:function(){return j(!1)},children:(0,a.jsx)(h.Z,{className:"h-[22px] text-white"})})}),(0,a.jsx)("div",{className:"flex px-4 pt-5 pb-2.5 sm:px-6",children:(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"text-[#6e767d] flex gap-x-3 relative",children:[(0,a.jsx)("span",{className:"w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600"}),(0,a.jsx)("img",{src:null===S||void 0===S?void 0:S.userImg,alt:"",className:"h-11 w-11 rounded-full"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"inline-block group",children:[(0,a.jsx)("h4",{className:"font-bold text-[#d9d9d9] inline-block text-[15px] sm:text-base",children:null===S||void 0===S?void 0:S.username}),(0,a.jsxs)("span",{className:"ml-1.5 text-sm sm:text-[15px]",children:["@",null===S||void 0===S?void 0:S.tag," "]})]})," ","\xb7"," ",(0,a.jsx)("span",{className:"hover:underline text-sm sm:text-[15px]",children:(0,a.jsx)(y(),{fromNow:!0,children:null===S||void 0===S||null===(e=S.timestamp)||void 0===e?void 0:e.toDate()})}),(0,a.jsx)("p",{className:"text-[#d9d9d9] text-[15px] sm:text-base",children:null===S||void 0===S?void 0:S.text})]})]}),(0,a.jsxs)("div",{className:"mt-7 flex space-x-3 w-full",children:[(0,a.jsx)("img",{src:t.user.image,alt:"",className:"h-11 w-11 rounded-full"}),(0,a.jsxs)("div",{className:"flex-grow mt-2",children:[(0,a.jsx)("textarea",{value:A,onChange:function(e){return E(e.target.value)},placeholder:"Tweet your reply",rows:"2",className:"bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[80px]"}),(0,a.jsxs)("div",{className:"flex items-center justify-between pt-2.5",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)(f.Z,{className:"text-[#1d9bf0] h-[22px]"})}),(0,a.jsx)("div",{className:"icon rotate-90",children:(0,a.jsx)(p.Z,{className:"text-[#1d9bf0] h-[22px]"})}),(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)(v.Z,{className:"text-[#1d9bf0] h-[22px]"})}),(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)(b.Z,{className:"text-[#1d9bf0] h-[22px]"})})]}),(0,a.jsx)("button",{className:"bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default",type:"submit",onClick:T,disabled:!A.trim(),children:"Reply"})]})]})]})]})})]})})]})})})}},3517:function(e,t,s){var n=s(4051),r=s.n(n),a=s(5893),l=s(19),i=s(1848),o=s(6293),c=s(8945),d=s(8364),u=s(2350),x=s(839),m=s(5601),h=s(8113),f=s(3299),p=s(1163),v=s(7294),b=s(4803),g=s.n(b),j=s(4480),y=s(2387),N=s(6228);function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}function k(e,t,s,n,r,a,l){try{var i=e[a](l),o=i.value}catch(c){return void s(c)}i.done?t(o):Promise.resolve(o).then(n,r)}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var n,r,a=[],l=!0,i=!1;try{for(s=s.call(e);!(l=(n=s.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(o){i=!0,r=o}finally{try{l||null==s.return||s.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e){var t,s=e.id,n=e.post,b=e.postPage,w=(0,f.useSession)().data,I=Z((0,j.FV)(y.e),2),S=(I[0],I[1]),C=Z((0,j.FV)(y.Z),2),F=(C[0],C[1]),A=(0,v.useState)([]),E=A[0],P=A[1],T=(0,v.useState)([]),J=T[0],O=T[1],U=(0,v.useState)(!1),M=U[0],R=U[1],V=(0,p.useRouter)();(0,v.useEffect)((function(){return(0,l.cf)((0,l.IO)((0,l.hJ)(N.db,"posts",s,"comments"),(0,l.Xo)("timestamp","desc")),(function(e){return P(e.docs)}))}),[N.db,s]),(0,v.useEffect)((function(){return(0,l.cf)((0,l.hJ)(N.db,"posts",s,"likes"),(function(e){return O(e.docs)}))}),[N.db,s]),(0,v.useEffect)((function(){return R(-1!==J.findIndex((function(e){var t;return e.id===(null===w||void 0===w||null===(t=w.user)||void 0===t?void 0:t.uid)})))}),[J]);var D=function(){var e,t=(e=r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M){e.next=5;break}return e.next=3,(0,l.oe)((0,l.JU)(N.db,"posts",s,"likes",w.user.uid));case 3:e.next=7;break;case 5:return e.next=7,(0,l.pl)((0,l.JU)(N.db,"posts",s,"likes",w.user.uid),{username:w.user.name});case 7:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(n,r){var a=e.apply(t,s);function l(e){k(a,n,r,l,i,"next",e)}function i(e){k(a,n,r,l,i,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:"p-3 flex cursor-pointer border-b border-gray-700",onClick:function(){return V.push("/".concat(s))},children:[!b&&(0,a.jsx)("img",{src:null===n||void 0===n?void 0:n.userImg,alt:"",className:"h-11 w-11 rounded-full mr-4"}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2 w-full",children:[(0,a.jsxs)("div",{className:"flex ".concat(!b&&"justify-between"),children:[b&&(0,a.jsx)("img",{src:null===n||void 0===n?void 0:n.userImg,alt:"Profile Pic",className:"h-11 w-11 rounded-full mr-4"}),(0,a.jsxs)("div",{className:"text-[#6e767d]",children:[(0,a.jsxs)("div",{className:"inline-block group",children:[(0,a.jsx)("h4",{className:"font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ".concat(!b&&"inline-block"),children:null===n||void 0===n?void 0:n.username}),(0,a.jsxs)("span",{className:"text-sm sm:text-[15px] ".concat(!b&&"ml-1.5"),children:["@",null===n||void 0===n?void 0:n.tag]})]}),"\xb7"," ",(0,a.jsx)("span",{className:"hover:underline text-sm sm:text-[15px]",children:(0,a.jsx)(g(),{fromNow:!0,children:null===n||void 0===n||null===(t=n.timestamp)||void 0===t?void 0:t.toDate()})}),!b&&(0,a.jsx)("p",{className:"text-[#d9d9d9] text-[15px] sm:text-base mt-0.5",children:null===n||void 0===n?void 0:n.text})]}),(0,a.jsx)("div",{className:"icon group flex-shrink-0 ml-auto",children:(0,a.jsx)(i.Z,{className:"h-5 text-[#6e767d] group-hover:text-[#1d9bf0]"})})]}),b&&(0,a.jsx)("p",{className:"text-[#d9d9d9] mt-0.5 text-xl",children:null===n||void 0===n?void 0:n.text}),(0,a.jsx)("img",{src:null===n||void 0===n?void 0:n.image,alt:"",className:"rounded-2xl max-h-[700px] object-cover mr-2"}),(0,a.jsxs)("div",{className:"text-[#6e767d] flex justify-between w-10/12 ".concat(b&&"mx-auto"),children:[(0,a.jsxs)("div",{className:"flex items-center space-x-1 group",onClick:function(e){e.stopPropagation(),F(s),S(!0)},children:[(0,a.jsx)("div",{className:"icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10",children:(0,a.jsx)(o.Z,{className:"h-5 group-hover:text-[#1d9bf0]"})}),E.length>0&&(0,a.jsx)("span",{className:"group-hover:text-[#1d9bf0] text-sm",children:E.length})]}),w.user.uid===(null===n||void 0===n?void 0:n.id)?(0,a.jsx)("div",{className:"flex items-center space-x-1 group",onClick:function(e){e.stopPropagation(),(0,l.oe)((0,l.JU)(N.db,"posts",s)),V.push("/")},children:(0,a.jsx)("div",{className:"icon group-hover:bg-red-600/10",children:(0,a.jsx)(c.Z,{className:"h-5 group-hover:text-red-600"})})}):(0,a.jsx)("div",{className:"flex items-center space-x-1 group",children:(0,a.jsx)("div",{className:"icon group-hover:bg-green-500/10",children:(0,a.jsx)(d.Z,{className:"h-5 group-hover:text-green-500"})})}),(0,a.jsxs)("div",{className:"flex items-center space-x-1 group",onClick:function(e){e.stopPropagation(),D()},children:[(0,a.jsx)("div",{className:"icon group-hover:bg-pink-600/10",children:M?(0,a.jsx)(h.Z,{className:"h-5 text-pink-600"}):(0,a.jsx)(u.Z,{className:"h-5 group-hover:text-pink-600"})}),J.length>0&&(0,a.jsx)("span",{className:"group-hover:text-pink-600 text-sm ".concat(M&&"text-pink-600"),children:J.length})]}),(0,a.jsx)("div",{className:"icon group",children:(0,a.jsx)(x.Z,{className:"h-5 group-hover:text-[#1d9bf0]"})}),(0,a.jsx)("div",{className:"icon group",children:(0,a.jsx)(m.Z,{className:"h-5 group-hover:text-[#1d9bf0]"})})]})]})]})}},6193:function(e,t,s){s.d(t,{Z:function(){return b}});var n=s(5893),r=s(5675),a=s.n(r),l=s(5575),i=s(6233),o=s(6418),c=s(8969),d=s(1855),u=s(9753),x=s(5301),m=s(4695),h=s(1848),f=s(1163);var p=function(e){var t=e.Icon,s=e.text,r=e.active,a=(0,f.useRouter)();return(0,n.jsxs)("div",{className:"text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ".concat(r&&"font-bold"),onClick:function(){return r&&a.push("/")},children:[(0,n.jsx)(t,{className:"h-7"}),(0,n.jsx)("span",{className:"hidden xl:inline",children:s})]})},v=s(3299);var b=function(){var e=(0,v.useSession)().data;return(0,n.jsxs)("div",{className:"hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full",children:[(0,n.jsx)("div",{className:"flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24",children:(0,n.jsx)(a(),{src:"https://rb.gy/ogau5a",width:30,height:30})}),(0,n.jsxs)("div",{className:"space-y-2.5 mt-4 mb-2.5 xl:ml-24",children:[(0,n.jsx)(p,{text:"Home",Icon:l.Z,active:!0}),(0,n.jsx)(p,{text:"Explore",Icon:i.Z}),(0,n.jsx)(p,{text:"Notifications",Icon:o.Z}),(0,n.jsx)(p,{text:"Messages",Icon:c.Z}),(0,n.jsx)(p,{text:"Bookmarks",Icon:d.Z}),(0,n.jsx)(p,{text:"Lists",Icon:u.Z}),(0,n.jsx)(p,{text:"Profile",Icon:x.Z}),(0,n.jsx)(p,{text:"More",Icon:m.Z})]}),(0,n.jsx)("button",{className:"hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]",children:"Tweet"}),(0,n.jsxs)("div",{className:"text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5",onClick:v.signOut,children:[(0,n.jsx)("img",{src:e.user.image,alt:"",className:"h-10 w-10 rounded-full xl:mr-2.5"}),(0,n.jsxs)("div",{className:"hidden xl:inline leading-5",children:[(0,n.jsx)("h4",{className:"font-bold",children:e.user.name}),(0,n.jsxs)("p",{className:"text-[#6e767d]",children:["@",e.user.tag]})]}),(0,n.jsx)(h.Z,{className:"h-5 hidden xl:inline ml-10"})]})]})}},6690:function(e,t,s){s.d(t,{Z:function(){return c}});var n=s(5893),r=s(3737),a=s(1848),l=s(5675),i=s.n(l);var o=function(e){var t=e.result;return(0,n.jsxs)("div",{className:"hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between",children:[(0,n.jsxs)("div",{className:"space-y-0.5",children:[(0,n.jsx)("p",{className:"text-[#6e767d] text-xs font-medium",children:t.heading}),(0,n.jsx)("h6",{className:"font-bold max-w-[250px] text-sm",children:t.discription}),(0,n.jsxs)("p",{className:"text-[#6e767d] text-xs font-medium max-w-[250px]",children:["Trending with"," ",t.tags.map((function(e,t){return(0,n.jsx)("span",{className:"tag",children:e},t)}))]})]}),t.img?(0,n.jsx)(i(),{src:t.img,width:70,height:70,objectFit:"cover",className:"rounded-2xl"}):(0,n.jsx)("div",{className:"icon group",children:(0,n.jsx)(a.Z,{className:"h-5 text-[#6e767d] group-hover:text-[#1d9bf0]"})})]})};var c=function(e){var t=e.trendingResults,s=e.followResults;return(0,n.jsxs)("div",{className:"hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5",children:[(0,n.jsx)("div",{className:"sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12",children:(0,n.jsxs)("div",{className:"flex items-center bg-[#202327] p-3 rounded-full relative",children:[(0,n.jsx)(r.Z,{className:"text-gray-500 h-5 z-50"}),(0,n.jsx)("input",{type:"text",className:"bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg",placeholder:"Search Twitter"})]})}),(0,n.jsxs)("div",{className:"text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12",children:[(0,n.jsx)("h4",{className:"font-bold text-xl px-4",children:"What's happening"}),t.map((function(e,t){return(0,n.jsx)(o,{result:e},t)})),(0,n.jsx)("button",{className:"hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light",children:"Show more"})]}),(0,n.jsxs)("div",{className:"text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12",children:[(0,n.jsx)("h4",{className:"font-bold text-xl px-4",children:"Who to follow"}),s.map((function(e,t){return(0,n.jsxs)("div",{className:"hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center",children:[(0,n.jsx)(i(),{src:e.userImg,width:50,height:50,objectFit:"cover",className:"rounded-full"}),(0,n.jsxs)("div",{className:"ml-4 leading-5 group",children:[(0,n.jsx)("h4",{className:"font-bold group-hover:underline",children:e.username}),(0,n.jsx)("h5",{className:"text-gray-500 text-[15px]",children:e.tag})]}),(0,n.jsx)("button",{className:"ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5",children:"Follow"})]},t)})),(0,n.jsx)("button",{className:"hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light",children:"Show more"})]})]})}},6228:function(e,t,s){s.d(t,{db:function(){return l},t:function(){return i}});var n=s(5503),r=s(6257),a=s(3404),l=((0,n.C6)().length?(0,n.Mq)():(0,n.ZF)({apiKey:"AIzaSyDoa2PMEj5FxED8_IBwU0Vi-ogMjoilJbY",authDomain:"twitter-clone-yt-b114a.firebaseapp.com",projectId:"twitter-clone-yt-b114a",storageBucket:"twitter-clone-yt-b114a.appspot.com",messagingSenderId:"1087365991177",appId:"1:1087365991177:web:66d04f3a9583cbcf8a21d8"}),(0,r.ad)()),i=(0,a.cF)()}}]);