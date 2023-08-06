import React from 'react';

const PreOrder = ({order, setOrder}) => {
    return (
        <div>
            {order.map(elem => <input type='text' value={elem.body}  />)}
        </div>
    );
};

export default PreOrder;