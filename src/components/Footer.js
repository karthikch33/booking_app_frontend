import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsInstagram, BsYoutube, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-4 text-white'>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={5} className="text-center">
              <div className="footer-top-data d-flex gap-3 align-items-center justify-content-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0'>Sign Up for Newsletter</h2>
              </div>
            </Col>
            <Col md={7}>
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Sign Up Here" aria-label="Sign Up Here" aria-describedby="basic-addon2" />
                <span className='input-group-text p-1'>Subscribe</span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer className='py-3 text-white'>
        <Container>
          <Row className="justify-content-center">
            <Col md={4} className="text-center">
              <h4 className='mb-4'>Contact Us</h4>
              <address className='fs-6'>
                D:NO ~ 6-52 Near Nandi Sagar <br /> Nandivelugu MainRoad <br />
                Tenali Mandal
              </address>
              <a href="tel:+91 7845269845" className='d-block mb-4 text-white'>+91 7845269845</a>
              <a href="mailto:saipavan39dh@gmail.com" className='d-block text-white'>saipavan39dh@gmail.com</a>
              <div className='social-icons d-flex gap-3 mt-4 justify-content-center'>
                <a href="#" className='text-white fs-4'><BsLinkedin /></a>
                <a href="#" className='text-white fs-4'><BsInstagram /></a>
                <a href="#" className='text-white fs-4'><BsYoutube /></a>
                <a href="#" className='text-white fs-4'><BsGithub /></a>
              </div>
            </Col>
            <Col md={3} className="text-center">
              <h4 className='mb-4'>Information</h4>
              <div className='d-flex flex-column footer-links'>
                <Link to={"privacypolicy"} className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to={"refundpolicy"} className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to={"termsandconditions"} className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </Col>
            <Col md={3} className="text-center">
              <h4 className='mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </Col>
            <Col md={2} className="text-center">
              <h4 className='mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to={'/hotels'} className='text-white py-2 mb-1'>Hotels</Link>
                <Link to={'/resorts'} className='text-white py-2 mb-1'>Resorts</Link>
                <Link to={'/carrentals'} className='text-white py-2 mb-1'>Car Rentals</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer className='py-4 text-center text-white'>
        <Container>
          <Row> 
            <Col>
              <p className='mb-0'>&copy; {new Date().getFullYear()} Powered By Booking.com (Made With Efforts By Aditya & Harsha)</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer;
