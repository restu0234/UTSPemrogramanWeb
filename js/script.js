/**
 * 1. LOGIKA FORM LOGIN (Tersambung ke data.js & Menu_Dashboard.html)
 */
function handleLogin(event) {
    event.preventDefault(); // Mencegah form reload halaman

    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // Memeriksa apakah dataPengguna tersedia dari data.js
    if (typeof dataPengguna === 'undefined') {
        alert("Error: File data.js belum dimuat!");
        return;
    }

    // Mencari pengguna di dalam array dataPengguna
    const userDitemukan = dataPengguna.find(user => user.email === emailInput && user.password === passwordInput);

    if (userDitemukan) {
        alert(`Login Berhasil! Selamat datang, ${userDitemukan.nama} (${userDitemukan.role})`);
        
        // Simpan sesi user yang sedang login ke memori browser
        localStorage.setItem('currentUser', JSON.stringify(userDitemukan));

        // Alihkan ke dashboard (Gunakan '../Menu_Dashboard.html' jika keluar satu folder)
        window.location.href = "../Menu_Dashboard.html";
    } else {
        // Pop-up error jika salah atau tidak sesuai
        alert("email/password yang anda masukkan salah");
    }
}
    // Skrip Validasi Interaktif dan Sapaan Nama Otomatis 
        let storedEvent = null;

        function handleCustomLogin(event) {
            event.preventDefault(); // Mencegah form langsung submit
            
            const emailValue = document.getElementById('email').value;
            const passwordValue = document.getElementById('password').value;

            // 1. Cek jika email kosong
            if (!emailValue.trim()) {
                openModal('emailWarningModal');
                return;
            }

            // 2. Cek jika password kosong
            if (!passwordValue.trim()) {
                openModal('passwordWarningModal');
                return;
            }

            // 3. Ambil nama dari bagian depan email (sebelum karakter '@')
            // Contoh: agus@gmail.com -> Menjadi "Agus" (huruf depan kapital)
            let rawName = emailValue.split('@')[0];
            let cleanName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();

            // Masukkan nama ke dalam teks popup sukses
            document.getElementById('successGreeting').innerText = `Login Berhasil! Selamat Datang Kembali, ${cleanName}!`;

            // Simpan event lalu tampilkan popup sukses
            storedEvent = event;
            openModal('loginSuccessModal');
        }

        // Fungsi yang dipanggil saat tombol "Lanjut Masuk" pada popup sukses diklik
        function executeSuccessLogin() {
            closeModal('loginSuccessModal');
            
            // Panggil fungsi handleLogin asli Anda dari script.js jika ada
            if (typeof handleLogin === 'function' && storedEvent) {
                handleLogin(storedEvent);
            }
        }


/**
 * 2. LOGIKA BUKA & TUTUP MODAL BOX (POP-UP)
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}


/**
 * 3. LOGIKA SIMULASI LUPA PASSWORD & DAFTAR
 */
function handleResetPassword() {
    const email = document.getElementById('resetEmail').value;
    if (!email) {
        alert("Silakan masukkan email Anda terlebih dahulu!");
        return;
    }
    alert(`Instruksi reset password telah dikirim ke: ${email}`);
    closeModal('forgotModal');
}

function handleRegister() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (!name || !email || !password) {
        alert("Harap isi semua kolom pendaftaran!");
        return;
    }

    alert(`Pendaftaran akun atas nama ${name} berhasil! Silakan login.`);
    closeModal('registerModal');
}


/**
 * 4. LOGIKA GREETING BERDASARKAN WAKTU LOKAL & JAM DIGITAL
 */
function updateClockAndGreeting() {
    const now = new Date();
    const hours = now.getHours();

    const greetingText = document.getElementById('greetingText');
    const greetingIcon = document.getElementById('greetingIcon');
    const liveClock = document.getElementById('liveClock');
    const liveDate = document.getElementById('liveDate');

    // Tentukan Salam (Pagi / Siang / Sore / Malam)
    let greeting = 'Selamat Malam';
    let icon = '🌙';

    if (hours >= 5 && hours < 11) {
        greeting = 'Selamat Pagi';
        icon = '☀️';
    } else if (hours >= 11 && hours < 15) {
        greeting = 'Selamat Siang';
        icon = '🌤️';
    } else if (hours >= 15 && hours < 18) {
        greeting = 'Selamat Sore';
        icon = '🌅';
    } else {
        greeting = 'Selamat Malam';
        icon = '🌙';
    }

    if (greetingText) greetingText.textContent = greeting;
    if (greetingIcon) greetingIcon.textContent = icon;

    // Format Jam Digital (HH:MM:SS WIB)
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    if (liveClock) liveClock.textContent = `${h}:${m}:${s} WIB`;

    // Format Tanggal Bahasa Indonesia
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    if (liveDate) liveDate.textContent = now.toLocaleDateString('id-ID', options);
}


/**
 * 5. LOGIKA NOTIFIKASI TOAST SAAT TOMBOL MENU DIKLIK (DIPERBARUI)
 */
function openMenu(menuName) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    if (!toast || !toastMsg) return;

    toastMsg.textContent = `Membuka halaman ${menuName}...`;
    toast.classList.add('show');

    // Sembunyikan notifikasi setelah 1.5 detik, lalu pindah halaman jika menu stok
    setTimeout(() => {
        toast.classList.remove('show');
        
        // Cek jika menu yang diklik adalah Informasi Stok / Katalog
        if (menuName === 'Informasi Stok / Katalog') {
            window.location.href = "stok.html"; // Sesuaikan path jika berbeda folder
        }
        // Anda bisa menambahkan menu lain di sini jika sudah ada halamannya, contoh:
        // else if (menuName === 'Tracking Pengiriman') {
        //     window.location.href = "tracking.html";
        // }
    }, 1500);
}

/**
 * 6. & 7. INISIALISASI KETIKA HALAMAN DIMUAT
 */
document.addEventListener('DOMContentLoaded', () => {
    // Ambil data user yang sedang login dari memori browser
    const currentUserData = localStorage.getItem('currentUser');
    const userNameEl = document.getElementById('userName');

    // Jika ini halaman Dashboard (dilihat dari adanya elemen userName)
    if (userNameEl) {
        if (!currentUserData) {
            alert("Anda belum login! Silakan login terlebih dahulu.");
            window.location.href = "Index.html"; 
            return;
        }
        
        const user = JSON.parse(currentUserData);
        userNameEl.textContent = user.nama; 

        // 👉 TAMBAHAN UNTUK SIDEBAR (agar ikut berubah dinamis)
        const sidebarNameEl = document.getElementById('sidebarUserName');
        const sidebarRoleBadge = document.getElementById('sidebarRoleBadge');
        if (sidebarNameEl) sidebarNameEl.textContent = user.nama;
        if (sidebarRoleBadge) sidebarRoleBadge.textContent = user.role || 'Member';

        // Muat data user ke dalam form profil secara otomatis
        const profileNameInput = document.getElementById('profileName');
        const profileEmailInput = document.getElementById('profileEmail');
        const profileRoleInput = document.getElementById('profileRole');

        if (profileNameInput) profileNameInput.value = user.nama || '';
        if (profileEmailInput) profileEmailInput.value = user.email || '';
        if (profileRoleInput) profileRoleInput.value = user.role || 'User';
    }

    // Jalankan jam digital & greeting jika elemennya ada di halaman
    updateClockAndGreeting();
    setInterval(updateClockAndGreeting, 1000); 

    // Jika ini halaman Stok (dilihat dari adanya elemen tabelStokBody)
    const tabelStokBody = document.getElementById('tabelStokBody');
    if (tabelStokBody) {
        muatDataStok();
    }
});



/**
 * 8. FITUR EDIT PROFIL DAN LOGOUT
 */
function saveProfileChanges() {
    const newName = document.getElementById('profileName').value.trim();
    const newEmail = document.getElementById('profileEmail').value.trim();

    // Validasi input kosong
    if (!newName || !newEmail) {
        alert("Nama dan Email tidak boleh kosong!");
        return;
    }

    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
        let user = JSON.parse(currentUserData);
        
        // Perbarui data user
        user.nama = newName;
        user.email = newEmail;

        // Simpan kembali ke localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Perbarui UI Sidebar
        const sidebarNameEl = document.getElementById('sidebarUserName');
        if (sidebarNameEl) {
            sidebarNameEl.textContent = user.nama;
        }

        // Perbarui UI Profil utama
        const userNameEl = document.getElementById('userName');
        if (userNameEl) {
            userNameEl.textContent = user.nama;
        }

        alert("Profil berhasil diperbarui!");
        closeModal('profileModal');
    } else {
        alert("Sesi pengguna tidak ditemukan. Silakan login ulang.");
    }
}

function handleLogout() {
    const konfirmasi = confirm("Apakah Anda yakin ingin keluar dari akun?");
    if (konfirmasi) {
        localStorage.removeItem('currentUser');
        alert("Berhasil logout!");
        window.location.href = "../Index.html"; 
    }
}

// Tambahan kecil untuk sinkronisasi nama di sidebar secara otomatis
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
                const userNameEl = document.getElementById('userName');
                const sidebarNameEl = document.getElementById('sidebarUserName');
                const sidebarRoleBadge = document.getElementById('sidebarRoleBadge');
                const profileRoleInput = document.getElementById('profileRole');
                
                if (userNameEl && sidebarNameEl) {
                    sidebarNameEl.textContent = userNameEl.textContent;
                }
                if (profileRoleInput && sidebarRoleBadge) {
                    sidebarRoleBadge.textContent = profileRoleInput.value || 'Member';
                }
    }, 200);
});

/**
 * 12. FITUR RINGKASAN DASHBOARD (SUMMARY CARDS)
 */
function muatRingkasanDashboard() {
    // 1. Hitung Total Jenis Buku & Total Stok Keseluruhan dari dataKatalogBuku
    if (typeof dataKatalogBuku !== 'undefined') {
        const totalJenis = dataKatalogBuku.length;
        let totalStok = 0;

        dataKatalogBuku.forEach(buku => {
            totalStok += Number(buku.stok) || 0;
        });

        const elJenis = document.getElementById('sumJenisBuku');
        const elStok = document.getElementById('sumTotalStok');

        if (elJenis) elJenis.textContent = totalJenis;
        if (elStok) elStok.textContent = totalStok.toLocaleString('id-ID') + " pcs";
    }

    // 2. Hitung Pengiriman yang Sedang Berjalan dari dataTracking
    if (typeof dataTracking !== 'undefined') {
        let pengirimanBerjalan = 0;

        Object.values(dataTracking).forEach(item => {
            // Cek jika status pengiriman belum selesai / masih proses perjalanan
            const statusLower = item.status ? item.status.toLowerCase() : '';
            if (statusLower.includes('jalan') || statusLower.includes('kirim') || statusLower.includes('proses')) {
                pengirimanBerjalan++;
            }
        });

        const elPengiriman = document.getElementById('sumPengiriman');
        if (elPengiriman) elPengiriman.textContent = pengirimanBerjalan;
    }
}

// Jalankan fungsi saat halaman dashboard selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    muatRingkasanDashboard();
});


/**
 * 9. FITUR MANAJEMEN STOK & KATALOG BUKU (SESUAI STRUKTUR DATA.JS BARU)
 */
function muatDataStok() {
    const tbody = document.getElementById('tabelStokBody');
    if (!tbody) return;
    
    tbody.innerHTML = ''; 

    if (typeof dataKatalogBuku === 'undefined') {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #f87171;">Error: Variabel dataKatalogBuku tidak ditemukan di data.js!</td></tr>`;
        return;
    }

    dataKatalogBuku.forEach((buku, index) => {
        const tr = document.createElement('tr');
        const coverSrc = buku.cover ? buku.cover : 'img/default.jpg';

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${coverSrc}" alt="${buku.namaBarang}" class="buku-img"></td>
            <td><strong>${buku.kodeBarang}</strong></td>
            <td>${buku.namaBarang}</td>
            <td>${buku.jenisBarang} (Edisi ${buku.edisi})</td>
            <td>${buku.harga}</td>
            <td>${buku.stok} pcs</td>
        `;
        tbody.appendChild(tr);
    });
}

function tambahBarisStok(event) {
    event.preventDefault(); 

    const nama = document.getElementById('inputNama').value.trim();
    const hargaInput = document.getElementById('inputHarga').value.trim();
    const stok = document.getElementById('inputStok').value.trim();
    
    // Generate kode barang otomatis atau manual
    const kodeRandom = "BK" + Math.floor(1000 + Math.random() * 9000);
    const formatHarga = hargaInput.startsWith("Rp") ? hargaInput : "Rp " + Number(hargaInput).toLocaleString('id-ID');

    const tbody = document.getElementById('tabelStokBody');
    if (!tbody) return;

    const rowBaru = document.createElement('tr');
    const nomorUrut = tbody.rows.length + 1;

    rowBaru.innerHTML = `
        <td>${nomorUrut}</td>
        <td><img src="img/default.jpg" alt="Default Cover" class="buku-img"></td>
        <td><strong>${kodeRandom}</strong></td>
        <td>${nama}</td>
        <td>Buku Ajar (Edisi 1)</td>
        <td>${formatHarga}</td>
        <td>${stok} pcs</td>
    `;

    tbody.appendChild(rowBaru);

    // Sinkronisasi ke array runtime dataKatalogBuku
    if (typeof dataKatalogBuku !== 'undefined') {
        dataKatalogBuku.push({
            kodeBarang: kodeRandom,
            namaBarang: nama,
            jenisBarang: "Buku Ajar",
            edisi: "1",
            stok: Number(stok),
            harga: formatHarga,
            cover: "img/default.jpg"
        });
    }

    document.getElementById('formTambahStok').reset();
    alert("Buku baru berhasil ditambahkan ke katalog!");
}


/**
 * 10. FITUR HALAMAN CHECKOUT & PEMESANAN
 */

// Muat opsi dropdown buku dari dataKatalogBuku saat halaman checkout dibuka
document.addEventListener('DOMContentLoaded', () => {
    const selectBuku = document.getElementById('pilihBuku');
    if (selectBuku && typeof dataKatalogBuku !== 'undefined') {
        dataKatalogBuku.forEach((buku, index) => {
            const option = document.createElement('option');
            option.value = index; // simpan index array
            // Bersihkan format harga dari string string (misal: "Rp 180.000" jadi angka)
            let hargaAngka = typeof buku.harga === 'string' 
                ? Number(buku.harga.replace(/[^0-9]/g, '')) 
                : buku.harga;
            
            option.dataset.harga = hargaAngka;
            option.textContent = `${buku.namaBarang} - Rp ${hargaAngka.toLocaleString('id-ID')} (Stok: ${buku.stok})`;
            selectBuku.appendChild(option);
        });
    }

    // Auto-fill nama pemesan jika user sudah login lewat localStorage
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
        const user = JSON.parse(currentUserData);
        const inputNama = document.getElementById('namaPemesan');
        if (inputNama && user.nama) {
            inputNama.value = user.nama;
        }
    }
});

// Hitung total harga otomatis berdasarkan pilihan buku dan jumlah
function hitungTotal() {
    const selectBuku = document.getElementById('pilihBuku');
    const jumlahInput = document.getElementById('jumlahPesan').value;
    const displayTotal = document.getElementById('displayTotal');

    if (!selectBuku || !displayTotal) return;

    const selectedOption = selectBuku.options[selectBuku.selectedIndex];
    const hargaSatuan = selectedOption.dataset.harga ? Number(selectedOption.dataset.harga) : 0;
    const jumlah = Number(jumlahInput) || 1;

    const total = hargaSatuan * jumlah;
    displayTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// Proses submit pemesanan
function prosesCheckout(event) {
    event.preventDefault();

    const selectBuku = document.getElementById('pilihBuku');
    
    // Validasi manual via JavaScript akan berfungsi setelah atribut required di HTML dihapus
    if (selectBuku.value === "") {
        alert("Silakan pilih buku terlebih dahulu!");
        return;
    }

    const indexBuku = selectBuku.value;
    const jumlahPesan = Number(document.getElementById('jumlahPesan').value);
    const nama = document.getElementById('namaPemesan').value;
    const telepon = document.getElementById('teleponPemesan').value;
    const alamat = document.getElementById('alamatPemesan').value;
    const metode = document.getElementById('metodeBayar').value;

    // Cek ketersediaan stok
    let bukuDipilih = dataKatalogBuku[indexBuku];
    if (jumlahPesan > bukuDipilih.stok) {
        alert(`Maaf, stok tidak mencukupi! Stok tersedia saat ini: ${bukuDipilih.stok} pcs.`);
        return;
    }

    // Perbaikan variabel: ubah jumlahPesanan menjadi jumlahPesan
    bukuDipilih.stok -= jumlahPesan;

    alert(`Pesanan Berhasil Dibuat!\n\nNama: ${nama}\nProduk: ${bukuDipilih.namaBarang} (${jumlahPesan} pcs)\nMetode Bayar: ${metode}\n\nTerima kasih telah berbelanja!`);

    // Arahkan kembali ke dashboard (sesuaikan jalur foldernya jika diperlukan, misal "Menu_Dashboard.html")
    window.location.href = "Menu_Dashboard.html";
}

/**
 * 11. FITUR TRACKING PENGIRIMAN
 */
function lacakPengiriman() {
    const noDOInput = document.getElementById('inputNoDO').value.trim();
    const resultCard = document.getElementById('resultCard');
    const errorMsg = document.getElementById('errorMsg');

    if (!noDOInput) {
        alert("Silakan masukkan Nomor Delivery Order terlebih dahulu!");
        return;
    }

    // Memeriksa apakah dataTracking tersedia dari data.js
    if (typeof dataTracking === 'undefined') {
        alert("Error: Variabel dataTracking tidak ditemukan di data.js!");
        return;
    }

    // Cari data berdasarkan key nomorDO di object dataTracking
    const dataPaket = dataTracking[noDOInput];

    if (dataPaket) {
        // Sembunyikan pesan error & tampilkan kartu hasil
        errorMsg.style.display = 'none';
        resultCard.classList.add('active');

        // Isi data ke elemen HTML
        document.getElementById('resStatus').textContent = `Status: ${dataPaket.status}`;
        document.getElementById('resNama').textContent = dataPaket.nama;
        document.getElementById('resNoDO').textContent = dataPaket.nomorDO;
        document.getElementById('resEkspedisi').textContent = `${dataPaket.ekspedisi} (${dataPaket.paket})`;
        document.getElementById('resTanggal').textContent = dataPaket.tanggalKirim;
        document.getElementById('resTotal').textContent = dataPaket.total;

        // Render riwayat perjalanan (timeline) menggunakan DOM
        const timelineContainer = document.getElementById('resTimeline');
        timelineContainer.innerHTML = ''; // Bersihkan riwayat sebelumnya

        if (dataPaket.perjalanan && dataPaket.perjalanan.length > 0) {
            dataPaket.perjalanan.forEach(item => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';
                timelineItem.innerHTML = `
                    <div class="timeline-time">${item.waktu}</div>
                    <div class="timeline-desc">${item.keterangan}</div>
                `;
                timelineContainer.appendChild(timelineItem);
            });
        } else {
            timelineContainer.innerHTML = `<div class="timeline-desc">Belum ada riwayat perjalanan.</div>`;
        }

    } else {
        // Jika data tidak ditemukan
        resultCard.classList.remove('active');
        errorMsg.style.display = 'block';
    }
}