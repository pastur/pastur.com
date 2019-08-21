import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    title: "GitHub profile",
    href: "https://github.com/pastur",
    icon: faGithub
  },
  {
    title: "Stack Overflow profile",
    href: "https://stackoverflow.com/users/1722207/abel-pastur",
    icon: faStackOverflow
  },
  {
    title: "Twitter account",
    href: "https://twitter.com/pastur",
    icon: faTwitter
  },
  {
    title: "LinkedIn profile",
    href: "https://www.linkedin.com/in/pastur",
    icon: faLinkedin
  }
];

export default function Intro() {
  return (
    <Fragment>
      <h1 className="name">Abel Pastur</h1>
      <p className="job">Software Engineer</p>

      <hr className="hr" />

      <div className="description">
        <p>Full stack Web Developer.</p>
        <p>React ecosystem enthusiast.</p>
        <p>Based in London.</p>
      </div>

      <div className="contact">
        <a className="button" href="/abel-pastur-cv-2019.pdf" target="_blank">
          View CV
        </a>
        <a className="button" href="mailto:getintouch@pastur.com">
          Get in touch
        </a>
      </div>

      <ul className="social">
        {socialLinks.map((link, i) => (
          <li key={i}>
            <a href={link.href} title={link.title} target="_blank">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
