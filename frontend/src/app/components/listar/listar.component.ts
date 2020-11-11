import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../shared/pais.service';
import { Pais } from '../../pais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  public paises: Pais[];
  constructor(private _paisService: PaisService, private router: Router) {}

  ngOnInit(): void {
    this.listarPaises();
  }

  listarPaises() {
    this._paisService.listarPaises().subscribe(
      (data) => {
        console.log(data);
        this.paises = data['msg'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Actualizar(pais) {
    this._paisService.setter(pais);
    this.router.navigate(['/crearActualizar']);
  }

  Eliminar(pais) {
    this._paisService.eliminarPais(pais._id).subscribe(
      (data) => {
        this.paises.splice(this.paises.indexOf(pais), 1);
      },
      (error) => {}
    );
  }
}
