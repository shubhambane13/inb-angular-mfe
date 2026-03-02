import { a as Qe } from "@nf-internal/chunk-G25BAKAM";
import { b as q } from "@nf-internal/chunk-QXX5WOHX";
import { b as $, c as z, d as f } from "@nf-internal/chunk-OIQ2QPHM";
import { a as b } from "@nf-internal/chunk-LYMFQPXM";
import { a as g } from "@nf-internal/chunk-7N7HFQKY";
import { H as Ge, M as $e, c as De, f as Re, g as Se, h as Pe, ja as ze, ka as qe, kb as Xe, lb as ee, m as Be, n as Ke, o as je, p as Ue, q as He, r as Ve, s as We, t as Ye, y as Ze } from "@nf-internal/chunk-MOB3CMP2";
import { b as X } from "@nf-internal/chunk-XSLIODQX";
import { a as l } from "@nf-internal/chunk-DQM2BKPX";
import "@nf-internal/chunk-FSAIB72R";
import { b as Q, d as J } from "@nf-internal/chunk-H3UJLGDZ";
import { c as A } from "@nf-internal/chunk-JYXTBF5A";
import { a as w } from "@nf-internal/chunk-4CLCTAJ7";
import * as v from "@angular/core";
import { InjectionToken as ie, inject as d, NgZone as se, DOCUMENT as ne, RendererFactory2 as Je, ElementRef as et, EventEmitter as tt } from "@angular/core";
import { BehaviorSubject as it, Subject as te, of as st } from "rxjs";
import { skip as nt, distinctUntilChanged as rt, takeUntil as ot } from "rxjs/operators";
function O(s) { return s.buttons === 0 || s.detail === 0; }
function L(s) { let i = s.touches && s.touches[0] || s.changedTouches && s.changedTouches[0]; return !!i && i.identifier === -1 && (i.radiusX == null || i.radiusX === 1) && (i.radiusY == null || i.radiusY === 1); }
var re = new ie("cdk-input-modality-detector-options"), oe = { ignoreKeys: [18, 17, 224, 91, 16] }, ae = 650, N = { passive: !0, capture: !0 }, ce = (() => { class s {
    _platform = d(l);
    _listenerCleanups;
    modalityDetected;
    modalityChanged;
    get mostRecentModality() { return this._modality.value; }
    _mostRecentTarget = null;
    _modality = new it(null);
    _options;
    _lastTouchMs = 0;
    _onKeydown = e => { this._options?.ignoreKeys?.some(t => t === e.keyCode) || (this._modality.next("keyboard"), this._mostRecentTarget = f(e)); };
    _onMousedown = e => { Date.now() - this._lastTouchMs < ae || (this._modality.next(O(e) ? "keyboard" : "mouse"), this._mostRecentTarget = f(e)); };
    _onTouchstart = e => { if (L(e)) {
        this._modality.next("keyboard");
        return;
    } this._lastTouchMs = Date.now(), this._modality.next("touch"), this._mostRecentTarget = f(e); };
    constructor() { let e = d(se), t = d(ne), n = d(re, { optional: !0 }); if (this._options = w(w({}, oe), n), this.modalityDetected = this._modality.pipe(nt(1)), this.modalityChanged = this.modalityDetected.pipe(rt()), this._platform.isBrowser) {
        let r = d(Je).createRenderer(null, null);
        this._listenerCleanups = e.runOutsideAngular(() => [r.listen(t, "keydown", this._onKeydown, N), r.listen(t, "mousedown", this._onMousedown, N), r.listen(t, "touchstart", this._onTouchstart, N)]);
    } }
    ngOnDestroy() { this._modality.complete(), this._listenerCleanups?.forEach(e => e()); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })(), I = (function (s) { return s[s.IMMEDIATE = 0] = "IMMEDIATE", s[s.EVENTUAL = 1] = "EVENTUAL", s; })(I || {}), de = new ie("cdk-focus-monitor-default-options"), E = q({ passive: !0, capture: !0 }), ue = (() => { class s {
    _ngZone = d(se);
    _platform = d(l);
    _inputModalityDetector = d(ce);
    _origin = null;
    _lastFocusOrigin;
    _windowFocused = !1;
    _windowFocusTimeoutId;
    _originTimeoutId;
    _originFromTouchInteraction = !1;
    _elementInfo = new Map;
    _monitoredElementCount = 0;
    _rootNodeFocusListenerCount = new Map;
    _detectionMode;
    _windowFocusListener = () => { this._windowFocused = !0, this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = !1); };
    _document = d(ne);
    _stopInputModalityDetector = new te;
    constructor() { let e = d(de, { optional: !0 }); this._detectionMode = e?.detectionMode || I.IMMEDIATE; }
    _rootNodeFocusAndBlurListener = e => { let t = f(e); for (let n = t; n; n = n.parentElement)
        e.type === "focus" ? this._onFocus(e, n) : this._onBlur(e, n); };
    monitor(e, t = !1) { let n = A(e); if (!this._platform.isBrowser || n.nodeType !== 1)
        return st(); let r = $(n) || this._document, o = this._elementInfo.get(n); if (o)
        return t && (o.checkChildren = !0), o.subject; let h = { checkChildren: t, subject: new te, rootNode: r }; return this._elementInfo.set(n, h), this._registerGlobalListeners(h), h.subject; }
    stopMonitoring(e) { let t = A(e), n = this._elementInfo.get(t); n && (n.subject.complete(), this._setClasses(t), this._elementInfo.delete(t), this._removeGlobalListeners(n)); }
    focusVia(e, t, n) { let r = A(e), o = this._document.activeElement; r === o ? this._getClosestElementsInfo(r).forEach(([h, M]) => this._originChanged(h, t, M)) : (this._setOrigin(t), typeof r.focus == "function" && r.focus(n)); }
    ngOnDestroy() { this._elementInfo.forEach((e, t) => this.stopMonitoring(t)); }
    _getWindow() { return this._document.defaultView || window; }
    _getFocusOrigin(e) { return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(e) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : e && this._isLastInteractionFromInputLabel(e) ? "mouse" : "program"; }
    _shouldBeAttributedToTouch(e) { return this._detectionMode === I.EVENTUAL || !!e?.contains(this._inputModalityDetector._mostRecentTarget); }
    _setClasses(e, t) { e.classList.toggle("cdk-focused", !!t), e.classList.toggle("cdk-touch-focused", t === "touch"), e.classList.toggle("cdk-keyboard-focused", t === "keyboard"), e.classList.toggle("cdk-mouse-focused", t === "mouse"), e.classList.toggle("cdk-program-focused", t === "program"); }
    _setOrigin(e, t = !1) { this._ngZone.runOutsideAngular(() => { if (this._origin = e, this._originFromTouchInteraction = e === "touch" && t, this._detectionMode === I.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        let n = this._originFromTouchInteraction ? ae : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, n);
    } }); }
    _onFocus(e, t) { let n = this._elementInfo.get(t), r = f(e); !n || !n.checkChildren && t !== r || this._originChanged(t, this._getFocusOrigin(r), n); }
    _onBlur(e, t) { let n = this._elementInfo.get(t); !n || n.checkChildren && e.relatedTarget instanceof Node && t.contains(e.relatedTarget) || (this._setClasses(t), this._emitOrigin(n, null)); }
    _emitOrigin(e, t) { e.subject.observers.length && this._ngZone.run(() => e.subject.next(t)); }
    _registerGlobalListeners(e) { if (!this._platform.isBrowser)
        return; let t = e.rootNode, n = this._rootNodeFocusListenerCount.get(t) || 0; n || this._ngZone.runOutsideAngular(() => { t.addEventListener("focus", this._rootNodeFocusAndBlurListener, E), t.addEventListener("blur", this._rootNodeFocusAndBlurListener, E); }), this._rootNodeFocusListenerCount.set(t, n + 1), ++this._monitoredElementCount === 1 && (this._ngZone.runOutsideAngular(() => { this._getWindow().addEventListener("focus", this._windowFocusListener); }), this._inputModalityDetector.modalityDetected.pipe(ot(this._stopInputModalityDetector)).subscribe(r => { this._setOrigin(r, !0); })); }
    _removeGlobalListeners(e) { let t = e.rootNode; if (this._rootNodeFocusListenerCount.has(t)) {
        let n = this._rootNodeFocusListenerCount.get(t);
        n > 1 ? this._rootNodeFocusListenerCount.set(t, n - 1) : (t.removeEventListener("focus", this._rootNodeFocusAndBlurListener, E), t.removeEventListener("blur", this._rootNodeFocusAndBlurListener, E), this._rootNodeFocusListenerCount.delete(t));
    } --this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener), this._stopInputModalityDetector.next(), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._originTimeoutId)); }
    _originChanged(e, t, n) { this._setClasses(e, t), this._emitOrigin(n, t), this._lastFocusOrigin = t; }
    _getClosestElementsInfo(e) { let t = []; return this._elementInfo.forEach((n, r) => { (r === e || n.checkChildren && r.contains(e)) && t.push([r, n]); }), t; }
    _isLastInteractionFromInputLabel(e) { let { _mostRecentTarget: t, mostRecentModality: n } = this._inputModalityDetector; if (n !== "mouse" || !t || t === e || e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA" || e.disabled)
        return !1; let r = e.labels; if (r) {
        for (let o = 0; o < r.length; o++)
            if (r[o].contains(t))
                return !0;
    } return !1; }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })(), at = (() => { class s {
    _elementRef = d(et);
    _focusMonitor = d(ue);
    _monitorSubscription;
    _focusOrigin = null;
    cdkFocusChange = new tt;
    constructor() { }
    get focusOrigin() { return this._focusOrigin; }
    ngAfterViewInit() { let e = this._elementRef.nativeElement; this._monitorSubscription = this._focusMonitor.monitor(e, e.nodeType === 1 && e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t => { this._focusOrigin = t, this.cdkFocusChange.emit(t); }); }
    ngOnDestroy() { this._focusMonitor.stopMonitoring(this._elementRef), this._monitorSubscription && this._monitorSubscription.unsubscribe(); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = v.\u0275\u0275defineDirective({ type: s, selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]], outputs: { cdkFocusChange: "cdkFocusChange" }, exportAs: ["cdkMonitorFocus"] });
} return s; })();
import * as c from "@angular/core";
import { inject as a, afterNextRender as ct, NgZone as R, DOCUMENT as S, Injector as dt, ElementRef as fe, booleanAttribute as he, InjectionToken as pe } from "@angular/core";
var D = class {
    ignoreVisibility = !1;
}, P = (() => { class s {
    _platform = a(l);
    constructor() { }
    isDisabled(e) { return e.hasAttribute("disabled"); }
    isVisible(e) { return ht(e) && getComputedStyle(e).visibility === "visible"; }
    isTabbable(e) { if (!this._platform.isBrowser)
        return !1; let t = ut(It(e)); if (t && (le(t) === -1 || !this.isVisible(t)))
        return !1; let n = e.nodeName.toLowerCase(), r = le(e); return e.hasAttribute("contenteditable") ? r !== -1 : n === "iframe" || n === "object" || this._platform.WEBKIT && this._platform.IOS && !gt(e) ? !1 : n === "audio" ? e.hasAttribute("controls") ? r !== -1 : !1 : n === "video" ? r === -1 ? !1 : r !== null ? !0 : this._platform.FIREFOX || e.hasAttribute("controls") : e.tabIndex >= 0; }
    isFocusable(e, t) { return bt(e) && !this.isDisabled(e) && (t?.ignoreVisibility || this.isVisible(e)); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })();
function ut(s) { try {
    return s.frameElement;
}
catch {
    return null;
} }
function ht(s) { return !!(s.offsetWidth || s.offsetHeight || typeof s.getClientRects == "function" && s.getClientRects().length); }
function lt(s) { let i = s.nodeName.toLowerCase(); return i === "input" || i === "select" || i === "button" || i === "textarea"; }
function _t(s) { return ft(s) && s.type == "hidden"; }
function mt(s) { return pt(s) && s.hasAttribute("href"); }
function ft(s) { return s.nodeName.toLowerCase() == "input"; }
function pt(s) { return s.nodeName.toLowerCase() == "a"; }
function ge(s) { if (!s.hasAttribute("tabindex") || s.tabIndex === void 0)
    return !1; let i = s.getAttribute("tabindex"); return !!(i && !isNaN(parseInt(i, 10))); }
function le(s) { if (!ge(s))
    return null; let i = parseInt(s.getAttribute("tabindex") || "", 10); return isNaN(i) ? -1 : i; }
function gt(s) { let i = s.nodeName.toLowerCase(), e = i === "input" && s.type; return e === "text" || e === "password" || i === "select" || i === "textarea"; }
function bt(s) { return _t(s) ? !1 : lt(s) || mt(s) || s.hasAttribute("contenteditable") || ge(s); }
function It(s) { return s.ownerDocument && s.ownerDocument.defaultView || window; }
var y = class {
    _element;
    _checker;
    _ngZone;
    _document;
    _injector;
    _startAnchor;
    _endAnchor;
    _hasAttached = !1;
    startAnchorListener = () => this.focusLastTabbableElement();
    endAnchorListener = () => this.focusFirstTabbableElement();
    get enabled() { return this._enabled; }
    set enabled(i) { this._enabled = i, this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(i, this._startAnchor), this._toggleAnchorTabIndex(i, this._endAnchor)); }
    _enabled = !0;
    constructor(i, e, t, n, r = !1, o) { this._element = i, this._checker = e, this._ngZone = t, this._document = n, this._injector = o, r || this.attachAnchors(); }
    destroy() { let i = this._startAnchor, e = this._endAnchor; i && (i.removeEventListener("focus", this.startAnchorListener), i.remove()), e && (e.removeEventListener("focus", this.endAnchorListener), e.remove()), this._startAnchor = this._endAnchor = null, this._hasAttached = !1; }
    attachAnchors() { return this._hasAttached ? !0 : (this._ngZone.runOutsideAngular(() => { this._startAnchor || (this._startAnchor = this._createAnchor(), this._startAnchor.addEventListener("focus", this.startAnchorListener)), this._endAnchor || (this._endAnchor = this._createAnchor(), this._endAnchor.addEventListener("focus", this.endAnchorListener)); }), this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element), this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling), this._hasAttached = !0), this._hasAttached); }
    focusInitialElementWhenReady(i) { return new Promise(e => { this._executeOnStable(() => e(this.focusInitialElement(i))); }); }
    focusFirstTabbableElementWhenReady(i) { return new Promise(e => { this._executeOnStable(() => e(this.focusFirstTabbableElement(i))); }); }
    focusLastTabbableElementWhenReady(i) { return new Promise(e => { this._executeOnStable(() => e(this.focusLastTabbableElement(i))); }); }
    _getRegionBoundary(i) { let e = this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`); return i == "start" ? e.length ? e[0] : this._getFirstTabbableElement(this._element) : e.length ? e[e.length - 1] : this._getLastTabbableElement(this._element); }
    focusInitialElement(i) { let e = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]"); if (e) {
        if (!this._checker.isFocusable(e)) {
            let t = this._getFirstTabbableElement(e);
            return t?.focus(i), !!t;
        }
        return e.focus(i), !0;
    } return this.focusFirstTabbableElement(i); }
    focusFirstTabbableElement(i) { let e = this._getRegionBoundary("start"); return e && e.focus(i), !!e; }
    focusLastTabbableElement(i) { let e = this._getRegionBoundary("end"); return e && e.focus(i), !!e; }
    hasAttached() { return this._hasAttached; }
    _getFirstTabbableElement(i) { if (this._checker.isFocusable(i) && this._checker.isTabbable(i))
        return i; let e = i.children; for (let t = 0; t < e.length; t++) {
        let n = e[t].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(e[t]) : null;
        if (n)
            return n;
    } return null; }
    _getLastTabbableElement(i) { if (this._checker.isFocusable(i) && this._checker.isTabbable(i))
        return i; let e = i.children; for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(e[t]) : null;
        if (n)
            return n;
    } return null; }
    _createAnchor() { let i = this._document.createElement("div"); return this._toggleAnchorTabIndex(this._enabled, i), i.classList.add("cdk-visually-hidden"), i.classList.add("cdk-focus-trap-anchor"), i.setAttribute("aria-hidden", "true"), i; }
    _toggleAnchorTabIndex(i, e) { i ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex"); }
    toggleAnchors(i) { this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(i, this._startAnchor), this._toggleAnchorTabIndex(i, this._endAnchor)); }
    _executeOnStable(i) { this._injector ? ct(i, { injector: this._injector }) : setTimeout(i); }
}, be = (() => { class s {
    _checker = a(P);
    _ngZone = a(R);
    _document = a(S);
    _injector = a(dt);
    constructor() { a(g).load(b); }
    create(e, t = !1) { return new y(e, this._checker, this._ngZone, this._document, t, this._injector); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })(), vt = (() => { class s {
    _elementRef = a(fe);
    _focusTrapFactory = a(be);
    focusTrap;
    _previouslyFocusedElement = null;
    get enabled() { return this.focusTrap?.enabled || !1; }
    set enabled(e) { this.focusTrap && (this.focusTrap.enabled = e); }
    autoCapture;
    constructor() { a(l).isBrowser && (this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, !0)); }
    ngOnDestroy() { this.focusTrap?.destroy(), this._previouslyFocusedElement && (this._previouslyFocusedElement.focus(), this._previouslyFocusedElement = null); }
    ngAfterContentInit() { this.focusTrap?.attachAnchors(), this.autoCapture && this._captureFocus(); }
    ngDoCheck() { this.focusTrap && !this.focusTrap.hasAttached() && this.focusTrap.attachAnchors(); }
    ngOnChanges(e) { let t = e.autoCapture; t && !t.firstChange && this.autoCapture && this.focusTrap?.hasAttached() && this._captureFocus(); }
    _captureFocus() { this._previouslyFocusedElement = z(), this.focusTrap?.focusInitialElementWhenReady(); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = c.\u0275\u0275defineDirective({ type: s, selectors: [["", "cdkTrapFocus", ""]], inputs: { enabled: [2, "cdkTrapFocus", "enabled", he], autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", he] }, exportAs: ["cdkTrapFocus"], features: [c.\u0275\u0275NgOnChangesFeature] });
} return s; })(), Ie = new pe("liveAnnouncerElement", { providedIn: "root", factory: ve });
function ve() { return null; }
var ye = new pe("LIVE_ANNOUNCER_DEFAULT_OPTIONS"), yt = 0, Ae = (() => { class s {
    _ngZone = a(R);
    _defaultOptions = a(ye, { optional: !0 });
    _liveElement;
    _document = a(S);
    _previousTimeout;
    _currentPromise;
    _currentResolve;
    constructor() { let e = a(Ie, { optional: !0 }); this._liveElement = e || this._createLiveElement(); }
    announce(e, ...t) { let n = this._defaultOptions, r, o; return t.length === 1 && typeof t[0] == "number" ? o = t[0] : [r, o] = t, this.clear(), clearTimeout(this._previousTimeout), r || (r = n && n.politeness ? n.politeness : "polite"), o == null && n && (o = n.duration), this._liveElement.setAttribute("aria-live", r), this._liveElement.id && this._exposeAnnouncerToModals(this._liveElement.id), this._ngZone.runOutsideAngular(() => (this._currentPromise || (this._currentPromise = new Promise(h => this._currentResolve = h)), clearTimeout(this._previousTimeout), this._previousTimeout = setTimeout(() => { this._liveElement.textContent = e, typeof o == "number" && (this._previousTimeout = setTimeout(() => this.clear(), o)), this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }, 100), this._currentPromise)); }
    clear() { this._liveElement && (this._liveElement.textContent = ""); }
    ngOnDestroy() { clearTimeout(this._previousTimeout), this._liveElement?.remove(), this._liveElement = null, this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }
    _createLiveElement() { let e = "cdk-live-announcer-element", t = this._document.getElementsByClassName(e), n = this._document.createElement("div"); for (let r = 0; r < t.length; r++)
        t[r].remove(); return n.classList.add(e), n.classList.add("cdk-visually-hidden"), n.setAttribute("aria-atomic", "true"), n.setAttribute("aria-live", "polite"), n.id = `cdk-live-announcer-${yt++}`, this._document.body.appendChild(n), n; }
    _exposeAnnouncerToModals(e) { let t = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]'); for (let n = 0; n < t.length; n++) {
        let r = t[n], o = r.getAttribute("aria-owns");
        o ? o.indexOf(e) === -1 && r.setAttribute("aria-owns", o + " " + e) : r.setAttribute("aria-owns", e);
    } }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })(), At = (() => { class s {
    _elementRef = a(fe);
    _liveAnnouncer = a(Ae);
    _contentObserver = a(Q);
    _ngZone = a(R);
    get politeness() { return this._politeness; }
    set politeness(e) { this._politeness = e === "off" || e === "assertive" ? e : "polite", this._politeness === "off" ? this._subscription && (this._subscription.unsubscribe(), this._subscription = null) : this._subscription || (this._subscription = this._ngZone.runOutsideAngular(() => this._contentObserver.observe(this._elementRef).subscribe(() => { let t = this._elementRef.nativeElement.textContent; t !== this._previousAnnouncedText && (this._liveAnnouncer.announce(t, this._politeness, this.duration), this._previousAnnouncedText = t); }))); }
    _politeness = "polite";
    duration;
    _previousAnnouncedText;
    _subscription;
    constructor() { a(g).load(b); }
    ngOnDestroy() { this._subscription && this._subscription.unsubscribe(); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = c.\u0275\u0275defineDirective({ type: s, selectors: [["", "cdkAriaLive", ""]], inputs: { politeness: [0, "cdkAriaLive", "politeness"], duration: [0, "cdkAriaLiveDuration", "duration"] }, exportAs: ["cdkAriaLive"] });
} return s; })(), _ = (function (s) { return s[s.NONE = 0] = "NONE", s[s.BLACK_ON_WHITE = 1] = "BLACK_ON_WHITE", s[s.WHITE_ON_BLACK = 2] = "WHITE_ON_BLACK", s; })(_ || {}), _e = "cdk-high-contrast-black-on-white", me = "cdk-high-contrast-white-on-black", x = "cdk-high-contrast-active", Ee = (() => { class s {
    _platform = a(l);
    _hasCheckedHighContrastMode;
    _document = a(S);
    _breakpointSubscription;
    constructor() { this._breakpointSubscription = a(X).observe("(forced-colors: active)").subscribe(() => { this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1, this._applyBodyHighContrastModeCssClasses()); }); }
    getHighContrastMode() { if (!this._platform.isBrowser)
        return _.NONE; let e = this._document.createElement("div"); e.style.backgroundColor = "rgb(1,2,3)", e.style.position = "absolute", this._document.body.appendChild(e); let t = this._document.defaultView || window, n = t && t.getComputedStyle ? t.getComputedStyle(e) : null, r = (n && n.backgroundColor || "").replace(/ /g, ""); switch (e.remove(), r) {
        case "rgb(0,0,0)":
        case "rgb(45,50,54)":
        case "rgb(32,32,32)": return _.WHITE_ON_BLACK;
        case "rgb(255,255,255)":
        case "rgb(255,250,239)": return _.BLACK_ON_WHITE;
    } return _.NONE; }
    ngOnDestroy() { this._breakpointSubscription.unsubscribe(); }
    _applyBodyHighContrastModeCssClasses() { if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        let e = this._document.body.classList;
        e.remove(x, _e, me), this._hasCheckedHighContrastMode = !0;
        let t = this.getHighContrastMode();
        t === _.BLACK_ON_WHITE ? e.add(x, _e) : t === _.WHITE_ON_BLACK && e.add(x, me);
    } }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })(), Et = (() => { class s {
    constructor() { a(Ee)._applyBodyHighContrastModeCssClasses(); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275mod = c.\u0275\u0275defineNgModule({ type: s });
    static \u0275inj = c.\u0275\u0275defineInjector({ imports: [J] });
} return s; })();
import * as F from "@angular/core";
import { inject as u, DOCUMENT as Le, APP_ID as jt, InjectionToken as Ut, NgZone as Ht, Injector as Vt } from "@angular/core";
import { signal as Ce, QueryList as ke, isSignal as Fe, effect as wt } from "@angular/core";
import { Subscription as Ot, Subject as Me } from "rxjs";
import { Subject as Te } from "rxjs";
import { tap as Tt, debounceTime as Ct, filter as kt, map as Ft } from "rxjs/operators";
var Mt = 200, p = class {
    _letterKeyStream = new Te;
    _items = [];
    _selectedItemIndex = -1;
    _pressedLetters = [];
    _skipPredicateFn;
    _selectedItem = new Te;
    selectedItem = this._selectedItem;
    constructor(i, e) { let t = typeof e?.debounceInterval == "number" ? e.debounceInterval : Mt; e?.skipPredicate && (this._skipPredicateFn = e.skipPredicate), this.setItems(i), this._setupKeyHandler(t); }
    destroy() { this._pressedLetters = [], this._letterKeyStream.complete(), this._selectedItem.complete(); }
    setCurrentSelectedItemIndex(i) { this._selectedItemIndex = i; }
    setItems(i) { this._items = i; }
    handleKey(i) { let e = i.keyCode; i.key && i.key.length === 1 ? this._letterKeyStream.next(i.key.toLocaleUpperCase()) : (e >= 65 && e <= 90 || e >= 48 && e <= 57) && this._letterKeyStream.next(String.fromCharCode(e)); }
    isTyping() { return this._pressedLetters.length > 0; }
    reset() { this._pressedLetters = []; }
    _setupKeyHandler(i) { this._letterKeyStream.pipe(Tt(e => this._pressedLetters.push(e)), Ct(i), kt(() => this._pressedLetters.length > 0), Ft(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e => { for (let t = 1; t < this._items.length + 1; t++) {
        let n = (this._selectedItemIndex + t) % this._items.length, r = this._items[n];
        if (!this._skipPredicateFn?.(r) && r.getLabel?.().toLocaleUpperCase().trim().indexOf(e) === 0) {
            this._selectedItem.next(r);
            break;
        }
    } this._pressedLetters = []; }); }
};
var m = class {
    _items;
    _activeItemIndex = Ce(-1);
    _activeItem = Ce(null);
    _wrap = !1;
    _typeaheadSubscription = Ot.EMPTY;
    _itemChangesSubscription;
    _vertical = !0;
    _horizontal;
    _allowedModifierKeys = [];
    _homeAndEnd = !1;
    _pageUpAndDown = { enabled: !1, delta: 10 };
    _effectRef;
    _typeahead;
    _skipPredicateFn = i => i.disabled;
    constructor(i, e) { this._items = i, i instanceof ke ? this._itemChangesSubscription = i.changes.subscribe(t => this._itemsChanged(t.toArray())) : Fe(i) && (this._effectRef = wt(() => this._itemsChanged(i()), { injector: e })); }
    tabOut = new Me;
    change = new Me;
    skipPredicate(i) { return this._skipPredicateFn = i, this; }
    withWrap(i = !0) { return this._wrap = i, this; }
    withVerticalOrientation(i = !0) { return this._vertical = i, this; }
    withHorizontalOrientation(i) { return this._horizontal = i, this; }
    withAllowedModifierKeys(i) { return this._allowedModifierKeys = i, this; }
    withTypeAhead(i = 200) { this._typeaheadSubscription.unsubscribe(); let e = this._getItemsArray(); return this._typeahead = new p(e, { debounceInterval: typeof i == "number" ? i : void 0, skipPredicate: t => this._skipPredicateFn(t) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(t => { this.setActiveItem(t); }), this; }
    cancelTypeahead() { return this._typeahead?.reset(), this; }
    withHomeAndEnd(i = !0) { return this._homeAndEnd = i, this; }
    withPageUpDown(i = !0, e = 10) { return this._pageUpAndDown = { enabled: i, delta: e }, this; }
    setActiveItem(i) { let e = this._activeItem(); this.updateActiveItem(i), this._activeItem() !== e && this.change.next(this._activeItemIndex()); }
    onKeydown(i) { let e = i.keyCode, n = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(r => !i[r] || this._allowedModifierKeys.indexOf(r) > -1); switch (e) {
        case 9:
            this.tabOut.next();
            return;
        case 40: if (this._vertical && n) {
            this.setNextItemActive();
            break;
        }
        else
            return;
        case 38: if (this._vertical && n) {
            this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 39: if (this._horizontal && n) {
            this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
            break;
        }
        else
            return;
        case 37: if (this._horizontal && n) {
            this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 36: if (this._homeAndEnd && n) {
            this.setFirstItemActive();
            break;
        }
        else
            return;
        case 35: if (this._homeAndEnd && n) {
            this.setLastItemActive();
            break;
        }
        else
            return;
        case 33: if (this._pageUpAndDown.enabled && n) {
            let r = this._activeItemIndex() - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(r > 0 ? r : 0, 1);
            break;
        }
        else
            return;
        case 34: if (this._pageUpAndDown.enabled && n) {
            let r = this._activeItemIndex() + this._pageUpAndDown.delta, o = this._getItemsArray().length;
            this._setActiveItemByIndex(r < o ? r : o - 1, -1);
            break;
        }
        else
            return;
        default:
            (n || ee(i, "shiftKey")) && this._typeahead?.handleKey(i);
            return;
    } this._typeahead?.reset(), i.preventDefault(); }
    get activeItemIndex() { return this._activeItemIndex(); }
    get activeItem() { return this._activeItem(); }
    isTyping() { return !!this._typeahead && this._typeahead.isTyping(); }
    setFirstItemActive() { this._setActiveItemByIndex(0, 1); }
    setLastItemActive() { this._setActiveItemByIndex(this._getItemsArray().length - 1, -1); }
    setNextItemActive() { this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1); }
    setPreviousItemActive() { this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1); }
    updateActiveItem(i) { let e = this._getItemsArray(), t = typeof i == "number" ? i : e.indexOf(i), n = e[t]; this._activeItem.set(n ?? null), this._activeItemIndex.set(t), this._typeahead?.setCurrentSelectedItemIndex(t); }
    destroy() { this._typeaheadSubscription.unsubscribe(), this._itemChangesSubscription?.unsubscribe(), this._effectRef?.destroy(), this._typeahead?.destroy(), this.tabOut.complete(), this.change.complete(); }
    _setActiveItemByDelta(i) { this._wrap ? this._setActiveInWrapMode(i) : this._setActiveInDefaultMode(i); }
    _setActiveInWrapMode(i) { let e = this._getItemsArray(); for (let t = 1; t <= e.length; t++) {
        let n = (this._activeItemIndex() + i * t + e.length) % e.length, r = e[n];
        if (!this._skipPredicateFn(r)) {
            this.setActiveItem(n);
            return;
        }
    } }
    _setActiveInDefaultMode(i) { this._setActiveItemByIndex(this._activeItemIndex() + i, i); }
    _setActiveItemByIndex(i, e) { let t = this._getItemsArray(); if (t[i]) {
        for (; this._skipPredicateFn(t[i]);)
            if (i += e, !t[i])
                return;
        this.setActiveItem(i);
    } }
    _getItemsArray() { return Fe(this._items) ? this._items() : this._items instanceof ke ? this._items.toArray() : this._items; }
    _itemsChanged(i) { this._typeahead?.setItems(i); let e = this._activeItem(); if (e) {
        let t = i.indexOf(e);
        t > -1 && t !== this._activeItemIndex() && (this._activeItemIndex.set(t), this._typeahead?.setCurrentSelectedItemIndex(t));
    } }
};
var B = class extends m {
    setActiveItem(i) { this.activeItem && this.activeItem.setInactiveStyles(), super.setActiveItem(i), this.activeItem && this.activeItem.setActiveStyles(); }
};
var K = class extends m {
    _origin = "program";
    setFocusOrigin(i) { return this._origin = i, this; }
    setActiveItem(i) { super.setActiveItem(i), this.activeItem && this.activeItem.focus(this._origin); }
};
import { Subject as Wt } from "rxjs";
import { QueryList as xt, InjectionToken as Dt } from "@angular/core";
import { Subscription as Rt, isObservable as St, Subject as Pt, of as Bt } from "rxjs";
import { take as we } from "rxjs/operators";
import { isObservable as Lt, of as Nt } from "rxjs";
function j(s) { return Lt(s) ? s : Nt(s); }
var T = class {
    _activeItemIndex = -1;
    _activeItem = null;
    _shouldActivationFollowFocus = !1;
    _horizontalOrientation = "ltr";
    _skipPredicateFn = i => !1;
    _trackByFn = i => i;
    _items = [];
    _typeahead;
    _typeaheadSubscription = Rt.EMPTY;
    _hasInitialFocused = !1;
    _initializeFocus() { if (this._hasInitialFocused || this._items.length === 0)
        return; let i = 0; for (let t = 0; t < this._items.length; t++)
        if (!this._skipPredicateFn(this._items[t]) && !this._isItemDisabled(this._items[t])) {
            i = t;
            break;
        } let e = this._items[i]; e.makeFocusable ? (this._activeItem?.unfocus(), this._activeItemIndex = i, this._activeItem = e, this._typeahead?.setCurrentSelectedItemIndex(i), e.makeFocusable()) : this.focusItem(i), this._hasInitialFocused = !0; }
    constructor(i, e) { i instanceof xt ? (this._items = i.toArray(), i.changes.subscribe(t => { this._items = t.toArray(), this._typeahead?.setItems(this._items), this._updateActiveItemIndex(this._items), this._initializeFocus(); })) : St(i) ? i.subscribe(t => { this._items = t, this._typeahead?.setItems(t), this._updateActiveItemIndex(t), this._initializeFocus(); }) : (this._items = i, this._initializeFocus()), typeof e.shouldActivationFollowFocus == "boolean" && (this._shouldActivationFollowFocus = e.shouldActivationFollowFocus), e.horizontalOrientation && (this._horizontalOrientation = e.horizontalOrientation), e.skipPredicate && (this._skipPredicateFn = e.skipPredicate), e.trackBy && (this._trackByFn = e.trackBy), typeof e.typeAheadDebounceInterval < "u" && this._setTypeAhead(e.typeAheadDebounceInterval); }
    change = new Pt;
    destroy() { this._typeaheadSubscription.unsubscribe(), this._typeahead?.destroy(), this.change.complete(); }
    onKeydown(i) { switch (i.key) {
        case "Tab": return;
        case "ArrowDown":
            this._focusNextItem();
            break;
        case "ArrowUp":
            this._focusPreviousItem();
            break;
        case "ArrowRight":
            this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
            break;
        case "ArrowLeft":
            this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
            break;
        case "Home":
            this._focusFirstItem();
            break;
        case "End":
            this._focusLastItem();
            break;
        case "Enter":
        case " ":
            this._activateCurrentItem();
            break;
        default:
            if (i.key === "*") {
                this._expandAllItemsAtCurrentItemLevel();
                break;
            }
            this._typeahead?.handleKey(i);
            return;
    } this._typeahead?.reset(), i.preventDefault(); }
    getActiveItemIndex() { return this._activeItemIndex; }
    getActiveItem() { return this._activeItem; }
    _focusFirstItem() { this.focusItem(this._findNextAvailableItemIndex(-1)); }
    _focusLastItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._items.length)); }
    _focusNextItem() { this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex)); }
    _focusPreviousItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex)); }
    focusItem(i, e = {}) { e.emitChangeEvent ??= !0; let t = typeof i == "number" ? i : this._items.findIndex(o => this._trackByFn(o) === this._trackByFn(i)); if (t < 0 || t >= this._items.length)
        return; let n = this._items[t]; if (this._activeItem !== null && this._trackByFn(n) === this._trackByFn(this._activeItem))
        return; let r = this._activeItem; this._activeItem = n ?? null, this._activeItemIndex = t, this._typeahead?.setCurrentSelectedItemIndex(t), this._activeItem?.focus(), r?.unfocus(), e.emitChangeEvent && this.change.next(this._activeItem), this._shouldActivationFollowFocus && this._activateCurrentItem(); }
    _updateActiveItemIndex(i) { let e = this._activeItem; if (!e)
        return; let t = i.findIndex(n => this._trackByFn(n) === this._trackByFn(e)); t > -1 && t !== this._activeItemIndex && (this._activeItemIndex = t, this._typeahead?.setCurrentSelectedItemIndex(t)); }
    _setTypeAhead(i) { this._typeahead = new p(this._items, { debounceInterval: typeof i == "number" ? i : void 0, skipPredicate: e => this._skipPredicateFn(e) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(e => { this.focusItem(e); }); }
    _findNextAvailableItemIndex(i) { for (let e = i + 1; e < this._items.length; e++)
        if (!this._skipPredicateFn(this._items[e]))
            return e; return i; }
    _findPreviousAvailableItemIndex(i) { for (let e = i - 1; e >= 0; e--)
        if (!this._skipPredicateFn(this._items[e]))
            return e; return i; }
    _collapseCurrentItem() { if (this._activeItem)
        if (this._isCurrentItemExpanded())
            this._activeItem.collapse();
        else {
            let i = this._activeItem.getParent();
            if (!i || this._skipPredicateFn(i))
                return;
            this.focusItem(i);
        } }
    _expandCurrentItem() { this._activeItem && (this._isCurrentItemExpanded() ? j(this._activeItem.getChildren()).pipe(we(1)).subscribe(i => { let e = i.find(t => !this._skipPredicateFn(t)); e && this.focusItem(e); }) : this._activeItem.expand()); }
    _isCurrentItemExpanded() { return this._activeItem ? typeof this._activeItem.isExpanded == "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded() : !1; }
    _isItemDisabled(i) { return typeof i.isDisabled == "boolean" ? i.isDisabled : i.isDisabled?.(); }
    _expandAllItemsAtCurrentItemLevel() { if (!this._activeItem)
        return; let i = this._activeItem.getParent(), e; i ? e = j(i.getChildren()) : e = Bt(this._items.filter(t => t.getParent() === null)), e.pipe(we(1)).subscribe(t => { for (let n of t)
        n.expand(); }); }
    _activateCurrentItem() { this._activeItem?.activate(); }
};
function U() { return (s, i) => new T(s, i); }
var H = new Dt("tree-key-manager", { providedIn: "root", factory: U }), Kt = { provide: H, useFactory: U };
import "rxjs/operators";
import "@angular/common";
var Ne = " ";
function Yt(s, i, e) { let t = k(s, i); e = e.trim(), !t.some(n => n.trim() === e) && (t.push(e), s.setAttribute(i, t.join(Ne))); }
function Zt(s, i, e) { let t = k(s, i); e = e.trim(); let n = t.filter(r => r !== e); n.length ? s.setAttribute(i, n.join(Ne)) : s.removeAttribute(i); }
function k(s, i) { return s.getAttribute(i)?.match(/\S+/g) ?? []; }
var Qi = "cdk-describedby-message-container", xe = "cdk-describedby-message", C = "cdk-describedby-host", W = 0, Ji = (() => { class s {
    _platform = u(l);
    _document = u(Le);
    _messageRegistry = new Map;
    _messagesContainer = null;
    _id = `${W++}`;
    constructor() { u(g).load(b), this._id = u(jt) + "-" + W++; }
    describe(e, t, n) { if (!this._canBeDescribed(e, t))
        return; let r = V(t, n); typeof t != "string" ? (Oe(t, this._id), this._messageRegistry.set(r, { messageElement: t, referenceCount: 0 })) : this._messageRegistry.has(r) || this._createMessageElement(t, n), this._isElementDescribedByMessage(e, r) || this._addMessageReference(e, r); }
    removeDescription(e, t, n) { if (!t || !this._isElementNode(e))
        return; let r = V(t, n); if (this._isElementDescribedByMessage(e, r) && this._removeMessageReference(e, r), typeof t == "string") {
        let o = this._messageRegistry.get(r);
        o && o.referenceCount === 0 && this._deleteMessageElement(r);
    } this._messagesContainer?.childNodes.length === 0 && (this._messagesContainer.remove(), this._messagesContainer = null); }
    ngOnDestroy() { let e = this._document.querySelectorAll(`[${C}="${this._id}"]`); for (let t = 0; t < e.length; t++)
        this._removeCdkDescribedByReferenceIds(e[t]), e[t].removeAttribute(C); this._messagesContainer?.remove(), this._messagesContainer = null, this._messageRegistry.clear(); }
    _createMessageElement(e, t) { let n = this._document.createElement("div"); Oe(n, this._id), n.textContent = e, t && n.setAttribute("role", t), this._createMessagesContainer(), this._messagesContainer.appendChild(n), this._messageRegistry.set(V(e, t), { messageElement: n, referenceCount: 0 }); }
    _deleteMessageElement(e) { this._messageRegistry.get(e)?.messageElement?.remove(), this._messageRegistry.delete(e); }
    _createMessagesContainer() { if (this._messagesContainer)
        return; let e = "cdk-describedby-message-container", t = this._document.querySelectorAll(`.${e}[platform="server"]`); for (let r = 0; r < t.length; r++)
        t[r].remove(); let n = this._document.createElement("div"); n.style.visibility = "hidden", n.classList.add(e), n.classList.add("cdk-visually-hidden"), this._platform.isBrowser || n.setAttribute("platform", "server"), this._document.body.appendChild(n), this._messagesContainer = n; }
    _removeCdkDescribedByReferenceIds(e) { let t = k(e, "aria-describedby").filter(n => n.indexOf(xe) != 0); e.setAttribute("aria-describedby", t.join(" ")); }
    _addMessageReference(e, t) { let n = this._messageRegistry.get(t); Yt(e, "aria-describedby", n.messageElement.id), e.setAttribute(C, this._id), n.referenceCount++; }
    _removeMessageReference(e, t) { let n = this._messageRegistry.get(t); n.referenceCount--, Zt(e, "aria-describedby", n.messageElement.id), e.removeAttribute(C); }
    _isElementDescribedByMessage(e, t) { let n = k(e, "aria-describedby"), r = this._messageRegistry.get(t), o = r && r.messageElement.id; return !!o && n.indexOf(o) != -1; }
    _canBeDescribed(e, t) { if (!this._isElementNode(e))
        return !1; if (t && typeof t == "object")
        return !0; let n = t == null ? "" : `${t}`.trim(), r = e.getAttribute("aria-label"); return n ? !r || r.trim() !== n : !1; }
    _isElementNode(e) { return e.nodeType === this._document.ELEMENT_NODE; }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275prov = F.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })();
function V(s, i) { return typeof s == "string" ? `${i || ""}/${s}` : s; }
function Oe(s, i) { s.id || (s.id = `${xe}-${i}-${W++}`); }
var Y = class {
    _isNoopTreeKeyManager = !0;
    change = new Wt;
    destroy() { this.change.complete(); }
    onKeydown() { }
    getActiveItemIndex() { return null; }
    getActiveItem() { return null; }
    focusItem() { }
};
function Gt() { return () => new Y; }
var es = { provide: H, useFactory: Gt }, Z = class extends y {
    _focusTrapManager;
    _inertStrategy;
    get enabled() { return this._enabled; }
    set enabled(i) { this._enabled = i, this._enabled ? this._focusTrapManager.register(this) : this._focusTrapManager.deregister(this); }
    constructor(i, e, t, n, r, o, h, M) { super(i, e, t, n, h.defer, M), this._focusTrapManager = r, this._inertStrategy = o, this._focusTrapManager.register(this); }
    destroy() { this._focusTrapManager.deregister(this), super.destroy(); }
    _enable() { this._inertStrategy.preventFocus(this), this.toggleAnchors(!0); }
    _disable() { this._inertStrategy.allowFocus(this), this.toggleAnchors(!1); }
}, G = class {
    _listener = null;
    preventFocus(i) { this._listener && i._document.removeEventListener("focus", this._listener, !0), this._listener = e => this._trapFocus(i, e), i._ngZone.runOutsideAngular(() => { i._document.addEventListener("focus", this._listener, !0); }); }
    allowFocus(i) { this._listener && (i._document.removeEventListener("focus", this._listener, !0), this._listener = null); }
    _trapFocus(i, e) { let t = e.target, n = i._element; t && !n.contains(t) && !t.closest?.("div.cdk-overlay-pane") && setTimeout(() => { i.enabled && !n.contains(i._document.activeElement) && i.focusFirstTabbableElement(); }); }
}, $t = new Ut("FOCUS_TRAP_INERT_STRATEGY"), zt = (() => { class s {
    _focusTrapStack = [];
    register(e) { this._focusTrapStack = this._focusTrapStack.filter(n => n !== e); let t = this._focusTrapStack; t.length && t[t.length - 1]._disable(), t.push(e), e._enable(); }
    deregister(e) { e._disable(); let t = this._focusTrapStack, n = t.indexOf(e); n !== -1 && (t.splice(n, 1), t.length && t[t.length - 1]._enable()); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275prov = F.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })(), ts = (() => { class s {
    _checker = u(P);
    _ngZone = u(Ht);
    _focusTrapManager = u(zt);
    _document = u(Le);
    _inertStrategy;
    _injector = u(Vt);
    constructor() { let e = u($t, { optional: !0 }); this._inertStrategy = e || new G; }
    create(e, t = { defer: !1 }) { let n; return typeof t == "boolean" ? n = { defer: t } : n = t, new Z(e, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, n, this._injector); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275prov = F.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })();
export { Et as A11yModule, B as ActiveDescendantKeyManager, Ji as AriaDescriber, C as CDK_DESCRIBEDBY_HOST_ATTRIBUTE, xe as CDK_DESCRIBEDBY_ID_PREFIX, At as CdkAriaLive, at as CdkMonitorFocus, vt as CdkTrapFocus, Z as ConfigurableFocusTrap, ts as ConfigurableFocusTrapFactory, G as EventListenerFocusTrapInertStrategy, de as FOCUS_MONITOR_DEFAULT_OPTIONS, $t as FOCUS_TRAP_INERT_STRATEGY, K as FocusKeyManager, ue as FocusMonitor, I as FocusMonitorDetectionMode, y as FocusTrap, be as FocusTrapFactory, _ as HighContrastMode, Ee as HighContrastModeDetector, oe as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, re as INPUT_MODALITY_DETECTOR_OPTIONS, ce as InputModalityDetector, P as InteractivityChecker, D as IsFocusableConfig, ye as LIVE_ANNOUNCER_DEFAULT_OPTIONS, Ie as LIVE_ANNOUNCER_ELEMENT_TOKEN, ve as LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, m as ListKeyManager, Ae as LiveAnnouncer, Qi as MESSAGES_CONTAINER_ID, Gt as NOOP_TREE_KEY_MANAGER_FACTORY, es as NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER, Y as NoopTreeKeyManager, H as TREE_KEY_MANAGER, U as TREE_KEY_MANAGER_FACTORY, Kt as TREE_KEY_MANAGER_FACTORY_PROVIDER, T as TreeKeyManager, Qe as _IdGenerator, Yt as addAriaReferencedId, k as getAriaReferenceIds, O as isFakeMousedownFromScreenReader, L as isFakeTouchstartFromScreenReader, Zt as removeAriaReferencedId };
