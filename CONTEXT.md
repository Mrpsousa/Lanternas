# CONTEXT — Lanternas Projeto Social

## Visão Geral

Site institucional do **Lanternas Projeto Social** (antigo "NÓIZ Projeto Social"), construído com **Angular 21.1** com SSR (Server-Side Rendering) e Docker.

---

## Stack

| Tecnologia | Versão |
|---|---|
| Angular | ~21.1 |
| Angular SSR | ~21.1 |
| Node.js | 20 (alpine) |
| TypeScript | ~5.9 |
| Express | ~5.1 |
| Vitest | ~4.0 |
| Docker | Compose v3.9 |

---

## Estrutura do Projeto

```
/
├── README.MD              # Instruções rápidas (raiz)
├── CONTEXT.md              # Este documento
├── noiz-site/              # App Angular
│   ├── angular.json
│   ├── package.json        # name: "lanternas-site"
│   ├── Dockerfile          # Multi-stage build (produção SSR)
│   ├── Dockerfile.dev      # Dev com hot-reload
│   ├── docker-compose.yml  # Perfis: dev / prod
│   ├── src/
│   │   ├── main.ts
│   │   ├── main.server.ts
│   │   ├── server.ts       # Express SSR
│   │   ├── styles.scss
│   │   └── app/
│   │       ├── app.ts
│   │       ├── app.config.ts
│   │       ├── app.config.server.ts
│   │       ├── app.routes.ts
│   │       ├── app.routes.server.ts
│   │       ├── layout/
│   │       │   ├── header/     # HeaderComponent
│   │       │   └── footer/     # FooterComponent
│   │       ├── models/
│   │       │   ├── iniciativa.model.ts
│   │       │   ├── midia.model.ts
│   │       │   └── parceria.model.ts
│   │       ├── pages/
│   │       │   └── home/       # HomeComponent (página única)
│   │       ├── sections/
│   │       │   ├── contato/
│   │       │   ├── doacao/
│   │       │   ├── hero/
│   │       │   ├── iniciativas/
│   │       │   ├── midia/
│   │       │   ├── parcerias/
│   │       │   ├── projeto/
│   │       │   └── regiao/
│   │       └── services/
│   │           └── site-data.service.ts  # Dados centralizados
```

---

## Docker Compose

O arquivo `docker-compose.yml` possui **dois perfis**:

### Desenvolvimento (hot-reload)

```bash
docker compose --profile dev up
```

- Expõe porta `4200`
- Monta o diretório local com bind mount
- Usa `Dockerfile.dev` (imagem Node 20 + Angular CLI global)
- Suporta hot-reload via `ng serve --host 0.0.0.0 --poll 2000`

### Produção (SSR)

```bash
docker compose --profile prod up
```

- Expõe porta `4000`
- Usa `Dockerfile` (multi-stage: build → produção)
- Executa SSR com Express via `dist/lanternas-site/server/server.mjs`

---

## O que foi feito até agora

### Renomeação da marca "noiz" → "Lanternas"

Substituídas todas as referências ao nome antigo "noiz" por "Lanternas" nos arquivos fonte:

| Arquivo | Alterações |
|---|---|
| `noiz-site/README.md` | Título do projeto e instruções Docker |
| `README.MD` (raiz) | Criado do zero |
| `src/app/layout/footer/footer.html` | URL do logo, Instagram, email, links de iniciativas |
| `src/app/sections/contato/contato.html` | Email de contato |
| `src/app/services/site-data.service.ts` | URLs de imagens, links e título de matéria |

> **Nota:** A citação do Emicida em `projeto.html` ("é nóiz") foi mantida por ser letra de música, não referência à marca.

### Docker Compose existente

O `docker-compose.yml` já existia no projeto e foi mantido — apenas documentado.

---

## Próximos passos possíveis

- [ ] Publicar em produção (Azure / outra cloud)
- [ ] Configurar CI/CD
- [ ] Adicionar funcionalidade de formulário de contato
- [ ] Criar página de doação funcional