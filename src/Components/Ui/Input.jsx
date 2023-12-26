import React from "react";

const Input = React.forwardRef(
  (
    {
      label,
      type,
      id,
      ariaInvalid,
      register,
      ariaDescribedBy,
      errorMessage,
      icon,
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1 relative">
        <label htmlFor={id} className=" font-medium">
          {label}
        </label>
        <input
          ref={ref}
          placeholder={label}
          {...register(id)}
          type={type}
          id={id}
          role="button"
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid}
          className="px-4 py-3 border border-gray-400 w-full text-sm focus:outline-none "
        />
        {icon}
        <p className="text-sm text-red-600">{errorMessage}</p>
      </div>
    );
  }
);

export default Input;
