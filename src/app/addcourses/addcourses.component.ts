import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {

  constructor(private api:ApiService) { }
  valueRead=()=>{
    let data={"courseTitle":this.courseTitle,
              "courseDescription":this.courseDescription,
              "courseDuration":this.courseDuration,
              "courseDate":this.courseDate,
              "courseVenue":this.courseVenue}
    console.log("Hello");
    this.api.addCourses(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }
  courseDate=""
  courseDescription=""
  courseDuration=""
  courseTitle=""
  courseVenue=""

  ngOnInit(): void {
  }

}
