import React from 'react';

const Btn = ({additionalClass, title}) => {
    return (
        <a href='https://wubook.net/wbkd/wbk/?lcode=1484303494' className={'main-btn ' + additionalClass}>
            { title }
        </a>
    );
}

export default Btn;