import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('animatedBr', { static: false }) animatedBr!: ElementRef;
  @ViewChild('animatedBr2', { static: false }) animatedBr2!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    setTimeout(() => {
      window.addEventListener("scroll", () => this.checkScroll());
      window.addEventListener("scroll", () => this.checkScroll2());

      this.checkScroll(); // Verificamos si ya está visible al cargar
      this.checkScroll2();
    }, 0);
  }

  checkScroll() {
    if (!this.animatedBr) return;
    const element = this.animatedBr.nativeElement;
    const rect = element.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      this.renderer.addClass(element, "visible");
    } 
  }

  checkScroll2() {
    if (!this.animatedBr2) return;
    const element2 = this.animatedBr2.nativeElement;
    const rect2 = element2.getBoundingClientRect();
    
    if (rect2.top < window.innerHeight && rect2.bottom >= 0) {
      this.renderer.addClass(element2, "visible");
    } 
  }
}
