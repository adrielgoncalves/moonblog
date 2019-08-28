import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Bem vindos</h1>
      <h2>Ao melhor Blog sobre Makeup</h2>
      <p>
        Precisa de uma Make mara!!! <Link to="./contact">Descubra!</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
