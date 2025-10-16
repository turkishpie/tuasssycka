// KENDİ INSTAGRAM KULLANICI ADINIZI BURAYA GİRİN
const INSTAGRAM_USER = "bistrkerem"; 
const REDIRECT_DELAY = 5; // Yönlendirme süresi (saniye)

// Instagram Linki (HTTPS'i dahil ettik ve tırnakları ters tırnak yaptık)
const REDIRECT_URL = `https://www.instagram.com/${INSTAGRAM_USER}`; 

// --- ALTERNATİF: WHATSAPP İÇİN KULLANILACAKSA ---
// const YOUR_PHONE = "905551234567";
// const REDIRECT_URL = `https://wa.me/${YOUR_PHONE}?text=${encodeURIComponent("Selam! Film izleme konusunda yazıyorum. 🎬")}`;


function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    let timeLeft = REDIRECT_DELAY;

    const timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer); // Sayacı durdur
            
            // Aynı sekmede Instagram'a yönlendir (Engellenme Riskini Azaltır)
            //window.location.href = REDIRECT_URL; 
            //window.open(REDIRECT_URL, '_blank');
            window.location.href = REDIRECT_URL;
            countdownElement.textContent = "Açılıyor...";
            
        }
    }, 1000); // 1 saniye
}

// Sayfa yüklendiğinde sayacı başlat
updateCountdown();