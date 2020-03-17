import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';


import { MultipleSelection } from 'components';

import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

import { Divider, List, ListItem, ListItemText, 
            ListItemAvatar, Avatar, Box, Slider, Grid, Input  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles(theme => ({
    filterBarLabel: { 
        color: '#4e4a4a',
        marginLeft: '10px',
        textAlign: 'left',
        fontSize: '1em',
    },
    root: {
        width: '100%',
        maxWidth: 360,
        marginLeft: '-20px',
        marginTop: '-20px'
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    listItemText: {
        color: '#4e4a4a',
        marginLeft: '-30px',
        marginTop: '35px',
    },
    filterTool: {
        marginTop: '-35px',
        marginLeft: '40px',
        color: 'null'
    },
    rating: {
          iconFilled: {
            color: '#ff6d75',
        },
        iconHover: {
            color: '#ff3d47',
        },
    },
    listItemAvatar: {
        color: 'black'
    },
    listItem: {
        marginTop: '-40px'
    },
      slider: {
    padding: '22px 0px',
  },
    input: {
    width: 42,
  },
}));

function valuetext(value) {
  return `${value}`;
}

const CustomerDashboardSideBar = () => {
    const classes = useStyles();

    const [value, setValue] = useState(2)
    const [priceRange, setPriceRange] = useState([1000, 100000]);
    const [maxPrice, setMaxPrice] = useState(priceRange[1])

    const handlePriceRangeChange = (event, newValue) => {
        console.log(priceRange)
        setPriceRange(newValue);
        console.log(priceRange)

    };

    const handleInputMaxPriceChange = event => {
        setMaxPrice(event.target.value)
        setPriceRange([priceRange[0],event.target.value]);
    };

    const handleInputMinPriceChange = event => {
        setPriceRange(event.target.value === '' ? '' : Number(event.target.value));
    };

    const categoryList = [
        {value: "1", label: "Beauty and Cosmetics"},
        {value: "2", label: "Health and Wellness"},
        {value: "3", label: "Home Decorations"},
        {value: "4", label: "Cars and Motors"},
        {value: "5", label: "Food and Beverages"}
    ]

    const [ priceFilterValue, setPriceFilterCalue ] = useState(5000)
    return (
        <nav id="sidebar" className="active" style={{"position":"fixed","top":"100px"}}>
            <div className={classes.filterBarLabel}>
                <h5><i class="fas fa-filter"></i> Filters</h5>
            </div>
            <Divider width="75%" alignRight/>

            <div id='search-refinements'>
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <i class="fa fa-list-alt" aria-hidden="true"></i>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText}>
                            <span>Category</span>
                        </ListItemText>
                    </ListItem>
                    <section className={classes.filterTool}> 
                        <MultipleSelection
                            optionList={categoryList}
                        >
                        </MultipleSelection>
                    </section>

                    <ListItem className={classes.listItem}>
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <i class="fas fa-star"></i>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText}>
                            <span>Reviews <i class="fas fa-sort-amount-up"></i></span>
                        </ListItemText>
                    </ListItem>
                    <section className={classes.filterTool}> 
                        <Rating
                            name="customized-empty"
                            value={value}
                            onChange={(event, newValue) => {
                                console.log(value)
                                setValue(newValue);
                            }}
                        />
                    </section>

                    <ListItem style={{marginTop: '-60px'}}>
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <i class="fas fa-money-check-alt"></i>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText}>
                            <span>Price <i class="fas fa-sort-amount-up"></i></span>
                        </ListItemText>
                    </ListItem>
                    <section className={classes.filterTool}> 
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <span
                                    className={classes.input}
                                    onChange={handlePriceRangeChange}
                                >{priceRange[0]}</span>
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    className={classes.slider}
                                    value={priceRange}
                                    aria-labelledby="label"
                                    onChange={handlePriceRangeChange}
                                    max={100000}
                                />
                            </Grid>
                            <Grid item>
                                <span
                                    className={classes.input}
                                    onChange={handleInputMaxPriceChange}
                                >{priceRange[1]}</span>
                            </Grid>
                        </Grid>
                    </section>
                </List>

                


                
                {/* <div className="category">
                    <span>Category</span>
                    <section> 
                        <MultipleSelection
                            optionList={categoryList}
                        >
                        </MultipleSelection>
                    </section>
                </div> */}

                {/* <div className="price">
                    <span>Price</span>
                    <section>   
                        <InputRange
                            maxValue={10000}
                            minValue={0} 
                            value={priceFilterValue}
                            onChange={value=>setPriceFilterCalue(value)}
                        />
                    </section>
                </div> */}
            </div>
        </nav>
    );
}

export default CustomerDashboardSideBar