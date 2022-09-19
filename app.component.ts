import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface INavLink {
  id : number;
  pathLink : string;
  label : string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';

  selectedNavLink : INavLink;
  navLinks : Array<INavLink> = [
    { pathLink : '/recruitment', label : 'Employee Info', id: 1 },
    { pathLink : '/recruitment', label : 'Employee', id: 2 }
  ];
  constructor(private router : Router){}

  routeToLink = (event : Event) => {
     this.router.navigate([this.selectedNavLink.pathLink]);
}
}
