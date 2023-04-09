import React from "react";
import "./Footer.css";




const footerLinks = [
  {
    title: "Shopper Store",
    list: [
           "The result is a robust iOS",
           "12000 products instore to", 
           "100+ customers reviews..."],
  },
  {
    title: "Top Categories",
    list: [
      "Shirts",
      "T-Shirts",
      "› See More",
    ],
  },
  {
    title: "Useful Links",
    list: [
      "Instagram",
      "Facebook",
      "Twitter",
      "Whatsapp"
    ],
  },
  {
    title: "Contacts",
    list: [
      "52 CauseWay Harare",
      "0777765434",
      "email@gmail.com",
    ],
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__disclaimer">
          <strong>Best:</strong> store for shopping cosmetics.
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__row">
              <h6>{link.title}</h6>
              <ul>
                {link.list.map((item) => (
                  <li key={link.slug}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          
          <span className="footer__copy">
            &copy;2023 | Developed by{" "}
            <a href="/">Taurai-My portfolio</a> 
          </span>
          <span className="footer__dropDownSpan">
           
          </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
