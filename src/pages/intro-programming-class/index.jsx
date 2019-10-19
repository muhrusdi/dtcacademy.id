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

const Intro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        bannerBg: file(relativePath: { eq: "bg-intro3.jpg" }) {
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
        title="Intro Programming Class - DTC Academy"
        description="Be a skillful Programmer with Intro Programmer Class"
      />
      <Globalnav
        title="Intro Programming Class"
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
              <h1>Be a Skillful Programmer with Intro Programming Class</h1>
              <p>
                Belajar fundamental programming dengan mentor berpengalaman dan
                jadilah programmer yang handal. Kelas ini terbuka untuk semua
                (tidak perlu background IT)
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
                      title="Kelas Intro Programming akan mengajarkan kamu fundamental yang kamu butuhkan untuk menjadi seorang programmer"
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={12}>
                          <div>
                            <h4>Tentang Kelas</h4>
                            <p>
                              Kelas Ini terbuka untuk umum. Tidak perlu memiliki
                              latar belakang IT sebelumnya. Kamu akan belajar
                              coding dari awal. Dengan mentor yang merupakan
                              praktisi, kamu akan dibimbing untuk memahami dasar
                              programming, membangun aplikasi web secara lengkap
                              mulai dari Back End dan Front End Development
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
                      metaTitle="Kelebihan Kelas"
                      title="Kelas ini berbeda dengan kelas yang lain. Berikut yang akan kamu dapatkan dikelas ini :"
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={24}>
                          <div>
                            <ul>
                              <li>Materi mudah dipahami</li>
                              <li>Tidak perlu background IT untuk bergabung</li>
                              <li>Ruang belajar yang nyaman</li>
                              <li>
                                Mentor merupakan praktisi IT yang berpengalaman
                              </li>
                              <li>Online Group Support</li>
                              <li>
                                10 kali pertemuan eksklusif dengan dukungan
                                mentor berpengalaman
                              </li>
                              <li>Sertifikat dan modul KIT</li>
                              <li>Free Konsultasi</li>
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
                                Modul ini memberikan pengetahuan dasar bagaimana
                                Kamu dapat memulai coding dalam bahasa
                                pemrograman apapun. Modul ini menggunakan
                                Javascript dan python sebagai pilihan bahasa
                                pemrogramannya untuk mengeksplorasi syntax dari
                                sebuah bahasa pemrograman, dan menunjukan cara
                                menulis dan memulai membangun sebuah aplikasi
                                yang sederhana. Modul ini juga akan memberikan
                                pemahaman dasar bagaimana sebuah website
                                bekerja. Modul ini memberikan gambaran bagaimana
                                mindset seorang programmer, dan langkah awal
                                yang harus dilakukan ketika ingin bergelut di
                                dunia pemrograman. Di modul ini juga akan
                                dipaparkan bagaimana cara kerja dari sebuah
                                aplikasi web
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
                                Pada modul ini Kamu akan belajar bagaimana
                                membangun sebuah website yang sederhana dengan
                                HTML, CSS dan Javascript. HTML digunakan untuk
                                membuat struktur dari sebuah website, CSS
                                digunakan untuk membuat sebuah website menjadi
                                Indah dari sisi warna, ukuran, dll dan
                                Javascript digunakan untuk membuat sebuah
                                website menjadi lebih interaktif dengan adanya
                                animasi.
                              </p>
                              <p>
                                Setelah Kamu menyelesaikan modul ini, Kamu akan
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
                                Pada modul ini kamu akan belajar salah satu
                                bahasa pemrograman yang populer digunakan
                                software engineer dalam sebuah perusahaan. Kamu
                                akan memulai membuat program dalam bahasa
                                python. Kamu akan belajar dari awal sampai anda
                                dapat memahami bagaimana menggunakan bahasa
                                python ini dengan mudah dan menyenangkan
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
                                Pada modul ini, kamu akan berkenalan lebih jauh
                                tentang python dan javascript. Setelah kamu
                                menyelesaikan modul ini, kamu diharapkan dapat
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
                                  <h5>Level Up your skill</h5>
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
                                Diakhir kelas, kamu akan kami berikan tantangan
                                untuk membuat sebuah project akhir untuk melihat
                                perkembangan kamu selama mengikuti kelas ini.
                                Kamu akan diberikan waktu untuk menyelesaikan
                                project akhir ini dan mempresentasikan project
                                akhir kamu.
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

export default Intro
