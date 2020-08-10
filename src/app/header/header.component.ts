import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;
  nombre: string;
  email: string;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getInfoCuenta().subscribe(resultado => {
      if (resultado){
        this.isLogin = true;
        this.nombre = resultado.displayName;
        this.email = resultado.email;
      } else {
        this.isLogin = false;
      }
    })
  }

  salir() {
    this.usuarioService.logout();
  }

}
