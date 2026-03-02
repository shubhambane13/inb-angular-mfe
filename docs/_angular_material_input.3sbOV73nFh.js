import { a as c, c as p } from "@nf-internal/chunk-ZTVVMKVB";
import { a as g, c as y, d as b, f as I, h as S, i as m, m as _, o as M, p as d } from "@nf-internal/chunk-WYLMCG44";
import "@nf-internal/chunk-5KSFOI5Q";
import { b as l } from "@nf-internal/chunk-RXMLTE5A";
import "@nf-internal/chunk-4CLCTAJ7";
import { coerceBooleanProperty as u } from "@angular/cdk/coercion";
import { Platform as A, getSupportedInputTypes as v } from "@angular/cdk/platform";
import { AutofillMonitor as E, TextFieldModule as T } from "@angular/cdk/text-field";
import * as r from "@angular/core";
import { InjectionToken as N, inject as s, ElementRef as F, NgZone as V, Renderer2 as R, isSignal as B, effect as k, booleanAttribute as P } from "@angular/core";
import { _IdGenerator as D } from "@angular/cdk/a11y";
import { NgControl as O, Validators as w, NgForm as q, FormGroupDirective as x } from "@angular/forms";
import { Subject as U } from "rxjs";
import { InjectionToken as C } from "@angular/core";
var f = new C("MAT_INPUT_VALUE_ACCESSOR");
import "@angular/cdk/bidi";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
import "@angular/cdk/layout";
import "@angular/cdk/observers";
function pe(n) { return Error(`Input type "${n}" isn't supported by matInput.`); }
var L = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"], H = new N("MAT_INPUT_CONFIG"), me = (() => { class n {
    _elementRef = s(F);
    _platform = s(A);
    ngControl = s(O, { optional: !0, self: !0 });
    _autofillMonitor = s(E);
    _ngZone = s(V);
    _formField = s(_, { optional: !0 });
    _renderer = s(R);
    _uid = s(D).getId("mat-input-");
    _previousNativeValue;
    _inputValueAccessor;
    _signalBasedValueAccessor;
    _previousPlaceholder;
    _errorStateTracker;
    _config = s(H, { optional: !0 });
    _cleanupIosKeyup;
    _cleanupWebkitWheel;
    _isServer;
    _isNativeSelect;
    _isTextarea;
    _isInFormField;
    focused = !1;
    stateChanges = new U;
    controlType = "mat-input";
    autofilled = !1;
    get disabled() { return this._disabled; }
    set disabled(e) { this._disabled = u(e), this.focused && (this.focused = !1, this.stateChanges.next()); }
    _disabled = !1;
    get id() { return this._id; }
    set id(e) { this._id = e || this._uid; }
    _id;
    placeholder;
    name;
    get required() { return this._required ?? this.ngControl?.control?.hasValidator(w.required) ?? !1; }
    set required(e) { this._required = u(e); }
    _required;
    get type() { return this._type; }
    set type(e) { this._type = e || "text", this._validateType(), !this._isTextarea && v().has(this._type) && (this._elementRef.nativeElement.type = this._type); }
    _type = "text";
    get errorStateMatcher() { return this._errorStateTracker.matcher; }
    set errorStateMatcher(e) { this._errorStateTracker.matcher = e; }
    userAriaDescribedBy;
    get value() { return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value; }
    set value(e) { e !== this.value && (this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value.set(e) : this._inputValueAccessor.value = e, this.stateChanges.next()); }
    get readonly() { return this._readonly; }
    set readonly(e) { this._readonly = u(e); }
    _readonly = !1;
    disabledInteractive;
    get errorState() { return this._errorStateTracker.errorState; }
    set errorState(e) { this._errorStateTracker.errorState = e; }
    _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter(e => v().has(e));
    constructor() { let e = s(q, { optional: !0 }), t = s(x, { optional: !0 }), i = s(p), a = s(f, { optional: !0, self: !0 }), o = this._elementRef.nativeElement, h = o.nodeName.toLowerCase(); a ? B(a.value) ? this._signalBasedValueAccessor = a : this._inputValueAccessor = a : this._inputValueAccessor = o, this._previousNativeValue = this.value, this.id = this.id, this._platform.IOS && this._ngZone.runOutsideAngular(() => { this._cleanupIosKeyup = this._renderer.listen(o, "keyup", this._iOSKeyupListener); }), this._errorStateTracker = new c(i, this.ngControl, t, e, this.stateChanges), this._isServer = !this._platform.isBrowser, this._isNativeSelect = h === "select", this._isTextarea = h === "textarea", this._isInFormField = !!this._formField, this.disabledInteractive = this._config?.disabledInteractive || !1, this._isNativeSelect && (this.controlType = o.multiple ? "mat-native-select-multiple" : "mat-native-select"), this._signalBasedValueAccessor && k(() => { this._signalBasedValueAccessor.value(), this.stateChanges.next(); }); }
    ngAfterViewInit() { this._platform.isBrowser && this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e => { this.autofilled = e.isAutofilled, this.stateChanges.next(); }); }
    ngOnChanges() { this.stateChanges.next(); }
    ngOnDestroy() { this.stateChanges.complete(), this._platform.isBrowser && this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement), this._cleanupIosKeyup?.(), this._cleanupWebkitWheel?.(); }
    ngDoCheck() { this.ngControl && (this.updateErrorState(), this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled && (this.disabled = this.ngControl.disabled, this.stateChanges.next())), this._dirtyCheckNativeValue(), this._dirtyCheckPlaceholder(); }
    focus(e) { this._elementRef.nativeElement.focus(e); }
    updateErrorState() { this._errorStateTracker.updateErrorState(); }
    _focusChanged(e) { if (e !== this.focused) {
        if (!this._isNativeSelect && e && this.disabled && this.disabledInteractive) {
            let t = this._elementRef.nativeElement;
            t.type === "number" ? (t.type = "text", t.setSelectionRange(0, 0), t.type = "number") : t.setSelectionRange(0, 0);
        }
        this.focused = e, this.stateChanges.next();
    } }
    _onInput() { }
    _dirtyCheckNativeValue() { let e = this._elementRef.nativeElement.value; this._previousNativeValue !== e && (this._previousNativeValue = e, this.stateChanges.next()); }
    _dirtyCheckPlaceholder() { let e = this._getPlaceholder(); if (e !== this._previousPlaceholder) {
        let t = this._elementRef.nativeElement;
        this._previousPlaceholder = e, e ? t.setAttribute("placeholder", e) : t.removeAttribute("placeholder");
    } }
    _getPlaceholder() { return this.placeholder || null; }
    _validateType() { L.indexOf(this._type) > -1; }
    _isNeverEmpty() { return this._neverEmptyInputTypes.indexOf(this._type) > -1; }
    _isBadInput() { let e = this._elementRef.nativeElement.validity; return e && e.badInput; }
    get empty() { return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled; }
    get shouldLabelFloat() { if (this._isNativeSelect) {
        let e = this._elementRef.nativeElement, t = e.options[0];
        return this.focused || e.multiple || !this.empty || !!(e.selectedIndex > -1 && t && t.label);
    }
    else
        return this.focused && !this.disabled || !this.empty; }
    get describedByIds() { return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ") || []; }
    setDescribedByIds(e) { let t = this._elementRef.nativeElement; e.length ? t.setAttribute("aria-describedby", e.join(" ")) : t.removeAttribute("aria-describedby"); }
    onContainerClick() { this.focused || this.focus(); }
    _isInlineSelect() { let e = this._elementRef.nativeElement; return this._isNativeSelect && (e.multiple || e.size > 1); }
    _iOSKeyupListener = e => { let t = e.target; !t.value && t.selectionStart === 0 && t.selectionEnd === 0 && (t.setSelectionRange(1, 1), t.setSelectionRange(0, 0)); };
    _getReadonlyAttribute() { return this._isNativeSelect ? null : this.readonly || this.disabled && this.disabledInteractive ? "true" : null; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275dir = r.\u0275\u0275defineDirective({ type: n, selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]], hostAttrs: [1, "mat-mdc-input-element"], hostVars: 21, hostBindings: function (t, i) { t & 1 && r.\u0275\u0275listener("focus", function () { return i._focusChanged(!0); })("blur", function () { return i._focusChanged(!1); })("input", function () { return i._onInput(); }), t & 2 && (r.\u0275\u0275domProperty("id", i.id)("disabled", i.disabled && !i.disabledInteractive)("required", i.required), r.\u0275\u0275attribute("name", i.name || null)("readonly", i._getReadonlyAttribute())("aria-disabled", i.disabled && i.disabledInteractive ? "true" : null)("aria-invalid", i.empty && i.required ? null : i.errorState)("aria-required", i.required)("id", i.id), r.\u0275\u0275classProp("mat-input-server", i._isServer)("mat-mdc-form-field-textarea-control", i._isInFormField && i._isTextarea)("mat-mdc-form-field-input-control", i._isInFormField)("mat-mdc-input-disabled-interactive", i.disabledInteractive)("mdc-text-field__input", i._isInFormField)("mat-mdc-native-select-inline", i._isInlineSelect())); }, inputs: { disabled: "disabled", id: "id", placeholder: "placeholder", name: "name", required: "required", type: "type", errorStateMatcher: "errorStateMatcher", userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"], value: "value", readonly: "readonly", disabledInteractive: [2, "disabledInteractive", "disabledInteractive", P] }, exportAs: ["matInput"], features: [r.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: n }]), r.\u0275\u0275NgOnChangesFeature] });
} return n; })(), _e = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = r.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = r.\u0275\u0275defineInjector({ imports: [l, d, d, T, l] });
} return n; })();
export { H as MAT_INPUT_CONFIG, f as MAT_INPUT_VALUE_ACCESSOR, y as MatError, M as MatFormField, b as MatHint, me as MatInput, _e as MatInputModule, g as MatLabel, I as MatPrefix, S as MatSuffix, pe as getMatInputUnsupportedTypeError };
