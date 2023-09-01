import React from 'react';

import './team.css';

import { Footer, Navbar, PageNamer, ContactBanner, TeamMember } from '../components';

const Team = () => {
  return (
    <>
        <Navbar />
        <PageNamer pageName="Our Team" />
        <section className="rental__team">
          <div className="rental__team-content">
            <TeamMember img="1" name="Luke Miller" role="Salesman" />
            <TeamMember img="2" name="Michael Diaz" role="Business Owner" />
            <TeamMember img="3" name="Briana Ross" role="Photographer" />
            <TeamMember img="4" name="Lauren Rivera" role="Car Detalist" />
            <TeamMember img="5" name="Martin Rizz" role="Mechanic" />
            <TeamMember img="6" name="Caitlyn Hunt" role="Menager" />
          </div>
        </section>
        <ContactBanner />
        <Footer />
    </>
  )
}

export default Team