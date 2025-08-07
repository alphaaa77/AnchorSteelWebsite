import React from 'react';
import '../components/About.css';

function About() {
    return (
        <div className="section about-us">
            <header className="animated-header">
                <div className="header-overlay">
                <h1>About Anchor Steel</h1>
                <p>Ipsum ut sunt in quis non aliqua proident aliqua ullamco ea.</p>
                </div>
            </header>

            <section className="about-overview">
                <p>
                    Anchor Steel Pty Ltd is a trusted supplier of reinforcing steel solutions across Australia.
                    With decades of experience in construction and civil engineering projects, we pride ourselves on
                    delivering high-quality products, reliable service, and strong partnerships.
                </p>
                <p>Laboris reprehenderit mollit ipsum laboris ipsum laboris id. In do consectetur amet cupidatat do minim voluptate sint ipsum laboris. Qui minim eiusmod tempor sit. Cupidatat dolor ut irure in pariatur dolore reprehenderit sit commodo amet aliqua dolor consectetur.</p>
            </section>

            <section className="core-values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Quality:</strong> We ensure every product meets industry standards.</li>
                    <li><strong>Reliability:</strong> On-time delivery, every time.</li>
                    <li><strong>Support:</strong> Dedicated team helping your projects succeed.</li>
                </ul>
            </section>

            <section className="about-placeholder">
                <h2>Our Team</h2>
                <p>Our experienced team is here to ensure your project is built on a solid foundation.</p>
                <p>Labore nisi non ipsum deserunt anim laboris sint nostrud minim ea esse reprehenderit. Voluptate adipisicing sint nulla ullamco ex ex. Proident enim in laboris sit fugiat aute deserunt quis nisi eiusmod.</p>
            </section>

            <section className="certifications">
                <h2>Certifications</h2>
                <p>Compliant with all relevant Australian building and safety standards.</p>
                <p>Ut cupidatat deserunt aliquip non magna anim laborum esse aliquip consectetur labore nulla irure aliqua. Culpa anim aliquip amet cupidatat eu quis esse eiusmod id ex tempor in duis. Do do aliquip commodo qui occaecat. Incididunt ullamco nostrud dolore velit consectetur voluptate et.</p>
            </section>
        </div>
    );
}

export default About;
