import React from 'react';

const Btn = ({additionalClass, title, isLink, href}) => {
    return (
        <div>
            {
                isLink ? 
                <a href={ href } className={'main-btn ' + additionalClass}>
                    { title }
                </a>
                :
                <div className={'main-btn ' + additionalClass}>
                    { title }
                </div>
            }
        </div>
        
        
    );
}

export default Btn;