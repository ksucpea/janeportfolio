import React, { useEffect, useState } from "react";
import Tab from "./Tab";


const Tabs = () => {

    const [active, setActive] = useState(0);
    const pages = ["#projects", "#portraits", "#about", "#contact"];

    const setCurrent = (current) => {
        let els = pages.map(p => document.querySelector(p));
        els.forEach(el => {
            el.style.opacity = "0";
            setTimeout(() => {
                el.style.display = "none";
                document.querySelector(current).style.display = "block";
            }, 300)
        });
        setTimeout(() => {
            document.querySelector(current).style.opacity = "100%";
        }, 350);
    }

    useEffect(() => {
        setCurrent(pages[active]);
    }, [active]);


    return (
        <div className="tabs">
            <Tab title="projects" active={active === 0} onClick={() => setActive(0)} />
            <Tab title="portraits" active={active === 1} onClick={() => setActive(1)} />
            <Tab title="about" active={active === 2} onClick={() => setActive(2) } />
            <Tab title="contact" active={active === 3} onClick={() => setActive(3)} />
        </div>
    )
}

export default Tabs;