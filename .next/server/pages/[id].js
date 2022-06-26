"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 4556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);



function Comment({ comment  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-3 flex cursor-pointer border-b border-gray-700",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: comment?.userImg,
                alt: "",
                className: "h-11 w-11 rounded-full mr-4"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col space-y-2 w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-[#6e767d]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "inline-block group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline",
                                                children: comment?.username
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "ml-1.5 text-sm sm:text-[15px]",
                                                children: [
                                                    "@",
                                                    comment?.tag,
                                                    " "
                                                ]
                                            })
                                        ]
                                    }),
                                    " ",
                                    "\xb7",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hover:underline text-sm sm:text-[15px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            fromNow: true,
                                            children: comment?.timestamp?.toDate()
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[#d9d9d9] mt-0.5 max-w-lg overflow-scroll text-[15px] sm:text-base",
                                        children: comment?.comment
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "icon group flex-shrink-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.DotsHorizontalIcon, {
                                    className: "h-5 text-[#6e767d] group-hover:text-[#1d9bf0]"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-[#6e767d] flex justify-between w-10/12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "icon group",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ChatIcon, {
                                    className: "h-5 group-hover:text-[#1d9bf0]"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-1 group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon group-hover:bg-pink-600/10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.HeartIcon, {
                                            className: "h-5 group-hover:text-pink-600"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "group-hover:text-pink-600 text-sm"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "icon group",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ShareIcon, {
                                    className: "h-5 group-hover:text-[#1d9bf0]"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "icon group",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ChartBarIcon, {
                                    className: "h-5 group-hover:text-[#1d9bf0]"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);


/***/ }),

/***/ 1577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1401);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2387);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7274);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6193);
/* harmony import */ var _components_Widgets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6690);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3517);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6228);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4556);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _components_Modal__WEBPACK_IMPORTED_MODULE_7__, _components_Post__WEBPACK_IMPORTED_MODULE_10__, _firebase__WEBPACK_IMPORTED_MODULE_11__]);
([_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _components_Modal__WEBPACK_IMPORTED_MODULE_7__, _components_Post__WEBPACK_IMPORTED_MODULE_10__, _firebase__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function PostPage({ trendingResults , followResults , providers  }) {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    const [isOpen, setIsOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_6__/* .modalState */ .e);
    const { 0: post , 1: setPost  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { id  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>(0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_11__.db, "posts", id), (snapshot)=>{
            setPost(snapshot.data());
        })
    , [
        _firebase__WEBPACK_IMPORTED_MODULE_11__.db
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>(0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_11__.db, "posts", id, "comments"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)("timestamp", "desc")), (snapshot)=>setComments(snapshot.docs)
        )
    , [
        _firebase__WEBPACK_IMPORTED_MODULE_11__.db,
        id
    ]);
    if (!session) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Login__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        providers: providers
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_14___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            post?.username,
                            ' on Twitter: "',
                            post?.text,
                            '"'
                        ]
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0",
                                        onClick: ()=>router.push("/")
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.ArrowLeftIcon, {
                                            className: "h-5 text-white"
                                        })
                                    }),
                                    "Tweet"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                id: id,
                                post: post,
                                postPage: true
                            }),
                            comments.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pb-72",
                                children: comments.map((comment)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Comment__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        id: comment.id,
                                        comment: comment.data()
                                    }, comment.id)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Widgets__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        trendingResults: trendingResults,
                        followResults: followResults
                    }),
                    isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);
async function getServerSideProps(context) {
    const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then((res)=>res.json()
    );
    const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then((res)=>res.json()
    );
    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getProviders)();
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);
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

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [686,675,739], () => (__webpack_exec__(1577)));
module.exports = __webpack_exports__;

})();