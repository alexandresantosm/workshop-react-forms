import { useFormik } from "formik";
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

  const onSubmit = (values: FormValuesType) => {
    console.log(values);
  };

  const validate = (values: FormValuesType) => {
    const error = {} as FormValuesType;

    if (!values.pickUpAgency) {
      error.pickUpAgency = "É preciso preencher o local de retirada.";
    }

    if (!values.pickUpDate) {
      error.pickUpDate = "É preciso preencher a data de retirada.";
    }

    if (!values.pickUpHour) {
      error.pickUpHour = "É preciso selecionar o horário de retirada.";
    }

    return error;
  };

  const {
    values: formValues,
    handleChange: handleFieldChange,
    handleSubmit,
    errors,
  } = useFormik<FormValuesType>({ initialValues, validate, onSubmit });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-5">
            <label className="form-label" htmlFor="pickUpAgency">
              Local de retirada
            </label>
            <input
              className={
                !!errors.pickUpAgency
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="pickUpAgency"
              name="pickUpAgency"
              aria-describedby="pickUpAgencyHelp"
              value={formValues.pickUpAgency}
              onChange={handleFieldChange}
            />
            <div className="form-text" id="pickUpAgencyHelp">
              Selecione o local onde deseja retirar o carro.
            </div>
            <div className="invalid-feedback">{errors.pickUpAgency}</div>
          </div>

          <div className="col-md-4">
            <label className="form-label" htmlFor="pickUpDate">
              Data de retirada
            </label>
            <input
              className={
                !!errors.pickUpDate ? "form-control is-invalid" : "form-control"
              }
              id="pickUpDate"
              name="pickUpDate"
              aria-describedby="pickUpDateHelp"
              value={formValues.pickUpDate}
              onChange={handleFieldChange}
            />
            <div className="form-text" id="pickUpDateHelp">
              Selecione a data de retirada.
            </div>
            <div className="invalid-feedback">{errors.pickUpDate}</div>
          </div>

          <div className="col-md-3">
            <label className="form-label" htmlFor="pickUpHour">
              Horário de retirada
            </label>
            <select
              className={
                !!errors.pickUpHour ? "form-select is-invalid" : "form-select"
              }
              id="pickUpHour"
              name="pickUpHour"
              aria-describedby="pickUpHourHelp"
              value={formValues.pickUpHour}
              onChange={handleFieldChange}
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
            <div className="invalid-feedback">{errors.pickUpHour}</div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-12">
            <label className="form-label" htmlFor="specialRequest">
              Pedido especial
            </label>

            <textarea
              className={
                !!errors.specialRequest
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="specialRequest"
              name="specialRequest"
              aria-describedby="specialRequestHelp"
              value={formValues.specialRequest}
              onChange={handleFieldChange}
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
