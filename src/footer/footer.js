import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import './footer.css';
import facebook from "./facebook.png"
import instagram from "./instagram.png"

function GlamUpFooter() {
return(
<Box>
      <Container>
        <Row>
          <Column className='contact_info'>
            <Heading>CONTACT INFORMATION</Heading>
            <FooterLink >647A Tampines St 62 <br></br>
                        #04-197<br></br>
                        SINGAPORE 521647<br></br>
                        TEL: 65 8608 1401<br></br>
                        EMAIL: glamup-sg@gmail.com
            </FooterLink>
          </Column>
          <Column>
            <Heading>Quick Links</Heading>
            <FooterLink href="#">Gallery</FooterLink>
            <FooterLink href="#">Services</FooterLink>

          </Column>          
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  <img className="social_icon" src={facebook}  />Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                <img className="social_icon" src={instagram}  />Instagram
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>

)

}
export default GlamUpFooter