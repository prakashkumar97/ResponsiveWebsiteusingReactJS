import React, { Component } from 'react';
import Header from '../header/Header.js';
import Content from './Content.js';
class Landingpage extends Component {
    constructor() {
        super();
        this.skillInformation = [
            {
                name: 'HTML',
                description: 'aaaa',
                imgURL: '/images/html.png'
            },
            {
                name: 'CSS',
                description: 'aaaa',
                imgURL: '/images/css.png'
            },
            {
                name: 'JS',
                description: 'aaaa',
                imgURL: '/images/responsive.png'
            },
            {
                name: 'React',
                description: 'aaaa',
                imgURL: '/images/ui-ux.png'
            },
            {
                name: 'Angular',
                description: 'aaaa',
                imgURL: '/images/js.jpg'
            },
            {
                name: 'Webpack',
                description: 'aaaa',
                imgURL: '/images/jquery.png'
            },
            {
                name: 'HTML',
                description: 'aaaa',
                imgURL: '/images/ts.png'
            },
            {
                name: 'CSS',
                description: 'aaaa',
                imgURL: '/images/RxJS.png'
            },
            {
                name: 'JS',
                description: 'aaaa',
                imgURL: '/images/unix.png'
            },
            {
                name: 'React',
                description: 'aaaa',
                imgURL: '/images/git.png'
            },
            {
                name: 'Angular',
                description: 'aaaa',
                imgURL: '/images/npm.png'
            },
            {
                name: 'Webpack',
                description: 'aaaa',
                imgURL: '/images/docker.png'
            }
        ]
    }
    render() {
        return (
            <div>
                <Header headertext="We are learning" />
                <br/><br/>
                <div className="container">
                    {this.skillInformation.map(skill => {
                        return (
                            <Content skillName={skill.name} skillDescription={skill.description}
                                skillImg={skill.imgURL} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Landingpage;