import { Component, OnInit } from '@angular/core';
import { ListCarsService } from '../list-cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {


  tab = [];
  constructor(private listCars: ListCarsService) {}
  ngOnInit(): void {
    console.log(this.tab);
    this.tab = this.listCars.getAllCares();
  }

}
