import React from 'react'
import {graphql, useStaticQuery } from "gatsby"

import FooterStyle from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
          siteMetadata {
              author
          }
      }
    }
  `)
    return (
        <footer className={FooterStyle.footer}>
            <p>Desenvolvido por {data.site.siteMetadata.author}, @2019</p>
        </footer>
    )
}

export default Footer