import { Component, OnInit } from '@angular/core';
import {Casos} from "../interfaces/casos/casos";

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent implements OnInit {

 	public casos:Casos[];
	constructor(){
		this.casos = [
			{
				imagen:"http://www.appfactory.cl/img/casos/01.png",
				link:"",
				name:""
			},
			{
				imagen:"http://www.appfactory.cl/img/casos/02.png",
				link:"",
				name:""
			},
			{
				imagen:"http://www.appfactory.cl/img/casos/03.png",
				link:"",
				name:""
			},
			{
				imagen:"http://www.appfactory.cl/img/casos/02.png",
				link:"",
				name:""
			}
		]
	}

  ngOnInit() {
  }

}
