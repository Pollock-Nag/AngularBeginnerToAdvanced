import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    // clean input field
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
