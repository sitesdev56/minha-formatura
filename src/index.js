// Generate Stars
function generateStars() {
  const starsContainer = document.getElementById("stars-container")

  // Generate 150 small stars
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div")
    star.className = "star"

    const size = Math.random() * 3 + 1
    const left = Math.random() * 100
    const top = Math.random() * 100
    const duration = Math.random() * 3 + 2
    const delay = Math.random() * 5

    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.left = `${left}%`
    star.style.top = `${top}%`
    star.style.setProperty("--duration", `${duration}s`)
    star.style.animationDelay = `${delay}s`

    starsContainer.appendChild(star)
  }

  // Generate larger accent stars
  const accentStars = [
    { left: "10%", top: "20%", size: "8px", color: "#3b82f6", duration: "2s" },
    { left: "85%", top: "15%", size: "12px", color: "#60a5fa", duration: "3s" },
    { left: "70%", top: "80%", size: "8px", color: "#3b82f6", duration: "2.5s" },
    { left: "15%", top: "75%", size: "12px", color: "#60a5fa", duration: "3.5s" },
  ]

  accentStars.forEach((starConfig) => {
    const star = document.createElement("div")
    star.className = "absolute"
    star.style.width = starConfig.size
    star.style.height = starConfig.size
    star.style.left = starConfig.left
    star.style.top = starConfig.top
    star.style.background = starConfig.color
    star.style.borderRadius = "50%"
    star.style.animation = `twinkle ${starConfig.duration} infinite`

    starsContainer.appendChild(star)
  })
}

// Animate Floating Letters
function animateFloatingLetters() {
  const title = document.getElementById("floating-title")
  const text = title.textContent
  title.textContent = ""

  text.split("").forEach((letter, index) => {
    const span = document.createElement("span")
    span.className = "float-letter"
    span.textContent = letter === " " ? "\u00A0" : letter
    span.style.animationDelay = `${index * 0.1}s`
    title.appendChild(span)
  })
}

// Confirm Button Action
function setupConfirmButton() {
  const button = document.querySelector(".confirm-button")
  button.addEventListener("click", () => { 
    window.open("https://wa.me/5574999639010", "_blank")
    alert("Obrigado por confirmar sua presença! Aguardamos você na cerimônia.")
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  generateStars()
  animateFloatingLetters()
  setupConfirmButton()
})
