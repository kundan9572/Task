import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detail: any = {};
  constructor(private http: DetailsService) { }

  ngOnInit() {
    this.http.getDetails().subscribe(data => {
      this.detail = data
    });
      
  }
}
