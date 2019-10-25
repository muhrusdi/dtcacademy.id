---
path: "pertemuan-3"
date: "2019-05-04"
title: "Pertemuan #3"
---

## Daftar Isi

- Pengenalan
- Dasar-dasar HTML
- Document Heading
- Document Body
- Tag-tag yang berinteraksi dengan text
- Link
- Tag-tag Container dan struktur halaman HTML


## 2. Dasar-dasar HTML

### 2.1. Struktur halaman HMTL

Langkah awal kita perlu mendefinisikan tipe dari document yang akan kita buat, tiper tersebut meberitahukan browser bahwa halaman tersebut ada halaman HMTL.

HMTL modern menggunakan doctype, seperti contoh berikut:

```
<!DOCTYPE html>
```

Kemudian kita defenisikan sebuag element `html`, yang mana menpunya tag opening (pembuak) dan closing (penutup):

```html
<!DOCTYPE html>
<html>
...
</html>
```

Umunya tag-tag HTML didefinisikan berpasangan dengan  tag _opening_ dan _closing_. Tag _closing_ ditulis sama dengan _opening_, tetapi dengan `/`:

```html
<contohtag>contoh text</contohtag>
```

Selain itu, terdapat juga beberapa tag-tag yang sifatnya _self-closing_, yang artinya tag tersebut tidak membutuhkan tag _closing_ terpisah dan juga tidak terdapat konten didalamnya.

Tag awal `html` digunakan dipermulaan document, tepatnya setelah pendefinisian tipe document.

Tag penutup `html` adalah bagian terakhir yang ada di HTML.

Berikut contohnya, kita memiliki dua element: `head` dan `body`:

```html
<!DOCTYPE>
<html>
  <head>
  ...
  </head>
  <body>
  ...
  </body>
</html>
```

Didalam `head` kita akan definisikan tag-tag yang sangat penting dalam mengembangkan halaman web, seperti tag title, metadata, internal atau extermal CSS dan javascript. Umumnya hal-hal yang tidak tampil dihalaman, hanya membantu browser (atau untuk keperluan bots seperti Google search bot) untuk menampilkan web lebih lengkap.

Kemudian didalam tag `body` kita menulis konten dari halam web. Sesuatu yang terlihat.

### 2.2. Tag vs Element

Apa perbedaan tag dengan element?

Element mempunyai tag opening dan tag closing. Pada contoh berikut kita akan membuat element paragraf:

```html
<p>Paragraf</p>
```

Jadi element merupakan, keseluruhan list berikut:
- Tag opening
- Text content
- Closing tag

Jika element tidak terdapat tag closing, hanya ditulis dengan tag opening, dan juga tidak terdapat kontent. Bisa dikatakan kita mungkin menggunakan tag.

### 2.3 Attributes

Tag awal dari sebuah element dapat memiliki _snippet_ khusus untuk memberikan informasi seputar element, disebut dengan _attribute_.

Syntax attribute harus memiliki `key` dan `value`:

```html
<p class="nama-kelas">sebuah paragraf</p>
```

> Kalian juga dapat menggunakan _single quotes_ `''`, tapi penggunaan double quote di HMTL lebih umum.

Kita dapat mendefinisikan lebih dari satu attribute:

```html
<p class="nama-kelas" id="nama-id">Sebuah paragraf</p>
```

dan juga terdapat attribute yang sifatnya _boolean_, yang artinya kamu hanya butuh `key`:

```javascript
<script defer src="file.js"></script>
```

Attrbute `class` dan `id` adalah atribute yang paling sering digunakan. Keduanya berguna di CSS dan javascript.

Perbedaan antara keduanya adalah bahwa `id` bersifat unik dalam context halaman web, tidak diperbolehkan ada yang dalam satu halaman dan hanya dapat menyimpan satu value.

Sedangkan `class`dapat menyimpan lebih dari satu `class`

```html
<p class="nama-kelas-1 nama-kelas-2">Paragraf text</p>
```
Dalam penamaan `class` menggunakan beberapa kata umumnya menggunakan dash `-`, tetapi ini hanya kebiasaan.

### 2.4. Case insensitive

HTML bersifat case insensitive, yarn artinya penulisan tag harus diperhatikan, tidak diperbolehkan menggunakan huruf besar.

Penulisan harusnya seperti ini:
```html
<p>Paragraf text</p>
```

bukan seperti ini:
```html
<P>Paragraf text</P>
```
## 3. Heading Document

Tag `head` berisikan tag-tag khusus yang mendefinisikan properti dari document, seperti _title_ dan _description_.
Yang mana `head` selalu ditulis sebelum tag `body`, tepatnya setelah tag _opening_ `html`:

```html
<!DOCTYPE html>
<html>
  <head>
  ...
  </head>
  ...
</html>
```
Yang perlu diketahui bahwa tag `head` ini selamanya tidak memiliki attribute. Dan kita tida dapat menulis kontent didalamnya.
Ini hanya sebuah container untuk tag-tag yang lain. Didalamnya memungkinka kita untuk menulis berbagai macam tag-tag. Tergantung kebutuhan anda:
- `title`
- `script`
- `link`
- `style`
- `meta`

### 3.1. title

Tag title mendefinisak title halaman web di browser, tag ini termasuk tag yang sangat penting karena merupakan salah satu faktor untuk _Searcb Engine Optimization_ SEO.

### 3.2. script

Tag ini digunakan untuk menambahkan javascript kedalam halaman web.
Kamu dapat memasangnya seacara _internal_, menggunakan tag opening kemudian tag closing.

```html
<script src="file.js"></script>
```

> Perlu diketahui bahwa tag `script` memiliki attribute type dengan _value_ standar `text/javascript`, namun ini hanya opsional.

Terkadang kita perlu meletakkan tag script dibagian bawah halaman. tepatnya diatas tag _closing_ `</body>`. Kenapa? untuk keperluan performa.
Memuat `script` lebih awal hal itu akan memblokir render halaman hingga `script` selesai dimuat.

### 3.2 link

Tag `link` digunakan untuk mengatur hubungan antara document dengan sumber daya lainnya. Terutama digunakan untuk menautkan file css external untuk dimuat.
ELement ini tidak memiliki tag `closing`.

```html
<html>
  <head>
    ...
    <link href="file.css" rel="stylesheet">
    ...
  </head>
</html>
```

Tag ini memungkinkan kita untuk mendefinisikan attribute, diantaranya adalah attribute `media` yang mana memungkin memuat `resource` yang berbeda:

```html
<link href="file.css" media="screen" rel="stylesheet">
<link href="print.css" media="print" rel="stylesheet">
```
atau kita dapat mengaitkan dengan favicon.

```html
<link rel="apple-touch-icon" sizes="180x180" href="/assets/appletouch-icon.png">
```

### 3.3. style

Tag ini digunakan untuk menambah `style` kedalam document secara external.
Penggunaan:

```html
<style>
  .nama-kelas {
  ...
  }
</style>
```
### 3.4. meta

Tag `meta` melakukan berbagai tugas yang sangat penting, khusu untuk SEO.
`meta` hanya mempunyai tag opening.

```html
<meta name="description" content="kontenku">
```

meta ini digunakan oleh google untuk menghasilkan penjelasan halaman.

## 4. Document Body

Element `body` terletak setelah element `head`, seperit halnya tag `html` dan `head` hanya ada satu tag `body` dalam satu halaman. Didalam tag body ini kita menulis semua tag-tag yang berhubungan dengan kontent halaman web.

### 4.1. Block element vs inline element

Semua element yang kita definisikan dalam halaman body, umumnya dapat diklasifikasikan kedalam 2 kategori:
- Block element (`p`, `div`, element heading, list dan list item, dll)
- Inline element (`a`, `span`, `img`, dll)

## 5. Tag-tag yang berhubungan dengan text

### 5.1 Tag `p`

Ini adalah tag untuk mendefinisikan text:

```html
<p>Text</p>
```

didalam tag `p` kita dapat menambahkan element-element inline seperti `span` atau `a`, kita tidak dapat menambahkan element yang sifatnya block.

### 5.2 Tag `span`

Ini adalah tag inline dimana kita dapat gunakan untuk membuat section dalam paragraf untuk dapat diubah menggunakan css.

```html
  <p>contoh text dan span <>
```

berikut element-element yang berkaitan dengan text:
- br
- heading
- strong
- hr
- code
- list

## Link

Link didefinisikan menggunakan tag `a`, dengan memakai attribute href:

contoh:

```html
<a href="https://myblog.com">Click</a>
```

contoh link menggunakan relative url:

```html
<a href="/halaman-b">Click untuk ke halaman lain</a>
```

Jika kalian ingin membuka di link di tab baru, kalian dapat menggunakan attribute `target="_blank"`

```html
<a href="/halaman-b" target="_blank">buka di tab baru</a>
```

## 6. Container tag dan Page structure HTML

### 6.1 Container tag


HTML menyediakan beberapa tag-tag container. Dimana tag container dapat berisikan tag-tag yang tidak spesifik.

Contoh tag container:
- `article`
- `section`
- `div`

#### 6.1.1 Tag `article`

Tag `article` biasanya digunakan untuk membungkus content seperti `postingan forum, blog, berita, comment`

contoh:

```html
<div>
  <article>
    <h1>Judul postingan 1</h1>
    <a ...>Baca selengkapnya</a>
  </article>
  <article>
    <h1>Judul postingan 2</h1>
    <a ...>Baca selengkapnya</a>
  </article>
</div>
```

#### 6.1.2 Tag `Section`

Tag section merepresentasikan sebuah bagian di document, dimana setiap section memiliki tag heading.

Contoh:

```html
<section>
  <h2>Section 1</h2>
  <p>paragraf...</p>
  <img .../>
</section>
<section>
  <h2>Section 2</h2>
  <p>paragraf...</p>
  <img .../>
</section>
```

#### 6.1.3 Tag `div`

Tag `div` dalam praktiknya dapat menggantikan semua tag container yang lain (generic), kita tingal definisikan attribute class/id untuk memberikan nama container.

```html
<div class="section">
  <div class="article">
    ...
  </div>
  <div class="article">
    ...
  </div>
</div>
```

### 6.2 Tag-tag yang berhubungan dengan halaman web.


#### 6.2.1 Tag `nav`

Tag nav dibuat untuk mendefinisikan navigasi dari sebuah halaman web.

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>
```

Tag-tag yang berhubungan dengan halaman web diantaranya:
- header
- footer
- aside



# 3. Basic CSS

CSS adalah singkatan dari Cascading Style Sheets, yaiut bahasa yang kita gunakan untuk memberi style ke file HTML.

File CSS hanya terdiri dari kumpulan beberapa aturan CSS:

- Selector
- Deklarasi Block

Selector adalah sebuah string yang mengidetifikasikan satu atau lebih element pada halaman web.

Deklarasi block adalah berisi satu atau lebih deklarasi properti dan value.

Contoh:

```css
p {
  font-size: 20px;
}
```

contoh multiple rule:

```css
p {
  font-size: 20px;
}

a {
  color: blue;
}
```

Kemudian selector dapat memilih satu atau lebih item:

```css
p, a {
  color: blue;
}
```

Dari contoh diatas kita memilih elemen dengan selector `p`, yang bearti kita memilih semua elemen `p` yang ada dihalaman tersebut.

Setiap tag/element yang ada di HTML dapat dijadikan selector, contoh `div`, `span`, `img`.

Jika element yang kita pilih di css lebih dari satu, maka semua element tersebut akan diubah.

Element HTML memiliki 2 attribute yang dapat digunakan untuk menspesifikkan element yang ingin kita ubah yaitu, `class` dan `id`.

Kelas disimbolkan dengan `.`, sedangkan id disimbolkan dengan `#`

Contoh Kelas:

```html
<p class="deskripsi">
  ...
</p>
<p>
  ...
</p>
```

```css
.deskripsi {
  color: blue;
}
```

Contoh ID:

```html
<p id="deskripsi">
  ...
</p>
<p class="deskripsi">
  ...
</p>
```

```css
#deskripsi {
  color: blue;
}
```

### 3.1 Menghubungkan CSS dengan HTML

#### 3.1.1 Menggunakan tag `link` (external style)

```html
<link rel="stylesheet" type="text/css" href="myfile.css">
```

#### 3.1.2 Menggunakan tag `style` (internal style)

```html
<style>
  ...css...
</style>
```

### 3.1.3 Menggunakan attribute style (inline style)

```
<p style="color: blue;">text</p>
```