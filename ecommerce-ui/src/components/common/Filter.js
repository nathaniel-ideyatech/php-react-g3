import React, { useState, useEffect } from 'react';
import moment from 'moment';
import _ from 'underscore';

import { Button, Col, Form } from 'react-bootstrap';
import { FormControl } from 'components';

const TextFilter = ({ label, onChange }) => {
    const onChangeText = (event) => {
        console.log(event.target.value)
        // const value = event ? event.target.value : '';
        // _.isFunction(onChange) && onChange(value);
    };

    return (
        <Col sm>
            <Form.Group>
                <Form.Control as="input"
                    type="text"
                    style={{"width":"300px"}}
                    placeholder="Search..."
                    onChange={ onChangeText }>
                </Form.Control>
            </Form.Group>
        </Col>
    );
};

const Filter = ({ children }) => {
    return (
        <div className="search-wrap mb-3">
            <Form inline>
                <Form.Row>
                    { children }
                    <Col sm>
                        <Button className="search-btn">
                            <i className="fa fa-search"></i>
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

Filter.Text = TextFilter;

export default Filter;