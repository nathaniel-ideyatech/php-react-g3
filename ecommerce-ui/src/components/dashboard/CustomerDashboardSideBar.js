import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { MultipleSelection } from 'components';

import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';


const CustomerDashboardSideBar = () => {

    const categoryList = [
        {value: "1", label: "Beauty and Cosmetics"},
        {value: "2", label: "Health and Wellness"},
        {value: "3", label: "Home Decorations"},
        {value: "4", label: "Cars and Motors"},
        {value: "5", label: "Food and Beverages"}
    ]

    const [ priceFilterValue, setPriceFilterCalue ] = useState(5000)
    return (
        <nav id="sidebar" className="active">

            <div id="search-refinements">
                <div className="category">
                    <span>Category</span>
                    <section> 
                        <MultipleSelection
                            optionList={categoryList}
                        >
                        </MultipleSelection>
                    </section>
                </div>

                <div className="price">
                    <span>Price</span>
                    <section>   
                        <InputRange
                            maxValue={10000}
                            minValue={0} 
                            value={priceFilterValue}
                            onChange={value=>setPriceFilterCalue(value)}
                            
                        />
                    </section>
                </div>
            </div>
        </nav>
    );
}

export default CustomerDashboardSideBar