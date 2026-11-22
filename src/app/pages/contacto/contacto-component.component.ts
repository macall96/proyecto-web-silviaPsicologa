import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto-component.component.html',
  styleUrl: './contacto-component.component.scss'
})
export class ContactoComponent {
  private readonly formBuilder = inject(FormBuilder).nonNullable;
  private readonly hasText = Validators.pattern(/\S/);

  readonly contactForm = this.formBuilder.group({
    nombre: ['', [Validators.required, this.hasText, Validators.maxLength(80)]],
    apellidos: ['', [Validators.required, this.hasText, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    telefono: ['', [Validators.required, this.hasText, Validators.maxLength(40)]],
    disponibilidad: ['', [Validators.required, this.hasText, Validators.maxLength(240)]],
    motivo: ['', Validators.maxLength(3000)],
    terapia: ['', Validators.required]
  });

  readonly therapyOptions = [
    { value: 'anterior', label: 'Sí, he hecho terapia anteriormente' },
    { value: 'nunca', label: 'Todavía no he hecho terapia' },
    { value: 'actual', label: 'Estoy haciendo terapia actualmente' }
  ];

  submitted = false;
  simulationComplete = false;

  simulateSend(formElement: HTMLFormElement): void {
    this.simulationComplete = false;
    this.submitted = true;

    if (this.contactForm.invalid) {
      formElement.querySelector<HTMLElement>('input.ng-invalid, textarea.ng-invalid')?.focus();
      return;
    }

    this.contactForm.reset();
    this.submitted = false;
    this.simulationComplete = true;
  }
}
