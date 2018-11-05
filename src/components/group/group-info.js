import React from 'react';

const Info = ({ lang }) => {
    return (
        <div className='group-info'>
            <h3>{ lang.title }</h3>
            <div>
                <p>
                    { lang.textP1 }
                </p>            
                <p>
                    { lang.textP2 }
                </p>

            </div>
        </div>
    );
}

export default Info;