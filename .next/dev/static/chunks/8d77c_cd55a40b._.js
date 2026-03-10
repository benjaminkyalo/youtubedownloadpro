(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/13 company/youtube download pro/node_modules/typed.js/dist/typed.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>i
]);
function t() {
    return t = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", t.apply(this, arguments);
}
var s = {
    strings: [
        "These are the default values...",
        "You know what you should do?",
        "Use your own!",
        "Have a great day!"
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: Infinity,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function(t) {},
    onComplete: function(t) {},
    preStringTyped: function(t, s) {},
    onStringTyped: function(t, s) {},
    onLastStringBackspaced: function(t) {},
    onTypingPaused: function(t, s) {},
    onTypingResumed: function(t, s) {},
    onReset: function(t) {},
    onStop: function(t, s) {},
    onStart: function(t, s) {},
    onDestroy: function(t) {}
}, e = new (/*#__PURE__*/ function() {
    function e() {}
    var n = e.prototype;
    return n.load = function(e, n, i) {
        if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = t({}, s, n), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(t) {
            return t.trim();
        }), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, e.stringsElement) {
            e.strings = [], e.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
            var r = Array.prototype.slice.apply(e.stringsElement.children), o = r.length;
            if (o) for(var a = 0; a < o; a += 1)e.strings.push(r[a].innerHTML.trim());
        }
        for(var u in e.strPos = 0, e.currentElContent = this.getCurrentElContent(e), e.currentElContent && e.currentElContent.length > 0 && (e.strPos = e.currentElContent.length - 1, e.strings.unshift(e.currentElContent)), e.sequence = [], e.strings)e.sequence[u] = u;
        e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0
        }, e.typingComplete = !1, e.autoInsertCss = e.options.autoInsertCss, e.autoInsertCss && (this.appendCursorAnimationCss(e), this.appendFadeOutAnimationCss(e));
    }, n.getCurrentElContent = function(t) {
        return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
    }, n.appendCursorAnimationCss = function(t) {
        var s = "data-typed-js-cursor-css";
        if (t.showCursor && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(e);
        }
    }, n.appendFadeOutAnimationCss = function(t) {
        var s = "data-typed-fadeout-js-css";
        if (t.fadeOut && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(e);
        }
    }, e;
}()), n = new (/*#__PURE__*/ function() {
    function t() {}
    var s = t.prototype;
    return s.typeHtmlChars = function(t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if ("<" === n || "&" === n) {
            var i;
            for(i = "<" === n ? ">" : ";"; t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length););
            s++;
        }
        return s;
    }, s.backSpaceHtmlChars = function(t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if (">" === n || ";" === n) {
            var i;
            for(i = ">" === n ? "<" : "&"; t.substring(s - 1).charAt(0) !== i && !(--s < 0););
            s--;
        }
        return s;
    }, t;
}()), i = /*#__PURE__*/ function() {
    function t(t, s) {
        e.load(this, s, t), this.begin();
    }
    var s = t.prototype;
    return s.toggle = function() {
        this.pause.status ? this.start() : this.stop();
    }, s.stop = function() {
        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
    }, s.start = function() {
        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
    }, s.destroy = function() {
        this.reset(!1), this.options.onDestroy(this);
    }, s.reset = function(t) {
        void 0 === t && (t = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
    }, s.begin = function() {
        var t = this;
        this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
            0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
        }, this.startDelay);
    }, s.typewrite = function(t, s) {
        var e = this;
        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var i = this.humanizer(this.typeSpeed), r = 1;
        !0 !== this.pause.status ? this.timeout = setTimeout(function() {
            s = n.typeHtmlChars(t, s, e);
            var i = 0, o = t.substring(s);
            if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                var a = 1;
                a += (o = /\d+/.exec(o)[0]).length, i = parseInt(o), e.temporaryPause = !0, e.options.onTypingPaused(e.arrayPos, e), t = t.substring(0, s) + t.substring(s + a), e.toggleBlinking(!0);
            }
            if ("`" === o.charAt(0)) {
                for(; "`" !== t.substring(s + r).charAt(0) && (r++, !(s + r > t.length)););
                var u = t.substring(0, s), p = t.substring(u.length + 1, s + r), c = t.substring(s + r + 1);
                t = u + p + c, r--;
            }
            e.timeout = setTimeout(function() {
                e.toggleBlinking(!1), s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, r), e.temporaryPause && (e.temporaryPause = !1, e.options.onTypingResumed(e.arrayPos, e));
            }, i);
        }, i) : this.setPauseStatus(t, s, !0);
    }, s.keepTyping = function(t, s, e) {
        0 === s && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
        var n = t.substring(0, s += e);
        this.replaceText(n), this.typewrite(t, s);
    }, s.doneTyping = function(t, s) {
        var e = this;
        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
            e.backspace(t, s);
        }, this.backDelay));
    }, s.backspace = function(t, s) {
        var e = this;
        if (!0 !== this.pause.status) {
            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(!1);
            var i = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function() {
                s = n.backSpaceHtmlChars(t, s, e);
                var i = t.substring(0, s);
                if (e.replaceText(i), e.smartBackspace) {
                    var r = e.strings[e.arrayPos + 1];
                    e.stopNum = r && i === r.substring(0, s) ? s : 0;
                }
                s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.options.onLastStringBackspaced(), e.shuffleStringsIfNeeded(), e.begin()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], s));
            }, i);
        } else this.setPauseStatus(t, s, !1);
    }, s.complete = function() {
        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
    }, s.setPauseStatus = function(t, s, e) {
        this.pause.typewrite = e, this.pause.curString = t, this.pause.curStrPos = s;
    }, s.toggleBlinking = function(t) {
        this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
    }, s.humanizer = function(t) {
        return Math.round(Math.random() * t / 2) + t;
    }, s.shuffleStringsIfNeeded = function() {
        this.shuffle && (this.sequence = this.sequence.sort(function() {
            return Math.random() - .5;
        }));
    }, s.initFadeOut = function() {
        var t = this;
        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
        }, this.fadeOutDelay);
    }, s.replaceText = function(t) {
        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
    }, s.bindFocusEvents = function() {
        var t = this;
        this.isInput && (this.el.addEventListener("focus", function(s) {
            t.stop();
        }), this.el.addEventListener("blur", function(s) {
            t.el.value && 0 !== t.el.value.length || t.start();
        }));
    }, s.insertCursor = function() {
        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
    }, t;
}();
;
 //# sourceMappingURL=typed.module.js.map
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/13 company/youtube download pro/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)");
var React = __turbopack_context__.r("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/styled-jsx/style.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/13 company/youtube download pro/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)").style;
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "afterMain",
    ()=>afterMain,
    "afterRead",
    ()=>afterRead,
    "afterWrite",
    ()=>afterWrite,
    "auto",
    ()=>auto,
    "basePlacements",
    ()=>basePlacements,
    "beforeMain",
    ()=>beforeMain,
    "beforeRead",
    ()=>beforeRead,
    "beforeWrite",
    ()=>beforeWrite,
    "bottom",
    ()=>bottom,
    "clippingParents",
    ()=>clippingParents,
    "end",
    ()=>end,
    "left",
    ()=>left,
    "main",
    ()=>main,
    "modifierPhases",
    ()=>modifierPhases,
    "placements",
    ()=>placements,
    "popper",
    ()=>popper,
    "read",
    ()=>read,
    "reference",
    ()=>reference,
    "right",
    ()=>right,
    "start",
    ()=>start,
    "top",
    ()=>top,
    "variationPlacements",
    ()=>variationPlacements,
    "viewport",
    ()=>viewport,
    "write",
    ()=>write
]);
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getNodeName
]);
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getWindow
]);
function getWindow(node) {
    if (node == null) {
        return window;
    }
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isShadowRoot",
    ()=>isShadowRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
;
function isElement(node) {
    var OwnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
        return false;
    }
    var OwnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}
;
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/applyStyles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)"); // This modifier takes the styles prepared by the `computeStyles` modifier
;
;
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)) {
            return;
        } // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) {
                element.removeAttribute(name);
            } else {
                element.setAttribute(name, value === true ? '' : value);
            }
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)) {
                return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: [
        'computeStyles'
    ]
};
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getBasePlacement
]);
;
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "max",
    ()=>max,
    "min",
    ()=>min,
    "round",
    ()=>round
]);
var max = Math.max;
var min = Math.min;
var round = Math.round;
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/userAgent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getUAString
]);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
        return uaData.brands.map(function(item) {
            return item.brand + "/" + item.version;
        }).join(' ');
    }
    return navigator.userAgent;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isLayoutViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/userAgent.js [app-client] (ecmascript)");
;
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getBoundingClientRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isLayoutViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js [app-client] (ecmascript)");
;
;
;
;
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        scaleX = element.offsetWidth > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isLayoutViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getLayoutRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)"); // Returns the layout rect of an element relative to its offsetParent. Layout
;
function getLayoutRect(element) {
    var clientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
        width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
        height = clientRect.height;
    }
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/contains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>contains
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) {
        return true;
    } else if (rootNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShadowRoot"])(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) {
                return true;
            } // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next)
    } // Give up, the result is false
    return false;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getComputedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
;
function getComputedStyle(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element).getComputedStyle(element);
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isTableElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
;
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)) >= 0;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDocumentElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getParentNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
;
;
function getParentNode(element) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element) === 'html') {
        return element;
    }
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShadowRoot"])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element) // fallback
    );
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getOffsetParent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isTableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/userAgent.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function getTrueOffsetParent(element) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element).position === 'fixed') {
        return null;
    }
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
    var isIE = /Trident/i.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
    if (isIE && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
        if (elementCss.position === 'fixed') {
            return null;
        }
    }
    var currentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShadowRoot"])(currentNode)) {
        currentNode = currentNode.host;
    }
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(currentNode) && [
        'html',
        'body'
    ].indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentNode)) < 0){
        var css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
            return currentNode;
        } else {
            currentNode = currentNode.parentNode;
        }
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isTableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent).position === 'static'){
        offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent) === 'html' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent) === 'body' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent).position === 'static')) {
        return window;
    }
    return offsetParent || getContainingBlock(element) || window;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getMainAxisFromPlacement
]);
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/within.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "within",
    ()=>within,
    "withinMaxClamp",
    ()=>withinMaxClamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
;
function within(min, value, max) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(min, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getFreshSideObject
]);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mergePaddingObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getFreshSideObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js [app-client] (ecmascript)");
;
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getFreshSideObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), paddingObject);
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/expandToHashMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>expandToHashMap
]);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/arrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/contains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/within.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergePaddingObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$expandToHashMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/expandToHashMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
;
;
;
;
;
;
;
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergePaddingObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeof padding !== 'number' ? padding : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$expandToHashMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(padding, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basePlacements"]));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement);
    var axis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(basePlacement);
    var isVertical = [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"]
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) {
        return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(arrowElement);
    var minProp = axis === 'y' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"];
    var maxProp = axis === 'y' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"];
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["within"])(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) {
        return;
    } // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) {
            return;
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.popper, arrowElement)) {
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getVariation
]);
function getVariation(placement) {
    return placement.split('-')[1];
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/computeStyles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "mapToStyles",
    ()=>mapToStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
;
;
;
;
;
;
var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(x * dpr) / dpr || 0,
        y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"];
    var sideY = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"];
    var win = window;
    if (adaptive) {
        var offsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper)) {
            offsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent = offsetParent;
        if (placement === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] || (placement === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"] || placement === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"]) && variation === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["end"]) {
            sideY = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"];
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"] || (placement === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] || placement === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]) && variation === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["end"]) {
            sideX = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"];
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement),
        variation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive: adaptive,
            roundOffsets: roundOffsets
        })));
    }
    if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: 'absolute',
            adaptive: false,
            roundOffsets: roundOffsets
        })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
};
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/eventListeners.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
        scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener('scroll', instance.update, passive);
        });
    }
    if (resize) {
        window.addEventListener('resize', instance.update, passive);
    }
    return function() {
        if (scroll) {
            scrollParents.forEach(function(scrollParent) {
                scrollParent.removeEventListener('scroll', instance.update, passive);
            });
        }
        if (resize) {
            window.removeEventListener('resize', instance.update, passive);
        }
    };
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
};
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getOppositePlacement
]);
var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getOppositeVariationPlacement
]);
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getWindowScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
;
function getWindowScroll(node) {
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getWindowScrollBarX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js [app-client] (ecmascript)");
;
;
;
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)).left + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element).scrollLeft;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getViewportRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isLayoutViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js [app-client] (ecmascript)");
;
;
;
;
function getViewportRect(element, strategy) {
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isLayoutViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (layoutViewport || !layoutViewport && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element),
        y: y
    };
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDocumentRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)"); // Gets the entire size of the scrollable document area, even extending outside
;
;
;
;
;
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var winScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var y = -winScroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(body || html).direction === 'rtl') {
        x += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isScrollParent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
;
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getScrollParent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
;
;
;
function getScrollParent(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node)) >= 0) {
        // $FlowFixMe[incompatible-return]: assume body is always available
        return node.ownerDocument.body;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(node) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node)) {
        return node;
    }
    return getScrollParent((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node));
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>listScrollParents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js [app-client] (ecmascript)");
;
;
;
;
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
        list = [];
    }
    var scrollParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target)));
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/rectToClientRect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rectToClientRect
]);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getClippingRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getViewportRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/contains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/rectToClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
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
;
;
;
;
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewport"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getViewportRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element, strategy)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element) : element;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clipperElement)) {
        return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clippingParent) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(clippingParent, clipperElement) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.top, accRect.top);
        accRect.right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.right, accRect.right);
        accRect.bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.bottom, accRect.bottom);
        accRect.left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/computeOffsets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>computeOffsets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
;
;
;
;
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) : null;
    var variation = placement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"]:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"]:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"]:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"]:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["end"]:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>detectOverflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getClippingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/computeOffsets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/rectToClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergePaddingObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$expandToHashMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/expandToHashMap.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
;
;
;
;
;
;
;
function detectOverflow(state, options) {
    if (options === void 0) {
        options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clippingParents"] : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewport"] : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"] : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergePaddingObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeof padding !== 'number' ? padding : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$expandToHashMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(padding, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basePlacements"]));
    var altContext = elementContext === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reference"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"];
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getClippingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? element : element.contextElement || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.reference);
    var popperOffsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"] && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"],
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"],
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>computeAutoPlacement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
;
;
;
;
function computeAutoPlacement(state, options) {
    if (options === void 0) {
        options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"] : _options$allowedAutoP;
    var variation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement);
    var placements = variation ? flipVariations ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variationPlacements"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variationPlacements"].filter(function(placement) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) === variation;
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basePlacements"];
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/flip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositeVariationPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeAutoPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
;
;
;
;
;
function getExpandedFallbackPlacements(placement) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auto"]) {
        return [];
    }
    var oppositePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositeVariationPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement),
        oppositePlacement,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositeVariationPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
        return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auto"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeAutoPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement);
        var isStartVariation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"];
        var isVertical = [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"] : isStartVariation ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"];
        if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mainVariationSide);
        }
        var altVariationSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mainVariationSide);
        var checks = [];
        if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
        }
        if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) {
                    return checks.slice(0, _i).every(function(check) {
                        return check;
                    });
                }
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/hide.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
;
;
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
        preventedOffsets = {
            x: 0,
            y: 0
        };
    }
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"]
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/offset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "distanceAndSkiddingToXY",
    ()=>distanceAndSkiddingToXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement);
    var invertDistance = [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"]
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"]
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"].reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset
};
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/computeOffsets.js [app-client] (ecmascript)");
;
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
};
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getAltAxis.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getAltAxis
]);
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getAltAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getAltAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/within.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getFreshSideObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
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
;
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement);
    var variation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(basePlacement);
    var altAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getAltAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) {
        return;
    }
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === 'y' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"];
        var altSide = mainAxis === 'y' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"];
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"] ? referenceRect[len] : popperRect[len];
        var maxLen = variation === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getFreshSideObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["within"])(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["within"])(tether ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(min, tetherMin) : min, offset, tether ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === 'x' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"];
        var _altSide = mainAxis === 'x' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"];
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === 'y' ? 'height' : 'width';
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"]
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withinMaxClamp"])(_tetherMin, _offset, _tetherMax) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["within"])(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "arrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "computeStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "eventListeners",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "flip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "hide",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "offset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "popperOffsets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "preventOverflow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/applyStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/arrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/computeStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/eventListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/flip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/hide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/offset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js [app-client] (ecmascript)");
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getHTMLElementScroll
]);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getNodeScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getHTMLElementScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js [app-client] (ecmascript)");
;
;
;
;
function getNodeScroll(node) {
    if (node === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(node)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getHTMLElementScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    }
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getCompositeRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    var isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    var offsetParentIsScaled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent);
    var rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent)) {
            offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
            offsets.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(documentElement);
        }
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/orderModifiers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>orderModifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)"); // source: https://stackoverflow.com/questions/49875255
;
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) {
                    sort(depModifier);
                }
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) {
            // check for visited object
            sort(modifier);
        }
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifierPhases"].reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/debounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>debounce
]);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) {
            pending = new Promise(function(resolve) {
                Promise.resolve().then(function() {
                    pending = undefined;
                    resolve(fn());
                });
            });
        }
        return pending;
    };
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/mergeByName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mergeByName
]);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/createPopper.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPopper",
    ()=>createPopper,
    "popperGenerator",
    ()=>popperGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getCompositeRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$orderModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/orderModifiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/debounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergeByName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/mergeByName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
        generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) {
            options = defaultOptions;
        }
        var state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(reference) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reference) : reference.contextElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reference.contextElement) : [],
                    popper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$orderModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergeByName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) {
                    return;
                }
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getCompositeRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reference, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper), state.options.strategy === 'fixed'),
                    popper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') {
                        state = fn({
                            state: state,
                            options: _options,
                            name: name,
                            instance: instance
                        }) || state;
                    }
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) {
            return instance;
        }
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) {
                options.onFirstUpdate(state);
            }
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules
;
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript) <export default as detectOverflow>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectOverflow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/popper.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPopper",
    ()=>createPopper,
    "defaultModifiers",
    ()=>defaultModifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/createPopper.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__detectOverflow$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript) <export default as detectOverflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/eventListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/computeStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/applyStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/offset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/flip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/arrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/hide.js [app-client] (ecmascript)");
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
var defaultModifiers = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
var createPopper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["popperGenerator"])({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules
;
;
;
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/popper-lite.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPopper",
    ()=>createPopper,
    "defaultModifiers",
    ()=>defaultModifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/createPopper.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__detectOverflow$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript) <export default as detectOverflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/eventListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/computeStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/applyStyles.js [app-client] (ecmascript)");
;
;
;
;
;
var defaultModifiers = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
var createPopper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["popperGenerator"])({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules
;
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "afterMain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["afterMain"],
    "afterRead",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["afterRead"],
    "afterWrite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["afterWrite"],
    "applyStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyStyles"],
    "arrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrow"],
    "auto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auto"],
    "basePlacements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basePlacements"],
    "beforeMain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beforeMain"],
    "beforeRead",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beforeRead"],
    "beforeWrite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beforeWrite"],
    "bottom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"],
    "clippingParents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clippingParents"],
    "computeStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeStyles"],
    "createPopper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPopper"],
    "createPopperBase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPopper"],
    "createPopperLite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$popper$2d$lite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPopper"],
    "detectOverflow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__detectOverflow$3e$__["detectOverflow"],
    "end",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["end"],
    "eventListeners",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventListeners"],
    "flip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flip"],
    "hide",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hide"],
    "left",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"],
    "main",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["main"],
    "modifierPhases",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifierPhases"],
    "offset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offset"],
    "placements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"],
    "popper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"],
    "popperGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["popperGenerator"],
    "popperOffsets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popperOffsets"],
    "preventOverflow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preventOverflow"],
    "read",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"],
    "reference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reference"],
    "right",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"],
    "start",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"],
    "top",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"],
    "variationPlacements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variationPlacements"],
    "viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewport"],
    "write",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["write"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/modifiers/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/createPopper.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__detectOverflow$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript) <export default as detectOverflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/popper.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$13__company$2f$youtube__download__pro$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$popper$2d$lite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/popper-lite.js [app-client] (ecmascript) <locals>");
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/bootstrap/dist/js/bootstrap.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e(__turbopack_context__.r("[project]/Desktop/13 company/youtube download pro/node_modules/@popperjs/core/lib/index.js [app-client] (ecmascript)")) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(t) {
    "use strict";
    function e(t) {
        const e = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (t) {
            for(const i in t)if ("default" !== i) {
                const s = Object.getOwnPropertyDescriptor(t, i);
                Object.defineProperty(e, i, s.get ? s : {
                    enumerable: !0,
                    get: ()=>t[i]
                });
            }
        }
        return e.default = t, Object.freeze(e);
    }
    const i = e(t), s = new Map, n = {
        set (t, e, i) {
            s.has(t) || s.set(t, new Map);
            const n = s.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
        },
        get: (t, e)=>s.has(t) && s.get(t).get(e) || null,
        remove (t, e) {
            if (!s.has(t)) return;
            const i = s.get(t);
            i.delete(e), 0 === i.size && s.delete(t);
        }
    }, o = "transitionend", r = (t)=>(t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e)=>`#${CSS.escape(e)}`)), t), a = (t)=>null == t ? `${t}` : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), l = (t)=>{
        t.dispatchEvent(new Event(o));
    }, c = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), h = (t)=>c(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(r(t)) : null, d = (t)=>{
        if (!c(t) || 0 === t.getClientRects().length) return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])");
        if (!i) return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i) return !1;
            if (null === e) return !1;
        }
        return e;
    }, u = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), _ = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? _(t.parentNode) : null;
    }, g = ()=>{}, f = (t)=>{
        t.offsetHeight;
    }, m = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, p = [], b = ()=>"rtl" === document.documentElement.dir, v = (t)=>{
        var e;
        e = ()=>{
            const e = m();
            if (e) {
                const i = t.NAME, s = e.fn[i];
                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = ()=>(e.fn[i] = s, t.jQueryInterface);
            }
        }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (const t of p)t();
        }), p.push(e)) : e();
    }, y = (t, e = [], i = t)=>"function" == typeof t ? t.call(...e) : i, w = (t, e, i = !0)=>{
        if (!i) return void y(t);
        const s = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
            const s = Number.parseFloat(e), n = Number.parseFloat(i);
            return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(e) + 5;
        let n = !1;
        const r = ({ target: i })=>{
            i === e && (n = !0, e.removeEventListener(o, r), y(t));
        };
        e.addEventListener(o, r), setTimeout(()=>{
            n || l(e);
        }, s);
    }, A = (t, e, i, s)=>{
        const n = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && s ? t[n - 1] : t[0] : (o += i ? 1 : -1, s && (o = (o + n) % n), t[Math.max(0, Math.min(o, n - 1))]);
    }, E = /[^.]*(?=\..*)\.|.*/, C = /\..*/, T = /::\d+$/, k = {};
    let $ = 1;
    const S = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, L = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function O(t, e) {
        return e && `${e}::${$++}` || t.uidEvent || $++;
    }
    function I(t) {
        const e = O(t);
        return t.uidEvent = e, k[e] = k[e] || {}, k[e];
    }
    function D(t, e, i = null) {
        return Object.values(t).find((t)=>t.callable === e && t.delegationSelector === i);
    }
    function N(t, e, i) {
        const s = "string" == typeof e, n = s ? i : e || i;
        let o = j(t);
        return L.has(o) || (o = t), [
            s,
            n,
            o
        ];
    }
    function P(t, e, i, s, n) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = N(e, i, s);
        if (e in S) {
            const t = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                };
            r = t(r);
        }
        const l = I(t), c = l[a] || (l[a] = {}), h = D(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && n);
        const d = O(r, e.replace(E, "")), u = o ? function(t, e, i) {
            return function s(n) {
                const o = t.querySelectorAll(e);
                for(let { target: r } = n; r && r !== this; r = r.parentNode)for (const a of o)if (a === r) return z(n, {
                    delegateTarget: r
                }), s.oneOff && F.off(t, n.type, e, i), i.apply(r, [
                    n
                ]);
            };
        }(t, i, r) : function(t, e) {
            return function i(s) {
                return z(s, {
                    delegateTarget: t
                }), i.oneOff && F.off(t, s.type, e), e.apply(t, [
                    s
                ]);
            };
        }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
    }
    function x(t, e, i, s, n) {
        const o = D(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
    }
    function M(t, e, i, s) {
        const n = e[i] || {};
        for (const [o, r] of Object.entries(n))o.includes(s) && x(t, e, i, r.callable, r.delegationSelector);
    }
    function j(t) {
        return t = t.replace(C, ""), S[t] || t;
    }
    const F = {
        on (t, e, i, s) {
            P(t, e, i, s, !1);
        },
        one (t, e, i, s) {
            P(t, e, i, s, !0);
        },
        off (t, e, i, s) {
            if ("string" != typeof e || !t) return;
            const [n, o, r] = N(e, i, s), a = r !== e, l = I(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l))M(t, l, i, e.slice(1));
                for (const [i, s] of Object.entries(c)){
                    const n = i.replace(T, "");
                    a && !e.includes(n) || x(t, l, r, s.callable, s.delegationSelector);
                }
            } else {
                if (!Object.keys(c).length) return;
                x(t, l, r, o, n ? i : null);
            }
        },
        trigger (t, e, i) {
            if ("string" != typeof e || !t) return null;
            const s = m();
            let n = null, o = !0, r = !0, a = !1;
            e !== j(e) && s && (n = s.Event(e, i), s(t).trigger(n), o = !n.isPropagationStopped(), r = !n.isImmediatePropagationStopped(), a = n.isDefaultPrevented());
            const l = z(new Event(e, {
                bubbles: o,
                cancelable: !0
            }), i);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l;
        }
    };
    function z(t, e = {}) {
        for (const [i, s] of Object.entries(e))try {
            t[i] = s;
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: ()=>s
            });
        }
        return t;
    }
    function H(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function B(t) {
        return t.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    const q = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${B(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${B(e)}`);
        },
        getDataAttributes (t) {
            if (!t) return {};
            const e = {}, i = Object.keys(t.dataset).filter((t)=>t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const s of i){
                let i = s.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1), e[i] = H(t.dataset[s]);
            }
            return e;
        },
        getDataAttribute: (t, e)=>H(t.getAttribute(`data-bs-${B(e)}`))
    };
    class W {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = c(e) ? q.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...c(e) ? q.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [i, s] of Object.entries(e)){
                const e = t[i], n = c(e) ? "element" : a(e);
                if (!new RegExp(s).test(n)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${n}" but expected type "${s}".`);
            }
        }
    }
    class R extends W {
        constructor(t, e){
            super(), (t = h(t)) && (this._element = t, this._config = this._getConfig(e), n.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            n.remove(this._element, this.constructor.DATA_KEY), F.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            w(t, e, i);
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return n.get(h(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.3.8";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const K = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e ? e.split(",").map((t)=>r(t)).join(",") : null;
    }, V = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t, e)=>[].concat(...t.children).filter((t)=>t.matches(e)),
        parents (t, e) {
            const i = [];
            let s = t.parentNode.closest(e);
            for(; s;)i.push(s), s = s.parentNode.closest(e);
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`).join(",");
            return this.find(e, t).filter((t)=>!u(t) && d(t));
        },
        getSelectorFromElement (t) {
            const e = K(t);
            return e && V.findOne(e) ? e : null;
        },
        getElementFromSelector (t) {
            const e = K(t);
            return e ? V.findOne(e) : null;
        },
        getMultipleElementsFromSelector (t) {
            const e = K(t);
            return e ? V.find(e) : [];
        }
    }, Q = (t, e = "hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`, s = t.NAME;
        F.on(document, i, `[data-bs-dismiss="${s}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), u(this)) return;
            const n = V.getElementFromSelector(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(n)[e]();
        });
    }, X = ".bs.alert", Y = `close${X}`, U = `closed${X}`;
    class G extends R {
        static get NAME() {
            return "alert";
        }
        close() {
            if (F.trigger(this._element, Y).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), F.trigger(this._element, U), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = G.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    Q(G, "close"), v(G);
    const J = '[data-bs-toggle="button"]';
    class Z extends R {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Z.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    F.on(document, "click.bs.button.data-api", J, (t)=>{
        t.preventDefault();
        const e = t.target.closest(J);
        Z.getOrCreateInstance(e).toggle();
    }), v(Z);
    const tt = ".bs.swipe", et = `touchstart${tt}`, it = `touchmove${tt}`, st = `touchend${tt}`, nt = `pointerdown${tt}`, ot = `pointerup${tt}`, rt = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }, at = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class lt extends W {
        constructor(t, e){
            super(), this._element = t, t && lt.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
        }
        static get Default() {
            return rt;
        }
        static get DefaultType() {
            return at;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            F.off(this._element, tt);
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), y(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && y(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents ? (F.on(this._element, nt, (t)=>this._start(t)), F.on(this._element, ot, (t)=>this._end(t)), this._element.classList.add("pointer-event")) : (F.on(this._element, et, (t)=>this._start(t)), F.on(this._element, it, (t)=>this._move(t)), F.on(this._element, st, (t)=>this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const ct = ".bs.carousel", ht = ".data-api", dt = "ArrowLeft", ut = "ArrowRight", _t = "next", gt = "prev", ft = "left", mt = "right", pt = `slide${ct}`, bt = `slid${ct}`, vt = `keydown${ct}`, yt = `mouseenter${ct}`, wt = `mouseleave${ct}`, At = `dragstart${ct}`, Et = `load${ct}${ht}`, Ct = `click${ct}${ht}`, Tt = "carousel", kt = "active", $t = ".active", St = ".carousel-item", Lt = $t + St, Ot = {
        [dt]: mt,
        [ut]: ft
    }, It = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }, Dt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class Nt extends R {
        constructor(t, e){
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = V.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Tt && this.cycle();
        }
        static get Default() {
            return It;
        }
        static get DefaultType() {
            return Dt;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(_t);
        }
        nextWhenVisible() {
            !document.hidden && d(this._element) && this.next();
        }
        prev() {
            this._slide(gt);
        }
        pause() {
            this._isSliding && l(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? F.one(this._element, bt, ()=>this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void F.one(this._element, bt, ()=>this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const s = t > i ? _t : gt;
            this._slide(s, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t;
        }
        _addEventListeners() {
            this._config.keyboard && F.on(this._element, vt, (t)=>this._keydown(t)), "hover" === this._config.pause && (F.on(this._element, yt, ()=>this.pause()), F.on(this._element, wt, ()=>this._maybeEnableCycle())), this._config.touch && lt.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of V.find(".carousel-item img", this._element))F.on(t, At, (t)=>t.preventDefault());
            const t = {
                leftCallback: ()=>this._slide(this._directionToOrder(ft)),
                rightCallback: ()=>this._slide(this._directionToOrder(mt)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval));
                }
            };
            this._swipeHelper = new lt(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Ot[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = V.findOne($t, this._indicatorsElement);
            e.classList.remove(kt), e.removeAttribute("aria-current");
            const i = V.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(kt), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(), s = t === _t, n = e || A(this._getItems(), i, s, this._config.wrap);
            if (n === i) return;
            const o = this._getItemIndex(n), r = (e)=>F.trigger(this._element, e, {
                    relatedTarget: n,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r(pt).defaultPrevented) return;
            if (!i || !n) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = n;
            const l = s ? "carousel-item-start" : "carousel-item-end", c = s ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(c), f(n), i.classList.add(l), n.classList.add(l), this._queueCallback(()=>{
                n.classList.remove(l, c), n.classList.add(kt), i.classList.remove(kt, c, l), this._isSliding = !1, r(bt);
            }, i, this._isAnimated()), a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return V.findOne(Lt, this._element);
        }
        _getItems() {
            return V.find(St, this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(t) {
            return b() ? t === ft ? gt : _t : t === ft ? _t : gt;
        }
        _orderToDirection(t) {
            return b() ? t === gt ? ft : mt : t === gt ? mt : ft;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Nt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    F.on(document, Ct, "[data-bs-slide], [data-bs-slide-to]", function(t) {
        const e = V.getElementFromSelector(this);
        if (!e || !e.classList.contains(Tt)) return;
        t.preventDefault();
        const i = Nt.getOrCreateInstance(e), s = this.getAttribute("data-bs-slide-to");
        return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === q.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
    }), F.on(window, Et, ()=>{
        const t = V.find('[data-bs-ride="carousel"]');
        for (const e of t)Nt.getOrCreateInstance(e);
    }), v(Nt);
    const Pt = ".bs.collapse", xt = `show${Pt}`, Mt = `shown${Pt}`, jt = `hide${Pt}`, Ft = `hidden${Pt}`, zt = `click${Pt}.data-api`, Ht = "show", Bt = "collapse", qt = "collapsing", Wt = `:scope .${Bt} .${Bt}`, Rt = '[data-bs-toggle="collapse"]', Kt = {
        parent: null,
        toggle: !0
    }, Vt = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class Qt extends R {
        constructor(t, e){
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = V.find(Rt);
            for (const t of i){
                const e = V.getSelectorFromElement(t), i = V.find(e).filter((t)=>t === this._element);
                null !== e && i.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return Kt;
        }
        static get DefaultType() {
            return Vt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t)=>t !== this._element).map((t)=>Qt.getOrCreateInstance(t, {
                    toggle: !1
                }))), t.length && t[0]._isTransitioning) return;
            if (F.trigger(this._element, xt).defaultPrevented) return;
            for (const e of t)e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Bt), this._element.classList.add(qt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(qt), this._element.classList.add(Bt, Ht), this._element.style[e] = "", F.trigger(this._element, Mt);
            }, this._element, !0), this._element.style[e] = `${this._element[i]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (F.trigger(this._element, jt).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, f(this._element), this._element.classList.add(qt), this._element.classList.remove(Bt, Ht);
            for (const t of this._triggerArray){
                const e = V.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([
                    t
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(qt), this._element.classList.add(Bt), F.trigger(this._element, Ft);
            }, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(Ht);
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = h(t.parent), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Rt);
            for (const e of t){
                const t = V.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([
                    e
                ], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = V.find(Wt, this._config.parent);
            return V.find(t, this._config.parent).filter((t)=>!e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t)i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
                const i = Qt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    F.on(document, zt, Rt, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of V.getMultipleElementsFromSelector(this))Qt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle();
    }), v(Qt);
    const Xt = "dropdown", Yt = ".bs.dropdown", Ut = ".data-api", Gt = "ArrowUp", Jt = "ArrowDown", Zt = `hide${Yt}`, te = `hidden${Yt}`, ee = `show${Yt}`, ie = `shown${Yt}`, se = `click${Yt}${Ut}`, ne = `keydown${Yt}${Ut}`, oe = `keyup${Yt}${Ut}`, re = "show", ae = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', le = `${ae}.${re}`, ce = ".dropdown-menu", he = b() ? "top-end" : "top-start", de = b() ? "top-start" : "top-end", ue = b() ? "bottom-end" : "bottom-start", _e = b() ? "bottom-start" : "bottom-end", ge = b() ? "left-start" : "right-start", fe = b() ? "right-start" : "left-start", me = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [
            0,
            2
        ],
        popperConfig: null,
        reference: "toggle"
    }, pe = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class be extends R {
        constructor(t, e){
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = V.next(this._element, ce)[0] || V.prev(this._element, ce)[0] || V.findOne(ce, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return me;
        }
        static get DefaultType() {
            return pe;
        }
        static get NAME() {
            return Xt;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (u(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!F.trigger(this._element, ee, t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children))F.on(t, "mouseover", g);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(re), this._element.classList.add(re), F.trigger(this._element, ie, t);
            }
        }
        hide() {
            if (u(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!F.trigger(this._element, Zt, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))F.off(t, "mouseover", g);
                this._popper && this._popper.destroy(), this._menu.classList.remove(re), this._element.classList.remove(re), this._element.setAttribute("aria-expanded", "false"), q.removeDataAttribute(this._menu, "popper"), F.trigger(this._element, te, t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !c(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Xt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : c(this._config.reference) ? t = h(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = i.createPopper(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(re);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return ge;
            if (t.classList.contains("dropstart")) return fe;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? de : he : e ? _e : ue;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return (this._inNavbar || "static" === this._config.display) && (q.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ...y(this._config.popperConfig, [
                    void 0,
                    t
                ])
            };
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t)=>d(t));
            i.length && A(i, e, t === Jt, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = be.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = V.find(le);
            for (const i of e){
                const e = be.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const s = t.composedPath(), n = s.includes(e._menu);
                if (s.includes(e._element) || "inside" === e._config.autoClose && !n || "outside" === e._config.autoClose && n) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, s = [
                Gt,
                Jt
            ].includes(t.key);
            if (!s && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const n = this.matches(ae) ? this : V.prev(this, ae)[0] || V.next(this, ae)[0] || V.findOne(ae, t.delegateTarget.parentNode), o = be.getOrCreateInstance(n);
            if (s) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
        }
    }
    F.on(document, ne, ae, be.dataApiKeydownHandler), F.on(document, ne, ce, be.dataApiKeydownHandler), F.on(document, se, be.clearMenus), F.on(document, oe, be.clearMenus), F.on(document, se, ae, function(t) {
        t.preventDefault(), be.getOrCreateInstance(this).toggle();
    }), v(be);
    const ve = "backdrop", ye = "show", we = `mousedown.bs.${ve}`, Ae = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }, Ee = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Ce extends W {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        static get Default() {
            return Ae;
        }
        static get DefaultType() {
            return Ee;
        }
        static get NAME() {
            return ve;
        }
        show(t) {
            if (!this._config.isVisible) return void y(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && f(e), e.classList.add(ye), this._emulateAnimation(()=>{
                y(t);
            });
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(ye), this._emulateAnimation(()=>{
                this.dispose(), y(t);
            })) : y(t);
        }
        dispose() {
            this._isAppended && (F.off(this._element, we), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return t.rootElement = h(t.rootElement), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), F.on(t, we, ()=>{
                y(this._config.clickCallback);
            }), this._isAppended = !0;
        }
        _emulateAnimation(t) {
            w(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Te = ".bs.focustrap", ke = `focusin${Te}`, $e = `keydown.tab${Te}`, Se = "backward", Le = {
        autofocus: !0,
        trapElement: null
    }, Oe = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class Ie extends W {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
            return Le;
        }
        static get DefaultType() {
            return Oe;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), F.off(document, Te), F.on(document, ke, (t)=>this._handleFocusin(t)), F.on(document, $e, (t)=>this._handleKeydown(t)), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, F.off(document, Te));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = V.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === Se ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Se : "forward");
        }
    }
    const De = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Ne = ".sticky-top", Pe = "padding-right", xe = "margin-right";
    class Me {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, Pe, (e)=>e + t), this._setElementAttributes(De, Pe, (e)=>e + t), this._setElementAttributes(Ne, xe, (e)=>e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Pe), this._resetElementAttributes(De, Pe), this._resetElementAttributes(Ne, xe);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, i) {
            const s = this.getWidth();
            this._applyManipulationCallback(t, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + s) return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(n))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && q.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t)=>{
                const i = q.getDataAttribute(t, e);
                null !== i ? (q.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (c(t)) e(t);
            else for (const i of V.find(t, this._element))e(i);
        }
    }
    const je = ".bs.modal", Fe = `hide${je}`, ze = `hidePrevented${je}`, He = `hidden${je}`, Be = `show${je}`, qe = `shown${je}`, We = `resize${je}`, Re = `click.dismiss${je}`, Ke = `mousedown.dismiss${je}`, Ve = `keydown.dismiss${je}`, Qe = `click${je}.data-api`, Xe = "modal-open", Ye = "show", Ue = "modal-static", Ge = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }, Je = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class Ze extends R {
        constructor(t, e){
            super(t, e), this._dialog = V.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Me, this._addEventListeners();
        }
        static get Default() {
            return Ge;
        }
        static get DefaultType() {
            return Je;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || F.trigger(this._element, Be, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Xe), this._adjustDialog(), this._backdrop.show(()=>this._showElement(t)));
        }
        hide() {
            this._isShown && !this._isTransitioning && (F.trigger(this._element, Fe).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ye), this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
            F.off(window, je), F.off(this._dialog, je), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Ce({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new Ie({
                trapElement: this._element
            });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = V.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), f(this._element), this._element.classList.add(Ye), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, F.trigger(this._element, qe, {
                    relatedTarget: t
                });
            }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
            F.on(this._element, Ve, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }), F.on(window, We, ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog();
            }), F.on(this._element, Ke, (t)=>{
                F.one(this._element, Re, (e)=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                });
            });
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(Xe), this._resetAdjustments(), this._scrollBar.reset(), F.trigger(this._element, He);
            });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (F.trigger(this._element, ze).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(Ue) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Ue), this._queueCallback(()=>{
                this._element.classList.remove(Ue), this._queueCallback(()=>{
                    this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                const t = b() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = b() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = Ze.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    F.on(document, Qe, '[data-bs-toggle="modal"]', function(t) {
        const e = V.getElementFromSelector(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), F.one(e, Be, (t)=>{
            t.defaultPrevented || F.one(e, He, ()=>{
                d(this) && this.focus();
            });
        });
        const i = V.findOne(".modal.show");
        i && Ze.getInstance(i).hide(), Ze.getOrCreateInstance(e).toggle(this);
    }), Q(Ze), v(Ze);
    const ti = ".bs.offcanvas", ei = ".data-api", ii = `load${ti}${ei}`, si = "show", ni = "showing", oi = "hiding", ri = ".offcanvas.show", ai = `show${ti}`, li = `shown${ti}`, ci = `hide${ti}`, hi = `hidePrevented${ti}`, di = `hidden${ti}`, ui = `resize${ti}`, _i = `click${ti}${ei}`, gi = `keydown.dismiss${ti}`, fi = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, mi = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class pi extends R {
        constructor(t, e){
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
            return fi;
        }
        static get DefaultType() {
            return mi;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || F.trigger(this._element, ai, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new Me).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ni), this._queueCallback(()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(si), this._element.classList.remove(ni), F.trigger(this._element, li, {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (F.trigger(this._element, ci).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(oi), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.classList.remove(si, oi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new Me).reset(), F.trigger(this._element, di);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ce({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : F.trigger(this._element, hi);
                } : null
            });
        }
        _initializeFocusTrap() {
            return new Ie({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            F.on(this._element, gi, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : F.trigger(this._element, hi));
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = pi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    F.on(document, _i, '[data-bs-toggle="offcanvas"]', function(t) {
        const e = V.getElementFromSelector(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), u(this)) return;
        F.one(e, di, ()=>{
            d(this) && this.focus();
        });
        const i = V.findOne(ri);
        i && i !== e && pi.getInstance(i).hide(), pi.getOrCreateInstance(e).toggle(this);
    }), F.on(window, ii, ()=>{
        for (const t of V.find(ri))pi.getOrCreateInstance(t).show();
    }), F.on(window, ui, ()=>{
        for (const t of V.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed" !== getComputedStyle(t).position && pi.getOrCreateInstance(t).hide();
    }), Q(pi), v(pi);
    const bi = {
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            /^aria-[\w-]*$/i
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, vi = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), yi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, wi = (t, e)=>{
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !vi.has(i) || Boolean(yi.test(t.nodeValue)) : e.filter((t)=>t instanceof RegExp).some((t)=>t.test(i));
    }, Ai = {
        allowList: bi,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }, Ei = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }, Ci = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class Ti extends W {
        constructor(t){
            super(), this._config = this._getConfig(t);
        }
        static get Default() {
            return Ai;
        }
        static get DefaultType() {
            return Ei;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content).map((t)=>this._resolvePossibleFunction(t)).filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = {
                ...this._config.content,
                ...t
            }, this;
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content))this._setContent(t, i, e);
            const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))super._typeCheckConfig({
                selector: e,
                entry: i
            }, Ci);
        }
        _setContent(t, e, i) {
            const s = V.findOne(i, t);
            s && ((e = this._resolvePossibleFunction(e)) ? c(e) ? this._putElementInTemplate(h(e), s) : this._config.html ? s.innerHTML = this._maybeSanitize(e) : s.textContent = e : s.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const s = (new window.DOMParser).parseFromString(t, "text/html"), n = [].concat(...s.body.querySelectorAll("*"));
                for (const t of n){
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue;
                    }
                    const s = [].concat(...t.attributes), n = [].concat(e["*"] || [], e[i] || []);
                    for (const e of s)wi(e, n) || t.removeAttribute(e.nodeName);
                }
                return s.body.innerHTML;
            }(t, this._config.allowList, this._config.sanitizeFn) : t;
        }
        _resolvePossibleFunction(t) {
            return y(t, [
                void 0,
                this
            ]);
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const ki = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), $i = "fade", Si = "show", Li = ".tooltip-inner", Oi = ".modal", Ii = "hide.bs.modal", Di = "hover", Ni = "focus", Pi = "click", xi = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: b() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: b() ? "right" : "left"
    }, Mi = {
        allowList: bi,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        html: !1,
        offset: [
            0,
            6
        ],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }, ji = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class Fi extends R {
        constructor(t, e){
            if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
            return Mi;
        }
        static get DefaultType() {
            return ji;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && (this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout), F.off(this._element.closest(Oi), Ii, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = F.trigger(this._element, this.constructor.eventName("show")), e = (_(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: s } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(i), F.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(Si), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))F.on(t, "mouseover", g);
            this._queueCallback(()=>{
                F.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1;
            }, this.tip, this._isAnimated());
        }
        hide() {
            if (this._isShown() && !F.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(Si), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))F.off(t, "mouseover", g);
                this._activeTrigger[Pi] = !1, this._activeTrigger[Ni] = !1, this._activeTrigger[Di] = !1, this._isHovered = null, this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), F.trigger(this._element, this.constructor.eventName("hidden")));
                }, this.tip, this._isAnimated());
            }
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove($i, Si), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t)=>{
                do {
                    t += Math.floor(1e6 * Math.random());
                }while (document.getElementById(t))
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add($i), e;
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ti({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory;
        }
        _getContentForTemplate() {
            return {
                [Li]: this._getTitle()
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains($i);
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Si);
        }
        _createPopper(t) {
            const e = y(this._config.placement, [
                this,
                t,
                this._element
            ]), s = xi[e.toUpperCase()];
            return i.createPopper(this._element, t, this._getPopperConfig(s));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return y(t, [
                this._element,
                this._element
            ]);
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t)=>{
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        }
                    }
                ]
            };
            return {
                ...e,
                ...y(this._config.popperConfig, [
                    void 0,
                    e
                ])
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)if ("click" === e) F.on(this._element, this.constructor.eventName("click"), this._config.selector, (t)=>{
                const e = this._initializeOnDelegatedTarget(t);
                e._activeTrigger[Pi] = !(e._isShown() && e._activeTrigger[Pi]), e.toggle();
            });
            else if ("manual" !== e) {
                const t = e === Di ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i = e === Di ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                F.on(this._element, t, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? Ni : Di] = !0, e._enter();
                }), F.on(this._element, i, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? Ni : Di] = e._element.contains(t.relatedTarget), e._leave();
                });
            }
            this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, F.on(this._element.closest(Oi), Ii, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(()=>{
                this._isHovered && this.show();
            }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(()=>{
                this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = q.getDataAttributes(this._element);
            for (const t of Object.keys(e))ki.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : h(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config))this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1, t.trigger = "manual", t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Fi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    v(Fi);
    const zi = ".popover-header", Hi = ".popover-body", Bi = {
        ...Fi.Default,
        content: "",
        offset: [
            0,
            8
        ],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, qi = {
        ...Fi.DefaultType,
        content: "(null|string|element|function)"
    };
    class Wi extends Fi {
        static get Default() {
            return Bi;
        }
        static get DefaultType() {
            return qi;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                [zi]: this._getTitle(),
                [Hi]: this._getContent()
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Wi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    v(Wi);
    const Ri = ".bs.scrollspy", Ki = `activate${Ri}`, Vi = `click${Ri}`, Qi = `load${Ri}.data-api`, Xi = "active", Yi = "[href]", Ui = ".nav-link", Gi = `${Ui}, .nav-item > ${Ui}, .list-group-item`, Ji = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [
            .1,
            .5,
            1
        ]
    }, Zi = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class ts extends R {
        constructor(t, e){
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh();
        }
        static get Default() {
            return Ji;
        }
        static get DefaultType() {
            return Zi;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.target = h(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t)=>Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (F.off(this._config.target, Vi), F.on(this._config.target, Vi, Yi, (t)=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window, s = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: s,
                        behavior: "smooth"
                    });
                    i.scrollTop = s;
                }
            }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t)=>this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t)=>this._targetLinks.get(`#${t.target.id}`), i = (t)=>{
                this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t));
            }, s = (this._rootElement || document.documentElement).scrollTop, n = s >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = s;
            for (const o of t){
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (n && t) {
                    if (i(o), !s) return;
                } else n || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = V.find(Yi, this._config.target);
            for (const e of t){
                if (!e.hash || u(e)) continue;
                const t = V.findOne(decodeURI(e.hash), this._element);
                d(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Xi), this._activateParents(t), F.trigger(this._element, Ki, {
                relatedTarget: t
            }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) V.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Xi);
            else for (const e of V.parents(t, ".nav, .list-group"))for (const t of V.prev(e, Gi))t.classList.add(Xi);
        }
        _clearActiveClass(t) {
            t.classList.remove(Xi);
            const e = V.find(`${Yi}.${Xi}`, t);
            for (const t of e)t.classList.remove(Xi);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ts.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    F.on(window, Qi, ()=>{
        for (const t of V.find('[data-bs-spy="scroll"]'))ts.getOrCreateInstance(t);
    }), v(ts);
    const es = ".bs.tab", is = `hide${es}`, ss = `hidden${es}`, ns = `show${es}`, os = `shown${es}`, rs = `click${es}`, as = `keydown${es}`, ls = `load${es}`, cs = "ArrowLeft", hs = "ArrowRight", ds = "ArrowUp", us = "ArrowDown", _s = "Home", gs = "End", fs = "active", ms = "fade", ps = "show", bs = ".dropdown-toggle", vs = `:not(${bs})`, ys = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ws = `.nav-link${vs}, .list-group-item${vs}, [role="tab"]${vs}, ${ys}`, As = `.${fs}[data-bs-toggle="tab"], .${fs}[data-bs-toggle="pill"], .${fs}[data-bs-toggle="list"]`;
    class Es extends R {
        constructor(t){
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), F.on(this._element, as, (t)=>this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), i = e ? F.trigger(e, is, {
                relatedTarget: t
            }) : null;
            F.trigger(t, ns, {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t && (t.classList.add(fs), this._activate(V.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), F.trigger(t, os, {
                    relatedTarget: e
                })) : t.classList.add(ps);
            }, t, t.classList.contains(ms)));
        }
        _deactivate(t, e) {
            t && (t.classList.remove(fs), t.blur(), this._deactivate(V.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), F.trigger(t, ss, {
                    relatedTarget: e
                })) : t.classList.remove(ps);
            }, t, t.classList.contains(ms)));
        }
        _keydown(t) {
            if (![
                cs,
                hs,
                ds,
                us,
                _s,
                gs
            ].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t)=>!u(t));
            let i;
            if ([
                _s,
                gs
            ].includes(t.key)) i = e[t.key === _s ? 0 : e.length - 1];
            else {
                const s = [
                    hs,
                    us
                ].includes(t.key);
                i = A(e, t.target, s, !0);
            }
            i && (i.focus({
                preventScroll: !0
            }), Es.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return V.find(ws, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t)=>this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = V.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const s = (t, s)=>{
                const n = V.findOne(t, i);
                n && n.classList.toggle(s, e);
            };
            s(bs, fs), s(".dropdown-menu", ps), i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(fs);
        }
        _getInnerElement(t) {
            return t.matches(ws) ? t : V.findOne(ws, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Es.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    F.on(document, rs, ys, function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), u(this) || Es.getOrCreateInstance(this).show();
    }), F.on(window, ls, ()=>{
        for (const t of V.find(As))Es.getOrCreateInstance(t);
    }), v(Es);
    const Cs = ".bs.toast", Ts = `mouseover${Cs}`, ks = `mouseout${Cs}`, $s = `focusin${Cs}`, Ss = `focusout${Cs}`, Ls = `hide${Cs}`, Os = `hidden${Cs}`, Is = `show${Cs}`, Ds = `shown${Cs}`, Ns = "hide", Ps = "show", xs = "showing", Ms = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, js = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class Fs extends R {
        constructor(t, e){
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
            return js;
        }
        static get DefaultType() {
            return Ms;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            F.trigger(this._element, Is).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Ns), f(this._element), this._element.classList.add(Ps, xs), this._queueCallback(()=>{
                this._element.classList.remove(xs), F.trigger(this._element, Ds), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this.isShown() && (F.trigger(this._element, Ls).defaultPrevented || (this._element.classList.add(xs), this._queueCallback(()=>{
                this._element.classList.add(Ns), this._element.classList.remove(xs, Ps), F.trigger(this._element, Os);
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(Ps), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(Ps);
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            F.on(this._element, Ts, (t)=>this._onInteraction(t, !0)), F.on(this._element, ks, (t)=>this._onInteraction(t, !1)), F.on(this._element, $s, (t)=>this._onInteraction(t, !0)), F.on(this._element, Ss, (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Fs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return Q(Fs), v(Fs), {
        Alert: G,
        Button: Z,
        Carousel: Nt,
        Collapse: Qt,
        Dropdown: be,
        Modal: Ze,
        Offcanvas: pi,
        Popover: Wi,
        ScrollSpy: ts,
        Tab: Es,
        Toast: Fs,
        Tooltip: Fi
    };
}); //# sourceMappingURL=bootstrap.min.js.map
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/aos/dist/aos.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0);
    }([
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var i = Object.assign || function(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = arguments[t];
                    for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
            }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, j = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
            }, O = function() {
                w = (0, h.default)(), j();
            }, M = function() {
                w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                });
            }, S = function(e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
            }, _ = function(e) {
                x = i(x, e), w = (0, h.default)();
                var t = document.all && !window.atob;
                return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && [
                    "complete",
                    "interactive"
                ].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                    j(!0);
                }) : document.addEventListener(x.startEvent, function() {
                    j(!0);
                }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                    (0, b.default)(w, x.once);
                }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
            };
            e.exports = {
                init: _,
                refresh: j,
                refreshHard: O
            };
        },
        function(e, t) {},
        ,
        ,
        ,
        ,
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function o(t) {
                        var n = b, o = v;
                        return b = v = void 0, k = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return k = e, h = setTimeout(f, t), M ? o(e) : g;
                    }
                    function a(e) {
                        var n = e - w, o = e - k, i = t - n;
                        return S ? j(i, y - o) : i;
                    }
                    function c(e) {
                        var n = e - w, o = e - k;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = O();
                        return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(O());
                    }
                    function m() {
                        var e = O(), n = c(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), o(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, k = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e, t, o) {
                    var r = !0, a = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: a
                    });
                }
                function i(e) {
                    var t = "undefined" == typeof e ? "undefined" : c(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function r(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                }
                function a(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                }
                function u(e) {
                    if ("number" == typeof e) return e;
                    if (a(e)) return f;
                    if (i(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(l, "");
                    var n = m.test(e);
                    return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                }
                var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                    return h.Date.now();
                };
                e.exports = o;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function i(t) {
                        var n = b, o = v;
                        return b = v = void 0, O = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return O = e, h = setTimeout(f, t), M ? i(e) : g;
                    }
                    function u(e) {
                        var n = e - w, o = e - O, i = t - n;
                        return S ? x(i, y - o) : i;
                    }
                    function s(e) {
                        var n = e - w, o = e - O;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = j();
                        return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(j());
                    }
                    function m() {
                        var e = j(), n = s(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), i(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, O = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(c);
                    return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e) {
                    var t = "undefined" == typeof e ? "undefined" : u(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function i(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                }
                function r(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                }
                function a(e) {
                    if ("number" == typeof e) return e;
                    if (r(e)) return s;
                    if (o(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var n = p.test(e);
                    return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                }
                var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                    return g.Date.now();
                };
                e.exports = n;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            "use strict";
            function n(e) {
                var t = void 0, o = void 0, i = void 0;
                for(t = 0; t < e.length; t += 1){
                    if (o = e[t], o.dataset && o.dataset.aos) return !0;
                    if (i = o.children && n(o.children)) return !0;
                }
                return !1;
            }
            function o() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            }
            function i() {
                return !!o();
            }
            function r(e, t) {
                var n = window.document, i = o(), r = new i(a);
                u = t, r.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                });
            }
            function a(e) {
                e && e.forEach(function(e) {
                    var t = Array.prototype.slice.call(e.addedNodes), o = Array.prototype.slice.call(e.removedNodes), i = t.concat(o);
                    if (n(i)) return u();
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function() {};
            t.default = {
                isSupported: i,
                ready: r
            };
        },
        function(e, t) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o() {
                return navigator.userAgent || navigator.vendor || window.opera || "";
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                };
            }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                function e() {
                    n(this, e);
                }
                return i(e, [
                    {
                        key: "phone",
                        value: function() {
                            var e = o();
                            return !(!r.test(e) && !a.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "mobile",
                        value: function() {
                            var e = o();
                            return !(!u.test(e) && !c.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone();
                        }
                    }
                ]), e;
            }();
            t.default = new s;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e, t, n) {
                var o = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
            }, o = function(e, t) {
                var o = window.pageYOffset, i = window.innerHeight;
                e.forEach(function(e, r) {
                    n(e, i + o, t);
                });
            };
            t.default = o;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(12), r = o(i), a = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                }), e;
            };
            t.default = a;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(13), r = o(i), a = function(e, t) {
                var n = 0, o = 0, i = window.innerHeight, a = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
                switch(a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement){
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += i / 2;
                        break;
                    case "bottom-center":
                        n += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += i;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + i;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + i;
                }
                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
            };
            t.default = a;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                for(var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: n,
                    left: t
                };
            };
            t.default = n;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                    return {
                        node: e
                    };
                });
            };
            t.default = n;
        }
    ]);
});
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/13 company/youtube download pro/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Desktop/13 company/youtube download pro/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    const t = new Map, e = {
        set (e, i, n) {
            t.has(e) || t.set(e, new Map);
            const s = t.get(e);
            s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
        },
        get: (e, i)=>t.has(e) && t.get(e).get(i) || null,
        remove (e, i) {
            if (!t.has(e)) return;
            const n = t.get(e);
            n.delete(i), 0 === n.size && t.delete(e);
        }
    }, i = "transitionend", n = (t)=>(t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e)=>`#${CSS.escape(e)}`)), t), s = (t)=>null == t ? `${t}` : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), o = (t)=>{
        t.dispatchEvent(new Event(i));
    }, r = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), a = (t)=>r(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null, l = (t)=>{
        if (!r(t) || 0 === t.getClientRects().length) return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])");
        if (!i) return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i) return !1;
            if (null === e) return !1;
        }
        return e;
    }, c = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), h = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
    }, d = ()=>{}, u = (t)=>{
        t.offsetHeight;
    }, f = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, p = [], m = ()=>"rtl" === document.documentElement.dir, g = (t)=>{
        var e;
        e = ()=>{
            const e = f();
            if (e) {
                const i = t.NAME, n = e.fn[i];
                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = ()=>(e.fn[i] = n, t.jQueryInterface);
            }
        }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (const t of p)t();
        }), p.push(e)) : e();
    }, _ = (t, e = [], i = t)=>"function" == typeof t ? t.call(...e) : i, b = (t, e, n = !0)=>{
        if (!n) return void _(t);
        const s = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
            const n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(e) + 5;
        let r = !1;
        const a = ({ target: n })=>{
            n === e && (r = !0, e.removeEventListener(i, a), _(t));
        };
        e.addEventListener(i, a), setTimeout(()=>{
            r || o(e);
        }, s);
    }, v = (t, e, i, n)=>{
        const s = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    }, y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, A = /::\d+$/, E = {};
    let T = 1;
    const C = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, O = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function x(t, e) {
        return e && `${e}::${T++}` || t.uidEvent || T++;
    }
    function k(t) {
        const e = x(t);
        return t.uidEvent = e, E[e] = E[e] || {}, E[e];
    }
    function L(t, e, i = null) {
        return Object.values(t).find((t)=>t.callable === e && t.delegationSelector === i);
    }
    function S(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e || i;
        let o = N(t);
        return O.has(o) || (o = t), [
            n,
            s,
            o
        ];
    }
    function D(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = S(e, i, n);
        if (e in C) {
            const t = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                };
            r = t(r);
        }
        const l = k(t), c = l[a] || (l[a] = {}), h = L(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = x(r, e.replace(y, "")), u = o ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for(let { target: r } = s; r && r !== this; r = r.parentNode)for (const a of o)if (a === r) return j(s, {
                    delegateTarget: r
                }), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [
                    s
                ]);
            };
        }(t, i, r) : function(t, e) {
            return function i(n) {
                return j(n, {
                    delegateTarget: t
                }), i.oneOff && P.off(t, n.type, e), e.apply(t, [
                    n
                ]);
            };
        }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
    }
    function $(t, e, i, n, s) {
        const o = L(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function I(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s))o.includes(n) && $(t, e, i, r.callable, r.delegationSelector);
    }
    function N(t) {
        return t = t.replace(w, ""), C[t] || t;
    }
    const P = {
        on (t, e, i, n) {
            D(t, e, i, n, !1);
        },
        one (t, e, i, n) {
            D(t, e, i, n, !0);
        },
        off (t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = S(e, i, n), a = r !== e, l = k(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l))I(t, l, i, e.slice(1));
                for (const [i, n] of Object.entries(c)){
                    const s = i.replace(A, "");
                    a && !e.includes(s) || $(t, l, r, n.callable, n.delegationSelector);
                }
            } else {
                if (!Object.keys(c).length) return;
                $(t, l, r, o, s ? i : null);
            }
        },
        trigger (t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = f();
            let s = null, o = !0, r = !0, a = !1;
            e !== N(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            const l = j(new Event(e, {
                bubbles: o,
                cancelable: !0
            }), i);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
        }
    };
    function j(t, e = {}) {
        for (const [i, n] of Object.entries(e))try {
            t[i] = n;
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: ()=>n
            });
        }
        return t;
    }
    function M(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function F(t) {
        return t.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    const H = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${F(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${F(e)}`);
        },
        getDataAttributes (t) {
            if (!t) return {};
            const e = {}, i = Object.keys(t.dataset).filter((t)=>t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const n of i){
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1), e[i] = M(t.dataset[n]);
            }
            return e;
        },
        getDataAttribute: (t, e)=>M(t.getAttribute(`data-bs-${F(e)}`))
    };
    class W {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = r(e) ? H.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...r(e) ? H.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [i, n] of Object.entries(e)){
                const e = t[i], o = r(e) ? "element" : s(e);
                if (!new RegExp(n).test(o)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${n}".`);
            }
        }
    }
    class B extends W {
        constructor(t, i){
            super(), (t = a(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            b(t, e, i);
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return e.get(a(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.3.8";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const z = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e ? e.split(",").map((t)=>n(t)).join(",") : null;
    }, R = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t, e)=>[].concat(...t.children).filter((t)=>t.matches(e)),
        parents (t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for(; n;)i.push(n), n = n.parentNode.closest(e);
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`).join(",");
            return this.find(e, t).filter((t)=>!c(t) && l(t));
        },
        getSelectorFromElement (t) {
            const e = z(t);
            return e && R.findOne(e) ? e : null;
        },
        getElementFromSelector (t) {
            const e = z(t);
            return e ? R.findOne(e) : null;
        },
        getMultipleElementsFromSelector (t) {
            const e = z(t);
            return e ? R.find(e) : [];
        }
    }, q = (t, e = "hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
        P.on(document, i, `[data-bs-dismiss="${n}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), c(this)) return;
            const s = R.getElementFromSelector(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]();
        });
    }, V = ".bs.alert", K = `close${V}`, Q = `closed${V}`;
    class X extends B {
        static get NAME() {
            return "alert";
        }
        close() {
            if (P.trigger(this._element, K).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), P.trigger(this._element, Q), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = X.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    q(X, "close"), g(X);
    const Y = '[data-bs-toggle="button"]';
    class U extends B {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = U.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    P.on(document, "click.bs.button.data-api", Y, (t)=>{
        t.preventDefault();
        const e = t.target.closest(Y);
        U.getOrCreateInstance(e).toggle();
    }), g(U);
    const G = ".bs.swipe", J = `touchstart${G}`, Z = `touchmove${G}`, tt = `touchend${G}`, et = `pointerdown${G}`, it = `pointerup${G}`, nt = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }, st = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class ot extends W {
        constructor(t, e){
            super(), this._element = t, t && ot.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
        }
        static get Default() {
            return nt;
        }
        static get DefaultType() {
            return st;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            P.off(this._element, G);
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), _(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && _(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents ? (P.on(this._element, et, (t)=>this._start(t)), P.on(this._element, it, (t)=>this._end(t)), this._element.classList.add("pointer-event")) : (P.on(this._element, J, (t)=>this._start(t)), P.on(this._element, Z, (t)=>this._move(t)), P.on(this._element, tt, (t)=>this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const rt = ".bs.carousel", at = ".data-api", lt = "ArrowLeft", ct = "ArrowRight", ht = "next", dt = "prev", ut = "left", ft = "right", pt = `slide${rt}`, mt = `slid${rt}`, gt = `keydown${rt}`, _t = `mouseenter${rt}`, bt = `mouseleave${rt}`, vt = `dragstart${rt}`, yt = `load${rt}${at}`, wt = `click${rt}${at}`, At = "carousel", Et = "active", Tt = ".active", Ct = ".carousel-item", Ot = Tt + Ct, xt = {
        [lt]: ft,
        [ct]: ut
    }, kt = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }, Lt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class St extends B {
        constructor(t, e){
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = R.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === At && this.cycle();
        }
        static get Default() {
            return kt;
        }
        static get DefaultType() {
            return Lt;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(ht);
        }
        nextWhenVisible() {
            !document.hidden && l(this._element) && this.next();
        }
        prev() {
            this._slide(dt);
        }
        pause() {
            this._isSliding && o(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? P.one(this._element, mt, ()=>this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void P.one(this._element, mt, ()=>this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? ht : dt;
            this._slide(n, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t;
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, gt, (t)=>this._keydown(t)), "hover" === this._config.pause && (P.on(this._element, _t, ()=>this.pause()), P.on(this._element, bt, ()=>this._maybeEnableCycle())), this._config.touch && ot.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of R.find(".carousel-item img", this._element))P.on(t, vt, (t)=>t.preventDefault());
            const t = {
                leftCallback: ()=>this._slide(this._directionToOrder(ut)),
                rightCallback: ()=>this._slide(this._directionToOrder(ft)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval));
                }
            };
            this._swipeHelper = new ot(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = xt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = R.findOne(Tt, this._indicatorsElement);
            e.classList.remove(Et), e.removeAttribute("aria-current");
            const i = R.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(Et), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(), n = t === ht, s = e || v(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s), r = (e)=>P.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r(pt).defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end", c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), u(s), i.classList.add(l), s.classList.add(l), this._queueCallback(()=>{
                s.classList.remove(l, c), s.classList.add(Et), i.classList.remove(Et, c, l), this._isSliding = !1, r(mt);
            }, i, this._isAnimated()), a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return R.findOne(Ot, this._element);
        }
        _getItems() {
            return R.find(Ct, this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(t) {
            return m() ? t === ut ? dt : ht : t === ut ? ht : dt;
        }
        _orderToDirection(t) {
            return m() ? t === dt ? ut : ft : t === dt ? ft : ut;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = St.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    P.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", function(t) {
        const e = R.getElementFromSelector(this);
        if (!e || !e.classList.contains(At)) return;
        t.preventDefault();
        const i = St.getOrCreateInstance(e), n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === H.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
    }), P.on(window, yt, ()=>{
        const t = R.find('[data-bs-ride="carousel"]');
        for (const e of t)St.getOrCreateInstance(e);
    }), g(St);
    const Dt = ".bs.collapse", $t = `show${Dt}`, It = `shown${Dt}`, Nt = `hide${Dt}`, Pt = `hidden${Dt}`, jt = `click${Dt}.data-api`, Mt = "show", Ft = "collapse", Ht = "collapsing", Wt = `:scope .${Ft} .${Ft}`, Bt = '[data-bs-toggle="collapse"]', zt = {
        parent: null,
        toggle: !0
    }, Rt = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class qt extends B {
        constructor(t, e){
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = R.find(Bt);
            for (const t of i){
                const e = R.getSelectorFromElement(t), i = R.find(e).filter((t)=>t === this._element);
                null !== e && i.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return zt;
        }
        static get DefaultType() {
            return Rt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t)=>t !== this._element).map((t)=>qt.getOrCreateInstance(t, {
                    toggle: !1
                }))), t.length && t[0]._isTransitioning) return;
            if (P.trigger(this._element, $t).defaultPrevented) return;
            for (const e of t)e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Ft), this._element.classList.add(Ht), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(Ht), this._element.classList.add(Ft, Mt), this._element.style[e] = "", P.trigger(this._element, It);
            }, this._element, !0), this._element.style[e] = `${this._element[i]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (P.trigger(this._element, Nt).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, u(this._element), this._element.classList.add(Ht), this._element.classList.remove(Ft, Mt);
            for (const t of this._triggerArray){
                const e = R.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([
                    t
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(Ht), this._element.classList.add(Ft), P.trigger(this._element, Pt);
            }, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(Mt);
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = a(t.parent), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Bt);
            for (const e of t){
                const t = R.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([
                    e
                ], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = R.find(Wt, this._config.parent);
            return R.find(t, this._config.parent).filter((t)=>!e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t)i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
                const i = qt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    P.on(document, jt, Bt, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of R.getMultipleElementsFromSelector(this))qt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle();
    }), g(qt);
    var Vt = "top", Kt = "bottom", Qt = "right", Xt = "left", Yt = "auto", Ut = [
        Vt,
        Kt,
        Qt,
        Xt
    ], Gt = "start", Jt = "end", Zt = "clippingParents", te = "viewport", ee = "popper", ie = "reference", ne = Ut.reduce(function(t, e) {
        return t.concat([
            e + "-" + Gt,
            e + "-" + Jt
        ]);
    }, []), se = [].concat(Ut, [
        Yt
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-" + Gt,
            e + "-" + Jt
        ]);
    }, []), oe = "beforeRead", re = "read", ae = "afterRead", le = "beforeMain", ce = "main", he = "afterMain", de = "beforeWrite", ue = "write", fe = "afterWrite", pe = [
        oe,
        re,
        ae,
        le,
        ce,
        he,
        de,
        ue,
        fe
    ];
    function me(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function ge(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function _e(t) {
        return t instanceof ge(t).Element || t instanceof Element;
    }
    function be(t) {
        return t instanceof ge(t).HTMLElement || t instanceof HTMLElement;
    }
    function ve(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof ge(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const ye = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function(t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
                be(s) && me(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t) {
            var e = t.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function() {
                Object.keys(e.elements).forEach(function(t) {
                    var n = e.elements[t], s = e.attributes[t] || {}, o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {});
                    be(n) && me(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                        n.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function we(t) {
        return t.split("-")[0];
    }
    var Ae = Math.max, Ee = Math.min, Te = Math.round;
    function Ce() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function(t) {
            return t.brand + "/" + t.version;
        }).join(" ") : navigator.userAgent;
    }
    function Oe() {
        return !/^((?!chrome|android).)*safari/i.test(Ce());
    }
    function xe(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(), s = 1, o = 1;
        e && be(t) && (s = t.offsetWidth > 0 && Te(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Te(n.height) / t.offsetHeight || 1);
        var r = (_e(t) ? ge(t) : window).visualViewport, a = !Oe() && i, l = (n.left + (a && r ? r.offsetLeft : 0)) / s, c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s, d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        };
    }
    function ke(t) {
        var e = xe(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }
    function Le(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ve(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            }while (n)
        }
        return !1;
    }
    function Se(t) {
        return ge(t).getComputedStyle(t);
    }
    function De(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(me(t)) >= 0;
    }
    function $e(t) {
        return ((_e(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function Ie(t) {
        return "html" === me(t) ? t : t.assignedSlot || t.parentNode || (ve(t) ? t.host : null) || $e(t);
    }
    function Ne(t) {
        return be(t) && "fixed" !== Se(t).position ? t.offsetParent : null;
    }
    function Pe(t) {
        for(var e = ge(t), i = Ne(t); i && De(i) && "static" === Se(i).position;)i = Ne(i);
        return i && ("html" === me(i) || "body" === me(i) && "static" === Se(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Ce());
            if (/Trident/i.test(Ce()) && be(t) && "fixed" === Se(t).position) return null;
            var i = Ie(t);
            for(ve(i) && (i = i.host); be(i) && [
                "html",
                "body"
            ].indexOf(me(i)) < 0;){
                var n = Se(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode;
            }
            return null;
        }(t) || e;
    }
    function je(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    function Me(t, e, i) {
        return Ae(t, Ee(e, i));
    }
    function Fe(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function He(t, e) {
        return e.reduce(function(e, i) {
            return e[i] = t, e;
        }, {});
    }
    const We = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = we(i.placement), l = je(a), c = [
                Xt,
                Qt
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return Fe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : He(t, Ut));
                }(s.padding, i), d = ke(o), u = "y" === l ? Vt : Xt, f = "y" === l ? Kt : Qt, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], m = r[l] - i.rects.reference[l], g = Pe(o), _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - m / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, A = Me(v, w, y), E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Le(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function Be(t) {
        return t.split("-")[1];
    }
    var ze = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function Re(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, m = void 0 === p ? 0 : p, g = "function" == typeof h ? h({
            x: f,
            y: m
        }) : {
            x: f,
            y: m
        };
        f = g.x, m = g.y;
        var _ = r.hasOwnProperty("x"), b = r.hasOwnProperty("y"), v = Xt, y = Vt, w = window;
        if (c) {
            var A = Pe(i), E = "clientHeight", T = "clientWidth";
            A === ge(i) && "static" !== Se(A = $e(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === Vt || (s === Xt || s === Qt) && o === Jt) && (y = Kt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Xt && (s !== Vt && s !== Kt || o !== Jt) || (v = Qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
        }
        var C, O = Object.assign({
            position: a
        }, c && ze), x = !0 === h ? function(t, e) {
            var i = t.x, n = t.y, s = e.devicePixelRatio || 1;
            return {
                x: Te(i * s) / s || 0,
                y: Te(n * s) / s || 0
            };
        }({
            x: f,
            y: m
        }, ge(i)) : {
            x: f,
            y: m
        };
        return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
    }
    const qe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: we(e.placement),
                variation: Be(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Re(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Re(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {}
    };
    var Ve = {
        passive: !0
    };
    const Ke = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = ge(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, Ve);
            }), a && l.addEventListener("resize", i.update, Ve), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, Ve);
                }), a && l.removeEventListener("resize", i.update, Ve);
            };
        },
        data: {}
    };
    var Qe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Xe(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return Qe[t];
        });
    }
    var Ye = {
        start: "end",
        end: "start"
    };
    function Ue(t) {
        return t.replace(/start|end/g, function(t) {
            return Ye[t];
        });
    }
    function Ge(t) {
        var e = ge(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function Je(t) {
        return xe($e(t)).left + Ge(t).scrollLeft;
    }
    function Ze(t) {
        var e = Se(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function ti(t) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(me(t)) >= 0 ? t.ownerDocument.body : be(t) && Ze(t) ? t : ti(Ie(t));
    }
    function ei(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = ti(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = ge(n), r = s ? [
            o
        ].concat(o.visualViewport || [], Ze(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(ei(Ie(r)));
    }
    function ii(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function ni(t, e, i) {
        return e === te ? ii(function(t, e) {
            var i = ge(t), n = $e(t), s = i.visualViewport, o = n.clientWidth, r = n.clientHeight, a = 0, l = 0;
            if (s) {
                o = s.width, r = s.height;
                var c = Oe();
                (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
            }
            return {
                width: o,
                height: r,
                x: a + Je(t),
                y: l
            };
        }(t, i)) : _e(e) ? function(t, e) {
            var i = xe(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
        }(e, i) : ii(function(t) {
            var e, i = $e(t), n = Ge(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = Ae(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = Ae(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Je(t), l = -n.scrollTop;
            return "rtl" === Se(s || i).direction && (a += Ae(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }($e(t)));
    }
    function si(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? we(s) : null, r = s ? Be(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch(o){
            case Vt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case Kt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case Qt:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case Xt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? je(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch(r){
                case Gt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Jt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function oi(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.strategy, r = void 0 === o ? t.strategy : o, a = i.boundary, l = void 0 === a ? Zt : a, c = i.rootBoundary, h = void 0 === c ? te : c, d = i.elementContext, u = void 0 === d ? ee : d, f = i.altBoundary, p = void 0 !== f && f, m = i.padding, g = void 0 === m ? 0 : m, _ = Fe("number" != typeof g ? g : He(g, Ut)), b = u === ee ? ie : ee, v = t.rects.popper, y = t.elements[p ? b : u], w = function(t, e, i, n) {
            var s = "clippingParents" === e ? function(t) {
                var e = ei(Ie(t)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(Se(t).position) >= 0 && be(t) ? Pe(t) : t;
                return _e(i) ? e.filter(function(t) {
                    return _e(t) && Le(t, i) && "body" !== me(t);
                }) : [];
            }(t) : [].concat(e), o = [].concat(s, [
                i
            ]), r = o[0], a = o.reduce(function(e, i) {
                var s = ni(t, i, n);
                return e.top = Ae(s.top, e.top), e.right = Ee(s.right, e.right), e.bottom = Ee(s.bottom, e.bottom), e.left = Ae(s.left, e.left), e;
            }, ni(t, r, n));
            return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
        }(_e(y) ? y : y.contextElement || $e(t.elements.popper), l, h, r), A = xe(t.elements.reference), E = si({
            reference: A,
            element: v,
            placement: s
        }), T = ii(Object.assign({}, v, E)), C = u === ee ? T : A, O = {
            top: w.top - C.top + _.top,
            bottom: C.bottom - w.bottom + _.bottom,
            left: w.left - C.left + _.left,
            right: C.right - w.right + _.right
        }, x = t.modifiersData.offset;
        if (u === ee && x) {
            var k = x[s];
            Object.keys(O).forEach(function(t) {
                var e = [
                    Qt,
                    Kt
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    Vt,
                    Kt
                ].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }
    function ri(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? se : l, h = Be(n), d = h ? a ? ne : ne.filter(function(t) {
            return Be(t) === h;
        }) : Ut, u = d.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return e[i] = oi(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[we(i)], e;
        }, {});
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const ai = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for(var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = we(g), b = l || (_ !== g && p ? function(t) {
                    if (we(t) === Yt) return [];
                    var e = Xe(t);
                    return [
                        Ue(t),
                        e,
                        Ue(e)
                    ];
                }(g) : [
                    Xe(g)
                ]), v = [
                    g
                ].concat(b).reduce(function(t, i) {
                    return t.concat(we(i) === Yt ? ri(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i);
                }, []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++){
                    var O = v[C], x = we(O), k = Be(O) === Gt, L = [
                        Vt,
                        Kt
                    ].indexOf(x) >= 0, S = L ? "width" : "height", D = oi(e, {
                        placement: O,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    }), $ = L ? k ? Qt : Xt : k ? Kt : Vt;
                    y[S] > w[S] && ($ = Xe($));
                    var I = Xe($), N = [];
                    if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function(t) {
                        return t;
                    })) {
                        T = O, E = !1;
                        break;
                    }
                    A.set(O, N);
                }
                if (E) for(var P = function(t) {
                    var e = v.find(function(e) {
                        var i = A.get(e);
                        if (i) return i.slice(0, t).every(function(t) {
                            return t;
                        });
                    });
                    if (e) return T = e, "break";
                }, j = p ? 3 : 1; j > 0 && "break" !== P(j); j--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function li(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function ci(t) {
        return [
            Vt,
            Qt,
            Kt,
            Xt
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    const hi = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = oi(e, {
                elementContext: "reference"
            }), a = oi(e, {
                altBoundary: !0
            }), l = li(r, n), c = li(a, s, o), h = ci(l), d = ci(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            });
        }
    }, di = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [
                0,
                0
            ] : s, r = se.reduce(function(t, i) {
                return t[i] = function(t, e, i) {
                    var n = we(t), s = [
                        Xt,
                        Vt
                    ].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * s, [
                        Xt,
                        Qt
                    ].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                }(i, e.rects, o), t;
            }, {}), a = r[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
        }
    }, ui = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = si({
                reference: e.rects.reference,
                element: e.rects.popper,
                placement: e.placement
            });
        },
        data: {}
    }, fi = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p, g = oi(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            }), _ = we(e.placement), b = Be(e.placement), v = !b, y = je(_), w = "x" === y ? "y" : "x", A = e.modifiersData.popperOffsets, E = e.rects.reference, T = e.rects.popper, C = "function" == typeof m ? m(Object.assign({}, e.rects, {
                placement: e.placement
            })) : m, O = "number" == typeof C ? {
                mainAxis: C,
                altAxis: C
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, C), x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, k = {
                x: 0,
                y: 0
            };
            if (A) {
                if (o) {
                    var L, S = "y" === y ? Vt : Xt, D = "y" === y ? Kt : Qt, $ = "y" === y ? "height" : "width", I = A[y], N = I + g[S], P = I - g[D], j = f ? -T[$] / 2 : 0, M = b === Gt ? E[$] : T[$], F = b === Gt ? -T[$] : -E[$], H = e.elements.arrow, W = f && H ? ke(H) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, z = B[S], R = B[D], q = Me(0, E[$], W[$]), V = v ? E[$] / 2 - j - q - z - O.mainAxis : M - q - z - O.mainAxis, K = v ? -E[$] / 2 + j + q + R + O.mainAxis : F + q + R + O.mainAxis, Q = e.elements.arrow && Pe(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = I + K - Y, G = Me(f ? Ee(N, I + V - Y - X) : N, I, f ? Ae(P, U) : P);
                    A[y] = G, k[y] = G - I;
                }
                if (a) {
                    var J, Z = "x" === y ? Vt : Xt, tt = "x" === y ? Kt : Qt, et = A[w], it = "y" === w ? "height" : "width", nt = et + g[Z], st = et - g[tt], ot = -1 !== [
                        Vt,
                        Xt
                    ].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function(t, e, i) {
                        var n = Me(t, e, i);
                        return n > i ? i : n;
                    }(at, et, lt) : Me(f ? at : nt, et, f ? lt : st);
                    A[w] = ct, k[w] = ct - et;
                }
                e.modifiersData[n] = k;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function pi(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = be(e), r = be(e) && function(t) {
            var e = t.getBoundingClientRect(), i = Te(e.width) / t.offsetWidth || 1, n = Te(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n;
        }(e), a = $e(e), l = xe(t, r, i), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== me(e) || Ze(a)) && (c = (n = e) !== ge(n) && be(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Ge(n)), be(e) ? ((h = xe(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Je(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        };
    }
    function mi(t) {
        var e = new Map, i = new Set, n = [];
        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                }
            }), n.push(t);
        }
        return t.forEach(function(t) {
            e.set(t.name, t);
        }), t.forEach(function(t) {
            i.has(t.name) || s(t);
        }), n;
    }
    var gi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function _i() {
        for(var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function bi(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? gi : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, gi, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                        reference: _e(t) ? ei(t) : t.contextElement ? ei(t.contextElement) : [],
                        popper: ei(e)
                    };
                    var r, c, u = function(t) {
                        var e = mi(t);
                        return pe.reduce(function(t, i) {
                            return t.concat(e.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((r = [].concat(n, a.options.modifiers), c = r.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e, t;
                    }, {}), Object.keys(c).map(function(t) {
                        return c[t];
                    })));
                    return a.orderedModifiers = u.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l.push(o || function() {});
                        }
                    }), h.update();
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements, e = t.reference, i = t.popper;
                        if (_i(e, i)) {
                            a.rects = {
                                reference: pi(e, Pe(i), "fixed" === a.options.strategy),
                                popper: ke(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data);
                            });
                            for(var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, d = s.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: d,
                                    instance: h
                                }) || a);
                            } else a.reset = !1, n = -1;
                        }
                    }
                },
                update: (s = function() {
                    return new Promise(function(t) {
                        h.forceUpdate(), t(a);
                    });
                }, function() {
                    return r || (r = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r = void 0, t(s());
                        });
                    })), r;
                }),
                destroy: function() {
                    d(), c = !0;
                }
            };
            if (!_i(t, e)) return h;
            function d() {
                l.forEach(function(t) {
                    return t();
                }), l = [];
            }
            return h.setOptions(i).then(function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }), h;
        };
    }
    var vi = bi(), yi = bi({
        defaultModifiers: [
            Ke,
            ui,
            qe,
            ye
        ]
    }), wi = bi({
        defaultModifiers: [
            Ke,
            ui,
            qe,
            ye,
            di,
            ai,
            fi,
            We,
            hi
        ]
    });
    const Ai = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: he,
        afterRead: ae,
        afterWrite: fe,
        applyStyles: ye,
        arrow: We,
        auto: Yt,
        basePlacements: Ut,
        beforeMain: le,
        beforeRead: oe,
        beforeWrite: de,
        bottom: Kt,
        clippingParents: Zt,
        computeStyles: qe,
        createPopper: wi,
        createPopperBase: vi,
        createPopperLite: yi,
        detectOverflow: oi,
        end: Jt,
        eventListeners: Ke,
        flip: ai,
        hide: hi,
        left: Xt,
        main: ce,
        modifierPhases: pe,
        offset: di,
        placements: se,
        popper: ee,
        popperGenerator: bi,
        popperOffsets: ui,
        preventOverflow: fi,
        read: re,
        reference: ie,
        right: Qt,
        start: Gt,
        top: Vt,
        variationPlacements: ne,
        viewport: te,
        write: ue
    }, Symbol.toStringTag, {
        value: "Module"
    })), Ei = "dropdown", Ti = ".bs.dropdown", Ci = ".data-api", Oi = "ArrowUp", xi = "ArrowDown", ki = `hide${Ti}`, Li = `hidden${Ti}`, Si = `show${Ti}`, Di = `shown${Ti}`, $i = `click${Ti}${Ci}`, Ii = `keydown${Ti}${Ci}`, Ni = `keyup${Ti}${Ci}`, Pi = "show", ji = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Mi = `${ji}.${Pi}`, Fi = ".dropdown-menu", Hi = m() ? "top-end" : "top-start", Wi = m() ? "top-start" : "top-end", Bi = m() ? "bottom-end" : "bottom-start", zi = m() ? "bottom-start" : "bottom-end", Ri = m() ? "left-start" : "right-start", qi = m() ? "right-start" : "left-start", Vi = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [
            0,
            2
        ],
        popperConfig: null,
        reference: "toggle"
    }, Ki = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class Qi extends B {
        constructor(t, e){
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = R.next(this._element, Fi)[0] || R.prev(this._element, Fi)[0] || R.findOne(Fi, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return Vi;
        }
        static get DefaultType() {
            return Ki;
        }
        static get NAME() {
            return Ei;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (c(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!P.trigger(this._element, Si, t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children))P.on(t, "mouseover", d);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Pi), this._element.classList.add(Pi), P.trigger(this._element, Di, t);
            }
        }
        hide() {
            if (c(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!P.trigger(this._element, ki, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))P.off(t, "mouseover", d);
                this._popper && this._popper.destroy(), this._menu.classList.remove(Pi), this._element.classList.remove(Pi), this._element.setAttribute("aria-expanded", "false"), H.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, Li, t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ei.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === Ai) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : r(this._config.reference) ? t = a(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = wi(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(Pi);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Ri;
            if (t.classList.contains("dropstart")) return qi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Wi : Hi : e ? zi : Bi;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return (this._inNavbar || "static" === this._config.display) && (H.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ..._(this._config.popperConfig, [
                    void 0,
                    t
                ])
            };
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t)=>l(t));
            i.length && v(i, e, t === xi, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = R.find(Mi);
            for (const i of e){
                const e = Qi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(), s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = [
                Oi,
                xi
            ].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(ji) ? this : R.prev(this, ji)[0] || R.next(this, ji)[0] || R.findOne(ji, t.delegateTarget.parentNode), o = Qi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
    }
    P.on(document, Ii, ji, Qi.dataApiKeydownHandler), P.on(document, Ii, Fi, Qi.dataApiKeydownHandler), P.on(document, $i, Qi.clearMenus), P.on(document, Ni, Qi.clearMenus), P.on(document, $i, ji, function(t) {
        t.preventDefault(), Qi.getOrCreateInstance(this).toggle();
    }), g(Qi);
    const Xi = "backdrop", Yi = "show", Ui = `mousedown.bs.${Xi}`, Gi = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }, Ji = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Zi extends W {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        static get Default() {
            return Gi;
        }
        static get DefaultType() {
            return Ji;
        }
        static get NAME() {
            return Xi;
        }
        show(t) {
            if (!this._config.isVisible) return void _(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && u(e), e.classList.add(Yi), this._emulateAnimation(()=>{
                _(t);
            });
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Yi), this._emulateAnimation(()=>{
                this.dispose(), _(t);
            })) : _(t);
        }
        dispose() {
            this._isAppended && (P.off(this._element, Ui), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return t.rootElement = a(t.rootElement), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), P.on(t, Ui, ()=>{
                _(this._config.clickCallback);
            }), this._isAppended = !0;
        }
        _emulateAnimation(t) {
            b(t, this._getElement(), this._config.isAnimated);
        }
    }
    const tn = ".bs.focustrap", en = `focusin${tn}`, nn = `keydown.tab${tn}`, sn = "backward", on = {
        autofocus: !0,
        trapElement: null
    }, rn = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class an extends W {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
            return on;
        }
        static get DefaultType() {
            return rn;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, tn), P.on(document, en, (t)=>this._handleFocusin(t)), P.on(document, nn, (t)=>this._handleKeydown(t)), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, P.off(document, tn));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = R.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === sn ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? sn : "forward");
        }
    }
    const ln = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", cn = ".sticky-top", hn = "padding-right", dn = "margin-right";
    class un {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, hn, (e)=>e + t), this._setElementAttributes(ln, hn, (e)=>e + t), this._setElementAttributes(cn, dn, (e)=>e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hn), this._resetElementAttributes(ln, hn), this._resetElementAttributes(cn, dn);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && H.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t)=>{
                const i = H.getDataAttribute(t, e);
                null !== i ? (H.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (r(t)) e(t);
            else for (const i of R.find(t, this._element))e(i);
        }
    }
    const fn = ".bs.modal", pn = `hide${fn}`, mn = `hidePrevented${fn}`, gn = `hidden${fn}`, _n = `show${fn}`, bn = `shown${fn}`, vn = `resize${fn}`, yn = `click.dismiss${fn}`, wn = `mousedown.dismiss${fn}`, An = `keydown.dismiss${fn}`, En = `click${fn}.data-api`, Tn = "modal-open", Cn = "show", On = "modal-static", xn = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }, kn = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class Ln extends B {
        constructor(t, e){
            super(t, e), this._dialog = R.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new un, this._addEventListeners();
        }
        static get Default() {
            return xn;
        }
        static get DefaultType() {
            return kn;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || P.trigger(this._element, _n, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Tn), this._adjustDialog(), this._backdrop.show(()=>this._showElement(t)));
        }
        hide() {
            this._isShown && !this._isTransitioning && (P.trigger(this._element, pn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Cn), this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
            P.off(window, fn), P.off(this._dialog, fn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Zi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new an({
                trapElement: this._element
            });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = R.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), u(this._element), this._element.classList.add(Cn), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, P.trigger(this._element, bn, {
                    relatedTarget: t
                });
            }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
            P.on(this._element, An, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }), P.on(window, vn, ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog();
            }), P.on(this._element, wn, (t)=>{
                P.one(this._element, yn, (e)=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                });
            });
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(Tn), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, gn);
            });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, mn).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(On) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(On), this._queueCallback(()=>{
                this._element.classList.remove(On), this._queueCallback(()=>{
                    this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                const t = m() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = m() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = Ln.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    P.on(document, En, '[data-bs-toggle="modal"]', function(t) {
        const e = R.getElementFromSelector(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), P.one(e, _n, (t)=>{
            t.defaultPrevented || P.one(e, gn, ()=>{
                l(this) && this.focus();
            });
        });
        const i = R.findOne(".modal.show");
        i && Ln.getInstance(i).hide(), Ln.getOrCreateInstance(e).toggle(this);
    }), q(Ln), g(Ln);
    const Sn = ".bs.offcanvas", Dn = ".data-api", $n = `load${Sn}${Dn}`, In = "show", Nn = "showing", Pn = "hiding", jn = ".offcanvas.show", Mn = `show${Sn}`, Fn = `shown${Sn}`, Hn = `hide${Sn}`, Wn = `hidePrevented${Sn}`, Bn = `hidden${Sn}`, zn = `resize${Sn}`, Rn = `click${Sn}${Dn}`, qn = `keydown.dismiss${Sn}`, Vn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Kn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class Qn extends B {
        constructor(t, e){
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
            return Vn;
        }
        static get DefaultType() {
            return Kn;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || P.trigger(this._element, Mn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new un).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Nn), this._queueCallback(()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(In), this._element.classList.remove(Nn), P.trigger(this._element, Fn, {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (P.trigger(this._element, Hn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Pn), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.classList.remove(In, Pn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new un).reset(), P.trigger(this._element, Bn);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Zi({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, Wn);
                } : null
            });
        }
        _initializeFocusTrap() {
            return new an({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            P.on(this._element, qn, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Wn));
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    P.on(document, Rn, '[data-bs-toggle="offcanvas"]', function(t) {
        const e = R.getElementFromSelector(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c(this)) return;
        P.one(e, Bn, ()=>{
            l(this) && this.focus();
        });
        const i = R.findOne(jn);
        i && i !== e && Qn.getInstance(i).hide(), Qn.getOrCreateInstance(e).toggle(this);
    }), P.on(window, $n, ()=>{
        for (const t of R.find(jn))Qn.getOrCreateInstance(t).show();
    }), P.on(window, zn, ()=>{
        for (const t of R.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed" !== getComputedStyle(t).position && Qn.getOrCreateInstance(t).hide();
    }), q(Qn), g(Qn);
    const Xn = {
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            /^aria-[\w-]*$/i
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, Yn = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Un = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Gn = (t, e)=>{
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !Yn.has(i) || Boolean(Un.test(t.nodeValue)) : e.filter((t)=>t instanceof RegExp).some((t)=>t.test(i));
    }, Jn = {
        allowList: Xn,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }, Zn = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }, ts = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class es extends W {
        constructor(t){
            super(), this._config = this._getConfig(t);
        }
        static get Default() {
            return Jn;
        }
        static get DefaultType() {
            return Zn;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content).map((t)=>this._resolvePossibleFunction(t)).filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = {
                ...this._config.content,
                ...t
            }, this;
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content))this._setContent(t, i, e);
            const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))super._typeCheckConfig({
                selector: e,
                entry: i
            }, ts);
        }
        _setContent(t, e, i) {
            const n = R.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? r(e) ? this._putElementInTemplate(a(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s){
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue;
                    }
                    const n = [].concat(...t.attributes), s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n)Gn(e, s) || t.removeAttribute(e.nodeName);
                }
                return n.body.innerHTML;
            }(t, this._config.allowList, this._config.sanitizeFn) : t;
        }
        _resolvePossibleFunction(t) {
            return _(t, [
                void 0,
                this
            ]);
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const is = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), ns = "fade", ss = "show", os = ".tooltip-inner", rs = ".modal", as = "hide.bs.modal", ls = "hover", cs = "focus", hs = "click", ds = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: m() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: m() ? "right" : "left"
    }, us = {
        allowList: Xn,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        html: !1,
        offset: [
            0,
            6
        ],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }, fs = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class ps extends B {
        constructor(t, e){
            if (void 0 === Ai) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
            return us;
        }
        static get DefaultType() {
            return fs;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && (this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(rs), as, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.eventName("show")), e = (h(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: n } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(ss), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))P.on(t, "mouseover", d);
            this._queueCallback(()=>{
                P.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1;
            }, this.tip, this._isAnimated());
        }
        hide() {
            if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(ss), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))P.off(t, "mouseover", d);
                this._activeTrigger[hs] = !1, this._activeTrigger[cs] = !1, this._activeTrigger[ls] = !1, this._isHovered = null, this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")));
                }, this.tip, this._isAnimated());
            }
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(ns, ss), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t)=>{
                do {
                    t += Math.floor(1e6 * Math.random());
                }while (document.getElementById(t))
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ns), e;
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new es({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory;
        }
        _getContentForTemplate() {
            return {
                [os]: this._getTitle()
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ns);
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(ss);
        }
        _createPopper(t) {
            const e = _(this._config.placement, [
                this,
                t,
                this._element
            ]), i = ds[e.toUpperCase()];
            return wi(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return _(t, [
                this._element,
                this._element
            ]);
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t)=>{
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        }
                    }
                ]
            };
            return {
                ...e,
                ..._(this._config.popperConfig, [
                    void 0,
                    e
                ])
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)if ("click" === e) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t)=>{
                const e = this._initializeOnDelegatedTarget(t);
                e._activeTrigger[hs] = !(e._isShown() && e._activeTrigger[hs]), e.toggle();
            });
            else if ("manual" !== e) {
                const t = e === ls ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i = e === ls ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                P.on(this._element, t, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? cs : ls] = !0, e._enter();
                }), P.on(this._element, i, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? cs : ls] = e._element.contains(t.relatedTarget), e._leave();
                });
            }
            this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, P.on(this._element.closest(rs), as, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(()=>{
                this._isHovered && this.show();
            }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(()=>{
                this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = H.getDataAttributes(this._element);
            for (const t of Object.keys(e))is.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config))this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1, t.trigger = "manual", t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ps.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(ps);
    const ms = ".popover-header", gs = ".popover-body", _s = {
        ...ps.Default,
        content: "",
        offset: [
            0,
            8
        ],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, bs = {
        ...ps.DefaultType,
        content: "(null|string|element|function)"
    };
    class vs extends ps {
        static get Default() {
            return _s;
        }
        static get DefaultType() {
            return bs;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                [ms]: this._getTitle(),
                [gs]: this._getContent()
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = vs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(vs);
    const ys = ".bs.scrollspy", ws = `activate${ys}`, As = `click${ys}`, Es = `load${ys}.data-api`, Ts = "active", Cs = "[href]", Os = ".nav-link", xs = `${Os}, .nav-item > ${Os}, .list-group-item`, ks = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [
            .1,
            .5,
            1
        ]
    }, Ls = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class Ss extends B {
        constructor(t, e){
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh();
        }
        static get Default() {
            return ks;
        }
        static get DefaultType() {
            return Ls;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.target = a(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t)=>Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (P.off(this._config.target, As), P.on(this._config.target, As, Cs, (t)=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n;
                }
            }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t)=>this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t)=>this._targetLinks.get(`#${t.target.id}`), i = (t)=>{
                this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t));
            }, n = (this._rootElement || document.documentElement).scrollTop, s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t){
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return;
                } else s || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = R.find(Cs, this._config.target);
            for (const e of t){
                if (!e.hash || c(e)) continue;
                const t = R.findOne(decodeURI(e.hash), this._element);
                l(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Ts), this._activateParents(t), P.trigger(this._element, ws, {
                relatedTarget: t
            }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) R.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Ts);
            else for (const e of R.parents(t, ".nav, .list-group"))for (const t of R.prev(e, xs))t.classList.add(Ts);
        }
        _clearActiveClass(t) {
            t.classList.remove(Ts);
            const e = R.find(`${Cs}.${Ts}`, t);
            for (const t of e)t.classList.remove(Ts);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ss.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(window, Es, ()=>{
        for (const t of R.find('[data-bs-spy="scroll"]'))Ss.getOrCreateInstance(t);
    }), g(Ss);
    const Ds = ".bs.tab", $s = `hide${Ds}`, Is = `hidden${Ds}`, Ns = `show${Ds}`, Ps = `shown${Ds}`, js = `click${Ds}`, Ms = `keydown${Ds}`, Fs = `load${Ds}`, Hs = "ArrowLeft", Ws = "ArrowRight", Bs = "ArrowUp", zs = "ArrowDown", Rs = "Home", qs = "End", Vs = "active", Ks = "fade", Qs = "show", Xs = ".dropdown-toggle", Ys = `:not(${Xs})`, Us = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Gs = `.nav-link${Ys}, .list-group-item${Ys}, [role="tab"]${Ys}, ${Us}`, Js = `.${Vs}[data-bs-toggle="tab"], .${Vs}[data-bs-toggle="pill"], .${Vs}[data-bs-toggle="list"]`;
    class Zs extends B {
        constructor(t){
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, Ms, (t)=>this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), i = e ? P.trigger(e, $s, {
                relatedTarget: t
            }) : null;
            P.trigger(t, Ns, {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t && (t.classList.add(Vs), this._activate(R.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), P.trigger(t, Ps, {
                    relatedTarget: e
                })) : t.classList.add(Qs);
            }, t, t.classList.contains(Ks)));
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Vs), t.blur(), this._deactivate(R.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), P.trigger(t, Is, {
                    relatedTarget: e
                })) : t.classList.remove(Qs);
            }, t, t.classList.contains(Ks)));
        }
        _keydown(t) {
            if (![
                Hs,
                Ws,
                Bs,
                zs,
                Rs,
                qs
            ].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t)=>!c(t));
            let i;
            if ([
                Rs,
                qs
            ].includes(t.key)) i = e[t.key === Rs ? 0 : e.length - 1];
            else {
                const n = [
                    Ws,
                    zs
                ].includes(t.key);
                i = v(e, t.target, n, !0);
            }
            i && (i.focus({
                preventScroll: !0
            }), Zs.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return R.find(Gs, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t)=>this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = R.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n)=>{
                const s = R.findOne(t, i);
                s && s.classList.toggle(n, e);
            };
            n(Xs, Vs), n(".dropdown-menu", Qs), i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(Vs);
        }
        _getInnerElement(t) {
            return t.matches(Gs) ? t : R.findOne(Gs, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Zs.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(document, js, Us, function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c(this) || Zs.getOrCreateInstance(this).show();
    }), P.on(window, Fs, ()=>{
        for (const t of R.find(Js))Zs.getOrCreateInstance(t);
    }), g(Zs);
    const to = ".bs.toast", eo = `mouseover${to}`, io = `mouseout${to}`, no = `focusin${to}`, so = `focusout${to}`, oo = `hide${to}`, ro = `hidden${to}`, ao = `show${to}`, lo = `shown${to}`, co = "hide", ho = "show", uo = "showing", fo = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, po = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class mo extends B {
        constructor(t, e){
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
            return po;
        }
        static get DefaultType() {
            return fo;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            P.trigger(this._element, ao).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(co), u(this._element), this._element.classList.add(ho, uo), this._queueCallback(()=>{
                this._element.classList.remove(uo), P.trigger(this._element, lo), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this.isShown() && (P.trigger(this._element, oo).defaultPrevented || (this._element.classList.add(uo), this._queueCallback(()=>{
                this._element.classList.add(co), this._element.classList.remove(uo, ho), P.trigger(this._element, ro);
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(ho), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(ho);
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            P.on(this._element, eo, (t)=>this._onInteraction(t, !0)), P.on(this._element, io, (t)=>this._onInteraction(t, !1)), P.on(this._element, no, (t)=>this._onInteraction(t, !0)), P.on(this._element, so, (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = mo.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return q(mo), g(mo), {
        Alert: X,
        Button: U,
        Carousel: St,
        Collapse: qt,
        Dropdown: Qi,
        Modal: Ln,
        Offcanvas: Qn,
        Popover: vs,
        ScrollSpy: Ss,
        Tab: Zs,
        Toast: mo,
        Tooltip: ps
    };
}); //# sourceMappingURL=bootstrap.bundle.min.js.map
}),
]);

//# sourceMappingURL=8d77c_cd55a40b._.js.map