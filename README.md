# valhalla — romanticist.info

blog pessoal de pesquisa em seguranca. astro estatico, scss, busca client-side.

## rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o dist/ estatico
```

## como mexer

**ta tudo explicado no `GUIA.md`** (na raiz) — escrito pra eu ler enquanto edito:
criar post, frontmatter, imagens (capa e internas), trocar foto de perfil,
mudar identidade do site, deploy e pegadinhas.

atalhos rapidos:
- escrever post -> `src/content/posts/*.mdx`
- imagens -> `public/images/posts/<post>/`
- identidade / dominio / links / avatar -> `src/site.config.ts`
- cores / fontes -> `src/styles/_tokens.scss`
