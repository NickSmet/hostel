import React from 'react';

const RoomOptions = ({ options, hasPrice }) => {
    return (
        <div>
            { 
                options.map((item, i) => {
                    if(!!item.name) {
                        return (
                            <div className='option' key={ i }>
                                <div className='option-name'>{ item.name }</div>
                                <div className='option-description'>{ item.description }</div>
                                {
                                    hasPrice &&
                                    <div className='option-price'>+ { item.price } ₽</div>
                                }
                            </div>
                        )
                    }
                })
            }
        </div>       
    );
}

export default RoomOptions;