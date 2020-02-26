import React from 'react';
import { Trans } from 'react-i18next';
import LengthLimit from 'constants';

const Toast = ({ data, message }) => {
    let displayName = '';
    if (data != null) {
        displayName = data.name.length > LengthLimit.TOAST_DISPLAY_NAME_LIMIT ?
                data.name.substring(0, LengthLimit.TOAST_DISPLAY_NAME_LIMIT) + "..." : data.name
    }

    data.name = displayName

    return (
        <div className="wrap-long-text width-250px">
            <Trans i18nKey={message}
                values={data} />
        </div>
    );

};

export default Toast;