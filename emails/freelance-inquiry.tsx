/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type FreelanceInquiryProps = {
  name: string;
  email: string;
  company: string;
};

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const FreelanceInquiry: React.FC<FreelanceInquiryProps> = ({
  email = "business@somehugebusiness.com",
  name = "Really Long Long Name To Test",
  company = "somehugebusiness",
}) => {
  return (
    <Html>
      <Head />
      <Preview>{name} has an inquiry from ram.codes</Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[20px] p-[20px]">
            <Heading className="text-left text-[20px] font-normal text-black">
              <strong>New Freelance Enquiry!</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              This businees has an inquiry from {name}!
            </Text>
            <Hr className="mx-0 my-[16px] w-full" />
            <Container>
              <Text className="text-[#666666]">
                Name: <strong>{name}</strong>
              </Text>
              <Text className="text-[#666666]">
                Email: <strong>{email}</strong>
              </Text>
              <Text className="text-[#666666]">
                Company: <strong>{company}</strong>
              </Text>
            </Container>
          </Container>
          <Section style={footer}>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2023 ram.codes, All Rights Reserved <br />
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default FreelanceInquiry;

// Styles for the email template
const footer = {
  width: "580px",
  margin: "0 auto",
};
