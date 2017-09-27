import { Component, OnInit } from '@angular/core';
import {RedesSociales} from "../interfaces/redesSociales/redesSociales";
import {ServiciosService} from "../servicios.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ServiciosService]
})
export class FooterComponent implements OnInit {

  	public redes:RedesSociales[];
  	public data: any = [];

	constructor(private _ServiciosService:ServiciosService){
		this.redes = []
		_ServiciosService.getServicios("/rrss").subscribe(data => {
			this.redes = data.data;
		});
	}

  	ngOnInit() {}

}