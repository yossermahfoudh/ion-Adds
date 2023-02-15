import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.page.html',
  styleUrls: ['./restaurent.page.scss'],
})
export class RestaurentPage implements OnInit {

  tab = [];
  constructor(private listCourses: ListCoursesService) {}
  ngOnInit(): void {
    console.log(this.tab);
    this.tab = this.listCourses.getAllCourses();
  }
}
