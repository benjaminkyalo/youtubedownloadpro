(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/bootstrap/dist/js/bootstrap.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function Navbar({ children }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookmarked, setBookmarked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 800,
                once: true
            });
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    function handleShare() {
        navigator.clipboard.writeText(window.location.href).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false), 2500);
        });
    }
    function handleBookmark() {
        setBookmarked(true);
        setTimeout(()=>setBookmarked(false), 3000);
        if (window.sidebar && window.sidebar.addPanel) {
            window.sidebar.addPanel(document.title, window.location.href, '');
        } else if (window.external && 'AddFavorite' in window.external) {
            window.external.AddFavorite(window.location.href, document.title);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    background: scrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: scrolled ? '2px solid rgba(59, 130, 246, 0.4)' : '2px solid rgba(59, 130, 246, 0.2)',
                    transition: 'all 0.3s ease',
                    boxShadow: scrolled ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 5px 20px rgba(0, 0, 0, 0.3)',
                    padding: scrolled ? '0.5rem 0' : '1rem 0'
                },
                className: "jsx-99baba1048ca5b01" + " " + `navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-99baba1048ca5b01" + " " + "container d-flex align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            style: {
                                transition: 'transform 0.3s ease'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.transform = 'scale(1.05)',
                            onMouseLeave: (e)=>e.currentTarget.style.transform = 'scale(1)',
                            className: "jsx-99baba1048ca5b01" + " " + "navbar-brand d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px',
                                        boxShadow: '0 5px 15px rgba(59, 130, 246, 0.4)',
                                        transition: 'all 0.3s ease'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.6)';
                                        e.currentTarget.style.transform = 'rotate(5deg)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.4)';
                                        e.currentTarget.style.transform = 'rotate(0deg)';
                                    },
                                    className: "jsx-99baba1048ca5b01",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "jsx-99baba1048ca5b01",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 2L2 7L12 12L22 7L12 2Z",
                                                fill: "white",
                                                opacity: "0.9",
                                                className: "jsx-99baba1048ca5b01"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 17L12 22L22 17",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "jsx-99baba1048ca5b01"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 12L12 17L22 12",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "jsx-99baba1048ca5b01"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                                        fontWeight: '800',
                                        letterSpacing: '-0.5px'
                                    },
                                    className: "jsx-99baba1048ca5b01" + " " + 'mb-0',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            },
                                            className: "jsx-99baba1048ca5b01",
                                            children: "YouTube"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#f8fafc',
                                                fontWeight: '700'
                                            },
                                            className: "jsx-99baba1048ca5b01",
                                            children: "-Download Pro"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-99baba1048ca5b01" + " " + "d-flex align-items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBookmark,
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '0.45rem 1rem',
                                        borderRadius: '10px',
                                        border: '1.5px solid rgba(59, 130, 246, 0.5)',
                                        background: bookmarked ? 'linear-gradient(135deg, #3b82f6, #6366f1)' : 'rgba(59, 130, 246, 0.1)',
                                        color: '#60a5fa',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        whiteSpace: 'nowrap'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                    onMouseLeave: (e)=>{
                                        if (!bookmarked) e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                                    },
                                    className: "jsx-99baba1048ca5b01",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: bookmarked ? 'white' : 'none',
                                            stroke: bookmarked ? 'white' : '#60a5fa',
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "jsx-99baba1048ca5b01",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
                                                className: "jsx-99baba1048ca5b01"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: bookmarked ? 'white' : '#60a5fa'
                                            },
                                            className: "jsx-99baba1048ca5b01",
                                            children: "Bookmark"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleShare,
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '0.45rem 1rem',
                                        borderRadius: '10px',
                                        border: '1.5px solid rgba(59, 130, 246, 0.5)',
                                        background: copied ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(59, 130, 246, 0.1)',
                                        color: '#60a5fa',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        whiteSpace: 'nowrap'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                    onMouseLeave: (e)=>{
                                        if (!copied) e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                                    },
                                    className: "jsx-99baba1048ca5b01",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: copied ? 'white' : '#60a5fa',
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "jsx-99baba1048ca5b01",
                                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "20 6 9 17 4 12",
                                                className: "jsx-99baba1048ca5b01"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                lineNumber: 164,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "18",
                                                        cy: "5",
                                                        r: "3",
                                                        className: "jsx-99baba1048ca5b01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "6",
                                                        cy: "12",
                                                        r: "3",
                                                        className: "jsx-99baba1048ca5b01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "18",
                                                        cy: "19",
                                                        r: "3",
                                                        className: "jsx-99baba1048ca5b01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 83
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "8.59",
                                                        y1: "13.51",
                                                        x2: "15.42",
                                                        y2: "17.49",
                                                        className: "jsx-99baba1048ca5b01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 114
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "15.41",
                                                        y1: "6.51",
                                                        x2: "8.59",
                                                        y2: "10.49",
                                                        className: "jsx-99baba1048ca5b01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 164
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: copied ? 'white' : '#60a5fa'
                                            },
                                            className: "jsx-99baba1048ca5b01",
                                            children: copied ? 'Copied!' : 'Share Site'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            bookmarked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: '1.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#1e293b',
                    color: '#fff',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    zIndex: 9999,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    animation: 'fadeInUp 0.3s ease',
                    whiteSpace: 'nowrap'
                },
                className: "jsx-99baba1048ca5b01",
                children: [
                    "🔖 Press ",
                    typeof navigator !== 'undefined' && navigator?.platform?.includes('Mac') ? '⌘+D' : 'Ctrl+D',
                    " to bookmark!"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: '1.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#1e293b',
                    color: '#fff',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    zIndex: 9999,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    animation: 'fadeInUp 0.3s ease',
                    whiteSpace: 'nowrap'
                },
                className: "jsx-99baba1048ca5b01",
                children: "✅ Link copied to clipboard!"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx",
                lineNumber: 192,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "99baba1048ca5b01",
                children: "@keyframes fadeInUp{0%{opacity:0;transform:translate(-50%)translateY(10px)}to{opacity:1;transform:translate(-50%)translateY(0)}}@media (width<=576px){button.jsx-99baba1048ca5b01 span.jsx-99baba1048ca5b01{display:none}button.jsx-99baba1048ca5b01{padding:.45rem .6rem!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(Navbar, "/y1kcEt+z9Zo6h6jRKmUG+jkE1o=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/component/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/typed.js/dist/typed.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function HeaderFormat() {
    _s();
    const el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderFormat.useEffect": ()=>{
            const typed = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](el.current, {
                strings: [
                    "Download YouTube Videos",
                    "Save Videos in HD or MP3",
                    "Fast, Secure and Free"
                ],
                typeSpeed: 60,
                backSpeed: 25,
                loop: true
            });
            return ({
                "HeaderFormat.useEffect": ()=>typed.destroy()
            })["HeaderFormat.useEffect"];
        }
    }["HeaderFormat.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        "aria-label": "YouTube Downloader Header",
        style: {
            textAlign: 'center',
            width: '100%',
            padding: '6rem 1rem 4rem',
            position: 'relative',
            zIndex: 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '900px',
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        lineHeight: 1.2,
                        textAlign: 'center',
                        width: '100%',
                        display: 'block'
                    },
                    children: [
                        "YouTube",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                background: 'linear-gradient(135deg, #000 0%, #555 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                display: 'inline-block'
                            },
                            children: "Download Pro"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Header.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Header.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '1.5rem 0'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: el,
                        "aria-hidden": "true",
                        style: {
                            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                            fontWeight: 600,
                            color: '#6a6a6a'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Header.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Header.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Header.jsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Header.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(HeaderFormat, "bH7R4hqe0oCFqrqYinS8ShQEwjI=");
_c = HeaderFormat;
const __TURBOPACK__default__export__ = HeaderFormat;
var _c;
__turbopack_context__.k.register(_c, "HeaderFormat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/layout/layout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/Header.jsx [app-client] (ecmascript)");
;
;
;
;
;
function Layout({ format, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                format: format
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/layout/layout.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: '1100px',
                    padding: '1rem 1rem',
                    position: 'relative'
                },
                className: "jsx-e3d2d0a36da0ec86" + " " + "container search-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '-50px',
                            left: '10%',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            pointerEvents: 'none',
                            zIndex: 0
                        },
                        className: "jsx-e3d2d0a36da0ec86"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/layout/layout.jsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '-50px',
                            right: '10%',
                            width: '250px',
                            height: '250px',
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            pointerEvents: 'none',
                            zIndex: 0
                        },
                        className: "jsx-e3d2d0a36da0ec86"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/layout/layout.jsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            zIndex: 1
                        },
                        className: "jsx-e3d2d0a36da0ec86" + " " + "row g-3 align-items-center",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/layout/layout.jsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/layout/layout.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e3d2d0a36da0ec86",
                children: "@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_c = Layout;
const __TURBOPACK__default__export__ = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/component/card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Card({ link, quality }) {
    // New API returns data directly — no polling needed
    const title = link?.title || "YouTube Video";
    const thumbnail = link?.thumbnail || link?.info?.image || "";
    const downloadUrl = link?.url || "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card w-100",
        style: {
            maxWidth: "900px",
            borderRadius: "25px",
            overflow: "hidden",
            border: "2px solid rgba(59, 130, 246, 0.3)",
            background: "rgba(51, 65, 85, 0.8)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 h-100 d-flex align-items-center",
                        children: thumbnail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "img-fluid rounded",
                            src: thumbnail,
                            alt: title,
                            style: {
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "15px",
                                border: "2px solid rgba(59, 130, 246, 0.3)",
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "100%",
                                height: "180px",
                                background: "rgba(59,130,246,0.1)",
                                borderRadius: "15px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(59,130,246,0.6)",
                                    fontSize: "3rem"
                                },
                                children: "🎬"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-7",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-uppercase mb-3",
                                    style: {
                                        color: "var(--light-blue)",
                                        fontSize: "0.85rem",
                                        fontWeight: "700",
                                        letterSpacing: "1px"
                                    },
                                    children: "📹 Video Information"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 p-3",
                                    style: {
                                        background: "rgba(255, 255, 255, 0.6)",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(59, 130, 246, 0.2)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "text-black d-block mb-1",
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-0",
                                            style: {
                                                color: "var(--text-primary)",
                                                fontSize: "0.95rem",
                                                lineHeight: "1.5",
                                                fontWeight: "500"
                                            },
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 p-3",
                                    style: {
                                        background: "rgba(255, 255, 255, 0.6)",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(59, 130, 246, 0.2)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "text-black d-block mb-1",
                                            children: "Quality"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "badge",
                                            style: {
                                                background: "linear-gradient(135deg, #000000ff 0%, #000000ff 100%)",
                                                padding: "0.5rem 1rem",
                                                fontSize: "0.9rem",
                                                fontWeight: "700"
                                            },
                                            children: quality === "mp3" ? "MP3 Audio" : `${quality}p Video`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: downloadUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: downloadUrl,
                                        className: "btn w-100",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                                            border: "none",
                                            borderRadius: "15px",
                                            padding: "1rem",
                                            color: "white",
                                            fontWeight: "700",
                                            fontSize: "1rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                            boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex justify-content-center align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    className: "me-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#ffffff",
                                                        fillRule: "evenodd",
                                                        d: "M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                                        lineNumber: 137,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Download Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                            lineNumber: 135,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "alert alert-danger",
                                        role: "alert",
                                        style: {
                                            background: "rgba(239, 68, 68, 0.1)",
                                            border: "2px solid rgba(239, 68, 68, 0.3)",
                                            borderRadius: "12px",
                                            color: "#ef4444",
                                            fontWeight: "600"
                                        },
                                        children: "❌ Failed to get download link. Please try again."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/card.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/public/img/tutorial1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/tutorial1.d23a4519.png");}),
"[project]/Desktop/13 company/youtube download pro/public/img/tutorial1.png.mjs { IMAGE => \"[project]/Desktop/13 company/youtube download pro/public/img/tutorial1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/public/img/tutorial1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 767,
    height: 706,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAm0lEQVR42m2OywrCMBRE8/9/oduCS7ftTmgruBERxIIPEFqwTZM0iSlHUh8L8cCFyzDMjODNMAzkeU5RFNMfCSEgPgZrLVmWkabp1xARWmt6b2id5t5pmqYhas61hEePMMaw6Q4k1YpkuWY2m1OWJfvtgnOVIpxz9EbRKknb9UgpUUpxqTuON4nw3k/9v3eqLbvr8NoQU8Zx5B9P9wzTviMVtc4AAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/public/img/tutorial2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/tutorial2.f1a2433e.png");}),
"[project]/Desktop/13 company/youtube download pro/public/img/tutorial2.png.mjs { IMAGE => \"[project]/Desktop/13 company/youtube download pro/public/img/tutorial2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/public/img/tutorial2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1887,
    height: 843,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR42k3JsQqCQByA8XvRoMbAvedoibaIlh7BtaBWr6QW82wISv7ndZQptXypk8OPb/hUsBAma89o/mAwNY2M4ezOePkmWH1Qx4vlkFj2+kq41YSbiF1k0InQPhWnlpMpOGd9rmucFih5Vjhf4l8luTis81T1D5N/uUnNHwOrbo8BQLtGAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/public/img/tutorial3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/tutorial3.49579f30.png");}),
"[project]/Desktop/13 company/youtube download pro/public/img/tutorial3.png.mjs { IMAGE => \"[project]/Desktop/13 company/youtube download pro/public/img/tutorial3.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/public/img/tutorial3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1888,
    height: 816,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAUElEQVR42k3IOwqAMBAA0dy/VAttPIciES8k/hJ3kw2MYJWBaZ7rpp1xu+h9oF9OBn8zrJF2iTRzwIkaoglN+T9nw6xwhMLzGo4qVUVEauIDfkRZGu60HtUAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/public/img/tutorial4.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/tutorial4.05b9fcb7.png");}),
"[project]/Desktop/13 company/youtube download pro/public/img/tutorial4.png.mjs { IMAGE => \"[project]/Desktop/13 company/youtube download pro/public/img/tutorial4.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/public/img/tutorial4.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1894,
    height: 846,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAiUlEQVR42g3MvQqCUACAUZ+2tc1JpBqb6hkaCiLUhnqBIgjBioi2GvoxREmNe2/q9dP9cIyBmzNcSWxHYS9y+p6ityzpzjSWW2Ok2Y+5s2Yy9YiTL1WlEUIiVInWYISfGNMa0THHBNcn7+TPPcyI0qIF7SClxPcP7PZHNqcX23NEcBNcHoqiqmkAykFvBbqcx3YAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/component/tutorial.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tutorial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/13 company/youtube download pro/public/img/tutorial1.png.mjs { IMAGE => "[project]/Desktop/13 company/youtube download pro/public/img/tutorial1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/13 company/youtube download pro/public/img/tutorial2.png.mjs { IMAGE => "[project]/Desktop/13 company/youtube download pro/public/img/tutorial2.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/13 company/youtube download pro/public/img/tutorial3.png.mjs { IMAGE => "[project]/Desktop/13 company/youtube download pro/public/img/tutorial3.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$public$2f$img$2f$tutorial4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/13 company/youtube download pro/public/img/tutorial4.png.mjs { IMAGE => "[project]/Desktop/13 company/youtube download pro/public/img/tutorial4.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
function Tutorial({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = Tutorial;
var _c;
__turbopack_context__.k.register(_c, "Tutorial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$layout$2f$layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/layout/layout.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$tutorial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/tutorial.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const formatAudio = [
    'mp3',
    'm4a',
    'webm',
    'acc',
    'flac',
    'opus',
    'ogg',
    'wav',
    '4k'
];
function Downloadmp3() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quality, setQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mp3');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleinput(e) {
        setUrl(e.target.value);
    }
    function handleQuality(e) {
        setQuality(e.target.value);
    }
    async function download() {
        setLoading(true);
        try {
            const youtube = await fetch(`/api/youtube?url=${url}`);
            const data = await youtube.json();
            setLink(data);
        // const video = await data.resultUrl;
        //  setLink(video)
        //     if (video.mp4) {
        //         setLink(<a href={video.mp4} className='btn btn-danger ms-5' style={{ position: 'relative', top: '10rem' }} download>download</a>);
        //     } else {
        //         setLink(<p>Video tidak ditemukan.</p>);
        // }
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    // setLink(<a href={data.data.mp4} className='btn btn-danger ms-5' style={{position:'relative',top:'10rem'}}>Download!!!</a>)
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "position-relative",
        style: {
            top: '3rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$layout$2f$layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                format: "mp3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "form-control me-2",
                            placeholder: "Search...",
                            value: url,
                            onChange: handleinput
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                            lineNumber: 63,
                            columnNumber: 2
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                        lineNumber: 61,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-12 col-md-auto mt-2 mt-md-0 text-md-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary w-100 w-md-auto",
                            type: "button",
                            onClick: download,
                            children: "Search"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                        lineNumber: 67,
                        columnNumber: 2
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                lineNumber: 60,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-5",
                align: "center",
                children: "The download results are below"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                lineNumber: 71,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                align: "center",
                children: " 👇👇👇"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                lineNumber: 72,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: '50vh'
                },
                className: "d-flex align-items-center justify-content-center mt-5",
                children: [
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                role: "status",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                                lineNumber: 79,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spinner-border ms-auto",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                                lineNumber: 80,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                        lineNumber: 78,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                        lineNumber: 83,
                        columnNumber: 1
                    }, this),
                    !loading && link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        link: link,
                        type: "mp3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                        lineNumber: 86,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                lineNumber: 74,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$tutorial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Audio"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
                lineNumber: 90,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(Downloadmp3, "vXLkWF5JrquOyZoB+O1IPYRcoF8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Downloadmp3;
const __TURBOPACK__default__export__ = Downloadmp3;
var _c;
__turbopack_context__.k.register(_c, "Downloadmp3");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/component/SEOBlog.jsx
__turbopack_context__.s([
    "default",
    ()=>SEOBlog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SEOBlog() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
            padding: "4rem 1rem",
            borderTop: "1px solid rgba(59,130,246,0.1)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "900px",
                margin: "0 auto"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                itemScope: true,
                itemType: "https://schema.org/Article",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            marginBottom: "2.5rem",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-block",
                                    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                                    color: "#fff",
                                    fontSize: "0.75rem",
                                    fontWeight: "700",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    padding: "0.3rem 1rem",
                                    borderRadius: "999px",
                                    marginBottom: "1rem"
                                },
                                children: "Complete Guide"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                itemProp: "headline",
                                style: {
                                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                                    fontWeight: "800",
                                    color: "#0f172a",
                                    lineHeight: "1.3",
                                    marginBottom: "1rem"
                                },
                                children: "YouTube Download Pro — The Fastest Free YouTube Downloader Online"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#64748b",
                                    fontSize: "1.05rem",
                                    lineHeight: "1.7",
                                    maxWidth: "700px",
                                    margin: "0 auto"
                                },
                                children: "Download YouTube videos in HD, 4K, MP4, and MP3 instantly — no software, no login, no fees. The world's most reliable YouTube video downloader, trusted by millions globally."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "What is YouTube Download Pro?",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "YouTube Download Pro"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    " is a free online YouTube video downloader that lets you save any YouTube video directly to your device in seconds. Whether you need an",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "MP4 video"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    ", a high-definition ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "HD or 4K download"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 64,
                                        columnNumber: 61
                                    }, this),
                                    ", or just the audio as an ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "MP3"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 65,
                                        columnNumber: 31
                                    }, this),
                                    ", YouTube Download Pro handles it all — no app installation required, no account needed, and completely free."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: "0.75rem"
                                },
                                children: "Simply paste a YouTube URL into the search box, choose your preferred quality and format, and download instantly. It works on any device — iPhone, Android, Windows, Mac, or tablet — directly from your browser."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "How to Download YouTube Videos — Step by Step",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                style: {
                                    paddingLeft: "1.25rem",
                                    lineHeight: "2",
                                    color: "#334155"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Copy the YouTube video URL"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            " from your browser or the YouTube app."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Paste the URL"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            " into the input box on YouTube Download Pro."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Select your quality"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            " — choose from 360p, 480p, 720p HD, 1080p Full HD, 4K, or MP3 audio."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Click Search"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            " and wait a moment for the video to be processed."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Click Download"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            " and save the file directly to your device."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: "0.75rem"
                                },
                                children: "The entire process takes less than 10 seconds. No redirects, no surveys, no waiting — just fast, clean downloads every time."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Supported Video Formats and Quality Options",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "YouTube Download Pro supports a wide range of formats to match every use case:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                                    gap: "1rem",
                                    marginTop: "1rem"
                                },
                                children: [
                                    {
                                        label: "MP4 — 360p",
                                        desc: "Lightweight, fast downloads"
                                    },
                                    {
                                        label: "MP4 — 720p HD",
                                        desc: "Crisp, high-definition quality"
                                    },
                                    {
                                        label: "MP4 — 1080p Full HD",
                                        desc: "Crystal clear full HD"
                                    },
                                    {
                                        label: "MP4 — 4K Ultra HD",
                                        desc: "Maximum video fidelity"
                                    },
                                    {
                                        label: "MP3 Audio",
                                        desc: "Extract audio tracks instantly"
                                    },
                                    {
                                        label: "WebM",
                                        desc: "Open web-optimized format"
                                    }
                                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#fff",
                                            border: "1px solid rgba(59,130,246,0.15)",
                                            borderRadius: "10px",
                                            padding: "0.9rem 1rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: "700",
                                                    color: "#1e40af",
                                                    fontSize: "0.95rem"
                                                },
                                                children: f.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: "#64748b",
                                                    fontSize: "0.85rem",
                                                    marginTop: "0.2rem"
                                                },
                                                children: f.desc
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, f.label, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Why YouTube Download Pro is the Best YouTube Downloader",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "There are hundreds of YouTube downloaders online, but YouTube Download Pro stands out for several key reasons:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    paddingLeft: "1.25rem",
                                    lineHeight: "2",
                                    marginTop: "0.5rem",
                                    color: "#334155"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "100% Free"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            " — No subscription, no hidden charges, no premium tiers."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "No Software Required"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            " — Works entirely in your browser on any device."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "No Login or Registration"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            " — Paste, click, download. That's it."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Lightning Fast"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            " — Our servers process videos in seconds, not minutes."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "All Qualities Supported"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            " — From 360p to 4K Ultra HD and MP3 audio."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Mobile Friendly"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            " — Fully optimized for iPhone, Android, and tablets."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Safe and Secure"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            " — No malware, no adware, no data collection."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Playlist Support"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            " — Download entire YouTube playlists at once."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Download YouTube Videos on Any Device",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "YouTube Download Pro is designed to work seamlessly across all platforms. Whether you're on a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Windows PC"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this),
                                    ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Mac"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 180,
                                        columnNumber: 46
                                    }, this),
                                    ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "iPhone"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 180,
                                        columnNumber: 68
                                    }, this),
                                    ",",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Android smartphone"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "iPad"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 181,
                                        columnNumber: 52
                                    }, this),
                                    ", or ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Chromebook"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 181,
                                        columnNumber: 78
                                    }, this),
                                    ", the experience is equally fast and smooth."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: "0.75rem"
                                },
                                children: "On mobile, simply open your browser, paste the YouTube link, and download directly to your photos or files app. No redirects to app stores. No third-party apps needed."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Popular Uses for YouTube Download Pro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Millions of users rely on YouTube Download Pro every day for a wide variety of purposes:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    paddingLeft: "1.25rem",
                                    lineHeight: "2",
                                    marginTop: "0.5rem",
                                    color: "#334155"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Saving music videos and converting them to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "MP3 for offline listening"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 196,
                                                columnNumber: 62
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Downloading educational videos and tutorials for ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "offline study"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                                lineNumber: 197,
                                                columnNumber: 68
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Archiving content from channels before it gets deleted"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Saving travel vlogs, workout videos, or cooking tutorials for offline use"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Downloading videos for video editing projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Saving podcasts and interviews distributed via YouTube"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Is YouTube Download Pro Safe?",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Yes — YouTube Download Pro is completely safe to use. Our platform does not contain viruses, spyware, or malicious code. We never ask for personal information, email addresses, or payment details. All video processing is handled server-side, and no files are stored on our servers after download."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: "0.75rem"
                                },
                                children: "We also do not display intrusive pop-up ads or redirect users to unsafe third-party sites. Your safety and privacy are our top priority."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SEOBlog;
// Internal reusable section block
function Section({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(59,130,246,0.08)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "0.9rem",
                    paddingLeft: "0.75rem",
                    borderLeft: "3px solid #3b82f6"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: "#475569",
                    fontSize: "0.97rem",
                    lineHeight: "1.8"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
                lineNumber: 247,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_c1 = Section;
var _c, _c1;
__turbopack_context__.k.register(_c, "SEOBlog");
__turbopack_context__.k.register(_c1, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/component/FAQSchema.jsx
__turbopack_context__.s([
    "default",
    ()=>FAQSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const faqs = [
    {
        question: "How do I download a YouTube video for free?",
        answer: "Simply paste the YouTube video URL into the input box on YouTube Download Pro, click the Download button, choose your preferred quality (MP4, HD, 4K or MP3), and your download will start instantly. No registration or software needed."
    },
    {
        question: "Can I download YouTube videos in 4K quality?",
        answer: "Yes! YouTube Download Pro supports downloading videos in multiple resolutions including 360p, 480p, 720p HD, 1080p Full HD, and 4K Ultra HD — depending on the original video quality."
    },
    {
        question: "How do I convert a YouTube video to MP3?",
        answer: "Paste your YouTube URL into YouTube Download Pro and select the MP3 audio format option. The tool will extract the audio and let you download it as a high quality MP3 file instantly."
    },
    {
        question: "Does YouTube Download Pro work on iPhone and Android?",
        answer: "Yes! YouTube Download Pro is fully mobile-friendly and works on all devices including iPhone, Android, tablets, and desktop computers — directly from your browser with no app required."
    },
    {
        question: "Is YouTube Download Pro free to use?",
        answer: "Yes, YouTube Download Pro is 100% free with no hidden charges, no subscription, and no login required. Simply visit the site and start downloading immediately."
    },
    {
        question: "Can I download a full YouTube playlist?",
        answer: "Yes, YouTube Download Pro supports playlist downloads. Simply paste the playlist URL and select the videos you want to download."
    },
    {
        question: "Is it safe to use YouTube Download Pro?",
        answer: "Absolutely. YouTube Download Pro does not contain viruses, malware, or intrusive ads. Your downloads are processed securely and no personal data is stored."
    },
    {
        question: "What video formats does YouTube Download Pro support?",
        answer: "YouTube Download Pro supports MP4, WebM, and MP3 formats. You can choose your preferred format and quality before downloading."
    },
    {
        question: "Do I need to install any software to download YouTube videos?",
        answer: "No installation is required. YouTube Download Pro works entirely in your web browser on any device — just paste, click, and download."
    },
    {
        question: "Why is my download taking too long?",
        answer: "Download speed depends on your internet connection and the video size. For large HD or 4K videos, it may take a few seconds to prepare. Try selecting a lower quality for faster downloads."
    }
];
function FAQSchema() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq)=>({
                                "@type": "Question",
                                name: faq.question,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: faq.answer
                                }
                            }))
                    })
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: "900px",
                    margin: "3rem auto",
                    padding: "0 1rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            textAlign: "center",
                            fontSize: "1.8rem",
                            fontWeight: "700",
                            marginBottom: "0.5rem",
                            color: "#1a1a2e"
                        },
                        children: "Frequently Asked Questions"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            textAlign: "center",
                            color: "#666",
                            marginBottom: "2rem",
                            fontSize: "1rem"
                        },
                        children: "Everything you need to know about YouTube Download Pro"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem"
                        },
                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                style: {
                                    background: "#ffffff",
                                    border: "1px solid rgba(59, 130, 246, 0.2)",
                                    borderRadius: "12px",
                                    padding: "1rem 1.25rem",
                                    cursor: "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        style: {
                                            fontWeight: "600",
                                            fontSize: "1rem",
                                            color: "#1a1a2e",
                                            listStyle: "none",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            faq.question,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#3b82f6",
                                                    fontSize: "1.2rem"
                                                },
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            marginTop: "0.75rem",
                                            color: "#555",
                                            fontSize: "0.95rem",
                                            lineHeight: "1.6",
                                            marginBottom: 0
                                        },
                                        children: faq.answer
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = FAQSchema;
var _c;
__turbopack_context__.k.register(_c, "FAQSchema");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$layout$2f$layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/layout/layout.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$tutorial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/tutorial.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$SEOBlog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/SEOBlog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$FAQSchema$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/FAQSchema.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Downloadmp4() {
    _s();
    const formats = [
        {
            value: '144',
            label: '144p'
        },
        {
            value: '240',
            label: '240p'
        },
        {
            value: '360',
            label: '360p'
        },
        {
            value: '480',
            label: '480p'
        },
        {
            value: '720',
            label: '720p HD'
        },
        {
            value: '1080',
            label: '1080p HD'
        },
        {
            value: 'mp3',
            label: 'MP3 Audio'
        }
    ];
    const [format, setFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('360');
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searched, setSearched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleInput(e) {
        setUrl(e.target.value);
        if (error) setError(false);
    }
    function handleFormatChange(e) {
        setFormat(e.target.value);
    }
    async function download() {
        if (!url) {
            setError(true);
            setMessage('Please enter a YouTube URL');
            return;
        }
        setError(false);
        setLoading(true);
        setLink(false);
        setSearched(true);
        loadingRef.current.scrollIntoView({
            behavior: 'smooth'
        });
        try {
            const youtube = await fetch(`http://89.117.51.72:4500/api/download?url=${encodeURIComponent(url)}&format=${format}`);
            const data = await youtube.json();
            setLink(data.data);
            setMessage('');
        } catch (error) {
            console.error(error);
            setLink(false);
            setMessage('Failed to download. Please check your URL and try again.');
        } finally{
            setLoading(false);
        }
    }
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            download();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "position-relative",
        style: {
            top: '3rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$layout$2f$layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                format: "mp4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-fluid px-3 px-md-5 py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-md-10 col-lg-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex flex-column gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "position-relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: `form-control text-dark form-control-lg dark-placeholder ${error ? 'is-invalid' : ''}`,
                                                style: {
                                                    borderRadius: '15px',
                                                    padding: '1rem 1.5rem',
                                                    fontSize: '1rem',
                                                    backgroundColor: 'white',
                                                    color: '#1e1e1e',
                                                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                                    border: error ? '2px solid #ef4444' : '2px solid rgba(59, 130, 246, 0.3)'
                                                },
                                                placeholder: "🔗 Paste your YouTube URL here...",
                                                value: url,
                                                onChange: handleInput,
                                                onKeyPress: handleKeyPress
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                                lineNumber: 81,
                                                columnNumber: 37
                                            }, this),
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "invalid-feedback d-block mt-2 ms-2",
                                                style: {
                                                    fontSize: '0.9rem'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        "⚠️ ",
                                                        message
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                                lineNumber: 99,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                        lineNumber: 80,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex flex-column flex-sm-row gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "form-select form-select-lg",
                                                style: {
                                                    border: '2px solid rgba(59, 130, 246, 0.3)',
                                                    padding: '1rem 1.2rem',
                                                    fontSize: '1rem',
                                                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                                    borderRadius: '15px',
                                                    flex: '1'
                                                },
                                                value: format,
                                                onChange: handleFormatChange,
                                                children: formats.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option.value,
                                                        children: option.label
                                                    }, option.value, false, {
                                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                                        lineNumber: 121,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                                lineNumber: 107,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    borderRadius: '15px',
                                                    padding: '1rem 2.5rem',
                                                    border: 'none',
                                                    fontSize: '1rem',
                                                    fontWeight: '700',
                                                    whiteSpace: 'nowrap',
                                                    minWidth: '200px',
                                                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
                                                },
                                                className: "btn btn-lg",
                                                type: "button",
                                                onClick: download,
                                                disabled: loading,
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "spinner-border spinner-border-sm me-2",
                                                            role: "status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                                            lineNumber: 145,
                                                            columnNumber: 49
                                                        }, this),
                                                        "Processing..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "me-2",
                                                            style: {
                                                                display: 'inline-block',
                                                                verticalAlign: 'middle'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M10 2V12M10 12L6 8M10 12L14 8M2 16H18",
                                                                stroke: "white",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                                                lineNumber: 151,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                                            lineNumber: 150,
                                                            columnNumber: 49
                                                        }, this),
                                                        "Search"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                                lineNumber: 127,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                        lineNumber: 106,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            searched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mt-3",
                ref: loadingRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-2 text-black",
                            style: {
                                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                fontWeight: '800'
                            },
                            children: "Download Result"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                            lineNumber: 168,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                        lineNumber: 167,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex align-items-center justify-content-center mb-5",
                        children: [
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Loading, {}, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                lineNumber: 173,
                                columnNumber: 37
                            }, this),
                            message && !loading && !link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "alert alert-danger d-inline-block",
                                    role: "alert",
                                    style: {
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        border: '2px solid rgba(239, 68, 68, 0.3)',
                                        borderRadius: '15px',
                                        padding: '1.5rem 2rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "mb-0",
                                        children: [
                                            "❌ ",
                                            message
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                        lineNumber: 182,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                    lineNumber: 176,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                lineNumber: 175,
                                columnNumber: 29
                            }, this),
                            !loading && link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                link: link,
                                quality: format
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                                lineNumber: 186,
                                columnNumber: 46
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                lineNumber: 166,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: !searched ? loadingRef : null,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$SEOBlog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$FAQSchema$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                        lineNumber: 194,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                lineNumber: 192,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$tutorial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Video"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                lineNumber: 197,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
    //TURBOPACK unreachable
    ;
    function Loading() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner-border mb-3",
                    style: {
                        width: '4rem',
                        height: '4rem'
                    },
                    role: "status",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "visually-hidden",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                        lineNumber: 205,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                    lineNumber: 204,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mt-3",
                    style: {
                        color: 'var(--light-blue)',
                        fontWeight: '600'
                    },
                    children: "⚡ Processing your request..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                    lineNumber: 207,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-secondary mt-2",
                    children: "Please wait while we fetch your video"
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
                    lineNumber: 210,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx",
            lineNumber: 203,
            columnNumber: 13
        }, this);
    }
}
_s(Downloadmp4, "hgcHDjHysqbr7CQ06fdKOoT1igI=");
_c = Downloadmp4;
const __TURBOPACK__default__export__ = Downloadmp4;
var _c;
__turbopack_context__.k.register(_c, "Downloadmp4");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/component/Modal.jsx
__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function Modal({ show, onClose, title, content }) {
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal fade show d-block",
        tabIndex: "-1",
        style: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            paddingRight: '17px'
        },
        "aria-modal": "true",
        role: "dialog",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-content",
                style: {
                    backgroundColor: 'var(--bg-dark)',
                    border: '2px solid rgba(0, 0, 0, 0.15)',
                    borderRadius: '0.75rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-header border-bottom-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "modal-title",
                                style: {
                                    color: 'var(--primary-blue)'
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn-close",
                                "aria-label": "Close",
                                onClick: onClose,
                                style: {
                                    filter: 'brightness(0)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-body",
                        style: {
                            lineHeight: '1.6'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            dangerouslySetInnerHTML: {
                                __html: content
                            },
                            style: {
                                color: 'var(--text-secondary)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
                            lineNumber: 38,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-footer border-top-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn-secondary",
                            onClick: onClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
                            lineNumber: 45,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
                lineNumber: 16,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/component/footer.jsx
__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/typed.js/dist/typed.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/Modal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Footer() {
    _s();
    const el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State for managing the modal
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalTitle, setModalTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [modalContent, setModalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Policy content from your request
    const POLICY_CONTENT = {
        'Copyright Claims': `
        <p>If you believe your copyright has been infringed, please contact us:</p>
        <p><strong>Email:</strong> <a href="mailto:copyright@ytdownload.com">copyright@ytdownload.com</a></p>
    `,
        'Terms and Conditions': `
        <h3>1. Introduction</h3>
        <p>Welcome to YouTube Download Pro (“the Website link”). These Terms & Conditions govern your access and use of our online video conversion and downloading service. By using this Website, you agree to follow all terms stated here. If you do not agree, you must discontinue using the Website immediately.</p>

        <h3>2. Purpose of the Service</h3>
        <p>Our Website provides tools that allow users to convert publicly accessible online videos into downloadable MP3 or MP4 files for personal use. We do not host any copyrighted content and do not store or reproduce any video or audio files. All conversions occur only when initiated by the user.</p>

        <h3>3. User Responsibility & Legal Compliance</h3>
        <p>You, the user, are solely responsible for:</p>
        <ul>
            <li>Ensuring you have the legal right to download or convert any content.</li>
            <li>Complying with all copyright laws in your country.</li>
            <li>Using the service only for personal, non-commercial, lawful purposes.</li>
            <li>Avoiding any use that violates YouTube’s Terms of Service or other platform policies.</li>
        </ul>
        <p>The Website does not condone piracy and will not be held liable for users who download copyrighted material without permission from the copyright owner.</p>

        <h3>4. Copyright & Intellectual Property Protection</h3>
        <p>You agree not to use the Website to:</p>
        <ul>
            <li>Download content you do not have permission to access.</li>
            <li>Circumvent digital rights management (DRM) protections.</li>
            <li>Download paid, restricted, or premium content.</li>
            <li>Distribute downloaded content in any way that infringes on copyright.</li>
        </ul>
        <p>If a copyright owner believes their rights have been violated, they may contact us for removal under our DMCA Policy (Section 9).</p>
    `,
        'Privacy Policy': `
        <p>At YouTube Download Pro, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights when using our service.</p>

        <h3>1. Information We Do Not Collect</h3>
        <p>We do not collect or store:</p>
        <ul>
            <li>Downloaded files</li>
            <li>Video or audio links submitted by users</li>
            <li>Any personal content or account data</li>
            <li>Any login information from third-party platforms (e.g., YouTube)</li>
        </ul>
        <p>All conversions occur instantly and are not saved on our servers.</p>

        <h3>2. Information We May Collect</h3>
        <p>To improve site performance and security, we may collect non-personal technical data, such as:</p>
        <ul>
            <li>Cookies</li>
            <li>Browser type and device information</li>
            <li>Anonymous usage statistics</li>
            <li>IP address for security and anti-abuse monitoring</li>
        </ul>
        <p>This data cannot identify you personally.</p>

        <h3>3. How We Use the Data</h3>
        <ul>
            <li>Improving site speed and functionality</li>
            <li>Preventing abuse or automated attacks</li>
            <li>Analytics and service optimization</li>
            <li>Enhancing user experience</li>
        </ul>
        <p>We do not sell, share, or trade your data with advertisers or third parties.</p>

        <h3>4. Third-Party Services</h3>
        <p>Our Website may contain links or ads from third parties. We are not responsible for the privacy practices of external websites or services. Please review their privacy policies before interacting with their content.</p>

        <h3>5. Security</h3>
        <p>We use reasonable technical measures to protect against unauthorized access and ensure the safe operation of our service. However, no online service is 100% secure.</p>

        <h3>6. Your Choices</h3>
        <p>You may disable cookies or analytics tracking through your browser settings. Continued use of the Website indicates acceptance of this Privacy Policy.</p>

        <h3>7. Updates to This Policy</h3>
        <p>We may revise this Privacy Policy at any time. Changes take effect immediately upon posting.</p>
    `
    };
    // Function to handle opening the modal with specific content
    const openModal = (type)=>{
        setModalTitle(type);
        setModalContent(POLICY_CONTENT[type]);
        setShowModal(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showModal,
                onClose: ()=>setShowModal(false),
                title: modalTitle,
                content: modalContent
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    marginTop: '3rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderTop: '1px solid rgba(0,0,0,0.1)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row justify-content-center mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-12 text-center d-flex justify-content-center flex-wrap gap-2",
                                children: [
                                    'Copyright Claims',
                                    'Terms and Conditions',
                                    'Privacy Policy'
                                ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-link p-1",
                                        onClick: ()=>openModal(type),
                                        style: {
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.85rem',
                                            fontWeight: '500',
                                            textDecoration: 'none'
                                        },
                                        onMouseEnter: (e)=>e.target.style.color = 'var(--primary-blue)',
                                        onMouseLeave: (e)=>e.target.style.color = 'var(--text-secondary)',
                                        children: type.includes('Terms') ? 'T&Cs' : type
                                    }, type, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                                        lineNumber: 119,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            style: {
                                borderColor: 'rgba(0,0,0,0.2)',
                                margin: '0.5rem 0 1rem 0'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-6 text-center text-md-start mb-1 mb-md-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "mb-0",
                                        style: {
                                            fontSize: '1rem',
                                            color: 'var(--primary-blue)',
                                            fontWeight: '600'
                                        },
                                        children: [
                                            "Made with ❤️ by ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                style: {
                                                    color: '#1f22ffff',
                                                    fontWeight: '700',
                                                    textDecoration: 'none'
                                                },
                                                children: "13 COMPANY."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                                                lineNumber: 146,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                                    lineNumber: 144,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-6 text-center text-md-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        style: {
                                            fontSize: '0.85rem',
                                            color: 'var(--primary-blue)',
                                            fontWeight: '500'
                                        },
                                        children: [
                                            "© 2026 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://youtubedownloadpro.com",
                                                style: {
                                                    color: '#1f22ffff',
                                                    textDecoration: 'none',
                                                    fontWeight: '600'
                                                },
                                                children: "YouTube Download Pro"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                                                lineNumber: 153,
                                                columnNumber: 40
                                            }, this),
                                            ". All Rights Reserved."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx",
                lineNumber: 112,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Footer, "EjFi0JIhfGRKAp0jvkkO+51bYUs=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Card({ link }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const downloadLinkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(""); // Gunakan ref untuk menyimpan downloadLink
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [button, setButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                HandleClick: {
                    "Card.useState": ()=>handleDownload("mp4")
                }["Card.useState"],
                title: "Download Mp4"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                HandleClick: {
                    "Card.useState": ()=>handleDownload("mp3")
                }["Card.useState"],
                title: "Download Mp3"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true));
    const handleRedirect = (e)=>{
        e.preventDefault();
        const downloadLink = downloadLinkRef.current; // Ambil nilai dari ref
        if (!downloadLink) {
            alert("Silakan pilih format terlebih dahulu.");
            return;
        }
        console.log("Redirecting to:", downloadLink); // Debug log
        router.push(downloadLink);
    };
    const handleDownload = async (format)=>{
        setLoading(true);
        try {
            const response = await fetch(`/api/youtube?url=${link.url}`);
            if (!response.ok) {
                throw new Error("Gagal mengambil data download.");
            }
            const data = await response.json();
            if (format === "mp4") {
                setButton(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "form-select",
                            onChange: (e)=>downloadLinkRef.current = e.target.value,
                            "aria-label": "Pilih format video",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Pilih Format"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                data.video.map((v, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: v.downloadLink,
                                        children: v.fileType
                                    }, index, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            HandleClick: handleRedirect,
                            title: "Download Mp4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true));
            } else if (format === "mp3") {
                setButton(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "form-select",
                            onChange: (e)=>downloadLinkRef.current = e.target.value,
                            "aria-label": "Pilih format audio",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Pilih Format"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                data.audio.map((v, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: v.downloadLink,
                                        children: v.fileType
                                    }, index, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            HandleClick: handleRedirect,
                            title: "Download Mp3"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true));
            }
        } catch (error) {
            console.error("Error fetching data:", error.message);
            alert("Terjadi kesalahan. Silakan coba lagi.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card mb-3 w-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "img-fluid rounded-start",
                        src: link.thumbnail,
                        alt: link.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "col card-title border-end",
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "col",
                                                children: link.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "col card-title border-end",
                                                children: "Author"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "col",
                                                children: link.author.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "col card-title border-end",
                                                children: "Duration"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "col",
                                                children: link.timestamp
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row gap-4",
                                    children: [
                                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Loading, {}, void 0, false, {
                                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this),
                                        !loading && button
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
    //TURBOPACK unreachable
    ;
    function Loading() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex align-items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    role: "status",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner-border ms-auto",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
            lineNumber: 131,
            columnNumber: 7
        }, this);
    }
    function Button({ HandleClick, title }) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: HandleClick,
            className: "col btn btn-primary h-75 mt-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-center align-items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "SVGRepo_bgCarrier",
                                strokeWidth: "0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                lineNumber: 143,
                                columnNumber: 108
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "SVGRepo_tracerCarrier",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                lineNumber: 143,
                                columnNumber: 154
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "SVGRepo_iconCarrier",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "#000000",
                                        fillRule: "evenodd",
                                        d: "M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                        lineNumber: 143,
                                        columnNumber: 262
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                                lineNumber: 143,
                                columnNumber: 233
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ms-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
                lineNumber: 142,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx",
            lineNumber: 141,
            columnNumber: 9
        }, this);
    }
}
_s(Card, "h46SRtlwj6eZuMEoQXjqb4TIiKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$layout$2f$layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/layout/layout.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$ytsearch$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/ytsearch/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$tutorial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/tutorial.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const formatVideo = [
    '720',
    '360',
    '480',
    '1080',
    '1440'
];
function YtSearch() {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    function handleinput(e) {
        setUrl(e.target.value);
    }
    function handleQuality(e) {
        setQuality(e.target.value);
    }
    async function download() {
        setLoading(true);
        loadingRef.current.scrollIntoView({
            behavior: 'smooth'
        });
        try {
            const youtube = await fetch(`/api/youtube/search?q=${url}`);
            const data = await youtube.json();
            if (data.seconds >= 3600) {
                setMessage('Video/Audio Tidak Boleh Lebih Dari 1 Jam');
                setLink(false);
                setLoading(false);
            } else {
                setMessage('');
                setLink(data);
            }
        } catch (error) {
            console.error(error);
            setLink(false);
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "position-relative",
        style: {
            top: '3rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$layout$2f$layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                format: "Search",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "form-control me-2",
                            placeholder: "Search...",
                            value: url,
                            onChange: handleinput
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                            lineNumber: 61,
                            columnNumber: 2
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                        lineNumber: 59,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-12 col-md-auto mt-2 mt-md-0 text-md-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                backgroundColor: '#98FF98'
                            },
                            className: "btn w-100 w-md-auto",
                            type: "button",
                            onClick: download,
                            children: "Search"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                        lineNumber: 64,
                        columnNumber: 2
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                lineNumber: 58,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-5",
                align: "center",
                children: "Hasil download ada di bawah"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                lineNumber: 68,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                align: "center",
                children: " 👇👇👇"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                lineNumber: 69,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: '50vh'
                },
                ref: loadingRef,
                className: "d-flex align-items-center justify-content-center mt-5",
                children: [
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                role: "status",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                                lineNumber: 73,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spinner-border ms-auto",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                                lineNumber: 74,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                        lineNumber: 77,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-block gap-3 d-lg-flex justify-content-sm-center",
                            children: link.map((video, i)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$ytsearch$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        link: video
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                                        lineNumber: 89,
                                        columnNumber: 5
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                                    lineNumber: 88,
                                    columnNumber: 7
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                            lineNumber: 84,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                        lineNumber: 83,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                lineNumber: 70,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$tutorial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Video"
            }, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
                lineNumber: 101,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(YtSearch, "30mLvAOwMGfuZYnRLxlJGyvvidw=");
_c = YtSearch;
const __TURBOPACK__default__export__ = YtSearch;
var _c;
__turbopack_context__.k.register(_c, "YtSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/app/App.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/typed.js/dist/typed.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$pages$2f$downloadmp3$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp3.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$pages$2f$downloadmp4$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/pages/downloadmp4.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$bundle$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/component/footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$pages$2f$ytsearch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/pages/ytsearch.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
function App() {
    _s();
    const [tabs, setTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ytmp4");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/app/App.jsx",
                lineNumber: 19,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    tabs == 'ytmp4' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$pages$2f$downloadmp4$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/app/App.jsx",
                        lineNumber: 24,
                        columnNumber: 27
                    }, this),
                    tabs == 'ytmp3' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$pages$2f$downloadmp3$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/app/App.jsx",
                        lineNumber: 25,
                        columnNumber: 28
                    }, this),
                    tabs == 'ytsearch' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$pages$2f$ytsearch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/app/App.jsx",
                        lineNumber: 26,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$src$2f$component$2f$footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/13 company/youtube download pro/src/app/App.jsx",
                        lineNumber: 28,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/13 company/youtube download pro/src/app/App.jsx",
                lineNumber: 23,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(App, "2W/qM++r5vcaO3nO1D2CZLHWRhQ=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/13 company/youtube download pro/src/app/App.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/src/app/App.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_13%20company_youtube%20download%20pro_645c7e84._.js.map