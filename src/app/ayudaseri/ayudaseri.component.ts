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
  selector: 'app-ayudaseri',
  templateUrl: './ayudaseri.component.html',
  styleUrls: ['./ayudaseri.component.css']
})
export class AyudaseriComponent implements OnInit {

  constructor(private http: HttpClient , private router : Router) { }

  arrayinc = [];
  arraysint = [];
  url="http://localhost:8080/sireapp/src/api/api.php";
  surl="http://localhost:8080/sireapp/src/api/sintom.php";
  self1;


  isourl="http://localhost:8080/sireapp/src/api/insertinc.php";
  ispurl="http://localhost:8080/sireapp/src/api/insertpas.php";
  iscurl="http://localhost:8080/sireapp/src/api/insertcon.php";
  isiurl="http://localhost:8080/sireapp/src/api/api.php";

  ngOnInit() {

    var select = (<HTMLSelectElement>document.getElementById("selectinc"));


    var modal = document.getElementById("myModal");

// Get the button that opens the modal
 
// Get the <span> element that closes the modal
   var span = <HTMLSpanElement>document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 


// When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     modal.style.display = "none";
   }

// When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }


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


    var selpsint = (<HTMLSelectElement>document.getElementById("sintoma1"));

    var selssint = (<HTMLSelectElement>document.getElementById("sintoma2"));
    var seltsint = (<HTMLSelectElement>document.getElementById("sintoma3"));
    var selcsint = (<HTMLSelectElement>document.getElementById("sintoma4"));

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


        
        var option1 = document.createElement("option");
        option1.text = this.arraysint[i]["nombre"];
        option1.value = this.arraysint[i]["id"];

        var option2 = document.createElement("option");
        option2.text = this.arraysint[i]["nombre"];
        option2.value = this.arraysint[i]["id"];

        var option3 = document.createElement("option");
        option3.text = this.arraysint[i]["nombre"];
        option3.value = this.arraysint[i]["id"];

        var option4 = document.createElement("option");
        option4.text = this.arraysint[i]["nombre"];
        option4.value = this.arraysint[i]["id"];

        selpsint.add(option1);

    
        selssint.add(option2);

     
        seltsint.add(option3);

        selcsint.add(option4);

        


       


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

clean(){

  var incidencia = (<HTMLSelectElement>document.getElementById('selectinc'));
  incidencia.selectedIndex = 0
  var selpsint = (<HTMLSelectElement>document.getElementById("sintoma1"));

  var selssint = (<HTMLSelectElement>document.getElementById("sintoma2"));
  var seltsint = (<HTMLSelectElement>document.getElementById("sintoma3"));
  var selcsint = (<HTMLSelectElement>document.getElementById("sintoma4"));


  this.removeOptions(selpsint)
  this.removeOptions(selssint)
  this.removeOptions(seltsint)
  this.removeOptions(selcsint)

  var ipas1 = (<HTMLInputElement>document.getElementById("ipas1"));

  var ipas2 = (<HTMLInputElement>document.getElementById("ipas2"));
  var ipas3 = (<HTMLInputElement>document.getElementById("ipas3"));
  var ipas4 = (<HTMLInputElement>document.getElementById("ipas4"));

  var icon1 = (<HTMLInputElement>document.getElementById("icon1"));

  var icon2 = (<HTMLInputElement>document.getElementById("icon2"));
  var icon3 = (<HTMLInputElement>document.getElementById("icon3"));
  var icon4 = (<HTMLInputElement>document.getElementById("icon4"));

  ipas1.value = ""
  ipas2.value = ""
  ipas3.value = ""
  ipas4.value = ""


  icon1.value = ""
  icon2.value = ""
  icon3.value = ""
  icon4.value = ""


  var icost =(<HTMLSelectElement>document.getElementById('icost'));
  var isol =(<HTMLSelectElement>document.getElementById('isol'));

  icost.value = ""
  isol.value = ""


}

soluciones(){

  var incidencia = (<HTMLSelectElement>document.getElementById('selectinc'));

  var vinc =incidencia.options[incidencia.selectedIndex].value;

  var solucion = (<HTMLInputElement>document.getElementById('isol'));

  var costo = (<HTMLInputElement>document.getElementById('icost'));

  var selpsint = (<HTMLSelectElement>document.getElementById("sintoma1"));

  var selssint = (<HTMLSelectElement>document.getElementById("sintoma2"));
  var seltsint = (<HTMLSelectElement>document.getElementById("sintoma3"));
  var selcsint = (<HTMLSelectElement>document.getElementById("sintoma4"));


  var ipas1 = (<HTMLInputElement>document.getElementById("ipas1")).value;

  var ipas2 = (<HTMLInputElement>document.getElementById("ipas2")).value;
  var ipas3 = (<HTMLInputElement>document.getElementById("ipas3")).value;
  var ipas4 = (<HTMLInputElement>document.getElementById("ipas4")).value;

  var icon1 = (<HTMLInputElement>document.getElementById("icon1")).value;

  var icon2 = (<HTMLInputElement>document.getElementById("icon2")).value;
  var icon3 = (<HTMLInputElement>document.getElementById("icon3")).value;
  var icon4 = (<HTMLInputElement>document.getElementById("icon4")).value;

  var vpsint =selpsint.options[selpsint.selectedIndex].value;
  var vssint =selssint.options[selssint.selectedIndex].value;
  var vtsint =seltsint.options[seltsint.selectedIndex].value;
  var vcsint =selcsint.options[selcsint.selectedIndex].value;


  let params = new HttpParams();

    // Begin assigning parameters
  params = params.append('nombre', solucion.value);
  params = params.append('idinc', vinc);
  params = params.append('costo', costo.value);
  params = params.append('idsin1', vpsint);
  params = params.append('idsin2', vssint);
  params = params.append('idsin3', vtsint);
  params = params.append('idsin4', vcsint);

 
  this.http.get(this.isourl, { params: params }).subscribe(data => {

    console.log(data);

    var arrayt = [];
    arrayt = Object.values(data);

    let params1 = new HttpParams();

    // Begin assigning parameters
    params1 = params1.append('detalle', ipas1);
    params1 = params1.append('idsol', arrayt[0]['id']);
    params1 = params1.append('orden', '1');

     this.http.get(this.ispurl, { params: params1 }).subscribe(data => {

     }); 

     let params2 = new HttpParams();

    // Begin assigning parameters
    params2 = params2.append('detalle', ipas2);
    params2 = params2.append('idsol', arrayt[0]['id']);
    params2 = params2.append('orden', '2');

     this.http.get(this.ispurl, { params: params2 }).subscribe(data => {

     }); 


     let params3 = new HttpParams();

    // Begin assigning parameters
    params3 = params3.append('detalle', ipas3);
    params3 = params3.append('idsol', arrayt[0]['id']);
    params3 = params3.append('orden', '3');

     this.http.get(this.ispurl, { params: params3 }).subscribe(data => {

     }); 

     let params4 = new HttpParams();

    // Begin assigning parameters
    params4 = params4.append('detalle', ipas4);
    params4 = params4.append('idsol', arrayt[0]['id']);
    params4 = params4.append('orden', '4');

     this.http.get(this.ispurl, { params: params4 }).subscribe(data => {

     }); 


     let params5 = new HttpParams();

    // Begin assigning parameters
    params5 = params5.append('detalle', icon1);
    params5 = params5.append('idsol', arrayt[0]['id']);
    params5 = params5.append('orden', '1');

     this.http.get(this.iscurl, { params: params5 }).subscribe(data => {

     }); 


     let params6 = new HttpParams();

    // Begin assigning parameters
    params6 = params6.append('detalle', icon2);
    params6 = params6.append('idsol', arrayt[0]['id']);
    params6 = params6.append('orden', '2');

     this.http.get(this.iscurl, { params: params6 }).subscribe(data => {

     }); 


     let params7 = new HttpParams();

    // Begin assigning parameters
    params7 = params7.append('detalle', icon3);
    params7 = params7.append('idsol', arrayt[0]['id']);
    params7 = params7.append('orden', '3');

     this.http.get(this.iscurl, { params: params7 }).subscribe(data => {

     }); 

     let params8 = new HttpParams();

    // Begin assigning parameters
    params8 = params8.append('detalle', icon4);
    params8 = params8.append('idsol', arrayt[0]['id']);
    params8 = params8.append('orden', '4');

     this.http.get(this.iscurl, { params: params8 }).subscribe(data => {

      var modal = document.getElementById("myModal");

      modal.style.display = 'block'

      this.clean()

     }); 
     

  });

 
    
//  this.router.navigate(['/ayudandome']);

}



}
