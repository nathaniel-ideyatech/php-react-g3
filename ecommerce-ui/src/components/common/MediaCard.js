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
import { ServiceDetailModal } from 'components';


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

const MediaCard = ({serviceDetail})  =>{
  const classes = useStyles();


  const [ uiState, setUiState ] = useState({
    selectedService: null,
    showServiceDetailModal: false,
  })

  const onRequestSeeDetails = (value) =>{
    setUiState({
      ...uiState,
      showServiceDetailModal: true,
      selectedService: value
    })
  }

  const onCancelShowDetails = () =>{
    setUiState({
        ...uiState,
        showServiceDetailModal: false
    })
  }

  return (
    <section className={classes.root}>
      <Card className={classes.card}>
          <CardActionArea onClick={() => onRequestSeeDetails(serviceDetail)}>
              <CardMedia
                  className={classes.media}
                  image="https://arrowup.media/wp-content/uploads/2018/07/web-dev-img.jpg"
                  title="Service image"
              />
              <CardContent style={{maxHeight: '84px'}}>
                  <Typography variant="h6" component="h2" nowrap style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    {serviceDetail.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" noWrap>
                    {serviceDetail.description}
                  </Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <Button color="primary" style={{'width':'10px'}}>
                  <i className="fas fa-cart-arrow-down"></i>  
              </Button>
              <Button color="primary" style={{'marginLeft':'-20px'}}>
                  <i className="fas fa-file-signature"></i>
              </Button>
              <Typography variant="body2" color="textSecondary" component="p" noWrap alignRightd>
                {serviceDetail.price}
              </Typography>
          </CardActions>
      </Card>

      <ServiceDetailModal 
          serviceDetail={uiState.selectedService} 
          isShown={uiState.showServiceDetailModal} 
          onClose={onCancelShowDetails} 
      />
    </section>
  );
}


export default MediaCard 
