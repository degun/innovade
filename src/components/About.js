import React, {useEffect} from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <main id="About">
            <article className="article">
                <h1>About us</h1>
                <p>Lorem ipsum is placeholder text commonly used in the gralishing industries for previewing layouts and visual mockups.</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishouts and visual mockups.</p>
                <img src="../photos/Screenshot 2020-10-02 015617.png" />
                <p>Lorem ipsum is placeholder text commonly used in ries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, prineviewing layouts and visual mockups.</p>
            </article>
        </main>
    )
}

export default About;