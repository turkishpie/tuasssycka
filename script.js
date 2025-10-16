// --- HAYIR Butonu Mesajları ---
const messages = [
    "Emin misin?",
    "Gerçekten emin misin??",
    "Cidden mi emin misin?",
    "Lütfen ama...",
    "Bir daha düşün bence!",
    "Hayır dersen çok üzülürüm...",
    "Gerçekten çok ama çok üzülürüm...",
    "Aşırı derecede çok üzülürüm...",
    "Tamam tamam, bir daha sormayacağım...",
    "Şaka yaptım! Nolur evet de! ❤️"
];

let messageIndex = 0;

// HAYIR Butonu İşlevi
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // EVET butonunun boyutunu büyüt
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

// EVET Butonu İşlevi (Sayaçlı sayfaya yönlendirme)
function handleYesClick() {
    // Kullanıcıyı yeni sayaçlı sayfaya yönlendir
    window.location.href = "yes_page.html";
}

// NOT: Eski dosyanızdaki "checkForUpdates" gibi karmaşık kodlar çıkarılmıştır.