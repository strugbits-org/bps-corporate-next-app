import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactusSchema from "../common/schema/contactusSchema";
import { useDispatch, useSelector } from "react-redux";
import { postFormData } from "../redux/reducers/contactus";
const ContactForm = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.contactus.contactusData);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const { loadingForm, successForm, errorForm } = useSelector(
    (state) => state.contact
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm({
    resolver: yupResolver(contactusSchema),
  });
  const onSubmit = (data) => {
    dispatch(postFormData(data));
  };
  useEffect(() => {
    if (successForm) {
      setShowSuccess(true);
      const timeoutId = setTimeout(() => {
        setShowSuccess(false);
        reset();
        Array.from(document.querySelectorAll(".preenchido")).forEach((el) =>
          el.classList.remove("preenchido")
        );
      }, 3000);
      // Clean up the timeout
      return () => clearTimeout(timeoutId);
    }
    if (errorForm) {
      setShowError(true);
      const timeoutId = setTimeout(() => {
        setShowError(false);
        // reset();
        // Array.from(document.querySelectorAll(".preenchido")).forEach((el) =>
        //   el.classList.remove("preenchido")
        // );
      }, 3000);
      // Clean up the timeout
      return () => clearTimeout(timeoutId);
    }
  }, [successForm, errorForm, reset]);

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
        // data-form-container
      >
        <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
          {/* <input type="hidden" name="assunto" value="[contact]" /> */}
          <div className="container-input col-md-6">
            <label htmlFor="contact-first-name">{data?.firstNamePlaceholder}</label>
            <input
              id="first_name_584c"
              name="first_name_584c"
              type="text"
              required
              disabled={loadingForm}
              {...register("first_name_584c")}
            />
            {formErrors.first_name_584c && (
              <span className="error">
                {formErrors.first_name_584c.message}
              </span>
            )}
          </div>
          <div className="container-input col-md-6">
            <label htmlFor="contact-last-name">{data?.lastNamePlaceholder}</label>
            <input
              id="last_name_51ee"
              name="last_name_51ee"
              type="text"
              required
              {...register("last_name_51ee")}
              disabled={loadingForm}
            />
            {formErrors.last_name_51ee && (
              <span className="error">{formErrors.last_name_51ee.message}</span>
            )}
          </div>
          <div className="container-input col-12">
            <label htmlFor="contact-email">{data?.emailPlaceholder}</label>
            <input
              id="email_bd82"
              name="email_bd82"
              type="email"
              required
              {...register("email_bd82")}
              disabled={loadingForm}
            />
            {formErrors.email_bd82 && (
              <span className="error">{formErrors.email_bd82.message}</span>
            )}
          </div>
          <div className="container-textarea col-12">
            <label htmlFor="contact-message">{data?.messageBoxPlaceholder}</label>
            <textarea
              id="long_answer_afda"
              name="long_answer_afda"
              {...register("long_answer_afda")}
              disabled={loadingForm}
            ></textarea>
            {formErrors.long_answer_afda && (
              <span className="error">
                {formErrors.long_answer_afda.message}
              </span>
            )}
          </div>
          <div className="container-submit col-12">
            <button type="submit" className="bt-submit btn-medium">
              <span className="submit-text">
              {data?.formSubmitButton}
              </span>
            </button>
          </div>
        </form>
        {/* Error message */}
        {showError && (
          <h3 className="disable-css" data-form-error>
            Error, Try again!
          </h3>
        )}
        {showSuccess && <h3 data-form-success>Success!</h3>}
      </div>
    </div>
  );
};
export default ContactForm;
