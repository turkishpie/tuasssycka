// KENDİ INSTAGRAM KULLANICI ADINIZI BURAYA GİRİN
const INSTAGRAM_USER = "bistrkerem"; 
const REDIRECT_DELAY = 5; // Yönlendirme süresi (saniye)

// Instagram Profil Linki (En güvenilir yöntem)
const REDIRECT_URL = `https://www.instagram.com/${INSTAGRAM_USER}`; 


function updateCountdown() {
    // Sayacın HTML elemanını ID ile bulur
    const countdownElement = document.getElementById('countdown');
    
    // Eğer element bulunamazsa (hata oluşmaması için) hemen dur
    if (!countdownElement) {
        console.error("HATA: 'countdown' ID'li element bulunamadı. yes_page.html dosyasını kontrol edin.");
        return; 
    }

    let timeLeft = REDIRECT_DELAY;
    countdownElement.textContent = timeLeft; // Sayacı 5'ten başlat

    const timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer); // Sayacı durdur
            
            // Kullanıcıyı aynı sekmede Instagram profiline yönlendir
            window.location.href = REDIRECT_URL; 
            
            countdownElement.textContent = "Açılıyor...";
        }
    }, 1000); // 1 saniyede bir çalışır
}

// ----------------------------------------------------
// Sayfa yüklendiğinde, geri sayımı başlatmak için fonksiyonu çağır
// ----------------------------------------------------

// window.onload kullanımı, sayfa yükleme tamamlandığında çalışmayı garanti eder
window.onload = updateCountdown; 
// VEYA sadece updateCountdown(); da kullanabilirsiniz, ancak window.onload daha güvenlidir.