import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

/**
 * Generated class for the CheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
})
export class CheckPage {
  nfcNotFound = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    //Start find NFC
    let loading = this.loadingCtrl.create({
      content: 'Get your cellphone close to NFC tag and wait...'
    });
    loading.present();
    setTimeout(() => {
      this.nfcNotFound = true;
      loading.dismiss();
      this.presentConfirm();

    }, 2000);
    //Stop find nfc
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'NFC Tag not Found',
      message: 'What do you want to do?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Retry',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
