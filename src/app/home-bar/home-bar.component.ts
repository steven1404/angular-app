import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrls: ['./home-bar.component.css']
})

export class HomeBarComponent implements OnInit {
  public barChartLabels: Label[] = ['DELL', 'HP', 'ASUS', 'ALIENWARE', 'LENOVO', 'RAZER', 'ACER','MICROSOFT','HUAWEI','APPLE'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [50000, 45000, 42000, 40000, 37000, 35000, 31000, 30000, 29000, 28000], label: 'Sales $'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
