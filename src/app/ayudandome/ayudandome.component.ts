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
  selector: 'app-ayudandome',
  templateUrl: './ayudandome.component.html',
  styleUrls: ['./ayudandome.component.css']
})
export class AyudandomeComponent implements OnInit {

  constructor(private http: HttpClient,public modalService: NgbModal, public router1 : Router) { }
  rsol;
  rcon;
  rpas;
  valores = [];
  pasos = [];
  cons = [];
  actual = 0;
  url="http://localhost:8080/sireapp/src/api/solucion.php";
  urlp="http://localhost:8080/sireapp/src/api/pasos.php";
  urlc="http://localhost:8080/sireapp/src/api/cons.php";
  vpsint;
  vssint;
  vtsint;
  vcsint;
  vinc;

  ngOnInit() {
    this.vinc = localStorage.getItem('vinc');

    this.vpsint = localStorage.getItem('vpsint');
    this.vssint = localStorage.getItem('vssint');
    this.vtsint = localStorage.getItem('vtsint');
    this.vcsint = localStorage.getItem('vcsint');


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
      

    var self = this


       var modal1 = document.getElementById("myModal1");

       // Get the button that opens the modal
        
       // Get the <span> element that closes the modal
       var span1 = <HTMLSpanElement>document.getElementsByClassName("close1")[0];
       
       // When the user clicks the button, open the modal 
       
       
       // When the user clicks on <span> (x), close the modal
          span1.onclick = function() {
            modal1.style.display = "none";
            self.router1.navigate(['/intro']);
              
          }

          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
              
            }
            if (event.target == modal1) {
              modal1.style.display = "none";
              
              self.router1.navigate(['/intro']);
              
            }
          }
       
       // When the user clicks anywhere outside of the modal, close it
          



    console.log("El vinc "+this.vinc);
    console.log("El ins1 "+this.vpsint);
    console.log("El ins2 "+this.vssint);
    console.log("El ins3 "+this.vtsint);
    console.log("El ins4 "+this.vcsint);


    this.rsol = (<HTMLDivElement>document.getElementById('rsol'));
    this.rcon = (<HTMLDivElement>document.getElementById('rcon'));
    this.rpas = (<HTMLDivElement>document.getElementById('rpas'));
    console.log("El vinc "+this.vinc);
    
    let params1 = new HttpParams();
    params1= params1.append('idinc', this.vinc);
    params1= params1.append('idsin1', this.vpsint);
    params1= params1.append('idsin2', this.vssint);
    params1= params1.append('idsin3', this.vtsint);
    params1= params1.append('idsin4', this.vcsint);
//
//    localStorage.removeItem('vinc');
//    localStorage.removeItem('vpsint');
 //   localStorage.removeItem('vssint');
 //   localStorage.removeItem('vtsint');
 //   localStorage.removeItem('vcsint');


    this.http.get(this.url, { params: params1 }).subscribe(data => {
      console.log("la data"+data);

      
      this.valores=  Object.values(data);

      if(this.valores.length>0){
        let paramsp = new HttpParams();
        paramsp=paramsp.append('idsol', this.valores[this.actual]['id']);
  
        let paramsc = new HttpParams();
        paramsc=paramsc.append('idsol', this.valores[this.actual]['id']);
  
        var newLabels = document.createElement("label");
        newLabels.appendChild(document.createTextNode(this.valores[this.actual]['nombre']) );
        var bre = document.createElement("BR");
        this.rsol.appendChild(newLabels);
  
        this.http.get(this.urlp, { params: paramsp }).subscribe(datap => {
  
          this.pasos = Object.values(datap);
  
          for(var j=0 ; j < this.pasos.length; j++){
            var newLabel = document.createElement("label");
            newLabel.setAttribute("class", "f");
            var pasi = this.pasos[j]['detalle'] + " \n" ;
            var bre = document.createElement("BR");
    
    
            newLabel.appendChild(document.createTextNode(pasi) );
    
            this.rpas.appendChild(newLabel);
            this.rpas.appendChild(bre);
    
    
          }
        
        });
  
  
        this.http.get(this.urlc, { params: paramsc }).subscribe(datac => {
        
          this.cons = Object.values(datac);
  
          for(var j=0 ; j < this.cons.length; j++){
            var newLabel = document.createElement("label");
            newLabel.setAttribute("class", "f");
            var consi = this.cons[j]['detalle'] + " \n" ;
            var bre = document.createElement("BR");
    
    
            newLabel.appendChild(document.createTextNode(consi) );
    
            this.rcon.appendChild(newLabel);
            this.rcon.appendChild(bre);
    
    
          }
  
  
        });

      }

      else{

        console.log("ESTA VACIO")


        var modal = document.getElementById("myModal1");

        modal.style.display = 'block'

      }


   

    });

    
  

    


    
 

      

    //  this.rsol.appendChild(newLabel);
   

      

    


    console.log('El size es ' + this.valores.length);


  }

  completo(){
    this.router1.navigate(['/intro']);
    
  }


  othersol(){
     this.actual=this.actual+1;


      if(this.valores.length >= (this.actual+1)){

        while (this.rsol.firstChild) {
          this.rsol.removeChild(this.rsol.firstChild);
        }

      

      while (this.rcon.firstChild) {
        this.rcon.removeChild(this.rcon.firstChild);
      }

      while (this.rpas.firstChild) {
        this.rpas.removeChild(this.rpas.firstChild);
      }

      

      var paramsp = new HttpParams();
      paramsp=paramsp.append('idsol', this.valores[this.actual]['id']);
      console.log("El valor "+this.valores[this.actual]['id']);

      var paramsc = new HttpParams();
      paramsc=paramsc.append('idsol', this.valores[this.actual]['id']);

      var newLabels = document.createElement("label");
      newLabels.appendChild(document.createTextNode(this.valores[this.actual]['nombre']) );
      
      this.rsol.appendChild(newLabels);

      this.http.get(this.urlp, { params: paramsp }).subscribe(datap => {

        this.pasos = Object.values(datap);
        console.log("La data p "+this.pasos)

        for(var j=0 ; j < this.pasos.length; j++){
          var newLabel = document.createElement("label");
          newLabel.setAttribute("class", "f");
          var pasi = this.pasos[j]['detalle'] + " \n" ;
          var bre = document.createElement("BR");
          var bre1 = document.createElement("BR");
  
          newLabel.appendChild(document.createTextNode(pasi) );
  
          this.rpas.appendChild(newLabel);
          this.rpas.appendChild(bre);
          this.rpas.appendChild(bre1);
  
        }
      
      });


      this.http.get(this.urlc, { params: paramsc }).subscribe(datac => {
      
        this.cons = Object.values(datac);
        console.log("La data co"+this.cons)
        for(var j=0 ; j < this.cons.length; j++){
          var newLabel = document.createElement("label");
          newLabel.setAttribute("class", "f");
          var consi = this.cons[j]['detalle'] + " \n" ;
          var bre = document.createElement("BR");
          var bre1 = document.createElement("BR");
  
  
          newLabel.appendChild(document.createTextNode(consi) );
  
          this.rcon.appendChild(newLabel);
          this.rcon.appendChild(bre);
          this.rcon.appendChild(bre1);
  
        }


      });
      


      }
      else{


        var modal = document.getElementById("myModal1");

        modal.style.display = 'block'


      }


      



  }

}
