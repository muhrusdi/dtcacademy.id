import React, { useEffect, useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import Image from "../components/image"
import Seo from "../components/seo"

const ContextWrap = styled.div`
  height: 100%;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
  @media (max-width: 576px) {
    padding: 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 22px;
  padding-right: 22px;
`

const Flex = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  @media (max-width: 576px) {
    height: initial;
    padding-bottom: 100px;
    display: column;
    flex-direction: column-reverse;
  }
`

const BannerImg = styled(Img)({
  width: ({ width }) => width,
})

const LogoImg = styled(Img)`
  margin-bottom: 30px;
  @media (min-width: 576px) {
    display: none;
  }
`

const H1 = styled.h1`
  color: #364851;
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: 32px;
  }
`

const P = styled.p`
  color: #708893;
  font-size: 18px;
`

const Col = styled.div`
  flex-basis: 100%;
  width: 100%;
`

const Input = styled.input`
  padding: 20px;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 10px 20px #dbe2ea;
  border-radius: 6px;
  font-size: 18px;
  height: 60px;
  outline: none;
  @media (max-width: 576px) {
    width: 100%;
  }
`

const isSuccess = css`
  &:after {
    content: "Success 👏" !important;
  }
  @media (max-width: 768px) {
    &:after {
      content: "Success 👏" !important;
    }
  }
  @media (max-width: 576px) {
    &:after {
      content: "Success 👏" !important;
    }
  }
`

const Button = styled.div`
  padding: 17px 20px;
  cursor: pointer;
  background: #0495cd;
  color: #fff;
  margin-left: 20px;
  font-weight: bold;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 10px 20px #dbe2ea;
  border-radius: 6px;
  font-size: 18px;
  &:after {
    content: "Join with us";
  }
  height: 60px;
  @media (max-width: 768px) {
    &:after {
      content: "Join";
    }
  }
  @media (max-width: 576px) {
    position: absolute;
    right: 10px;
    height: 40px;
    padding: 8px 15px;
    text-align: center;
    &:after {
      content: "Join";
    }
    top: 11px;
    width: 80px;
  }
  ${({ success }) => (success ? isSuccess : null)}
`

const Form = styled.form`
  display: flex;
  position: relative;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

const ColStyled = styled(Col)`
  @media (max-width: 576px) {
    padding-bottom: 30px;
  }
`

const Logo = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
    margin-top: 30px;
  }
`

const LogoInner = styled.div`
  margin-bottom: 30px;
  @media (max-width: 576px) {
    display: none;
  }
`

const Networks = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  a {
    color: #707070;
  }
  .cls-1,
  .cls-3 {
    fill: #a5b8c1;
  }

  .cls-1 {
    stroke: #707070;
  }
  svg {
    width: 28px;
    height: 28px;
  }
  a {
    cursor: pointer;
  }
  & > div {
    margin-right: 10px;
  }
`

const IndexPage = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(0)
  const api = text => {
    return `https://api.telegram.org/bot853006600:AAF-W11ezsyL0_CkCCpRQAfHuYkH-lioQGc/sendMessage?chat_id=@academydtc&text=${text}`
  }

  useEffect(() => {
    fetch(api("visited"))
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }, [])

  const handleChange = e => {
    setEmail(e.target.value)
    if (email) {
      setError(0)
    }
  }

  const timeOutSuccess = () => {
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2000)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (email) {
      fetch(api(`joined - ${email}`))
        .then(response => response.json())
        .then(data => {
          setEmail("")
          setTimeout(() => timeOutSuccess())
          console.log(data)
        })
    } else {
      setError(error + 1)
    }
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "Group 146.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo: file(relativePath: { eq: "dtc_academy.png" }) {
            childImageSharp {
              fixed(width: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <ContextWrap>
          <Seo />
          <Global
            styles={css`
              html {
                font-family: "Maven Pro", sans-serif;
                quotes: "â€œ" "â€";
              }

              html {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
              }

              *,
              *::before,
              *::after {
                box-sizing: border-box;
              }

              body {
                margin: 0;
                padding: 0;
                overscroll-behavior-y: none;
              }
              h1 {
                font-family: "Maven Pro", sans-serif;
              }
              body {
                font-size: 16px;
                background: #fff;
                line-height: 1.47059;
                font-weight: 400;
                letter-spacing: -0.022em;
                font-family: "Maven Pro", sans-serif;
                color: #333;
              }
            `}
          />
          <Container>
            <div
              css={css`
                position: absolute;
                top: 40px;
                @media (max-width: 576px) {
                  position: relative;
                  top: 10px;
                }
                padding: 4px 10px;
                background: #d1ecfc;
                border-radius: 8px;
                border: 1px solid #4acbfd;
                color: #0a749c;
              `}
            >
              <span>
                <span style={{ fontWeight: "bold" }}>New</span> Class Intro
                Programming. Daftar segera -{" "}
                <Link to="/intro-programming-class">selengkapnya</Link>
              </span>
            </div>
            <Logo>
              <LogoImg fixed={data.logo.childImageSharp.fixed} />
            </Logo>
            <Flex>
              <Col>
                <div>
                  <LogoInner>
                    <LogoImg fixed={data.logo.childImageSharp.fixed} />
                  </LogoInner>
                  <H1>DTC Academy is a Technology and Design Academy</H1>
                  <P>
                    Our mission is to provide more accessible knowledge in
                    Technology & Design for Indonesian people. By providing
                    industry based knowledge we want to grow digital & creative
                    industry especially in Eastern Indonesian region.
                  </P>
                  <div>
                    <Form onSubmit={handleSubmit}>
                      <Input
                        name="email"
                        placeholder="Enter your email here"
                        value={email}
                        onChange={handleChange}
                        css={css`
                          border: 2px solid ${error ? "#ff7373" : "transparent"};
                        `}
                      />
                      <Button success={success} onClick={handleSubmit} />
                    </Form>
                    <Networks>
                      <div>
                        <a href="https://www.facebook.com/DTC.Academy">
                          <svg viewBox="0 0 28 28">
                            <defs>
                              <clipPath id="clip-path">
                                <rect
                                  id="Rectangle_2153"
                                  data-name="Rectangle 2153"
                                  class="cls-1"
                                  width="28"
                                  height="28"
                                  transform="translate(7255 4034)"
                                />
                              </clipPath>
                            </defs>
                            <g
                              id="ic_fb"
                              class="cls-2"
                              transform="translate(-7255 -4034)"
                            >
                              <g
                                id="icons8_Facebook"
                                transform="translate(7257.24 4036.24)"
                              >
                                <path
                                  id="Path_2742"
                                  data-name="Path 2742"
                                  class="cls-3"
                                  d="M24.525,3.969H6.747A2.776,2.776,0,0,0,3.969,6.747V24.525A2.778,2.778,0,0,0,6.747,27.3H24.525A2.779,2.779,0,0,0,27.3,24.525V6.747A2.778,2.778,0,0,0,24.525,3.969ZM22.3,12.3H21.191c-1.19,0-1.667.278-1.667,1.111v1.667H22.3l-.556,2.778H19.524v8.334H16.746V17.857H14.523V15.079h2.223V13.412c0-2.222,1.111-3.887,3.334-3.887a3.432,3.432,0,0,1,2.222.556Z"
                                  transform="translate(-3.969 -3.969)"
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.instagram.com/dtcacademy">
                          <svg viewBox="0 0 28 28">
                            <defs>
                              <clipPath id="clip-path">
                                <rect
                                  id="Rectangle_2155"
                                  data-name="Rectangle 2155"
                                  class="cls-1"
                                  width="28"
                                  height="28"
                                  transform="translate(7418 4050)"
                                />
                              </clipPath>
                            </defs>
                            <g
                              id="ic_ig"
                              class="cls-2"
                              transform="translate(-7418 -4050)"
                            >
                              <g
                                id="icons8_Instagram_1"
                                transform="translate(7420 4052)"
                              >
                                <path
                                  id="Path_2747"
                                  data-name="Path 2747"
                                  class="cls-3"
                                  d="M7.1,0A7.112,7.112,0,0,0,0,7.1V17.352a7.113,7.113,0,0,0,7.1,7.1H17.352a7.113,7.113,0,0,0,7.1-7.1V7.1a7.113,7.113,0,0,0-7.1-7.1Zm0,1.88H17.352A5.2,5.2,0,0,1,22.57,7.1V17.352a5.2,5.2,0,0,1-5.218,5.218H7.1A5.2,5.2,0,0,1,1.88,17.352V7.1A5.2,5.2,0,0,1,7.1,1.88ZM19.276,3.76A1.412,1.412,0,1,0,20.69,5.173,1.414,1.414,0,0,0,19.276,3.76Zm-7.05,1.884a6.582,6.582,0,1,0,6.58,6.583A6.6,6.6,0,0,0,12.227,5.643Zm0,1.88a4.7,4.7,0,1,1-4.7,4.7A4.686,4.686,0,0,1,12.227,7.523Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </Networks>
                  </div>
                </div>
              </Col>
              <ColStyled>
                <div>
                  <BannerImg
                    width="100%"
                    fluid={data.placeholderImage.childImageSharp.fluid}
                  />
                </div>
              </ColStyled>
            </Flex>
          </Container>
        </ContextWrap>
      )}
    />
  )
}

export default IndexPage
