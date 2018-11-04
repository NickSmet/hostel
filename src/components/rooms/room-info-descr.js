import React from 'react';

const RoomDescr = ({ text }) => {

    const createMarkup = () => { 
        return {__html: text}; 
    };

    return (
        <div dangerouslySetInnerHTML={createMarkup()} />
    );
}



export default RoomDescr;