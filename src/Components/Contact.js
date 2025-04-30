import React from 'react';
import "./Contact.css"

export const Contact = () => {
  return (
    <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: 'url(img/Lap.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send me a message</h5>
                    </div>
                    <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" id="cf" method="POST">
                      <div id="sendmessage" style={{ display: 'none' }} className="alert alert-success">Your message has been sent. Thank you!</div>
                      <div id="errormessage" style={{ display: 'none' }} className="alert alert-danger"></div>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required minLength="4" />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required minLength="4" />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea className="form-control" name="message" id="message" rows="5" placeholder="Message" required></textarea>
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="button button-a">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Contact Information</h5>
                    </div>
                    <div className="more-info">
                      <p><strong>Address:</strong> Cape Town</p>
                      <p><strong>Phone:</strong> +27 (67) 028 5003</p>
                      <p><strong>Email:</strong> lufunomanyikana315@gmail.com</p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href="#"><i className="icon ion-logo-facebook"></i></a></li>
                        <li><a href="#"><i className="icon ion-logo-twitter"></i></a></li>
                        <li><a href="#"><i className="icon ion-logo-linkedin"></i></a></li>
                        <li><a href="#"><i className="icon ion-logo-Whatsapp"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};