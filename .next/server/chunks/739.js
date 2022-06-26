"use strict";
exports.id = 739;
exports.ids = [739];
exports.modules = {

/***/ 2387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ postIdState),
/* harmony export */   "e": () => (/* binding */ modalState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const modalState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "modalState",
    default: false
});
const postIdState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "postIdState",
    default: ""
});


/***/ }),

/***/ 7969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



function Login({ providers  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center space-y-20 pt-48",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: "https://rb.gy/ogau5a",
                width: 150,
                height: 150,
                objectFit: "contain"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: Object.values(providers).map((provider)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group",
                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {
                                    callbackUrl: "/"
                                })
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white",
                                    children: [
                                        "Sign in with ",
                                        provider.name
                                    ]
                                })
                            ]
                        })
                    }, provider.name)
                )
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 7274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2387);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1401);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6228);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Modal() {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();
    const [isOpen, setIsOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_2__/* .modalState */ .e);
    const [postId, setPostId] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_2__/* .postIdState */ .Z);
    const { 0: post , 1: setPost  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: comment , 1: setComment  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>(0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "posts", postId), (snapshot)=>{
            setPost(snapshot.data());
        })
    , [
        _firebase__WEBPACK_IMPORTED_MODULE_6__.db
    ]);
    const sendComment = async (e)=>{
        e.preventDefault();
        await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "posts", postId, "comments"), {
            comment: comment,
            username: session.user.name,
            tag: session.user.tag,
            userImg: session.user.image,
            timestamp: (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.serverTimestamp)()
        });
        setIsOpen(false);
        setComment("");
        router.push(`/${postId}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Root, {
        show: isOpen,
        as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
            as: "div",
            className: "fixed z-50 inset-0 pt-8",
            onClose: setIsOpen,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-start justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Overlay, {
                            className: "fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        enterTo: "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "inline-block align-bottom bg-black rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center px-1.5 py-2 border-b border-gray-700",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0",
                                        onClick: ()=>setIsOpen(false)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.XIcon, {
                                            className: "h-[22px] text-white"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex px-4 pt-5 pb-2.5 sm:px-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-[#6e767d] flex gap-x-3 relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: post?.userImg,
                                                        alt: "",
                                                        className: "h-11 w-11 rounded-full"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "inline-block group",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        className: "font-bold text-[#d9d9d9] inline-block text-[15px] sm:text-base",
                                                                        children: post?.username
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "ml-1.5 text-sm sm:text-[15px]",
                                                                        children: [
                                                                            "@",
                                                                            post?.tag,
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
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                    fromNow: true,
                                                                    children: post?.timestamp?.toDate()
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-[#d9d9d9] text-[15px] sm:text-base",
                                                                children: post?.text
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-7 flex space-x-3 w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: session.user.image,
                                                        alt: "",
                                                        className: "h-11 w-11 rounded-full"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex-grow mt-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                value: comment,
                                                                onChange: (e)=>setComment(e.target.value)
                                                                ,
                                                                placeholder: "Tweet your reply",
                                                                rows: "2",
                                                                className: "bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[80px]"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center justify-between pt-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "icon",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.PhotographIcon, {
                                                                                    className: "text-[#1d9bf0] h-[22px]"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "icon rotate-90",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ChartBarIcon, {
                                                                                    className: "text-[#1d9bf0] h-[22px]"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "icon",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.EmojiHappyIcon, {
                                                                                    className: "text-[#1d9bf0] h-[22px]"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "icon",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.CalendarIcon, {
                                                                                    className: "text-[#1d9bf0] h-[22px]"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        className: "bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default",
                                                                        type: "submit",
                                                                        onClick: sendComment,
                                                                        disabled: !comment.trim(),
                                                                        children: "Reply"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1401);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2387);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6228);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_10__]);
([_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Post({ id , post , postPage  }) {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    const [isOpen, setIsOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_9__/* .modalState */ .e);
    const [postId, setPostId] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_9__/* .postIdState */ .Z);
    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const { 0: likes , 1: setLikes  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const { 0: liked , 1: setLiked  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>(0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_10__.db, "posts", id, "comments"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)("timestamp", "desc")), (snapshot)=>setComments(snapshot.docs)
        )
    , [
        _firebase__WEBPACK_IMPORTED_MODULE_10__.db,
        id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>(0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_10__.db, "posts", id, "likes"), (snapshot)=>setLikes(snapshot.docs)
        )
    , [
        _firebase__WEBPACK_IMPORTED_MODULE_10__.db,
        id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>setLiked(likes.findIndex((like)=>like.id === session?.user?.uid
        ) !== -1)
    , [
        likes
    ]);
    const likePost = async ()=>{
        if (liked) {
            await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_10__.db, "posts", id, "likes", session.user.uid));
        } else {
            await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_10__.db, "posts", id, "likes", session.user.uid), {
                username: session.user.name
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-3 flex cursor-pointer border-b border-gray-700",
        onClick: ()=>router.push(`/${id}`)
        ,
        children: [
            !postPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: post?.userImg,
                alt: "",
                className: "h-11 w-11 rounded-full mr-4"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col space-y-2 w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `flex ${!postPage && "justify-between"}`,
                        children: [
                            postPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: post?.userImg,
                                alt: "Profile Pic",
                                className: "h-11 w-11 rounded-full mr-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-[#6e767d]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "inline-block group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: `font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${!postPage && "inline-block"}`,
                                                children: post?.username
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: `text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`,
                                                children: [
                                                    "@",
                                                    post?.tag
                                                ]
                                            })
                                        ]
                                    }),
                                    "\xb7",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hover:underline text-sm sm:text-[15px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            fromNow: true,
                                            children: post?.timestamp?.toDate()
                                        })
                                    }),
                                    !postPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[#d9d9d9] text-[15px] sm:text-base mt-0.5",
                                        children: post?.text
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "icon group flex-shrink-0 ml-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.DotsHorizontalIcon, {
                                    className: "h-5 text-[#6e767d] group-hover:text-[#1d9bf0]"
                                })
                            })
                        ]
                    }),
                    postPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[#d9d9d9] mt-0.5 text-xl",
                        children: post?.text
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: post?.image,
                        alt: "",
                        className: "rounded-2xl max-h-[700px] object-cover mr-2"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `text-[#6e767d] flex justify-between w-10/12 ${postPage && "mx-auto"}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-1 group",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setPostId(id);
                                    setIsOpen(true);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ChatIcon, {
                                            className: "h-5 group-hover:text-[#1d9bf0]"
                                        })
                                    }),
                                    comments.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "group-hover:text-[#1d9bf0] text-sm",
                                        children: comments.length
                                    })
                                ]
                            }),
                            session.user.uid === post?.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center space-x-1 group",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_10__.db, "posts", id));
                                    router.push("/");
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon group-hover:bg-red-600/10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.TrashIcon, {
                                        className: "h-5 group-hover:text-red-600"
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center space-x-1 group",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon group-hover:bg-green-500/10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SwitchHorizontalIcon, {
                                        className: "h-5 group-hover:text-green-500"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-1 group",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    likePost();
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon group-hover:bg-pink-600/10",
                                        children: liked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.HeartIcon, {
                                            className: "h-5 text-pink-600"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.HeartIcon, {
                                            className: "h-5 group-hover:text-pink-600"
                                        })
                                    }),
                                    likes.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `group-hover:text-pink-600 text-sm ${liked && "text-pink-600"}`,
                                        children: likes.length
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "icon group",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ShareIcon, {
                                    className: "h-5 group-hover:text-[#1d9bf0]"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "icon group",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ChartBarIcon, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/SidebarLink.js


function SidebarLink({ Icon , text , active  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`,
        onClick: ()=>active && router.push("/")
        ,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                className: "h-7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "hidden xl:inline",
                children: text
            })
        ]
    });
}
/* harmony default export */ const components_SidebarLink = (SidebarLink);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./components/Sidebar.js







function Sidebar() {
    const { data: session  } = (0,react_.useSession)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "https://rb.gy/ogau5a",
                    width: 30,
                    height: 30
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-2.5 mt-4 mb-2.5 xl:ml-24",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Home",
                        Icon: solid_.HomeIcon,
                        active: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Explore",
                        Icon: outline_.HashtagIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Notifications",
                        Icon: outline_.BellIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Messages",
                        Icon: outline_.InboxIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Bookmarks",
                        Icon: outline_.BookmarkIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Lists",
                        Icon: outline_.ClipboardListIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Profile",
                        Icon: outline_.UserIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "More",
                        Icon: outline_.DotsCircleHorizontalIcon
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]",
                children: "Tweet"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5",
                onClick: react_.signOut,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: session.user.image,
                        alt: "",
                        className: "h-10 w-10 rounded-full xl:mr-2.5"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden xl:inline leading-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "font-bold",
                                children: session.user.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-[#6e767d]",
                                children: [
                                    "@",
                                    session.user.tag
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(outline_.DotsHorizontalIcon, {
                        className: "h-5 hidden xl:inline ml-10"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Sidebar = (Sidebar);


/***/ }),

/***/ 6690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Widgets)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Trending.js



function Trending({ result  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-0.5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-[#6e767d] text-xs font-medium",
                        children: result.heading
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "font-bold max-w-[250px] text-sm",
                        children: result.discription
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-[#6e767d] text-xs font-medium max-w-[250px]",
                        children: [
                            "Trending with",
                            " ",
                            result.tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "tag",
                                    children: tag
                                }, index)
                            )
                        ]
                    })
                ]
            }),
            result.img ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: result.img,
                width: 70,
                height: 70,
                objectFit: "cover",
                className: "rounded-2xl"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "icon group",
                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.DotsHorizontalIcon, {
                    className: "h-5 text-[#6e767d] group-hover:text-[#1d9bf0]"
                })
            })
        ]
    });
}
/* harmony default export */ const components_Trending = (Trending);

;// CONCATENATED MODULE: ./components/Widgets.js




function Widgets({ trendingResults , followResults  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center bg-[#202327] p-3 rounded-full relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_.SearchIcon, {
                            className: "text-gray-500 h-5 z-50"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            className: "bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg",
                            placeholder: "Search Twitter"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "font-bold text-xl px-4",
                        children: "What's happening"
                    }),
                    trendingResults.map((result, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Trending, {
                            result: result
                        }, index)
                    ),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light",
                        children: "Show more"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "font-bold text-xl px-4",
                        children: "Who to follow"
                    }),
                    followResults.map((result, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: result.userImg,
                                    width: 50,
                                    height: 50,
                                    objectFit: "cover",
                                    className: "rounded-full"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "ml-4 leading-5 group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "font-bold group-hover:underline",
                                            children: result.username
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "text-gray-500 text-[15px]",
                                            children: result.tag
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5",
                                    children: "Follow"
                                })
                            ]
                        }, index)
                    ),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light",
                        children: "Show more"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Widgets = (Widgets);


/***/ }),

/***/ 6228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "t": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoa2PMEj5FxED8_IBwU0Vi-ogMjoilJbY",
    authDomain: "twitter-clone-yt-b114a.firebaseapp.com",
    projectId: "twitter-clone-yt-b114a",
    storageBucket: "twitter-clone-yt-b114a.appspot.com",
    messagingSenderId: "1087365991177",
    appId: "1:1087365991177:web:66d04f3a9583cbcf8a21d8"
};
// Initialize Firebase
const app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (app)));


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;