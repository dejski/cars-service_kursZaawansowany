import { Component, OnInit } from '@angular/core';
import {Car} from "../models/car";

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

  cars : Car[] = [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2017',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'Mercedes 124',
      plate: 'GDA222Z',
      deliveryDate: '25-04-2017',
      deadline: '07-05-2017',
      client: {
        firstName: 'Mateusz',
        surname: 'Osinski'
      },
      cost: 400,
      isFullyDamaged: false
    },
    {
      id: 3,
      model: 'Ford Mondeo',
      plate: 'GWE24111',
      deliveryDate: '21-04-2017',
      deadline: '06-06-2017',
      client: {
        firstName: 'Artur',
        surname: 'Gubala'
      },
      cost: 600,
      isFullyDamaged: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
