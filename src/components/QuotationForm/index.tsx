import { useFormik } from "formik";
import { hours } from "../../common/utils/hours";
import { InputField } from "../Form/InputField";
import { SelectField } from "../Form/SelectField";
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
    touched,
    handleBlur,
    errors,
  } = useFormik<FormValuesType>({ initialValues, validate, onSubmit });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-5">
            <InputField
              id="pickUpAgency"
              name="pickUpAgency"
              label="Local de retirada"
              hint="Selecione o local onde deseja retirar o carro."
              error={errors.pickUpAgency}
              touched={touched.pickUpAgency}
              value={formValues.pickUpAgency}
              onChange={handleFieldChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="col-md-4">
            <InputField
              id="pickUpDate"
              name="pickUpDate"
              label="Data de retirada"
              hint="Selecione a data de retirada."
              error={errors.pickUpDate}
              touched={touched.pickUpDate}
              value={formValues.pickUpDate}
              onChange={handleFieldChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="col-md-3">
            <SelectField
              id="pickUpHour"
              name="pickUpHour"
              label="Horário de retirada"
              hint="Selecione a hora de retirada."
              options={hours}
              error={errors.pickUpHour}
              touched={touched.pickUpHour}
              value={formValues.pickUpHour}
              onChange={handleFieldChange}
              onBlur={handleBlur}
            />
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
