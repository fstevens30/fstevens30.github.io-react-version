import React from "react";
import { Header, Card, Icon, Button, ButtonContent, Container } from "semantic-ui-react";

export default function Projects() {
    return (
        <Container className="projects-container">
            <Header>Projects</Header>
            <p>
                Below is some of my work that I am proud to show off, from small personal projects to larger group projects through my studies. Click the view more to explore all of my repositories on GitHub.
            </p>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Project 1</Card.Header>
                        <Card.Description>
                            A simple To-Do list app made with React Native.
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>Project 2</Card.Header>
                        <Card.Description>
                            A simple To-Do list app made with React Native.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        <Button animated="fade" onClick={() => window.open("https://github.com/fstevens30?tab=repositories")} size="massive" primary>
            <ButtonContent visible>View More</ButtonContent>
            <ButtonContent hidden>
                <Icon name='arrow right' />
            </ButtonContent>
        </Button>
        </Container>
                    
    );
    }