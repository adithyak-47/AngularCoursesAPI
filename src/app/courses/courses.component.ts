import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewCourses().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }
  data:any=[]

  ngOnInit(): void {
  }

}
