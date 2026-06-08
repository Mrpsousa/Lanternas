import { Component, inject } from '@angular/core';
import { SiteDataService } from '../../services/site-data.service';

@Component({
  selector: 'app-parcerias',
  standalone: true,
  templateUrl: './parcerias.html',
  styleUrl: './parcerias.scss',
})
export class ParceriasComponent {
  readonly data = inject(SiteDataService);
}
