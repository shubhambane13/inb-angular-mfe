import { a as Z, b as G, c as z, d as B, e as X, f as K, g as q, h as J } from "@nf-internal/chunk-HU6JN3N4";
import { a as j, b as k, c as H } from "@nf-internal/chunk-ZTVVMKVB";
import { a as W, b as U } from "@nf-internal/chunk-J363IQZ4";
import { a as P } from "@nf-internal/chunk-NE4GLYAS";
import { a as F, b as S, c as N, d as b, e as x, f as R, g as $ } from "@nf-internal/chunk-QY5KRA7R";
import { a as Y } from "@nf-internal/chunk-4MZRILT7";
import { a as v, b as E, c as O, d as L, e as C } from "@nf-internal/chunk-5KSFOI5Q";
import { a as V, b as f } from "@nf-internal/chunk-RXMLTE5A";
import { a as D, b as w } from "@nf-internal/chunk-4CLCTAJ7";
import * as s from "@angular/core";
import "@angular/core";
var Q = ["mat-internal-form-field", ""], ee = ["*"], te = (() => {
    class r {
        labelPosition;
        static \u0275fac = function (t) { return new (t || r); };
        static \u0275cmp = s.\u0275\u0275defineComponent({ type: r, selectors: [["div", "mat-internal-form-field", ""]], hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"], hostVars: 2, hostBindings: function (t, i) { t & 2 && s.\u0275\u0275classProp("mdc-form-field--align-end", i.labelPosition === "before"); }, inputs: { labelPosition: "labelPosition" }, attrs: Q, ngContentSelectors: ee, decls: 1, vars: 0, template: function (t, i) { t & 1 && (s.\u0275\u0275projectionDef(), s.\u0275\u0275projection(0)); }, styles: [`.mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}
`], encapsulation: 2, changeDetection: 0 });
    }
    return r;
})();
import * as l from "@angular/core";
import { Version as de, inject as A } from "@angular/core";
import { InjectionToken as T, inject as ne, LOCALE_ID as re } from "@angular/core";
import { Subject as ie } from "rxjs";
var h = new T("MAT_DATE_LOCALE", { providedIn: "root", factory: _ });
function _() { return ne(re); }
var d = "Method not implemented", u = class {
    locale;
    _localeChanges = new ie;
    localeChanges = this._localeChanges;
    setTime(n, e, t, i) { throw new Error(d); }
    getHours(n) { throw new Error(d); }
    getMinutes(n) { throw new Error(d); }
    getSeconds(n) { throw new Error(d); }
    parseTime(n, e) { throw new Error(d); }
    addSeconds(n, e) { throw new Error(d); }
    getValidDateOrNull(n) { return this.isDateInstance(n) && this.isValid(n) ? n : null; }
    deserialize(n) { return n == null || this.isDateInstance(n) && this.isValid(n) ? n : this.invalid(); }
    setLocale(n) { this.locale = n, this._localeChanges.next(); }
    compareDate(n, e) { return this.getYear(n) - this.getYear(e) || this.getMonth(n) - this.getMonth(e) || this.getDate(n) - this.getDate(e); }
    compareTime(n, e) { return this.getHours(n) - this.getHours(e) || this.getMinutes(n) - this.getMinutes(e) || this.getSeconds(n) - this.getSeconds(e); }
    sameDate(n, e) { if (n && e) {
        let t = this.isValid(n), i = this.isValid(e);
        return t && i ? !this.compareDate(n, e) : t == i;
    } return n == e; }
    sameTime(n, e) { if (n && e) {
        let t = this.isValid(n), i = this.isValid(e);
        return t && i ? !this.compareTime(n, e) : t == i;
    } return n == e; }
    clampDate(n, e, t) { return e && this.compareDate(n, e) < 0 ? e : t && this.compareDate(n, t) > 0 ? t : n; }
}, y = new T("mat-date-formats");
import * as m from "@angular/core";
import "@angular/core";
import { startWith as oe } from "rxjs/operators";
var ae = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275dir = m.\u0275\u0275defineDirective({ type: r, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
} return r; })();
function se(r, n, e = "mat") { r.changes.pipe(oe(r)).subscribe(({ length: t }) => { c(n, `${e}-2-line`, !1), c(n, `${e}-3-line`, !1), c(n, `${e}-multi-line`, !1), t === 2 || t === 3 ? c(n, `${e}-${t}-line`, !0) : t > 3 && c(n, `${e}-multi-line`, !0); }); }
function c(r, n, e) { r.nativeElement.classList.toggle(n, e); }
var le = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = m.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = m.\u0275\u0275defineInjector({ imports: [f, f] });
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
var He = new de("20.2.14"), ue = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/, me = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function g(r, n) { let e = Array(r); for (let t = 0; t < r; t++)
    e[t] = n(t); return e; }
var I = (() => { class r extends u {
    useUtcForDisplay = !1;
    _matDateLocale = A(h, { optional: !0 });
    constructor() { super(); let e = A(h, { optional: !0 }); e !== void 0 && (this._matDateLocale = e), super.setLocale(this._matDateLocale); }
    getYear(e) { return e.getFullYear(); }
    getMonth(e) { return e.getMonth(); }
    getDate(e) { return e.getDate(); }
    getDayOfWeek(e) { return e.getDay(); }
    getMonthNames(e) { let t = new Intl.DateTimeFormat(this.locale, { month: e, timeZone: "utc" }); return g(12, i => this._format(t, new Date(2017, i, 1))); }
    getDateNames() { let e = new Intl.DateTimeFormat(this.locale, { day: "numeric", timeZone: "utc" }); return g(31, t => this._format(e, new Date(2017, 0, t + 1))); }
    getDayOfWeekNames(e) { let t = new Intl.DateTimeFormat(this.locale, { weekday: e, timeZone: "utc" }); return g(7, i => this._format(t, new Date(2017, 0, i + 1))); }
    getYearName(e) { let t = new Intl.DateTimeFormat(this.locale, { year: "numeric", timeZone: "utc" }); return this._format(t, e); }
    getFirstDayOfWeek() { if (typeof Intl < "u" && Intl.Locale) {
        let e = new Intl.Locale(this.locale), t = (e.getWeekInfo?.() || e.weekInfo)?.firstDay ?? 0;
        return t === 7 ? 0 : t;
    } return 0; }
    getNumDaysInMonth(e) { return this.getDate(this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + 1, 0)); }
    clone(e) { return new Date(e.getTime()); }
    createDate(e, t, i) { let o = this._createDateWithOverflow(e, t, i); return o.getMonth() != t, o; }
    today() { return new Date; }
    parse(e, t) { return typeof e == "number" ? new Date(e) : e ? new Date(Date.parse(e)) : null; }
    format(e, t) { if (!this.isValid(e))
        throw Error("NativeDateAdapter: Cannot format invalid date."); let i = new Intl.DateTimeFormat(this.locale, w(D({}, t), { timeZone: "utc" })); return this._format(i, e); }
    addCalendarYears(e, t) { return this.addCalendarMonths(e, t * 12); }
    addCalendarMonths(e, t) { let i = this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + t, this.getDate(e)); return this.getMonth(i) != ((this.getMonth(e) + t) % 12 + 12) % 12 && (i = this._createDateWithOverflow(this.getYear(i), this.getMonth(i), 0)), i; }
    addCalendarDays(e, t) { return this._createDateWithOverflow(this.getYear(e), this.getMonth(e), this.getDate(e) + t); }
    toIso8601(e) { return [e.getUTCFullYear(), this._2digit(e.getUTCMonth() + 1), this._2digit(e.getUTCDate())].join("-"); }
    deserialize(e) { if (typeof e == "string") {
        if (!e)
            return null;
        if (ue.test(e)) {
            let t = new Date(e);
            if (this.isValid(t))
                return t;
        }
    } return super.deserialize(e); }
    isDateInstance(e) { return e instanceof Date; }
    isValid(e) { return !isNaN(e.getTime()); }
    invalid() { return new Date(NaN); }
    setTime(e, t, i, o) { let a = this.clone(e); return a.setHours(t, i, o, 0), a; }
    getHours(e) { return e.getHours(); }
    getMinutes(e) { return e.getMinutes(); }
    getSeconds(e) { return e.getSeconds(); }
    parseTime(e, t) { if (typeof e != "string")
        return e instanceof Date ? new Date(e.getTime()) : null; let i = e.trim(); if (i.length === 0)
        return null; let o = this._parseTimeString(i); if (o === null) {
        let a = i.replace(/[^0-9:(AM|PM)]/gi, "").trim();
        a.length > 0 && (o = this._parseTimeString(a));
    } return o || this.invalid(); }
    addSeconds(e, t) { return new Date(e.getTime() + t * 1e3); }
    _createDateWithOverflow(e, t, i) { let o = new Date; return o.setFullYear(e, t, i), o.setHours(0, 0, 0, 0), o; }
    _2digit(e) { return ("00" + e).slice(-2); }
    _format(e, t) { let i = new Date; return i.setUTCFullYear(t.getFullYear(), t.getMonth(), t.getDate()), i.setUTCHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), e.format(i); }
    _parseTimeString(e) { let t = e.toUpperCase().match(me); if (t) {
        let i = parseInt(t[1]), o = parseInt(t[2]), a = t[3] == null ? void 0 : parseInt(t[3]), M = t[4];
        if (i === 12 ? i = M === "AM" ? 0 : i : M === "PM" && (i += 12), p(i, 0, 23) && p(o, 0, 59) && (a == null || p(a, 0, 59)))
            return this.setTime(this.today(), i, o, a || 0);
    } return null; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac });
} return r; })();
function p(r, n, e) { return !isNaN(r) && r >= n && r <= e; }
var ce = { parse: { dateInput: null, timeInput: null }, display: { dateInput: { year: "numeric", month: "numeric", day: "numeric" }, timeInput: { hour: "numeric", minute: "numeric" }, monthYearLabel: { year: "numeric", month: "short" }, dateA11yLabel: { year: "numeric", month: "long", day: "numeric" }, monthYearA11yLabel: { year: "numeric", month: "long" }, timeOptionLabel: { hour: "numeric", minute: "numeric" } } }, We = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = l.\u0275\u0275defineInjector({ providers: [{ provide: u, useClass: I }] });
} return r; })(), Ue = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = l.\u0275\u0275defineInjector({ providers: [fe()] });
} return r; })();
function fe(r = ce) { return [{ provide: u, useClass: I }, { provide: y, useValue: r }]; }
export { E as AnimationCurves, O as AnimationDurations, u as DateAdapter, H as ErrorStateMatcher, v as MATERIAL_ANIMATIONS, V as MATERIAL_SANITY_CHECKS, y as MAT_DATE_FORMATS, h as MAT_DATE_LOCALE, _ as MAT_DATE_LOCALE_FACTORY, ce as MAT_NATIVE_DATE_FORMATS, G as MAT_OPTGROUP, Z as MAT_OPTION_PARENT_COMPONENT, x as MAT_RIPPLE_GLOBAL_OPTIONS, f as MatCommonModule, ae as MatLine, le as MatLineModule, Ue as MatNativeDateModule, z as MatOptgroup, X as MatOption, J as MatOptionModule, B as MatOptionSelectionChange, W as MatPseudoCheckbox, U as MatPseudoCheckboxModule, R as MatRipple, P as MatRippleLoader, $ as MatRippleModule, I as NativeDateAdapter, We as NativeDateModule, S as RippleRef, b as RippleRenderer, F as RippleState, k as ShowOnDirtyErrorStateMatcher, He as VERSION, j as _ErrorStateTracker, te as _MatInternalFormField, Y as _StructuralStylesLoader, C as _animationsDisabled, K as _countGroupLabelsBeforeOption, L as _getAnimationsState, q as _getOptionScrollPosition, N as defaultRippleAnimationConfig, fe as provideNativeDateAdapter, se as setLines };
