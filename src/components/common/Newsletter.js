"use client"
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { postForm } from "@/api";

const Newsletter = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLabelHidden, setIsLabelHidden] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputFocus = () => {
    setIsLabelHidden(true);
  };

  const handleInputBlur = () => {
    setIsLabelHidden(false);
  };

  const validationSchema = Yup.object().shape({
    email_ac30: Yup.string()
      .email("Invalid email address")
      .required("Required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await postForm("newsletter", data);
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timeoutId = setTimeout(() => {
        setSuccess(false);
        setError(false);
        setShowSuccess(false);
        setShowError(false);
        reset();
        Array.from(document.querySelectorAll(".preenchido")).forEach((el) =>
          el.classList.remove("preenchido")
        );
      }, 3000);
      // Clean up the timeout
      return () => clearTimeout(timeoutId);
    }
  }, [success, error, reset]);

  return (
    <div
      className={`container-newsletter ${showSuccess ? "letter-success" : ""} ${
        showError ? "formError" : ""
      }`}
    >
      <div className="container-text">
        <h3 className="fs-25 white-1">{data?.newsletterTitle}</h3>
        <p className="fs--16 fs-phone-15 font-2 white-1 mt-5">
          {data?.newsletterDescription}
        </p>
      </div>

      <div className="container-newsletter mt-mobile-25">
        <form
          className={`form-newsletter ${showSuccess ? "letter-success" : ""} ${
            showError ? "formError" : ""
          }`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="assunto" value="[newsletter]" />
          <div className="container-input">
            <label
              htmlFor="newsletter-email"
              className={isLabelHidden ? "hidden" : ""}
            >
              {data?.newsletterPlaceholder}
            </label>

            <input
              id="email_ac30"
              name="email_ac30"
              type="email"
              {...register("email_ac30")}
              required
              disabled={loading}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />

            {formErrors.email_ac30 && (
              <span className="error">{formErrors.email_ac30.message}</span>
            )}
          </div>
          <div className="container-submit">
            <button type="submit" className="bt-submit" disabled={loading}>
              <span className="submit-text">
                {data?.newsletterSubmitButtonText}
              </span>
            </button>
          </div>
        </form>

        {showSuccess && (
          <h3 className="feedback-newsletter white-1">Success!</h3>
        )}

        {showError && (
          <h3 className="feedback-newsletter white-1">Error, Try again!</h3>
        )}
      </div>
    </div>
  );
};

export default Newsletter;