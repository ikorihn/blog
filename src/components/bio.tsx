/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { rhythm } from '../utils/typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

const Bio: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.BioQueryQuery>(graphql`
    query BioQuery {
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

  const { author, social } = data.site.siteMetadata
  if (!author || !social) {
    return <div />
  }

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author.name || ''}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div className="flex items-center">
        <p className="text-left">
          <strong className="block">{author.name}</strong>
          {author.summary}
        </p>
        <p className="ml-4">
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
        </p>
      </div>
    </div>
  )
}

export default Bio
