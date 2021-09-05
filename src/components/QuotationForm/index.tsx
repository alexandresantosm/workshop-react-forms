import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";
import { hours } from "../../common/utils/hours";
import { FormValues } from "../FormValues";

type FormValuesType = {
  pickUpAgency: string;
  pickUpDate: string;
  pickUpHour: string;
  specialRequest: string;
};

export const QuotationForm = (): JSX.Element => {
  const initialValues = {
    pickUpAgency: "",
    pickUpDate: "",
    pickUpHour: "",
    specialRequest: "",
  };
  const [formValues, setFormValues] = useState<FormValuesType>(initialValues);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formValues);
  };

  const handleFieldCahnge = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-5">
            <label className="form-label" htmlFor="pickUpAgency">
              Local de retirada
            </label>
            <input
              className="form-control"
              id="pickUpAgency"
              name="pickUpAgency"
              aria-describedby="pickUpAgencyHelp"
              value={formValues.pickUpAgency}
              onChange={handleFieldCahnge}
            />
            <div className="form-text" id="pickUpAgencyHelp">
              Selecione o local onde deseja retirar o carro.
            </div>
          </div>

          <div className="col-md-4">
            <label className="form-label" htmlFor="pickUpDate">
              Data de retirada
            </label>
            <input
              className="form-control"
              id="pickUpDate"
              name="pickUpDate"
              aria-describedby="pickUpDateHelp"
              value={formValues.pickUpDate}
              onChange={handleFieldCahnge}
            />
            <div className="form-text" id="pickUpDateHelp">
              Selecione a data de retirada.
            </div>
          </div>

          <div className="col-md-3">
            <label className="form-label" htmlFor="pickUpHour">
              Horário de retirada
            </label>
            <select
              className="form-select"
              id="pickUpHour"
              name="pickUpHour"
              aria-describedby="pickUpHourHelp"
              value={formValues.pickUpHour}
              onChange={handleFieldCahnge}
            >
              {hours.map((value) => (
                <option key={`option-${value}`} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <div className="form-text" id="pickUpHourHelp">
              Selecione a hora de retirada.
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-12">
            <label className="form-label" htmlFor="specialRequest">
              Pedido especial
            </label>

            <textarea
              className="form-control"
              id="specialRequest"
              name="specialRequest"
              aria-describedby="specialRequestHelp"
              value={formValues.specialRequest}
              onChange={handleFieldCahnge}
            />
            <div className="form-text" id="specialRequestHelp">
              Esse é um espaço destinado especialmente para você nos contar como
              podemos lhe atender melhor.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
      <div className="mt-3">
        <FormValues values={formValues} />
      </div>
    </>
  );
};
