import React from "react";
import { Header, Container, Button, Icon } from "semantic-ui-react";
import "./Contact.scss";

export default function Contact() {
    return (
        <Container className="contact-container">
        <Header>Contact</Header>
        <p>
        It is best to contact me via Facebook Messenger or Email as I am most active on those platforms.
        </p>
        <p>
        You can contact me via the following platforms:
        </p>
        <Button.Group>
            <Button animated="fade" onClick={() => window.open("https://www.facebook.com/flynnthesloth/")} size="massive">
                <Button.Content visible>Facebook</Button.Content>
                <Button.Content hidden>
                    <Icon name='facebook' />
                </Button.Content>
            </Button>
            <Button animated="fade" onClick={() => window.open("https://www.github.com/fstevens30")} size="massive">
                <Button.Content visible>GitHub</Button.Content>
                <Button.Content hidden>
                    <Icon name='github' />
                </Button.Content>
            </Button>
            <Button animated="fade" onClick={() => window.open("https://www.instagram.com/flynn.a.stevens/")} size="massive">
                <Button.Content visible>Instagram</Button.Content>
                <Button.Content hidden>
                    <Icon name='instagram' />
                </Button.Content>
            </Button>
            <Button animated="fade" onClick={() => window.open("https://www.youtube.com/channel/UCT-SOBrMnI-qKpkDU2YohlA")} size="massive" >
                <Button.Content visible>YouTube</Button.Content>
                <Button.Content hidden>
                    <Icon name='youtube' />
                </Button.Content>
            </Button>
            <Button animated="fade" onClick={() => window.open("https://www.linkedin.com/in/flynn-stevens-6b9314232/")} size="massive">
                <Button.Content visible>LinkedIn</Button.Content>
                <Button.Content hidden>
                    <Icon name='linkedin' />
                </Button.Content>
            </Button>
            <Button animated="fade" onClick={() => window.open("https://m.me/flynnthesloth")} size="massive" >
                <Button.Content visible>Messenger</Button.Content>
                <Button.Content hidden>
                    <Icon name='facebook messenger' />
                </Button.Content>
            </Button>
            <Button animated="fade" onClick={() => window.open("mailto:flynnstevens30@gmail.com")} size="massive">
                <Button.Content visible>Email</Button.Content>
                <Button.Content hidden>
                    <Icon name='mail' />
                </Button.Content>
            </Button>
        </Button.Group>
        </Container>

    );
    }