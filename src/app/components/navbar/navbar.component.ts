import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TieredMenu } from 'primeng/tieredmenu';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule, MenubarModule, TieredMenuModule]
})

export class NavbarComponent {
  @ViewChild('hamburgerMenu') hamburgerMenu!: TieredMenu;

  menuItems = [
    { label: 'Inicio', icon: 'pi pi-home', routerLink: '/' },
    {
      label: 'Enfoque y esencia',
      icon: 'pi pi-eye',
      items: [
        { label: 'Reflexión', routerLink: 'vision', icon: 'pi pi-angle-right'},
        { label: 'Valores', routerLink: 'valores', icon: 'pi pi-angle-right'}
      ]
    },
    {
      label: 'Sobre Mí',
      icon: 'pi pi-user',
      items: [
        { label: 'Sobre Mí', routerLink: 'sobre-mi', icon: 'pi pi-angle-right'},
        { label: 'Formación y experiencia', routerLink: 'formacionExp',icon: 'pi pi-angle-right'}
      ]
    },
    { label: 'Cómo puedo ayudarte',
      routerLink: '/ayuda', 
      icon: 'pi pi-heart-fill',
      items: [
        { label: 'Cómo trabajo', routerLink: 'gestionEmocional', icon: 'pi pi-angle-right'},
        { label: 'Sintomatología asociada', routerLink: 'sintomatologia',icon: 'pi pi-angle-right' }
      ] 
    },
    { label: 'Pedir cita', icon: 'pi pi-envelope', routerLink: 'contacto' }
  ];

  toggleMenu(event: Event) {
    this.hamburgerMenu.toggle(event); // Abre/cierra el menú hamburguesa
  }
}
