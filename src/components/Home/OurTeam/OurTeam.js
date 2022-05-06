import React from 'react';
import { teamCard } from '../../../data';
import TeamCard from '../TeamCard/TeamCard';
import './OurTeam.css';



const OurTeam = () => {
    return (
        <section className="our-team" id='team'>
            <div className="container">
                <h4 className='section-title team-title text-center'>Our Team</h4>
                <h2 className='section-subtitle team-subtitle text-center'>Our Expert Team Serve You The Best Cleaning Service</h2>


                <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
                    {
                        teamCard.map((teamCard, index) => <TeamCard teamCard={teamCard}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurTeam;