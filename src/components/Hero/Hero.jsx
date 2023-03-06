import React from "react";
import './Hero.scss';
import { Container, Header, Image, Segment } from 'semantic-ui-react';

export default function Hero() {
    return (
        <Segment className="hero" vertical>
            <Container text>
                <Header as="h1" className="hero__header">
                    <Segment classname="hero-left" vertical>
                        <p className="hero__text">Hi, I'm</p>
                        <p className="hero__text-bold">Flynn Stevens</p>
                        <p className="hero__text">I'm currently studying for my Bachelors of Information and Communication Technologies.</p>
                    </Segment>
                    <Segment classname="hero-right" vertical>
                        <Image className="hero__image" />
                    </Segment>
                </Header>
            </Container>
        </Segment>
    );
    }