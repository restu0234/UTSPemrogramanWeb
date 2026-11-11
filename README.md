# UTSPemrogramanWeb
# Tugas UTS WEB
# LAPORAN PRAKTIKUM JAVASCRIPT DOM dan EVENT HANDLING
* **`Nama`** : Restu Aji Prasetyo
* **`NIM`**  : 312510034
* **`Kelas`**: I253C
* **`Dosen`**: Agung Nugroho S.Kom.,M.Kom.

# Berikut adalah hasil dari Praktikum dengan perubahan step by step nya mulai dari pembuatan laman dasar HTML sampai ke Javascript
# Pada bagian ini kita buat sampai ke tahap pemberian style/css nya
Langkah Pertama kita membuat bagian halaman dasar login seperti dibawah ini:
![Gambar1](img/halaman_login_mentah.png)
Selanjutnya membuat bagian modal awal untuk tombol untuk permintaan **Lupa Password dan Daftar Akun**
![Gambar2](img/haalaman_login_modal_awal.png)
Membuat juga bagian modal awal untuk bagian **Peringatan Lupa *Input Email dan Lupa Input Password* serta sapaan *selamat datang sesuai nama email USER yang yang LOGIN***
![Gambar3](img/modal_alert_halaman_login.png)
Setelah pemberian CSS maka tampilan login final seperti dibawah ini, tinggal membuat bagian JavaScript untuk menarik data dari data javascript yang sudah diberikan dosen dan kita modifikasi.
![Gambar4](img/Laman_login_ready.png)
Berikut Tampilan untuk **Input Lupa Password**
![Gambar5](img/lupa_password.png)
dan juga dibawah ini adalah tampilan ketika Input **Daftar akun baru**
![Gambar6](img/daftar_akun.png)
Lanjut pada bagian Halaman kedua yakni kita membuat halaman dasar untuk **Halaman Dashboard** seperti dibawah ini, baian sidebar juga masih belum rapi karena belum diberi sentuhan CSS.
![Gambar7](img/dashboard_mentah.png)
Selanjutnya membuat modal tampilan ringkasan untuk **Total Jenis Buku, Total Stock Buku, serta Total Pengiriman berjalan.**
![Gambar8](img/dashboard_awal.png)
Pada bagian selanjutnya kita memberi sentuhan CSS agar tampilan dashboard makin menarik sebelum memberikannya javascript juga
![Gambar9](img/dashboard_modif_css.png)
Berikut adalah Tampilan Dashboard ketika full window
![Gambar10](img/dashboard_full.png)
dan dibawah ini adalah tampilan Dashboard ketika minimize window.
![Gambar11](img/dashboard_mode_minimaze.png)
Pada bagian ketiga kita membuat dasar untuk **Halaman Stok Buku.**
![Gambar12](img/laman_stok_mentah.png)
Agar lebih menarik kita beri sentuhan CSS agar pengunjung web lebih nyaman. Pada langkah ini data javascript dan script untuk menarik data belum dibuat, maka tampilannya akan tampak seperti dibawah ini.
![Gambar13](img/laman_stok_css.png)
Pada bagian keempat kita membuat dasar untuk **Halaman Checkout** seperti dibawah ini.
![Gambar14](img/halaman_checkout_mentah.png)
Selanjutnya kita memberi sentuhan style inline pada bagian option serta warna angka total pembayaran.
![Gambar15](img/halaman_checkout_setengah_jadi.png)
Setelah itu kita lanjut untuk memberikan sentuhan style secara total pada bagian halaman Checkout ini sebelum pemberian Javascript.
![Gambar16](img/halaman_checkout_css_belum_javascript.png)
![Gambar17](img/halaman_checkout_bawah.png)
Pada bagian kelima kita harus membuat dasar untuk halaman **pelacakan status pengiriman atau Tracking.**
![Gambar18](img/Halaman_trackkinng_mentah.png)
Setelah itu kita beri stylenya agar lebih menarik untuk dilihat.
![Gambar19](img/halaman_tracking_css.png)
 # 
 # Pada bagian ini kita mulai memberikan javascript dan menghubungkannya dengan data.js yang telah diberikan oleh Dosen
 Selanjutnya setelah pemberiann Script untuk membuat web ini lebih interaktif dan dimanipulasi dengan mengambil data yang ada dari data.js yang telah diberikan, maka sekarang kita lihat tahapan selanjutnya untuk trial.
Pertama kita coba untuk bagian input Lupa Password seperti dibawah ini.
![Gambar20](img/lupa_passwordnya.png)
Dan hasilnya setelah klik **Kirim Intruksi** maka akan muncul pesan seperti berikut yaitu *Intruksi reset password telah dikirim sesuai dengan email yang dinput*.
![Gambar21](img/intruksi_lupa_password.png)
Kedua kita akan coba input pada bagian **Daftar Akun**
![Gambar22](img/daftar_akunku.png)
Setelah klik **Daftar Sekarang** maka akan muncul pesan popup yang memberitahukan bahwa *Pendaftaran akun atas nama tsb berhasil*.
![Gambar23](img/daftar_akun_berhasil.png)
Untuk selanjutnya kita coba pada saat email kosong kita klik **Login**.
![Gambar24](img/email_masih_kosong.png)
Maka nantinnya akan muncul popup peringatan untuk **Masukkan email dulu bro/sist**
![Gambar25](img/email_kosong.png)
ketika email yang diisi invalid pun kolom tersebut akan memperingatkan agar diisi email yang sesuai.
![Gambar26](img/email_invalid.png)
Lalu, kita coba juga untuk membuat agar saat password belum diisi juga akan muncul popup peringatan nantinya.
![Gambar27](img/password_masih_kosong.png)
Maka akan muncul popup peringatan seperti dibawah ini **Masukkan Password juga ya bro/sis
![Gambar28](img/password_kosong.png)
kita buat agar ketika input password salah akan muncul peringatan
![Gambar29](img/ketika_password_salah.png)
Peringatan **Email/Password salah** seperti dibawah ini.
![Gambar30](img/password_salah.png)
Selanjutnya kita Login dengan email dan password yang benar
![Gambar31](img/login_restu.png)
maka setelah klik login akan muncul sapaan seperti dibawah ini
![Gambar32](img/login_berhasil.png)
Setelah itu akan mendapatkan popup informasi ketika login berhasil
![Gambar33](img/lanjut_masuk.png)
Berikut adalah Tampilan Menu Dashboard untuk **User Restu**
![Gambar34](img/dashboard_restu.png)
Berikutnya kita coba juga untuk login menggunakan data **Siti**
![Gambar35](img/login_siti.png)
Login Siti berhasil
![Gambar36](img/login_user_siti.png)
Tampilan Menu Dashboard untuk **User Siti**
![Gambar37](img/dashboard_siti.png)
Selanjutnya kita login dengan data **User agus**
![Gambar38](img/login_agus.png)
Login dengan data **user agus** berhasil
![Gambar39](img/login_user_agus.png)
Tampilan menu Dashboard untuk user Agus
![Gambar40](img/dashboard_agus.png)
Pada bagian Sidebar sendiri terdapat beberapa menu untuk dashboardnya antara lain **Informasi Stok**,**Halaman Pemesanan**,**Tracking**, dan **history**
![Gambar40.1](img/bagian_sidebar.png)
kita juga bisa masuk ke profil usernya melalui klik tombol **Profil** dibagian kiri bawah sidebar.
![Gambar40.2](img/Profil.png)
Berikut adalah Tampilan identitas Profil secara lengkap
![Gambar41](img/masuk_profil.png)
dan juga kita bisa melakukan perubahan profil untuk **user agus**
![Gambar42](img/ubah_profil.png)
popup notifikasi yang memberi tahu bahwa perubahan profil berhasil dilakukan
![Gambar43](img/ubah_profil_berhasil.png)
Berikut adalah tampilan baru setelah melakukan perubahan profil pada **user agus**
![Gambar44](img/dashboard_agus_new.png)
Untuk Halaman selanjutnya yaitu **Halaman Stok** kita bisa klik pada bagian sidebar yaitu **Informasi Stok**
![Gambar44.1](img/Informasi_Stok.png)
Setelah **data.js** telah dimasukkan dan dibuat **script** untuk bagian halaman stok ini agar **data.js** dapat ditarik dan dimuat pada halaman ini maka akan muncul tampilannya seperti dibawah ini
![Gambar45](img/laman_stok_ready.png)
Pada halaman ini juga bisa dilakukan untuk penambahan stok baru melalui kolom input stok seperti dibawah
![Gambar46](img/tambah_stok.png)
Ketika penambahan stok berhasil maka akan muncul notifikasi popup bahwa *Buku baru telah berhasil ditambahkan ke katalog*
![Gambar47](img/alert_penambahan_berhasil.png)
Berikut adalah tampilan ketika stok telah berhasil diinput ke dalam katalog.
![Gambar48](img/stok_ditambahkan.png)
Berikutnya untuk **Halaman Pemesanan/Checkout** kita bisa klik pada bagian kiri sidebar
![Gambar](img/Checkout.png)
Setelah pemberian **script** untuk menarik data dari **data.js** maka tampilan memilih buku akan tampil seperti dibawah ini.
![Gambar49](img/data_halaman_checkout_masuk.png)
Ketika akan Checkout pula saya buat untuk bagian pengisian nomor Handphome tidak bisa diisi kurang dari 10 karakter, karena rata-rata karakter nomor handphone itu minimal 10 dan kemungkinan maksimal yaitu 13 karakter.
![Gambar50](img/alert_memastikan_no_hp.png)
Dibuat juga popup notifikasi untuk memilih buku terlebih dahulu ketika buku belum dipilih namun user sudah klik tombol checkout.
![Gambar51](img/belum_memilih_buku.png)
Maka ketika checkout belum memilih buku maka popup peringatan tersebut akan muncul
![Gambar52](img/alert_pilih_buku.png)
Dibawah ini adalah percobaan checkout melebihi batas stok yang tersedia dari stok yang ada, stok buku *Pengantar Ilmu Komunikasi* yaitu 548 pcs namun user checkout sebanyak 600 pcs.
![Gambar53](img/over_checkout.png)
Maka popup peringatan bahwa stok tidak mencukupi akan muncul dan memberi tahu stok yang tersedia pula saat itu.
![Gambar54](img/stok_tidak_cukup.png)
Untuk yang terakhir kita melakukan checkout dengan format dan porsi yang benar
![Gambar55](img/checkout_benar.png)
Maka ketika klik **Konfirmasi & Buat Pesanan** akan berhasil dan muncul popup bahwa checkout berhasil dan keterangan sesuai data checkout yang dilakukan. Setelah klik **OK** maka halaman akan langsung melempar kembali ke bagian Menu Dashboard
![Gambar56](img/checkout_berhasil.png)
Selanjutnya pada bagian **Halaman Tracking** kita bisa klik pada menu **Tracking** dibagian sidebar
![Gambar56.1](img/Tracking.png)
Setelah dilakukan penambahan **data.js** dan dibuat **script.js** untuk menarik dari data yang ada di dalam **data.js** maka, ketika di-inputkan nomor resi yang sesuai dengan data yang ada, lalu klik **Cari** maka data **tracking** akan tampil pada **Halaman tracking** tersebut.
![Gambar57](img/halaman_tracking_data_masuk.png)
Kita cek juga untuk data tracking dengan resi **20230013**
![Gambar58](img/halaman_tracking_data_agus.png)
Selain *nomor pengiriman* yang ada dalam data maka trackinng tidak ditemukan.
![Gambar59](img/resi_tidak_terdata.png)
Untuk yang terakhir kita bisa melakukan Logout dengan klik tombol **Logout** pada bagian pojok kiri bawah sidebar.
![Gambar60.1](img/tombol_logout.png)
Konfirmasi Logout melalui popup
![Gambar60](img/logout.png)
Klik **OK** dan logout akan berhasil dilakukan.
![Gambar61](img/berhasil_logout.png)

