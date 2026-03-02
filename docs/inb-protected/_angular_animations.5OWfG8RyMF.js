import "@nf-internal/chunk-4CLCTAJ7";
import * as o from "@angular/core";
import { inject as y, ANIMATION_MODULE_TYPE as x, \u0275RuntimeError as q, DOCUMENT as j, ViewEncapsulation as T } from "@angular/core";
var i = (function (e) { return e[e.State = 0] = "State", e[e.Transition = 1] = "Transition", e[e.Sequence = 2] = "Sequence", e[e.Group = 3] = "Group", e[e.Animate = 4] = "Animate", e[e.Keyframes = 5] = "Keyframes", e[e.Style = 6] = "Style", e[e.Trigger = 7] = "Trigger", e[e.Reference = 8] = "Reference", e[e.AnimateChild = 9] = "AnimateChild", e[e.AnimateRef = 10] = "AnimateRef", e[e.Query = 11] = "Query", e[e.Stagger = 12] = "Stagger", e; })(i || {}), g = "*";
function D(e, t) { return { type: i.Trigger, name: e, definitions: t, options: {} }; }
function S(e, t = null) { return { type: i.Animate, styles: t, timings: e }; }
function F(e, t = null) { return { type: i.Group, steps: e, options: t }; }
function d(e, t = null) { return { type: i.Sequence, steps: e, options: t }; }
function E(e) { return { type: i.Style, styles: e, offset: null }; }
function P(e, t, s) { return { type: i.State, name: e, styles: t, options: s }; }
function v(e) { return { type: i.Keyframes, steps: e }; }
function b(e, t, s = null) { return { type: i.Transition, expr: e, animation: t, options: s }; }
function R(e, t = null) { return { type: i.Reference, animation: e, options: t }; }
function I(e = null) { return { type: i.AnimateChild, options: e }; }
function w(e, t = null) { return { type: i.AnimateRef, animation: e, options: t }; }
function C(e, t, s = null) { return { type: i.Query, selector: e, animation: t, options: s }; }
function k(e, t) { return { type: i.Stagger, timings: e, animation: t }; }
var l = class {
    _onDoneFns = [];
    _onStartFns = [];
    _onDestroyFns = [];
    _originalOnDoneFns = [];
    _originalOnStartFns = [];
    _started = !1;
    _destroyed = !1;
    _finished = !1;
    _position = 0;
    parentPlayer = null;
    totalTime;
    constructor(t = 0, s = 0) { this.totalTime = t + s; }
    _onFinish() { this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = []); }
    onStart(t) { this._originalOnStartFns.push(t), this._onStartFns.push(t); }
    onDone(t) { this._originalOnDoneFns.push(t), this._onDoneFns.push(t); }
    onDestroy(t) { this._onDestroyFns.push(t); }
    hasStarted() { return this._started; }
    init() { }
    play() { this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0; }
    triggerMicrotask() { queueMicrotask(() => this._onFinish()); }
    _onStart() { this._onStartFns.forEach(t => t()), this._onStartFns = []; }
    pause() { }
    restart() { }
    finish() { this._onFinish(); }
    destroy() { this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = []); }
    reset() { this._started = !1, this._finished = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns; }
    setPosition(t) { this._position = this.totalTime ? t * this.totalTime : 1; }
    getPosition() { return this.totalTime ? this._position / this.totalTime : 1; }
    triggerCallback(t) { let s = t == "start" ? this._onStartFns : this._onDoneFns; s.forEach(n => n()), s.length = 0; }
}, u = class {
    _onDoneFns = [];
    _onStartFns = [];
    _finished = !1;
    _started = !1;
    _destroyed = !1;
    _onDestroyFns = [];
    parentPlayer = null;
    totalTime = 0;
    players;
    constructor(t) { this.players = t; let s = 0, n = 0, r = 0, a = this.players.length; a == 0 ? queueMicrotask(() => this._onFinish()) : this.players.forEach(h => { h.onDone(() => { ++s == a && this._onFinish(); }), h.onDestroy(() => { ++n == a && this._onDestroy(); }), h.onStart(() => { ++r == a && this._onStart(); }); }), this.totalTime = this.players.reduce((h, p) => Math.max(h, p.totalTime), 0); }
    _onFinish() { this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = []); }
    init() { this.players.forEach(t => t.init()); }
    onStart(t) { this._onStartFns.push(t); }
    _onStart() { this.hasStarted() || (this._started = !0, this._onStartFns.forEach(t => t()), this._onStartFns = []); }
    onDone(t) { this._onDoneFns.push(t); }
    onDestroy(t) { this._onDestroyFns.push(t); }
    hasStarted() { return this._started; }
    play() { this.parentPlayer || this.init(), this._onStart(), this.players.forEach(t => t.play()); }
    pause() { this.players.forEach(t => t.pause()); }
    restart() { this.players.forEach(t => t.restart()); }
    finish() { this._onFinish(), this.players.forEach(t => t.finish()); }
    destroy() { this._onDestroy(); }
    _onDestroy() { this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(t => t.destroy()), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = []); }
    reset() { this.players.forEach(t => t.reset()), this._destroyed = !1, this._finished = !1, this._started = !1; }
    setPosition(t) { let s = t * this.totalTime; this.players.forEach(n => { let r = n.totalTime ? Math.min(1, s / n.totalTime) : 1; n.setPosition(r); }); }
    getPosition() { let t = this.players.reduce((s, n) => s === null || n.totalTime > s.totalTime ? n : s, null); return t != null ? t.getPosition() : 0; }
    beforeDestroy() { this.players.forEach(t => { t.beforeDestroy && t.beforeDestroy(); }); }
    triggerCallback(t) { let s = t == "start" ? this._onStartFns : this._onDoneFns; s.forEach(n => n()), s.length = 0; }
}, O = "!";
var L = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: e, factory: () => y(A), providedIn: "root" });
} return e; })(), c = class {
}, A = (() => { class e extends L {
    animationModuleType = y(x, { optional: !0 });
    _nextAnimationId = 0;
    _renderer;
    constructor(s, n) { super(); let r = { id: "0", encapsulation: T.None, styles: [], data: { animation: [] } }; if (this._renderer = s.createRenderer(n.body, r), this.animationModuleType === null && !G(this._renderer))
        throw new q(3600, !1); }
    build(s) { let n = this._nextAnimationId; this._nextAnimationId++; let r = Array.isArray(s) ? d(s) : s; return m(this._renderer, null, n, "register", [r]), new _(n, this._renderer); }
    static \u0275fac = function (n) { return new (n || e)(o.\u0275\u0275inject(o.RendererFactory2), o.\u0275\u0275inject(j)); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), _ = class extends c {
    _id;
    _renderer;
    constructor(t, s) { super(), this._id = t, this._renderer = s; }
    create(t, s) { return new f(this._id, t, s || {}, this._renderer); }
}, f = class {
    id;
    element;
    _renderer;
    parentPlayer = null;
    _started = !1;
    constructor(t, s, n, r) { this.id = t, this.element = s, this._renderer = r, this._command("create", n); }
    _listen(t, s) { return this._renderer.listen(this.element, `@@${this.id}:${t}`, s); }
    _command(t, ...s) { m(this._renderer, this.element, this.id, t, s); }
    onDone(t) { this._listen("done", t); }
    onStart(t) { this._listen("start", t); }
    onDestroy(t) { this._listen("destroy", t); }
    init() { this._command("init"); }
    hasStarted() { return this._started; }
    play() { this._command("play"), this._started = !0; }
    pause() { this._command("pause"); }
    restart() { this._command("restart"); }
    finish() { this._command("finish"); }
    destroy() { this._command("destroy"); }
    reset() { this._command("reset"), this._started = !1; }
    setPosition(t) { this._command("setPosition", t); }
    getPosition() { return Y(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0; }
    totalTime = 0;
};
function m(e, t, s, n, r) { e.setProperty(t, `@@${s}:${n}`, r); }
function Y(e) { let t = e.\u0275type; return t === 0 ? e : t === 1 ? e.animationRenderer : null; }
function G(e) { let t = e.\u0275type; return t === 0 || t === 1; }
export { g as AUTO_STYLE, L as AnimationBuilder, c as AnimationFactory, i as AnimationMetadataType, l as NoopAnimationPlayer, S as animate, I as animateChild, R as animation, F as group, v as keyframes, C as query, d as sequence, k as stagger, P as state, E as style, b as transition, D as trigger, w as useAnimation, u as \u0275AnimationGroupPlayer, A as \u0275BrowserAnimationBuilder, O as \u0275PRE_STYLE };
/*! Bundled license information:

@angular/animations/fesm2022/private_export.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.3.17
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
