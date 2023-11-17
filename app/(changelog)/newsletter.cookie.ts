import { cookies } from 'next/headers';

const COOKIE_NAME = 'NewsletterSubscribed';

export function updateNewsletterCookie(value: 'true' | 'false') {
  cookies().set(COOKIE_NAME, value, {
    secure: true,
    sameSite: 'strict',
    path: '/',
    httpOnly: true,
  });
}

export function getIsSubscribedToNewsletter() {
  return cookies().get(COOKIE_NAME)?.value === 'true';
}
