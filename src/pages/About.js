import React from 'react';
import '../components/CSS files/About.css';

function About() {
    return (
        <div className="section about-us">
            <header className="page-header aboutus-animated-header">
                <div className="page-header-overlay">
                <h1>About Anchor Steel</h1>
                <p>Built for Life.</p>
                </div>
            </header>

            <section className="about-overview">
                <p>
Anchor Steel P/L was founded with one mission: to support Australia’s
construction industry with reinforcing steel that is strong, compliant, and
reliable.
                </p>
            </section>

            <section className="why-choose-us">
                <h1>Why choose Anchor Steel?</h1>
                <ul>
                    <li><strong>Local expertise: </strong>Sydney-based and Australian-owned.</li>
                    <li><strong>Certified Quality: </strong>All products ACRS certified.</li>
                    <li><strong>Safety & Sustainability</strong>ISO-aligned systems for people and planet.</li>
                    <li><strong>One-Stop Shop: </strong>From quote to delivery, everything handled under one roof.</li>
                    <li><strong>Client Care: </strong>We work with you like family, not just as a supplier.</li>
                </ul>
            </section>

            <section className="core-values">
                <h2>We follow principles that define how we work:</h2>
                <ul>
                    <li><strong>Integrity & Relationships: </strong>Our clients and partners are part of the Anchor family. We treat every project with respect and humility.</li>
                    <li><strong>Excellence in Quality: </strong>All products are ACRS certified and meet AS/NZS 4671 and AS/NZS 3600 standards.</li>
                    <li><strong>Safety first: </strong>Workplaces should be safe for everyone. Our operations follow ISO 45001 principles.</li>
                    <li><strong>Sustainable Future: </strong>We adopt environmentally responsible practices, minimising waste and reducing our carbon footprint.</li>
                    <li><strong>Innovation & Efficiency: </strong>From BIM 3D modelling to prefabricated reinforcement, we find smarter ways to support your build.</li>
                </ul>
                <p>
                    We are proud to be Sydney-based, supporting builders, engineers and developers with a one-stop shop for reinforcement needs.
                </p>
            </section>

            <section className="about-placeholder">
                <h2>Our Team</h2>
                <p>Our experienced team is here to ensure your project is built on a solid foundation.</p>
            </section>

            <section className="certifications">
                <h2>Certifications</h2>
                <p>Compliant with all relevant Australian building and safety standards.</p>
            </section>
        </div>
    );
}

export default About;
