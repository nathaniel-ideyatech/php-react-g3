import React from 'react';
import { Trans } from 'react-i18next';
import LengthLimit from 'constants';

const Toast = ({ message }) => {

    return (
        <div className="wrap-long-text width-250px">
            {message}
        </div>
    );

};

export default Toast;