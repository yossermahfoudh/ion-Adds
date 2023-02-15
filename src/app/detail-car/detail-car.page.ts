import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListCarsService } from '../list-cars.service';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.page.html',
  styleUrls: ['./detail-car.page.scss'],
})
export class DetailCarPage implements OnInit {
  car;
  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private listCars: ListCarsService,
    private router: Router
  ) {}

  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.car = this.listCars.getCarById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Are you sure to delete this course ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.listCars.deleteCar(this.car);
            this.router.navigateByUrl('/cars');
          },
        },
      ],
    });

    await alert.present();
  }
}


