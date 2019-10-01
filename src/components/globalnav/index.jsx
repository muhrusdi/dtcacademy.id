import React, { forwardRef } from "react"
import { css } from "@emotion/core"
import { Button } from "antd"
import { Globalnav, Container, Flex } from "../styled"
import logoDtc from "../../images/logo-dtc.svg"
import { Link } from "gatsby"

const GlobalnavWrap = forwardRef(({ title }, ref) => {
  return (
    <Globalnav ref={ref}>
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
                Be a UI Designer and Create a great product.
              </span>
            </Flex>
          </Globalnav.Logo>
          <div>
            <Button size="large" type="primary">
              Daftar Sekarang
            </Button>
          </div>
        </Flex>
      </Container>
    </Globalnav>
  )
})

export default GlobalnavWrap
