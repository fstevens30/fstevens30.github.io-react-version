import React from "react";
import { Header, Button, ButtonContent, Icon, Grid, GridRow, GridColumn } from "semantic-ui-react";
import "./About.scss";

export default function About() {
    return (
        <Grid className="about-container">
            <GridRow >
                <GridColumn width={16}>
                    <Header className="about-header">About Me</Header>
                </GridColumn>
                <GridColumn width={16}>
                    <p>
                        As a Bachelor of Information and Communication Technology student at Ara Institute of Canterbury, I have a keen interest in the Apple ecosystem and the JavaScript programming language. My goal is to apply my knowledge to develop cross-platform, full-stack applications using React Native. Outside of my studies, I enjoy playing basketball, following motorsport events, and playing video games.
                    </p>
                </GridColumn>
            </GridRow>

            <GridRow>
                <GridColumn width={16}>
                    <p>
                    I am available on various social media platforms, but for the most prompt response, please reach out to me via Messenger or Email. Additionally, you can find more information about me by downloading my CV below.
                    </p>
                </GridColumn>
                <GridColumn width={16}>
                    {/* Button that downloads my cv stored in assets folder */}
                    <Button primary animated="fade" onClick={() => window.open(require('../../assets/Flynn-Stevens-CV.pdf'))} size="massive">
                        <ButtonContent visible>Download CV </ButtonContent>
                        <ButtonContent hidden>
                            <Icon name='download' />
                        </ButtonContent>
                    </Button>
                    {/* Button that takes user to the contact element on the page */}
                    <Button animated="fade" onClick={() => window.scrollTo(0, document.body.scrollHeight)} size="massive">
                        <ButtonContent visible>Contact Me</ButtonContent>
                        <ButtonContent hidden>
                            <Icon name='arrow down' />
                        </ButtonContent>
                    </Button>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}
    