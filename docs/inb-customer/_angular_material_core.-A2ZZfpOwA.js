import { a as U, b as Z, c as G, d as V, e as z, f as B, g as X, h as K } from "@nf-internal/chunk-5G3HYSSR";
import { a as Y } from "@nf-internal/chunk-TFY62ZWJ";
import { a as m, b as $, c, d as D } from "@nf-internal/chunk-3SCFRELA";
import { a as P, b as W, c as j } from "@nf-internal/chunk-ZTVVMKVB";
import { a as k, b as H } from "@nf-internal/chunk-J363IQZ4";
import { a as F } from "@nf-internal/chunk-RZUIIRCN";
import { a as x } from "@nf-internal/chunk-4UKDDKDA";
import { a as O, b as E, c as L, d as N, e as C, f as S } from "@nf-internal/chunk-QXEBE6MH";
import { a as R } from "@nf-internal/chunk-4MZRILT7";
import { a as v, b as T, c as _, d as I, e as A } from "@nf-internal/chunk-5KSFOI5Q";
import { a as b, b as d } from "@nf-internal/chunk-RXMLTE5A";
import { a as g, b as M } from "@nf-internal/chunk-4CLCTAJ7";
import * as s from "@angular/core";
import { Version as te, inject as y } from "@angular/core";
import * as u from "@angular/core";
import "@angular/core";
import { startWith as q } from "rxjs/operators";
var J = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275dir = u.\u0275\u0275defineDirective({ type: r, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
} return r; })();
function Q(r, i, e = "mat") { r.changes.pipe(q(r)).subscribe(({ length: t }) => { l(i, `${e}-2-line`, !1), l(i, `${e}-3-line`, !1), l(i, `${e}-multi-line`, !1), t === 2 || t === 3 ? l(i, `${e}-${t}-line`, !0) : t > 3 && l(i, `${e}-multi-line`, !0); }); }
function l(r, i, e) { r.nativeElement.classList.toggle(i, e); }
var ee = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = u.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = u.\u0275\u0275defineInjector({ imports: [d, d] });
} return r; })();
import "@angular/cdk/layout";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
import "rxjs";
import "rxjs/operators";
import "@angular/cdk/keycodes";
import "@angular/cdk/private";
import "@angular/cdk/platform";
import "@angular/cdk/coercion";
var Ae = new te("20.2.14"), re = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/, ne = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function f(r, i) { let e = Array(r); for (let t = 0; t < r; t++)
    e[t] = i(t); return e; }
var w = (() => { class r extends c {
    useUtcForDisplay = !1;
    _matDateLocale = y(m, { optional: !0 });
    constructor() { super(); let e = y(m, { optional: !0 }); e !== void 0 && (this._matDateLocale = e), super.setLocale(this._matDateLocale); }
    getYear(e) { return e.getFullYear(); }
    getMonth(e) { return e.getMonth(); }
    getDate(e) { return e.getDate(); }
    getDayOfWeek(e) { return e.getDay(); }
    getMonthNames(e) { let t = new Intl.DateTimeFormat(this.locale, { month: e, timeZone: "utc" }); return f(12, n => this._format(t, new Date(2017, n, 1))); }
    getDateNames() { let e = new Intl.DateTimeFormat(this.locale, { day: "numeric", timeZone: "utc" }); return f(31, t => this._format(e, new Date(2017, 0, t + 1))); }
    getDayOfWeekNames(e) { let t = new Intl.DateTimeFormat(this.locale, { weekday: e, timeZone: "utc" }); return f(7, n => this._format(t, new Date(2017, 0, n + 1))); }
    getYearName(e) { let t = new Intl.DateTimeFormat(this.locale, { year: "numeric", timeZone: "utc" }); return this._format(t, e); }
    getFirstDayOfWeek() { if (typeof Intl < "u" && Intl.Locale) {
        let e = new Intl.Locale(this.locale), t = (e.getWeekInfo?.() || e.weekInfo)?.firstDay ?? 0;
        return t === 7 ? 0 : t;
    } return 0; }
    getNumDaysInMonth(e) { return this.getDate(this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + 1, 0)); }
    clone(e) { return new Date(e.getTime()); }
    createDate(e, t, n) { let o = this._createDateWithOverflow(e, t, n); return o.getMonth() != t, o; }
    today() { return new Date; }
    parse(e, t) { return typeof e == "number" ? new Date(e) : e ? new Date(Date.parse(e)) : null; }
    format(e, t) { if (!this.isValid(e))
        throw Error("NativeDateAdapter: Cannot format invalid date."); let n = new Intl.DateTimeFormat(this.locale, M(g({}, t), { timeZone: "utc" })); return this._format(n, e); }
    addCalendarYears(e, t) { return this.addCalendarMonths(e, t * 12); }
    addCalendarMonths(e, t) { let n = this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + t, this.getDate(e)); return this.getMonth(n) != ((this.getMonth(e) + t) % 12 + 12) % 12 && (n = this._createDateWithOverflow(this.getYear(n), this.getMonth(n), 0)), n; }
    addCalendarDays(e, t) { return this._createDateWithOverflow(this.getYear(e), this.getMonth(e), this.getDate(e) + t); }
    toIso8601(e) { return [e.getUTCFullYear(), this._2digit(e.getUTCMonth() + 1), this._2digit(e.getUTCDate())].join("-"); }
    deserialize(e) { if (typeof e == "string") {
        if (!e)
            return null;
        if (re.test(e)) {
            let t = new Date(e);
            if (this.isValid(t))
                return t;
        }
    } return super.deserialize(e); }
    isDateInstance(e) { return e instanceof Date; }
    isValid(e) { return !isNaN(e.getTime()); }
    invalid() { return new Date(NaN); }
    setTime(e, t, n, o) { let a = this.clone(e); return a.setHours(t, n, o, 0), a; }
    getHours(e) { return e.getHours(); }
    getMinutes(e) { return e.getMinutes(); }
    getSeconds(e) { return e.getSeconds(); }
    parseTime(e, t) { if (typeof e != "string")
        return e instanceof Date ? new Date(e.getTime()) : null; let n = e.trim(); if (n.length === 0)
        return null; let o = this._parseTimeString(n); if (o === null) {
        let a = n.replace(/[^0-9:(AM|PM)]/gi, "").trim();
        a.length > 0 && (o = this._parseTimeString(a));
    } return o || this.invalid(); }
    addSeconds(e, t) { return new Date(e.getTime() + t * 1e3); }
    _createDateWithOverflow(e, t, n) { let o = new Date; return o.setFullYear(e, t, n), o.setHours(0, 0, 0, 0), o; }
    _2digit(e) { return ("00" + e).slice(-2); }
    _format(e, t) { let n = new Date; return n.setUTCFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n.setUTCHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), e.format(n); }
    _parseTimeString(e) { let t = e.toUpperCase().match(ne); if (t) {
        let n = parseInt(t[1]), o = parseInt(t[2]), a = t[3] == null ? void 0 : parseInt(t[3]), h = t[4];
        if (n === 12 ? n = h === "AM" ? 0 : n : h === "PM" && (n += 12), p(n, 0, 23) && p(o, 0, 59) && (a == null || p(a, 0, 59)))
            return this.setTime(this.today(), n, o, a || 0);
    } return null; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275prov = s.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac });
} return r; })();
function p(r, i, e) { return !isNaN(r) && r >= i && r <= e; }
var oe = { parse: { dateInput: null, timeInput: null }, display: { dateInput: { year: "numeric", month: "numeric", day: "numeric" }, timeInput: { hour: "numeric", minute: "numeric" }, monthYearLabel: { year: "numeric", month: "short" }, dateA11yLabel: { year: "numeric", month: "long", day: "numeric" }, monthYearA11yLabel: { year: "numeric", month: "long" }, timeOptionLabel: { hour: "numeric", minute: "numeric" } } }, Oe = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = s.\u0275\u0275defineInjector({ providers: [{ provide: c, useClass: w }] });
} return r; })(), Ee = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = s.\u0275\u0275defineInjector({ providers: [ie()] });
} return r; })();
function ie(r = oe) { return [{ provide: c, useClass: w }, { provide: D, useValue: r }]; }
export { T as AnimationCurves, _ as AnimationDurations, c as DateAdapter, j as ErrorStateMatcher, v as MATERIAL_ANIMATIONS, b as MATERIAL_SANITY_CHECKS, D as MAT_DATE_FORMATS, m as MAT_DATE_LOCALE, $ as MAT_DATE_LOCALE_FACTORY, oe as MAT_NATIVE_DATE_FORMATS, Z as MAT_OPTGROUP, U as MAT_OPTION_PARENT_COMPONENT, C as MAT_RIPPLE_GLOBAL_OPTIONS, d as MatCommonModule, J as MatLine, ee as MatLineModule, Ee as MatNativeDateModule, G as MatOptgroup, z as MatOption, K as MatOptionModule, V as MatOptionSelectionChange, k as MatPseudoCheckbox, H as MatPseudoCheckboxModule, S as MatRipple, F as MatRippleLoader, x as MatRippleModule, w as NativeDateAdapter, Oe as NativeDateModule, E as RippleRef, N as RippleRenderer, O as RippleState, W as ShowOnDirtyErrorStateMatcher, Ae as VERSION, P as _ErrorStateTracker, Y as _MatInternalFormField, R as _StructuralStylesLoader, A as _animationsDisabled, B as _countGroupLabelsBeforeOption, I as _getAnimationsState, X as _getOptionScrollPosition, L as defaultRippleAnimationConfig, ie as provideNativeDateAdapter, Q as setLines };
