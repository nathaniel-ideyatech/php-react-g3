import React from 'react';
import Select from 'react-select';


const MultipleSelection = ({optionList}) => {
    return (
        <div>
            <Select
                style={{zIndex: 1}}
                isMulti
                // value={value.value}
                options={optionList}
                // onChange={onWrappedChange}
                >
            </Select>
        </div>
    );
}

export default MultipleSelection