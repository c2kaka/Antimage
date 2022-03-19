import { Component, OnInit } from '@angular/core';
import {RxjsService} from "./rxjs.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.sass']
})
export class RxjsComponent implements OnInit {

  constructor(private rxjsService: RxjsService) { }

  ngOnInit(): void {
  }

  update() {
    this.observeSave().subscribe(
      (res) => {
        console.log(res);
      },
    );
  }

  publish() {
    this.observeSave().subscribe(
      (res) => {
        console.log(res);
      },
    );
  }

  observeSave(): Observable<any> {
    return this.save();
  }

  save(): Observable<any>  {
    return this.rxjsService.update();
  }
}
