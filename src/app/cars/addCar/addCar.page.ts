import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCarsService } from 'src/app/list-cars.service';

@Component({
  selector: 'app-add',
  templateUrl: './addCar.page.html',
  styleUrls: ['./addCar.page.scss'],
})
export class AddCarPage implements OnInit {
  constructor(private courseSer: ListCarsService, private router: Router) {}

  ngOnInit() {}

  addNewCar(valueForm) {
    console.log(valueForm);
    this.courseSer.addCars(valueForm);
    this.router.navigateByUrl('/cars');
  }
}
