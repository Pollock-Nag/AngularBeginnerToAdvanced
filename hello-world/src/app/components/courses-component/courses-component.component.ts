import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'app-courses-component',
  templateUrl: './courses-component.component.html',
  styleUrls: ['./courses-component.component.css']
})
export class CoursesComponentComponent implements OnInit {

  title = 'List of Courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  colSpan = 2;

  // Logic for calling an HTTP Service

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

}
