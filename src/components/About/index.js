import React from 'react';
import coverImage from "../../assets/cover/cover-image.png"


function About () {
    return (
        <section>
            <h1 id="about">
                About Me
            </h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>

    );
    
}

export default About;
