import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import "../App.css";

import Footer from "../components/footer";

import BgImage01 from "../images/BGone.jpg";
import Member5 from "../images/member5.png";
import Member20 from "../images/member20.png";
import Member50 from "../images/member50.png";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ParallaxCont = styled.div`
  min-height: 80vh;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const TextBox = styled.div`
  display: block;
  margin: 15px auto;
  padding: 15px;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 5px;
  max-width: 95vw;
  text-align: center;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    max-width: 1000px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1200px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const Input = styled.input`
  width: 100px;
  display: block;
  margin: 15px auto;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin: 15px auto;

  @media only screen and (min-width: 480px) {
    flex-flow: row nowrap;
  }
  @media only screen and (min-width: 768px) {
    flex-flow: row nowrap;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Icon = styled.img`
  width: 45vw;
  padding: 1vw;
  opacity: 1;
  margin: auto;
  display: block;
  margin: 10px auto;

  @media only screen and (min-width: 480px) {
    max-width: 30vw;
  }
  @media only screen and (min-width: 768px) {
    max-width: 200px;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Membership = () => {
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
    // formState: { errors },
  } = useForm();
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  function sendForm() {
    console.log(contact);
    emailjs
      .send("service_d8aeynk", "template_6sjopg6", contact, "lC3qN2NqNa13VitI4")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    resetContact();
    // handleClose();
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
      <Parallax bgImage={BgImage01} strength={-200}>
        <ParallaxCont>
          <TextBox>
            <Title>Become A Member</Title>
            <p>
              The BEC is totally community and crowd funded, through our
              bi-annual plant fair, donations and memberships.
            </p>
            <p>
              To become a member, please fill in the form below and make a
              payment either via bank transfer or through our online Square
              portal. Our secretary will then verify that the payment was made.
            </p>
            <p>
              If you are on a fixed income, centrelink or other concession, membership is $5/year.
            </p>
            <p>
              Otherwise membership is $20/year.
            </p>
            <p>
              To be a lifetime supporter is a one-time payment of $50.
            </p>
            <p>
              <b>Name:</b> Bellingen Environment Centre
              <br />
              <b>BSB:</b> 533000
              <br />
              <b>Account:</b> 32804671
              <br />
              <br />
              If you could put "Membership" in your transfer description this
              would greatly help out our secretary.
            </p>
            <IconContainer>
              <a
                href="https://square.link/u/YpjgOltL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon src={Member5} alt="$5 Membership Icon" />
              </a>
              <a
                href="https://square.link/u/17eQU93b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon src={Member20} alt="$20 Membership Icon" />
              </a>
              <a
                href="https://square.link/u/PMfWAID1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon src={Member50} alt="$50 Membership Icon" />
              </a>
            </IconContainer>
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
                  <option value="bank">Bank Transfer</option>
                  <option value="square">Square Payment Portal</option>
                </select>
              </Label>
              <Input type="submit" value="Send" />
            </Form>
          </TextBox>
        </ParallaxCont>
        <Footer />
      </Parallax>
    </Container>
  );
};

export default Membership;
