import { Router } from '@angular/router'
import { AuthService } from './../../auth/auth.service'
import { Component, OnInit } from '@angular/core'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
