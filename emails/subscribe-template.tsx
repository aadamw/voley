import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { siteConfig } from '../config/site-config';

type SubscribeTemplateEmailProps = {
  email: string;
};

function SubscribeTemplateEmail({ email }: SubscribeTemplateEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Thanks for subscribing to {siteConfig.title} changelog</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${siteConfig.url}/logo.png`}
                width="60"
                height="60"
                alt={`${siteConfig.title} logo`}
                className="mx-auto my-0 rounded-full"
              />
            </Section>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Heading className="mx-0 my-[30px] p-0 text-center text-[22px] font-normal text-black">
              Thanks for subscribing to our changelog newsletter!
            </Heading>

            <Section>
              <Text className="text-[16px] leading-[24px] text-[#666666]">
                We are excited to have you on board. You will hear from us as soon as we release a
                new post!
              </Text>
            </Section>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              If you wish to unsubscribe from our changelog newsletter, click{' '}
              <Link
                className="text-[12px] font-semibold leading-[24px] text-[#666666] underline"
                href={`${siteConfig.url}/unsubscribe?email=${email}`}
              >
                here
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default SubscribeTemplateEmail;
