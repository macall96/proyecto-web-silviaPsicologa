import { DOCUMENT, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-legal',
  standalone: true,
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {
  private readonly page = inject(DOCUMENT);
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  readonly document = inject(ActivatedRoute).snapshot.data['document'] as 'aviso' | 'privacidad' | 'cookies';

  readonly heading = {
    aviso: 'Aviso legal. Ley de los Servicios de la Sociedad de la Información (LSSI)',
    privacidad: 'Política de privacidad y protección de datos',
    cookies: 'Política de cookies'
  }[this.document];

  returnToWebsite(): void {
    const tab = this.page.defaultView;
    if (!tab) return;

    const previousPage = this.page.referrer ? new URL(this.page.referrer) : null;

    if (previousPage?.origin === tab.location.origin) {
      if (tab.history.length > 1) {
        tab.history.back();
        return;
      }

      tab.close();
      if (tab.closed) return;

      const previousPath = this.location.normalize(previousPage.pathname + previousPage.search + previousPage.hash);
      if (previousPath !== this.router.url) {
        void this.router.navigateByUrl(previousPath);
        return;
      }
    }

    void this.router.navigateByUrl('/');
  }
}
