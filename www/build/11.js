webpackJsonp([11],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPageModule", function() { return CheckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckPageModule = /** @class */ (function () {
    function CheckPageModule() {
    }
    CheckPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check__["a" /* CheckPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* CheckPage */]),
            ],
        })
    ], CheckPageModule);
    return CheckPageModule;
}());

//# sourceMappingURL=check.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckPage = /** @class */ (function () {
    function CheckPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nfcNotFound = false;
    }
    CheckPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //Start find NFC
        var loading = this.loadingCtrl.create({
            content: 'Get your cellphone close to NFC tag and wait...'
        });
        loading.present();
        setTimeout(function () {
            _this.nfcNotFound = true;
            loading.dismiss();
            _this.presentConfirm();
        }, 2000);
        //Stop find nfc
    };
    CheckPage.prototype.presentConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'NFC Tag not Found',
            message: 'What do you want to do?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Retry',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    CheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-check',template:/*ion-inline-start:"D:\Projetos\Projetos2019\ionic\Ionic3-Multi-Purpose-Theme\src\pages\check\check.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Check</ion-title>\n      <ion-buttons right>\n        <button ion-button icon-only (click)="editProfile()" class="editSaveToggleBtn">{{caption_name}}</button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n \n  <ion-content>\n      <div *ngIf="false">\n          NFC Tag Not found\n        </div>\n\n        <ion-card>\n\n            <ion-item>\n              <ion-avatar item-start>\n                \n              </ion-avatar>\n              <h2>Data Structure</h2>\n              <p>Fri</p>\n            </ion-item>\n        \n           \n        \n            <ion-card-content>\n              <p>Mr. Bird Person</p>\n            </ion-card-content>\n        \n            <ion-row>\n              <ion-col>\n                <button ion-button color="primary" clear small icon-start>\n                  <ion-icon name=\'thumbs-up\'></ion-icon>\n                  Confirm Presence\n                </button>\n              </ion-col>\n\n             \n            </ion-row>\n          </ion-card>\n\n  </ion-content>\n  \n  '/*ion-inline-end:"D:\Projetos\Projetos2019\ionic\Ionic3-Multi-Purpose-Theme\src\pages\check\check.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CheckPage);
    return CheckPage;
}());

//# sourceMappingURL=check.js.map

/***/ })

});
//# sourceMappingURL=11.js.map