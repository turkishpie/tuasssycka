// yes_script.js dosyasındaki ilgili kısmı güncelleyelim

// KENDİ INSTAGRAM KULLANICI ADINIZI BURAYA GİRİN
const INSTAGRAM_USER = "bistrkerem"; 
const REDIRECT_DELAY = 5; 

// --- YENİ DENEYECEĞİMİZ DM LİNKİ ---
// Instagram'ın mobil DM penceresini açmaya çalışan daha agresif bir link yapısı
const REDIRECT_URL = `https://direct.me/${INSTAGRAM_USER}`; 

// NOT: Eğer bu link çalışmazsa, geri dönüp şu linki deneyebilirsiniz:
// const REDIRECT_URL = `https://www.instagram.com/direct/t/`; 
// Kullanıcıyı direkt DM gelen kutusuna yönlendirir, ancak profilinizi bulup mesajı başlatmaları gerekir.

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    let timeLeft = REDIRECT_DELAY;

    const timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer); // Sayacı durdur
            
            // Kullanıcıyı aynı sekmede yönlendir (Redirect)
            window.location.href = REDIRECT_URL; 
            
            countdownElement.textContent = "Açılıyor...";
        }
    }, 1000); 
}
// ...