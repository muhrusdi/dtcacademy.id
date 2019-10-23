---
path: "pertemuan-2"
date: "2019-05-04"
title: "Pertemuan #2"
---

1. [Introudction](#1.introduction)
2. [Overview of What Yo'll Be Learning](#2.overview)
3. [Tools](#3.tools)
4. [Basic HTML](#4.basichtml)

## Introduction Web Fundamental

Selamat datang di Pengantar Pengembangan Web. Kami sangat senang dapat berbagi kepada anda sedikti tentang bagaimana menjadi sorang pengembang web. Pengembang web atau web developer adalah seoarng yang bertanggunjawab menulis kode aplikasi berbasis web yang kemudian dapat diakses lewat browser.

Istilah web developer memiliki makna yang lebih umum, sehingga web developer dapat dibagi menjadi tiga yaitu:

- Frontend web developer
- Backend web developer
- Fullstack web developer

**Frontend web developer** atau umumnya dikenal dengan Frontend developer, yaitu pengembang web yang bertanggung jawab membangun aplikasi web yang berhubungan langsung dengan pengguna, seperti tampilan dari aplikasi web. Apa yang kita lihat dari sebuah halaman web merupakan buah kerja dari seoarng frontend web developer.

**Backend web developer** atau dikenal juga dengan Backend developer, yaitu pengembang yang memiliki tanggung jawab mengembangkan web yang tidak berhubungan langsung dengan pengguna. Semua kebutuhan sumber daya yang dibutuhkan seorang frontend developer untuk ditampilkan ke pengguna itu semua ditangani oleh bagian Backend web developer.

**Fullstack web developer** yaitu seorang pengembang yang memiliki semua keahlian yang telah disebutkan sebelumnya, yaiut frontend developer dan backend developer. Untuk menjadi seoarng fullstack ini tidaklah mudah, karena kita perlu mengetahu apa yang ada dibagian frontend dan backend secara bersamaan.

Dari sini mungkin kita sudah ada gambaran mengenai web developer, dimana web developer itu mempunyai bagian-bagian didalamnya dan dapat disimpulkan bahwa web developer dalam cakupan tanggunjawab hanya ada dua, yaitu frontend dan backend developer, sengkan fullstack hanya istilah bagi yang menguasai keduanya.

Namun pada kesempatan ini, didalam kelas intro ini, kita akan banyak berfokus di bagian pengembangan frontend atau dibagian sisi client nya.

Setelah mengetahui apa itu web developer, sekarang kita akan mengetahui bagaimana web itu bekerja.

Berikut adalah ilustrasi bagaimana web bekerja:

![Front-end-dev1.png](https://content-static.upwork.com/blog/uploads/sites/3/2015/05/05110037/Front-end-dev1.png)

`Image source:` `https://www.upwork.com/hiring/development/front-end-developer/`

1. Pertama ketika pengguna mengakses atau membuka sebuah web di browser. Dapat dikatakan bahwa pengguna sedang berinteraksi dengan sebuah web.
2. Ketika pengguna mengakses halaman web tersebut maka terdapat proses yang berjalan dibelakan yang menjalankan permintaan ke server.
3. Untuk melakukan permintaan ke database server, maka perlu sebuah script yang mengirim permintaan tersebut ke backend.
4. Selain script yang berada disisi client, terdapat script disisi server untuk menerima permintaan user.
5. Permintaan dari user kemudian diproses, apakah data yang diminta oleh diuser terdapat dalam database server atau tidak. Jika data tersebut tersedia di database, maka kemudian server merespon kemabali ke pengguna.

## Overview of What Yo’ll Be Learning

<a href="https://dtcacademy.id/intro-programming-class/outline">Outline</a>

## Tools

Sebelum kita mulai, kita butuh untuk melengkapi tool yang kita butuhkan untuk dapat melangkah ke tahap selanjutnya.

- Browser: Chrome, Firefox.
- Text Editor: VSCode, Atom, Sublime Text.
- Terminal/Command Prompt
- Git: Github, Gitlab

## Basic HTML

### Pengenalan HTML

HTML adalah singkatan dari Hyper Text Markup Language, yaitu sebuah bahasa markup/template yang digunakan untuk membuat sebuah halaman web. HTML memungkinkan seorang user untuk membuat dan menyusun bagian paragraf, heading, link atau tautan, dan blockquote untuk halaman web dan aplikasi.

HTML bukanlah bahasa pemrograman, dan itu berarti HTML tidak punya kemampuan untuk membuat fungsionalitas yang dinamis. Sebagai gantinya, HTML memungkinkan user untuk mengorganisir dan memformat dokumen, sama seperti Microsoft Word.

HTML adalah suatu cara untuk mengimplementasikan konsep hypertext dalam suatu dokumen. HTML saat ini merupakan standar internet yang didefinisikan dan dikendalikan penggunaannya oleh World Wide Web Consortium (W3C).

Sebelum suatu HTML disahkan sebagai suatu dokumen HTML standar, harus disetujui oleh W3C untuk dievaluasi secara ketat. Dengan demikian, setiap terjadi perkembangan level, HTML memiliki suatu kelebihan yang baru dalam hal penampilannya dibandingkan versi-versi sebelumnya. Jika terdapat cacat/bug pada perintah-perintah tertentu hal itu dapat dihindari.

Setiap terjadi perkembangan suatu versi HTML, maka browser pun harus mengeluarkan pembaharuan agar bisa mendukung kode-kode HTML yang baru tersebut. HTML itu sendiri awalnya dari bahasa SGML (Standard Generalized MarkUp Language), yang sudah digunakan sejak dulu untuk memformat dokumen agar bersifat portabel. Tata cara penulisan HTML merupakan penyederhanaan SGML.

Versi HTML telah memasuki versi ke 5, dimana telah dirilis versi-versi sebelumnya yang tentunya dengan peningkatan fitur dan perbaikan pada HMTL. Dimana versi 1 diperkenalkan pada tahun 1993, kemudian versi 2 pada tahun 1995, kemudian versi selanjutnya yaiut versi 3 di tahun januari 1997 dan versi 4 pada desember 1997.

### Dasar-dasar HTML

Dalam prakteknya, jalan yang paling populer ketika mengembangkan sebuah halaman HTML, sangat penting untuk diketahu hal mendasar dalam mengbangun blok-blok.

Contoh sebuah HTML

ini adalah snippet atau blok kode untuk membuat sebuah paragraf menggunakan tag `p`:

```html
<p>Belajar dasar-dasar HTML</p>
```

ini adalah snippet untuk membuat sebuah list menggunakna tag `ul`, yang mana memilik arti `unordered list`

```html
<ul>
  <li>list pertama</li>
  <li>list kedua</li>
  <li>list ketiga</li>
</ul>
```

ketika halaman HTML tersedia atau tampil di browser, tag-tag tersebut diterjemahkan, browser akan merender element-element sesuai atura-aturan yang  telah ada yang kemudian menampilkan tampilan visual.

#### Tag

Tag adalah blok bangunan dasar HTML, setiap tag memiliki tag penbuka dan penutup, dan terdapat beberapa tag dimana tag pembuka dan penutuh pada titik yang sama.

Contoh blok kode h1:

```html
<h1>Title document</h1>
```

Tag `h1` merupakan tag heading yang digunakan menampilka bagian yang dianggap penting dari sebuah halaman web, dikarenakan ukurannya yang terlihat lebih besar sehingga memungkinkan kita untuk memahami informasi penting yang akan dibaca pengguna. Serta membantu mesin pencari seprti google atau bing dalam memahami bagian penting didalam web kita.

#### Jenis-jenis Tag

- `h1`, `h2`, `h3`, `h4`, `h5` dan `h6`. Ini adalah tingkatan tag untuk sebuah judul ataupun sub judul. Kita dapat melihat tag yang paling pertama adalah h1 kemudian h2 dan seterusnya.
- `p` mendefinisikan sebuah paragraf.
- `a` Anchor. Anchor digunakan untuk menghubungkan antara satu halaman ke halaman yang lain, atau dapat juga digunakan sebagai external link untuk membuka web yang lain
- `div`, tag divisi. Digunakan untuk membentuk sebuah pengelompokan dalam sebuah halaman web.
- `span` digunakan untuk sebuah potongan text kecil, misalkan deskripsi dari sebua title.
- `ol`, `ul` dan `li` adalah tag-tag yang digunakan untuk membuat sebuah list.
- `button` adalah sebuah tombol. Tag ini digunakan dalam sebuah aksi dalam halaman web. Contoh dalam pengisian formulir pendaftaran di halaman web, untuk menyelesaikan isian formulir tersebut terdapat tombol yang digunakan untuk mengirim formulir yang telah dilengkapi.
- `img` digunakan untuk menampilkan gambar.
- `input`, terkadang kita membutuhkan masukan dari pengguna lewat halam web, entah itu komentar atau pendaftaran pengguna dan lain sebagainya. Dengan input kita dapat mengambil informasi-informasi dari pengguna lewat isian yang ada dalam halaman tersebut.
- `textarea` mirip dengan `input` namun penggunaannya yg agak berbeda dimana tag ini digunakan untuk text yang lebih banyak.
- `select` dan `option`, tag ini digunakan untuk meberikan sebuah pilihan terhadap penguna. Misalnya pilihan negara dimana mereka berasal dan lain sebagainya.