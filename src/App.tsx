import { Header } from "./components/Header";
import { QuotationForm } from "./components/QuotationForm";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container pt-5 pb-5">
        <QuotationForm />
      </div>
    </>
  );
};

export default App;
