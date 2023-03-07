import React from "react";
import { Header, Container, Icon } from "semantic-ui-react";
import "./TechSkills.scss";

export default function TechSkills() {
    return (
        <Container className="techskills-container">
        <Header>TechSkills</Header>
        <p>
            I am currently working with the following languages and technologies. I am constantly trying to expand my knowledge and understand as much as I can.
        </p>
        <p>
            <Icon name="react" size="big" />
            <Icon name="js square" size="big" />
            <Icon name="html5" size="big" />
            <Icon name="css3" size="big" />
            <Icon name="python" size="big" />
            <Icon name="node" size="big" />
            <Icon name="git" size="big" />
            <Icon name="github" size="big" />
            <Icon name="apple" size="big" />
            <Icon name="wordpress" size="big" />
            <Icon name="figma" size="big" />
        </p>
        </Container>
    );
    }