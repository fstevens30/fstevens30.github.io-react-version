import React from "react";
import { Button } from "semantic-ui-react";
import "./Nav.scss";

// This function will scroll down to the next element in the main page
// For example, if the nav is in the Hero component, it will scroll down to the next component
function nextPage() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

export default function Nav() {
    return (
        // The nav will be a simple down chevron that will scroll down to the next element in the main page
        <Button circular icon="chevron down" size="massive" className="nav-btn" onClick={Event => nextPage()} />

    )
    }