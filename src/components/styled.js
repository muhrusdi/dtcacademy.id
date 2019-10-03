import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Button } from "antd"
import numeral from "numeral"

export const Globalnav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  top: -80px;
  transition: all 0.3s ease;
  z-index: 999;
`

Globalnav.Logo = styled.div`
  img {
    margin: 0;
  }
  span {
    margin-left: 20px;
    display: block;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  @media (max-width: 768px) {
    overflow: hidden;
  }
  @media (max-width: 576px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`
export const Banner = styled.div`
  height: 100vh;
`
export const BannerContent = styled.div`
  height: 100vh;
  color: #fff;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  right: 0;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 60px;
  }
  p {
    font-size: 18px;
    margin-top: 60px;
  }
  button {
    margin-top: 40px;
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 28px;
    }
    p {
      margin-top: 20px;
    }
    button {
      margin-top: 20px;
    }
  }
  ${({ children, ...props }) => ({ ...props })}
`

export const BackgroundImage = styled(Img)(
  {
    position: "relative",
    "&:before": {
      background: "rgb(0,0,0)",
      background:
        "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      position: "absolute",
      "@media (max-width: 576px)": {
        background: "rgba(0,0,0,0.6)",
      },
      content: "' '",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
  },
  ({ children, ...props }) => ({ ...props })
)

export const GlobalButton = styled(Button)`
  height: 50px;
  padding: 0 20px;
  text-transform: uppercase;
  ${({ children, ...props }) => ({ ...props })}
`

export const SectionContent = styled.div`
  ${({ children, ...props }) => ({ ...props })}
`

SectionContent.Section = styled.section`
  padding: 120px 0;
`

export const Breadcrums = styled.ul`
  list-style: none;
  @media (max-width: 1315px) {
    display: none;
  }
`
Breadcrums.Item = styled.li`
  &.active {
    a {
      padding-left: 14px;
      color: #589ee8;
    }
    &:after {
      width: 30px;
      background: #589ee8;
    }
  }
  &:hover {
    &:after {
      width: 30px;
      background: #589ee8;
    }
  }
  position: relative;
  &:after {
    content: "";
    position: absolute;
    transition: all 0.3s ease;
    left: -30px;
    top: 9px;
    height: 1px;
    width: 20px;
    background: #969696;
  }
`
Breadcrums.Link = styled.a`
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
  padding-left: 0;
  color: #969696;
  cursor: pointer;
  &:hover {
    padding-left: 14px;
    color: #589ee8;
  }
`
const GlobalHeaderStyled = styled.div`
  span {
    color: #f58624;
    text-transform: uppercase;
  }
  h2 {
    margin-top: 20px;
    line-height: 1.2;
  }
`

export const GlobalHeader = ({ metaTitle, title, desc }) => {
  return (
    <GlobalHeaderStyled>
      <span>{metaTitle}</span>
      <h2>{title}</h2>
      {desc ? <p>{desc}</p> : null}
    </GlobalHeaderStyled>
  )
}

export const GlobalSectionContent = styled.div`
  margin-top: 80px;
  h4 {
    line-height: 1.4;
  }
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  ${({ children, ...props }) => ({ ...props })}
`

export const GlobalSection = styled.div`
  background: #0f2f55;
  padding: 120px 0;
  h4 {
    color: #fff;
    font-size: 40px;
    margin-bottom: 60px;
  }
`
export const Step = styled.div`
  &:after {
    position: absolute;
    left: 41px;
    width: 2px;
    background: #eee;
    content: "";
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  position: relative;
  height: 100%;
  span {
    display: block;
    flex: none;
    width: 80px;
    height: 80px;
    background: #589ee8;
    border-radius: 50%;
    text-align: center;
    margin-right: 20px;
    line-height: 2.5;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }
  h5 {
    font-size: 20px;
    margin: 0;
  }
`
export const GlobalSectionContentItem = styled.div`
  &:last-of-type {
    ${Step} {
      &:after {
        background: #fff;
      }
    }
  }
  ${({ children, ...props }) => ({ ...props })}
`
export const PriceNormal = styled.span`
  color: #a9a9a9;
  font-size: 14px;
  margin-right: 10px;
`
export const PriceDiscount = styled.span`
  color: #589ee8;
`
export const PriceSave = styled.span`
  color: #f58624;
  font-size: 14px;
`
export const TableSection = styled.div`
  margin-bottom: 60px;
  .ant-table-column-title {
    color: #61a3e9;
    font-weight: bold;
  }
`
export const CalcDiscount = ({ value }) => (
  <div style={{ textAlign: "right" }}>
    {value.discount ? (
      <>
        <div>
          <PriceNormal>Rp {numeral(value.price).format("0,0")}</PriceNormal>
          <PriceSave>(Save {value.discount}%)</PriceSave>
        </div>
        <div>
          <PriceDiscount style={{ fontWeight: "bold" }}>
            Rp{" "}
            {numeral(value.price - (value.price * value.discount) / 100).format(
              "0,0"
            )}
          </PriceDiscount>
        </div>
      </>
    ) : (
      <div>
        <PriceDiscount style={{ fontWeight: "bold" }}>
          Rp {numeral(value.price).format("0,0")}
        </PriceDiscount>
      </div>
    )}
  </div>
)

export const GlobalContentParagraf = styled.div`
  p {
    margin-top: 20px;
    & + h4 {
      margin-top: 40px;
    }
  }
`

export const DateContent = styled.div``

DateContent.Head = styled.div`
  background: #f7f8f9;
  padding: 20px;
  h4 {
    margin: 0;
    color: #61a3e9;
  }
`
DateContent.Content = styled.div`
  padding: 20px;
`
export const Globalfooter = styled.footer`
  background: #020001;
  padding: 80px 0;
  color: #fff;
`
Globalfooter.List = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 40px;
  li {
    &:first-of-type {
      span {
        text-transform: uppercase;
        color: #fff;
      }
    }
    span,
    a {
      color: #a5a5a5;
    }
  }
`
