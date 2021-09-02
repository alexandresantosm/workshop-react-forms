import logoSVG from "./../../assets/svg/logo.svg";
import { Logo } from "./../Logo";

import { Container } from "./style";

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Logo src={logoSVG} height="22px" alt="Logo Localiza" />
    </Container>
  );
};
