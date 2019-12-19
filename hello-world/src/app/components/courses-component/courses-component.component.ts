import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-component',
  templateUrl: './courses-component.component.html',
  styleUrls: ['./courses-component.component.css']
})
export class CoursesComponentComponent implements OnInit {

  title = 'List of Courses';
  courses;

  // Logic for calling an HTTP Service 

  constructor() { }

  ngOnInit() {
  }

}
