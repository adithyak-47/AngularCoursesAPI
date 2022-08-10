import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [{path:'',component:CoursesComponent},{path:'courses',component:CoursesComponent},{path:'addcourses',component:AddcoursesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
