webpackJsonp([1],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]
            ]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_lists_users_lists__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, toastCtrl, translateService, loadingCtrl, formBuilder, viewCtrl, app, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.user = user;
        // @ViewChild(Nav) nav: Nav;
        this.pages = [
            { title: 'Users Lists', component: 'UsersPage' }
        ];
        this.account = {
            email: '',
            password: ''
        };
        this.form = formBuilder.group({
            user_name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            user_pass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signinErrorString = value;
        });
        this.falsemsg = "Welcome !";
    }
    WelcomePage.prototype.signIn = function () {
        var _this = this;
        if (!this.form.valid) {
            var toast = this.toastCtrl.create({
                message: "Email and password both are required to Sign In.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Signing in  wait...'
            });
            loading_1.present();
            setTimeout(function () {
                loading_1.dismiss();
                _this.user.login(_this.account).subscribe(function (resp) {
                    // this.navCtrl.push(this.pages[0].component);
                }, function (err) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__users_lists_users_lists__["a" /* UsersPage */]);
                    var toast = _this.toastCtrl.create({
                        message: _this.falsemsg,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                });
            }, 2000);
        }
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push('UsersPage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\Projetos\Projetos2019\ionic\Ionic3-Multi-Purpose-Theme\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n  <div class="fixed-content">\n    <div class="logoHeader">\n      <img alt="logo" height="60" style="position: relative" src="../assets/img/777.png">\n    </div>\n    <h1 class="welcomeHeader">777 Solutions</h1>\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="signIn()">\n      <div padding>\n        <ion-input type="email"  [(ngModel)]="account.email" class="input-access-code" placeholder="Student Number" formControlName="user_name"></ion-input>\n        <br>\n        <ion-input type="password" [(ngModel)]="account.password" class="input-access-code" placeholder="Password" formControlName="user_pass"></ion-input>\n        <br>\n        <a href="/#/users_lists">\n          <button ion-button block class="login">{{ \'LOGIN\' | translate }}</button>\n        </a>\n  \n       \n      \n      </div>\n    </form>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projetos\Projetos2019\ionic\Ionic3-Multi-Purpose-Theme\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */]) === "function" && _h || Object])
    ], WelcomePage);
    return WelcomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=1.js.map