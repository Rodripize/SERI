import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Component({
  selector: 'app-ayudando',
  templateUrl: './ayudando.component.html',
  styleUrls: ['./ayudando.component.css']
})
export class AyudandoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  vpsint;
  vssint;
  vtsint;

  vcsint;


  ngOnInit() {
    this.getincident();


    
  }

  arrayinc = [];
  url="http://localhost:8080/sireapp/src/api/api.php";
  self1;

  getincident(){

    var select = (<HTMLSelectElement>document.getElementById("selectinc"));

  

    this.self1=this;
    select.addEventListener("change",  (e) =>{

      var value = (select.options[select.selectedIndex].value);
      var valuef:number  = parseInt(value);
      if(valuef > 0)
      {
       this.getsintom(valuef);
        
      }
    }, false);
  


    this.http.get(this.url).subscribe(data => {
      console.log(data);

      this.arrayinc = Object.values(data);
      console.log(this.arrayinc);

     
      for(var i=0;i<this.arrayinc.length;i++){
        var option = document.createElement("option");
        option.text = this.arrayinc[i]["nombre"];
        option.value = this.arrayinc[i]["id"];
        select.add(option);


      }


   //   this.arrayinc = data;

  });

  }

  getsintom(incident){


    console.log("El value de incident"+incident);
  }

}
