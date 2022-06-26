"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1401);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6228);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3517);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Input__WEBPACK_IMPORTED_MODULE_3__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _firebase__WEBPACK_IMPORTED_MODULE_5__, _Post__WEBPACK_IMPORTED_MODULE_6__]);
([_Input__WEBPACK_IMPORTED_MODULE_3__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _firebase__WEBPACK_IMPORTED_MODULE_5__, _Post__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Feed() {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();
    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>(0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, "posts"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)("timestamp", "desc")), (snapshot)=>{
            setPosts(snapshot.docs);
        })
    , [
        _firebase__WEBPACK_IMPORTED_MODULE_5__.db
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-lg sm:text-xl font-bold",
                        children: "Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.SparklesIcon, {
                            className: "h-5 text-white"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pb-72",
                children: posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Post__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        id: post.id,
                        post: post.data()
                    }, post.id)
                )
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6228);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1401);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5421);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emoji_mart_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _firebase_storage__WEBPACK_IMPORTED_MODULE_5__]);
([_firebase__WEBPACK_IMPORTED_MODULE_3__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _firebase_storage__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Picker(props = {}) {
    const ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8056)).then((EmojiMart)=>{
            new EmojiMart.Picker({
                ...props,
                data: _emoji_mart_data__WEBPACK_IMPORTED_MODULE_8__,
                ref: ref1
            });
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref1
    });
}
function Input() {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: selectedFile , 1: setSelectedFile  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const filePickerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: showEmojis , 1: setShowEmojis  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const sendPost = async ()=>{
        if (loading) return;
        setLoading(true);
        const docRef = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "posts"), {
            id: session.user.uid,
            username: session.user.name,
            userImg: session.user.image,
            tag: session.user.tag,
            text: input,
            timestamp: (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
        });
        const imageRef = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .storage */ .t, `posts/${docRef.id}/image`);
        if (selectedFile) {
            await (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadString)(imageRef, selectedFile, "data_url").then(async ()=>{
                const downloadURL = await (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(imageRef);
                await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "posts", docRef.id), {
                    image: downloadURL
                });
            });
        }
        setLoading(false);
        setInput("");
        setSelectedFile(null);
        setShowEmojis(false);
    };
    const addImageToPost = (e)=>{
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent)=>{
            setSelectedFile(readerEvent.target.result);
        };
    };
    const addEmoji = (e)=>{
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el)=>codesArray.push("0x" + el)
        );
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${loading && "opacity-60"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: session.user.image,
                alt: "",
                className: "h-11 w-11 rounded-full cursor-pointer",
                onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "divide-y divide-gray-700 w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${selectedFile && "pb-7"} ${input && "space-y-2.5"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                value: input,
                                onChange: (e)=>setInput(e.target.value)
                                ,
                                placeholder: "What's happening?",
                                rows: "2",
                                className: "bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                            }),
                            selectedFile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer",
                                        onClick: ()=>setSelectedFile(null)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.XIcon, {
                                            className: "text-white h-5"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: selectedFile,
                                        alt: "",
                                        className: "rounded-2xl max-h-80 object-contain"
                                    })
                                ]
                            })
                        ]
                    }),
                    !loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between pt-2.5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "icon",
                                        onClick: ()=>filePickerRef.current.click()
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.PhotographIcon, {
                                                className: "text-[#1d9bf0] h-[22px]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "file",
                                                ref: filePickerRef,
                                                hidden: true,
                                                onChange: addImageToPost
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon rotate-90",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ChartBarIcon, {
                                            className: "text-[#1d9bf0] h-[22px]"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        onClick: ()=>setShowEmojis(!showEmojis)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.EmojiHappyIcon, {
                                            className: "text-[#1d9bf0] h-[22px]"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.CalendarIcon, {
                                            className: "text-[#1d9bf0] h-[22px]"
                                        })
                                    }),
                                    showEmojis && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Picker, {
                                        onSelect: addEmoji,
                                        style: {
                                            position: "absolute",
                                            marginTop: "465px",
                                            marginLeft: -40,
                                            maxWidth: "320px",
                                            borderRadius: "20px"
                                        },
                                        theme: "dark"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default",
                                disabled: !input && !selectedFile,
                                onClick: sendPost,
                                children: "Tweet"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7506);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6193);
/* harmony import */ var _components_Widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6690);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7969);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7274);
/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2387);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Feed__WEBPACK_IMPORTED_MODULE_2__, _components_Modal__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Feed__WEBPACK_IMPORTED_MODULE_2__, _components_Modal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Home({ trendingResults , followResults , providers  }) {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const [isOpen, setIsOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_9__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__/* .modalState */ .e);
    if (!session) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Login__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        providers: providers
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Home / Twitter"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "bg-black min-h-screen flex max-w-[1500px] mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Feed__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Widgets__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        trendingResults: trendingResults,
                        followResults: followResults
                    }),
                    isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then((res)=>res.json()
    );
    const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then((res)=>res.json()
    );
    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.getProviders)();
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.getSession)(context);
    return {
        props: {
            trendingResults,
            followResults,
            providers,
            session
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-moment");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 1401:
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

/***/ }),

/***/ 5421:
/***/ ((module) => {

module.exports = import("@firebase/storage");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 8056:
/***/ ((module) => {

module.exports = import("emoji-mart");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,29,739], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();