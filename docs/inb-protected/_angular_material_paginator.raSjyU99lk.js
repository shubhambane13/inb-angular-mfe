import { g as D, i as S } from "@nf-internal/chunk-O3FHVEU4";
import { e as C } from "@nf-internal/chunk-HU6JN3N4";
import "@nf-internal/chunk-ZTVVMKVB";
import { o as w } from "@nf-internal/chunk-WYLMCG44";
import "@nf-internal/chunk-J363IQZ4";
import { b as I, l as x } from "@nf-internal/chunk-PKDZMBIQ";
import "@nf-internal/chunk-NE4GLYAS";
import "@nf-internal/chunk-QY5KRA7R";
import "@nf-internal/chunk-4MZRILT7";
import { e as f } from "@nf-internal/chunk-5KSFOI5Q";
import { b as v } from "@nf-internal/chunk-RXMLTE5A";
import { a as h } from "@nf-internal/chunk-4CLCTAJ7";
import * as e from "@angular/core";
import { Optional as ft, SkipSelf as vt, InjectionToken as bt, inject as _, ChangeDetectorRef as yt, numberAttribute as g, EventEmitter as Tt, booleanAttribute as T } from "@angular/core";
import { Subject as Pt, ReplaySubject as It } from "rxjs";
import { _IdGenerator as xt } from "@angular/cdk/a11y";
import { takeUntil as c } from "rxjs/operators";
import { coerceBooleanProperty as O, coerceNumberProperty as z } from "@angular/cdk/coercion";
import { ESCAPE as j, hasModifierKey as H } from "@angular/cdk/keycodes";
import * as s from "@angular/core";
import { InjectionToken as A, inject as l, Injector as y, ElementRef as b, NgZone as X, ViewContainerRef as U, afterNextRender as M, DOCUMENT as $, ChangeDetectorRef as Z } from "@angular/core";
import { NgClass as Q } from "@angular/common";
import { normalizePassiveListenerOptions as W, Platform as q } from "@angular/cdk/platform";
import { AriaDescriber as K, FocusMonitor as J } from "@angular/cdk/a11y";
import { Directionality as tt } from "@angular/cdk/bidi";
import { createRepositionScrollStrategy as R, ScrollDispatcher as et, createFlexibleConnectedPositionStrategy as it, createOverlayRef as ot } from "@angular/cdk/overlay";
import { ComponentPortal as at } from "@angular/cdk/portal";
import { Subject as k } from "rxjs";
var nt = ["tooltip"], N = 20;
var F = new A("mat-tooltip-scroll-strategy", { providedIn: "root", factory: () => { let a = l(y); return () => R(a, { scrollThrottle: N }); } });
function st(a) { let p = l(y); return () => R(p, { scrollThrottle: N }); }
var B = { provide: F, deps: [], useFactory: st };
function rt() { return { showDelay: 0, hideDelay: 0, touchendHideDelay: 1500 }; }
var lt = new A("mat-tooltip-default-options", { providedIn: "root", factory: rt });
var L = "tooltip-panel", E = W({ passive: !0 }), pt = 8, dt = 8, ct = 24, ht = 200, V = (() => { class a {
    _elementRef = l(b);
    _ngZone = l(X);
    _platform = l(q);
    _ariaDescriber = l(K);
    _focusMonitor = l(J);
    _dir = l(tt);
    _injector = l(y);
    _viewContainerRef = l(U);
    _animationsDisabled = f();
    _defaultOptions = l(lt, { optional: !0 });
    _overlayRef;
    _tooltipInstance;
    _overlayPanelClass;
    _portal;
    _position = "below";
    _positionAtOrigin = !1;
    _disabled = !1;
    _tooltipClass;
    _viewInitialized = !1;
    _pointerExitEventsInitialized = !1;
    _tooltipComponent = mt;
    _viewportMargin = 8;
    _currentPosition;
    _cssClassPrefix = "mat-mdc";
    _ariaDescriptionPending;
    _dirSubscribed = !1;
    get position() { return this._position; }
    set position(t) { t !== this._position && (this._position = t, this._overlayRef && (this._updatePosition(this._overlayRef), this._tooltipInstance?.show(0), this._overlayRef.updatePosition())); }
    get positionAtOrigin() { return this._positionAtOrigin; }
    set positionAtOrigin(t) { this._positionAtOrigin = O(t), this._detach(), this._overlayRef = null; }
    get disabled() { return this._disabled; }
    set disabled(t) { let i = O(t); this._disabled !== i && (this._disabled = i, i ? this.hide(0) : this._setupPointerEnterEventsIfNeeded(), this._syncAriaDescription(this.message)); }
    get showDelay() { return this._showDelay; }
    set showDelay(t) { this._showDelay = z(t); }
    _showDelay;
    get hideDelay() { return this._hideDelay; }
    set hideDelay(t) { this._hideDelay = z(t), this._tooltipInstance && (this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay); }
    _hideDelay;
    touchGestures = "auto";
    get message() { return this._message; }
    set message(t) { let i = this._message; this._message = t != null ? String(t).trim() : "", !this._message && this._isTooltipVisible() ? this.hide(0) : (this._setupPointerEnterEventsIfNeeded(), this._updateTooltipMessage()), this._syncAriaDescription(i); }
    _message = "";
    get tooltipClass() { return this._tooltipClass; }
    set tooltipClass(t) { this._tooltipClass = t, this._tooltipInstance && this._setTooltipClass(this._tooltipClass); }
    _passiveListeners = [];
    _touchstartTimeout = null;
    _destroyed = new k;
    _isDestroyed = !1;
    constructor() { let t = this._defaultOptions; t && (this._showDelay = t.showDelay, this._hideDelay = t.hideDelay, t.position && (this.position = t.position), t.positionAtOrigin && (this.positionAtOrigin = t.positionAtOrigin), t.touchGestures && (this.touchGestures = t.touchGestures), t.tooltipClass && (this.tooltipClass = t.tooltipClass)), this._viewportMargin = pt; }
    ngAfterViewInit() { this._viewInitialized = !0, this._setupPointerEnterEventsIfNeeded(), this._focusMonitor.monitor(this._elementRef).pipe(c(this._destroyed)).subscribe(t => { t ? t === "keyboard" && this._ngZone.run(() => this.show()) : this._ngZone.run(() => this.hide(0)); }); }
    ngOnDestroy() { let t = this._elementRef.nativeElement; this._touchstartTimeout && clearTimeout(this._touchstartTimeout), this._overlayRef && (this._overlayRef.dispose(), this._tooltipInstance = null), this._passiveListeners.forEach(([i, o]) => { t.removeEventListener(i, o, E); }), this._passiveListeners.length = 0, this._destroyed.next(), this._destroyed.complete(), this._isDestroyed = !0, this._ariaDescriber.removeDescription(t, this.message, "tooltip"), this._focusMonitor.stopMonitoring(t); }
    show(t = this.showDelay, i) { if (this.disabled || !this.message || this._isTooltipVisible()) {
        this._tooltipInstance?._cancelPendingAnimations();
        return;
    } let o = this._createOverlay(i); this._detach(), this._portal = this._portal || new at(this._tooltipComponent, this._viewContainerRef); let n = this._tooltipInstance = o.attach(this._portal).instance; n._triggerElement = this._elementRef.nativeElement, n._mouseLeaveHideDelay = this._hideDelay, n.afterHidden().pipe(c(this._destroyed)).subscribe(() => this._detach()), this._setTooltipClass(this._tooltipClass), this._updateTooltipMessage(), n.show(t); }
    hide(t = this.hideDelay) { let i = this._tooltipInstance; i && (i.isVisible() ? i.hide(t) : (i._cancelPendingAnimations(), this._detach())); }
    toggle(t) { this._isTooltipVisible() ? this.hide() : this.show(void 0, t); }
    _isTooltipVisible() { return !!this._tooltipInstance && this._tooltipInstance.isVisible(); }
    _createOverlay(t) { if (this._overlayRef) {
        let r = this._overlayRef.getConfig().positionStrategy;
        if ((!this.positionAtOrigin || !t) && r._origin instanceof b)
            return this._overlayRef;
        this._detach();
    } let i = this._injector.get(et).getAncestorScrollContainers(this._elementRef), o = `${this._cssClassPrefix}-${L}`, n = it(this._injector, this.positionAtOrigin ? t || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i); return n.positionChanges.pipe(c(this._destroyed)).subscribe(r => { this._updateCurrentPositionClass(r.connectionPair), this._tooltipInstance && r.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible() && this._ngZone.run(() => this.hide(0)); }), this._overlayRef = ot(this._injector, { direction: this._dir, positionStrategy: n, panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, o] : o, scrollStrategy: this._injector.get(F)(), disableAnimations: this._animationsDisabled }), this._updatePosition(this._overlayRef), this._overlayRef.detachments().pipe(c(this._destroyed)).subscribe(() => this._detach()), this._overlayRef.outsidePointerEvents().pipe(c(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction()), this._overlayRef.keydownEvents().pipe(c(this._destroyed)).subscribe(r => { this._isTooltipVisible() && r.keyCode === j && !H(r) && (r.preventDefault(), r.stopPropagation(), this._ngZone.run(() => this.hide(0))); }), this._defaultOptions?.disableTooltipInteractivity && this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`), this._dirSubscribed || (this._dirSubscribed = !0, this._dir.change.pipe(c(this._destroyed)).subscribe(() => { this._overlayRef && this._updatePosition(this._overlayRef); })), this._overlayRef; }
    _detach() { this._overlayRef && this._overlayRef.hasAttached() && this._overlayRef.detach(), this._tooltipInstance = null; }
    _updatePosition(t) { let i = t.getConfig().positionStrategy, o = this._getOrigin(), n = this._getOverlayPosition(); i.withPositions([this._addOffset(h(h({}, o.main), n.main)), this._addOffset(h(h({}, o.fallback), n.fallback))]); }
    _addOffset(t) { let i = dt, o = !this._dir || this._dir.value == "ltr"; return t.originY === "top" ? t.offsetY = -i : t.originY === "bottom" ? t.offsetY = i : t.originX === "start" ? t.offsetX = o ? -i : i : t.originX === "end" && (t.offsetX = o ? i : -i), t; }
    _getOrigin() { let t = !this._dir || this._dir.value == "ltr", i = this.position, o; i == "above" || i == "below" ? o = { originX: "center", originY: i == "above" ? "top" : "bottom" } : i == "before" || i == "left" && t || i == "right" && !t ? o = { originX: "start", originY: "center" } : (i == "after" || i == "right" && t || i == "left" && !t) && (o = { originX: "end", originY: "center" }); let { x: n, y: r } = this._invertPosition(o.originX, o.originY); return { main: o, fallback: { originX: n, originY: r } }; }
    _getOverlayPosition() { let t = !this._dir || this._dir.value == "ltr", i = this.position, o; i == "above" ? o = { overlayX: "center", overlayY: "bottom" } : i == "below" ? o = { overlayX: "center", overlayY: "top" } : i == "before" || i == "left" && t || i == "right" && !t ? o = { overlayX: "end", overlayY: "center" } : (i == "after" || i == "right" && t || i == "left" && !t) && (o = { overlayX: "start", overlayY: "center" }); let { x: n, y: r } = this._invertPosition(o.overlayX, o.overlayY); return { main: o, fallback: { overlayX: n, overlayY: r } }; }
    _updateTooltipMessage() { this._tooltipInstance && (this._tooltipInstance.message = this.message, this._tooltipInstance._markForCheck(), M(() => { this._tooltipInstance && this._overlayRef.updatePosition(); }, { injector: this._injector })); }
    _setTooltipClass(t) { this._tooltipInstance && (this._tooltipInstance.tooltipClass = t, this._tooltipInstance._markForCheck()); }
    _invertPosition(t, i) { return this.position === "above" || this.position === "below" ? i === "top" ? i = "bottom" : i === "bottom" && (i = "top") : t === "end" ? t = "start" : t === "start" && (t = "end"), { x: t, y: i }; }
    _updateCurrentPositionClass(t) { let { overlayY: i, originX: o, originY: n } = t, r; if (i === "center" ? this._dir && this._dir.value === "rtl" ? r = o === "end" ? "left" : "right" : r = o === "start" ? "left" : "right" : r = i === "bottom" && n === "top" ? "above" : "below", r !== this._currentPosition) {
        let d = this._overlayRef;
        if (d) {
            let P = `${this._cssClassPrefix}-${L}-`;
            d.removePanelClass(P + this._currentPosition), d.addPanelClass(P + r);
        }
        this._currentPosition = r;
    } }
    _setupPointerEnterEventsIfNeeded() { this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length || (this._platformSupportsMouseEvents() ? this._passiveListeners.push(["mouseenter", t => { this._setupPointerExitEventsIfNeeded(); let i; t.x !== void 0 && t.y !== void 0 && (i = t), this.show(void 0, i); }]) : this.touchGestures !== "off" && (this._disableNativeGesturesIfNecessary(), this._passiveListeners.push(["touchstart", t => { let i = t.targetTouches?.[0], o = i ? { x: i.clientX, y: i.clientY } : void 0; this._setupPointerExitEventsIfNeeded(), this._touchstartTimeout && clearTimeout(this._touchstartTimeout); let n = 500; this._touchstartTimeout = setTimeout(() => { this._touchstartTimeout = null, this.show(void 0, o); }, this._defaultOptions?.touchLongPressShowDelay ?? n); }])), this._addListeners(this._passiveListeners)); }
    _setupPointerExitEventsIfNeeded() { if (this._pointerExitEventsInitialized)
        return; this._pointerExitEventsInitialized = !0; let t = []; if (this._platformSupportsMouseEvents())
        t.push(["mouseleave", i => { let o = i.relatedTarget; (!o || !this._overlayRef?.overlayElement.contains(o)) && this.hide(); }], ["wheel", i => this._wheelListener(i)]);
    else if (this.touchGestures !== "off") {
        this._disableNativeGesturesIfNecessary();
        let i = () => { this._touchstartTimeout && clearTimeout(this._touchstartTimeout), this.hide(this._defaultOptions?.touchendHideDelay); };
        t.push(["touchend", i], ["touchcancel", i]);
    } this._addListeners(t), this._passiveListeners.push(...t); }
    _addListeners(t) { t.forEach(([i, o]) => { this._elementRef.nativeElement.addEventListener(i, o, E); }); }
    _platformSupportsMouseEvents() { return !this._platform.IOS && !this._platform.ANDROID; }
    _wheelListener(t) { if (this._isTooltipVisible()) {
        let i = this._injector.get($).elementFromPoint(t.clientX, t.clientY), o = this._elementRef.nativeElement;
        i !== o && !o.contains(i) && this.hide();
    } }
    _disableNativeGesturesIfNecessary() { let t = this.touchGestures; if (t !== "off") {
        let i = this._elementRef.nativeElement, o = i.style;
        (t === "on" || i.nodeName !== "INPUT" && i.nodeName !== "TEXTAREA") && (o.userSelect = o.msUserSelect = o.webkitUserSelect = o.MozUserSelect = "none"), (t === "on" || !i.draggable) && (o.webkitUserDrag = "none"), o.touchAction = "none", o.webkitTapHighlightColor = "transparent";
    } }
    _syncAriaDescription(t) { this._ariaDescriptionPending || (this._ariaDescriptionPending = !0, this._ariaDescriber.removeDescription(this._elementRef.nativeElement, t, "tooltip"), this._isDestroyed || M({ write: () => { this._ariaDescriptionPending = !1, this.message && !this.disabled && this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip"); } }, { injector: this._injector })); }
    static \u0275fac = function (i) { return new (i || a); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: a, selectors: [["", "matTooltip", ""]], hostAttrs: [1, "mat-mdc-tooltip-trigger"], hostVars: 2, hostBindings: function (i, o) { i & 2 && s.\u0275\u0275classProp("mat-mdc-tooltip-disabled", o.disabled); }, inputs: { position: [0, "matTooltipPosition", "position"], positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"], disabled: [0, "matTooltipDisabled", "disabled"], showDelay: [0, "matTooltipShowDelay", "showDelay"], hideDelay: [0, "matTooltipHideDelay", "hideDelay"], touchGestures: [0, "matTooltipTouchGestures", "touchGestures"], message: [0, "matTooltip", "message"], tooltipClass: [0, "matTooltipClass", "tooltipClass"] }, exportAs: ["matTooltip"] });
} return a; })(), mt = (() => {
    class a {
        _changeDetectorRef = l(Z);
        _elementRef = l(b);
        _isMultiline = !1;
        message;
        tooltipClass;
        _showTimeoutId;
        _hideTimeoutId;
        _triggerElement;
        _mouseLeaveHideDelay;
        _animationsDisabled = f();
        _tooltip;
        _closeOnInteraction = !1;
        _isVisible = !1;
        _onHide = new k;
        _showAnimation = "mat-mdc-tooltip-show";
        _hideAnimation = "mat-mdc-tooltip-hide";
        constructor() { }
        show(t) { this._hideTimeoutId != null && clearTimeout(this._hideTimeoutId), this._showTimeoutId = setTimeout(() => { this._toggleVisibility(!0), this._showTimeoutId = void 0; }, t); }
        hide(t) { this._showTimeoutId != null && clearTimeout(this._showTimeoutId), this._hideTimeoutId = setTimeout(() => { this._toggleVisibility(!1), this._hideTimeoutId = void 0; }, t); }
        afterHidden() { return this._onHide; }
        isVisible() { return this._isVisible; }
        ngOnDestroy() { this._cancelPendingAnimations(), this._onHide.complete(), this._triggerElement = null; }
        _handleBodyInteraction() { this._closeOnInteraction && this.hide(0); }
        _markForCheck() { this._changeDetectorRef.markForCheck(); }
        _handleMouseLeave({ relatedTarget: t }) { (!t || !this._triggerElement.contains(t)) && (this.isVisible() ? this.hide(this._mouseLeaveHideDelay) : this._finalizeAnimation(!1)); }
        _onShow() { this._isMultiline = this._isTooltipMultiline(), this._markForCheck(); }
        _isTooltipMultiline() { let t = this._elementRef.nativeElement.getBoundingClientRect(); return t.height > ct && t.width >= ht; }
        _handleAnimationEnd({ animationName: t }) { (t === this._showAnimation || t === this._hideAnimation) && this._finalizeAnimation(t === this._showAnimation); }
        _cancelPendingAnimations() { this._showTimeoutId != null && clearTimeout(this._showTimeoutId), this._hideTimeoutId != null && clearTimeout(this._hideTimeoutId), this._showTimeoutId = this._hideTimeoutId = void 0; }
        _finalizeAnimation(t) { t ? this._closeOnInteraction = !0 : this.isVisible() || this._onHide.next(); }
        _toggleVisibility(t) { let i = this._tooltip.nativeElement, o = this._showAnimation, n = this._hideAnimation; if (i.classList.remove(t ? n : o), i.classList.add(t ? o : n), this._isVisible !== t && (this._isVisible = t, this._changeDetectorRef.markForCheck()), t && !this._animationsDisabled && typeof getComputedStyle == "function") {
            let r = getComputedStyle(i);
            (r.getPropertyValue("animation-duration") === "0s" || r.getPropertyValue("animation-name") === "none") && (this._animationsDisabled = !0);
        } t && this._onShow(), this._animationsDisabled && (i.classList.add("_mat-animation-noopable"), this._finalizeAnimation(t)); }
        static \u0275fac = function (i) { return new (i || a); };
        static \u0275cmp = s.\u0275\u0275defineComponent({ type: a, selectors: [["mat-tooltip-component"]], viewQuery: function (i, o) { if (i & 1 && s.\u0275\u0275viewQuery(nt, 7), i & 2) {
                let n;
                s.\u0275\u0275queryRefresh(n = s.\u0275\u0275loadQuery()) && (o._tooltip = n.first);
            } }, hostAttrs: ["aria-hidden", "true"], hostBindings: function (i, o) { i & 1 && s.\u0275\u0275listener("mouseleave", function (r) { return o._handleMouseLeave(r); }); }, decls: 4, vars: 4, consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]], template: function (i, o) { if (i & 1) {
                let n = s.\u0275\u0275getCurrentView();
                s.\u0275\u0275elementStart(0, "div", 1, 0), s.\u0275\u0275listener("animationend", function (d) { return s.\u0275\u0275restoreView(n), s.\u0275\u0275resetView(o._handleAnimationEnd(d)); }), s.\u0275\u0275elementStart(2, "div", 2), s.\u0275\u0275text(3), s.\u0275\u0275elementEnd()();
            } i & 2 && (s.\u0275\u0275classProp("mdc-tooltip--multiline", o._isMultiline), s.\u0275\u0275property("ngClass", o.tooltipClass), s.\u0275\u0275advance(3), s.\u0275\u0275textInterpolate(o.message)); }, dependencies: [Q], styles: [`.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}
`], encapsulation: 2, changeDetection: 0 });
    }
    return a;
})();
import * as m from "@angular/core";
import "@angular/core";
import { A11yModule as _t } from "@angular/cdk/a11y";
import { OverlayModule as gt } from "@angular/cdk/overlay";
import { CdkScrollableModule as ut } from "@angular/cdk/scrolling";
var G = (() => { class a {
    static \u0275fac = function (i) { return new (i || a); };
    static \u0275mod = m.\u0275\u0275defineNgModule({ type: a });
    static \u0275inj = m.\u0275\u0275defineInjector({ providers: [B], imports: [_t, gt, v, v, ut] });
} return a; })();
import "@angular/cdk/bidi";
import "@angular/cdk/coercion";
import "@angular/cdk/platform";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
import "@angular/cdk/layout";
import "@angular/cdk/overlay";
import "@angular/cdk/scrolling";
import "@angular/cdk/collections";
import "@angular/cdk/keycodes";
import "@angular/forms";
import "@angular/cdk/private";
import "@angular/cdk/observers";
import "@angular/cdk/portal";
function Ct(a, p) { if (a & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 17), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), a & 2) {
    let t = p.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t, " ");
} }
function wt(a, p) { if (a & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 16, 0), e.\u0275\u0275listener("selectionChange", function (o) { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(n._changePageSize(o.value)); }), e.\u0275\u0275repeaterCreate(3, Ct, 2, 2, "mat-option", 17, e.\u0275\u0275repeaterTrackByIdentity), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "div", 18), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275reference(2); return e.\u0275\u0275resetView(o.open()); }), e.\u0275\u0275elementEnd()();
} if (a & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("appearance", t._formFieldAppearance)("color", t.color), e.\u0275\u0275advance(), e.\u0275\u0275property("value", t.pageSize)("disabled", t.disabled), e.\u0275\u0275ariaProperty("aria-labelledby", t._pageSizeLabelId), e.\u0275\u0275property("panelClass", t.selectConfig.panelClass || "")("disableOptionCentering", t.selectConfig.disableOptionCentering), e.\u0275\u0275advance(2), e.\u0275\u0275repeater(t._displayedPageSizeOptions);
} }
function Dt(a, p) { if (a & 1 && (e.\u0275\u0275elementStart(0, "div", 15), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), a & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.pageSize);
} }
function St(a, p) { if (a & 1 && (e.\u0275\u0275elementStart(0, "div", 3)(1, "div", 13), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd(), e.\u0275\u0275conditionalCreate(3, wt, 6, 7, "mat-form-field", 14), e.\u0275\u0275conditionalCreate(4, Dt, 2, 1, "div", 15), e.\u0275\u0275elementEnd()), a & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275attribute("id", t._pageSizeLabelId), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t._intl.itemsPerPageLabel, " "), e.\u0275\u0275advance(), e.\u0275\u0275conditional(t._displayedPageSizeOptions.length > 1 ? 3 : -1), e.\u0275\u0275advance(), e.\u0275\u0275conditional(t._displayedPageSizeOptions.length <= 1 ? 4 : -1);
} }
function Ot(a, p) { if (a & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 19), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(o._buttonClicked(0, o._previousButtonsDisabled())); }), e.\u0275\u0275namespaceSVG(), e.\u0275\u0275elementStart(1, "svg", 8), e.\u0275\u0275element(2, "path", 20), e.\u0275\u0275elementEnd()();
} if (a & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("matTooltip", t._intl.firstPageLabel)("matTooltipDisabled", t._previousButtonsDisabled())("disabled", t._previousButtonsDisabled())("tabindex", t._previousButtonsDisabled() ? -1 : null), e.\u0275\u0275attribute("aria-label", t._intl.firstPageLabel);
} }
function zt(a, p) { if (a & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(o._buttonClicked(o.getNumberOfPages() - 1, o._nextButtonsDisabled())); }), e.\u0275\u0275namespaceSVG(), e.\u0275\u0275elementStart(1, "svg", 8), e.\u0275\u0275element(2, "path", 22), e.\u0275\u0275elementEnd()();
} if (a & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("matTooltip", t._intl.lastPageLabel)("matTooltipDisabled", t._nextButtonsDisabled())("disabled", t._nextButtonsDisabled())("tabindex", t._nextButtonsDisabled() ? -1 : null), e.\u0275\u0275attribute("aria-label", t._intl.lastPageLabel);
} }
var u = (() => { class a {
    changes = new Pt;
    itemsPerPageLabel = "Items per page:";
    nextPageLabel = "Next page";
    previousPageLabel = "Previous page";
    firstPageLabel = "First page";
    lastPageLabel = "Last page";
    getRangeLabel = (t, i, o) => { if (o == 0 || i == 0)
        return `0 of ${o}`; o = Math.max(o, 0); let n = t * i, r = n < o ? Math.min(n + i, o) : n + i; return `${n + 1} \u2013 ${r} of ${o}`; };
    static \u0275fac = function (i) { return new (i || a); };
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac, providedIn: "root" });
} return a; })();
function Mt(a) { return a || new u; }
var Lt = { provide: u, deps: [[new ft, new vt, u]], useFactory: Mt }, Et = 50, Y = class {
    pageIndex;
    previousPageIndex;
    pageSize;
    length;
}, At = new bt("MAT_PAGINATOR_DEFAULT_OPTIONS"), Rt = (() => {
    class a {
        _intl = _(u);
        _changeDetectorRef = _(yt);
        _formFieldAppearance;
        _pageSizeLabelId = _(xt).getId("mat-paginator-page-size-label-");
        _intlChanges;
        _isInitialized = !1;
        _initializedStream = new It(1);
        color;
        get pageIndex() { return this._pageIndex; }
        set pageIndex(t) { this._pageIndex = Math.max(t || 0, 0), this._changeDetectorRef.markForCheck(); }
        _pageIndex = 0;
        get length() { return this._length; }
        set length(t) { this._length = t || 0, this._changeDetectorRef.markForCheck(); }
        _length = 0;
        get pageSize() { return this._pageSize; }
        set pageSize(t) { this._pageSize = Math.max(t || 0, 0), this._updateDisplayedPageSizeOptions(); }
        _pageSize;
        get pageSizeOptions() { return this._pageSizeOptions; }
        set pageSizeOptions(t) { this._pageSizeOptions = (t || []).map(i => g(i, 0)), this._updateDisplayedPageSizeOptions(); }
        _pageSizeOptions = [];
        hidePageSize = !1;
        showFirstLastButtons = !1;
        selectConfig = {};
        disabled = !1;
        page = new Tt;
        _displayedPageSizeOptions;
        initialized = this._initializedStream;
        constructor() { let t = this._intl, i = _(At, { optional: !0 }); if (this._intlChanges = t.changes.subscribe(() => this._changeDetectorRef.markForCheck()), i) {
            let { pageSize: o, pageSizeOptions: n, hidePageSize: r, showFirstLastButtons: d } = i;
            o != null && (this._pageSize = o), n != null && (this._pageSizeOptions = n), r != null && (this.hidePageSize = r), d != null && (this.showFirstLastButtons = d);
        } this._formFieldAppearance = i?.formFieldAppearance || "outline"; }
        ngOnInit() { this._isInitialized = !0, this._updateDisplayedPageSizeOptions(), this._initializedStream.next(); }
        ngOnDestroy() { this._initializedStream.complete(), this._intlChanges.unsubscribe(); }
        nextPage() { this.hasNextPage() && this._navigate(this.pageIndex + 1); }
        previousPage() { this.hasPreviousPage() && this._navigate(this.pageIndex - 1); }
        firstPage() { this.hasPreviousPage() && this._navigate(0); }
        lastPage() { this.hasNextPage() && this._navigate(this.getNumberOfPages() - 1); }
        hasPreviousPage() { return this.pageIndex >= 1 && this.pageSize != 0; }
        hasNextPage() { let t = this.getNumberOfPages() - 1; return this.pageIndex < t && this.pageSize != 0; }
        getNumberOfPages() { return this.pageSize ? Math.ceil(this.length / this.pageSize) : 0; }
        _changePageSize(t) { let i = this.pageIndex * this.pageSize, o = this.pageIndex; this.pageIndex = Math.floor(i / t) || 0, this.pageSize = t, this._emitPageEvent(o); }
        _nextButtonsDisabled() { return this.disabled || !this.hasNextPage(); }
        _previousButtonsDisabled() { return this.disabled || !this.hasPreviousPage(); }
        _updateDisplayedPageSizeOptions() { this._isInitialized && (this.pageSize || (this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : Et), this._displayedPageSizeOptions = this.pageSizeOptions.slice(), this._displayedPageSizeOptions.indexOf(this.pageSize) === -1 && this._displayedPageSizeOptions.push(this.pageSize), this._displayedPageSizeOptions.sort((t, i) => t - i), this._changeDetectorRef.markForCheck()); }
        _emitPageEvent(t) { this.page.emit({ previousPageIndex: t, pageIndex: this.pageIndex, pageSize: this.pageSize, length: this.length }); }
        _navigate(t) { let i = this.pageIndex; t !== i && (this.pageIndex = t, this._emitPageEvent(i)); }
        _buttonClicked(t, i) { i || this._navigate(t); }
        static \u0275fac = function (i) { return new (i || a); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: a, selectors: [["mat-paginator"]], hostAttrs: ["role", "group", 1, "mat-mdc-paginator"], inputs: { color: "color", pageIndex: [2, "pageIndex", "pageIndex", g], length: [2, "length", "length", g], pageSize: [2, "pageSize", "pageSize", g], pageSizeOptions: "pageSizeOptions", hidePageSize: [2, "hidePageSize", "hidePageSize", T], showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", T], selectConfig: "selectConfig", disabled: [2, "disabled", "disabled", T] }, outputs: { page: "page" }, exportAs: ["matPaginator"], decls: 14, vars: 14, consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2), e.\u0275\u0275conditionalCreate(2, St, 5, 4, "div", 3), e.\u0275\u0275elementStart(3, "div", 4)(4, "div", 5), e.\u0275\u0275text(5), e.\u0275\u0275elementEnd(), e.\u0275\u0275conditionalCreate(6, Ot, 3, 5, "button", 6), e.\u0275\u0275elementStart(7, "button", 7), e.\u0275\u0275listener("click", function () { return o._buttonClicked(o.pageIndex - 1, o._previousButtonsDisabled()); }), e.\u0275\u0275namespaceSVG(), e.\u0275\u0275elementStart(8, "svg", 8), e.\u0275\u0275element(9, "path", 9), e.\u0275\u0275elementEnd()(), e.\u0275\u0275namespaceHTML(), e.\u0275\u0275elementStart(10, "button", 10), e.\u0275\u0275listener("click", function () { return o._buttonClicked(o.pageIndex + 1, o._nextButtonsDisabled()); }), e.\u0275\u0275namespaceSVG(), e.\u0275\u0275elementStart(11, "svg", 8), e.\u0275\u0275element(12, "path", 11), e.\u0275\u0275elementEnd()(), e.\u0275\u0275conditionalCreate(13, zt, 3, 5, "button", 12), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275conditional(o.hidePageSize ? -1 : 2), e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate1(" ", o._intl.getRangeLabel(o.pageIndex, o.pageSize, o.length), " "), e.\u0275\u0275advance(), e.\u0275\u0275conditional(o.showFirstLastButtons ? 6 : -1), e.\u0275\u0275advance(), e.\u0275\u0275property("matTooltip", o._intl.previousPageLabel)("matTooltipDisabled", o._previousButtonsDisabled())("disabled", o._previousButtonsDisabled())("tabindex", o._previousButtonsDisabled() ? -1 : null), e.\u0275\u0275attribute("aria-label", o._intl.previousPageLabel), e.\u0275\u0275advance(3), e.\u0275\u0275property("matTooltip", o._intl.nextPageLabel)("matTooltipDisabled", o._nextButtonsDisabled())("disabled", o._nextButtonsDisabled())("tabindex", o._nextButtonsDisabled() ? -1 : null), e.\u0275\u0275attribute("aria-label", o._intl.nextPageLabel), e.\u0275\u0275advance(3), e.\u0275\u0275conditional(o.showFirstLastButtons ? 13 : -1)); }, dependencies: [w, D, C, I, V], styles: [`.mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:var(--mat-paginator-page-size-select-width, 84px)}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:var(--mat-paginator-page-size-select-width, 84px);height:var(--mat-paginator-page-size-select-touch-target-height, 48px);background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}
`], encapsulation: 2, changeDetection: 0 });
    }
    return a;
})(), He = (() => { class a {
    static \u0275fac = function (i) { return new (i || a); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: a });
    static \u0275inj = e.\u0275\u0275defineInjector({ providers: [Lt], imports: [x, S, G, Rt] });
} return a; })();
export { At as MAT_PAGINATOR_DEFAULT_OPTIONS, Lt as MAT_PAGINATOR_INTL_PROVIDER, Mt as MAT_PAGINATOR_INTL_PROVIDER_FACTORY, Rt as MatPaginator, u as MatPaginatorIntl, He as MatPaginatorModule, Y as PageEvent };
