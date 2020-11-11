import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisService } from '../../shared/pais.service';
import { Pais } from '../../pais';

@Component({
  selector: 'app-crearactualizar',
  templateUrl: './crearactualizar.component.html',
  styleUrls: ['./crearactualizar.component.css'],
})
export class CrearactualizarComponent implements OnInit {
  public pais: Pais;
  constructor(private paisservice: PaisService, private router: Router) {}

  ngOnInit(): void {
    this.pais = this.paisservice.getter();
  }
  crearActualizar() {
    if (this.pais._id == undefined) {
      this.paisservice.crearPais(this.pais).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.paisservice.actualizarPais(this.pais).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
