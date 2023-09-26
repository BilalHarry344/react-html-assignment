import { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData } from "../../interfaces/formTypes";
import { schema } from "../../validationSchema/registerFormValidation";

const RegisterForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="register-form">
      <h5 className="mb3">Register interest</h5>
      <p className="mb6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
        tristique senectus dui pharetra sit.
      </p>

      {showSuccess && (
        <div className="success-notification">Form submitted successfully!</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-control">
          <label>
            Name<sup>*</sup>
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input {...field} placeholder="Enter your name" />
            )}
          />
          <small>{errors.name?.message}</small>
        </div>

        <div className="form-control">
          <label>Company</label>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <input {...field} placeholder="Enter your company name" />
            )}
          />
          <small>{errors.company?.message}</small>
        </div>

        <div className="form-control">
          <label>
            Email<sup>*</sup>
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input {...field} placeholder="Enter your email address" />
            )}
          />
          <small>{errors.email?.message}</small>
        </div>

        <button type="submit" className="button-component button-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
