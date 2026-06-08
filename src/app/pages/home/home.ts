import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero';
import { ProjetoComponent } from '../../sections/projeto/projeto';
import { RegiaoComponent } from '../../sections/regiao/regiao';
import { IniciativasComponent } from '../../sections/iniciativas/iniciativas';
import { DoacaoComponent } from '../../sections/doacao/doacao';
import { MidiaComponent } from '../../sections/midia/midia';
import { ParceriasComponent } from '../../sections/parcerias/parcerias';
import { ContatoComponent } from '../../sections/contato/contato';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProjetoComponent,
    RegiaoComponent,
    IniciativasComponent,
    DoacaoComponent,
    MidiaComponent,
    ParceriasComponent,
    ContatoComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
