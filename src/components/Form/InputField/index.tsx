import { InputHTMLAttributes } from "react";
import classname from "classnames";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  error: string | undefined;
  hint: string;
  label: string;
  touched: boolean | undefined;
}

export const InputField = ({
  id,
  name,
  error,
  hint,
  label,
  touched,
  ...inputProps
}: InputFieldProps): JSX.Element => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className={classname("form-control", {
          "is-invalid": !!error && touched,
        })}
        id={id}
        name={name}
        aria-describedby={`${name}Help`}
        {...inputProps}
      />
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
