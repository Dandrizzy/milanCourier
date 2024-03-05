import styled from "styled-components";
import Heading from "../ui/Heading";
import Header from "../ui/Header";
import Nav from "../ui/Nav";
import Logins from "../Features/authentication/Logins";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: clamp(1fr, 48rem);
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: rgb(59 130 246);
`;

function Login() {
  return (
    <LoginLayout>
      <Header />
      <Nav />
      <Heading as="h4">Log in to your account</Heading>
      <Logins />
    </LoginLayout>
  );
}

export default Login;
