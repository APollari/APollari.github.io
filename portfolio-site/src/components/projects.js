import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(

            <div className="projects-div">
                <Card shadow={5} style={{width: '250' , margin: '30px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: '#12947f', fontWeight: 'bold'}}>Goatling</CardTitle>
                    <CardText>Goatling - Ultimate mountain jump is a hyper casual jumping game for android. 
                        <br/><br/>
                        This project was made with Unity 3D and C#. I was project's lead programmer and worked along with artist and designer.</CardText>
                    <CardActions border>
                    <a href="https://play.google.com/store/apps/details?id=com.LostHoodie.Goatling" rel="noopener noreferrer" target="_blank">
                        <Button colored >Google Play</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                

            
                <Card shadow={5} style={{width: '250' , margin: '30px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background : '#12947f'}}>Shred 'n' Slam</CardTitle>
                    <CardText>Shred 'n' Slam is a skateboarding game for mobile and it was the first game project I have worked on.
                        <br/><br/>
                        Project was made with Unity 3D and C#. In this project my main task was to build and program user interface components and functions.</CardText>
                    <CardActions border>
                    <a href="https://play.google.com/store/apps/details?id=com.LostHoodie.ShredNSlam" rel="noopener noreferrer" target="_blank">
                        <Button colored >Google Play</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
            </div>
                
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="projects-div">
                <Card shadow={5} style={{minWidth: '500' , margin: '30px'}}>
                <CardTitle style={{color: '#fff', height: '176px', background : '#12947f'}}>Lost Hoodie</CardTitle>
                    <CardText>Wordpress based website for Lost Hoodie Oy.</CardText>
                    <CardActions border>
                    <a href="https://losthoodie.com" rel="noopener noreferrer" target="_blank">
                        <Button colored>Website</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        }
    }

    render(){
        return(
            <div style={{height: '100%', margin: 'auto'}}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Unity</Tab>
                    <Tab>Websites</Tab>
                </Tabs>
                <div className="category-tabs">
                    <Grid>
                        <Cell col={12}>
                            <div>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    </div>
            </div>
        )
    }
}

export default Projects;