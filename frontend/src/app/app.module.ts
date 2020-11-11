import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearactualizarComponent } from './components/crearactualizar/crearactualizar.component';
import { ListarComponent } from './components/listar/listar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaisService } from './shared/pais.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'crearActualizar', component: CrearactualizarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CrearactualizarComponent,
    ListarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [PaisService],
  bootstrap: [AppComponent],
})
export class AppModule {}
