import React from "react";
import links from './links';
function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
    {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <link github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
