import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { OfertaComponent } from './componentes/oferta/oferta.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { LogoutComponent } from './componentes/logout/logout.component';

import { UsuarioService } from './servicios/usuario.service';

import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { FormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AuthGuard } from './seguridad/auth.guard';

import { AngularFirestore } from 'angularfire2/firestore';
import { AdminesComponent } from './pages/admines/admines.component';
import { EncargadosComponent } from './pages/encargados/encargados.component';
import { ProfesComponent } from './pages/profes/profes.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { GAcademicaComponent } from './pages/g-academica/g-academica.component';
import { NotasComponent } from './pages/notas/notas.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import { GradosComponent } from './pages/grados/grados.component';
import { MisGradosComponent } from './pages/mis-grados/mis-grados.component';
import { AvisosComponent } from './pages/avisos/avisos.component'; 

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'calendar', component: CalendarioComponent},
  { path: 'oferta', component: OfertaComponent},
  { path: 'ingreso', component: IngresoComponent},
  { path: 'contacto', component: ContactosComponent},
  { path: 'administrador', component: AdministradorComponent, canActivate: [AuthGuard]},
  { path: 'profesor', component: ProfesorComponent},
  { path: 'alumno', component: AlumnoComponent},
  { path: 'admines', component: AdminesComponent},
  { path: 'encargado', component: EncargadosComponent},
  { path: 'profe', component: ProfesComponent},
  { path: 'alumnos', component: AlumnosComponent},
  { path: 'gAcademica', component: GAcademicaComponent},
  { path: 'nota', component: NotasComponent},
  { path: 'actividad', component: ActividadesComponent},
  { path: 'grado', component: GradosComponent},
  { path: 'migrado', component: MisGradosComponent},
  { path: 'avisos', component: AvisosComponent},
  { path: '**', component: LogoutComponent}
]

FullCalendarModule.registerPlugins([ 
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CalendarioComponent,
    OfertaComponent,
    IngresoComponent,
    ContactosComponent,
    AdministradorComponent,
    ProfesorComponent,
    AlumnoComponent,
    LogoutComponent,
    InicioComponent,
    AdminesComponent,
    EncargadosComponent,
    ProfesComponent,
    AlumnosComponent,
    GAcademicaComponent,
    NotasComponent,
    ActividadesComponent,
    GradosComponent,
    MisGradosComponent,
    AvisosComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FullCalendarModule
    
  ],
  providers: [UsuarioService, AngularFireAuth, AuthGuard, AngularFirestore],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
