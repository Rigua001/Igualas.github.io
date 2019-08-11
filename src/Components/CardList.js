import React from 'react';
import Card from "./Card";

function CardList({projects}) {

    return(
        <div>
            {
                projects.map((project) => {
                    return (
                        <Card name = {project.name} url = {project.url} pic = {project.pic}/>
                    );
                })
            }
        </div>

    );

}

export default CardList;
