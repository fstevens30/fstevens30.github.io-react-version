import React from "react";
import './Hero.scss';
import '../../assets/flynn.png' // Importing the image
import { Grid, Image } from 'semantic-ui-react';

export default function Hero() {
    return (
        <Grid className="hero">
            <Grid.Row>
                <Grid.Column width={8} className="hero-text">
                    <p> Hi, I'm,</p>
                    <h1>Flynn Stevens</h1>
                    <p>I'm currently studying for my Bachelors of Information and Communication Technologies.</p>
                </Grid.Column>
                <Grid.Column width={8} className="hero-image">
                    <Image src={require('../../assets/flynn.png')} size="massive"  />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}