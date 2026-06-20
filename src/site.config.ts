// =============================================================
//  CONFIG CENTRAL DO SITE
//  muda tudo daqui, num lugar so: dominio, titulo, tagline,
//  links, interesses e a foto de perfil. o resto do codigo
//  importa daqui, entao nao precisa cacar string em arquivo nenhum.
// =============================================================

export interface SocialLink {
  label: string; // ex: "github"
  value: string; // ex: "github.com/csh" (o que aparece na tela)
  href: string | null; // o link de verdade. poe null se nao tem (tipo discord)
}

export const SITE = {
  // dominio que aparece no header e no titulo das paginas
  domain: 'romanticist.info',

  // url completa, usada pelo rss e pelo sitemap.
  // o astro.config.mjs importa esse valor, entao muda so aqui
  url: 'https://romanticist.info',

  // o wordmark grandao la na home (masthead)
  title: 'romanticist',

  // a linha que vem embaixo do wordmark
  tagline: 'Cloud and web security student, I like to post some of my progress here',

  // descricao padrao (meta tag) quando a pagina nao manda uma propria
  description: 'Personal blog.',

  // bloco de identidade do /about
  author: {
    handle: 'zsh',
    role: 'offensive security, web & cloud',
    // FOTO DE PERFIL: troca o arquivo em public/images/avatar.svg
    // pela tua foto (mesmo nome), ou poe um avatar.jpg e muda o caminho aqui
    avatar: '/avatar.jpg',
  },

  // a linha de interesses no /about (separada por ponto sozinho)
  interests: [
    'web exploitation',
    'cloud security',
    'cloud exploitation',
    'appsec',
    'offensive research',
    'lateral movement',
  ],

  // os links do /about
  social: [
    { label: 'github', value: 'github.com/cshshell', href: 'https://github.com/cshshell' },
    { label: 'x', value: 'x.com/iblameubuntu', href: 'https://x.com/iblameubuntu' },
    { label: 'discord', value: 'zshell.mitigation', href: null },
  ] as SocialLink[],
};
