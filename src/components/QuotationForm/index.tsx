import { useFormik } from "formik";
import { object as schema, string } from "yup";
import { hours } from "../../common/utils/hours";
import { InputField } from "../Form/InputField";
import { SelectField } from "../Form/SelectField";
import { TextareaField } from "../Form/TextareaField";
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

  const dateRegex =
    /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

  const validationSchema = schema({
    pickUpAgency: string().required("É preciso preencher o local de retirada."),
    pickUpDate: string()
      .required("É preciso preencher a data de retirada.")
      .matches(dateRegex, "A data precisa estar no formato dd/mm/yyyy."),
    pickUpHour: string().required(
      "É preciso selecionar o horário de retirada."
    ),
  });

  const {
    values: formValues,
    handleChange: handleFieldChange,
    handleSubmit,
    touched,
    handleBlur,
    errors,
  } = useFormik<FormValuesType>({ initialValues, validationSchema, onSubmit });

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
            <TextareaField
              id="specialRequest"
              name="specialRequest"
              label="Pedido especial"
              hint="Esse é um espaço destinado especialmente para você nos contar como
              podemos lhe atender melhor."
              error={errors.specialRequest}
              value={formValues.specialRequest}
              touched={touched.specialRequest}
              onChange={handleFieldChange}
              onBlur={handleBlur}
            />
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
