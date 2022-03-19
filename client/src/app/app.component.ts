import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'client';

  activeModule: string = 'chat';

  toggleModule(module: string) {
    this.activeModule = module;
  }
}
