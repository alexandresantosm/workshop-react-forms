import { InputHTMLAttributes } from "react";
import classname from "classnames";

interface InputFieldProps extends InputHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  error: string | undefined;
  hint: string;
  label: string;
  options: Array<string>;
  touched: boolean | undefined;
}

export const SelectField = ({
  id,
  name,
  error,
  hint,
  label,
  options,
  touched,
  ...selectProps
}: InputFieldProps): JSX.Element => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <select
        className={classname("form-control", {
          "is-invalid": !!error && touched,
        })}
        id={id}
        name={name}
        aria-describedby={`${name}Help`}
        {...selectProps}
      >
        <option value={""}>Selecione</option>
        {options.map((value) => (
          <option key={`option-${value}`} value={value}>
            {value}
          </option>
        ))}
      </select>
      {!!error && touched ? (
        <div className="invalid-feedback">{error}</div>
      ) : (
        <div className="form-text" id={`${id}Help`}>
          {hint}
        </div>
      )}
    </>
  );
};
