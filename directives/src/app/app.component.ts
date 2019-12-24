import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  courses = [1, 2, 3];
  canSave = true;

  // NgSwitchCase
  viewMode = 'map';

  // NgFor
  coursesFor = [
    { id: 1, name: 'Course 1'},
    { id: 2, name: 'Course 2'},
    { id: 3, name: 'Course 3'},
    { id: 4, name: 'Course 4'},
  ];

  coursesLoad;

  onAdd() {
    this.coursesFor.push({id: 5, name: 'Course 5'});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.coursesFor.splice(index, 1);
  }
  onChange(course) {
    course.name = 'UPDATED'
  }

  loadCoursesMethod() {
    this.coursesLoad = [
      { id: 1, name: 'Course load 1'},
      { id: 2, name: 'Course load 2'},
      { id: 3, name: 'Course load 3'}
    ]
  }

  trackCourse(index, courseLoad) {
    return courseLoad ? courseLoad.id : undefined;
  }
}
