import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Items } from '../../providers';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  amount;
  presences = 0;
  thumb = "https://via.placeholder.com/150"
  @ViewChild('doughnutCanvas') doughnutCanvas;
  private doughnutChart: Chart

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items,private _http: HttpClient) {
    this.item = navParams.get('item') || items.defaultItem;
    
    
  }
  ionViewDidLoad(){
    this.amount = this.item.amount;
    console.log(this.amount)
    this._http.get("http://localhost:8080/verify/1/1").subscribe(data => {
      this.presences = data['ammount']
      console.log(this.presences)
      this.doughnutChartMethod(this.amount,this.presences);

    })
  }

  doughnutChartMethod(amount,presences) {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Presences', 'Classes', ],
        datasets: [{
          label: '# of Votes',
          data: [presences,amount ],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
           
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            
          ]
        }]
      }
    });
  }

}
