"use client";
import { useState } from "react";
import useRegisterModel from "../../hooks/useRegisterModel";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
const RegisterModel = () => {
  const RegisterModel = useRegisterModel();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        RegisterModel.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Model
      disabled={isLoading}
      isOpen={RegisterModel.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={RegisterModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModel;
