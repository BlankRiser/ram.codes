/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

type FreelanceInquiryProps = {
  name: string;
  email: string;
};

export const FreelanceInquiry: React.FC<FreelanceInquiryProps> = ({
  email,
  name,
}) => {
  return (
    <Html>
      <Head />
      <Preview>{name} has an inquiry from ram.codes</Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[20px] max-w-4xl p-[20px]">
            <Heading className="text-left text-[20px] font-normal text-black">
              <strong>New Inquiry from {name}!</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              {email}
            </Text>
            <Hr className="mx-0 my-[16px] w-full" />
            <Container>
              <Text className="text-[12px] text-[#666666]">
                Name: <strong>{name}</strong>
              </Text>
              <Text className="text-[12px] text-[#666666]">
                This email is delivered to you through the Resend SDK
                integrations.✨
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
