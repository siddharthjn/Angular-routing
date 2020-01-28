import { slideInAnimation } from './animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'angular-router-sample';
  getAnimationData(outlet: RouterOutlet) {
    // tslint:disable-next-line:no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
