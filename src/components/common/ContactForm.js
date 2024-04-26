"use client"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactFormSchema from "@/utils/scehma/contact";
import { postForm } from "@/api";

const ContactForm = ({ data }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [successForm, setSuccessForm] = useState(false);
  const [errorForm, setErrorForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async (formData) => {
    setLoadingForm(true);
    try {
      const res = await postForm("contact", formData);
      console.log("res", res);
      setSuccessForm(true);
      setShowSuccess(true);
      reset();
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorForm(true);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } finally {
      setLoadingForm(false);
    }
  };

  return (
    <div className="column-1">
      <h2 className="fs--60 title">
        <span>{data?.formTitle}</span>
        <i className="icon-arrow-down"></i>
      </h2>
      <div
        className={`container-contact mt-lg-140 mt-tablet-65 ${
          showSuccess ? "form-success" : ""
        } ${showError ? "formError" : ""}`}
      >
        <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
          <div className="container-input col-md-6">
            <label htmlFor="contact-first-name">
              {data?.firstNamePlaceholder}
            </label>
            <input
              id="first_name_3469"
              name="first_name_3469"
              type="text"
              required
              disabled={loadingForm}
              {...register("first_name_3469")}
            />
            {formErrors.first_name_3469 && (
              <span className="error">
                {formErrors.first_name_3469.message}
              </span>
            )}
          </div>
          <div className="container-input col-md-6">
            <label htmlFor="contact-last-name">{data?.lastNamePlaceholder}</label>
            <input
              id="last_name_425e"
              name="last_name_425e"
              type="text"
              required
              {...register("last_name_425e")}
              disabled={loadingForm}
            />
            {formErrors.last_name_425e && (
              <span className="error">{formErrors.last_name_425e.message}</span>
            )}
          </div>
          <div className="container-input col-12">
            <label htmlFor="contact-email">{data?.emailPlaceholder}</label>
            <input
              id="email_d74b"
              name="email_d74b"
              type="email"
              required
              {...register("email_d74b")}
              disabled={loadingForm}
            />
            {formErrors.email_d74b && (
              <span className="error">{formErrors.email_d74b.message}</span>
            )}
          </div>
          <div className="container-textarea col-12">
            <label htmlFor="contact-message">{data?.messageBoxPlaceholder}</label>
            <textarea
              id="long_answer_e038"
              name="long_answer_e038"
              {...register("long_answer_e038")}
              disabled={loadingForm}
            ></textarea>
            {formErrors.long_answer_e038 && (
              <span className="error">
                {formErrors.long_answer_e038.message}
              </span>
            )}
          </div>
          <div className="container-submit col-12">
            <button type="submit" className="bt-submit btn-medium" disabled={loadingForm}>
              <span className="submit-text">{data?.formSubmitButton}</span>
            </button>
          </div>
        </form>
        {showError && <h3>Error, Try again!</h3>}
        {showSuccess && <h3>Success!</h3>}
      </div>
    </div>
  );
};

export default ContactForm;