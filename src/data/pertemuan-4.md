---
path: "pertemuan-4"
date: "2019-05-04"
title: "Pertemuan #4"
---

# Programming Fundamental

# Intro Javascript

Javascript adalah salah satu bahasa pemgrograman yang paling populer di dunai. Dibuat 20 years tahun yang lalu dan merupakan satu-satunya bahasa pemgrograman yang didukun secara native oleh web browser.

Javascript sekarang banyak digunakan di sisi server dengan munculnya NodeJS sebagai platform yang banyak diadobsi oleh pengembang backend sekarang ini.

## Istilah-istilah di Javascript

- Case sensitive

Javascript ada bahasa yang case sensitive. Dimana sebuah nama variable nama yang ditulis huruf besar akan berbeda dengan variable yang ditulis huruf kecil, seperti `namaVariable` dengan `NamaVariable`.

- Comment

Kita dapat menulis komentar di javascript dengan dua cara
  - `/* komentar */` untuk multi line
  - `// komentar` single line

- Literal dan Identifier
  - Literal adalah sebuah value yang didefinisikan di sebuah kode, seprti sebuah number, string, boolean.
  - Identifier adalah urutan sebuah karakter yang dapat digunakan untuk mengidentifikasikan sebuah variable.



  ```javascript
  Test
  test
  _test
  $test
  ```

  - Reserved word

    Kita tidak dapat menggunakan sebagai identifier

    ```javascript
      break
      do
      instanceof
      typeof
      case
      else
      new
      var
      catch
      finally
      return
      void
      continue
      for
      switch
      while
      debugger
      function
      this
      with
      default
      if
      throw
      delete
      in
      try
      class
      enum
      extends
      super
      const
      export
      import
      implements
      let
      private
      public
      interface
      package
      protected
      static
      yield
    ```



## Variable

Variable adalah sebuah literal yang di `assign`/simpan ke sebuah identifier yang dapat kemudian dipanggil didalam sebuah program.

### Using `var`

var a = 0

Jika kita lupa menambahkan `var` di variable yang telah di assign sebuah nilai, maka nilai tersebut kita assign ke variable yang tidak terdeklarasi.
Ketika membuat sebuah varibale yang tidak terassign sebuah value, maka nilainya menjadi `undefined`.

Selain `var`, kita dapat menggunakan `const` dan `let`.

## Type

### Primitive type

Tipe-tipe primitive yaiut:

  - Number (float, integer)
  - String (template string)
  - Boolean

Tipe data special:
  - null: tipe data yang mengindikasikan bahwa variable tersebut tidak mempunya nilai
  - undefined: tipe data yang mengidentifikasikan bahwa variable tersebut tidak terinisialisasi atau tidak ada nilai

Selain itu terdapat tipe data function, array, object yang kesemuanya termasuk kedalam tipe data object.

## Function

Function adalah block kode yang dapat didefinisikan sekali kemudian dapat digunakan kembali kapanpun kita inginkan.

### Syntax

Contoh deklarasi function:

```javascript
function belajarJS() {
  // lakukan sesuatu
}
```

Function juga dapat di assign ke variable:

```javascript
const belajarJS = function(parameter) {
  // lakukan seuatu
}

// Arrow Function

const belajarJS = (parameter) => {
  // lakukan sesuatu
}
```

### Parameter

Function dapat melawatkan sebuah parameter:

```javascript
const belajarJS = () => {
  // lakukan sesuatu
}

const belajarJS = parameter => {
  // lakukan sesuatu
}

const belajarJS = (param1, param2) => {
  // lakukan sesuatu
}
```

### Return Value

Setiap function dapat mengembalikan sebuah nilai:

```javascript
const belajarJS = () => {
  // lakukan sesuatu
}

belajarJS() // undefined

const belajarJS = () => {
  return "test"
}

belajarJS() // test
```

## Loop

Javascript menyediakan banya perulangan

### `for`

```javascript
const list = ['a', 'b', 'c']
for (let i = 0; i < list.length; i++) {
  console.log(list[i]) //value
  console.log(i) //index
}
```

### `forEach`

```javascript
const list = ['a', 'b', 'c']
list.forEach((item, index) => {
  console.log(item) //value
  console.log(index) //index
})

```

### `map`

```javascript
const list = ['a', 'b', 'c']
list.map((item, index) => {
  console.log(item) //value
  console.log(index) //index
})

```

## Condition

Dibahasa pemrograman juga ada istilah percabangan, dimana digunakna untuk mengkondisikan sebuah alur dalam program.

### `if else`

Contoh:

```javascript
if (toggle) {
  // lakukan sesuatu
} else {
  // lakukan seusatu yang lain
}
```

### `switch`

Contoh:

```javascript
switch (nama) {
  case "andi":
    // lakukan sesuatu
  case "ari":
    // lakukan sesuatu
  default:
    // lakukan seusuatu
}
```

## Event

Javascript di browser menggunakana model Event Drivent Programming.

### Event Handler

Kita dapat merespon setiap event menggunakan event handler, yang event handler merupakan hanyalah sebuah function yang dipanggil saat ingin menghandle sebuah event.

Javascript menyediakan beberapa cara untuk mendaftarkan sebuah event handler.

#### Inline event handler

```javascript
<a href="site.com" onclick="dosomething();">A link</a>
```
#### Menggunakan `addEventListener()`

```javascript
window.addEventListener('load', () => {
//window loaded
})

```

Kita dapat menglisten pada object `window` untuk membuat global event. Dan kita juga dapat membuat listen untuk element yang lebih spesifik.

```javascript
const link = document.getElementById('my-link')
link.addEventListener('click', event => {
// link clicked
})
```





