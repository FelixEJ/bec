import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;
  width: 90vw;
  max-width: 380px;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 5px black;
  padding: 2px;
  margin-top: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const Input = styled.input`
  width: 100px;
  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Close = styled.span`
  position: fixed;
  width: 10px;
  height: 10px;
  right: 26px;
  top: 106px;
`;

const Alert = styled.div`
  padding: 20px;
  background-colour: rgb(13, 141, 19);
  color: white;
`;

const CloseButton = styled.span`
  margin-left: 5px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    color:black;
  }
`;

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    reply_to: "",
    phone: "",
    postcode: "",
    membership: "",
    payment: "",
  });
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  function sendForm() {
    console.log(contact);
    // emailjs
    //   .send("service_d8aeynk", "template_6sjopg6", contact, "lC3qN2NqNa13VitI4")
    //   .then(
    //     function (response) {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     function (error) {
    //       console.log("FAILED...", error);
    //     }
    //   );
    showSuccess();
    resetContact();
    handleClose();
  }

  function showSuccess() {
    console.log("SUCCESS");
    return (
      <Alert>
        <CloseButton          
          onclick="this.parentElement.style.display='none';"
        >
          &times;
        </CloseButton>
        <strong>Success!</strong> Thank you!
      </Alert>
    );
  }

  function resetContact() {
    setContact({
      name: "",
      reply_to: "",
      phone: "",
      postcode: "",
      membership: "",
      payment: "",
    });
  }

  return (
    <Container>
      <Button variant="contained" onClick={handleOpen}>
        Member Information
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Close onClick={handleClose}>X</Close>
          <Form onSubmit={handleSubmit(sendForm)}>
            <input type="hidden" name="contact_number" />
            <Label>
              Name:
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="required"
                value={contact.name}
                onChange={handleChange}
              />
            </Label>
            <br />
            <Label>
              Email:
              <input
                required
                type="email"
                name="reply_to"
                id="reply_to"
                placeholder="required"
                value={contact.reply_to}
                onChange={handleChange}
              />
            </Label>
            <br />
            <Label>
              Number:
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="optional"
                value={contact.phone}
                onChange={handleChange}
              />
            </Label>
            <br />
            <Label>
              Location(postcode):
              <input
                type="text"
                name="postcode"
                id="postcode"
                placeholder="required"
                value={contact.postcode}
                onChange={handleChange}
              />
            </Label>
            <Label>
              Membership type:
              <select
                name="membership"
                id="membership"
                value={contact.membership}
                onChange={handleChange}
              >
                <option value="">--Please select--</option>
                <option value="waged">Waged $20/year</option>
                <option value="unwaged">Unwaged $5/year</option>
                <option value="lifetime">Lifetime supporter $50</option>
              </select>
            </Label>
            <Label>
              Payment method:
              <select
                name="payment"
                id="payment"
                value={contact.payment}
                onChange={handleChange}
              >
                <option value="">--Please select--</option>
                <option value="bank">Bank Transfer</option>
                <option value="square">Square Payment Portal</option>
              </select>
            </Label>
            <Input type="submit" value="Send" />
          </Form>
          <Alert>
        <CloseButton          
          onclick="this.parentElement.style.display='none';"
        >
          &times;
        </CloseButton>
        <strong>Success!</strong> Thank you!
      </Alert>
        </Box>
      </Modal>
    </Container>
  );
};

export default Contact;
