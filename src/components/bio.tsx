/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

const Bio: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.BioQuery>(graphql`
    query Bio {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50, layout: FIXED)
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  if (
    !data.site?.siteMetadata ||
    !data.avatar?.childImageSharp?.gatsbyImageData
  ) {
    return <div />
  }

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const { author, social } = data.site!.siteMetadata!
  if (!author || !social) {
    return <div />
  }

  return (
    <div className="bio">
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author.name || ''}
        className="bio-avatar"
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <div>
          <strong className="block">{author.name}</strong>
        </div>
        <p>{author.summary}</p>
      </div>
      <div className="flex items-center">
        <a
          href={`https://github.com/${social.github}`}
          style={{ boxShadow: `none` }}
        >
          <FontAwesomeIcon
            color="#aeaeae"
            icon={faGithubSquare}
            style={{
              width: `32px`,
              height: `32px`,
              marginRight: `4px`,
            }}
          />
        </a>
        <a
          href={`https://twitter.com/${social.twitter}`}
          style={{ boxShadow: `none` }}
        >
          <FontAwesomeIcon
            color="#3eaded"
            icon={faTwitterSquare}
            style={{
              width: `32px`,
              height: `32px`,
              marginRight: `4px`,
            }}
          />
        </a>
      </div>
    </div>
  )
}

export default Bio
