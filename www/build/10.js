webpackJsonp([10],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisciplinesPageModule", function() { return DisciplinesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__disciplines__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DisciplinesPageModule = /** @class */ (function () {
    function DisciplinesPageModule() {
    }
    DisciplinesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__disciplines__["a" /* DisciplinesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__disciplines__["a" /* DisciplinesPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__disciplines__["a" /* DisciplinesPage */]
            ]
        })
    ], DisciplinesPageModule);
    return DisciplinesPageModule;
}());

//# sourceMappingURL=disciplines.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisciplinesPage = /** @class */ (function () {
    function DisciplinesPage(vibration, navCtrl, navParams, items, modalCtrl, toastCtrl, alertCtrl, loadingCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.press = 0;
        this.currentItems = this.items.query();
    }
    /**
     * Perform a service for the proper items.
     */
    DisciplinesPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = this.items.query();
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    DisciplinesPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    DisciplinesPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                console.log(item);
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    DisciplinesPage.prototype.pressEvent = function (ev) {
        this.press++;
        this.vibration.vibrate(150);
        var toast = this.toastCtrl.create({
            message: "please slide to get the options .",
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    DisciplinesPage.prototype.deleteItem = function (item, slidingItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Do you want to delete this user?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        slidingItem.close();
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                            _this.items.delete(item);
                            var toast = _this.toastCtrl.create({
                                message: "You have deleted " + item['name'] + " successfully .",
                                duration: 2000,
                                position: 'top'
                            });
                            toast.present();
                        }, 1000);
                    }
                }
            ]
        });
        alert.present();
    };
    DisciplinesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'users_lists',
            templateUrl: 'users_lists.html'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], DisciplinesPage);
    return DisciplinesPage;
}());

//# sourceMappingURL=disciplines.js.map

/***/ })

});
//# sourceMappingURL=10.js.map