import { Injectable } from '@angular/core'
import { LayautService } from '../shared-module/services/layaut.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private credentials = {
    login: 'admin',
    password: 'admin',
  }

  private isUserLoggedIn = false

  constructor(private layautService: LayautService) {}

  login(login, password) {
    return new Promise((resolve, reject) => {
      if (login === this.credentials.login && password === this.credentials.password) {
        this.isUserLoggedIn = true
        this.layautService.showSidebar()
        resolve()
      } else {
        this.layautService.hideSidebar()
        reject()
      }
    })
  }

  logout() {
    this.isUserLoggedIn = false
    this.layautService.hideSidebar()
  }

  isLoogedIn() {
    return this.isUserLoggedIn
  }
}
