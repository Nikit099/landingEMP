import React from 'react';

const MakePreorder = ({order, setOrder}) => {
    return (
        <div>
            {order.map(elem => <input type='text' value={elem.body}  />)}
        </div>
    );
};

export default MakePreorder;