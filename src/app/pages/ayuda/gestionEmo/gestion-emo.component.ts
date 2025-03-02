import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-emo',
  standalone: true,
  imports: [],
  templateUrl: './gestion-emo.component.html',
  styleUrl: './gestion-emo.component.scss'
})
export class GestionEmoComponent {
   constructor(private router: Router) {}
    
      irASintomatologia() {
        this.router.navigate(['sintomatologia']);
      }
}
