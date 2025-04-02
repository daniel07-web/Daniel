// Effet machine à écrire
const text = "Mon amour, tu es tout pour moi ❤️";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Afficher le message secret
document.getElementById("surprise-btn").addEventListener("click", function() {
    document.getElementById("secret-message").classList.remove("hidden");
});

// Ajouter une pluie de cœurs
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);
