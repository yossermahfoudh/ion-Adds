import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCoursesService {
  private tabCourses = [
    {
      id: 1,
      res_name: ' Restouni ',
      email:'Jelassi@gmail.com',
      description:' A new restaurant has launched in Aouina',
      name: ' Jelassi',
     // author_id:1,
      category:"",
      phone:" 54521078",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/28/Restaurante_Macaws%2C_Mazatl%C3%A1n%2C_26_de_octubre_de_2022_02.jpg',

    },
    {
      id: 2,
      res_name: ' Zin e chemmy',
      email:'NidhalJelassi@gmail.com',
      description:' This is a restaurant has been launched yestarday',
      name: 'Nidhal Jelassi',
    //  author_id:1,
      category:"",
      phone:"",
      image:'https://upload.wikimedia.org/wikipedia/commons/c/c4/DSC_1991-MR_80-RestaurantLeNeptune.jpg'
    },
    {
      id: 3,
      res_name: 'Abou Joud',
      email:'',
      description:' Come and check our new Syrian restaurant',
      name: 'Nidhal Jelassi',
     // author_id:1,
      category:"",
      phone:"",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d3/TT_CMZ-AF-GT_E_2-1_9_12_-_Interior_do_Pavilh%C3%A3o_Restaurante_Beira_Terrasse.jpg ',

    },
  ];

  addCourse(newCourse) {
    newCourse.id = this.tabCourses[this.tabCourses.length - 1].id + 1;
    console.log(newCourse);
    this.tabCourses.push(newCourse);
  }

  getAllCourses() {
    return this.tabCourses;
  }

  getCourseById(id) {
    return this.tabCourses.find((c) => c.id == id);
  }

  deleteCourse(course) {
    this.tabCourses = this.tabCourses.filter((c) => c.id != course.id);
    //console.log(tabCourses);

    // let i = this.tabCourses.indexOf(course);
    // this.tabCourses.splice(i, 1);
  }
  constructor() {}
}
