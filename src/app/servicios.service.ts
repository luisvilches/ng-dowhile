import { Injectable } from '@angular/core';
import {url} from "./configuraciones/config";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ServiciosService {
	
  constructor(private http: Http) { 

  }

  getServicios(tipo:string){

  	let headers = new Headers({ 
  		"Content-Type":"application/json",
  		"Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OWNhZTZiZDA2Zjg1ZTM5N2FhNzAwYjAiLCJpYXQiOjE1MDY0Njk3MjYsImV4cCI6MTUwNzY3OTMyNiwidXNlcm5hbWUiOiJMdWlzIn0.rlFBIIg29DEyPm3bkNLIaRbfUW3WS8w9Y4wA6-tm_2E" 
  	});

    let options = new RequestOptions({ headers: headers });
    let body = null;

  	return this.http.get(`${url}${tipo}`,options)
  	.map((res:Response) => res.json())

  }

  postFormContact(tipo:string,cuerpo:any = {}){

    var formData = new FormData();
    formData.append("name",cuerpo.name);
    formData.append("mail",cuerpo.mail);
    formData.append("telefono",cuerpo.telefono);
    formData.append("mensaje",cuerpo.mensaje);
    console.log(cuerpo)

    //let headers = new Headers();
    //headers.append('content-type','multipart/form-data');
    //let options = new RequestOptions({ headers: headers });

    return this.http.post(`${url}${tipo}`,formData)
    .map((res:Response) => res.json())

  }
}
