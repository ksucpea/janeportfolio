const MediaFullscreen = () => {

    return (
        <div id="media-fullscreen">
            <div onClick={() => toggleFullscreen(false, null, "")} style={{ "position": "absolute", "top": "20px", "right": "20px", "zIndex": "1000", "padding": "10px" }}>
                <p style={{ "margin": "0" }}>x</p>
            </div>
            <video id="video-fullscreen" autoPlay={true} muted={false} controls={true} loop={true}>
                <source src="" />
            </video>
            <img src="" id="image-fullscreen" />
        </div>
    )
}

function detectClickOut(e) {
    if (e.target.id === "media-fullscreen") {
        toggleFullscreen(false, null, "");
    }
}

const toggleFullscreen = (display, type, src) => {
    let popup = document.getElementById("media-fullscreen");
    popup.style.display = display ? "flex" : "none";
    if (src !== "") {
        document.addEventListener("click", detectClickOut);
        popup.querySelector("#image-fullscreen").style.display = "none";
        popup.querySelector("#video-fullscreen").style.display = "none";
        let media = popup.querySelector("#" + type + "-fullscreen");
        media.src = src;
        media.style.display = "block";
    }
    if (display === false) {
        popup.querySelector("#video-fullscreen").play().then(() => popup.querySelector("#video-fullscreen").pause());
        document.removeEventListener("click", detectClickOut);
    }
}

export { MediaFullscreen, toggleFullscreen };