import { Head } from 'react-static'
import React from 'react'

export default () => (
  <div>
    <Head>
      <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
    </Head>
    
    <h1>Abel Pastur</h1>
    <h2>software developer</h2>

    <a href="/abel-pastur-cv-2019.pdf">View CV</a>

    <div className="LI-profile-badge"
      data-version="v1"
      data-size="large"
      data-locale="en_US"
      data-type="horizontal"
      data-theme="light"
      data-vanity="abelpastur">
        <a className="LI-simple-link" href='https://uk.linkedin.com/in/abelpastur?trk=profile-badge'>Abel Pastur</a>
    </div>
  </div>
)
