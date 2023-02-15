import { Component, OnInit } from '@angular/core';
import { ListCarsService } from '../list-cars.service';

@Component({
  selector: 'app-own',
  templateUrl: './own.page.html',
  styleUrls: ['./own.page.scss'],
})
export class OwnPage implements OnInit {


  tab = [];
  constructor(private listCars: ListCarsService) {}
  ngOnInit(): void {
    console.log(this.tab);
    this.tab = this.listCars.getAllCares();
  }
}
