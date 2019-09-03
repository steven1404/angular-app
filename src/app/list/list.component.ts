import { Component, OnInit } from '@angular/core';

export interface Laptop{
  name: string
  sales: number
  rating: number
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {

  Laptop = [
    {
      name: "DELL",
      sales: 50000,
      rating: 10
    },
    {
      name: "HP",
      sales: 45000,
      rating: 8
    },
    {
      name: "ASUS",
      sales: 42000,
      rating: 8
    },
    {
      name: "ALIENWARE",
      sales: 40000,
      rating: 7
    },
    {
      name: "LENOVO",
      sales: 37000,
      rating: 7
    },
    {
      name: "RAZER",
      sales: 35000,
      rating: 7
    },
    {
      name: "MICROSOFT",
      sales: 30000,
      rating: 6
    },
    {
      name: "HUAWEI",
      sales: 29000,
      rating: 6
    },
    {
      name: "APPLE",
      sales: 28000,
      rating: 6
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
