import { Router } from '@angular/router'
import { AuthService } from './../auth/auth.service'
import { Component, OnInit } from '@angular/core'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  login = ''
  password = ''

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .login(this.login, this.password)
      .then(this.onSubmitSuccess.bind(this), this.onSubmitFailure)
  }

  private onSubmitSuccess() {
    this.router.navigate(['/cars'])
  }

  private onSubmitFailure() {
    console.log('Nie udało się zalogować')
  }
}
