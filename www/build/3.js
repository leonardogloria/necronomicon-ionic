webpackJsonp([3],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, viewCtrl, formBuilder, camera, users, _http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.users = users;
        this._http = _http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.thumb = 'https://via.placeholder.com/150';
        this.isDisabled = true;
        this.caption_name = "EDIT";
        this.account = {
            user_name: 'arnoldschwarzenegger',
            user_email: 'arnold.sc@terminator.net',
            user_password: 'password',
            user_state: 'California',
            profile_image: 'asset/img/src/img.jpg',
            full_name: 'Arnold Schwarzenegger',
            about: 'Former Governor of California'
        };
        this.form = formBuilder.group({
            image: [''], user_name: [''], user_password: [''], user_email: [''], user_state: [''],
        });
        this.profileDetails = [
            {
                full_name: "Arnold Schwarzenegger",
                about: "Former Governor of California",
                followers: 230,
                following: 170
            },
        ];
    }
    ProfilePage.prototype.openFollowers = function () {
        this.navCtrl.push('Followers');
    };
    ProfilePage.prototype.openFollowing = function () {
        this.navCtrl.push('Following');
    };
    ProfilePage.prototype.changedSmtng = function () {
        this.caption_name = "SAVE";
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        if (this.caption_name == "EDIT") {
            this.isDisabled = false;
            this.caption_name = "CANCEL";
        }
        else if (this.caption_name == "SAVE") {
            console.log(this.isReadyToSave);
            if (!(this.account.user_name && this.account.user_email && this.account.user_password && this.account.user_state)) {
                var toast = this.toastCtrl.create({
                    message: "Validation errors !",
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                var loading_1 = this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                loading_1.present();
                setTimeout(function () {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "You have successfully updated your details .",
                        duration: 2000,
                        position: 'top'
                    });
                    _this.caption_name = "EDIT";
                    _this.isDisabled = true;
                    toast.present();
                }, 2000);
            }
        }
        else if (this.caption_name == "CANCEL") {
            this.isDisabled = true;
            this.caption_name = "EDIT";
        }
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._http.get('http://localhost:8080/student/1').subscribe(function (data) {
            _this.account.user_email = data['email'];
            _this.account.user_name = data['username'];
            _this.profileDetails = [
                {
                    full_name: data['name'],
                    about: data['course'],
                },
            ];
            console.log(data);
        });
    };
    ProfilePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'image': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ProfilePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'image': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ProfilePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['image'].value + ')';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "fileInput", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-page',template:/*ion-inline-start:"D:\Projetos\Projetos2019\ionic\Ionic3-Multi-Purpose-Theme\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Profile\' | translate }}</ion-title>\n   \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="fixed-content">\n\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="saveProfile()">\n      <div class="upperDiv">\n        <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]"\n               (change)="processWebImage($event)"/>\n        <div class="profile-image-wrapper" >\n          <div class="profile-image-placeholder" *ngIf="!this.form.controls.image.value">\n            <div>\n            </div>\n          </div>\n          <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()"\n               *ngIf="this.form.controls.image.value"></div>\n        </div>\n\n        <h3 class="full_name">{{profileDetails[0].full_name}}</h3>\n        <h3 class="userDetails">{{profileDetails[0].about}}</h3>\n\n       \n        <ion-item no-lines (click)="openFollowing()" style="background: #16a085 !important;">\n       \n        </ion-item>\n      </div>\n      <ion-list style="padding: 20px !important; border-bottom: 0.55px solid #fff; !important;">\n        <ion-item style="border-top: 0.55px solid #fff; !important;">\n          <ion-label class="label_here">Student Name :</ion-label>\n          <ion-input class="inputFields" type="text" formControlName="user_name" (keyup)="changedSmtng()"\n                     disabled="{{isDisabled}}"\n                     [(ngModel)]="profileDetails[0].full_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="label_here">Email :</ion-label>\n          <ion-input class="inputFields" type="email" formControlName="user_email" (keyup)="changedSmtng()"\n                     disabled="{{isDisabled}}"\n                     [(ngModel)]="account.user_email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="label_here">Password :</ion-label>\n          <ion-input class="inputFields" type="password" formControlName="user_password" (keyup)="changedSmtng()"\n                     disabled="{{isDisabled}}"\n                     [(ngModel)]="account.user_password"></ion-input>\n        </ion-item>\n\n\n      </ion-list>\n    </form>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\Projetos\Projetos2019\ionic\Ionic3-Multi-Purpose-Theme\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* User */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _h || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=3.js.map