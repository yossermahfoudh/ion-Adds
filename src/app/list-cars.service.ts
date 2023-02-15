import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCarsService {
  private tabCars = [
    {
      id: 1,
      car_name: '  Peugeot e-208.  ',
      email:'Jelassi@gmail.com',
      description:' Car to buy  in Aouina',
      name: ' Jelassi',
     // author_id:1,
      category:"",
      phone:" 54521078",
      place:"Tunisia",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Peugeot_e-208_Allure_Genf_2019_1Y7A5132.jpg/1024px-Peugeot_e-208_Allure_Genf_2019_1Y7A5132.jpg',

    },
    {
      id: 2,
      car_name: ' Peugot 308',
      email:'NidhalJelassi@gmail.com',
      description:' This is a restaurant has been launched yestarday',
      name: 'Nidhal Jelassi',
    //  author_id:1,
      category:"",
      phone:"",
      place:"Tunisia",
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2020_-_Peugeot_308_II_%28B%29_-_55.jpg/1024px-2020_-_Peugeot_308_II_%28B%29_-_55.jpg'
    },
    {
      id: 3,
      car_name: 'Peugot 308 Black',
      email:'',
      description:' Come and check our new Syrian restaurant',
      name: 'Nidhal Jelassi',
     // author_id:1,
      category:"",
      phone:"",
      place:"Tunisia",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/2018_Peugeot_308_Active_1.2_Front.jpg/1280px-2018_Peugeot_308_Active_1.2_Front.jpg',

    },
  ];

  addCars(newCourse) {
    newCourse.id = this.tabCars[this.tabCars.length - 1].id + 1;
    console.log(newCourse);
    this.tabCars.push(newCourse);
  }

  getAllCares() {
    return this.tabCars;
  }

  getCarById(id) {
    return this.tabCars.find((c) => c.id == id);
  }

  deleteCar(course) {
    this.tabCars = this.tabCars.filter((c) => c.id != course.id);
    //console.log(tabCourses);

    // let i = this.tabCourses.indexOf(course);
    // this.tabCourses.splice(i, 1);
  }
  constructor() {}
}
