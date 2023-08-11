import React from 'react';

const PreOrder = ({order, setChangeInputs, handleFormSubmit}) => {
    return (
        <form onSubmit={(e) => handleFormSubmit(e)}>
            {order.map(elem => <input key={elem.title} type='text' value={elem.body} onChange={e => setChangeInputs(e, elem.title) } />)}
            <button>Отправить</button>
        </form>
    );
};

export default PreOrder;