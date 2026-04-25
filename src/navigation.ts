import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  // ✏️ เมนูใน Header — แก้ text เพื่อเปลี่ยนชื่อเมนู, แก้ href เพื่อเปลี่ยนลิงก์
  links: [
    { text: 'Home', textTh: 'หน้าหลัก', href: getPermalink('/') },
    { text: 'Products', textTh: 'สินค้า', href: getPermalink('/products') },
    { text: 'About Us', textTh: 'เกี่ยวกับเรา', href: getPermalink('/about') },
    { text: 'Blog', textTh: 'บทความ', href: getBlogPermalink() },
    { text: 'Contact', textTh: 'ติดต่อเรา', href: getPermalink('/contact') },
  ],
  // ✏️ ปุ่มด้านขวาสุดของ Header — แก้ text เพื่อเปลี่ยนข้อความ, แก้ href เพื่อเปลี่ยนลิงก์
  actions: [{ text: 'Contact Line', href: 'https://lin.ee/N97SIEb', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    // ✏️ ลิงก์เล็กๆ ท้ายเว็บ เช่น Terms, Privacy Policy
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // ✏️ ไอคอน Social Media ใน Footer — แก้ href เป็น URL ของคุณ เช่น 'https://x.com/ชื่อบัญชี'
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/nuisaranth/adv-demo-web' },
  ],
  // ✏️ ข้อความลิขสิทธิ์ท้ายเว็บ — แก้ชื่อและลิงก์ให้เป็นของคุณเอง
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/nuisaranth/adv-demo-web"> Arthelokyo</a> · All rights reserved.
  `,
};
