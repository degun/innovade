import React, {useEffect} from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <main id="About">
            <article className="article">
                <h1>About us</h1>
                <p>True elegance and charming aesthetics carefully carved in striking contrast, Innovade brings you world’s most beautiful shisha. Our innovative approach has one objective, to bring a new era of hookah technology and blur what’s ordinary.</p>
                <p>Thanks to the magnificent efforts of our team while zooming in on the details, we designed a product that celebrates the harmony between art and tradition.</p>
                <h4>Engineered in Germany, Made in Italy. </h4>
                <p>We didn’t just make a beautiful art piece, we researched every single part that makes our product over a period of 2 years. We cut, bend, drill, melt until it was right. Then we cut, bend, drill, melt again until it was perfect. We used aircraft grade materials which you will find in today’s fighter jets and edible metals you will only find in high end cutlery. </p> <p> Equipped with a special and sophisticated mechanism, Innovade Shisha ensures smoother smoke, better and longer lasting taste. We promise to transform your shisha smoking forever.</p>
            </article>
        </main>
    )
}

export default About;