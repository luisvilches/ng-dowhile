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

    let headers = new Headers({ 
      "Content-Type":"application/json",
      "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OWNhZTZiZDA2Zjg1ZTM5N2FhNzAwYjAiLCJpYXQiOjE1MDY0Njk3MjYsImV4cCI6MTUwNzY3OTMyNiwidXNlcm5hbWUiOiJMdWlzIn0.rlFBIIg29DEyPm3bkNLIaRbfUW3WS8w9Y4wA6-tm_2E" 
    });

    let options = new RequestOptions({ headers: headers });
    let body = cuerpo;

    return this.http.post(`${url}${tipo}`,body,options)
    .map((res:Response) => res.json())

  }
}
