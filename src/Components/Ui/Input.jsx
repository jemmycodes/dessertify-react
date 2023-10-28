import React from "react";

const Input = React.forwardRef(
  ({ label, type, id, ariaInvalid,register, ariaDescribedBy, errorMessage }, ref) => {
    return (
      <div className="flex flex-col gap-1 ">
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
        <input
          ref={ref}
          placeholder={label}
          {...register(id)}
          type={type}
          id={id}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid}
          className="px-4 py-[6px] border border-gray-400 w-full text-sm focus:outline-none "
        />
        <p className="text-sm text-red-600">{errorMessage}</p>
      </div>
    );
  }
);

export default Input;
