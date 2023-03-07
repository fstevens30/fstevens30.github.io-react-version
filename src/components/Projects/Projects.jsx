import React from "react";
import { Header, Card, Icon, Button, ButtonContent, Container, Image } from "semantic-ui-react";
import "./Projects.scss";

export default function Projects() {
    return (
        <Container className="projects-container">
            <Header>Projects</Header>
            <p>
                Below is some of my work that I am proud to show-off, from small personal projects to larger group projects through my studies. Click the view more to explore all of my repositories on GitHub.
            </p>
            <Card.Group>

                <Card as={Button} onClick={() => window.open("https://github.com/fstevens30/ToDo-List-React")} >
                    <Card.Content>
                        <Image size="medium" src={require('../../assets/ToDo-React.png')} />
                        <Card.Header>To-Do List React Native</Card.Header>
                        <Card.Description>
                            A simple To-Do list app made with React Native.
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content as={Button} onClick={() => window.open("https://fstevens30.github.io/vegan-stats-webapp/")}>
                        <Image size="medium" src={require('../../assets/Vegan-Stats.png')} />
                        <Card.Header>Vegan Stats</Card.Header>
                        <Card.Description>
                            A simple web app that displays statistics about the vegan diet.
                        </Card.Description>
                    </Card.Content>
                </Card>

            </Card.Group>

        <Button animated="fade" onClick={() => window.open("https://github.com/fstevens30?tab=repositories")} size="massive" primary style={{marginTop: "1em"}}>
            <ButtonContent visible>View More</ButtonContent>
            <ButtonContent hidden>
                <Icon name='arrow right' />
            </ButtonContent>
        </Button>

        </Container>
                    
    );
    }