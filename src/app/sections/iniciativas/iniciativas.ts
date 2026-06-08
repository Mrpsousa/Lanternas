import { Component, inject } from '@angular/core';
import { SiteDataService } from '../../services/site-data.service';

@Component({
  selector: 'app-iniciativas',
  standalone: true,
  templateUrl: './iniciativas.html',
  styleUrl: './iniciativas.scss',
})
export class IniciativasComponent {
  readonly data = inject(SiteDataService);
}
