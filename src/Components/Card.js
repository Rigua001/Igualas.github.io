import React from 'react';
import "./Card.scss"


function Card(props){
    const {name, url, pic} = props;
    return(
        <div>
            <h2>{name}</h2>
            <a href={url}>{url}</a>
            {/*<img alt='project' src={pic} />*/}
            <div className="parallax">

            </div>
        </div>

    );
}

export default Card;
