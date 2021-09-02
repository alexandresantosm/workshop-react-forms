const initialLabel = "Vamos visualizar aqui os valores do formuário.";

type FormValuesProps = {
  values: {
    pickUpAgency: string;
    pickUpDate: string;
    pickUpHour: string;
    specialRequest: string;
  };
};

export const FormValues = ({ values }: FormValuesProps): JSX.Element => {
  return (
    <div className="alert alert-primary" role="alert">
      {values.pickUpAgency === "" &&
      values.pickUpDate === "" &&
      values.pickUpHour === ""
        ? initialLabel
        : Object.keys(values).map((valueName) => (
            <div key={`name-${valueName}`} className="mb-2">
              <strong>{valueName}:</strong>{" "}
              {
                // @ts-ignore
                values[valueName]
              }
            </div>
          ))}
    </div>
  );
};
