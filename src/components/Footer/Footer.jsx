import React from "react";
import { Container, Icon, Grid } from "semantic-ui-react";
import "./Footer.scss";

export default function Footer() {
    return (
        <Container className="footer-container">
            <Grid className="footer-grid">
                <Grid.Row>
                    <Grid.Column width={8} className="footer-text">
                        <p>© 2023 Flynn Stevens</p>
                    </Grid.Column>
                    <Grid.Column width={8} className="footer-icons">
                        <a href="https://www.linkedin.com/in/flynn-stevens-5b1b1b1a0/" target="_blank" rel="noopener noreferrer">
                            <Icon name="linkedin" size="big" />
                        </a>

                        {/*ADD MORE ICONS HERE*/}

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
    }