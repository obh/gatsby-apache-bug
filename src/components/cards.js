import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "gatsby";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: '216px',
    textAlign:'center',
    height: '282px',
    borderRadius:'8px',
    position: 'relative',
    transition: '.3s',
    marginRight:'26px',
    marginBottom:'26px',
    boxSizing:'border-box',
    boxShadow: '0 4px 12px 0 rgba(125, 68, 240, 0.12)',
    "&:hover": {
      boxShadow: '0 8px 16px 0 rgba(125, 68, 240, 0.12)',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  media: {
  height: '120px',
  marginBottom:'32px',
  borderRadius: '8px',
  },

  title: {
    fontSize: '24px',
    fontFamily: 'OpenSans',
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#434343',
    marginBottom: 12,
  },
  link: {
    width:'100%',
    display:'inline-block',
    textAlign:'center',
    textDecoration:'none',
  },
  pos: {
    marginBottom: 12,
  },
  cardtext: {
    fontSize: '12px',
    fontFamily: 'OpenSans',
    fontWeight: 'normal',
    lineHeight: 1.5,
    textAlign: 'center',
    color: '#666666',
  },
};

function redirect(){
  console.log("redirect");
}

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <Link to={props.target} className={classes.link}>
      <CardContent>
      <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image={props.media}
        />
        <Typography variant="h5" component="h2" className={classes.title} >
          {props.header}
        </Typography>
        <Typography component="p" className={classes.cardtext}>
          {props.main}
        </Typography>
      </CardContent>
      </Link>          
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
