import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaAleatoriaComponent } from './cita-aleatoria/cita-aleatoria.component';
import { GestionarCitaComponent } from './gestionar-cita/gestionar-cita.component';
import { AppConfigComponent } from './app-config/app-config.component';

const routes: Routes = [
  { path: 'cita-aleatoria', component: CitaAleatoriaComponent },
  { path: 'gestionar-cita', component: GestionarCitaComponent },
  { path: 'app-config', component: AppConfigComponent },
  { path: '', redirectTo: '/random-quote', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}