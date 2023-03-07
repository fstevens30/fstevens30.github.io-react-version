import React from "react";
import { Header, Container, Button, ButtonContent, Icon} from "semantic-ui-react";
import "./About.scss";

export default function About() {
    return (
        <Container className="about-container">
        <Header>About Me</Header>
        <p>
        I am a student at Ara Institute of Canterbury, working towards my Bachelor of Information and Communication Technology. I am interested in the Apple ecosystem and the JavaScript programming language, and hope to use my skills to create full-stack cross-platform applications using React Native. My hobbies include basketball, motorsport and videogames.
        </p>
        <p>
        I am active on most social media platforms, the best way to contact me is via Messenger or Email. You can learn more about me by downloading my CV below!
        </p> 
        {/* Button that downloads my cv stored in assets folder */}
        <Button primary animated="fade" onClick={() => window.open(require('../../assets/Flynn-Stevens-CV.pdf'))} size="massive">
            <ButtonContent visible>Download CV </ButtonContent>
            <ButtonContent hidden>
                <Icon name='download' />
            </ButtonContent>
        </Button>
        {/* Button that takes user to the contact element on the page */}
        <Button animated="fade" onClick={() => window.scrollTo(0, document.body.scrollHeight)} size="massive" color="()">
            <ButtonContent visible>Contact Me</ButtonContent>
            <ButtonContent hidden>
                <Icon name='arrow down' />
            </ButtonContent>
        </Button>
        </Container>

    )
}
    