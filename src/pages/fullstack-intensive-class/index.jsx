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
import numeral from "numeral"
import illusGrid from "../../images/Repeat Grid 2.svg"
import { InView } from "react-intersection-observer"
import { css } from "@emotion/core"
import SEO from "../../components/gatsby-seo"
import GlobalfooterWrap from "../../components/globalfooter"
import { discount } from "../../components/utils"
import Particles from "react-particles-js"

const Fullstack = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        bannerBg: file(relativePath: { eq: "full-stack.jpeg" }) {
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

  const clickToJadwal = () => {
    document.getElementById("#jadwal").scrollIntoView()
  }

  const handleClickBreadcrumb = e => {
    console.log(e.target)
    document.getElementById(e.target.hash).scrollIntoView()
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

  const dataTable = [
    {
      key: "1",
      name: {
        title: "Biaya Kelas",
        desc: "Pembayaran dilakukan upfront 100%",
      },
      price: { price: 7499999, discount: 60 },
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
      <SEO
        title="Fullstack Developer Intensive Class - DTC Academy"
        description="Be a skillful Programmer with Intro Programmer Class"
      />
      <Globalnav
        title="Fullstack Developer Intensive Class"
        ref={haederRef}
        top={80}
        link="https://docs.google.com/forms/d/1dpLZYHaBL7_f_qeBLenRqjFowljAH1CNxk4epMeUQ34/edit?usp=sharing"
      />
      <Banner>
        <Particles
          style={{ position: "absolute", zIndex: 2 }}
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
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
              <h1>Fullstack Developer Intensive Class</h1>
              <p>
                Merancang dan mengembangkan aplikasi web modern dengan pondasi
                yang kuat untuk aplikasi, situs web dan sistem yang digunakan
                dalam industri digital saat ini
              </p>
              <GlobalButton type="primary" onClick={clickToJadwal}>
                Lihat Jadwal
              </GlobalButton>
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
                    Tentang Kelas
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#peluang-karir"
                  >
                    Kelebihan Kelas
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
                      title=" Fullstack Developer Intensive Class adalah program belajar intensif tentang cara kerja aplikasi web serta bagaimana menjadi seorang Fullstack Developer."
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={12}>
                          <div>
                            <h4>Tentang Kelas</h4>
                            <p>
                              Dengan program ini kamu akan diajarkan materi
                              dasar serta keterampilan unik untuk berkarir di
                              industri digital sebagai Fullstack Developer.
                              Program yang diajarkan seputar cara penggunaan
                              management tool dan bagaimana menjadi frontend
                              serta backend developer.
                            </p>
                          </div>
                        </Col>
                        <Col sm={12}>
                          <div>
                            <h4>Program Output</h4>
                            <p>
                              Setelah mengikuti program ini kalian yang dari
                              seorang pemula bisa menjadi seorang fullstack
                              developer yang dapat merancang dan membangun
                              website profesional kalian sendiri. Dengan
                              menguasai berbagai skill teknis dan softskill dari
                              program ini kalian sudah siap untuk bekerja secara
                              kolaboratif untuk menginplementasikannya dalam
                              proyek kerja nyata
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
                      metaTitle="Program Kelas"
                      title="Kelas ini memiliki beberap program:"
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={24}>
                          <div>
                            <ul>
                              <li>
                                Pertemuan Tatap Muka (Jumat, Sabtu, Minggu)
                              </li>
                              <li>Online Learning</li>
                              <li>Self Learned (Senin, Rabu)</li>
                            </ul>
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
                                  <h5>Introduction</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              {/* <h4>Pengenalan Tentang User Interface</h4> */}
                              <p>
                                Pada modul ini kamu akan belajar tentang
                                bagaimana sebuah website bekerja, pengenalan
                                dasar-dasar terminal, Git, HTML, CSS dan
                                Javascript serta pengetahuan tentang
                                pengembangan produk.
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
                                  <h5>Building Good Foundations</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              <ol type="a">
                                <li>
                                  <h4>Developer Setup</h4>
                                  <p>
                                    Pada modul ini kamu akan belajar melakukan
                                    setup tools development, yang terdiri dari
                                    Command Line Basics, Install Bahasa
                                    Pemrograman Pilihan, Install Version
                                    Management Tool (Git), dan Version Controll
                                    With Git / Commit and Push on Github.
                                  </p>
                                </li>
                                <li>
                                  <h4>Basic Programming</h4>
                                  <p>
                                    Pada modul ini kamu akan belajar tentang
                                    Dasar Inti dari Programming, Algoritma dan
                                    Struktur Data, Intro to Regex dan REST API.
                                  </p>
                                </li>
                                <li>
                                  <h4>Software Architecture</h4>
                                  <p>
                                    Pada modul ini kamu akan belajar tentang
                                    Dasar OOP, Classes and Objects, Inheritance,
                                    Instance and class methods, Public vs
                                    Private, Routing Request dan Understanding
                                    MVC Architecture.
                                  </p>
                                </li>
                                <li>
                                  <h4>Relational Database</h4>
                                  <p>
                                    Pada modul ini kamu akan belajar merancang
                                    Database Schema Design and SQL, Database
                                    Relationship, CRUD SQL, Advanced Join Query,
                                    Connecting DB to your application with ORM
                                    dan In Depth to Active Record.
                                  </p>
                                </li>
                              </ol>
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
                                  <h5>Web Development</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              <ol type="a">
                                <li>
                                  <h4>Web Interface Development</h4>
                                  <p>
                                    Pada modul ini kamu akan belajar tentang
                                    Product Design, UI/UX Principles, HTML
                                    Basics, In Depth with CSS dan Bootstrap
                                    Basic and Responsive Grid System.
                                  </p>
                                </li>
                                <li>
                                  <h4>ES6, Fresh from Oven</h4>
                                  <p>
                                    Pada modul ini kamu akan belajar tentang
                                    Javascript Fundamentals, What’s new in ES6,
                                    Javascript Tooling (Babel, Webpack, Yarn)
                                    dan DOM Event and AJAX
                                  </p>
                                </li>
                                <li>
                                  <h4>Front End meet Back End</h4>
                                  <p>
                                    Pada modul ini kamu akan belajar bagaimana
                                    mengintegrasikan aplikasi back end dengan
                                    front end yang kamu sudah buat sebelumnya.
                                    Di akhir modul ini, kamu akan memiliki
                                    sebuah portofolio yang utuh dari sebuah
                                    aplikasi website dan tentunya dapat menjadi
                                    modal yang sangat baik untuk kamu untuk
                                    memulai karir sebagai developer yang siap
                                    kerja.
                                  </p>
                                </li>
                                <li>
                                  <h4>Build a Project with Your Teams</h4>
                                  <p>
                                    Pada modul ini kamu akan kami tantang selama
                                    satu minggu untuk membuat project dari
                                    materi yang kamu dapatkan sebelumnya. Bagian
                                    ini akan memberikan kamu lebih banyak
                                    pengalaman dalam hand’s on pembuatan
                                    aplikasi web dengan pendekatan best practice
                                    sehingga aplikasi mu sudah sangat siap
                                    digunakan sebagai bagian dari portofolio mu.
                                  </p>
                                </li>
                              </ol>
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
                                  <h5>The Final</h5>
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
                                Pada modul ini kamu dikelompokkan kedalam tim
                                yang beranggotakan 3 - 4 orang dan saling
                                berkolaborasi untuk merancang produk/layanan.
                                Tiap tim akan menentukan unique value, design,
                                code, dan deploy production serta
                                mempresentasikan produk/layanannya.
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
                                    total += discount(item)
                                  })
                                  return (
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
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
                                          Promo ini hanya terbatas untuk 5 orang
                                          pendaftar pertama sampai dengan
                                          tanggal yang ditentukan
                                        </div>
                                      </div>
                                      <span style={{ fontWeight: "bold" }}>
                                        Rp {numeral(total).format("0,0")}
                                      </span>
                                    </div>
                                  )
                                }}
                              />
                            </TableSection>
                            <div
                              css={css`
                                ul {
                                  margin-top: 20px;
                                }
                              `}
                            >
                              <h4>Mekanisme pembayaran</h4>

                              <ul>
                                <li>Pembayaran Langsung</li>
                                <li>Cicilan</li>
                              </ul>
                            </div>
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
                      metaTitle="Jadwal dan Pilihan Kelas"
                      title="Jadwal Kelas Intro Programming"
                      desc="Silakan pilih jadwal kelas yang cocok dengan kamu"
                    />

                    <GlobalSectionContent>
                      <Row type="flex">
                        <Col sm={6} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Mulai Belajar</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div> 1 April 2020 s/d</div>
                              <div>1 Agustus 2020</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Hari dan Waktu</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>Senin - Jumat (Pukul 10.00 - 17.00)</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={6} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Lokasi</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>DTC Academy (Jl. Hertasning 1 No. 30)</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={4} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4 style={{ opacity: 0 }}>Pilih</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <Button type="primary">
                                <a
                                  href="https://docs.google.com/forms/d/1dpLZYHaBL7_f_qeBLenRqjFowljAH1CNxk4epMeUQ34/edit?usp=sharing"
                                  taget="__blank"
                                >
                                  Daftar
                                </a>
                              </Button>
                            </DateContent.Content>
                          </div>
                        </Col>
                      </Row>
                      <div style={{ marginTop: 60 }}>
                        <p style={{ color: "#bfbfbf" }}>
                          Catat tanggal dan batas waktu pendaftarannya
                          <br />
                          Pendaftaran Kelas :{" "}
                          <span style={{ color: "#333" }}>
                            Tanggal{" "}
                            <span style={{ fontWeight: "bold" }}>
                              24 Februari
                            </span>{" "}
                            sampai{" "}
                            <span style={{ fontWeight: "bold" }}>
                              24 Maret 2020
                            </span>
                          </span>
                        </p>
                        <Flex style={{ marginTop: 40 }}>
                          <span style={{ marginRight: 20 }}>
                            Untuk info selengkapnya silahkan
                          </span>
                          <Button size="large" type="primary">
                            <a
                              href="https://api.whatsapp.com/send?phone=6282199448180"
                              target="__blank"
                            >
                              Hubungi Kami
                            </a>
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
                            <div style={{ marginBottom: 40 }}>
                              <h4>
                                Q : Saya tidak bisa membayar langsung biaya
                                kelas, bagaimana mekanisme cicilan?
                              </h4>
                              <p>
                                A: Kami menerima pembayaran melalui cicilan yang
                                dapat kamu angsur sebanyak 3 kali. Pertanyaan
                                lebih lanjut bisa menghubungi kami di
                                +62852183532
                              </p>
                            </div>
                            <div style={{ marginBottom: 40 }}>
                              <h4>Q : Apakah ada jaminan kerja?</h4>
                              <p>
                                A : Kami akan membantu kamu mendapatkan
                                pekerjaan. Perusahaan rekanan kami akan
                                melakukan rekrutmen bagi setiap peserta yang
                                lulus kelas.
                              </p>
                            </div>
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
          background: #fff;
        `}
      >
        <Container>
          <div
            style={{ textAlign: "center" }}
            css={css`
              position: relative;
              z-index: 10;
              max-width: 80%;
              margin: 0 auto;
              h4 {
                color: #333;
                margin-bottom: 30px;
              }
              @media (min-wdith: 576px) {
                width: 50%;
              }
            `}
          >
            <h4>Hubungi Kami</h4>
            <p>
              Untuk informasi lebih lanjut atau memiliki pertanyaan silahkan
              hubungi kami
            </p>
            <div
              css={css`
                display: flex;
                justify-content: center;
                margin-top: 70px;
                @media (max-width: 576px) {
                  display: block;
                }
                & > div {
                  padding: 0 20px;
                  span,
                  svg {
                    vertical-align: middle;
                  }
                  span {
                    padding: 0 10px;
                    font-size: 24px;
                  }
                }
              `}
            >
              <div>
                <span>
                  <svg
                    fill="#3bccbe"
                    role="img"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                  </svg>
                </span>
                <span>+62 852183532</span>
              </div>
              <div>
                <span>
                  <svg
                    role="img"
                    fill="#E91E63"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <title>Instagram icon</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </span>
                <span>@dtcacademy</span>
              </div>
            </div>
          </div>
        </Container>
      </GlobalSection>
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
              <h4>Kamu tertarik mengikuti kelas ini?</h4>
              <Button size="large" type="primary">
                <a
                  href="https://docs.google.com/forms/d/1dpLZYHaBL7_f_qeBLenRqjFowljAH1CNxk4epMeUQ34/edit?usp=sharing"
                  target="__blank"
                >
                  Daftar Sekarang
                </a>
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

export default Fullstack
