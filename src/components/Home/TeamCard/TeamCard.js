import React from 'react';
import './TeamCard.css';

const TeamCard = ({teamCard}) => {

    const {img, name, designation} = teamCard;

    return (
        <div class="col">
            <div class="team-card card text-center">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title team-card-title">{name}</h5>
                    <p class="card-text team-card-text">{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;