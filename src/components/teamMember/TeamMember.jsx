import React from 'react'

import './teamMember.scss';

import team_img1 from '../../assets/team-photo1.png';
import team_img2 from '../../assets/team-photo2.png';
import team_img3 from '../../assets/team-photo3.png';
import team_img4 from '../../assets/team-photo4.png';
import team_img5 from '../../assets/team-photo5.png';
import team_img6 from '../../assets/team-photo6.png';

const TeamMember = (props) => {

    const imgHandler = (id) => {
        switch(id){
            case '1':
                return team_img1;
            case '2':
                return team_img2;
            case '3':
                return team_img3;
            case '4':
                return team_img4;
            case '5':
                return team_img5;
            case '6':
                return team_img6;
            default:
                return null;
        }
    }

  return (
    <div className="memberBox">
        <div className="memberBox__image">
            <img src={imgHandler(props.img)} alt="member-img" />
        </div>

        <div className="memberBox__description">
            <h2>{props.name}</h2>
            <p className='memberBox__description-role'>{props.role}</p>
        </div>
    </div>
  )
}

export default TeamMember