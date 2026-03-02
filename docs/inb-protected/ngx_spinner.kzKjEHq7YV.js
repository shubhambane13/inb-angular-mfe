import { a as f, b as m } from "@nf-internal/chunk-4CLCTAJ7";
import * as e from "@angular/core";
import { InjectionToken as v, inject as y, makeEnvironmentProviders as C } from "@angular/core";
import { BehaviorSubject as w, Subject as x } from "rxjs";
import { filter as O, takeUntil as S } from "rxjs/operators";
import { trigger as I, state as _, transition as b, style as p, animate as g } from "@angular/animations";
import { DomSanitizer as D } from "@angular/platform-browser";
var z = ["overlay"], N = ["*"];
function j(s, t) { s & 1 && e.\u0275\u0275domElement(0, "div"); }
function E(s, t) { if (s & 1 && (e.\u0275\u0275domElementStart(0, "div"), e.\u0275\u0275repeaterCreate(1, j, 1, 0, "div", null, e.\u0275\u0275repeaterTrackByIdentity), e.\u0275\u0275domElementEnd()), s & 2) {
    let o = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(o.spinner.class), e.\u0275\u0275styleProp("color", o.spinner.color), e.\u0275\u0275advance(), e.\u0275\u0275repeater(o.spinner.divArray);
} }
function P(s, t) { if (s & 1 && (e.\u0275\u0275domElement(0, "div", 4), e.\u0275\u0275pipe(1, "safeHtml")), s & 2) {
    let o = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275domProperty("innerHTML", e.\u0275\u0275pipeBind1(1, 1, o.template), e.\u0275\u0275sanitizeHtml);
} }
function k(s, t) { if (s & 1 && (e.\u0275\u0275domElementStart(0, "div", 2, 0), e.\u0275\u0275conditionalCreate(2, E, 3, 4, "div", 3), e.\u0275\u0275conditionalCreate(3, P, 2, 3, "div", 4), e.\u0275\u0275domElementStart(4, "div", 5), e.\u0275\u0275projection(5), e.\u0275\u0275domElementEnd()()), s & 2) {
    let o = e.\u0275\u0275nextContext();
    e.\u0275\u0275styleProp("background-color", o.spinner.bdColor)("z-index", o.spinner.zIndex)("position", o.spinner.fullScreen ? "fixed" : "absolute"), e.\u0275\u0275property("@.disabled", o.disableAnimation)("@fadeIn", "in"), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(o.template ? -1 : 2), e.\u0275\u0275advance(), e.\u0275\u0275conditional(o.template ? 3 : -1), e.\u0275\u0275advance(), e.\u0275\u0275styleProp("z-index", o.spinner.zIndex);
} }
var M = { "ball-8bits": 16, "ball-atom": 4, "ball-beat": 3, "ball-circus": 5, "ball-climbing-dot": 4, "ball-clip-rotate": 1, "ball-clip-rotate-multiple": 2, "ball-clip-rotate-pulse": 2, "ball-elastic-dots": 5, "ball-fall": 3, "ball-fussion": 4, "ball-grid-beat": 9, "ball-grid-pulse": 9, "ball-newton-cradle": 4, "ball-pulse": 3, "ball-pulse-rise": 5, "ball-pulse-sync": 3, "ball-rotate": 1, "ball-running-dots": 5, "ball-scale": 1, "ball-scale-multiple": 3, "ball-scale-pulse": 2, "ball-scale-ripple": 1, "ball-scale-ripple-multiple": 3, "ball-spin": 8, "ball-spin-clockwise": 8, "ball-spin-clockwise-fade": 8, "ball-spin-clockwise-fade-rotating": 8, "ball-spin-fade": 8, "ball-spin-fade-rotating": 8, "ball-spin-rotate": 2, "ball-square-clockwise-spin": 8, "ball-square-spin": 8, "ball-triangle-path": 3, "ball-zig-zag": 2, "ball-zig-zag-deflect": 2, cog: 1, "cube-transition": 2, fire: 3, "line-scale": 5, "line-scale-party": 5, "line-scale-pulse-out": 5, "line-scale-pulse-out-rapid": 5, "line-spin-clockwise-fade": 8, "line-spin-clockwise-fade-rotating": 8, "line-spin-fade": 8, "line-spin-fade-rotating": 8, pacman: 6, "square-jelly-box": 2, "square-loader": 1, "square-spin": 1, timer: 1, "triangle-skew-spin": 1 }, d = { BD_COLOR: "rgba(51,51,51,0.8)", SPINNER_COLOR: "#fff", Z_INDEX: 99999 }, u = "primary", l = class s {
    constructor(t) { Object.assign(this, t); }
    static create(t) {
        return !t?.template && !t?.type && console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`), new s(t);
    }
}, R = (() => { let t = class t {
    constructor() { this.spinnerObservable = new w(null); }
    getSpinner(n) { return this.spinnerObservable.asObservable().pipe(O(i => i && i.name === n)); }
    show(n = u, i) { return new Promise((r, a) => { setTimeout(() => { i && Object.keys(i).length ? (i.name = n, this.spinnerObservable.next(new l(m(f({}, i), { show: !0 }))), r(!0)) : (this.spinnerObservable.next(new l({ name: n, show: !0 })), r(!0)); }, 10); }); }
    hide(n = u, i = 10) { return new Promise((r, a) => { setTimeout(() => { this.spinnerObservable.next(new l({ name: n, show: !1 })), r(!0); }, i); }); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), h = new v("NGX_SPINNER_CONFIG"), A = (() => { let t = class t {
    constructor() { this.sanitizer = y(D); }
    transform(n) { return n ? this.sanitizer.bypassSecurityTrustHtml(n) : ""; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275pipe = e.\u0275\u0275definePipe({ name: "safeHtml", type: t, pure: !0 }); let s = t; return s; })(), K = (() => { let t = class t {
    constructor(n, i, r, a) { this.spinnerService = n, this.changeDetector = i, this.elementRef = r, this.globalConfig = a, this.disableAnimation = !1, this.spinner = new l, this.ngUnsubscribe = new x, this.setDefaultOptions = () => { let { type: c } = this.globalConfig ?? {}; this.spinner = l.create({ name: this.name, bdColor: this.bdColor, size: this.size, color: this.color, type: this.type ?? c, fullScreen: this.fullScreen, divArray: this.divArray, divCount: this.divCount, show: this.show, zIndex: this.zIndex, template: this.template, showSpinner: this.showSpinner }); }, this.bdColor = d.BD_COLOR, this.zIndex = d.Z_INDEX, this.color = d.SPINNER_COLOR, this.size = "large", this.fullScreen = !0, this.name = u, this.template = null, this.showSpinner = !1, this.divArray = [], this.divCount = 0, this.show = !1; }
    initObservable() { this.spinnerService.getSpinner(this.name).pipe(S(this.ngUnsubscribe)).subscribe(n => { this.setDefaultOptions(), Object.assign(this.spinner, n), n.show && this.onInputChange(), this.changeDetector.detectChanges(); }); }
    ngOnInit() { this.setDefaultOptions(), this.initObservable(); }
    isSpinnerZone(n) { return n === this.elementRef.nativeElement.parentElement ? !0 : n.parentNode && this.isSpinnerZone(n.parentNode); }
    ngOnChanges(n) { for (let i in n)
        if (i) {
            let r = n[i];
            if (r.isFirstChange())
                return;
            typeof r.currentValue < "u" && r.currentValue !== r.previousValue && r.currentValue !== "" && (this.spinner[i] = r.currentValue, i === "showSpinner" && (r.currentValue ? this.spinnerService.show(this.spinner.name, this.spinner) : this.spinnerService.hide(this.spinner.name)), i === "name" && this.initObservable());
        } }
    getClass(n, i) { this.spinner.divCount = M[n], this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((a, c) => c); let r = ""; switch (i.toLowerCase()) {
        case "small":
            r = "la-sm";
            break;
        case "medium":
            r = "la-2x";
            break;
        case "large":
            r = "la-3x";
            break;
        default: break;
    } return "la-" + n + " " + r; }
    onInputChange() { this.spinner.class = this.getClass(this.spinner.type, this.spinner.size); }
    ngOnDestroy() { this.ngUnsubscribe.next(), this.ngUnsubscribe.complete(); }
}; t.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275directiveInject(R), e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(h, 8)); }, t.\u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["ngx-spinner"]], viewQuery: function (i, r) { if (i & 1 && e.\u0275\u0275viewQuery(z, 5), i & 2) {
        let a;
        e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (r.spinnerDOM = a.first);
    } }, inputs: { bdColor: "bdColor", size: "size", color: "color", type: "type", fullScreen: "fullScreen", name: "name", zIndex: "zIndex", template: "template", showSpinner: "showSpinner", disableAnimation: "disableAnimation" }, features: [e.\u0275\u0275NgOnChangesFeature], ngContentSelectors: N, decls: 1, vars: 1, consts: [["overlay", ""], [1, "ngx-spinner-overlay", 3, "background-color", "z-index", "position"], [1, "ngx-spinner-overlay"], [3, "class", "color"], [3, "innerHTML"], [1, "loading-text"]], template: function (i, r) { i & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275conditionalCreate(0, k, 6, 12, "div", 1)), i & 2 && e.\u0275\u0275conditional(r.spinner.show ? 0 : -1); }, dependencies: [A], styles: [".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"], data: { animation: [I("fadeIn", [_("in", p({ opacity: 1 })), b(":enter", [p({ opacity: 0 }), g(300)]), b(":leave", g(200, p({ opacity: 0 })))])] }, changeDetection: 0 }); let s = t; return s; })(), W = (() => { let t = class t {
    static forRoot(n) { return { ngModule: t, providers: [{ provide: h, useValue: n }] }; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = e.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = e.\u0275\u0275defineInjector({}); let s = t; return s; })(), $ = s => C([{ provide: h, useValue: s }]);
export { d as DEFAULTS, M as LOADERS, l as NgxSpinner, K as NgxSpinnerComponent, W as NgxSpinnerModule, R as NgxSpinnerService, u as PRIMARY_SPINNER, $ as provideSpinnerConfig };
