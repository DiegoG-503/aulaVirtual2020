import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  user: any;
  pass: any;
  constructor(private usuarioService:UsuarioService, public router:Router) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.usuarioService.loginUsuario(this.user, this.pass).then((resultado) => {
      this.router.navigate(['/administrador']);
    }).catch((error) =>{
      this.router.navigate(['/']);
    })
    
  }

}
