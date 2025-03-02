import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar para *ngIf

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [CommonModule], // Asegurar que *ngIf funcione
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent {

  isModalOpen: boolean = false;
  modalImageSrc: string = '';

  constructor(private router: Router) {}

  irAGestionEmocional() {
    this.router.navigate(['gestionEmocional']);
  }

  openModal(): void {
    this.modalImageSrc = "./assets/images/ayudaImgDef.jpg"; // Corregido: Asigna la imagen
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
