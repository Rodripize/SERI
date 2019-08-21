import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  constructor(private http: HttpClient , private router : Router) { }

  
  arrayinc = [];
  arraysint = [];
  url="http://localhost:8080/sireapp/src/api/api.php";
  surl="http://localhost:8080/sireapp/src/api/sintom.php";
  self1;

  ngOnInit() {

    var select = (<HTMLSelectElement>document.getElementById("selectinc"));


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


    this.self1=this;
    select.addEventListener("change",  (e) =>{

      var value = (select.options[select.selectedIndex].value);
      var valuef:number  = parseInt(value);
      if(valuef > 0)
      {
       this.getsintom(valuef);
        
      }
    }, false);


  }



  diagnostic(){
    var nombre = (<HTMLInputElement>document.getElementById('nom')).value;
    var selpsint = (<HTMLSelectElement>document.getElementById('selpsint'));
    var selected1 = selpsint.selectedIndex;
    var selssint = (<HTMLSelectElement>document.getElementById('selssint'));
    var selected2 = selssint.selectedIndex;
    var seltsint = (<HTMLSelectElement>document.getElementById('seltsint'));
    var selected3 = seltsint.selectedIndex;
    var selcsint = (<HTMLSelectElement>document.getElementById('selcsint'));
    var selected4 = selcsint.selectedIndex;
    console.log("Se inicio diagnostic");

  }

  getsintom(incident){

    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('idinc', incident);

    var option1 = document.createElement("option");
        option1.text = "Seleccione su sintoma";
        option1.value = "a";
        var option2 = document.createElement("option");
        option2.text = "Seleccione su sintoma";
        option2.value = "b";
        var option3 = document.createElement("option");
        option3.text = "Seleccione su sintoma";
        option3.value = "c";
        var option4 = document.createElement("option");
        option4.text = "Seleccione su sintoma";
        option4.value = "d";


    var selpsint = (<HTMLSelectElement>document.getElementById("selpsint"));

    var selssint = (<HTMLSelectElement>document.getElementById("selssint"));
    var seltsint = (<HTMLSelectElement>document.getElementById("seltsint"));
    var selcsint = (<HTMLSelectElement>document.getElementById("selcsint"));

    this.removeOptions(selpsint);
    this.removeOptions(selssint);
    this.removeOptions(seltsint);
    this.removeOptions(selcsint);

    selpsint.add(option1);
    selssint.add(option2);
    seltsint.add(option3);
    selcsint.add(option4);

    this.http.get(this.surl, { params: params }).subscribe(data => {
      console.log(data);

      this.arraysint = Object.values(data);
      console.log(this.arraysint);

     
      for(var i=0;i<this.arraysint.length;i++){



        var option = document.createElement("option");
        option.text = this.arraysint[i]["nombre"];
        option.value = this.arraysint[i]["id"];
        selpsint.add(option);


          var option1 = document.createElement("option");
          option1.text = this.arraysint[i]["nombre"];
          option1.value = this.arraysint[i]["id"];
          selssint.add(option1);


          var option2 = document.createElement("option");
          option2.text = this.arraysint[i]["nombre"];
          option2.value = this.arraysint[i]["id"];
          seltsint.add(option2);

   
    
          var option3 = document.createElement("option");
          option3.text = this.arraysint[i]["nombre"];
          option3.value = this.arraysint[i]["id"];
          selcsint.add(option3);

        


       


      }

      selpsint.addEventListener("change",  (e) =>{

       
        if(selpsint.selectedIndex == selssint.selectedIndex || selpsint.selectedIndex==seltsint.selectedIndex || selpsint.selectedIndex==selcsint.selectedIndex){

          selpsint.selectedIndex=0
        }
        else{

        }


        
      }, false);


      selssint.addEventListener("change",  (e) =>{
        if(selssint.selectedIndex == selpsint.selectedIndex || selssint.selectedIndex==seltsint.selectedIndex || selssint.selectedIndex==selcsint.selectedIndex){

          selssint.selectedIndex=0
        }
        else{

        }
       
      }, false);


      seltsint.addEventListener("change",  (e) =>{

        if(seltsint.selectedIndex == selpsint.selectedIndex || seltsint.selectedIndex==selssint.selectedIndex || seltsint.selectedIndex==selcsint.selectedIndex){

          seltsint.selectedIndex=0
        }
        else{

        }
     
      }, false);


      selcsint.addEventListener("change",  (e) =>{

        if(selcsint.selectedIndex == selpsint.selectedIndex || selcsint.selectedIndex==selssint.selectedIndex || selcsint.selectedIndex==seltsint.selectedIndex){

          selcsint.selectedIndex=0
        }
        else{

        }
    
      }, false);


   //   this.arrayinc = data;

  });
    


    console.log("El value de incident"+incident);
  }

  removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}


soluciones(){

  var incidencia = (<HTMLSelectElement>document.getElementById('selectinc'));

  var vinc =incidencia.options[incidencia.selectedIndex].value;


  var selpsint = (<HTMLSelectElement>document.getElementById("selpsint"));

  var selssint = (<HTMLSelectElement>document.getElementById("selssint"));
  var seltsint = (<HTMLSelectElement>document.getElementById("seltsint"));
  var selcsint = (<HTMLSelectElement>document.getElementById("selcsint"));

  var vpsint =selpsint.options[selpsint.selectedIndex].value;
  var vssint =selssint.options[selssint.selectedIndex].value;
  var vtsint =seltsint.options[seltsint.selectedIndex].value;
  var vcsint =selcsint.options[selcsint.selectedIndex].value;

  localStorage.setItem('vinc', vinc);
  localStorage.setItem('vpsint', vpsint);
  localStorage.setItem('vssint', vssint);
  localStorage.setItem('vtsint', vtsint);
  localStorage.setItem('vcsint', vcsint);


  
  this.router.navigate(['/ayudandome']);

}

}
