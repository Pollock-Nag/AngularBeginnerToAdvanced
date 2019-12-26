import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NestedformComponent } from './nestedform/nestedform.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';


const routes: Routes = [
  {
    path: '',
    component: SignupFormComponent
  },
  {
    path: 'nested',
    component: NestedformComponent
  },
  {
    path: 'formarray',
    component: NewCourseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
