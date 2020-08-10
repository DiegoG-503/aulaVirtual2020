import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { error } from '@angular/compiler/src/util';
import 'rxjs/add/operator/map';
@Injectable()
export class UsuarioService {

  constructor(public auth:AngularFireAuth) { }

  logout(){
    return this.auth.auth.signOut();
  }

  getInfoCuenta(){
    return this.auth.authState.map(auth => auth);
  }

  loginUsuario(user:string, pass:string){
    return new Promise((resolve, reject) => {
      this.auth.auth.signInWithEmailAndPassword(user, pass).then(resultado =>{
        resolve(resultado);
      }, error => {
        reject(error);
      })
      
    })
  }

}
