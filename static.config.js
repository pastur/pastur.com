import React from 'react'
import path from 'path'

const Document = ({
  Html,
  Head,
  Body,
  children,
  state: { siteData, renderMeta },
}) => (
  <Html lang="en-GB">
    <Head>
      <title>Abel Pastur</title>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Body>{children}</Body>
  </Html>
)

export default {
  Document,
  disablePreload: true,
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/routes'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    'react-static-plugin-styled-components',
  ],
}
