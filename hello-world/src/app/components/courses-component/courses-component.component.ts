import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { EmailService } from '../../email.service';
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
  email = 'me@gmail.com';
  texto = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus earum qui voluptatem,
  magni vitae dolor perspiciatis minima pariatur quibusdam vel quasi corrupti
  illum quas dolorem blanditiis nostrum? Reprehenderit, similique?`;

  // Pipes
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.35,
    releaseDate: new Date(2016, 3, 1)
  };

  // Binding Class
  isActive = true;

  // Event Binding
  onSave($event) {
    console.log('Button was clicked!', $event);
  }

  // Event Filtering
  onKeyUp(texto) {
    console.log('ENTER was pressed');
    console.log(texto);
  }

  onKeyUpTwoWayBinding() {
    console.log(this.email);
  }

  onWayNgModel() {
    console.log(this.email);
  }

  // Logic for calling an HTTP Service

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

}
