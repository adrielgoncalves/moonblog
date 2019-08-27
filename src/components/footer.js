import React from 'react'

import { Link, graphql, useStaticQuery } from "gatsby"

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
        <footer>
            <p>Desenvolvido por {data.site.siteMetadata.author}, @2019</p>
        </footer>
    )
}

export default Footer