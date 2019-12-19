import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-component',
  templateUrl: './courses-component.component.html',
  styleUrls: ['./courses-component.component.css']
})
export class CoursesComponentComponent implements OnInit {

  title = 'List of Courses';
  courses = ['course1', 'course2', 'course3'];

  constructor() { }

  ngOnInit() {
  }

}
