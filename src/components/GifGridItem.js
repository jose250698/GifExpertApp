import React from 'react';
import PropTypes from 'prop-types';


const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img id={id} src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default GifGridItem;