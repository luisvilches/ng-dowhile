import { Component, OnInit } from '@angular/core';
import {Services} from "../interfaces/services/services";
import {ServiciosService} from "../servicios.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [ServiciosService]
})

export class ServiceComponent implements OnInit {
  	public servicios:Services[];
  	public data: any = [];
	constructor(private _ServiciosService:ServiciosService){
		this.servicios = [];
		_ServiciosService.getServicios("/servicios").subscribe(data => {
			this.servicios = data.data;
		});
	}

  ngOnInit() {
  }

}
