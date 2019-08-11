import React from 'react';



function Card(props){
    const {name, url, pic} = props;
    return(
        <div>
            <img alt='project' src={pic} />
            <div>
                <h2>{name}</h2>
                <a href={url}>{url}</a>
            </div>
        </div>

    );
}

export default Card;
