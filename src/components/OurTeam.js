import React from 'react';

/* doc link-  https://docs.google.com/document/d/1g2vRm_g6phcWiybLyVKK_g_3J6U4dI_wEmJKbYkUGvg/edit */

function OurTeam() {
    const teamData = [
        {
            id: 0,
            name: "Prof. Amit Srivastava",
            position: "Chairman, DTU",
            email: "aksrivastava@dce.ac.in" 
        },
        {
            id: 1,
            name: "Sh. Anil Kumar Saini",
            position: "Project Coordinator",
            email: "anilsaini.del@gmail.com" 
        },
        {
            id: 2,
            name: "Sh. Anil Kumar Saini",
            position: "Project Coordinator",
            email: "anilsaini.del@gmail.com" 
        },
        {
            id: 3,
            name: "Sh. Anil Kumar Saini",
            position: "Project Coordinator",
            email: "anilsaini.del@gmail.com" 
        }
    ]
    return (
        <div style={{ height: '100%', boxSizing: 'border-box', padding: '2.5rem'}}>
            <h1 style={{textAlign: 'center', marginBottom: '5rem', fontWeight: '600', color: 'var(--blue)'}}>Our Team</h1>

            {/* Head Cards with photo */}
            <div className='head-card-container'>
                <div className="head-card">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="head-card-img" />
                    <h3>Shri Arvind Kejriwal</h3>
                    <p>Chief Minister of GNCT, Delhi</p>
                </div>
                <div className="head-card">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="head-card-img" />
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
                    <h3>Shri Himanshu Gupta</h3>
                    <p>Director</p>
                </div>
            </div>

            {/* Partners */}
            <hr style={{marginTop: '5rem', height: '0.75px'}}></hr>
            <div className='head-card-container' style={{gap: '0'}}>
                <div className="partners">
                    
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png" className="partner-img"/>
                    <h4>Delhi Technological University</h4>
                    <p>Implementation Partner</p>
                    
                </div>
                <div className="partners">
                    <img src="https://images.squarespace-cdn.com/content/v1/55098900e4b04bae5abccd9e/1540624453271-W29DBSU5XB3ZTN9QXH41/logo+social.png" className="partner-img"/>
                    <h4>Alohomora Education Foundation</h4>
                    <p>Knowledge Partner</p>
                    
                </div>
                <div className="partners">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png" className="partner-img"/>
                    <h4>Saarathi</h4>
                    <p>Software Support</p>
                   
                </div>
            </div>
            <hr style={{marginBottom: '5rem', height: '0.75px'}}></hr>

            {/* Team Desh Ke Mentor */}
            <h1 style={{textAlign: 'center', margin: '5rem', fontWeight: '600', color: 'var(--blue)'}}>Team Desh Ke Mentor</h1>
            <div className='card-grid-container'>{
                teamData.map((data) => {
                    return(
                        <div className="grid-card" key={data.id}>
                            <h5>{data.name}</h5>
                            <p>{data.position}</p>
                            <a href={'mailto:'+data.email}>{data.email}</a>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )}

export default OurTeam
