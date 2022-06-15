import React from 'react'
import './OurTeam.css'
import Line1 from '../../assets/images/Line1.png'
import yulya from '../../assets/images/yulya.png'
import anna from '../../assets/images/anna.png'
import andrey from '../../assets/images/andrey.png'
export default function OurTeam() {
    return (
        <div className='OurTeam'>

            <div className='OurTeam_name'>
                <img alt='clients_line1' className='clients_line' src={Line1} />
                <h2 className='OurTeam_title'>Нашa команда</h2>
                <img alt='clients_line2' className='clients_line' src={Line1} />
            </div>
<div className='members'>
            <div className='person'>
                <img alt='Yulya' className='team_member' src={yulya} />
            <h4 className='member_name'>Юля</h4>
            <p className='job_title'>Соучредитель</p>
            </div>
            <div className='person'>
                <img alt='Anna' classname='team_member' src={anna} />
                <h4 className='member_name'>Анна</h4>
            <p className='job_title'>Дизайнер</p>
            </div>
            <div className='person'>
                <img alt='Andrey' classname='team_member' src={andrey} />
                <h4 className='member_name'>Андрей</h4>
            <p className='job_title'>Соучредитель</p>
            </div>

            </div>
            <br/>
            <br/>
        
       </div>
    )
}
