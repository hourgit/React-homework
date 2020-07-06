import React from 'react';
    function About(){
        return(
            <>
                <h1>About Me</h1>
                <img src="" alt="my image" />
                <p>
                    I am Hai menghour, web developer from Phonm Penh, Cambodia. I have rich experience in web site design and building and customization, also I have a team to develop a website and any management systems.
                </p>
                <u>
                    <li>Development</li>
                    <li>UI/UX design</li>
                    <li>System Management</li>
                    <li>Database</li>
                </u>
                <button onClick={(e)=>this.saveKonfigElementHandler()}>Download resume</button>
            </>
        )
    }
export default About;