import React, { useRef, useEffect, useState } from "react"
import {
  Container,
  Banner,
  GlobalButton,
  BackgroundImage,
  CalcDiscount,
  Flex,
  Breadcrums,
  Step,
  TableSection,
  DateContent,
  BannerContent,
  GlobalSectionContentItem,
  GlobalHeader,
  GlobalContentParagraf,
  GlobalSection,
  GlobalSectionContent,
  SectionContent,
} from "../../components/styled"
import Globalnav from "../../components/globalnav"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Row, Col, Table, Button } from "antd"
import StickyBox from "react-sticky-box"
import Img from "gatsby-image"
import illusGrid from "../../images/Repeat Grid 2.svg"
import logoDtc from "../../images/logo-dtc.svg"
import { InView } from "react-intersection-observer"
import { css } from "@emotion/core"
import SEO from "../../components/gatsby-seo"
import GlobalfooterWrap from "../../components/globalfooter"

const Intro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        bannerBg: file(relativePath: { eq: "bg2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        footerLogo: file(relativePath: { eq: "lg-dtc.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const haederRef = useRef(null)
  const [idSection, setIdSection] = useState("#tentang-program")
  const breadcrumbsRef = useRef(null)

  const handleScroll = () => {
    if (!haederRef.current) return
    if (window.pageYOffset > 1000) {
      setTimeout(() => {
        haederRef.current.style.top = 0
      }, 100)
    } else {
      setTimeout(() => {
        haederRef.current.style.top = "-80px"
      }, 100)
    }
  }

  useEffect(() => {
    ;[...breadcrumbsRef.current.children].map(item => {
      item.classList.remove("active")
      if (idSection === item.firstChild.hash) {
        item.classList.add("active")
      }
    })
  }, [idSection])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false)
    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  })

  const handleClickBreadcrumb = e => {
    console.dir(e.target)
  }

  const columnsTable = [
    {
      title: "Biaya Pendidikan",
      dataIndex: "name",
      key: "name",
      render: text => (
        <div>
          {text.title ? <div>{text.title}</div> : <span>{text}</span>}
          {text.desc ? <div style={{ fontSize: 14 }}>{text.desc}</div> : null}
        </div>
      ),
    },
    {
      title: "",
      key: "price",
      dataIndex: "price",
      render: value => {
        return <CalcDiscount value={value} />
      },
    },
  ]

  const columnsTable2 = [
    {
      title: "Promo Pendaftaran",
      dataIndex: "name",
      key: "name",
      render: text => (
        <div>
          {text.title ? <span>{text.title}</span> : <span>{text}</span>}
          {text.desc ? <span>{text.desc}</span> : null}
        </div>
      ),
    },
    {
      title: "",
      key: "price",
      dataIndex: "price",
      render: value => {
        return <CalcDiscount value={value} />
      },
    },
  ]

  const dataTable = [
    {
      key: "1",
      name: {
        title: "Biaya Kelas",
        desc: "Pembayaran dilakukan upfront 100%",
      },
      price: { price: 1000000, discount: 50 },
    },
    {
      key: "1",
      name: "Biaya Registrasi",
      price: { price: 5000 },
    },
  ]

  const dataTable2 = [
    {
      key: "1",
      name: "Biaya Kelas (Promo awal)",
      desc: "Pembayaran dilakukan upgront 100%",
      price: { price: 1000000, discount: 50 },
    },
    {
      key: "1",
      name: "Biaya Registrasi",
      price: { price: 5000 },
    },
  ]

  const handleChange = (inView, entry) => {
    // setIdSection(e.target.id)
    if (inView) {
      setIdSection(entry.target.firstChild.id)
    }
  }

  return (
    <>
      <SEO title="Intro Programming Class - DTC Academy" />
      <Globalnav ref={haederRef} />
      <Banner>
        <BackgroundImage
          height={"100vh"}
          objectFit
          fluid={data.bannerBg.childImageSharp.fluid}
        />
        <BannerContent>
          <Container>
            <div
              css={css`
                @media (min-width: 576px) {
                  width: 70%;
                }
              `}
            >
              <h1>Be a Front End Developer and Create a great product.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                corporis!
              </p>
              <GlobalButton type="primary">Lihat Jadwal</GlobalButton>
            </div>
          </Container>
        </BannerContent>
      </Banner>
      <SectionContent style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0 }}>
          <StickyBox
            style={{
              marginTop: 120,
              marginBottom: 120,
              zIndex: 99,
              width: 190,
            }}
            offsetTop={180}
            offsetBottom={180}
          >
            <div>
              <Breadcrums ref={breadcrumbsRef}>
                <Breadcrums.Item className="active">
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#tentang-program"
                  >
                    Tentang Program
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#peluang-karir"
                  >
                    Peluang Karir
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#silabus-kelas"
                  >
                    Silabus Kelas
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#biaya-kelas"
                  >
                    Biaya Kelas
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#jadwal"
                  >
                    Jadwal
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link onClick={handleClickBreadcrumb} href="#faq">
                    FAQ Program
                  </Breadcrums.Link>
                </Breadcrums.Item>
              </Breadcrums>
            </div>
          </StickyBox>
        </div>
        {/* <SectionContent.Section> */}
        {/* <Container> */}
        <Row type="flex">
          {/* <Col
                style={{ minHeight: "100%" }}
                sm={6}
                css={css`
                  @media (max-width: 768px) {
                    display: none;
                  }
                `}
              >
                
              </Col> */}
          <Col sm={24} md={24} lg={24}>
            <div>
              <InView key={1} onChange={handleChange}>
                <SectionContent.Section id="#tentang-program">
                  <Container>
                    <GlobalHeader
                      metaTitle="Tentang Program"
                      title="Kelas User Interface (UI) Design akan mengajarkan Kamu tentang prinsip-prinsip mendesain sebuah tampilan aplikasi digital."
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={12}>
                          <div>
                            <h4>Tentang Program</h4>
                            <p>
                              Program ini terbuka bagi Anda yang tidak memiliki
                              latar belakang IT sebelumnya karena Anda akan
                              belajar coding dari awal melalui modul programming
                              fundamental, membangun aplikasi Web secara lengkap
                              dari Front End hingga Back End Development.
                            </p>
                          </div>
                        </Col>
                        <Col sm={12}>
                          <div>
                            <h4>Program Output</h4>
                            <p>
                              Menguasai coding dan dapat membangun aplikasi web
                              secara lengkap yaitu front end & back end
                              development.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </GlobalSectionContent>
                  </Container>
                </SectionContent.Section>
              </InView>
              <InView key={2} onChange={handleChange}>
                <SectionContent.Section
                  id="#peluang-karir"
                  style={{
                    background: "#f5f5f5",
                  }}
                >
                  <Container>
                    <GlobalHeader
                      metaTitle="Peluang Karir"
                      title="Saatnya menjadi UI Desainer yang handal dan berkarir di industri digital."
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={24}>
                          <div>
                            <p>
                              Kebutuhan akan apli kasi yang menarik dan sesuai
                              dengan kebutuhan user menjadi sangat penting untuk
                              perusahaan sehingga peluang kerja seorang UI
                              Designer sangat di butuhkan. Anda dapat bekerja di
                              perusahaan start up, perusahaan besar, ataupun
                              memulai membuat produk digitalmu sendiri.
                              Kesempatan ini ada di depan anda jangan sampai
                              anda melewatkan kesempatan baik ini.
                            </p>
                            <p>
                              DTC Academy bekerja sama dengan banyak perusahaan
                              baik start up ataupun perusahaan besar untuk
                              dukungan karir mu kedepan. Anda dapat memulai
                              karir sebagai UI Designer di perusahaan rekan
                              kami.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </GlobalSectionContent>
                  </Container>
                </SectionContent.Section>
              </InView>

              <InView key={3} onChange={handleChange}>
                <Container id="#silabus-kelas">
                  <SectionContent.Section
                    style={{ borderBottom: "1px solid #d8d8d8" }}
                  >
                    <GlobalHeader
                      metaTitle="Silabus Kelas"
                      title="Bahan ajar yang disajikan telah disusun sesuai kebutuhan industri digital saat ini."
                    />
                    <GlobalSectionContent>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step>
                              <Flex>
                                <span>01</span>
                                <div>
                                  <h5>Introudction</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              {/* <h4>Pengenalan Tentang User Interface</h4> */}
                              <p>
                                Modul ini memberikan pengetahuan dasar bagaimana
                                Anda dapat memulai coding dalam bahasa
                                pemrograman apapun. Modul ini menggunakan
                                Javascript dan python sebagai pilihan bahasa
                                pemrogramannya untuk mengeksplorasi syntax dari
                                sebuah bahasa pemrograman, dan menunjukan cara
                                menulis dan mengkesekusi memulai membangun
                                sebuah aplikasi serta mengertikan cara kerjanya
                                yang sederhana. Modul ini juga akan memberikan
                                pemahaman dasar bagaimana sebuah website
                                bekerja.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step>
                              <Flex>
                                <span>02</span>
                                <div>
                                  <h5>Website Fundamentals</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              {/* <h4>
                                Mengenal prinsip-prinsip dalam mendesain UI
                              </h4> */}
                              <p>
                                Pada modul ini Anda akan belajar bagaimana
                                membangun sebuah website yang interaktif dan
                                menarik sederhana dengan HTML, CSS dan
                                Javascript. HTML digunakan untuk membuat
                                struktur dari sebuah website, CSS digunakan
                                untuk membuat sebuah website menjadi Indah dari
                                sisi warna, ukuran, dll dan Javascript digunakan
                                untuk membuat sebuah website menjadi lebih
                                interaktif dengan adanya animasi.
                              </p>
                              <p>
                                Setelah Anda menyelesaikan modul ini, Anda akan
                                memiliki kemampuan untuk membuat sebuah website
                                yang interaktif.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step>
                              <Flex>
                                <span>03</span>
                                <div>
                                  <h5>Intro to Python</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              {/* <h4>
                                Mengenal prinsip-prinsip dalam mendesain UI
                              </h4> */}
                              <p>
                                Pada modul ini anda akan belajar salah satu
                                bahasa pemrograman yang populer digunakan
                                software engineer dalam sebuah perusahaan. Anda
                                akan memulai membuat program dalam bahasa
                                python. Anda akan belajar dari awal sampai anda
                                dapat memahami bagaimana menggunakan bahasa
                                python ini dengan mudah dan menyenangkan.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>

                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step>
                              <Flex>
                                <span>04</span>
                                <div>
                                  <h5>Python and Javascript In Action</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              {/* <h4>
                                Mengenal prinsip-prinsip dalam mendesain UI
                              </h4> */}
                              <p>
                                pada modul ini, anda akan berkenalan lebih jauh
                                tentang python dan javascript. Setelah anda
                                menyelesaikan modul ini, anda diharapkan dapat
                                memiliki pemahaman dasar tentang 2 bahasa
                                pemrograman.{" "}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step>
                              <Flex>
                                <span>05</span>
                                <div>
                                  <h5>Final Project</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              {/* <h4>
                                Mengenal prinsip-prinsip dalam mendesain UI
                              </h4> */}
                              <p>
                                diakhir kelas, anda akan kami berikan tantangan
                                untuk membuat sebuah project akhir untuk melihat
                                perkembangan anda selama mengikuti kelas ini.
                                Anda akan diberikan waktu untuk menyelesaikan
                                project akhir ini dan mempresentasikan project
                                akhir anda.{" "}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>
                    </GlobalSectionContent>
                  </SectionContent.Section>
                </Container>
              </InView>
              <InView key={4} onChange={handleChange}>
                <Container id="#biaya-kelas">
                  <SectionContent.Section
                    style={{ borderBottom: "1px solid #d8d8d8" }}
                  >
                    <GlobalHeader
                      metaTitle="Biaya Kelas"
                      title="Rincian Biaya Pendidikan"
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60} justify="end">
                        <Col sm={23} xs={24}>
                          <div>
                            <TableSection>
                              <Table
                                columns={columnsTable}
                                dataSource={dataTable}
                                pagination={{ position: "none" }}
                                footer={() => {
                                  let total = 0
                                  dataTable.map(item => {
                                    total += item.price.price
                                  })
                                  return (
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <span>Total Biaya</span>
                                      <span>{total}</span>
                                    </div>
                                  )
                                }}
                              />
                            </TableSection>
                            <TableSection>
                              <Table
                                columns={columnsTable}
                                dataSource={dataTable}
                                pagination={{ position: "none" }}
                                footer={() => {
                                  let total = 0
                                  dataTable.map(item => {
                                    total += item.price.price
                                  })
                                  return (
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div style={{ width: "50%" }}>
                                        <div
                                          style={{
                                            fontSize: 16,
                                            color: "#333",
                                          }}
                                        >
                                          Total Biaya
                                        </div>
                                        <div
                                          style={{
                                            fontSize: 14,
                                            marginTop: 10,
                                            color: "#bfbfbf",
                                          }}
                                        >
                                          Promo ini hanya terbatas untuk 15
                                          pendaftar pertama sampai dengan
                                          tanggal yang ditentukan.
                                        </div>
                                      </div>
                                      <span>{total}</span>
                                    </div>
                                  )
                                }}
                              />
                            </TableSection>
                          </div>
                        </Col>
                      </Row>
                    </GlobalSectionContent>
                  </SectionContent.Section>
                </Container>
              </InView>

              <InView key={5} onChange={handleChange}>
                <SectionContent.Section id="#jadwal">
                  <Container>
                    <GlobalHeader
                      metaTitle="Jadwal"
                      title="Jadwal Kelas Intensive UI Master Class."
                      desc="Silahkan pilih jadwal, sesuai schedule yang telah di tentukan."
                    />

                    <GlobalSectionContent>
                      <Row type="flex">
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Tanggal Pelaksanaan</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>30 September 2019 s/d</div>
                              <div>21 Oktober 2019</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Tanggal Pelaksanaan</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>30 September 2019 s/d</div>
                              <div>21 Oktober 2019</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Tanggal Pelaksanaan</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>30 September 2019 s/d</div>
                              <div>21 Oktober 2019</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                      </Row>
                      <div style={{ marginTop: 60 }}>
                        <p style={{ color: "#bfbfbf" }}>
                          Ket: Promo early bird berlaku sampai tanggal 27 Sep
                          2019
                        </p>
                        <Flex style={{ marginTop: 40 }}>
                          <span style={{ marginRight: 20 }}>
                            Untuk info selengkapnya silahkan
                          </span>
                          <Button size="large" type="primary">
                            Hubungi Kami
                          </Button>
                        </Flex>
                      </div>
                    </GlobalSectionContent>
                  </Container>
                </SectionContent.Section>
              </InView>

              <InView key={6} onChange={handleChange}>
                <SectionContent.Section
                  id="#faq"
                  style={{
                    background: "#f5f5f5",
                  }}
                >
                  <Container>
                    <GlobalHeader
                      metaTitle="FAQ Program"
                      title="Frequently Ask Question"
                      desc="Pertanyaan yang sering diajukan kepada kami, akan kami jawab disini."
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={24}>
                          <GlobalContentParagraf>
                            <h4>
                              Mengapa program UX Design sangat penting dan
                              relevan untuk saya saat ini?
                            </h4>
                            <p>
                              Apabila Anda memiliki produk digital seperti
                              aplikasi web atau mobile, bekerja di Startup
                              Digital, seorang Graphic Designer , atau siapa
                              saja yang ingin mendalami UI Design dan berkarir
                              sebagai UI Designer, course UI Design ini akan
                              sangat bermanfaat untuk Anda. User Interface
                              Design atau lebih dikenal dengan istilah UI Design
                              bukan hanya sekedar menciptakan estetika design
                              yang Indah untuk aplikasi web atau mobile Anda.
                            </p>
                            <p>
                              UI Design adalah tentang bagaimana pengguna
                              aplikasi memiliki keterikatan secara emosional dan
                              memiliki pengalaman yang mudah, menyenangkan dan
                              tepat sasaran dalam menggunakan sebuah aplikasi
                              web atau mobile. UI Design yang baik akan sangat
                              mempengaruhi customer loyalty dalam menggunakan
                              aplikasi web atau mobile Anda
                            </p>
                            <p>
                              Program training UI Design kami akan mempelajari
                              prinsip-prinsip yang perlu Anda kuasai dalam
                              menciptakan UI Design yang terbaik untuk aplikasi
                              web atau mobile Anda.
                            </p>
                            <h4>
                              Apakah saya harus memiliki background design untuk
                              mengikuti course ini?
                            </h4>
                            <p>
                              Apabila Anda memiliki background design sebelumnya
                              akan jauh lebih baik. Tapi course ini terbuka
                              untuk siapa saja yang tidak memiliki background
                              design sama sekali karena course ini akan lebih
                              banyak mendalami tentang karakteristik user untuk
                              menciptakan produk digital maupun desain yang
                              dapat diterima oleh masyarakat luas.
                            </p>
                          </GlobalContentParagraf>
                        </Col>
                      </Row>
                    </GlobalSectionContent>
                  </Container>
                </SectionContent.Section>
              </InView>
            </div>
          </Col>
        </Row>
        {/* </Container> */}
        {/* </SectionContent.Section> */}
      </SectionContent>
      <GlobalSection
        css={css`
          position: relative;
        `}
      >
        <Container>
          <Flex justifyContent="center">
            <div
              style={{ textAlign: "center" }}
              css={css`
                position: relative;
                z-index: 10;
                @media (min-wdith: 576px) {
                  width: 50%;
                }
              `}
            >
              <h4>Anda tertarik dengan program intensive kelas kami?</h4>
              <Button size="large" type="primary">
                Daftar Sekarang
              </Button>
            </div>
          </Flex>
          <img
            style={{ position: "absolute", top: 0 }}
            src={illusGrid}
            alt=""
          />
          <img
            style={{ position: "absolute", right: "20%", bottom: 0 }}
            src={illusGrid}
            alt=""
          />
        </Container>
      </GlobalSection>
      <GlobalfooterWrap data={data} />
    </>
  )
}

export default Intro
