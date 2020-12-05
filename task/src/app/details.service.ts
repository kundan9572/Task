import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from './student';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private url: string = "/assets/student/student.json";
  constructor(private http: HttpClient) { }

  getDetails(): Observable<Students[]>{
    return this.http.get<Students[]>(this.url);
  }
}
