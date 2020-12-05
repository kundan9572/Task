import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  AudiAvailable() {
    return true;
  }

  BMWAvailable() {
    return false;
  }

  promiseval;

  audi = {
    name: 'audi',
    mileage: '20'
  }

  bmw = {
    name: 'BMW',
    mileage: '22'
  }

  notAvail = {
    name: 'Not Available',
    status: 'Failed'
  }


  ngOnInit(): void {
  

    let buyCar = new Promise((resolve, reject) => {
      if (this.AudiAvailable()) {
        return setTimeout(() => {
          //resolve("Audi available let purchased it.")
          resolve(this.audi)
        }, 50000)
      }
      else if (this.BMWAvailable()) {
        return setTimeout(() => {
          //resolve("BMW available let purchased it.")
          resolve(this.bmw)
        }, 50000)
      }
      else {
        return setTimeout(() => {
          //reject("None of the Car is Available now.")
          reject(this.notAvail)
        }, 50000)
      }
    })

    buyCar.then(res => {
      console.log(res);
      this.promiseval = res;
    }).catch(res => {
      console.log(res)
      this.promiseval = res;
    })

  }
}
