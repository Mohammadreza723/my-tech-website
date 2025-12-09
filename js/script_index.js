document.addEventListener("DOMContentLoaded", () => {
    // finding elements
    const otherElements = document.querySelector(".content-item-home");

    const allElements = document.querySelectorAll(".content-items > div:not(.identifier)")

    const allElementsLocation = [
        [allElements[0], allElements[1], allElements[2], allElements[3]],
        [allElements[4], allElements[5], allElements[6], allElements[7]],
        [allElements[8], allElements[9], allElements[10], allElements[11]]
    ].map(row =>
        row.map(element => {
            const rect = element.getBoundingClientRect();
            return {
                top: rect.top,
                left: rect.left,
                value: element.innerText
            };
        })
    );

    const height = otherElements.clientHeight;
    const width = otherElements.clientWidth;

    const contentContainer = document.querySelector(".content")
    contentContainer.style.height = height * 3 + "px"

    const identifierElement = document.querySelector(".identifier");
    identifierElement.style.height = height + "px";
    identifierElement.style.width = width + "px";

    let currentLocation = [0, 0]

    identifierElement.style.top = allElementsLocation[currentLocation[0]][currentLocation[1]].top + 1 + "px";
    identifierElement.style.left = allElementsLocation[currentLocation[0]][currentLocation[1]].left + "px";
    identifierElement.innerText = allElementsLocation[currentLocation[0]][currentLocation[1]].value;


    // key down event
    document.addEventListener("keydown", (event) => {
        if (event.key == "ArrowRight") {
            if (currentLocation[1] >= 3) {
                // do nothing 
            } else {
                currentLocation[1] += 1
                identifierElement.style.top = allElementsLocation[currentLocation[0]][currentLocation[1]].top + 1 + "px";
                identifierElement.style.left = allElementsLocation[currentLocation[0]][currentLocation[1]].left + "px";
                identifierElement.innerText = allElementsLocation[currentLocation[0]][currentLocation[1]].value
            }
        } else if (event.key == "ArrowDown") {
            if (currentLocation[0] >= 2) {
                // do nothing 
            } else {
                currentLocation[0] += 1
                identifierElement.style.top = allElementsLocation[currentLocation[0]][currentLocation[1]].top + 1 + "px";
                identifierElement.style.left = allElementsLocation[currentLocation[0]][currentLocation[1]].left + "px";
                identifierElement.innerText = allElementsLocation[currentLocation[0]][currentLocation[1]].value
            }
        } else if (event.key == "ArrowLeft") {
            if (currentLocation[1] <= 0) {
                // do nothing 
            } else {
                currentLocation[1] -= 1
                identifierElement.style.top = allElementsLocation[currentLocation[0]][currentLocation[1]].top + 1 + "px";
                identifierElement.style.left = allElementsLocation[currentLocation[0]][currentLocation[1]].left + "px";
                identifierElement.innerText = allElementsLocation[currentLocation[0]][currentLocation[1]].value
            }
        } else if (event.key == "ArrowUp") {
            if (currentLocation[0] <= 0) {
                // do nothing 
            } else {
                currentLocation[0] -= 1
                identifierElement.style.top = allElementsLocation[currentLocation[0]][currentLocation[1]].top + 1 + "px";
                identifierElement.style.left = allElementsLocation[currentLocation[0]][currentLocation[1]].left + "px";
                identifierElement.innerText = allElementsLocation[currentLocation[0]][currentLocation[1]].value
            }
        } else {
            // do nothing for now
        }
    })

    // click event
    allElements.forEach((element) => {
        element.addEventListener("click", (e) => {
            if (e.target.innerText === "") {
                // do nothing for now
            } else {
                const currentLocation = window.location.href;
                const pageName = e.target.getAttribute("address");
                let newAdrress = currentLocation.split("/")
                newAdrress.pop()
                newAdrress.push(pageName)
                let destination = newAdrress.join("/")

                const loadingElement = document.querySelector(".loading")
                loadingElement.classList.add("active")
                setTimeout(() => {
                    window.location.href = destination
                }, 3000)
            }
        })
    })

    // identifierElement.addEventListener("click", () => {

    // })

    // rain element
    const windowWidth = window.innerWidth;
    const maximumAnimationDuration = 15;
    setInterval(() => {
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

})