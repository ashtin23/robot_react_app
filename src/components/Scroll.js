import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid navy', height: '800px'}}>
           { props.children }
        </div>
    );
};

export default Scroll;