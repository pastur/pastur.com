import { Head } from 'react-static'
import React from 'react'

import { Button, Flex } from '../components/styles'

export default () => (
  <div>
    <Head>
      <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
    </Head>

    <Flex>
      <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="abelpastur">
        <a className="LI-simple-link" href='https://uk.linkedin.com/in/abelpastur?trk=profile-badge'>Abel Pastur</a>
      </div>
    </Flex>

    <Flex style={{marginTop: '2em'}}>
      <Button href="/abel-pastur-cv-2019.pdf">View CV</Button>
    </Flex>
  </div>
)
