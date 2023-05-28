import Portraits from "./Portraits";
import Projects from "./Projects";
import data from "../data.json";
import Contact from "./Contact";
import About from "./About";
import Page from "./Page";
import { MediaFullscreen }from "./MediaFullscreen";

const Pages = () => {

    return (
        <div className="pages">
            <MediaFullscreen />
            <Page id="projects" ><Projects media={data.projects} /></Page>
            <Page id="portraits"><Portraits media={data.portraits} /></Page>
            <Page id="about"><About /></Page>
            <Page id="contact"><Contact /></Page>
        </div>
    )
}

export default Pages;