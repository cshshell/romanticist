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
  tagline: 'notes on web exploitation, cloud & offensive research',

  // descricao padrao (meta tag) quando a pagina nao manda uma propria
  description: 'Personal security research notebook.',

  // bloco de identidade do /about
  author: {
    handle: 'csh',
    role: 'offensive security · web & cloud',
    // FOTO DE PERFIL: troca o arquivo em public/images/avatar.svg
    // pela tua foto (mesmo nome), ou poe um avatar.jpg e muda o caminho aqui
    avatar: '/images/avatar.svg',
  },

  // a linha de interesses no /about (separada por ponto sozinho)
  interests: [
    'web exploitation',
    'cloud security',
    'identity & federation abuse',
    'appsec',
    'offensive research',
    'lateral movement',
  ],

  // os links do /about
  social: [
    { label: 'github', value: 'github.com/csh', href: 'https://github.com/csh' },
    { label: 'x', value: 'x.com/csh', href: 'https://x.com/csh' },
    { label: 'discord', value: 'csh', href: null },
  ] as SocialLink[],
};
