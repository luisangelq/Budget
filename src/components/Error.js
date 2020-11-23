import React from 'react';
import PropTypes from "prop-types";

const Error = ({mesaje}) => {
    return (
        <p className="alert alert-danger error">{mesaje}</p>
    );
    
}

Error.propTypes = {
    mesaje: PropTypes.string.isRequired

}

export default Error;