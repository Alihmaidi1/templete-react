import React from "react";
import {Drop,DropTitle,DropTitlespan,Form,FormInput,FormInputtext,FormInputemail,Textarea,Formsubmit,Inputsubject} from "./style";

const Contact=()=>{


    return ( <Drop>
                        <div class="container">
                            <DropTitle><DropTitlespan>Drop </DropTitlespan>Me A line</DropTitle>
                            <Form action="">
                                <FormInput>
                                    <FormInputtext type="text" placeholder="Your Name"/>
                                    <FormInputemail type="email" placeholder="Your Email"/>
                                </FormInput>
                                <Inputsubject type="text" class="sub" placeholder="Your Subject"/>
                                <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                                <Formsubmit type="submit" value="Send Message"/>
                            </Form>
                        </div>
            </Drop>);


}

export default Contact;