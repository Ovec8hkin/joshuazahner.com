import React from 'react';
import '../../../css/header.css';
import SkillBar from "./SkillBar";


class Skills extends React.Component{

    render(){

        return (

            <section className={"container"}>
                <SkillBar name={"HTML 5"} value={95} years={5} projects={10}/>
                <SkillBar name={"CSS 3"} value={95} years={5} projects={10}/>
                <SkillBar name={"Javascript"} value={65} years={4} projects={6}/>
                <SkillBar name={"PHP"} value={65} years={3} projects={6}/>
                <SkillBar name={"MySQL"} value={45} years={3} projects={6}/>
                <SkillBar name={"Python"} value={75} years={2} projects={2}/>
                <SkillBar name={"Java"} value={50} years={3} projects={3}/>
                <SkillBar name={"iOS"} value={50} years={2} projects={3}/>
            </section>

        );

    }

}

export default Skills;