import { Injectable, signal } from '@angular/core';
import { Iniciativa } from '../models/iniciativa.model';
import { Midia } from '../models/midia.model';
import { Parceria } from '../models/parceria.model';

@Injectable({ providedIn: 'root' })
export class SiteDataService {
  readonly iniciativas = signal<Iniciativa[]>([
    {
      id: 'caixote-do-saber',
      titulo: 'Caixote do Saber',
      descricao:
        'Criado para estabelecer uma conexão entre a comunidade e a leitura, a iniciativa traz a educação como principal ferramenta na luta contra a desigualdade. Através dos livros podem sonhar, criar e acreditar que tudo é possível.',
      imagem: 'https://lanternasprojetosocial.org/static/media/photo-caixote-saber.97266b1ff35efb706933.jpg',
      link: 'https://lanternasprojetosocial.org/iniciativas/caixote-do-saber',
    },
    {
      id: 'aulas-reforco',
      titulo: 'Aulas de Reforço',
      descricao:
        'Para crianças do 1º ao 5º ano, o Plantão Tira Dúvida tem como objetivo auxiliar em dificuldades específicas. Funciona como um plantão mesmo, não precisa marcar, é só chegar.',
      imagem: 'https://lanternasprojetosocial.org/static/media/reforco_v2.00c0dcc1ca7131207fc4.jpg',
      link: 'https://lanternasprojetosocial.org/iniciativas/aulas-de-reforco',
    },
    {
      id: 'gradua-lanternas',
      titulo: 'Gradua Lanternas',
      descricao:
        'Um pré-vestibular social com professores voluntários, para oferecer uma boa estrutura de estudo a quem não pode pagar um cursinho.',
      imagem: 'https://lanternasprojetosocial.org/static/media/gradua_v2.99058f672f2b9cab9bb4.jpg',
      link: 'https://lanternasprojetosocial.org/iniciativas/gradua-lanternas',
    },
  ]);

  readonly midias = signal<Midia[]>([
    {
      titulo: "'Lanternas na Batida': curso de percussão na Cidade de Deus recebe inscrições",
      url: 'https://extra.globo.com/blogs/corre-de-cria/post/2026/01/lanternas-na-batida-curso-de-percussao-na-cidade-de-deus-recebe-inscricoes-ate-esta-segunda-feira.ghtml',
      fonte: 'Extra',
    },
    {
      titulo: "Faixa em telhado na Cidade de Deus pede calma a policiais: 'Aqui tem sonhos, crianças e famílias'",
      url: 'https://oglobo.globo.com/rio/bairros/barra/noticia/2025/10/31/faixa-em-telhado-na-cidade-de-deus-pede-calma-a-policiais-aqui-tem-sonhos-criancas-e-familias.ghtml',
      fonte: 'O Globo',
    },
    {
      titulo: 'Primeiro emprego: mais de 100 vagas de jovem aprendiz serão oferecidas na Cidade de Deus',
      url: 'https://extra.globo.com/blogs/corre-de-cria/post/2025/08/primeiro-emprego-mais-de-100-vagas-de-jovem-aprendiz-serao-oferecidas-na-cidade-de-deus-neste-sabado.ghtml',
      fonte: 'Extra',
    },
  ]);

  readonly parcerias = signal<Parceria[]>([
    { nome: 'Mobi2Buy', url: 'https://mobi2buy.com/' },
    { nome: 'Grupo Humaitá', url: 'http://humaitagroup.com.br/' },
    { nome: 'Casa Shopping', url: 'https://www.casashopping.com/' },
    { nome: 'Shopping Metropolitano Barra', url: 'https://www.shoppingmetropolitanobarra.com.br/' },
    { nome: 'Instituto SYN', url: 'https://www.institutosyn.org.br/' },
    { nome: 'TJ-RJ', url: 'https://www.tjrj.jus.br/' },
    { nome: 'Grupo Águia', url: 'https://www.grupoaguia.com.br/' },
    { nome: 'Condortravel', url: 'https://www.condortravel.com/' },
  ]);
}