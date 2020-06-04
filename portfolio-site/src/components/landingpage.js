import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%'}}>

                    <Grid noSpacing className="hero-banner">
                        <Cell col={12}>
                            <div className="hero-background">
                            <h1>Junior Developer</h1>
                            <p>C# | Games | Websites</p>
                            <div className="social-links">
                                {/*Linkedin */}
                                <a href="https://www.linkedin.com/in/annika-pollari/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/*Github */}
                                <a href="https://github.com/APollari" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a> 
                            </div>
                            </div>

                        <div className="landing-content">
                            <Grid >
                                <Cell col={4} tablet={12} style={{textAlign: "center"}}>
                                    <img 
                                        src="/assets/images/roundAvatar.png"
                                        alt="avatar"
                                        className="avatar-img"
                                        
                                    />
                                </Cell>

                                <Cell col={8} tablet={12}>
                                    <h1>Annika Pollari</h1>
                                    <p>Hi, my name is <strong>Annika</strong> and I am enthusiastic <strong>programmer</strong>. I have started my career
                                    by diving in to the world of mobile games and it has taught me a lot. I enjoy programming and I am always ready to learn new tricks!
                                    <br/><br/>
                                    This  portofolio site is part of my React learning process and I am going to develop it further during my projects.</p>
                                </Cell>
                            </Grid>
                        </div>

                        </Cell>
                    </Grid>
                
                    
        
                
            </div>
        )
    }
}

export default Landing;