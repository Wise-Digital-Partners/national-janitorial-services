import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ServicePost = () => (
    <StaticQuery
        query={graphql`
      query {
        allSanityServices {
          edges {
            node {
              nav
              slug {
                current
              }
            }
          }
        }
      }
    `}
        render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
    ></StaticQuery>
)

export default ServicePost