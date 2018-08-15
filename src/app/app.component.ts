import { LayautService } from './shared-module/services/layaut.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  isSidebarVisible = false
  constructor(private layautService: LayautService) {}

  ngOnInit() {
    this.layautService.sidebarSource$.subscribe(isVisible => {
      this.isSidebarVisible = isVisible
    })
  }
}
