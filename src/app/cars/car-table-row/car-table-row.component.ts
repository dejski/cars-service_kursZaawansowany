import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Car } from '../models/car'

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[cs-car-table-row]',
  templateUrl: './car-table-row.component.html',
})
export class CarTableRowComponent implements OnInit {
  @Input()
  car: Car
  @Output()
  removedCar = new EventEmitter()

  constructor() {}

  ngOnInit() {}

  removeCar(car, event) {
    event.stopPropagation()
    this.removedCar.emit(car)
  }
}
