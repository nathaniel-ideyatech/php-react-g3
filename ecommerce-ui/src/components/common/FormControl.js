import React, { useState, useEffect } from 'react';
import _ from 'underscore';

import DateTime from 'react-datetime';
import Select from 'react-select';

import { Button, Form, InputGroup, Card } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import moment from 'moment';


const FormControlDateTime = ({ value, onChange, children,
    dateFormat = 'MM/DD/YYYY',
    timeFormat = '',
    minDate,
    ...props
}) => {

    const onWrappedChange = (updatedMoment) => {
        if (_.isFunction(onChange)) {
            onChange(_.isString(updatedMoment) ? updatedMoment : updatedMoment.valueOf());
        }
    };



    return (
        <DateTime
            value={ value }
            onChange={ onWrappedChange }
            dateFormat={ dateFormat }
            timeFormat={ timeFormat }
            closeOnSelect={ true }
            minDate={minDate}
            renderInput={
                (datetimeProps, openCalendar) => (
                    <InputGroup onClick={ openCalendar }>
                        <Form.Control as="input"
                            type="text"
                            { ...datetimeProps }
                            { ...props }>
                        </Form.Control>
                        <InputGroup.Append style={{zIndex:0}}>
                            <Button variant="outline-secondary">
                                <i className={dateFormat ? "fa fa-calendar" : "fa fa-clock"}></i>
                            </Button>
                        </InputGroup.Append>
                        { children }
                    </InputGroup>
                )
            }>
        </DateTime>
    );
};

const FormControlTypeahead = ({ value, onChange, children, isInvalid, errorMessageEmptyTextbox, errorMessageNoneSelected, ...props }) => {
    
    const onWrappedChange = (event) => {
        if (event && event.length > 0) {
            value.setError(null);
            onChange(event);
        }
    };

    const onInputChange = (input) => {
        value.setDirty(true);
        if (input) {
            value.setValue(errorMessageNoneSelected);
        } else {
            value.setValue(errorMessageEmptyTextbox);
        }
    }

    return (
        <>
            <Typeahead
                id="typeahead"
                value={value}
                ref={(th) => { value.typeahead = th }}
                onChange={onWrappedChange}
                onInputChange={onInputChange}
                maxResults={5}
                {...props}
            />

            <Form.Control as="input" type="hidden"
                isInvalid={isInvalid}>
            </Form.Control>
            {children}
            
        </>
    );
};

const FormControlMultipleselect = ({optionList}) => {
    // const onWrappedChange = (event) => {
    //     onChange(event);
    // };
    return(
        <div style={{color: "black"}}>
            <Select
                style={{zIndex: 1}}
                isMulti
                // value={value.value}
                options={optionList}
                // onChange={onWrappedChange}
                >
            </Select>

            <Form.Control as="input" type="hidden"
                // isInvalid={isInvalid}
                >
            </Form.Control>
        </div>
    )
}

const FormControl = () => {
    return (
        <></>
    );
};

FormControl.DateTime = FormControlDateTime;
FormControl.Multipleselect = FormControlMultipleselect;
FormControl.Typeahead = FormControlTypeahead;

export default FormControl;