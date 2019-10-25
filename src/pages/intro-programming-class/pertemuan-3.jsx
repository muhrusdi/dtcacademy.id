import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
} from "../../components/styled";
import Globalnav from "../../components/globalnav";
import SEO from "../../components/gatsby-seo"
import { css } from "@emotion/core"

const Outline = () => {
  const data = useStaticQuery(graphql`
    query {
    markdownRemark(frontmatter: { path: { eq: "pertemuan-3" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
  `)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark


  return (
    <div>
    <SEO
        title="Pertemuan 1 Intro Programming - DTC Academy"
        description="Be a skillful Programmer with Intro Programmer Class"
      />
      <Globalnav
        title="Intro Programming Class"
        top={0}
        link="https://forms.gle/qiLvYUBfMZQRS7WYA"
      />
      <Container>
        <div style={{
            paddingTop: 140
          }}

          >
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          css={css`
            margin-top: 60px;
            ol {
              margin-bottom: 80px;
            }
            & > h2 {
              font-size: 24px;
              & + p {
                margin-bottom: 30px;
              }
            }
            ul {
              & + h2 {
                margin-top: 30px;
              }
            }
            h3 {
              font-size: 20px;
              margin-top: 30px;
            }
            img {
              width: 100%;
            }
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </div>
      </Container>
    </div>
  )
}

export default Outline