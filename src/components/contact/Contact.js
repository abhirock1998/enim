import React from "react";
import Input from "../input/Input";
import {Button} from "@material-ui/core"
import "./contact.css";
import { Heading } from "../../components/components";
function Contact() {
  return (
    <div  id="contact-us" className="contact">
      <div className="contact__left">
       <Heading heading="Contact US"  />
        <h1>Let's get in touch</h1>
        <p  id="des" >Contact us to discuss your project and how we can help</p>
        <h5>Phone : 6758465739</h5>
        <a href="mailto:office.email@gmail.com">office.email@gmail.com</a>
      </div>
      <div className="contact__right">
        <form>
            <Input type="text"   />
            <Input type="email" title="Email*"   />
            <Input  title="Message*" isTextArea={true}  />
            <Button variant="outlined">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
