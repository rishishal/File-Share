import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Img } from "@react-email/components";
import LOGO from "../asset/file.png";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  emailToSend: string;
  userName: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  shortUrl: string;
};

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const EmailTemplate = ({
  emailToSend,
  userName,
  fileName,
  fileSize,
  fileType,
  shortUrl,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your Download Link</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Img
              src='../asset/file.png'
              width='42'
              height='42'
              alt='logo'
              style={logo}
            />
            <Heading style={heading}>Hi {userName}</Heading>
            <Section style={buttonContainer}>
              <Button style={button} href={shortUrl}>
                Download File
              </Button>
            </Section>
            <Text style={paragraph}>
              Drag and drop your file directly on our cloud and share it with
              your friend securely with password and send it on email:
            </Text>
            <code style={code}>Code Here</code>
            <Hr style={hr} />
            <Link
              href='https://rishikumar-portfolio.netlify.app/'
              style={reportLink}
            >
              Rishi Kumar &#169 2024
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default EmailTemplate;

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const button = {
  backgroundColor: "#5e6ad2",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  paddingTop: "11px",
  paddingBottom: "11px",
  paddingLeft: "23px",
  paddingRight: "23px",
};

const reportLink = {
  fontSize: "14px",
  color: "#b4becc",
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
};

const code = {
  fontFamily: "monospace",
  fontWeight: "700",
  padding: "1px 4px",
  backgroundColor: "#dfe1e4",
  letterSpacing: "-0.3px",
  fontSize: "21px",
  borderRadius: "4px",
  color: "#3c4149",
};
