document.addEventListener("DOMContentLoaded", () => {
    const windowWidth = window.innerWidth;
    const maximumAnimationDuration = 15;
    setInterval(() => {
        console.log("Hello");
        const left = Math.floor(Math.random() * windowWidth)
        const animationDuration = Math.floor(Math.random() * maximumAnimationDuration) + 5
        const rain = document.createElement("div")
        rain.classList.add("rain-element")

        rain.style.left = left + "px"
        rain.style.animationDuration = animationDuration + "s"

        rain.addEventListener("animationend", () => {
            rain.remove()
        })

        document.body.appendChild(rain)
    }, 200)
    // ---------------------------------------
    const backButton = document.querySelector(".back")
    backButton.addEventListener("click", () => {
        const currentLocation = window.location.href;
        let newAdrress = currentLocation.split("/")
        newAdrress.pop()
        let destination = newAdrress.join("/")

        const loadingElement = document.querySelector(".loading")
        loadingElement.classList.add("active")
        setTimeout(() => {
            window.location.href = destination
        }, 3000)
    })
})