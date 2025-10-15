import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  async LoginUser(usuario: Usuario){
    await this.loginService.fazerLogin({
      email: usuario.email,
      password: usuario.password
    }).subscribe()
  }
}
