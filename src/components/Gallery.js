import { useEffect, useRef } from "react";
import LazyLoad from 'react-lazy-load';
import { toggleFullscreen } from "./MediaFullscreen";

const Gallery = ({ items }) => {

    const Image2 = ({ src, w, h, onLoad }) => {
        return (
            <img onLoad={onLoad} className="media-src" src={src} /*width={w} height={h}*/ />
        )
    }

    const Video2 = ({ src, w, h, thumb = 0, onLoad }) => {

        const ref = { useRef };

        const enter = () => {
            ref.current.currentTime = 0;
            ref.current.play();
        }

        const leave = () => {
            ref.current.play().then(() => { ref.current.pause(); ref.current.currentTime = thumb });
        }

        const load = () => {
            onLoad();
            ref.current.currentTime = thumb;
            ref.current.classList.add("pp");
            ref.current.removeEventListener("canplay", load);
        }

        useEffect(() => {
            ref.current.addEventListener("canplay", load);
        }, []);


        return (
            <video className="media-src" ref={ref} onMouseEnter={enter} onMouseLeave={leave} muted={true} loop={true} width={w} height={h}>
                <source src={src} type="video/mp4"></source>
            </video>
        )
    }

    const Media = ({ type = "image", w = 300, h = 200, title = "", src = "", thumb = null }) => {

        const ref = useRef();
        const loader = useRef();

        const load = () => {
            setTimeout(() => {
                if (ref.current) {
                    ref.current.classList.add("loaded");
                    loader.current.style.display = "none";
                }
            }, 10)
        }

        return (
            <>
                <div ref={loader} className="loader"></div>
                <LazyLoad height={h} width={w} offset={500}>
                    <div className="media" onClick={() => toggleFullscreen(true, type, src)}>
                        <div ref={ref} className="media-container">
                            {type === "video" ? <Video2 src={src} w={w} h={h} onLoad={load} thumb={thumb} /> : <Image2 src={src} w={w} h={h} onLoad={load} />}
                        </div>
                        <p className="media-title">{title}</p>
                    </div>
                </LazyLoad>
            </>
        )
    }

    const renderMedia = () => {


        let col_left = [];
        let col_right = [];
        for (let i = 0; i < items.length; i++) {
            let col = i % 2 === 0 ? col_left : col_right;
            col.push(<Media type={items[i].type} title={items[i].title} src={items[i].src} w={items[i].w} h={items[i].h} thumb={items[i].thumb} />);
        }

        return (
            <>
                <div className="gallery-col">
                    {col_left}
                </div>
                <div className="gallery-col">
                    {col_right}
                </div>
            </>
        )
    }

    return (
        <>
            <div className="gallery">
                {renderMedia()}
            </div>
        </>
    )
}

export default Gallery;