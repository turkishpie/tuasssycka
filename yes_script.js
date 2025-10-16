// yes_script.js dosyasının içindeki ilgili kısmı güncelleyelim

// KENDİ INSTAGRAM KULLANICI ADINIZI BURAYA GİRİN
const INSTAGRAM_USER = "bistrkerem"; 
const REDIRECT_DELAY = 5; 

// --- PROFİL AÇMA LİNKİ (EN GÜVENİLİR YÖNTEM) ---
// Bu link, tarayıcıyı doğrudan profilinize yönlendirir.
const REDIRECT_URL = `https://www.instagram.com/${INSTAGRAM_USER}`; 


function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    let timeLeft = REDIRECT_DELAY;

    const timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer); // Sayacı durdur
            
            // Aynı sekmede Instagram profiline yönlendir (REDIRECT)
            window.location.href = REDIRECT_URL; 
            
            countdownElement.textContent = "Açılıyor...";
        }
    }, 1000); 
}
// ...