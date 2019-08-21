import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal, NgbModalModule,NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpClient , private router : Router,public modalService: NgbModal) { }

  url="http://localhost:8080/sireapp/src/api/insertninc.php";
  isurl="http://localhost:8080/sireapp/src/api/insertsin.php";

  order=0;
  idinc;

  ngOnInit() {

    var modal = document.getElementById("myModal");
    var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
 
// Get the <span> element that closes the modal
   var span = <HTMLSpanElement>document.getElementsByClassName("close")[0];
   var span1 = <HTMLSpanElement>document.getElementsByClassName("close1")[0];

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
     else if (event.target == modal1){
      modal1.style.display = "none";
     }
   }

   span1.onclick = function() {
    modal1.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it



  }

  clean(){

    var isim1 = (<HTMLInputElement>document.getElementById("isim1"));

    isim1.innerText=''


    this.modalService.dismissAll;
  }

  createinc(){


    this.order=this.order+1;

    var nombre = (<HTMLInputElement>document.getElementById("ninc"));
    var isim1 = (<HTMLInputElement>document.getElementById("isim1"));




    if(this.order==1){

     

      console.log("Se ingreso sintoma")

      let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('nombre', nombre.value);


     this.http.get(this.url, { params: params }).subscribe(data => {
         
        var arrayni = [];
        arrayni =  Object.values(data);


        this.idinc=arrayni[0]['id'];
        let params1 = new HttpParams();

    // Begin assigning parameters

        console.log("El id de incidente es:"+this.idinc)
        console.log("El orden es: "+this.order.toString())
        
        params1= params1.append('orden', this.order.toString());
        params1 = params1.append('idinci', this.idinc);
        params1= params1.append('nombre', isim1.value);

        this.http.get(this.isurl, { params: params1 }).subscribe(data1 => {
          console.log("La data es:"+Object.values(data1))
          var modal1 = document.getElementById("myModal1");
          modal1.style.display = "block";
          nombre.disabled = true
          isim1.innerText=''
        
        }); 



     }); 


    }
    else{

      
     
         
     
        let params1 = new HttpParams();

    // Begin assigning parameters
        console.log("El id de incidente es:"+this.idinc)
        console.log("El orden es: "+this.order.toString())
        
        
        params1= params1.append('orden', this.order.toString());
        params1 = params1.append('idinci', this.idinc);
        params1= params1.append('nombre', isim1.value);

        this.http.get(this.isurl, { params: params1 }).subscribe(data1 => {

          console.log("La data es:"+Object.values(data1))
          var modal = document.getElementById("myModal");
          modal.style.display = "block";
          
        
        }); 



   

    }




    

    

    

  }


  createincl(){

    this.order=this.order+1;

    var nombre = (<HTMLInputElement>document.getElementById("ninc"));
    var isim1 = (<HTMLInputElement>document.getElementById("isim1"));


    if(this.order==1){

     

      let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('nombre', nombre.value);


     this.http.get(this.url, { params: params }).subscribe(data => {
         
        var arrayni = [];
        arrayni =  Object.values(data);


        this.idinc=arrayni[0]['id'];
        let params1 = new HttpParams();

    // Begin assigning parameters

        
        
        params1= params1.append('orden', this.order.toString());
        params1 = params1.append('idinci', this.idinc);
        params1= params1.append('nombre', isim1.value);

        this.http.get(this.isurl, { params: params1 }).subscribe(data => {

          this.router.navigateByUrl('/ayudaseri');
        
        }); 



     }); 


    }
    else{

      
     
         
     
        let params1 = new HttpParams();

    // Begin assigning parameters

        
        
        params1= params1.append('orden', this.order.toString());
        params1 = params1.append('idinci', this.idinc);
        params1= params1.append('nombre', isim1.value);

        this.http.get(this.isurl, { params: params1 }).subscribe(data => {

          this.router.navigateByUrl('/ayudaseri');
        
        }); 



   

    }

  }




}
