export const siteConfig = {
  title: 'Voley',
  description: 'Changelog template for your projects',
  url: 'https://voley.vercel.app',
  twitterHandle: 'voley',
} satisfies SiteConfig;

export const footer = {
  navigationLinks: [
    {
      title: 'Product',
      items: [
        { href: '/features', label: 'Features' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/integrations', label: 'Integrations' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { href: '/docs', label: 'Docs' },
        { href: '/blog', label: 'Blog' },
        { href: '/faq', label: 'FAQ' },
        { href: '/guides', label: 'Guides' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/customers', label: 'Customers' },
        { href: '/templates', label: 'Templates' },
      ],
    },
    {
      title: 'Company',
      items: [
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/careers', label: 'Careers' },
        { href: '/unsubscribe', label: 'Unsubscribe' }, //This one is used by newsletter
      ],
    },
  ],
  socialMediaLinks: [
    { href: 'https://facebook.com', icon: 'facebook' },
    { href: 'https://twitter.com', icon: 'twitter' },
    { href: 'https://github.com', icon: 'github' },
    { href: 'https://linkedin.com', icon: 'linkedin' },
  ],
} satisfies Footer;

type SiteConfig = {
  title: string;
  description: string;
  url: string;
  twitterHandle?: string;
};

type NavigationLink = {
  href: string;
  label: string;
};

type NavigationLinkGroup = {
  title: string;
  items: Array<NavigationLink>;
};

export type SocialMediaIcon = 'facebook' | 'twitter' | 'github' | 'linkedin';

type SocialMedia = {
  href: string;
  icon: SocialMediaIcon;
};

type Footer = {
  navigationLinks?: Array<NavigationLinkGroup>;
  socialMediaLinks?: Array<SocialMedia>;
};
