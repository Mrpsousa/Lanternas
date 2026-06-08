import { Component, inject } from '@angular/core';
import { SiteDataService } from '../../services/site-data.service';

@Component({
  selector: 'app-midia',
  standalone: true,
  templateUrl: './midia.html',
  styleUrl: './midia.scss',
})
export class MidiaComponent {
  readonly data = inject(SiteDataService);
}
