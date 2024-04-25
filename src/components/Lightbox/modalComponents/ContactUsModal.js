import React from "react";
import ContactForm from "../../../common/ContactForm";
import ContactDetails from "../../commonComponents/ContactDetails";
import { ModalWrapper } from "../ModalWrapper";

const ContactUsModal = () => {
  return (
    <ModalWrapper name={"modal-contact"}>
      <ContactForm />
      <ContactDetails />
    </ModalWrapper>
  );
};

export default ContactUsModal;
