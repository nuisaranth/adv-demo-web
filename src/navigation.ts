import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'หน้าแรก', href: getPermalink('/') },
    { text: 'สินค้า', href: getPermalink('/products') },
    { text: 'เกี่ยวกับเรา', href: getPermalink('/about') },
    { text: 'บทความ', href: getBlogPermalink() },
    { text: 'ติดต่อเรา', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'ติดต่อ Line', href: 'https://lin.ee/N97SIEb', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/nuisaranth/adv-demo-web' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/nuisaranth/adv-demo-web"> Arthelokyo</a> · All rights reserved.
  `,
};
