import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import _ from 'underscore';
import { ServiceDetailModal, ServiceFeedbackModal } from 'components';


const useStyles = makeStyles({
  root: { 
    display: 'inline-block'
  },
  card: {
    maxWidth: 345,
    width: 300,
    marginTop: 20,
    marginLeft: 35,
  },
  media: {
    height: 140,
  },
  actions: {
    width: 10
  }
});

const Feedback = ({feedback})  =>{
    const classes = useStyles();

    const userName = feedback ? feedback.user.name : '';

    return (
        <section className={classes.root}>
            <p>{userName}</p>
            <p>{feedback.comment}</p>
        </section>
    );
}


export default Feedback 
