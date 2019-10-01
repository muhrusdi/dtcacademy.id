/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  description,
  lang = "id",
  meta,
  title,
  image,
  type = "website",
  url = "/",
}) => {
  const { site, imgThumb } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        imgThumb: file(relativePath: { eq: "dtc_academy.png" }) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    `
  )

  const metaTitle = title ? title : site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const ogImage = image
    ? image
    : site.siteMetadata.siteUrl + imgThumb.childImageSharp.fluid.src

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: url,
      name: title ? title : site.siteMetadata.title,
      alternateName: "",
    },
  ]

  if (type === "article") {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": url,
              name: title ? title : site.siteMetadata.title,
              image: ogImage,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: url,
        name: title ? title : site.siteMetadata.title,
        alternateName: "",
        headline: title ? title : site.siteMetadata.title,
        image: {
          "@type": "ImageObject",
          url: ogImage,
        },
        description: metaDescription,
      }
    )
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:image:alt`,
          content: metaTitle,
        },
        {
          property: "og:image:width",
          content: 1648,
        },
        {
          property: "og:image:height",
          content: 863,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
