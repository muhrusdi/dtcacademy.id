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
  const [theme] = useState({
    colorPrimary: "#35db85",
  })
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        bannerBg: file(relativePath: { eq: "18640.jpg" }) {
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
        return <CalcDiscount color={theme.colorPrimary} value={value} />
      },
    },
  ]

  const dataTable = [
    {
      key: "1",
      name: {
        title: "Biaya Spesial",
        desc: "untuk academia yang mendaftar dan melunasi sampai 7 Nov 2019",
      },
      price: { price: 1600000, discount: 65 },
    },
    {
      key: "2",
      name: {
        title: "Biaya Normal",
        desc: "untuk academia yang mendaftar dari tanggal 8 Nov - 15 Nov 2019",
      },
      price: { price: 1600000, discount: 50 },
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
        title="Android Beginner Class - DTC Academy"
        description="Start your career as an Android Developer with Android Beginner Class"
      />
      <Globalnav
        title="Android Beginner Class - DTC Academy"
        ref={haederRef}
        top={80}
        color={theme.colorPrimary}
        link="https://forms.gle/Swrbz9QA4LYnnEmPA"
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
              <h1>Start your career as an Android Developer with Android Beginner Class</h1>
              <p>
                Belajar Android dari dasar dengan mentor berpengalaman dan kembangkan keterampilan Kamu sebagai Android Developer. Kelas ini merupakan kelas pemula.

              </p>
              <GlobalButton background={theme.colorPrimary} border={`1px solid ${theme.colorPrimary}`} type="primary" onClick={clickToJadwal}>
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
                    href="#persiapan"
                  >
                    Persiapan
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
                      title="Android Beginner Class akan memberikan kamu fundamental yang kamu butuhkan untuk menjadi seorang Android Developer."
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={12}>
                          <div>
                            <h4>Tentang Kelas</h4>
                            <p>
                              Kelas ini merupakan kelas pemula dari rangkaian kelas intensif Android. Dengan mentor yang berpengalaman, pembelajaran yang menarik dengan berbagai studi kasus, dan dirancang khusus untuk pemula Android Developer. Kamu akan belajar dari dasar, hingga akhirnya mampu membangun aplikasi android layaknya aplikasi profesional.

                            </p>
                          </div>
                        </Col>
                        <Col sm={12}>
                          <div>
                            <h4>Program Output</h4>
                            <p>
                              Memiliki kemampuan dasar dari pemrograman Android, serta telah memiliki kemampuan untuk mengikuti kelas - kelas Android yang lainnya. Mampu membangun aplikasi Android dengan tampilan yang menarik layaknya aplikasi profesional. Menjadi modal awal dalam meniti karir sebagai Android Developer.

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
                      title="Kelas ini berbeda dengan kelas yang lain. Berikut yang akan kamu dapatkan di kelas ini :
"
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={24}>
                          <div>
                            <ul>
                              <li>Pembelajaran yang menarik dengan berbagai studi kasus</li>
                              <li>Mentor merupakan praktisi yang berpengalaman</li>
                              <li>16 Pertemuan eksklusif</li>
                              <li>
                                Ruang belajar yang nyaman
                              </li>
                              <li>Modul dan sertifikat kelulusan Android Beginner Class</li>
                              <li>
                                Free konsultasi
                              </li>
                              <li>Online group support</li>
                              <li>Belajar bersama dengan orang - orang yang memiliki ketertarikan yang sama</li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </GlobalSectionContent>
                  </Container>
                </SectionContent.Section>
              </InView>

              <InView key={2} onChange={handleChange}>
                <SectionContent.Section
                  id="#persiapan"
                  style={{
                    background: "#f5f5f5",
                  }}
                >
                  <Container>
                    <GlobalHeader
                      metaTitle="Persiapan"
                      title="Untuk mengikuti kelas ini, Kamu perlu memiliki kemampuan atau beberapa hal. Namun bukan berarti menjadi batasan, adapun hal - hal tersebut sebagai berikut :

"
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={24}>
                          <div>
                            <ul>
                              <li>Diharapkan memiliki latar belakang dan pengalaman menggunakan bahasa Java dan Pemrograman Berorientasi Objek</li>
                              <li>Perangkat mandiri seperti smartphone Android, dan Laptop. Rekomendasi spesifikasi laptop dengan RAM min 8 GB, CPU (Processor) min Core i5</li>
                              <li>16 Pertemuan eksklusif</li>
                              <li>
                                Kemauan belajar yang kuat serta berkomitmen
                              </li>
                              <li>Sebaik apapun pembelajaran yang diberikan, penentu keberhasilan tetap ada pada diri Kamu. Percaya diri, keseriusan belajar, dan mencoba memperbanyak pengalaman.</li>
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
                      title="Bahan ajar yang disajikan telah disusun sesuai kebutuhan dan pembaharuan terkini dari tren Android Developer saat ini."
                    />
                    <GlobalSectionContent>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step color={theme.colorPrimary}>
                              <Flex>
                                <span>01</span>
                                <div>
                                  <h5>Introduction and first case study</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              {/* <h4>Pengenalan Tentang User Interface</h4> */}
                              <p>
                                Pada pertemuan ini Kamu diberikan pengetahuan dasar mengenai Android dan ruang lingkup pengembangannya. Pada kesempatan ini juga diberikan studi kasus pertama, yang dimana kamu akan berkenalan dengan Activity, Intent, Bundle, View dasar, dan hal dasar lainnya. Kami menyediakan studi kasus menarik yang akan membantumu lebih mudah memahami, sehingga mampu membangun aplikasi sederhana yang istimewah.

                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step color={theme.colorPrimary}>
                              <Flex>
                                <span>02</span>
                                <div>
                                  <h5>User interaction </h5>
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
                                Pada pertemuan ini Kamu mulai bereksperimen dengan interaksi pengguna. Dibimbing untuk membangung aplikasi yang mudah digunakan. Kamu akan diberikan beragam pengalaman dengan studi kasus yang diberikan. Sesi ini Kamu akan diperkenalkan tentang pemanfaatan Resource, Views dan View Group, Dialog, serta Style dan Theme.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step color={theme.colorPrimary}>
                              <Flex>
                                <span>03</span>
                                <div>
                                  <h5>Explore more views</h5>
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
                                Pada pertemuan ini Kamu akan diberikan pengetahuan tambahan mengenai pemanfaatan Resource, Views dan View Group, Dialog, serta Style dan Theme. Tidak hanya itu, kamu akan mulai berkenalan dengan Material Component dan Recycler View. Hal ini demi membantumu lebih dalam lagi mengenai antarmuka pengguna. Tentu saja pertemuan ini juga diberikan studi kasus tersendiri, guna membuat Kamu lebih mudah dalam memahami.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>

                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step color={theme.colorPrimary}>
                              <Flex>
                                <span>04</span>
                                <div>
                                  <h5>Delightful user experience</h5>
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
                                Pada pertemuan ini Kamu akan diberikan studi kasus yang cukup kompleks. Pengetahuan tentang Resource, Views dan View Group, Dialog, serta Style dan Theme, Material Component,  Recycler View sangat penting dalam memberikan pengalaman pengguna yang menyenangkan. Olehnya itu pertemuan ini masih mengulangi hal tersebut, tidak hanya itu Kamu akan mulai bermain dengan Fragment. Melalui studi kasus yang diberikan Kamu akan dipandu untuk membangun aplikasi yang menarik layaknya aplikasi profesional.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step color={theme.colorPrimary}>
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
                                Di akhir kelas, kamu akan kami berikan tantangan yang disebut Final Project. Kamu akan belajar bekerja tim untuk menyelesaikan tantangan yang diberikan, serta tantangan tersebut memiliki tema yang berbeda - beda setiap tim. Hal ini kami lakukan sehingga kamu dapat berinovasi, mengasah keterampilan, belajar dengan nyaman dan tidak monoton. Kamu akan diberikan waktu untuk menyelesaikan project tersebut, tentu saja sambil berkonsultasi dengan mentor, serta akan diberikan kesempatan untuk mempresentasikan project tersebut.
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
                            <TableSection color={theme.colorPrimary}>
                              <Table
                                columns={columnsTable}
                                dataSource={dataTable}
                                pagination={{ position: "none" }}

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
                      metaTitle="Jadwal"
                      title="Jadwal Android Beginner Class"
                      desc=""
                    />

                    <GlobalSectionContent>
                      <Row type="flex">
                        <Col sm={6} xs={24}>
                          <div>
                            <DateContent.Head color={theme.colorPrimary}>
                              <h4>Mulai Belajar</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>16 November s/d</div>
                              <div>8 December 2019</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Head color={theme.colorPrimary}>
                              <h4>Hari dan Waktu</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>
                                Sabtu dan Minggu - Pukul 10 WITA - Selesai
                              </div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={6} xs={24}>
                          <div>
                            <DateContent.Head color={theme.colorPrimary}>
                              <h4>Lokasi</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>DTC Academy (Jl. Hertasning 1 No. 30 Tidung Makassar)</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={4} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4 style={{ opacity: 0 }}>Pilih</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <Button type="primary" style={{background: theme.colorPrimary, border: `1px solid ${theme.colorPrimary}`}}>
                                <a
                                  href="https://forms.gle/Swrbz9QA4LYnnEmPA"
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

                          <span style={{ color: "#333" }}>
                            Batas akhir pendaftaran
                            <span style={{ fontWeight: "bold" }}></span> sampai{" "}
                            <span style={{ fontWeight: "bold" }}>
                              15 November 2019
                            </span>
                          </span>
                        </p>
                        <Flex style={{ marginTop: 40 }}>
                          <span style={{ marginRight: 20 }}>
                            Untuk info selengkapnya silahkan
                          </span>
                          <Button size="large" type="primary" style={{background: theme.colorPrimary, border: `1px solid ${theme.colorPrimary}`}}>
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
                                Q : Dapatkah saya memulai karir sebagai Android Developer?
                              </h4>
                              <p>
                                A: Ya, kelas ini dikemas khusus untuk pemula Android Developer. Kamu akan memiliki modal dasar yang sangat bermanfaat dalam meniti karir.
                              </p>
                            </div>
                            <div style={{ marginBottom: 40 }}>
                              <h4>
                                Q : Saya belum pernah belajar tentang Android sebelumnya, apakah saya bisa mengikuti kelas ini?
                              </h4>
                              <p>
                                A : Ya, dalam kelas ini diajarkan dengan studi kasus yang menarik. Sehingga Kamu dapat dengan mudah memahami bahan Ajar. Serta Kamu mendapatkan akses yang mudah untuk berkonsultasi dengan pengajar.
                              </p>
                            </div>
                            <div style={{ marginBottom: 40 }}>
                              <h4>
                                Q : Saya tidak memiliki dasar dan pengalaman menggunakan bahasa Java, apakah saya bisa mengikuti kelas ini?
                              </h4>
                              <p>
                                Pengalaman menggunakan bahasa Java pastinya akan lebih mudah dalam mengikuti kelas. Namun apabila tidak memiliki dasar tersebut bukan jadi halangan, kemauan belajar yang kuat adalah kunci kesuksesanmu, iya, kamu adalah penentunya. Pengajar akan membantumu dalam belajar, berlatih, dan mencoba dengan studi kasus yang diberikan. Selama kamu memiliki komitmen, Kami akan dengan senang membantumu.
                              </p>
                            </div>
                            <div style={{ marginBottom: 40 }}>
                              <h4>
                                Q: Saya ingin mengikuti kelas, namun tidak memiliki perangkat yang direkomendasikan. Apakah saya bisa mengikuti kelas?
                              </h4>
                              <p>
                                A : Terkait pendaftar yang tidak memiliki perangkat mandiri seperti yang direkomendasikan, dapat menghubungi Kami untuk kami sediakan perangkatnya.
                              </p>
                            </div>
                            <div style={{ marginBottom: 40 }}>
                              <h4>
                                Q: Saya tidak bisa membayar langsung biaya kelas. Bagaimana mekanisme cicilan?
                              </h4>
                              <p>
                                A : Biaya untuk kelas ini memiliki dua harga yang berbeda yakni Rp. 560.000,-, dan Rp. 800.000,-.  Jika kamu tidak dapat membayar langsung sekaligus, kamu dapat membayar dengan metode cicilan sampai dengan 3 kali pembayaran. Pertanyaan lebih lanjut, kamu dapat menghubungi kami.
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
                }
                @media (min-wdith: 576px) {
                  width: 50%;
                }
              `}
          >
            <h4>Hubungi Kami</h4>
            <p>Untuk informasi lebih lanjut atau memiliki pertanyaan silahkan hubungi kami (WA :  085218353202 atau melalui social media di instagram @dtcacademy)</p>
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
              <Button size="large" type="primary" style={{background: theme.colorPrimary, border: `1px solid ${theme.colorPrimary}`}}>
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
