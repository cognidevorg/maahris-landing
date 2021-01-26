import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ props, imageUrl }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

    if(imageUrl== null){
      return <div>Picture not found</div>
    }
  const imageScan = data.allFile.edges.filter(node => {
    const image = node.node
    const serealizedImageFile = imageUrl.replace(/^.*[\\\/]/, "")


    return serealizedImageFile === image.relativePath
  })


  const image = imageScan[0]?.node


  if (!image?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={image.childImageSharp.fluid} {...props} />
}

export default Image
