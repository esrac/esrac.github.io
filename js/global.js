window.addEventListener("load", () => {
    console.log("Executing onload")

    $(".tilt").tilt({
        maxTilt: 15,
        perspective: 700,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1400,
        glare: true,
        maxGlare: 0.2,
        scale: 1.04
    })
}, false)