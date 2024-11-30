// import React from 'react';
// import { Card } from '../Card/Card';
// import './List.css'


// const List = (data) => {
   
//     return (
//         <div className="list">
//             <div className='listCard'>
//                 {data?.map((item) => (
//                     <Card item={item} key={item.id} />
//                 ))}
//             </div>

//         </div>
//     )
// }
// export { List }

import React from 'react';
import { Card } from '../Card/Card';
import './List.css';

const List = ({ data }) => {
    if (!Array.isArray(data)) {
        console.error("Expected an array but received:", data);
        return <div>No items to display.</div>;
    }

    return (
        <div className="list">
            <div className="listCard">
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export { List };
