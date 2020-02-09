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
      price: { price: 1000000, discount: 50 },
    },
    {
      key: "1",
      name: "Biaya Registrasi",
      price: { price: 50000 },
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
        link="https://forms.gle/qiLvYUBfMZQRS7WYA"
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
                              Kamu dapat menggunakan aplikasi management tool,
                              merancang dan membangun tampilan situs web dari
                              sisi frontend, membuat dan menggunakan API web
                              yang didukung database, serta mengamankan dan
                              mengelola otentikasi dari sisi backend.
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
                                          Promo ini hanya terbatas untuk 15
                                          pendaftar pertama sampai dengan
                                          tanggal yang ditentukan.
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
                                <li>Cicilan (Sampai 3 kali pembayaran)</li>
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
                              <div>21 Oktober s/d</div>
                              <div>15 November 2019</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Hari dan Waktu</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>
                                Senin, Rabu, Jumat (Pukul 19.00 - 21.00) -{" "}
                                <b>Kelas Malam</b>
                              </div>
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
                                  href="https://forms.gle/qiLvYUBfMZQRS7WYA"
                                  taget="__blank"
                                >
                                  Daftar
                                </a>
                              </Button>
                            </DateContent.Content>
                          </div>
                        </Col>
                      </Row>
                      <Row type="flex">
                        <Col sm={6} xs={24}>
                          <div>
                            <DateContent.Content>
                              <div>21 Oktober s/d</div>
                              <div>23 November 2019</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Content>
                              <div>
                                Sabtu, Minggu (Pukul 10.00 - 13.00) -{" "}
                                <b>Kelas Pagi</b>
                              </div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={6} xs={24}>
                          <div>
                            <DateContent.Content>
                              <div>DTC Academy (Jl. Hertasning 1 No. 30)</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={4} xs={24}>
                          <div>
                            <DateContent.Content>
                              <Button type="primary">
                                <a
                                  href="https://forms.gle/qiLvYUBfMZQRS7WYA"
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
                          Pendaftaran Kelas :{" "}
                          <span style={{ color: "#333" }}>
                            Tanggal{" "}
                            <span style={{ fontWeight: "bold" }}>3</span> sampai{" "}
                            <span style={{ fontWeight: "bold" }}>
                              16 Oktober 2019
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
                                Q : Apakah program ini terbuka bagi yang tidak
                                memiliki background IT?
                              </h4>
                              <p>
                                A: Ya! Program ini terbuka untuk Kamu yang tidak
                                memiliki background IT sebelumnya. Kamu akan
                                diajarkan dari tahapan paling awal yaitu
                                programming fundamental sehingga program ini
                                terbuka untuk siapa saja yang tidak memiliki
                                background IT.
                              </p>
                            </div>
                            <div style={{ marginBottom: 40 }}>
                              <h4>
                                Q : Apa minimal Spesifikasi laptop untuk bisa
                                mengikuti kelas ini
                              </h4>
                              <p>
                                A : Tidak ada spesifikasi minimal laptop untuk
                                mengikuti kelas ini. Selama laptopmu dapat
                                menjalankan browser, code editor, kamu dapat
                                mengikuti kelas ini.
                              </p>
                            </div>
                            <div style={{ marginBottom: 40 }}>
                              <h4>
                                Q : Berapa minimal dan maksimal usia untuk bisa
                                mengikuti kelas ini?
                              </h4>
                              <p>
                                Kelas ini terbuka untuk semua. tidak ada batasan
                                minimal usia. Selama kamu bisa menggunakan
                                komputer dalam penggunaan sehari-hari, kamu
                                dapat mengikuti kelas ini
                              </p>
                            </div>
                            <div style={{ marginBottom: 40 }}>
                              <h4>
                                Q: Saya tidak bisa membayar langsung biaya
                                kelas, bagaimana mekanisme cicilan?
                              </h4>
                              <p>
                                A : Biaya untuk kelas ini adalah Rp. 500.000,-.
                                Jika kamu tidak dapat membayar langsung
                                sekaligus, kamu dapat membayar dengan metode
                                cicilan sampai dengan 3 kali pembayaran.
                                Pertanyaan lebih lanjut, kamu dapat menghubungi
                                kami di WA +6282199448180
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
                <a href="https://forms.gle/qiLvYUBfMZQRS7WYA" target="__blank">
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
