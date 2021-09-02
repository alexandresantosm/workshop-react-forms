import logoSVG from "./assets/svg/logo.svg";
import { Logo } from "./components/Logo";

const App = (): JSX.Element => {
  return (
    <>
      <Logo src={logoSVG} height="22px" alt="Logo Localiza" />
      <h1>Localiza</h1>
    </>
  );
};

export default App;
