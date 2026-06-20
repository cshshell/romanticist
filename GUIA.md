# guia do valhalla (pra mim mesmo)

ó, isso aqui é meu lembrete de como mexer no blog sem ter que pensar.
ta tudo explicado, com calma. se eu esquecer alguma coisa, é so reler.

regra de ouro: **quase tudo que muda identidade do site ta no `src/site.config.ts`**,
e **escrever post é so criar um arquivo `.mdx` em `src/content/posts/`**. o resto é detalhe.

---

## 1. mapa do projeto (o que é cada coisa)

```
valhalla/
├── GUIA.md                 <- esse arquivo (meu guia)
├── README.md               <- versao curtinha
├── astro.config.mjs        <- config do astro (quase nunca mexo)
├── package.json            <- dependencias e comandos
│
├── public/                 <- arquivos servidos direto (imagens, favicon)
│   ├── favicon.svg
│   └── images/
│       ├── avatar.svg              <- MINHA FOTO DE PERFIL (troco aqui)
│       └── posts/
│           ├── gcpw-lateral-movement/   <- pasta do post (capa + imagens dele)
│           │   └── cover.svg            <- capa desse post
│           └── http-for-hacking/
│               └── cover.svg
│
└── src/
    ├── site.config.ts      <- ** CONFIG CENTRAL: dominio, titulo, links, avatar **
    ├── content.config.ts   <- regras do frontmatter (so mexo se mudar os campos)
    ├── content/posts/      <- ** ONDE EU ESCREVO OS POSTS (.mdx) **
    ├── layouts/Base.astro  <- a "casca" de toda pagina (head, header, busca)
    ├── components/         <- header e modal de busca
    ├── pages/              <- as rotas (home, about, post, tags, categorias, rss)
    ├── styles/             <- _tokens.scss (cores/fontes) + global.scss (estilo)
    └── utils/              <- funcoezinhas (data, tempo de leitura, slug)
```

resumindo o que importa pro dia a dia:
- **escrever** -> `src/content/posts/`
- **imagens** -> `public/images/posts/<post>/`
- **foto de perfil / identidade / links** -> `src/site.config.ts`
- **cor / fonte** -> `src/styles/_tokens.scss`

---

## 2. rodar na minha maquina

uma vez so (instala as dependencias):
```bash
npm install
```

pra trabalhar (abre em http://localhost:4321 e atualiza sozinho quando salvo):
```bash
npm run dev
```

pra gerar o site final (cria a pasta `dist/`):
```bash
npm run build
```

ver como ficou o build:
```bash
npm run preview
```

---

## 3. criar um post novo (o passo a passo)

1. cria um arquivo novo em `src/content/posts/`, ex: `src/content/posts/ssrf-to-imds.mdx`
   -> **o nome do arquivo vira a url**: `ssrf-to-imds.mdx` = `/posts/ssrf-to-imds`
   -> usa so letras minusculas e hifen, sem espaco e sem acento.

2. copia o frontmatter de um post que ja existe e troca os valores (explico no item 4).

3. cria a pasta das imagens dele: `public/images/posts/ssrf-to-imds/`
   e joga a capa la dentro como `cover.svg` (ou .jpg/.png/.webp).

4. escreve o conteudo (item 5 em diante).

5. salva. se o `npm run dev` ta rodando, ja aparece. o post de **data mais nova**
   automaticamente vira o DESTAQUE grande no topo da home.

dica: nao precisa registrar o post em lugar nenhum. so o arquivo existir em
`src/content/posts/` ja basta, ele entra sozinho.

---

## 4. o frontmatter (o bloco la em cima entre os `---`)

é onde ficam os dados do post. cada campo:

```yaml
---
title: "Titulo do Post"                 # aparece em tudo
description: "Resumo de uma linha."      # o subtitulo / linha embaixo do titulo
date: 2026-06-20                         # ANO-MES-DIA. IMPORTANTE (ver embaixo)
category: "Cloud Security"               # UMA categoria. vira pagina em /categories
tags: ["ssrf", "cloud", "imds"]          # varias tags. cada uma vira pagina em /tags
cover: "/images/posts/ssrf-to-imds/cover.svg"   # caminho da capa
---
```

pegadinhas do frontmatter:
- **a data TEM que ser `ANO-MES-DIA`** (ex: `2026-06-20`). se escrever errado o build quebra.
- o post de data mais recente vira o **featured** (o grandao do topo). os outros entram
  no zigzag embaixo, alternando o lado da imagem.
- `category` é texto livre, mas se eu repetir a mesma string em varios posts eles caem
  na mesma categoria. ela vira link automatico em `/categories/<slug>`.
- `tags` é uma lista. uso minuscula-com-hifen (ex: `lateral-movement`).
- `cover` pode ser:
  - um caminho local: `/images/posts/<post>/cover.jpg`  (recomendado)
  - OU uma url da internet: `https://...`  (cola direto, funciona tambem)

---

## 5. escrever o post (markdown / mdx)

o corpo é markdown normal. o basico:

```md
## Titulo de secao
### Subsecao

paragrafo normal. **negrito** e _italico_.

- item de lista
- outro item

1. lista numerada
2. segundo

[texto do link](https://exemplo.com)

> isso vira uma citacao (aquele bloco com a barrinha do lado)
```

apaga aquele bloco de comentario `{/* ... */}` que deixei no template quando comecar
a escrever de verdade. ele nao aparece no site (é so meu lembrete) e nem conta no
tempo de leitura, mas deixa o arquivo mais limpo tirar.

---

## 6. codigo (o pao com manteiga aqui)

**bloco de codigo**: tres crases + a linguagem, fecha com tres crases.

````md
```bash
cme smb 10.0.0.0/24 -u gaia -p 'PnVgQ...'
```

```python
import requests
r = requests.get("http://169.254.169.254/latest/meta-data/")
```
````

o highlight é o tema **one-dark-pro**. linguagens que uso direto: `bash`, `http`,
`python`, `js`, `ts`, `c`, `go`, `json`, `yaml`, `sql`, `powershell`. (aceita um monte,
é so botar o nome certo depois das crases.)

**codigo no meio da frase** (inline): crase simples, tipo `crackmapexec` ou `L$GAIA_PASSWORD`.
o inline fica com aquele teal no creme.

---

## 7. imagens (capa e dentro do post)

tudo organizado por post: cada post tem a pasta dele em
`public/images/posts/<nome-do-post>/`. capa e imagens internas ficam juntas la.

**capa (cover):**
1. joga o arquivo em `public/images/posts/<post>/cover.jpg` (ou .png/.webp/.svg)
2. no frontmatter: `cover: "/images/posts/<post>/cover.jpg"`
   -> ou, se for preguica, cola uma url `https://...` direto no cover.

**imagem no meio do texto:**
1. joga o arquivo na MESMA pasta: `public/images/posts/<post>/diagrama.png`
2. no corpo do post:
   ```md
   ![descricao da imagem](/images/posts/<post>/diagrama.png)
   ```

regras que nao posso esquecer:
- o caminho **sempre comeca com `/`** e é relativo a pasta `public/`.
  ou seja, `public/images/x.png` vira `/images/x.png` no markdown (sem o "public").
- **nao tem otimizacao automatica** nesse setup (foi de proposito, pra ser simples).
  entao antes de subir uma foto pesada, eu **redimensiono pra ~1400px de largura**
  e salvo como jpg/webp, senao a pagina fica lenta.
- se a imagem nao aparecer: 99% das vezes é o caminho errado (esqueci o `/` ou
  botei "public" no caminho) ou o arquivo nao ta na pasta certa.

screenshot real fica melhor que stock — o design foi feito pra aguentar print de
terminal, ida, burp, etc. (foi o ponto desde o comeco).

---

## 8. featured / ordem / zigzag (como a home se organiza)

- a home pega TODOS os posts e ordena por data, mais novo primeiro.
- o **mais novo vira o featured**: capa grande 16:9 + titulo grandao (em Syne).
- os outros entram no **feed zigzag**: imagem de um lado, texto do outro, alternando
  o lado a cada post. no celular eles empilham.
- nao tem nada manual nisso. quero outro post em destaque? é so ele ter a data mais
  recente.

---

## 9. categorias e tags

- aparecem **so na pagina do post** (categoria em cima, tags na linha de meta) e
  na pagina **/tags** (que lista as categorias e a nuvem de tags). **nunca na home**
  (de proposito, pra home ficar limpa).
- cada categoria tem pagina: `/categories/<slug>` (ex: "Cloud Security" -> /categories/cloud-security)
- cada tag tem pagina: `/tags/<tag>` (ex: /tags/ssrf)
- essas paginas se montam sozinhas a partir do frontmatter dos posts.

---

## 10. trocar a foto de perfil

duas formas:

- **jeito facil**: substitui o arquivo `public/images/avatar.svg` pela minha foto,
  mantendo o nome `avatar.svg`. pronto.
- **com outro nome/formato**: jogo `public/images/avatar.jpg` e mudo o caminho no
  `src/site.config.ts`, no campo `author.avatar`:
  ```ts
  avatar: '/images/avatar.jpg',
  ```

(o avatar de agora é so um placeholder com aquelas ondinhas de koi pond, mesmo
motivo do favicon. é pra trocar.)

---

## 11. mudar a identidade do site (dominio, titulo, tagline, links)

**tudo num arquivo so: `src/site.config.ts`**. abro ele e mexo:

- `domain` -> o que aparece no header e nos titulos das abas
- `url` -> a url completa (usada pelo rss/sitemap). **o astro.config.mjs ja puxa daqui**,
  entao se eu trocar de dominio, mudo so nesse arquivo.
- `title` -> o wordmark grandao da home
- `tagline` -> a linha embaixo do wordmark
- `description` -> a meta descricao padrao
- `author` -> handle, role e caminho do avatar (item 10)
- `interests` -> a linha de interesses do /about
- `social` -> os links do /about (github, x, discord...). `href: null` = sem link.

nao preciso cacar essas coisas em outro arquivo. mudei aqui, mudou no site todo.

---

## 12. busca (ctrl+k / cmd+k)

ja funciona sozinha. ela indexa titulo, tags, categoria e descricao de todo post
no momento do build (usando o fuse.js). nao preciso fazer nada — escrevi post novo,
ele entra na busca automaticamente.

atalhos: `ctrl+k` (ou `cmd+k` no mac) abre, `esc` fecha, setas pra navegar, enter abre.

---

## 13. publicar / atualizar (ja ta no ar)

o site ja ta no ar. o conteudo é estatico (so html/css/js na pasta `dist/`), entao:

- se conectei o repo no host (cloudflare/vercel/netlift): **`git push` na main e ele
  rebuilda e publica sozinho**. cada push em outra branch vira um preview.
- se subo manual: `npm run build` e mando a pasta `dist/` pro host.

depois de qualquer mudanca (post novo, imagem, config), é so commitar e dar push.

---

## 14. pegadinhas / quando algo der errado

- **build quebrou** -> quase sempre é a `date` no frontmatter fora do formato
  `ANO-MES-DIA`, ou aspas/colchetes faltando no frontmatter. confere o post que mexi.
- **"min read" nao aparece** -> normal num post vazio. ele so aparece quando tem
  texto de verdade (o calculo ignora comentario e bloco de codigo).
- **imagem nao carrega** -> caminho errado. tem que comecar com `/`, ser relativo a
  `public/` (sem escrever "public" no caminho), e o arquivo tem que estar na pasta.
- **cor estranha / branco demais** -> a paleta é creme quente de proposito, nada de
  `#ffffff` puro. as cores estao em `src/styles/_tokens.scss` se eu quiser ajustar o teal.
- **mudei o config e nao atualizou** -> reinicia o `npm run dev` (as vezes ele segura
  o config antigo em memoria).

é isso. quando bater duvida, volto aqui.
