import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
  day = "";
  name = "";
  teacher = "";
  classId: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public loadingCtrl: LoadingController,public alertCtrl: AlertController
    ,private _http: HttpClient) {
  }
  checkPresence(){
    this._http.get(`http://localhost:8080/check/1/${this.classId}`).subscribe(data =>{
      if(data){
        this.checkConfirmed();

      }

    })  
  }
  getClassNumber(){
    this.classId = Math.floor((Math.random() * 2) + 1);  
  }

  ionViewDidLoad() {
    //Start find NFC
    let loading = this.loadingCtrl.create({
      content: 'Get your cellphone close to NFC tag and wait confirmation...'
    });
    
    loading.present();
    setTimeout(() => {
      this.nfcNotFound = false;
      loading.dismiss();
      this.nfcNotFound = true;
      this.getClassNumber();
      console.log(this.classId)
      this._http.get(`http://localhost:8080/class/${this.classId}`).subscribe(data => {
        this.name = data['name']
        this.teacher = data['discipline']
        this.day = data['days']
      });
      //this.presentConfirm();

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
  checkConfirmed() {
    let alert = this.alertCtrl.create({
      title: 'DONE',
      message: 'Presence recorded successfully!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
