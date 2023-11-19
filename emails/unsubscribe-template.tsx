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

type UnsubscribeTemplateEmailProps = {
  email: string;
};

function UnsubscribeTemplateEmail({ email }: UnsubscribeTemplateEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Unsubscribe from {siteConfig.title} changelog - Confirmation</Preview>
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
              We have received your request to unsubscribe from our changelog newsletter.
            </Heading>

            <Section>
              <Text className="text-[16px] leading-[24px] text-[#666666]">
                You are seeing this email because you have requested to unsubscribe from our
                newsletter. If this action was not requested by you, please ignore this email.
              </Text>
            </Section>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Link
                className="rounded bg-[#000000] px-4 py-2 text-center text-[12px] font-semibold text-white no-underline"
                href={`${siteConfig.url}/unsubscribe?email=${email}`}
              >
                Unsubscribe
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default UnsubscribeTemplateEmail;
