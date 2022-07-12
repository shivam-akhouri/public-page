import React from 'react';

import cmImg from '../images/our-team/cm.png';
import deputyImg from '../images/our-team/deputycm.png';
import dtuImg from '../images/our-team/dtu.png';
import alohomoraImg from '../images/our-team/alohomora.png';
import saarathiImg from '../images/our-team/saarathi.png';
import dcpcr from '../images/our-team/DCPCR.jpeg'

/* doc link-  https://docs.google.com/document/d/1g2vRm_g6phcWiybLyVKK_g_3J6U4dI_wEmJKbYkUGvg/edit */

function OurTeam() {
    const teamData = [
        {
            name:"Sh. Anurag Kundu",
            position:"Chairperson",
            email: "DCPCR"
        },
        {
            name:"Sh. Anil Kumar",
            position: "Project Coordinator",
            email: "Deputy CM Office"
        },
        {
            name:"Ms. Ranjana Prasad",
            position: "Member",
            email: "DCPCR"
        },
        {
            name:"Mr. Ankit Jayant",
            position:"Project Manager (Tech)",
            email: "DCPCR"
        },
        {
            name:"Mr. Abhinay Kumar Singh",
            position:"Project Manager",
            email: "DCPCR"
        },
        {
            name:"Mr. Arpit Sharma",
            position:"Project Manager",
            email: "DCPCR"
        },
        {
            name:"Ms. Ekta Gupta",
            position:"Project Manager",
            email: "DCPCR"
        },
        {
            name:"Mr. Prerak Mittal",
            position:"Project Manager",
            email: "DCPCR"
        },
        {
            name:"Ms. Unnati Gupta",
            position:"Project Manager",
            email: "DCPCR"
        }
    ]

    return (
        <div style={{ height: '100%', boxSizing: 'border-box', padding: '2.5rem 2.5rem 5rem 2.5rem'}}>
            <h1 style={{textAlign: 'center', marginBottom: '5rem', fontWeight: '600', color: 'var(--blue)'}}>Our Team</h1>

            {/* Head Cards with photo */}
            <div className='head-card-container'>
                <div className="head-card">
                    <img src={cmImg} alt="CM Image" className="head-card-img" />
                    <h3>Shri Arvind Kejriwal</h3>
                    <p>Chief Minister of GNCT, Delhi</p>
                </div>
                <div className="head-card">
                    <img src={deputyImg} alt="Deputy CM Image" className="head-card-img" />
                    <h3>Shri Manish Sisodia</h3>
                    <p>Education Minister, Deputy Chief Minister</p>
                </div>
            </div>
            

            {/* Department of Education Cards */}
            <h1 style={{textAlign: 'center', margin: '5rem', fontWeight: '600', color: 'var(--blue)'}}>Department of Education</h1>
            <div className='head-card-container'>
                <div className="head-card-small">
                    <h3>Shri H. Rajesh Prasad</h3>
                    <p>Secretary Education</p>
                </div>
                <div className="head-card-small">
                    <h3>Shri Himanshu Gupta</h3>
                    <p>Director</p>
                </div>
                <div className="head-card-small">
                    <h3>Shri Praveen Chaudhary</h3>
                    <p>State Program Head and OSD to Deputy Chief Minister</p>
                </div>
                
            </div>

            {/* Partners */}
            <hr style={{marginTop: '5rem', height: '0.75px'}}></hr>
            <div className='head-card-container' style={{gap: '0'}}>
                <div className="partners">
                    <img src={dcpcr} alt="DTU Logo" className="partner-img"/>
                    <h4>Delhi Commission for Protection of Child Rights</h4>
                    <p>Implementation Partner</p>
                </div>
                <div className="partners">
                    <img src={saarathiImg} alt="Saarathi Logo" className="partner-img"/>
                    <h4>Saarathi</h4>
                    <p>Software Development</p>
                </div>
                <div className="partners">
                    <img src={alohomoraImg} alt="Alohomora Logo" className="partner-img"/>
                    <h4>Alohomora Education Foundation</h4>
                    <p>Knowledge Partner</p>
                </div>
            </div>
            <hr style={{marginBottom: '5rem', height: '0.75px'}}></hr>

            {/* Team Desh Ke Mentor */}
            <h1 style={{textAlign: 'center', margin: '5rem', fontWeight: '600', color: 'var(--blue)'}}>Team Desh Ke Mentor</h1>
            
            <div className='team-grid-container'>{
                teamData.map((data) => {
                    return(
                        <div className="grid-card" key={data.name}>
                            <h5>{data.name}</h5>
                            <p>{data.position}</p>
                            <a href={'mailto:'+data.email}>{data.email}</a>
                        </div>
                    )
                })
            }
            </div>

            {/* Education Members Cards */}
            {/* <h1 style={{textAlign: 'center', margin: '5rem', fontWeight: '600', color: 'var(--blue)'}}>Education Members</h1> */}
            {/* <div className='edu-grid-container'>
                <div className="grid-card">
                    <h5>Rahul Tiwari</h5>
                    <p>Assosciate Delhi Assembly Research Fellow (DARC)</p>
                </div>
                <div className="grid-card">
                    <h5>Anubhuti Yadav</h5>
                    <p>Delhi Assembly Research Fellow (DARC) </p>
                </div>
            </div> */}
        </div>
    )}

export default OurTeam
