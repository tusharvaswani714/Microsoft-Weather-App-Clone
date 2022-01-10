export default function movingSlider(slideWidth, totalSlides, sliderTrack) {
    let touchdown = false;
    let previousPosition;
    function down(e) {
        touchdown = true;
        previousPosition = e.touches[0].clientX;
    }
    function up(e) {
        if (touchdown) touchdown = false;
    }
    function move(e) {
        if (touchdown) {
            if (slideWidth * totalSlides > sliderTrack.offsetWidth) {
                let currentPosition = e.touches[0].clientX;
                if (Math.trunc(currentPosition - previousPosition) >= 200) {
                    if (
                        totalSlides * 100 ===
                        +sliderTrack.style.transform.replace(/^\D+|\D+$/g, "")
                    ) {
                        return;
                    }
                    sliderTrack.style.transform = `translateX(-${
                        +sliderTrack.style.transform.replace(/^\D+|\D+$/g, "") +
                        100
                    }px)`;
                }
            }
        }
    }
    sliderTrack.addEventListener("touchstart", down);
    sliderTrack.addEventListener("touchmove", move);
    sliderTrack.addEventListener("touchend", up);
}
