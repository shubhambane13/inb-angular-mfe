import { e as O } from "@nf-internal/chunk-5KSFOI5Q";
import { b as v } from "@nf-internal/chunk-RXMLTE5A";
import { a } from "@nf-internal/chunk-4CLCTAJ7";
import { normalizePassiveListenerOptions as P, _getEventTarget as k, Platform as x } from "@angular/cdk/platform";
import * as p from "@angular/core";
import { InjectionToken as H, inject as h, ElementRef as G, NgZone as B, Injector as z } from "@angular/core";
import { isFakeMousedownFromScreenReader as Z, isFakeTouchstartFromScreenReader as V } from "@angular/cdk/a11y";
import { coerceElement as w } from "@angular/cdk/coercion";
import { _CdkPrivateStyleLoader as $ } from "@angular/cdk/private";
var l = (function (s) { return s[s.FADING_IN = 0] = "FADING_IN", s[s.VISIBLE = 1] = "VISIBLE", s[s.FADING_OUT = 2] = "FADING_OUT", s[s.HIDDEN = 3] = "HIDDEN", s; })(l || {}), E = class {
    _renderer;
    element;
    config;
    _animationForciblyDisabledThroughCss;
    state = l.HIDDEN;
    constructor(t, e, i, n = !1) { this._renderer = t, this.element = e, this.config = i, this._animationForciblyDisabledThroughCss = n; }
    fadeOut() { this._renderer.fadeOutRipple(this); }
}, M = P({ passive: !0, capture: !0 }), D = class {
    _events = new Map;
    addHandler(t, e, i, n) { let r = this._events.get(e); if (r) {
        let d = r.get(i);
        d ? d.add(n) : r.set(i, new Set([n]));
    }
    else
        this._events.set(e, new Map([[i, new Set([n])]])), t.runOutsideAngular(() => { document.addEventListener(e, this._delegateEventHandler, M); }); }
    removeHandler(t, e, i) { let n = this._events.get(t); if (!n)
        return; let r = n.get(e); r && (r.delete(i), r.size === 0 && n.delete(e), n.size === 0 && (this._events.delete(t), document.removeEventListener(t, this._delegateEventHandler, M))); }
    _delegateEventHandler = t => { let e = k(t); e && this._events.get(t.type)?.forEach((i, n) => { (n === e || n.contains(e)) && i.forEach(r => r.handleEvent(t)); }); };
}, A = { enterDuration: 225, exitDuration: 150 }, j = 800, F = P({ passive: !0, capture: !0 }), C = ["mousedown", "touchstart"], N = ["mouseup", "mouseleave", "touchend", "touchcancel"], Y = (() => {
    class s {
        static \u0275fac = function (i) { return new (i || s); };
        static \u0275cmp = p.\u0275\u0275defineComponent({ type: s, selectors: [["ng-component"]], hostAttrs: ["mat-ripple-style-loader", ""], decls: 0, vars: 0, template: function (i, n) { }, styles: [`.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}
`], encapsulation: 2, changeDetection: 0 });
    }
    return s;
})(), b = class s {
    _target;
    _ngZone;
    _platform;
    _containerElement;
    _triggerElement;
    _isPointerDown = !1;
    _activeRipples = new Map;
    _mostRecentTransientRipple;
    _lastTouchStartEvent;
    _pointerUpEventsRegistered = !1;
    _containerRect;
    static _eventManager = new D;
    constructor(t, e, i, n, r) { this._target = t, this._ngZone = e, this._platform = n, n.isBrowser && (this._containerElement = w(i)), r && r.get($).load(Y); }
    fadeInRipple(t, e, i = {}) { let n = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(), r = a(a({}, A), i.animation); i.centered && (t = n.left + n.width / 2, e = n.top + n.height / 2); let d = i.radius || X(t, e, n), L = t - n.left, U = e - n.top, u = r.enterDuration, o = document.createElement("div"); o.classList.add("mat-ripple-element"), o.style.left = `${L - d}px`, o.style.top = `${U - d}px`, o.style.height = `${d * 2}px`, o.style.width = `${d * 2}px`, i.color != null && (o.style.backgroundColor = i.color), o.style.transitionDuration = `${u}ms`, this._containerElement.appendChild(o); let T = window.getComputedStyle(o), S = T.transitionProperty, R = T.transitionDuration, _ = S === "none" || R === "0s" || R === "0s, 0s" || n.width === 0 && n.height === 0, c = new E(this, o, i, _); o.style.transform = "scale3d(1, 1, 1)", c.state = l.FADING_IN, i.persistent || (this._mostRecentTransientRipple = c); let m = null; return !_ && (u || r.exitDuration) && this._ngZone.runOutsideAngular(() => { let I = () => { m && (m.fallbackTimer = null), clearTimeout(y), this._finishRippleTransition(c); }, f = () => this._destroyRipple(c), y = setTimeout(f, u + 100); o.addEventListener("transitionend", I), o.addEventListener("transitioncancel", f), m = { onTransitionEnd: I, onTransitionCancel: f, fallbackTimer: y }; }), this._activeRipples.set(c, m), (_ || !u) && this._finishRippleTransition(c), c; }
    fadeOutRipple(t) { if (t.state === l.FADING_OUT || t.state === l.HIDDEN)
        return; let e = t.element, i = a(a({}, A), t.config.animation); e.style.transitionDuration = `${i.exitDuration}ms`, e.style.opacity = "0", t.state = l.FADING_OUT, (t._animationForciblyDisabledThroughCss || !i.exitDuration) && this._finishRippleTransition(t); }
    fadeOutAll() { this._getActiveRipples().forEach(t => t.fadeOut()); }
    fadeOutAllNonPersistent() { this._getActiveRipples().forEach(t => { t.config.persistent || t.fadeOut(); }); }
    setupTriggerEvents(t) { let e = w(t); !this._platform.isBrowser || !e || e === this._triggerElement || (this._removeTriggerEvents(), this._triggerElement = e, C.forEach(i => { s._eventManager.addHandler(this._ngZone, i, e, this); })); }
    handleEvent(t) { t.type === "mousedown" ? this._onMousedown(t) : t.type === "touchstart" ? this._onTouchStart(t) : this._onPointerUp(), this._pointerUpEventsRegistered || (this._ngZone.runOutsideAngular(() => { N.forEach(e => { this._triggerElement.addEventListener(e, this, F); }); }), this._pointerUpEventsRegistered = !0); }
    _finishRippleTransition(t) { t.state === l.FADING_IN ? this._startFadeOutTransition(t) : t.state === l.FADING_OUT && this._destroyRipple(t); }
    _startFadeOutTransition(t) { let e = t === this._mostRecentTransientRipple, { persistent: i } = t.config; t.state = l.VISIBLE, !i && (!e || !this._isPointerDown) && t.fadeOut(); }
    _destroyRipple(t) { let e = this._activeRipples.get(t) ?? null; this._activeRipples.delete(t), this._activeRipples.size || (this._containerRect = null), t === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), t.state = l.HIDDEN, e !== null && (t.element.removeEventListener("transitionend", e.onTransitionEnd), t.element.removeEventListener("transitioncancel", e.onTransitionCancel), e.fallbackTimer !== null && clearTimeout(e.fallbackTimer)), t.element.remove(); }
    _onMousedown(t) { let e = Z(t), i = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + j; !this._target.rippleDisabled && !e && !i && (this._isPointerDown = !0, this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig)); }
    _onTouchStart(t) { if (!this._target.rippleDisabled && !V(t)) {
        this._lastTouchStartEvent = Date.now(), this._isPointerDown = !0;
        let e = t.changedTouches;
        if (e)
            for (let i = 0; i < e.length; i++)
                this.fadeInRipple(e[i].clientX, e[i].clientY, this._target.rippleConfig);
    } }
    _onPointerUp() { this._isPointerDown && (this._isPointerDown = !1, this._getActiveRipples().forEach(t => { let e = t.state === l.VISIBLE || t.config.terminateOnPointerUp && t.state === l.FADING_IN; !t.config.persistent && e && t.fadeOut(); })); }
    _getActiveRipples() { return Array.from(this._activeRipples.keys()); }
    _removeTriggerEvents() { let t = this._triggerElement; t && (C.forEach(e => s._eventManager.removeHandler(e, t, this)), this._pointerUpEventsRegistered && (N.forEach(e => t.removeEventListener(e, this, F)), this._pointerUpEventsRegistered = !1)); }
};
function X(s, t, e) { let i = Math.max(Math.abs(s - e.left), Math.abs(s - e.right)), n = Math.max(Math.abs(t - e.top), Math.abs(t - e.bottom)); return Math.sqrt(i * i + n * n); }
var q = new H("mat-ripple-global-options"), at = (() => { class s {
    _elementRef = h(G);
    _animationsDisabled = O();
    color;
    unbounded;
    centered;
    radius = 0;
    animation;
    get disabled() { return this._disabled; }
    set disabled(e) { e && this.fadeOutAllNonPersistent(), this._disabled = e, this._setupTriggerEventsIfEnabled(); }
    _disabled = !1;
    get trigger() { return this._trigger || this._elementRef.nativeElement; }
    set trigger(e) { this._trigger = e, this._setupTriggerEventsIfEnabled(); }
    _trigger;
    _rippleRenderer;
    _globalOptions;
    _isInitialized = !1;
    constructor() { let e = h(B), i = h(x), n = h(q, { optional: !0 }), r = h(z); this._globalOptions = n || {}, this._rippleRenderer = new b(this, e, this._elementRef, i, r); }
    ngOnInit() { this._isInitialized = !0, this._setupTriggerEventsIfEnabled(); }
    ngOnDestroy() { this._rippleRenderer._removeTriggerEvents(); }
    fadeOutAll() { this._rippleRenderer.fadeOutAll(); }
    fadeOutAllNonPersistent() { this._rippleRenderer.fadeOutAllNonPersistent(); }
    get rippleConfig() { return { centered: this.centered, radius: this.radius, color: this.color, animation: a(a(a({}, this._globalOptions.animation), this._animationsDisabled ? { enterDuration: 0, exitDuration: 0 } : {}), this.animation), terminateOnPointerUp: this._globalOptions.terminateOnPointerUp }; }
    get rippleDisabled() { return this.disabled || !!this._globalOptions.disabled; }
    _setupTriggerEventsIfEnabled() { !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger); }
    launch(e, i = 0, n) { return typeof e == "number" ? this._rippleRenderer.fadeInRipple(e, i, a(a({}, this.rippleConfig), n)) : this._rippleRenderer.fadeInRipple(0, 0, a(a({}, this.rippleConfig), e)); }
    static \u0275fac = function (i) { return new (i || s); };
    static \u0275dir = p.\u0275\u0275defineDirective({ type: s, selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]], hostAttrs: [1, "mat-ripple"], hostVars: 2, hostBindings: function (i, n) { i & 2 && p.\u0275\u0275classProp("mat-ripple-unbounded", n.unbounded); }, inputs: { color: [0, "matRippleColor", "color"], unbounded: [0, "matRippleUnbounded", "unbounded"], centered: [0, "matRippleCentered", "centered"], radius: [0, "matRippleRadius", "radius"], animation: [0, "matRippleAnimation", "animation"], disabled: [0, "matRippleDisabled", "disabled"], trigger: [0, "matRippleTrigger", "trigger"] }, exportAs: ["matRipple"] });
} return s; })();
import * as g from "@angular/core";
import "@angular/core";
var ut = (() => { class s {
    static \u0275fac = function (i) { return new (i || s); };
    static \u0275mod = g.\u0275\u0275defineNgModule({ type: s });
    static \u0275inj = g.\u0275\u0275defineInjector({ imports: [v, v] });
} return s; })();
export { l as a, E as b, A as c, b as d, q as e, at as f, ut as g };
