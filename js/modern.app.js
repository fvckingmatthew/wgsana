! function(e) {
    function t(t) { for (var i, r, a = t[0], l = t[1], h = t[2], d = 0, u = []; d < a.length; d++) r = a[d], o[r] && u.push(o[r][0]), o[r] = 0; for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]); for (c && c(t); u.length;) u.shift()(); return n.push.apply(n, h || []), s() }

    function s() {
        for (var e, t = 0; t < n.length; t++) {
            for (var s = n[t], i = !0, a = 1; a < s.length; a++) {
                var l = s[a];
                0 !== o[l] && (i = !1)
            }
            i && (n.splice(t--, 1), e = r(r.s = s[0]))
        }
        return e
    }
    var i = {},
        o = { 1: 0 },
        n = [];

    function r(t) { if (i[t]) return i[t].exports; var s = i[t] = { i: t, l: !1, exports: {} }; return e[t].call(s.exports, s, s.exports, r), s.l = !0, s.exports } r.e = function(e) {
        var t = [],
            s = o[e];
        if (0 !== s)
            if (s) t.push(s[2]);
            else {
                var i = new Promise((function(t, i) { s = o[e] = [t, i] }));
                t.push(s[2] = i);
                var n, a = document.getElementsByTagName("head")[0],
                    l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, r.nc && l.setAttribute("nonce", r.nc), l.src = function(e) { return r.p + "js/modern." + ({ 0: "InteractiveScroller", 2: "vendors~InteractiveScroller" } [e] || e) + ".js" }(e), n = function(t) {
                    l.onerror = l.onload = null, clearTimeout(h);
                    var s = o[e];
                    if (0 !== s) {
                        if (s) {
                            var i = t && ("load" === t.type ? "missing" : t.type),
                                n = t && t.target && t.target.src,
                                r = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + n + ")");
                            r.type = i, r.request = n, s[1](r)
                        }
                        o[e] = void 0
                    }
                };
                var h = setTimeout((function() { n({ type: "timeout", target: l }) }), 12e4);
                l.onerror = l.onload = n, a.appendChild(l)
            } return Promise.all(t)
    }, r.m = e, r.c = i, r.d = function(e, t, s) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (r.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(s, i, function(t) { return e[t] }.bind(null, i));
        return s
    }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/", r.oe = function(e) { throw console.error(e), e };
    var a = window.webpackJsonp = window.webpackJsonp || [],
        l = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var h = 0; h < a.length; h++) t(a[h]);
    var c = l;
    n.push([153, 3]), s()
}({
    153: function(e, t, s) {
        "use strict";
        s.r(t);
        s(154), s(160), s(59), s(92);
        var i = s(2),
            o = s(0),
            n = s(3);
        class r extends i.e { constructor() { super(), this.breakpoints = { xs: 576, sm: 768, md: 992, lg: 1200, xl: 1920 } } isMobile() { return !this.isMin("sm") } }
        var a = new r,
            l = s(80),
            h = s.n(l);
        var c = new class {
            constructor() { this.containers = document.querySelectorAll(".nav"), this.breadcrumbAppends = [...document.querySelectorAll(".breadcrumb-append")], this.links = [...document.querySelectorAll(".main-nav .nav-link")], this.mobileBtns = [...document.querySelectorAll(".nav-btn")], this.backgrounds = document.querySelectorAll(".nav__background"), this.lists = document.querySelectorAll(".mobile-list"), this.listsLinks = [...document.querySelectorAll(".mobile-list .nav-link-wrapper")], this.listsLinksReverse = [...this.listsLinks].reverse(), this.labelWrappers = document.querySelectorAll(".nav__mobile-label-wrapper"), this.openLabels = document.querySelectorAll(".nav__mobile-label-open"), this.closeLabels = document.querySelectorAll(".nav__mobile-label-close"), this.overlay = document.getElementById("nav__overlay"), this.whiteElements = document.querySelectorAll(".nav-white"), this.blackElements = document.querySelectorAll(".nav-black"), this.navPoints = document.querySelectorAll(".nav__point"), this.navPointsElements = [], this.navLoading = document.querySelectorAll(".nav__loading"), this.navLangs = document.querySelectorAll(".nav__lang"), this.navItemAbsolute = document.querySelectorAll(".nav-item-absolute"), this.navItems = document.querySelectorAll(".breadcrumb .nav-item:not(.nav-item-absolute):not(:first-child)"), this.bigLetters = [], this.firstBreadcrumbEls = [], this.page = null, this.layoutAnimationDelay = 0, this.navOpen = !1, this.currentLayout = null, this.animationCompleted = !0, this.navLinkClick = !1, this.backgroundsPositionY = 80, this.isTransitioning = !1, this.loadingTl = null, this.bgShow = !1, this.isHomeShow = !1, this.update = this.update.bind(this), this.onChangeLayout = this.onChangeLayout.bind(this), this.onTransitionStart = this.onTransitionStart.bind(this), this.onTransitionComplete = this.onTransitionComplete.bind(this), this.onMobileBtnClick = this.onMobileBtnClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onResize = this.onResize.bind(this), this.onShowHome = this.onShowHome.bind(this), this.onHideHome = this.onHideHome.bind(this), this.onMouseMoveThrottle = h()(this.onMouseMove, 100) } init() {
                a.isMin("sm") ? this.hideBackground() : this.backgroundsPositionY = 55;
                for (const e of this.navPoints) {
                    const t = e.querySelectorAll("div");
                    this.navPointsElements.push(t)
                }
                this.loadingTl = new o.f({ repeat: -1, paused: !0, onComplete: () => { this.loadingTl.restart() } });
                let e = 0;
                for (const t of this.navPointsElements) {
                    for (const s of t) this.loadingTl.set(s, { scale: 0 }, .5 * e).to(s, 1.5, { scale: 3 }, .5 * e).to(s, .75, { alpha: .2 }, .5 * e).to(s, .75, { alpha: 0 }, .75 + .5 * e), e++;
                    e = 0
                }
                this.initEvents(), this.show()
            }
            initEvents() {
                var e, t, s, o;
                window.addEventListener(i.h.AFTER_PAGE_BOOT, this.update, !!window.passiveSupported && { passive: !0 }), window.addEventListener(i.h.TRANSITION_START, this.onTransitionStart, !!window.passiveSupported && { passive: !0 }), window.addEventListener(i.h.TRANSITION_COMPLETE, this.onTransitionComplete, !!window.passiveSupported && { passive: !0 }), document.addEventListener("nav.changeLayout", this.onChangeLayout, !!window.passiveSupported && { passive: !0 }), window.addEventListener("mousemove", this.onMouseMoveThrottle, !!window.passiveSupported && { passive: !0 }), window.addEventListener("resize", (e = this.onResize, t = 20, function() {
                    var i = this,
                        n = arguments,
                        r = function() { o = null, s || e.apply(i, n) },
                        a = s && !o;
                    clearTimeout(o), o = setTimeout(r, t), a && e.apply(i, n)
                }), !!window.passiveSupported && { passive: !0 }), window.addEventListener("NAV_SHOW_HOME", this.onShowHome), window.addEventListener("NAV_HIDE_HOME", this.onHideHome);
                for (const e of this.mobileBtns) e.addEventListener("click", this.onMobileBtnClick, !!window.passiveSupported && { passive: !0 })
            }
            onShowHome() { "home" !== this.page.type && (o.h.killTweensOf(this.navItemAbsolute), o.h.killTweensOf(this.navItems), this.isHomeShow = !0, o.h.to(this.navItemAbsolute, .45, { alpha: 1, y: -10, ease: o.c.easeOut }), o.h.to(this.navItems, .45, { y: -10, alpha: 0, ease: o.c.easeOut })) } onHideHome() { this.isHomeShow && (o.h.killTweensOf(this.navItemAbsolute), o.h.killTweensOf(this.navItems), this.isHomeShow = !1, o.h.to(this.navItemAbsolute, .45, { y: 0, alpha: 0, ease: o.c.easeOut }), o.h.to(this.navItems, .45, { y: 0, alpha: 1, ease: o.c.easeOut })) } onResize() { this.backgroundsPositionY = 80, a.isMin("sm") || (this.backgroundsPositionY = 55, this.navOpen && this.close()) } onMouseMove(e) {
                if (a.isMin("sm")) {
                    if (this.isTransitioning) return;
                    e.pageY <= this.backgroundsPositionY && !this.bgShow ? this.showBackground() : e.pageY > this.backgroundsPositionY && this.bgShow && this.hideBackground()
                }
            }
            onMobileBtnClick() { this.navOpen ? this.close() : this.open() } onTransitionStart() { this.isTransitioning = !0, this.layoutAnimationDelay = 1, this.navOpen || this.hideBackground() } onTransitionComplete() {
                this.isTransitioning = !1, this.layoutAnimationDelay = 0;
                for (const e of this.containers) e.classList.remove("static");
                this.page.scrollManager.isSmooth || (document.documentElement.scrollTop = 0, document.body.scrollTop = 0, this.page.updateScroll())
            }
            onChangeLayout(e) {
                let t = e.detail;
                const s = t.way,
                    i = t.options.layout;
                this.navOpen || !this.animationCompleted || this.isTransitioning || "enter" === s && this.changeLayout(i)
            }
            showBackground() { this.bgShow = !0, o.h.to(this.backgrounds, .55, { y: 0, ease: o.d.easeOut }) } hideBackground() { this.bgShow = !1, o.h.to(this.backgrounds, .55, { y: -this.backgroundsPositionY, ease: o.d.easeOut }) } loading() { let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return new Promise(t => { e ? (o.h.to(this.breadcrumbAppends, .25, { alpha: 0, delay: .25 }), o.h.to(this.navLoading, .25, { alpha: 1, delay: .5 }), this.loadingTl.play()) : (o.h.killTweensOf(this.breadcrumbAppends), o.h.killTweensOf(this.navLoading), o.h.to(this.breadcrumbAppends, .25, { alpha: 1, delay: .25 }), o.h.to(this.navLoading, .25, { alpha: 0 }), o.h.to(this.navPointsElements, .25, { alpha: 0, onComplete: () => { this.loadingTl.pause() } })) }) } update(e) {
                this.page = e.detail;
                for (const e of [...this.bigLetters, ...this.firstBreadcrumbEls]) e.removeEventListener("mouseenter", this.onShowHome), e.removeEventListener("mouseleave", this.onHideHome);
                this.updateLinks(), this.onHideHome();
                let t = this.page.rootElement.getAttribute("data-urls").split("|");
                t.length > 2 && (t = t.slice(0, -1));
                for (const e of this.navLangs) {
                    const s = e.querySelectorAll("a"),
                        i = s.length;
                    for (let e = 0; e < i; e++) {
                        const i = s[e],
                            o = t[e];
                        i && o ? (i.setAttribute("href", o), i.style.display = "block") : i.style.display = "none"
                    }
                }
                if ("home" !== this.page.type && "static" === this.page.context)
                    for (const e of this.breadcrumbAppends) { e.querySelectorAll(".nav-link")[0].innerText = "W S" }
                "static" === this.page.context && this.changeLayout(this.oppositeLayout(this.page.backgroundColor), 0)
            }
            close() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .95,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.c.easeOut;
                return new Promise(i => { this.navOpen = !1, this.animationCompleted = !1, o.h.killTweensOf(this.listsLinks), o.h.killTweensOf(this.listsLinksReverse), o.h.killDelayedCallsTo(), e || this.changeLayout(this.oppositeLayout(), .15, t - .15), o.h.to(this.overlay, t, { alpha: 0, ease: s }), o.h.to(this.backgrounds, t, { y: e ? -this.backgroundsPositionY : 0, ease: s, onComplete: () => { o.h.set(this.listsLinksReverse, { y: .1 * Object(n.a)(), alpha: 0 }), this.animationCompleted = !0, i() } }), o.h.to(this.labelWrappers, t, { yPercent: 0, ease: s }), o.h.to(this.closeLabels, t / 2, { alpha: 1, ease: s }), o.h.to(this.openLabels, t / 2, { alpha: 0, ease: s }), o.h.to(this.lists, t / 2, { pointerEvents: "none", autoAlpha: 0, ease: s }), document.body.classList.remove("nav-open") })
            }
            open() {
                return new Promise(e => {
                    if (!this.animationCompleted) return void e();
                    this.navOpen = !0, this.animationCompleted = !1, o.h.killTweensOf(this.listsLinks), o.h.killTweensOf(this.listsLinksReverse), o.h.killTweensOf(this.backgrounds), o.h.killDelayedCallsTo(), this.changeLayout(this.oppositeLayout()), o.h.to(this.overlay, .75 * .7, { alpha: .85, ease: o.c.easeOut }), o.h.to(this.backgrounds, .75, { y: Object(n.a)() - this.backgroundsPositionY, ease: o.c.easeOut, onComplete: () => { this.animationCompleted = !0 } }), o.h.to(this.labelWrappers, .75, { yPercent: -50, ease: o.c.easeOut, onComplete: e }), o.h.to(this.closeLabels, .375, { alpha: 0, ease: o.c.easeOut }), o.h.to(this.openLabels, .375, { alpha: 1, ease: o.c.easeOut }), o.h.set(this.lists, { pointerEvents: "auto", autoAlpha: 1 }), document.body.classList.add("nav-open"), o.h.staggerTo(this.listsLinks, 1.2, { y: 0, alpha: 1, rotationX: 0, delay: .05, ease: o.d.easeOut }, .075)
                })
            }
            oppositeLayout() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return null === e && (e = this.currentLayout), "white" === e ? "black" : "white" } changeLayout() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "black",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5;
                if (e === this.currentLayout) return;
                const i = o.c.easeOut;
                this.oldLayout = this.currentLayout, this.currentLayout = e, null === t && (t = this.layoutAnimationDelay), "white" === e ? (o.h.to(this.blackElements, s, { alpha: 0, pointerEvents: "none", ease: i, delay: t }), o.h.to(this.whiteElements, s, { alpha: 1, pointerEvents: "auto", delay: t })) : (o.h.to(this.blackElements, s, { alpha: 1, pointerEvents: "auto", ease: i, delay: t }), o.h.to(this.whiteElements, s, { alpha: 0, pointerEvents: "none", ease: i, delay: t }))
            }
            updateLinks() {
                const e = window.location,
                    t = e.pathname,
                    s = e.href;
                for (const e of this.links) {
                    const i = e.getAttribute("href");
                    i === t || i === s ? o.h.to(e, .5, { alpha: .5, pointerEvents: "none" }) : o.h.to(e, .5, { alpha: 1, pointerEvents: "inherit" })
                }
            }
            addListeners() { this.bigLetters = this.page.rootElement.querySelectorAll(".big-letter"), this.firstBreadcrumbEls = document.querySelectorAll(".nav .breadcrumb .nav-item:first-child"); for (const e of [...this.bigLetters, ...this.firstBreadcrumbEls]) e.addEventListener("mouseenter", this.onShowHome), e.addEventListener("mouseleave", this.onHideHome) } changeBreadcrumb() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .75;
                const t = this.page.rootElement.querySelector("#hidden-breadcrumb ul");
                if ("home" !== this.page.type) { t.querySelectorAll(".nav-link")[0].innerText = "W S" }
                for (const s of this.breadcrumbAppends) {
                    const i = s.querySelector(".breadcrumb"),
                        n = i.querySelectorAll("li");
                    s.prepend(t.cloneNode(!0));
                    const r = s.children[0].querySelectorAll("li:not(.nav-item-absolute)");
                    o.h.set(r, { y: 13, alpha: 0 });
                    let a = 0,
                        l = n.length;
                    for (; a < l; a++) {
                        const t = r[a],
                            s = n[a];
                        t && t.innerText.replace(/\s/g, "") === s.innerText.replace(/\s/g, "") && !t.classList.contains(".separator") ? (o.h.set(t, { y: 0, alpha: 1 }), o.h.set(s, { alpha: 0 })) : o.h.to(s, 1, { y: -13, alpha: 0, delay: e + .15 * a, ease: o.d.easeOut })
                    }
                    o.h.staggerTo(r, 1, { y: 0, alpha: 1, delay: e + .15 * a, ease: o.d.easeOut }, .15, () => { this.navItems = document.querySelectorAll(".breadcrumb .nav-item:not(.nav-item-absolute):not(:first-child)"), this.navItemAbsolute = document.querySelectorAll(".nav-item-absolute"), this.addListeners(), i && i.parentNode && i.parentNode.removeChild(i) })
                }
            }
            show() {
                let e = 0;
                for (const t of this.containers) {
                    const s = [...t.querySelectorAll(".nav li:not(.nav-item-absolute)")];
                    o.h.staggerFromTo(s, 1, { y: 10, alpha: 0 }, { y: 0, alpha: 1, delay: .2, ease: o.d.easeOut }, .15, () => { 0 === e && (this.addListeners(), e++) })
                }
            }
        };
        Object.prototype.toString;

        function d(e) { return !isNaN(parseFloat(e)) && isFinite(e) }
        var u = s(4);
        s(101);
        const p = { CLICK: "click.Scroll", ISREADY: "isReady.Scroll", REBUILD: "rebuild.Scroll", RENDER: "render.Scroll", RESIZE: "resize.Scroll", SCROLL: "scroll.Scroll", SCROLLTO: "scrollTo.Scroll", UPDATE: "update.Scroll" },
            m = { container: document, mobileContainer: document, onScroll: function() {}, selector: ".js-animate", smooth: !1, smoothMobile: !1, reversed: !1, getWay: !1, getSpeed: !1 };
        var g = class {
                constructor(e) { this.container = e.container ? e.container : m.container, this.selector = e.selector ? e.selector : m.selector, this.callbacks = { onScroll: "function" == typeof e.onScroll ? e.onScroll : m.onScroll }, this.scroll = { x: 0, y: 0, direction: "" }, this.enabled = !1, this.windowHeight = Object(n.a)(), this.windowMiddle = this.windowHeight / 2, this.animatedElements = [], this.requestId = null, this.onRebuild = this.onRebuild.bind(this), this.onUpdate = this.onUpdate.bind(this), this.onRender = this.onRender.bind(this), this.onScrollTo = this.onScrollTo.bind(this), this.onResize = this.onResize.bind(this), this.onScroll = this.onScroll.bind(this) } init() { document.documentElement.classList.remove("has-smooth-scroll"), this.scroll.y = window.pageYOffset, this.scroll.x = window.pageXOffset, this.addElements(), this.renderAnimations(), document.addEventListener("scroll", this.onScroll, !!window.passiveSupported && { passive: !0 }), document.addEventListener(p.REBUILD, this.onRebuild, !!window.passiveSupported && { passive: !0 }), document.addEventListener(p.UPDATE, this.onUpdate, !!window.passiveSupported && { passive: !0 }), document.addEventListener(p.RENDER, this.onRender, !!window.passiveSupported && { passive: !0 }), document.addEventListener(p.SCROLLTO, this.onScrollTo, !!window.passiveSupported && { passive: !0 }), document.addEventListener(p.RESIZE, this.onResize, !!window.passiveSupported && { passive: !0 }), this.enabled = !0 } onScroll() { this.enabled && this.renderAnimations() } onResize() { this.updateElements() } onScrollTo(e) {
                    let t = e.detail;
                    this.scrollTo(t.options), this.updateElements()
                }
                onRender() { this.renderAnimations(!1) } onUpdate(e, t) { this.updateElements(t) } onRebuild() { this.scrollbar.scrollTo(0, 0, 0), this.updateElements() } addElements() {
                    this.animatedElements = [];
                    const e = this.container.querySelectorAll(this.selector),
                        t = e.length;
                    let s = 0;
                    for (; s < t; s++) {
                        let t = e[s],
                            o = t.getAttribute("data-position"),
                            n = t.getAttribute("data-target"),
                            r = "string" == typeof t.getAttribute("data-sticky"),
                            a = t.getAttribute("data-sticky-target"),
                            l = n && document.querySelector(n).length ? document.querySelector(n) : t,
                            h = l.getBoundingClientRect().top + this.scroll.y,
                            c = h + l.offsetHeight,
                            d = null;
                        t.hasAttribute("data-viewport-offset") && (d = t.getAttribute("data-viewport-offset").split(","));
                        let p = "string" == typeof t.getAttribute("data-callback") ? t.getAttribute("data-callback") : null,
                            m = null;
                        if (null != p) {
                            let e = p.substr(0, p.indexOf("(")),
                                t = p.substr(p.indexOf("("), p.length - e.length);
                            t = t.replace("(", ""), t = t.replace(")", "");
                            let s = t.split("|"),
                                o = {};
                            for (var i = 0; i < s.length; i++) {
                                let e, t = s[i].split(":");
                                t[0] = t[0].replace(" ", ""), e = "true" === t[1] || "false" !== t[1] && (/^\d+$/.test(t[1]) ? parseInt(t[1]) : t[1]), o[t[0]] = e
                            }
                            m = { event: e, options: o }
                        }
                        let g = !!t.getAttribute("data-repeat"),
                            w = t.getAttribute("data-inview-class");
                        w || (w = "is-show"), r && (c = a ? document.querySelector(a).getBoundingClientRect().top - t.innerHeight : this.container.innerHeight, t.classList.remove(w), t.classList.remove("is-unstuck"), u.c.set(t, { x: 0, y: 0, z: 0 })), g && t.classList.contains(w) || (this.animatedElements[s] = { element: t, offset: Math.round(h), repeat: g, position: o, limit: c, inViewClass: w, viewportOffset: d, sticky: r, callback: m })
                    }
                }
                animateElements() {
                    const e = this.animatedElements.length,
                        t = [];
                    let s = 0;
                    for (; s < e; s++) {
                        let e = this.animatedElements[s];
                        this.toggleElement(e, s) && t.push(s)
                    }
                    for (s = t.length; s--;) this.animatedElements.splice(t[s], 1)
                }
                renderAnimations() { this.scroll.y !== window.pageYOffset && (this.scroll.y = window.pageYOffset), this.scroll.x !== window.pageXOffset && (this.scroll.x = window.pageXOffset), this.callbacks.onScroll(this.scroll), this.dispatchScroll(), this.animateElements() } toggleElement(e, t) {
                    let s = !1;
                    if (e) {
                        const t = this.scroll.y,
                            i = t + this.windowHeight;
                        let o = !1;
                        if ("top" === e.position) o = t >= e.offset && t <= e.limit;
                        else if ("below" === e.position) o = t > e.limit;
                        else if (e.sticky) o = t >= e.offset && t <= e.limit;
                        else if (e.viewportOffset)
                            if (e.viewportOffset.length > 1) {
                                let s = t + this.windowHeight * e.viewportOffset[1];
                                o = i - this.windowHeight * e.viewportOffset[0] > e.offset && s < e.limit
                            } else {
                                let t = i - this.windowHeight * e.viewportOffset[0];
                                o = t > e.offset && t < e.limit
                            }
                        else o = i >= e.offset && t <= e.limit;
                        if (e.sticky && (t > e.limit ? e.element.classList.add("is-unstuck") : e.element.classList.remove("is-unstuck"), t < e.offset && e.element.classList.remove(e.inViewClass)), o) {
                            if (e.inView || (e.element.hasAttribute("data-disable-inview-class") || e.element.classList.add(e.inViewClass), e.inView = !0, this.triggerCallback(e, "enter")), e.repeat || e.sticky || (s = !0), e.sticky) {
                                let t = this.scroll.y - e.offset;
                                u.c.set(e.element, { y: t })
                            }
                        } else e.repeat && e.inView && (e.element.hasAttribute("data-disable-inview-class") || e.element.classList.remove(e.inViewClass), e.inView = !1, this.triggerCallback(e, "leave"))
                    }
                    return s
                }
                triggerCallback(e, t) {
                    if (e.callback) {
                        const s = new window.CustomEvent(e.callback.event, { detail: { element: e.element, type: e.callback.event, options: e.callback.options, way: t } });
                        document.dispatchEvent(s)
                    }
                }
                scrollTo(e) {
                    const t = e.targetElem,
                        s = e.sourceElem,
                        i = e.offsetElem;
                    let o = d(e.targetOffset) ? parseInt(e.targetOffset) : 0;
                    const n = d(e.speed) ? parseInt(e.speed) / 1e3 : .8,
                        r = d(e.delay) ? parseInt(e.delay) : 0,
                        a = e.toTop,
                        l = e.toBottom;
                    let h = 0;
                    if (void 0 === t && void 0 === s && void 0 === o) return console.warn("You must specify at least one parameter."), !1;
                    if (void 0 !== t && t && (o = t.getBoundingClientRect().top + o), void 0 !== s && s) {
                        let e = "";
                        e = s.getAttribute("data-target") ? s.getAttribute("data-target") : s.getAttribute("href"), o = document.querySelector(e).getBoundingClientRect().top + o
                    }
                    void 0 !== i && (h = document.querySelector(i).offsetHeight, o -= h), !0 === a ? o = 0 : !0 === l && (o = window.pageYOffset), e.useTarget && (o = t), u.c.to(window, n, { delay: r, scrollTo: { y: o, autoKill: !1 }, ease: u.a.easeOut })
                }
                updateElements() { this.scroll.y = window.pageYOffset, this.scroll.x = window.pageXOffset, this.callbacks.onScroll(this.scroll), this.dispatchScroll(), this.addElements(), this.animateElements() } dispatchScroll() {
                    const e = new window.CustomEvent(p.SCROLL, { detail: { scroll: this.scroll } });
                    document.dispatchEvent(e)
                }
                destroy() { window.cancelAnimationFrame(this.requestId), this.requestId = null, this.animatedElements = [], document.removeEventListener(p.REBUILD, this.onRebuild, !!window.passiveSupported && { passive: !0 }), document.removeEventListener(p.UPDATE, this.onUpdate, !!window.passiveSupported && { passive: !0 }), document.removeEventListener(p.RENDER, this.onRender, !!window.passiveSupported && { passive: !0 }), document.removeEventListener(p.SCROLLTO, this.onScrollTo, !!window.passiveSupported && { passive: !0 }), document.removeEventListener(p.RESIZE, this.onResize, !!window.passiveSupported && { passive: !0 }), document.removeEventListener("scroll", this.onScroll, !!window.passiveSupported && { passive: !0 }) }
            },
            w = window.GreenSockGlobals || window,
            v = function(e) {
                var t, s = e.split("."),
                    i = w;
                for (t = 0; t < s.length; t++) i[s[t]] = i = i[s[t]] || {};
                return i
            }("com.greensock.utils"),
            f = function e(t) {
                var s = t.nodeType,
                    i = "";
                if (1 === s || 9 === s || 11 === s) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) i += e(t) } else if (3 === s || 4 === s) return t.nodeValue;
                return i
            },
            b = document,
            y = b.defaultView ? b.defaultView.getComputedStyle : function() {},
            E = /([A-Z])/g,
            S = function(e, t, s, i) { var o; return (s = s || y(e, null)) ? o = (e = s.getPropertyValue(t.replace(E, "-$1").toLowerCase())) || s.length ? e : s[t] : e.currentStyle && (o = (s = e.currentStyle)[t]), i ? o : parseInt(o, 10) || 0 },
            L = function(e) { return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0])) },
            T = ")eefec303079ad17405c",
            k = /(?:<br>|<br\/>|<br \/>)/gi,
            O = "<div style='position:relative;display:inline-block;" + (b.all && !b.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
            P = function(e) {
                var t = -1 !== (e = e || "").indexOf("++"),
                    s = 1;
                return t && (e = e.split("++").join("")),
                    function() { return O + (e ? " class='" + e + (t ? s++ : "") + "'>" : ">") }
            },
            C = v.SplitText = w.SplitText = function(e, t) {
                if ("string" == typeof e && (e = C.selector(e)), !e) throw new Error("cannot split a null element.");
                this.elements = L(e) ? function(e) {
                    var t, s, i, o = [],
                        n = e.length;
                    for (t = 0; t < n; t++)
                        if (s = e[t], L(s))
                            for (i = s.length, i = 0; i < s.length; i++) o.push(s[i]);
                        else o.push(s);
                    return o
                }(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
            },
            x = function(e, t) { for (var s = t.length; --s > -1;) e.push(t[s]) },
            j = function(e, t, s, i, o) {
                k.test(e.innerHTML) && (e.innerHTML = e.innerHTML.replace(k, T));
                var n, r, a, l, h, c, d, u, p, m, g, w, v, E, L = f(e),
                    O = t.type || t.split || "chars,words,lines",
                    C = -1 !== O.indexOf("lines") ? [] : null,
                    j = -1 !== O.indexOf("words"),
                    M = -1 !== O.indexOf("chars"),
                    A = "absolute" === t.position || !0 === t.absolute,
                    I = A ? "&#173; " : " ",
                    _ = -999,
                    B = y(e),
                    R = S(e, "paddingLeft", B),
                    q = S(e, "borderBottomWidth", B) + S(e, "borderTopWidth", B),
                    H = S(e, "borderLeftWidth", B) + S(e, "borderRightWidth", B),
                    N = S(e, "paddingTop", B) + S(e, "paddingBottom", B),
                    D = S(e, "paddingLeft", B) + S(e, "paddingRight", B),
                    z = S(e, "textAlign", B, !0),
                    W = e.clientHeight,
                    F = e.clientWidth,
                    Y = P(t.wordsClass),
                    V = P(t.charsClass),
                    U = -1 !== (t.linesClass || "").indexOf("++"),
                    X = t.linesClass,
                    G = -1 !== L.indexOf("<"),
                    $ = !0,
                    Z = [],
                    J = [],
                    K = [];
                for (U && (X = X.split("++").join("")), G && (L = L.split("<").join("{{LT}}")), n = L.length, l = Y(), h = 0; h < n; h++)
                    if (")" === (d = L.charAt(h)) && L.substr(h, 20) === T) l += ($ ? "</div>" : "") + "<BR/>", $ = !1, h !== n - 20 && L.substr(h + 20, 20) !== T && (l += " " + Y(), $ = !0), h += 19;
                    else if (" " === d && " " !== L.charAt(h - 1) && h !== n - 1 && L.substr(h - 20, 20) !== T) {
                    for (l += $ ? "</div>" : "", $ = !1;
                        " " === L.charAt(h + 1);) l += I, h++;
                    ")" === L.charAt(h + 1) && L.substr(h + 1, 20) === T || (l += I + Y(), $ = !0)
                } else "{" === d && "{{LT}}" === L.substr(h, 6) ? (l += M ? V() + "{{LT}}</div>" : "{{LT}}", h += 5) : l += M && " " !== d ? V() + d + "</div>" : d;
                for (e.innerHTML = l + ($ ? "</div>" : ""), G && function e(t, s, i) {
                        var o = t.nodeType;
                        if (1 === o || 9 === o || 11 === o)
                            for (t = t.firstChild; t; t = t.nextSibling) e(t, s, i);
                        else 3 !== o && 4 !== o || (t.nodeValue = t.nodeValue.split(s).join(i))
                    }(e, "{{LT}}", "<"), n = (c = e.getElementsByTagName("*")).length, u = [], h = 0; h < n; h++) u[h] = c[h];
                if (C || A)
                    for (h = 0; h < n; h++)((a = (p = u[h]).parentNode === e) || A || M && !j) && (m = p.offsetTop, C && a && m !== _ && "BR" !== p.nodeName && (r = [], C.push(r), _ = m), A && (p._x = p.offsetLeft, p._y = m, p._w = p.offsetWidth, p._h = p.offsetHeight), C && (j !== a && M || (r.push(p), p._x -= R), a && h && (u[h - 1]._wordEnd = !0), "BR" === p.nodeName && p.nextSibling && "BR" === p.nextSibling.nodeName && C.push([])));
                for (h = 0; h < n; h++) a = (p = u[h]).parentNode === e, "BR" !== p.nodeName ? (A && (w = p.style, j || a || (p._x += p.parentNode._x, p._y += p.parentNode._y), w.left = p._x + "px", w.top = p._y + "px", w.position = "absolute", w.display = "block", w.width = p._w + 1 + "px", w.height = p._h + "px"), j ? a && "" !== p.innerHTML ? J.push(p) : M && Z.push(p) : a ? (e.removeChild(p), u.splice(h--, 1), n--) : !a && M && (m = !C && !A && p.nextSibling, e.appendChild(p), m || e.appendChild(b.createTextNode(" ")), Z.push(p))) : C || A ? (e.removeChild(p), u.splice(h--, 1), n--) : j || e.appendChild(p);
                if (C) {
                    for (A && (g = b.createElement("div"), e.appendChild(g), v = g.offsetWidth + "px", m = g.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(g)), w = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                    for (E = !A || !j && !M, h = 0; h < C.length; h++) {
                        for (r = C[h], (g = b.createElement("div")).style.cssText = "display:block;text-align:" + z + ";position:" + (A ? "absolute;" : "relative;"), X && (g.className = X + (U ? h + 1 : "")), K.push(g), n = r.length, c = 0; c < n; c++) "BR" !== r[c].nodeName && (p = r[c], g.appendChild(p), E && (p._wordEnd || j) && g.appendChild(b.createTextNode(" ")), A && (0 === c && (g.style.top = p._y + "px", g.style.left = R + m + "px"), p.style.top = "0px", m && (p.style.left = p._x - m + "px")));
                        0 === n && (g.innerHTML = "&nbsp;"), j || M || (g.innerHTML = f(g).split(String.fromCharCode(160)).join(" ")), A && (g.style.width = v, g.style.height = p._h + "px"), e.appendChild(g)
                    }
                    e.style.cssText = w
                }
                A && (W > e.clientHeight && (e.style.height = W - N + "px", e.clientHeight < W && (e.style.height = W + q + "px")), F > e.clientWidth && (e.style.width = F - D + "px", e.clientWidth < F && (e.style.width = F + H + "px"))), x(s, Z), x(i, J), x(o, K)
            },
            M = C.prototype;
        /*!
         * VERSION: 0.3.4
         * DATE: 2015-08-15
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
         * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
         * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
         * This work is subject to the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        M.split = function(e) { this.isSplit && this.revert(), this.vars = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0; for (var t = this.elements.length; --t > -1;) this._originals[t] = this.elements[t].innerHTML, j(this.elements[t], this.vars, this.chars, this.words, this.lines); return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this }, M.revert = function() { if (!this._originals) throw new Error("revert() call wasn't scoped properly."); for (var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e]; return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this }, C.selector = window.$ || window.jQuery || function(e) { var t = window.$ || window.jQuery; return t ? (C.selector = t, t(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) }, C.version = "0.3.4";
        var A = C;
        class I extends i.d {
            constructor() { super(), this.clonedProjectImage = null, this.imageAppendCont = null, this.pageContentWrapper = null, this.splitedTitle = null } start() { Promise.all([this.newPageLoading, this.fadeOut()]).then(this.fadeIn.bind(this)) } fadeOut() {
                return new Promise(e => {
                    if (this.oldPage.hideBackground(), this.oldPage.destroyEvents(), this.oldPage.rootElement.style.zIndex = 11, this.splitedTitle = new A(this.oldPage.lastSelectedProjectTitle, { type: "chars, lines" }), a.isMin("sm"))
                        for (const e of this.splitedTitle.lines) {
                            let t = 1,
                                s = 10,
                                i = [...e.children];
                            this.oldPage.lastSelectedProject.isOdd && (i = i.reverse());
                            for (const e of i) {
                                s *= 1.2;
                                let i = s;
                                this.oldPage.lastSelectedProject.isOdd && (i = -s), o.h.to(e, 2, { x: i, delay: .5 + .1 * t, ease: o.a.easeInOut })
                            }
                        } else o.h.staggerTo(this.splitedTitle.lines.reverse(), .75, { delay: .15, yPercent: 75, alpha: 0, ease: o.e.easeIn }, .1);
                    this.clonedProjectImage = this.oldPage.lastSelectedProject, this.clonedProjectImage.cloneTo(this.oldPage.rootElement.parentNode);
                    const t = this.clonedProjectImage.getDiffY(),
                        s = Math.abs(t) / Math.round(.8 * Object(n.a)());
                    let i = Math.max(1, 1.2 * s),
                        r = -.17 * Object(n.a)(),
                        l = this.oldPage.lastSelectedProject.old;
                    this.oldPage.scrollManager.isSmooth || (i = Math.min(2, Math.max(1, Math.abs(t) / Math.round(.8 * Object(n.a)()))), r = window.scrollY + t, l = null), o.h.delayedCall(.1, () => {
                        const s = new window.CustomEvent(p.SCROLLTO, { detail: { options: { speed: 1e3 * i, targetOffset: r, targetElem: l } } });
                        document.dispatchEvent(s), this.clonedProjectImage.goPosY(i, t).then(e)
                    })
                })
            }
            fadeIn() {
                document.body.classList.add("transitioning"), c.changeLayout(c.oppositeLayout(c.page.backgroundColor), .4, .85), this.newPage.buildScroll(), this.newPage.rootElement.style.backgroundColor = "", this.imageAppendCont = this.newPage.rootElement.querySelector("#image-append"), this.pageContentWrapper = this.newPage.rootElement.querySelector(".page-content_wrapper"), this.imageAppendCont.innerHTML = "", this.clonedProjectImage.el.classList.add("clone"), this.imageAppendCont.appendChild(this.clonedProjectImage.el), this.clonedProjectImage.resetY(), a.isMin("xs") && this.clonedProjectImage.goTo(), this.newPage.scrollManager && this.newPage.scrollManager.update(), o.h.set(this.newPage.rootElement.querySelectorAll('.project-page-bg[data-layout="white"]'), { alpha: 0 }), o.h.set(this.newPage.rootElement, { autoAlpha: 1, position: "fixed", top: 0, right: 0, left: 0 });
                let e = -55,
                    t = -100,
                    s = "right";
                this.oldPage.lastSelectedProject.isOdd && (e = -e, t = -t, s = "left"), a.isMin("sm") || (e = 0), "left" === s ? this.newPage.rootElement.setAttribute("data-align", "right") : this.newPage.rootElement.setAttribute("data-align", "left"), this.newPage.changeBackground(t), o.h.delayedCall(.75, () => { i.g.commit("SHOW_PAGE_CONTENT") }), o.h.to(this.oldPage.rootElement, .75, { alpha: 0 }), o.h.to(this.oldPage.rootElement, 1.5, { xPercent: e, ease: o.e.easeInOut, onComplete: () => { this.done(), document.body.classList.remove("transitioning"), this.newPage.rootElement.style.backgroundColor = "#fff" } }), c.changeBreadcrumb(.4)
            }
        }
        class _ extends i.d {
            constructor() { super(), this.mobileNavOpened = !1 } start() {
                const e = [this.newPageLoading],
                    t = this.oldPage.rootElement.querySelector(".page-overlay");
                c.navOpen && (this.mobileNavOpened = !0, c.loading(!0)), o.h.to(t, 1.2, { alpha: .85, delay: 0, ease: o.c.easeInOut }), Promise.all(e).then(() => (document.body.classList.add("transitioning"), this.oldPage.destroyEvents(), this.newPage.buildScroll(), this.newPage.preLoad())).then(() => this.newPage.afterPreLoad()).then(() => this.mobileNavOpened ? (c.loading(!1), c.close(!0, 1), Promise.resolve()) : Promise.resolve()).then(() => this.slideUp())
            }
            slideUp() {
                document.body.classList.remove("static");
                let e = 1.2;
                const t = this.newPage.rootElement.querySelectorAll(".page-content_inner"),
                    s = o.d.easeInOut;
                this.newPage.showBackground(), a.isMobile() && (e = 1.55), this.newPage.updateScroll(), o.h.set(this.newPage.rootElement, { position: "fixed", top: 0, right: 0, left: 0, autoAlpha: 1, zIndex: 5, y: window.screen.height || Object(n.a)() });
                const r = new o.f({ paused: !0, onComplete: () => { this.done(), document.body.classList.remove("transitioning"), a.isMobile() && c.showBackground() } });
                r.to(this.newPage.rootElement, e, { y: 0, ease: s }, 0).to(t, .7 * e, { alpha: 1 }, 0).to(this.oldPage.rootElement, e, { y: -Object(n.a)() / 2, ease: s }, 0), r.play(), o.h.delayedCall(e / 2, () => { i.g.commit("SHOW_PAGE_CONTENT") }), o.h.delayedCall(e - .5, () => { c.changeLayout(c.oppositeLayout(c.page.backgroundColor), 0, .85), c.changeBreadcrumb(0) })
            }
        }
        var B = new class {
            constructor() { this.blackEl = document.querySelector(".generic_bg_black"), this.whiteEl = document.querySelector(".generic_bg_white") } show() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "black",
                    t = this.whiteEl,
                    s = this.blackEl;
                "black" === e && (t = this.blackEl, s = this.whiteEl), o.h.set(t, { alpha: 1 }), o.h.set(s, { alpha: 0 })
            }
            hide() { o.h.set([this.whiteEl, this.blackEl], { alpha: 0 }) } hideAnimate() { o.h.to([this.whiteEl, this.blackEl], 1, { alpha: 0 }) }
        };
        const R = document.getElementById("main-container");
        class q extends i.d {
            start() { Promise.all([this.newPageLoading, this.animOut()]).then(this.animIn.bind(this)) } animOut() { return new Promise(e => { this.oldPage.scrollManager.disable(), this.oldPage.destroyEvents(), e() }) } animIn() {
                document.body.classList.add("transitioning"), o.h.set(this.newPage.rootElement, { position: "fixed", top: 0, right: 0, left: 0 });
                const e = Object(n.a)(),
                    t = o.e.easeInOut,
                    s = this.oldPage.scrollManager.getScrollDistanceEnd(),
                    r = this.newPage.rootElement.querySelector(".introduction_wrapper");
                "black" === this.newPage.backgroundColor && B.show(this.newPage.backgroundColor), c.changeLayout(c.oppositeLayout(c.page.backgroundColor), .4, .85);
                const l = this.oldPage.rootElement.querySelector(".project-next"),
                    h = l.cloneNode(!0),
                    d = h.children[0];
                h.classList.add("clone"), h.setAttribute("data-align", this.oldPage.rootElement.getAttribute("data-align")), R.appendChild(h), a.isMobile() ? o.h.set(h, { bottom: 0 }) : o.h.set(h, { bottom: -s });
                let u = 0;
                u = a.isMin("xs") ? e / 2 - 129 - e - s : -h.getBoundingClientRect().top, "white" === this.newPage.backgroundColor ? (o.h.to(h.querySelectorAll(".introduction.black"), 1, { alpha: 1 }), o.h.to(h.querySelectorAll(".introduction.white"), 1, { alpha: 0 })) : o.h.to(h.querySelectorAll(".introduction.black"), 1, { alpha: 0 }), o.h.set(l, { alpha: 0 }), o.h.to(d, 2, { y: 0, ease: o.e.easeInOut }), o.h.to(h, 2, { y: u, ease: o.e.easeInOut }), c.changeBreadcrumb(), o.h.to(this.newPage.rootElement, 1, { autoAlpha: 1, delay: 1 }), o.h.to(this.oldPage.rootElement, 1, { alpha: 0, ease: t }), o.h.delayedCall(1, () => { "left" === this.oldPage.rootElement.getAttribute("data-align") ? this.newPage.rootElement.setAttribute("data-align", "right") : this.newPage.rootElement.setAttribute("data-align", "left"), this.newPage.buildScroll() }), o.h.delayedCall(1.2, () => { o.h.set(r, { alpha: 0 }), i.g.commit("SHOW_PAGE_CONTENT") }), o.h.delayedCall(2.1, () => {
                    document.body.classList.remove("transitioning");
                    const e = this.newPage.rootElement.querySelector(".introduction_wrapper");
                    e.innerHTML = "", e.appendChild(h.children[0]), h.parentNode.removeChild(h), a.isMobile() && c.showBackground(), o.h.set(e, { alpha: 1 }), this.done(), this.newPage.scrollManager.update(), "black" === this.newPage.backgroundColor ? B.hide() : B.hideAnimate()
                })
            }
        }
        class H extends i.d { start() { this.oldPage.rootElement.classList.add("page-content-fixed"), document.body.classList.add("transitioning"), Promise.all([this.newPageLoading, this.fadeOut()]).then(this.fadeIn.bind(this)) } fadeOut() { return this.oldPage.destroyEvents(), new Promise(e => { o.h.to(this.oldPage.rootElement, .85, { alpha: 0, y: -75, ease: o.d.easeIn, onComplete: e }) }) } fadeIn() { this.newPage.preLoad(), this.newPage.buildScroll(), o.h.fromTo(this.newPage.rootElement, .75, { y: 75, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: o.d.easeOut, onStart: () => { document.body.classList.remove("transitioning"), this.newPage.showBackground(), i.g.commit("SHOW_PAGE_CONTENT"), this.done() } }) } } class N {
            constructor() { this.lastTransition = null } getTransition(e, t) {
                let s;
                if (/Trident\/|MSIE/.test(window.navigator.userAgent)) return new H;
                if (e.url.includes("/projects") && !t.url.includes("/projects") || !t.transitionName && t.url.includes("/projects")) return this.lastTransition = "slide-up", new _;
                switch (t.transitionName) {
                    case "project":
                        s = new I, this.lastTransition = "project";
                        break;
                    case "next-project":
                        s = new q, this.lastTransition = "next-project";
                        break;
                    case "slide-up":
                    default:
                        s = new _, this.lastTransition = "slide-up"
                }
                return s
            }
        }
        var D = s(81),
            z = s.n(D),
            W = s(82),
            F = s.n(W),
            Y = s(84),
            V = s.n(Y),
            U = s(31),
            X = class extends g {
                constructor(e) { super(e), this.isReversed = e.reversed || m.reversed, this.getWay = e.getWay || m.getWay, this.getSpeed = e.getSpeed || m.getSpeed, this.parallaxElements = [], this.getSpeed && (this.scroll.speed = 0) } init() { U.default.use(F.a, V.a), this.scrollbar = U.default.init(this.container), this.scrollbarStatus = null, this.setScrollbarLimit(), this.setWheelDirection(this.isReversed), this.addElements(), this.renderAnimations(!0), this.scrollbar.addListener(e => this.renderAnimations(!1, e)), document.addEventListener(p.REBUILD, this.onRebuild, !!window.passiveSupported && { passive: !0 }), document.addEventListener(p.UPDATE, this.onUpdate, !!window.passiveSupported && { passive: !0 }), document.addEventListener(p.RENDER, this.onRender, !!window.passiveSupported && { passive: !0 }), document.addEventListener(p.SCROLLTO, this.onScrollTo, !!window.passiveSupported && { passive: !0 }), document.addEventListener(p.RESIZE, this.onResize, !!window.passiveSupported && { passive: !0 }) } onScrollTo(e) {
                    let t = e.detail;
                    this.scrollTo(t.options)
                }
                addElements() {
                    this.animatedElements = [], this.parallaxElements = [];
                    const e = this.container.querySelectorAll(this.selector),
                        t = e.length;
                    let s = 0;
                    for (; s < t; s++) {
                        let t = e[s],
                            o = t.getBoundingClientRect(),
                            n = !!d(t.getAttribute("data-speed")) && t.getAttribute("data-speed") / 10,
                            r = t.getAttribute("data-target"),
                            a = "string" == typeof t.getAttribute("data-sticky"),
                            l = t.getAttribute("data-sticky-target"),
                            h = r && document.querySelector(r).length ? document.querySelector(r) : t,
                            c = h.getBoundingClientRect().top + this.scrollbar.scrollTop,
                            u = c + h.offsetHeight,
                            p = null;
                        t.hasAttribute("data-viewport-offset") && (p = t.getAttribute("data-viewport-offset").split(","));
                        let m = "string" == typeof t.getAttribute("data-callback") ? t.getAttribute("data-callback") : null,
                            g = null;
                        if (null != m) {
                            let e = m.substr(0, m.indexOf("(")),
                                t = m.substr(m.indexOf("("), m.length - e.length);
                            t = t.replace("(", ""), t = t.replace(")", "");
                            let s = t.split("|"),
                                o = {};
                            for (var i = 0; i < s.length; i++) {
                                let e, t = s[i].split(":");
                                t[0] = t[0].replace(" ", ""), e = "true" === t[1] || "false" !== t[1] && (/^\d+$/.test(t[1]) ? parseInt(t[1]) : t[1]), o[t[0]] = e
                            }
                            g = { event: e, options: o }
                        }
                        let w = !!t.getAttribute("data-repeat"),
                            v = t.getAttribute("data-inview-class");
                        if (v || (v = "is-show"), !r && t.getAttribute("data-transform") && (c -= parseFloat(t.getAttribute("data-transform").y)), !r && t.getAttribute("data-offset-y") && (c += h.offsetHeight * parseFloat(t.getAttribute("data-offset-y"))), a)
                            if (l) { u = document.querySelector(l).getBoundingClientRect().top - o.height + this.scrollbar.scrollTop } else u = 1 / 0;
                        const f = { element: t, inViewClass: v, limit: u, offset: Math.round(c), repeat: w, callback: g, viewportOffset: p, inView: !1 };
                        if (!1 !== n) {
                            let e = t.getAttribute("data-position"),
                                s = t.getAttribute("data-horizontal"),
                                i = (u - c) / 2 + c;
                            f.horizontal = s, f.middle = i, f.offset = c, f.position = e, f.speed = n, this.parallaxElements.push(f)
                        } else f.sticky = a, this.animatedElements.push(f), a && this.toggleElement(f)
                    }
                }
                renderAnimations(e, t) {
                    t && (this.scrollbarStatus = t);
                    const s = this.scrollbar.scrollTop;
                    this.getWay && (s > this.scroll.y ? "down" !== this.scroll.direction && (this.scroll.direction = "down") : s < this.scroll.y && "up" !== this.scroll.direction && (this.scroll.direction = "up")), this.getSpeed && (this.scroll.y !== s ? (this.scroll.speed = this.scrollbar.movement.y, this.scroll.y = s) : this.scroll.speed = 0), this.scroll.y !== s && (this.scroll.y = s), this.transformElements(e), this.dispatchScroll(), this.animateElements()
                }
                scrollTo(e) {
                    const t = e.targetElem,
                        s = e.sourceElem,
                        i = e.offsetElem;
                    let n = d(e.targetOffset) ? parseInt(e.targetOffset) : 0;
                    const r = d(e.delay) ? parseInt(e.delay) : 0,
                        a = d(e.speed) ? parseInt(e.speed) : 900,
                        l = e.toTop,
                        h = e.toBottom;
                    let c = 0;
                    if (void 0 === t && void 0 === s && void 0 === n) return console.warn("You must specify at least one parameter."), !1;
                    if (t) {
                        const e = t.getBoundingClientRect();
                        n = e.top + this.scrollbar.scrollTop + n
                    }
                    if (s) {
                        let e = "";
                        e = s.getAttribute("data-target") ? s.getAttribute("data-target") : s.getAttribute("href");
                        const t = document.querySelector(e).getBoundingClientRect();
                        n = t.top + this.scrollbar.scrollTop + n
                    }
                    i && (c = i.offsetHeight, n -= c), !0 === l ? n = 0 : !0 === h && (n = this.scrollbar.limit.y), o.h.delayedCall(r / 1e3, () => { this.scrollbar.scrollTo(0, Math.round(n), a, { easing: e => 1 - --e * e * e * e }) })
                }
                setScrollbarLimit() { this.scrollbarLimit = this.scrollbar.limit.y + this.windowHeight } transformElement(e, t, s) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    t = t || 0, s = s || 0, i = i || 0, e.style.transform = `translate3d(${t}px, ${s}px, ${i}px)`, e.style.webkitTransform = `translate3d(${t}px, ${s}px, ${i}px)`, e.style.mozTransform = `translate3d(${t}px, ${s}px, ${i}px)`
                }
                transformElements(e) {
                    if (this.parallaxElements.length > 0) {
                        const t = this.scrollbar.scrollTop + this.windowHeight,
                            s = this.scrollbar.scrollTop + this.windowMiddle;
                        let i = 0;
                        const o = this.parallaxElements.length;
                        for (; i < o; i++) {
                            let o = this.parallaxElements[i],
                                n = "top" === o.position ? this.scrollbar.scrollTop : t,
                                r = !1,
                                a = n >= o.offset && this.scrollbar.scrollTop <= o.limit;
                            if (this.toggleElement(o, i), e && !a && o.speed && "top" !== o.position && (r = (o.offset - this.windowMiddle - o.middle) * -o.speed), a && o.speed) switch (o.position) {
                                case "top":
                                    r = (this.scrollbar.scrollTop - o.offset) * -o.speed;
                                    break;
                                case "bottom":
                                    r = (this.scrollbarLimit - n) * o.speed;
                                    break;
                                default:
                                    r = (s - o.middle) * -o.speed
                            }
                            d(r) && (o.horizontal ? this.transformElement(o.element, r.toFixed(2), 0) : this.transformElement(o.element, 0, r.toFixed(2), 0))
                        }
                    }
                }
                updateElements(e) { e = e || {}, this.scrollbar.update(), this.windowHeight = Object(n.a)(), this.windowMiddle = this.windowHeight / 2, this.setScrollbarLimit(), this.setWheelDirection(this.isReversed), this.addElements(), this.transformElements(!0), "function" == typeof e.callback && e.callback(), this.renderAnimations(!1) } setWheelDirection(e) {} destroy() { super.destroy(), this.parallaxElements = [], this.scrollbar.destroy() }
            };

        function G(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), s.push.apply(s, i)
            }
            return s
        }
        class $ {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.options = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? G(Object(s), !0).forEach((function(t) { z()(e, t, s[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : G(Object(s)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t)) }))
                    }
                    return e
                }({ container: document.getElementById("scroll"), selector: ".js-animate", smooth: !0, smoothMobile: !1, mobileContainer: document, getWay: !1, getSpeed: !1 }, e), this.smooth = this.options.smooth || m.smooth, this.smoothMobile = this.options.smoothMobile || m.smoothMobile, this.mobileContainer = this.options.mobileContainer || m.mobileContainer, this.isMobile = !1, this.isSmooth = !1, this.instance = null
            }
            init() { this.smoothMobile || (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)), !0 !== this.smooth || this.isMobile ? (this.mobileContainer && (this.options.container = this.mobileContainer), this.instance = new g(this.options)) : (this.isSmooth = !0, this.instance = new X(this.options)), this.instance.init() } update() { this.instance.updateElements() } reset() { this.isSmooth ? this.instance.scrollbar.setPosition(0, 0) : window.scrollY, this.update() } enable() { this.instance.enabled = !0, this.isSmooth && this.instance.scrollbar.updatePluginOptions("stop", { disable: !1 }) } disable() { this.instance.enabled = !1, this.isSmooth && this.instance.scrollbar.updatePluginOptions("stop", { disable: !0 }) } getPositions() { return this.instance.scroll } getScrollHeight() { return this.isSmooth ? this.instance.scrollbar.limit.y : document.body.scrollHeight } scrollTo(e, t) {
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                s && this.isSmooth || s ? this.instance.scrollTo({ targetOffset: t, speed: s }) : this.isSmooth ? this.instance.scrollbar.setPosition(e, t) : window.scrollTo(e, t)
            }
            getScrollDistanceEnd() { return this.getScrollHeight() - this.getPositions().y } destroy() { this.instance.destroy() }
        }
        var Z = new class {
                constructor() { this.container = null, this.backToTop = null, this.backToTopTl = null, this.scrollManager = null, this.duration = 1.25, this.backToTopLeft = null, this.backToTopRight = null, this.backToTopBottom = null, this.onBackToTopClick = this.onBackToTopClick.bind(this), this.onBackToTopMouseEvent = this.onBackToTopMouseEvent.bind(this) } initEvents() { this.backToTop.addEventListener("click", this.onBackToTopClick, !!window.passiveSupported && { passive: !0 }), this.backToTop.addEventListener("mouseenter", this.onBackToTopMouseEvent, !!window.passiveSupported && { passive: !0 }), this.backToTop.addEventListener("mouseleave", this.onBackToTopMouseEvent, !!window.passiveSupported && { passive: !0 }) } removeEvents() { this.backToTop && (this.backToTop.removeEventListener("click", this.onBackToTopClick, !!window.passiveSupported && { passive: !0 }), this.backToTop.removeEventListener("mouseenter", this.onBackToTopMouseEvent, !!window.passiveSupported && { passive: !0 }), this.backToTop.removeEventListener("mouseleave", this.onBackToTopMouseEvent, !!window.passiveSupported && { passive: !0 })) } onBackToTopClick() {
                    const e = Math.min(this.scrollManager.getScrollHeight() / 2500 * 1e3, 2500);
                    this.scrollManager.scrollTo(0, 0, Math.round(e))
                }
                onBackToTopMouseEvent(e) {
                    if ("mouseenter" === e.type) {
                        const e = new o.f({ paused: !0 });
                        e.to(this.backToTopBottom, 1, { scaleY: 0, ease: o.e.easeOut }, 0), e.to(this.backToTopLeft, 1.15, { rotation: -45, scaleX: .85, scaleY: .8, force3D: !0, ease: o.a.easeOut }, .1), e.to(this.backToTopRight, 1.15, { rotation: 45, scaleX: .85, scaleY: .8, force3D: !0, ease: o.a.easeOut }, .1), e.play()
                    } else {
                        const e = new o.f({ paused: !0 });
                        e.to(this.backToTopBottom, 1, { scaleY: 1, ease: o.e.easeOut }, .1), e.to(this.backToTopLeft, 1.15, { rotation: 0, scaleX: .5, scaleY: 1, force3D: !0, ease: o.a.easeOut }, 0), e.to(this.backToTopRight, 1.15, { rotation: 0, scaleX: .5, scaleY: 1, force3D: !0, ease: o.a.easeOut }, 0), e.play()
                    }
                }
                reset(e, t) { this.removeEvents(), this.container = e, this.scrollManager = t, this.backToTopTl = null, this.backToTop = this.container.querySelector(".back-to-top"), this.backToTop && (this.backToTopLeft = this.container.querySelector(".back-to-top__el-top-left"), this.backToTopRight = this.container.querySelector(".back-to-top__el-top-right"), this.backToTopBottom = this.container.querySelector(".back-to-top__el-bottom"), this.initEvents()) }
            },
            J = s(85),
            K = s.n(J);
        class Q extends i.c {
            constructor(e) { super(e, "DefaultPage"), this.bgBlack = null, this.bgWhite = null, this.bg = null, this.footerCanvasEl = null, this.backgroundColor = null, this.isWhiteBackground = !1, this.scrollManager = null, this.interactiveScroll = null, this.interactiveScrollerLayout = "black", this.newLayout = null, this.lastScrollY = 0, this.footerCanvas = null, this.delay = 0, this.showPageContent = !1, this.delayedAnimations = [], this.onFooterShow = this.onFooterShow.bind(this), this.onShowScroll = this.onShowScroll.bind(this), this.onShowPageContent = this.onShowPageContent.bind(this), this.onTransitionComplete = this.onTransitionComplete.bind(this), this.onChangeLayout = this.onChangeLayout.bind(this), this.onImageShow = this.onImageShow.bind(this) } async init() { await super.init(), this.bgBlack = this.rootElement.querySelector(".main_background-black"), this.bgWhite = this.rootElement.querySelector(".main_background-white"), this.bg = null, this.footerCanvasEl = this.rootElement.querySelector("#footer__canvas"), this.backgroundColor = this.rootElement.getAttribute("data-background-color"), "static" === this.context && (this.rootElement.classList.add("ready"), this.buildScroll(), o.h.delayedCall(.6, () => { i.g.commit("SHOW_PAGE_CONTENT") })), this.loadInteractiveScroller(), this.checkLinks() } destroy() { super.destroy(), this.scrollManager && this.scrollManager.destroy() } initEvents() { document.addEventListener("show.Scroll", this.onShowScroll, !!window.passiveSupported && { passive: !0 }), document.addEventListener("scroll.ImageShow", this.onImageShow, !!window.passiveSupported && { passive: !0 }), document.addEventListener("scroll.changeLayout", this.onChangeLayout, !!window.passiveSupported && { passive: !0 }), window.addEventListener("resize", this.onResizeDebounce, !!window.passiveSupported && { passive: !0 }), window.addEventListener("SHOW_PAGE_CONTENT", this.onShowPageContent, !!window.passiveSupported && { passive: !0 }), window.addEventListener(i.h.TRANSITION_COMPLETE, this.onTransitionComplete, !!window.passiveSupported && { passive: !0 }) } destroyEvents() {
                if (null !== this.blocks)
                    for (let e in this.blocks) this.blocks.hasOwnProperty(e) && this.blocks[e].destroyEvents();
                document.removeEventListener("show.Scroll", this.onShowScroll, !!window.passiveSupported && { passive: !0 }), document.removeEventListener("scroll.ImageShow", this.onImageShow, !!window.passiveSupported && { passive: !0 }), document.removeEventListener("scroll.changeLayout", this.onChangeLayout, !!window.passiveSupported && { passive: !0 }), window.removeEventListener("resize", this.onResizeDebounce, !!window.passiveSupported && { passive: !0 }), window.removeEventListener("SHOW_PAGE_CONTENT", this.onShowPageContent, !!window.passiveSupported && { passive: !0 }), window.removeEventListener(i.h.TRANSITION_COMPLETE, this.onTransitionComplete, !!window.passiveSupported && { passive: !0 })
            }
            checkLinks() { const e = [...this.rootElement.querySelectorAll("a")]; for (const t of e) window.location.protocol === t.protocol && window.location.hostname === t.hostname && i.l.getPort() === i.l.getPort(t.port) || (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener")) } onImageShow(e) {
                let t = e.detail;
                if (a.isMobile()) return;
                const s = t.element;
                o.h.to(s, 1, { y: 0, delay: .15, ease: o.d.easeOut, roundProps: "y" }), o.h.to(s, .75, { delay: .15, ease: o.c.easeOut }), s.classList.contains("lazyloaded") && (s.style.transition = "none", o.h.fromTo(s, .75, { alpha: 0 }, { alpha: 1, delay: .15, ease: o.c.easeOut }))
            }
            preLoad() { return Promise.all(this.blocks.map(e => e.preLoad())) } afterPreLoad() { return Promise.all(this.blocks.map(e => e.afterPreLoad())) } loadInteractiveScroller() { a.isMin("md") && Promise.all([s.e(2), s.e(0)]).then(s.bind(null, 91)).then(e => { this.interactiveScroll = e.default, this.scrollManager && o.h.delayedCall(.45, () => { this.interactiveScroll.attachScrollManager(this.scrollManager), this.interactiveScroll.currentLayout || this.interactiveScroll.setLayout(this.newLayout) }) }) } onChangeLayout(e) {
                let t = e.detail;
                const s = t.way,
                    i = t.options.layout;
                "enter" === s && (this.newLayout = i)
            }
            onTransitionComplete() {} onShowPageContent() { this.showPageContent = !0, this.showScrollElements(K()(this.delayedAnimations)) } onShowScroll(e) {
                let t = e.detail;
                const s = t.element,
                    i = t.options,
                    o = [...s.children];
                this.showPageContent ? this.showScrollElements([{ elements: o, type: i.type || "normal", mobileOpacity: i.mobileOpacity || 1 }]) : this.delayedAnimations.push({ elements: o, type: i.type || "normal", mobileOpacity: parseFloat(i.mobileOpacity) || 1 }), s.classList.remove("js-animate")
            }
            showScrollElements(e) {
                let t = .12,
                    s = 1;
                for (const i of e) {
                    let e = i.type;
                    a.isMobile() && (s = i.mobileOpacity);
                    for (const n of i.elements) {
                        if ("normal" === e) o.h.to(n, 1.2, { delay: t, ease: o.d.easeOut, rotationX: 0, alpha: s, force3D: !0, y: 0 });
                        else if ("footer" === e) {
                            const e = n.querySelectorAll(".footer__info");
                            o.h.to(e, 1.2, { ease: o.d.easeOut, delay: t, rotationX: 0, alpha: s, y: 0 }, .05)
                        }
                        t += .12
                    }
                }
            }
            onFooterShow(e) {
                let t = e.detail;
                const s = t.element,
                    i = t.options,
                    n = s.querySelector(".footer__content-bg"),
                    r = s.querySelectorAll(".footer__info");
                let a = parseFloat(i.delay) || .25;
                "static" !== this.context && (a = 0), o.h.staggerTo(r, 1.2, { ease: o.d.easeOut, delay: a, rotationX: 0, alpha: 1, y: 0 }, .05), o.h.to(n, .75, { x: 0, delay: .1, ease: o.a.easeOut })
            }
            buildScroll() { this.scrollManager = new $({ container: this.rootElement.querySelector("#scroll"), mobileContainer: this.rootElement }), this.scrollManager.init(), o.h.delayedCall(.25, () => { this.interactiveScroll && this.interactiveScroll.attachScrollManager(this.scrollManager); for (const e of this.blocks) e.scrollManagerReady() }), Z.reset(this.rootElement, this.scrollManager) } updateScroll() { this.scrollManager && this.scrollManager.update() } onResize() { super.onResize(), this.interactiveScroll && this.interactiveScroll.updateValues() } hideBackground() {} showBackground() {} animateInBackground() {}
        }
        class ee extends i.a { constructor(e) { super(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "DefaultBlock"), this.imagesLength = 0, this.imagesLoadedLength = 0 } scrollManagerReady() {} preLoad() { return new Promise(e => { e() }) } afterPreLoad() { return Promise.resolve() } } class te extends ee {
            constructor(e) { super(e, "IntroductionBlock"), this.splitText = null, this.defaultTitle = "", this.delay = 0, this.transitionCompleted = !1, this.splitAnimationCompleted = !1, this.onTransitionComplete = this.onTransitionComplete.bind(this), this.onShowPageContent = this.onShowPageContent.bind(this) } init() { super.init(), this.rootElement.classList.contains("big-letter") || (this.delay = .2) } initEvents() { super.initEvents(), window.addEventListener("SHOW_PAGE_CONTENT", this.onShowPageContent), window.addEventListener("SB_TRANSITION_COMPLETE", this.onTransitionComplete) } destroyEvents() { super.destroyEvents(), window.removeEventListener("SHOW_PAGE_CONTENT", this.onShowPageContent), window.removeEventListener("SB_TRANSITION_COMPLETE", this.onTransitionComplete) } check() { this.splitAnimationCompleted && this.transitionCompleted && o.h.set(this.page.rootElement, { position: "relative" }) } onTransitionComplete() { this.transitionCompleted = !0, this.check() } cutText() { this.splitText = new A(this.rootElement, { type: "lines" }), this.rootElement.classList.contains("no-effects") || (o.h.set(this.splitText.lines, { y: .1 * Object(n.a)() }), o.h.set(this.rootElement, { alpha: 1 })) } onShowPageContent() {
                this.splitText || this.cutText();
                let e = .1;
                a.isMobile() && (e = .05), o.h.staggerTo(this.splitText.lines, 1, { ease: o.d.easeOut, rotationX: 0, alpha: 1, delay: this.delay, y: 0 }, e, () => { this.splitText.revert(), this.splitAnimationCompleted = !0, this.check() })
            }
        }
        class se extends Q {
            constructor(e) { super(e, "ProjectPage"), this.projectEl = null, this.projectInnerEl = null, this.projectInnerReverseEl = null, this.mainImage = null, this.pageContentWrapper = null, this.projectNextLoader = null, this.nextProjectBg = null, this.nextProjectTitle = null, this.projectShare = null, this.imgLoaded = !1, this.interactiveScrollerLayout = "white", this.nextProjectTimer = null, this.projectNextLoaderTl = null, this.projectNextWait = 3500, this.projectImageShow = !1, this.onNextProjectToggle = this.onNextProjectToggle.bind(this), this.showProjectImage = this.showProjectImage.bind(this), this.onImageLoad = this.onImageLoad.bind(this) } async init() { this.projectEl = this.rootElement.querySelector(".project-image"), this.projectInnerEl = this.rootElement.querySelector(".project-image_inner"), this.projectInnerReverseEl = this.rootElement.querySelector(".project-image_inner-reverse"), this.mainImage = this.rootElement.querySelector(".project-img"), this.pageContentWrapper = this.rootElement.querySelector(".page-content_wrapper"), this.projectNextLoader = this.rootElement.querySelector(".project-next-loader"), this.nextProjectBg = this.rootElement.querySelector(".project-next_bg"), this.nextProjectTitle = this.rootElement.querySelector(".project-next > .row"), this.projectShare = this.rootElement.querySelector(".project-share"), await super.init(), "white" === this.backgroundColor ? this.bg = this.bgWhite : this.bg = this.bgBlack, this.nextProjectBg && o.h.to(this.nextProjectBg, .5, { alpha: 1 }), this.projectNextLoaderTl = new o.f({ paused: !0, onComplete: () => { o.h.to(this.projectNextLoader, 1.5, { scaleY: 0, alpha: 0, transformOrigin: "0 0", ease: o.e.easeOut }) } }), this.projectNextLoaderTl.to(this.projectNextLoader, this.projectNextWait / 1e3, { scaleY: 1, ease: o.c.easeOut }) } initEvents() { super.initEvents(), "static" === this.context && document.addEventListener("toggle.nextProject", this.onNextProjectToggle, !!window.passiveSupported && { passive: !0 }), this.mainImage.addEventListener("load", this.onImageLoad) } destroyEvents() { super.destroyEvents(), document.removeEventListener("toggle.nextProject", this.onNextProjectToggle, !!window.passiveSupported && { passive: !0 }), this.mainImage.removeEventListener("load", this.onImageLoad), window.clearTimeout(this.nextProjectTimer) } onImageLoad() { this.imgLoaded = !0, this.checkImage() } onShowPageContent() {
                super.onShowPageContent(), this.checkImage(), o.h.delayedCall(.1, () => {
                    if (this.blocks[this.blocks.length - 1] instanceof te && this.blocks[this.blocks.length - 1].splitText && this.blocks[this.blocks.length - 1].splitText.lines) {
                        const e = this.blocks[this.blocks.length - 1].splitText.lines.length,
                            t = this.nextProjectTitle.getBoundingClientRect();
                        let s = 0;
                        if (1 === e) s = -t.height / 2;
                        else if (e >= 2) { s = -1.5 * (t.height / e) } o.h.set(this.nextProjectTitle, { y: s })
                    }
                })
            }
            checkImage() { this.showPageContent && this.imgLoaded && this.showProjectImage() } onTransitionComplete() { super.onTransitionComplete(), document.addEventListener("toggle.nextProject", this.onNextProjectToggle, !!window.passiveSupported && { passive: !0 }) } onNextProjectToggle(e) { "enter" === e.detail.way ? this.setNextProjectTimer(!0) : this.setNextProjectTimer(!1) } setNextProjectTimer() {
                !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? (this.projectNextLoaderTl.play(), this.nextProjectTimer = window.setTimeout(() => {
                    const e = this.rootElement.querySelector(".project-next-link"),
                        t = new window.Event("HTMLEvents");
                    t.initEvent("click", !0, !0), e.dispatchEvent(t)
                }, this.projectNextWait)) : (this.projectNextLoaderTl.reverse(), window.clearTimeout(this.nextProjectTimer))
            }
            showProjectImage() { this.showPageContent && !this.projectImageShow && (this.projectImageShow = !0, o.h.to(this.projectEl, 2, { alpha: 1, ease: o.d.easeOut }), o.h.to([this.projectInnerEl, this.projectInnerReverseEl], 1.75, { y: 0, ease: o.e.easeOut })) } hideBackground() { o.h.set(this.bg, { alpha: 0 }) } showBackground() { o.h.set(this.bg, { alpha: 1 }) } changeBackground(e) { this.bg && o.h.fromTo(this.bg, 1.6, { xPercent: e }, { xPercent: 0, ease: o.e.easeInOut, onStart: () => { o.h.set(this.bg, { alpha: 1 }) }, onComplete: () => { "white" === this.backgroundColor && o.h.to(this.bgWhite, 1, { alpha: 0 }), a.isMin("sm") || c.showBackground() } }) }
        }
        class ie extends i.b { constructor(e) { super(e, "BlockBuilder") } async getBlockInstance(e) { return this.hasService(e) ? this.getService(e).instance() : null } }
        var oe = s(86);
        class ne extends ee {
            constructor(e) { super(e, "VideoBlock"), this.player = null, this.vimeoEl = null, this.options = { loop: !0, background: !0, autoplay: !1, muted: !0, transparent: !1, quality: 1080 }, this.firstInit = !1, this.delayedCall = null, this.inView = this.inView.bind(this), this.build = this.build.bind(this), this.onDelayedCall = this.onDelayedCall.bind(this) } init() { super.init(), this.vimeoEl = this.rootElement.querySelector(".vimeo"), "static" === this.page.context && o.h.delayedCall(1.5, () => { this.build() }) } destroy() { super.destroy(), this.delayedCall && (o.h.killDelayedCallsTo(this.delayedCall), o.h.killDelayedCallsTo(this.onDelayedCall), o.h.killTweensOf(this.delayedCall), o.h.killTweensOf(this.onDelayedCall)), this.player && this.player.destroy() } initEvents() { super.initEvents(), document.addEventListener("scroll.inViewVideo", this.inView), window.addEventListener(i.h.TRANSITION_COMPLETE, this.build) } destroyEvents() { super.destroyEvents(), document.removeEventListener("scroll.inViewVideo", this.inView), window.removeEventListener(i.h.TRANSITION_COMPLETE, this.build) } build() { this.delayedCall = o.h.delayedCall(1, this.onDelayedCall) } onDelayedCall() { this.player = new oe.a(this.vimeoEl, this.options), this.player.on("play", () => { this.firstInit || (this.firstInit = !0, this.player.pause()) }) } inView(e) {
                let t = e.detail;
                const s = t.way;
                t.element.parentNode.parentNode.parentNode === this.rootElement && ("enter" === s && this.player ? this.player.play() : this.player && this.player.pause())
            }
        }
        class re extends ee {
            constructor(e) { super(e, "AlternateImagesBlock"), this.elements = [], this.allItems = [], this.beforeLastItem = null, this.marginBottom = 200, this.previousHalfHeight = 0 } init() { super.init(), this.elements = [...this.rootElement.getElementsByClassName("item")] } onPageReady() { super.onPageReady(), this.check() } onResize() { super.onResize(), this.check() } check() { a.isMin("md") ? (this.setValues(), this.positionItems(), this.page.updateScroll()) : this.resetMargins() } setValues() {
                const e = this.elements.length;
                this.allItems = [];
                for (let t = 0; t < e; t++) {
                    const e = this.elements[t],
                        s = e.getBoundingClientRect();
                    this.allItems.push({ el: e, bounds: s, offsetY: 0 })
                }
            }
            resetMargins() { for (const e of this.elements) o.h.set(e, { marginTop: 0 }) } positionItems() {
                const e = this.allItems.length;
                for (let t = 0; t < e; t++) {
                    const e = this.allItems[t],
                        s = e.el,
                        i = e.bounds,
                        n = this.allItems[t + 1];
                    if (0 === t && (e.offsetY = i.height / 2), s.classList.contains("text-wrapper") && n && 0 === t) n.offsetY = i.height, o.h.set(n.el, { marginTop: -i.height });
                    else if (n) {
                        const t = n.el;
                        let s = i.height - e.offsetY,
                            r = s / 2;
                        s <= this.marginBottom && (r = -this.marginBottom + s), n.offsetY = r, o.h.set(t, { marginTop: -r })
                    }
                }
            }
        }
        class ae {
            constructor(e, t, s) { this.el = e, this.elLink = t, this.inner = this.el.querySelector(".project-image_inner"), this.innerReverse = this.el.querySelector(".project-image_inner-reverse"), this.bg = this.el.querySelector(".project-image_background"), this.jsAnimate = this.el.querySelector(".js-animate"), this.index = s, this.old = null, this.isOdd = this.index % 2 == 1, this.imageCanvas = null, this.scrollPositions = null, this.currentPositions = null, this.clonedProjectImagePosition = null, this.ease = o.e.easeInOut, this.duration = 1.4, this.bounds = this.el.getBoundingClientRect(), this.tl = null, this.widthSm = 40.5, this.heightSm = 40.5, this.widthFull = 63, this.heightFull = 46, this.origin = "center", this.initiatedOnce = !1, this.projectHeight = 0, this.imageLinkWidth = 0, this.expand = this.expand.bind(this), this.onResize = this.onResize.bind(this), this.init() } init() { this.initListeners() } initListeners() { window.addEventListener("resize", this.onResize, !!window.passiveSupported && { passive: !0 }) } destroyListeners() { window.addEventListener("resize", this.onResize, !!window.passiveSupported && { passive: !0 }) } onResize() { this.bounds = this.el.getBoundingClientRect() } setSize() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.4,
                    r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                const l = this.bounds.width - e,
                    h = this.bounds.height - t;
                let c = 0,
                    d = 0,
                    u = a || this.ease;
                return "center" === this.origin && (c = this.bounds.width / 2 - e / 2, d = this.bounds.height / 2 - t / 2), new Promise(e => { this.tl = new o.f, this.tl.to(this.inner, n, { x: -l + s, y: -h + i, ease: u, delay: r }, 0), this.tl.to(this.innerReverse, n, { x: l, y: h, ease: u, delay: r }, 0), this.tl.to(this.bg, n, { x: -s - c, y: -i - d, ease: u, onComplete: e, delay: r }, 0) })
            }
            cloneTo(e) {
                this.destroyListeners(), this.currentPositions = this.el.getBoundingClientRect(), this.old = this.el, this.el = this.el.cloneNode(!0), this.inner = this.el.querySelector(".project-image_inner"), this.innerReverse = this.el.querySelector(".project-image_inner-reverse"), this.bg = this.el.querySelector(".project-image_background"), this.jsAnimate = this.el.querySelector(".js-animate");
                let t = "absolute";
                a.isMin("xs") || (t = "fixed"), o.h.set(this.el, { position: t, top: this.currentPositions.top, left: Math.round(this.currentPositions.left) }), e.appendChild(this.el), o.h.set(this.old, { alpha: 0, delay: .1 })
            }
            expand() { o.h.to([this.el, this.inner, this.innerReverse], this.duration, { scale: 1, xPercent: 0, ease: o.e.easeInOut }), o.h.to(this.jsAnimate, this.duration, { scale: 1, xPercent: 0, y: 0, ease: o.e.easeInOut, onComplete: () => { o.h.set(this.el, { clearProps: "all" }) } }) } resetY() { this.jsAnimate.setAttribute("data-position", "top"), a.isMin("xs") || o.h.set(this.el, { position: "relative" }), o.h.set(this.el, { y: 0, top: 0 }) } getDiffY() { return this.clonedProjectImagePosition = this.el.getBoundingClientRect(), a.isMin("xs") ? Math.round(this.clonedProjectImagePosition.top - .17 * Object(n.a)()) : Math.round(this.clonedProjectImagePosition.top - 55) } goPosY(e, t) {
                return new Promise(s => {
                    let i = 5;
                    this.isOdd && (i = -i), a.isMin("xs") || (i = 0), o.h.to(this.el, e, { y: -t, ease: o.c.easeOut }), this.isOdd ? (o.h.to(this.inner, e, { xPercent: i, ease: o.c.easeOut }), o.h.to(this.innerReverse, e, { xPercent: -i, ease: o.c.easeOut })) : (o.h.to(this.el, e, { xPercent: i, ease: o.c.easeOut }), o.h.to(this.inner, e, { xPercent: -i, ease: o.c.easeOut })), o.h.to(this.jsAnimate, e, { y: 0, yPercent: 0, ease: o.c.easeOut, onComplete: s })
                })
            }
            goTo() {
                const e = Object(n.b)(),
                    t = e / 100;
                let s = -Math.round(e - t * this.widthSm);
                this.isOdd && (s = Math.round(e - t * this.widthFull)), o.h.to(this.el, this.duration, { x: s, ease: o.e.easeInOut, onStart: () => { this.expand(), this.setSize(Math.round(t * this.widthFull), Math.round(t * this.heightFull)) } })
            }
            setProjectHeight(e) { this.projectHeight = e } setImageLinkWidth(e) { this.imageLinkWidth = e }
        }
        class le extends ee {
            constructor(e) { super(e, "ProjectListBlock"), this.projects = [], this.projectLinks = [], this.projectImageEls = [], this.projectTitles = [], this.projectImageLinks = [], this.projectImages = [], this.queue = [], this.projectOffset = 0, this.onProjectLinkClick = this.onProjectLinkClick.bind(this), this.show = this.show.bind(this), this.onShowPageContent = this.onShowPageContent.bind(this) } init() {
                super.init(), this.projects = [...this.rootElement.querySelectorAll(".project-list_item")], this.projectLinks = [...this.rootElement.querySelectorAll('a[data-transition="project"]')], this.projectImageEls = [...this.rootElement.querySelectorAll(".project-image")], this.projectTitles = [...this.rootElement.querySelectorAll(".project-info_name")], this.projectImageLinks = [...this.rootElement.querySelectorAll(".project-image-link")];
                const e = this.projectImageEls.length;
                for (let t = 0; t < e; t++) {
                    const e = new ae(this.projectImageEls[t], this.projectImageLinks[t], t);
                    this.projectImages.push(e)
                }
                "static" === this.page.context && this.calcHeight()
            }
            initEvents() {
                super.initEvents();
                for (const e of this.projectLinks) e.addEventListener("click", this.onProjectLinkClick, !!window.passiveSupported && { passive: !0 });
                window.addEventListener("SHOW_PAGE_CONTENT", this.onShowPageContent, !!window.passiveSupported && { passive: !0 })
            }
            destroyEvents() {
                super.destroyEvents();
                for (const e of this.projectLinks) e.removeEventListener("click", this.onProjectLinkClick, !!window.passiveSupported && { passive: !0 });
                window.removeEventListener("SHOW_PAGE_CONTENT", this.onShowPageContent, !!window.passiveSupported && { passive: !0 })
            }
            preLoad() {
                this.calcHeight(), this.setImagesHeight(!0);
                for (let e = 0; e < this.projects.length; e++) {
                    const t = this.projectImages[e];
                    o.h.set(t.el, { alpha: .01, force3D: !0, ease: o.d.easeOut })
                }
                super.preLoad()
            }
            onShowPageContent() { this.showPageContent = !0; for (let e = 0; e < this.projects.length; e++) this.show(e) } show(e) {
                const t = this.projectImages[e];
                let s = 2;
                a.isMobile() && (s = 1), "home" === this.page.type && (s = 0), o.h.delayedCall(.1, () => { e + 1 <= s ? (this.setImageHeight(e), o.h.to(t.el, 1, { alpha: 1, clearProps: "transform", ease: o.d.easeOut })) : (this.setImageHeight(e, !0), o.h.set(t.el, { alpha: 1, clearProps: "transform" })) })
            }
            setImageHeight(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!a.isMin("xs")) return;
                const s = this.projectImages[e];
                t ? s.setSize(s.imageLinkWidth, s.projectHeight, 0, 0, 0) : (s.initiatedOnce || (s.setSize(s.imageLinkWidth, 0, 0, 0, 0), s.initiatedOnce = !0), s.setSize(s.imageLinkWidth, s.projectHeight, 0, 0, 1.5, 0, o.e.easeOut))
            }
            calcHeight() {
                if (!a.isMin("xs")) return;
                const e = this.projectImages.length;
                for (let t = 0; t < e; t++) {
                    const e = this.projectImageLinks[t],
                        s = parseFloat(this.projectImageLinks[t].getAttribute("data-image-height")),
                        i = this.projects[t],
                        n = this.projectImages[t];
                    let r = a.viewportSize.width * s;
                    a.viewportSize.width > a.viewportSize.height && (r = a.viewportSize.height * s), r > n.bounds.height && (r = n.bounds.height), o.h.set([i, e], { height: r.toFixed(0) }), o.h.set(i, { marginTop: -this.projectOffset.toFixed(0) }), this.projectOffset = Math.round(.3 * r), n.setProjectHeight(r), n.setImageLinkWidth(e.clientWidth)
                }
            }
            setImagesHeight() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!a.isMin("xs")) return;
                let t = this.projectImageLinks.length;
                this.projectOffset = 0;
                for (let s = 0; s < t; s++) this.setImageHeight(s, e)
            }
            onProjectLinkClick(e) {
                const t = e.currentTarget.getAttribute("data-index");
                this.page.lastSelectedProjectTitle = this.projectTitles[t], this.page.lastSelectedProject = this.projectImages[t]
            }
            onResize() {
                super.onResize();
                for (const e of this.projectImages) e.onResize();
                this.calcHeight(), this.setImagesHeight()
            }
        }
        class he extends class {
            constructor() { this._triggers = {} } dispatchEvent(e) { const t = this._triggers[e]; if (t && t.length) { for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) i[o - 1] = arguments[o]; for (let e of t) e(...i) } } on(e, t) { this._triggers[e] || (this._triggers[e] = []), this._triggers[e].push(t) } off(e, t) {
                const s = this._triggers[e];
                if (s && s.length)
                    for (let e in s)
                        if (s.hasOwnProperty(e)) { s[e] === t && s.splice(e, 1) }
            }
        } { constructor() { super(), this.cursor = document.getElementById("cursor"), this.bars = this.cursor.querySelectorAll("span"), this.cross = this.cursor.querySelectorAll("div"), this.open = !1, this.isShow = !1, this.height = 62, this.width = 62, this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onMouseDown = this.onMouseDown.bind(this) } init() { this.hideCross(), window.addEventListener("click", this.onClick, !!window.passiveSupported && { passive: !0 }), window.addEventListener("mousedown", this.onMouseDown, !!window.passiveSupported && { passive: !0 }), window.addEventListener("mouseup", this.onMouseUp, !!window.passiveSupported && { passive: !0 }), window.addEventListener("mousemove", this.onMouseMove, !!window.passiveSupported && { passive: !0 }) } destroy() { window.removeEventListener("click", this.onClick, !!window.passiveSupported && { passive: !0 }), window.removeEventListener("mousedown", this.onMouseDown, !!window.passiveSupported && { passive: !0 }), window.removeEventListener("mouseup", this.onMouseUp, !!window.passiveSupported && { passive: !0 }), window.removeEventListener("mousemove", this.onMouseMove, !!window.passiveSupported && { passive: !0 }) } onMouseDown() { this.isShow && u.d.to(this.cursor, .2, { scale: .9, ease: u.b.easeIn }) } onMouseUp() { this.isShow && u.d.to(this.cursor, .2, { scale: 1, delay: .2, ease: u.b.easeOut }) } onClick() { this.isShow && (this.open = !this.open, this.open ? (this.hideBars(), this.showCross()) : (this.hideCross(), this.showBars()), this.dispatchEvent("click")) } onMouseMove(e) { u.d.to(this.cursor, .4, { y: e.pageY, x: e.pageX, ease: u.b.easeOut, roundProps: "x,y" }) } show() { this.isShow = !0, u.d.set(this.cursor, { backgroundColor: "#000", mixBlendMode: "" }), u.d.set([this.bars, this.cross], { backgroundColor: "#fff" }), u.d.to(this.cursor, .2, { height: this.height, width: this.width, marginTop: -this.height / 2, marginLeft: -this.width / 2 }), this.open ? this.showCross() : this.showBars(), u.d.to(this.cursor, .4, { scale: 1, alpha: 1, ease: u.b.easeOut }) } hide() { this.isShow = !1, this.open ? this.hideCross() : this.hideBars(), u.d.to(this.cursor, .4, { scale: 0, alpha: 0, ease: u.b.easeOut }) } showBars() { u.d.killTweensOf(this.bars), u.d.set(this.bars, { transformOrigin: "0% 0%" }), u.d.staggerTo(this.bars, .2, { alpha: 1, delay: .3 }, .15), u.d.staggerFromTo(this.bars, .5, { scaleX: 0 }, { scaleX: 1, delay: .3, ease: u.b.easeOut }, .15) } hideBars() { u.d.killTweensOf(this.bars), u.d.staggerTo(this.bars, .5, { transformOrigin: "100% 100%", scaleX: 0, alpha: 0, ease: u.b.easeOut, force3D: !0 }, .15) } showCross() { u.d.killTweensOf(this.cross), u.d.staggerTo(this.cross, .4, { scaleX: 1, delay: .2, force3D: !0 }, .1) } hideCross() { u.d.killTweensOf(this.cross), u.d.staggerTo(this.cross, .4, { scaleX: 0, force3D: !0 }, .1) } } class ce extends he { show() { o.h.set(this.cursor, { backgroundColor: "#fff" }), o.h.set([this.bars, this.cross], { backgroundColor: "#000" }), this.isShow = !0, o.h.to(this.cursor, .2, { height: this.height, width: this.width, marginTop: -this.height / 2, marginLeft: -this.width / 2 }), this.open ? this.showCross() : this.showBars(), o.h.to(this.cursor, .4, { scale: 1, alpha: 1, ease: o.d.easeOut }) } } class de extends ee {
            constructor(e) { super(e, "FocusBlock"), this.imgContainer = null, this.imgEl = null, this.contentEL = null, this.cursor = null, this.ease = o.d.easeInOut, this.easeImg = o.e.easeInOut, this.duration = 1.2, this.decalContentX = -Object(n.b)() / 12 * 2, this.decalImgX = -Object(n.b)() / 2 + Object(n.b)() / 12, this.cursor = null, this.isTextShow = !1, this.activeHover = !1, this.onEnter = this.onEnter.bind(this), this.onLeave = this.onLeave.bind(this), this.onCursorClick = this.onCursorClick.bind(this) } init() { super.init(), this.imgContainer = this.rootElement.querySelector(".img-container"), this.imgEl = this.rootElement.querySelector(".img-3d"), this.contentEL = this.rootElement.querySelector(".focus-block__content"), this.cursor = this.rootElement.querySelector(".cursor"), this.activeHover = this.contentEL.hasAttribute("data-hover"), this.checkCursor() } destroy() { super.destroy(), this.cursor && (this.cursor.hide(), this.cursor.destroy()) } initEvents() { super.initEvents(), this.contentEL.addEventListener("mouseenter", this.onEnter, !!window.passiveSupported && { passive: !0 }), this.contentEL.addEventListener("mouseleave", this.onLeave, !!window.passiveSupported && { passive: !0 }) } destroyEvents() { super.destroyEvents(), this.contentEL.removeEventListener("mouseenter", this.onEnter, !!window.passiveSupported && { passive: !0 }), this.contentEL.removeEventListener("mouseleave", this.onLeave, !!window.passiveSupported && { passive: !0 }) } onResize() { this.checkCursor() } onEnter() { this.cursor && (this.cursor.show(), this.rotateIn()) } onLeave() { this.cursor && (this.cursor.hide(), this.rotateOut()) } onCursorClick() { this.isTextShow ? this.hideText() : this.showText() } checkCursor() { a.isMin("md") ? this.cursor || this.createCursor() : this.cursor && (this.cursor.off("click", this.onCursorClick), this.cursor.destroy(), this.cursor = null) } createCursor() { this.rootElement.classList.contains("layout-black") ? this.cursor = new ce : this.cursor = new he, this.cursor.on("click", this.onCursorClick), this.cursor.init() } showText() {
                this.isTextShow = !0;
                const e = new window.CustomEvent(p.SCROLLTO, { detail: { options: { speed: 1e3, targetOffset: -120, targetElem: this.contentEL, useTarget: !0 } } });
                document.dispatchEvent(e), o.h.to(this.contentEL, this.duration, { x: -Object(n.b)() / 12 * 2, alpha: 1, force3D: !0, ease: this.ease }), o.h.to(this.imgContainer, 1.2 * this.duration, { x: -Object(n.b)() / 2 + Object(n.b)() / 12 * .5, force3D: !0, ease: this.easeImg }), this.rotateOut(.5)
            }
            hideText() { this.isTextShow = !1, this.cursor.isShow && this.rotateIn(.6), o.h.to(this.contentEL, this.duration, { x: 0, alpha: .1, force3D: !0, ease: this.ease }), o.h.to(this.imgContainer, 1.2 * this.duration, { x: 0, force3D: !0, ease: this.easeImg }) } rotateIn() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;!this.isTextShow && this.activeHover && (o.h.killTweensOf(this.imgEl), o.h.to(this.imgEl, 1, { rotationY: 7, delay: e, ease: o.d.easeOut })) } rotateOut() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.activeHover && (o.h.killTweensOf(this.imgEl), o.h.to(this.imgEl, 1, { rotationY: 0, delay: e, ease: o.d.easeOut }))
            }
        }
        class ue extends ee {} class pe extends he { constructor() { super(), this.height = 120, this.width = 120 } launchScaleAnimation() { o.h.to(this.cursor, 1, { yoyo: !0, repeat: -1, scale: .8, ease: o.b.easeInOut }) } onMouseDown() {} onMouseUp() {} onClick() {} show() { this.isShow = !0, o.h.to(this.cursor, .2, { height: this.height, width: this.width, marginTop: -this.height / 2, marginLeft: -this.width / 2, onComplete: () => { this.launchScaleAnimation() } }), o.h.set(this.cursor, { backgroundColor: "#fff", mixBlendMode: "difference" }), o.h.to(this.cursor, .4, { scale: 1, alpha: 1, ease: o.d.easeOut }) } hide() { this.isShow = !1, o.h.to(this.cursor, .4, { scale: 0, alpha: 0, ease: o.d.easeOut }), o.h.set(this.cursor, { backgroundColor: "#000", mixBlendMode: "normal" }) } } class me extends ee { constructor(e) { super(e, "MaskBlock"), this.circleElement = null, this.cursor = new pe, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this) } init() { super.init(), this.cursor.init(), this.circleElement = this.rootElement.querySelector(".mask-block__circle"), this.rootElementHeight = this.rootElement.getBoundingClientRect().height } initEvents() { super.initEvents(), this.rootElement.addEventListener("mouseenter", this.onMouseEnter, !!window.passiveSupported && { passive: !0 }), this.rootElement.addEventListener("mouseleave", this.onMouseLeave, !!window.passiveSupported && { passive: !0 }) } destroyEvents() { super.destroyEvents(), this.rootElement.removeEventListener("mouseenter", this.onMouseEnter, !!window.passiveSupported && { passive: !0 }), this.rootElement.removeEventListener("mouseleave", this.onMouseLeave, !!window.passiveSupported && { passive: !0 }) } onMouseMove(e) { u.d.to(this.circleElement, .4, { y: e.pageY - (Object(n.a)() - this.rootElementHeight) / 2, x: e.pageX, ease: u.b.easeOut }) } onMouseEnter(e) { this.cursor.show() } onMouseLeave() { this.cursor.hide() } } class ge extends Q {} class we extends Q {} class ve extends ee {
            constructor(e) { super(e, "HomeSocialsBlock"), this.container = document.getElementById("home-socials"), this.links = this.container.querySelectorAll("a"), this.point = this.container.querySelector(".home-socials__point"), this.onSocialLeave = this.onSocialLeave.bind(this), this.onSocialLinkEnter = this.onSocialLinkEnter.bind(this) } initEvents() { super.initEvents(), this.container.addEventListener("mouseleave", this.onSocialLeave); for (const e of this.links) e.addEventListener("mouseenter", this.onSocialLinkEnter) } destroyEvents() { super.destroyEvents(), this.container.removeEventListener("mouseleave", this.onSocialLeave); for (const e of this.links) e.removeEventListener("mouseenter", this.onSocialLinkEnter) } onSocialLeave() { o.h.to(this.point, .7, { scale: 0, ease: o.d.easeOut }) } onSocialLinkEnter(e) {
                const t = parseInt(e.currentTarget.getAttribute("data-index"));
                o.h.to(this.point, .7, { y: 40 * t, scale: 1, ease: o.d.easeOut })
            }
        }
        class fe extends ee { constructor(e) { super(e, "ImageOpenerBlock"), this.img = null, this.maskElement = null, this.showPageContent = !1, this.imageLoaded = !1, this.imageShown = !1, this.delay = .4, this.duration = 1.6, this.display = "", this.onShowPageContent = this.onShowPageContent.bind(this), this.onImgLoaded = this.onImgLoaded.bind(this) } init() { super.init(), this.img = this.rootElement.querySelector("img") || this.rootElement.querySelector("iframe"), this.maskElement = this.rootElement.children[0], this.display = window.getComputedStyle(this.rootElement).display, o.h.set(this.img, { alpha: .001, yPercent: 1, force3D: !0 }), o.h.set(this.maskElement, { yPercent: -1, force3D: !0 }), this.rootElement.hasAttribute("data-delay") && (this.delay = parseFloat(this.rootElement.getAttribute("data-delay"))), this.rootElement.hasAttribute("data-duration") && (this.duration = parseFloat(this.rootElement.getAttribute("data-duration"))) } initEvents() { super.initEvents(), window.addEventListener("SHOW_PAGE_CONTENT", this.onShowPageContent), this.img.addEventListener("load", this.onImgLoaded) } destroyEvents() { super.destroyEvents(), window.removeEventListener("SHOW_PAGE_CONTENT", this.onShowPageContent), this.img.removeEventListener("load", this.onImgLoaded) } onImgLoaded() { this.imageLoaded = !0, this.check() } onShowPageContent() { this.showPageContent = !0, this.check() } onResize() { this.rootElement && (this.display = window.getComputedStyle(this.rootElement).display), this.check() } check() { this.imageLoaded && this.showPageContent && this.showImage() } showImage() { this.imageShown || "none" === this.display || (this.imageShown = !0, o.h.set(this.img, { yPercent: 90, force3D: !0 }), o.h.set(this.maskElement, { yPercent: -101, force3D: !0 }), o.h.to([this.maskElement, this.img], this.duration, { yPercent: 0, alpha: 1, force3D: !0, delay: this.delay, ease: o.d.easeOut })) } }
        var be = s(87),
            ye = s.n(be);
        class Ee {
            constructor(e, t, s, i) { this.offset = 0, this.dragOffset = 0, this.lerpOffset = 0, this.index = e, this.line = t, this.speed = s, this.lastFrameTime = Date.now(), this.autoMove = !0, this.isMouseDown = !1, this.dragStartPos = 0, this.getLines = i, this.isPlaying = !1, window.requestAnimationFrame(this.animate.bind(this)) } play() {!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? (this.isPlaying = !0, window.requestAnimationFrame(this.animate.bind(this))) : this.isPlaying = !1 } getSpanWidth(e) { const t = window.getComputedStyle(e); return e.getBoundingClientRect().width + parseFloat(t.marginLeft) + parseFloat(t.marginRight) } moveFirstElementToEnd() {
                const e = this.line.children,
                    t = e[0],
                    s = this.getSpanWidth(t);
                this.line.insertBefore(t, e[e.length - 1].nextSibling), this.offset += s, this.lerpOffset += s
            }
            moveLastElementToBegining() {
                const e = this.line.children,
                    t = e[e.length - 1],
                    s = this.getSpanWidth(t);
                this.line.insertBefore(t, e[0]), this.offset -= s, this.lerpOffset -= s
            }
            animate() {
                const e = Date.now() - this.lastFrameTime;
                var t, s, i;
                this.lastFrameTime = Date.now(), this.autoMove && (this.offset += this.speed * (e / 1e3)), this.lerpOffset = (t = this.lerpOffset, s = this.offset + this.dragOffset, (1 - (i = .1)) * t + i * s), this.lerpOffset > 0 && this.moveLastElementToBegining(), this.lerpOffset < -this.getSpanWidth(this.line.children[0]) && this.moveFirstElementToEnd(), o.i.set(this.line, { x: this.lerpOffset }), this.isPlaying && window.requestAnimationFrame(this.animate.bind(this))
            }
            onMouseDown(e) {
                if (!this.isMouseDown) {
                    this.isMouseDown = !0, this.getLines().forEach(e => { e.autoMove = !1 });
                    const t = "mousedown" === e.type ? e.clientX : e.touches[0].clientX;
                    this.dragStartPos = t
                }
            }
            onMouseUp(e) { this.isMouseDown && (this.isMouseDown = !1, this.getLines().forEach(e => { e.autoMove = !0, e.offset += e.dragOffset, e.dragOffset = 0 })) } onMouseMove(e) {
                if (this.isMouseDown) {
                    const t = "mousemove" === e.type ? e.clientX : e.touches[0].clientX;
                    this.getLines().forEach(e => {
                        const s = this.speed > 0 ? e.speed > 0 ? 1 : -1 : e.speed > 0 ? -1 : 1;
                        e.dragOffset = (t - this.dragStartPos) * s
                    })
                }
            }
            destroyEvents() { this.line.removeEventListener("mousedown", this.onMouseDown.bind(this)), this.line.removeEventListener("mouseup", this.onMouseUp.bind(this)), this.line.removeEventListener("mousemove", this.onMouseMove.bind(this)), this.line.removeEventListener("touchstart", this.onMouseDown.bind(this)), this.line.removeEventListener("touchend", this.onMouseUp.bind(this)), this.line.removeEventListener("touchmove", this.onMouseMove.bind(this)) } initEvents() { this.line.addEventListener("mousedown", this.onMouseDown.bind(this)), window.addEventListener("mouseup", this.onMouseUp.bind(this)), window.addEventListener("mousemove", this.onMouseMove.bind(this)), this.line.addEventListener("touchstart", this.onMouseDown.bind(this)), window.addEventListener("touchend", this.onMouseUp.bind(this)), window.addEventListener("touchmove", this.onMouseMove.bind(this)) }
        }
        class Se extends ee {
            constructor(e) {
                super(e, "ClientList"), this.offset = window.scrollY || 0, this.lerpOffset = window.scrollY || 0, this.container = document.getElementById("main-client-list"), this.deco = this.container.querySelectorAll(".line"), this.lines = [];
                for (const e of this.deco.entries()) {
                    var t = ye()(e, 2);
                    const s = t[0],
                        i = t[1],
                        o = parseFloat(window.getComputedStyle(i.querySelector("span")).fontSize) * (s % 2 == 0 ? -1 : 1);
                    this.lines.push(new Ee(s, i, o, () => this.lines))
                }
                if ("IntersectionObserver" in window) {
                    const e = new window.IntersectionObserver((e, t) => { e.forEach(e => { e.isIntersecting ? this.lines.forEach(e => e.play()) : this.lines.forEach(e => e.play(!1)) }) }, {});
                    this.deco.forEach(t => e.observe(t))
                }
            }
            onResize() {
                this.lines.forEach((e, t) => {
                    const s = parseFloat(window.getComputedStyle(e.line.querySelector("span")).fontSize);
                    e.speed = s * (t % 2 == 0 ? -1 : 1)
                })
            }
            destroyEvents() { window.removeEventListener("resize", this.onResize.bind(this)); for (const e of this.lines) e.destroyEvents() } initEvents() { window.addEventListener("resize", this.onResize.bind(this)); for (const e of this.lines) e.initEvents() }
        }
        var Le = s(88);
        window.passiveSupported = !1;
        try {
            var Te = Object.defineProperty({}, "passive", { get: function() { window.passiveSupported = !0 } });
            window.addEventListener("test", Te, Te), window.removeEventListener("test", Te, Te)
        } catch (e) { window.passiveSupported = !1 } Object(Le.a)({ domain: "rezo-zero.com", trackLocalhost: !1, apiHost: "https://a.rezo-zero.com" }).enableAutoPageviews(), document.addEventListener("DOMContentLoaded", () => {
            if (window.MAIN_EXECUTED) throw new Error("Safari 10");
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), window.MAIN_EXECUTED = !0, /Trident\/|MSIE/.test(window.navigator.userAgent) && document.body.classList.add("ie");
            const e = new i.m({ wrapperId: "main-container", debug: 0 });
            e.provider("BlockBuilder", ie), e.provider("TransitionFactory", N), e.provider("CacheProvider", i.f), e.provider("History", i.i), e.bootableProvider("Prefetch", i.k), e.bootableProvider("Pjax", i.j), e.instanceFactory("DefaultPage", e => new Q(e)), e.instanceFactory("project", e => new se(e)), e.instanceFactory("studio", e => new we(e)), e.instanceFactory("home", e => new ge(e)), e.instanceFactory("video", e => new ne(e)), e.instanceFactory("mask", e => new me(e)), e.instanceFactory("alternate-images", e => new re(e)), e.instanceFactory("HomeSocialsBlock", e => new ve(e)), e.instanceFactory("ProjectList", e => new le(e)), e.instanceFactory("ImageOpenerBlock", e => new fe(e)), e.instanceFactory("focus", e => new de(e)), e.instanceFactory("Introduction", e => new te(e)), e.instanceFactory("ClientList", e => new Se(e)), e.instanceFactory("introduction-images", e => new ue(e)), c.init(), e.boot()
        })
    },
    154: function(e, t) {},
    160: function(e, t) {},
    3: function(e, t, s) {
        "use strict";
        s.d(t, "a", (function() { return n })), s.d(t, "b", (function() { return r }));
        let i = window.innerHeight,
            o = window.innerWidth;

        function n() { return i }

        function r() { return o } window.addEventListener("resize", () => { i = window.innerHeight, o = window.innerWidth })
    },
    82: function(e, t, s) {
        "use strict";
        var i, o = this && this.__extends || (i = function(e, t) { return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]) })(e, t) }, function(e, t) {
            function s() { this.constructor = e } i(e, t), e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s)
        });
        t.__esModule = !0;
        var n = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return o(t, e), t.prototype.transformDelta = function(e) { return this.options.disable ? { x: 0, y: 0 } : e }, t.pluginName = "stop", t.defaultOptions = { disable: !1 }, t
        }(s(31).ScrollbarPlugin);
        t.default = n
    },
    84: function(e, t, s) {
        "use strict";
        var i, o = this && this.__extends || (i = function(e, t) { return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]) })(e, t) }, function(e, t) {
            function s() { this.constructor = e } i(e, t), e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s)
        });
        t.__esModule = !0;
        var n = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return o(t, e), t.prototype.transformDelta = function(e) { return { x: 0, y: e.y } }, t.pluginName = "vertical", t
        }(s(31).ScrollbarPlugin);
        t.default = n
    }
});