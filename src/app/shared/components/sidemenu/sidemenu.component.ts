import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      title: 'basicos',
      route: './template/basicos'
    },
    {
      title: 'dinamicos',
      route: './template/dinamicos'
    },
    {
      title: 'switches',
      route: './template/switches'
    }
  ];


  reactivesMenu: MenuItem[] = [
    {
      title: 'basicos',
      route: './reactive/basicos'
    },
    {
      title: 'dinamicos',
      route: './reactive/dinamicos'
    },
    {
      title: 'switches',
      route: './reactive/switches'
    }
  ];

}
