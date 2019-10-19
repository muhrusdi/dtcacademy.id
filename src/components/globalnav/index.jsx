import React, { forwardRef } from "react"
import { css } from "@emotion/core"
import { Button } from "antd"
import { Globalnav, Container, Flex } from "../styled"
import logoDtc from "../../images/logo-dtc.svg"
import { Link } from "gatsby"

const GlobalnavWrap = forwardRef(({ title, link = "#", top }, ref) => {
  return (
    <Globalnav ref={ref} top={top}>
      <Container>
        <Flex justifyContent="space-between" alignItems="center" height={80}>
          <Globalnav.Logo>
            <Flex alignItems="center">
              <div>
                <Link to="/">
                  <img style={{ height: 40 }} src={logoDtc} alt="dtc" />
                </Link>
              </div>
              <span
                css={css`
                  @media (max-width: 576px) {
                    display: none !important;
                  }
                `}
              >
                {title}
              </span>
            </Flex>
          </Globalnav.Logo>
          <div>
            <Button size="large" type="primary">
              <a href={link} target="__blank">
                Daftar Sekarang
              </a>
            </Button>
          </div>
        </Flex>
      </Container>
    </Globalnav>
  )
})

export default GlobalnavWrap
