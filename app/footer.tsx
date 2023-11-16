import { GithubIcon, LinkedInIcon, TwitterIcon, FacebookIcon } from '@/components/icons';
import { ThemeSwitcher } from '@/components/theme-switcher';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { buttonVariants } from '@/components/ui/button';
import { footer, siteConfig, type SocialMediaIcon } from '@/config/site-config';
import { cn } from '@/lib/utils';
import * as React from 'react';

const navigationLinks = footer?.navigationLinks;
const socialMediaLinks = footer?.socialMediaLinks;

export function Footer() {
  return (
    <footer className="footerGrid grid gap-4 border-t p-6 md:px-6 md:py-8">
      <header className="footerLeft">
        {siteConfig.title} © {new Date().getFullYear()}
      </header>
      <NavigationLinks />
      <div className="footerRight flex flex-wrap items-center justify-between md:flex-col-reverse md:items-end">
        <SocialMediaLinks />
        <div className=" justify-self-end">
          <React.Suspense>
            <ThemeSwitcher />
          </React.Suspense>
        </div>
      </div>
    </footer>
  );
}

function NavigationLinks() {
  return (
    <div className="footerCenter grid gap-2 md:grid-cols-3">
      {navigationLinks.map((link) => (
        <div key={link.title} className="hidden md:block">
          <strong className="mb-2 block">{link.title}</strong>
          <ul>
            {link.items.map((item) => (
              <li key={item.label} className="text-foreground/60 hover:text-foreground">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Accordion type="single" collapsible className="w-full md:hidden">
        {navigationLinks.map((link) => (
          <AccordionItem key={link.title} value={link.title}>
            <AccordionTrigger>{link.title}</AccordionTrigger>
            <AccordionContent>
              <ul>
                {link.items.map((item) => (
                  <li key={item.label}>
                    <a
                      className={cn(buttonVariants({ variant: 'link' }), 'text-foreground/60')}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <ul className="flex gap-2">
      {socialMediaLinks.map((link, idx) => (
        <li key={idx}>
          <a
            target="__blank"
            rel="noopener noreferrer"
            href={link.href}
            className={buttonVariants({ size: 'icon', variant: 'link' })}
          >
            <SocialMediaIcon type={link.icon} className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SocialMediaIcon(props: { type: SocialMediaIcon; className?: string }) {
  switch (props.type) {
    case 'twitter':
      return <TwitterIcon className={props.className} />;
    case 'github':
      return <GithubIcon className={props.className} />;
    case 'facebook':
      return <FacebookIcon className={props.className} />;
    case 'linkedin':
      return <LinkedInIcon className={props.className} />;
    default:
      return null;
  }
}
