import { siteConfig } from '@/config/site-config';
import { Resend } from 'resend';
import SubscribeTemplateEmail from './subscribe-template';
import UnsubscribeTemplateEmail from './unsubscribe-template';

export const emailClient = new Resend(process.env.RESEND_API_KEY);

export async function sendSubscribeConfirmationEmail(email: string) {
  return emailClient.emails.send({
    from: `${siteConfig.title} <${process.env.RESEND_EMAIL}>`,
    to: [email],
    subject: `Thanks for subscribing - ${siteConfig.title}`,
    react: SubscribeTemplateEmail({ email }),
  });
}

export async function sendUnsubscribeEmail(email: string) {
  return emailClient.emails.send({
    from: `${siteConfig.title} <${process.env.RESEND_EMAIL}>`,
    to: [email],
    subject: `Unsubscribe confirmation - ${siteConfig.title}`,
    react: UnsubscribeTemplateEmail({ email }),
  });
}
