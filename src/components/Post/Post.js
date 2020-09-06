import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: 'none',
    borderRadius:'5px'
  },
  mainBtn: {
    background: '#3F51B5',
    borderRadius: 4,
    border: 0,
    color: 'white',
    height: 38,
    padding: '0 20px',
  },
  linkBtn: {
    margin: '15px auto',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const Post = (props) => {
  const classes = useStyles();

  const { title, body, id } = props.post;

  return (
    <Box m="15px" boxShadow={3} bgcolor="white" p={2}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{color:"#4B0082"}}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {props.showBtn && (
            <Link to={'/post/' + id} className={classes.linkBtn}>
              <Button
                size="small"
                variant="contained"
                className={classes.mainBtn}
              >
                Show Details
              </Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
