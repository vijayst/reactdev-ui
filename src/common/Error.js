import React from 'react';

const Error = ({ message }) =>
    message ? <div className="form__error">{message}</div> : null;

export default Error;
