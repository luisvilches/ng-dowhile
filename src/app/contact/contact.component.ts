import { Component, OnInit } from '@angular/core';
import {InformacionContacto} from "../interfaces/informacionContacto/informacionContacto";
import {ServiciosService} from "../servicios.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ServiciosService]
})
export class ContactComponent implements OnInit {

  	public info:InformacionContacto[];
  	public data: any = [];
    public obj:any = {};
    public mail:string;

	constructor(private _ServiciosService:ServiciosService){
		this.info = []
		_ServiciosService.getServicios("/infoContacto").subscribe(data => {
			this.info = data.data;
		});
	}

  onSubmit(){
    this._ServiciosService.postFormContact("/formContacto",{
      name:this.obj.name,
      mail:this.obj.mail,
      telefono:this.obj.telefono,
      mensaje:this.obj.mensaje

    }).subscribe(data => {
      if (data.message === "success") {
        document.getElementById('formulario').classList.add("hidde");
        document.getElementById('alert').classList.remove("hidde");
      } else {
        document.getElementById('formulario').classList.add("hidde");
        document.getElementById('alert').classList.remove("hidde");
        document.getElementById('alert').innerText = "No se pudo enviar el formulario, intentelo mas tarde, Gracias";
      }
    });
  }

  ngOnInit() {
  }

}