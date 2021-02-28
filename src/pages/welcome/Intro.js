import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

import Button from '../../ui/Button'

const socialLinks = [
  {
    title: 'GitHub profile',
    href: 'https://github.com/pastur',
    icon: faGithub,
  },
  {
    title: 'Stack Overflow profile',
    href: 'https://stackoverflow.com/users/1722207/abel-pastur',
    icon: faStackOverflow,
  },
  {
    title: 'Twitter account',
    href: 'https://twitter.com/pastur',
    icon: faTwitter,
  },
  {
    title: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/pastur',
    icon: faLinkedin,
  },
]

export default function Intro() {
  return (
    <>
      <h1 className="name">Abel Pastur</h1>
      <p className="job">Software Engineer</p>

      <hr className="hr" />

      <div className="description">
        <p>Front-end Developer</p>
        <p>JavaScript | React | Next.js</p>
      </div>

      <div className="contact">
        <Button href="/cv">View CV</Button>
        <Button primary href="mailto:getintouch@pastur.com">
          Get in touch
        </Button>
      </div>

      <ul className="social">
        {socialLinks.map(link => (
          <li key={link.title}>
            <a href={link.href} title={link.title}>
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
