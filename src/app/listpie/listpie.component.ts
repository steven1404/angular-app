import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-listpie',
  templateUrl: './listpie.component.html',
  styleUrls: ['./listpie.component.css']
})
export class ListpieComponent implements OnInit {

  public pieChartLabels: Label[] = ['DELL', 'HP', 'ASUS', 'ALIENWARE', 'LENOVO', 'RAZER', 'ACER','MICROSOFT','HUAWEI','APPLE'];
  public pieChartData: number[] = [50000, 45000, 42000, 40000, 37000, 35000, 31000, 30000, 29000, 28000];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
  {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(175, 122, 197)','rgba(163, 228, 215)','rgba(249, 231, 159)','rgba(245, 203, 167)','rgba(229, 231, 233)','rgba(247, 249, 249)', 'rgba(230, 176, 170)'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
