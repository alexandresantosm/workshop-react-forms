import { InputHTMLAttributes } from "react";
import classname from "classnames";

interface InputFieldProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  error: string | undefined;
  hint: string;
  label: string;
  touched: boolean | undefined;
}

export const TextareaField = ({
  id,
  name,
  error,
  hint,
  label,
  touched,
  ...textareaProps
}: InputFieldProps): JSX.Element => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        className={classname("form-control", {
          "is-invalid": !!error && touched,
        })}
        id={id}
        name={name}
        aria-describedby={`${name}Help`}
        {...textareaProps}
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
