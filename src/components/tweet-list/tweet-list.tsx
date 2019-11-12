import React from 'react';
import { useTwitterApi } from '../../use-twitter-api';
import {Tweet} from '../tweet';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    textAlign: 'start'
  }
}));

export const TweetList = () => {
  const classes = useStyles();
  const tweets = useTwitterApi();
  return (
    <div className={classes.root}>
      <Grid container className={classes.paper}>
        {tweets ? tweets.map((t: any) => {
          return (
            <Tweet 
              key={t.id} 
              created_at={t.created_at}
              avatar={t.user.profile_image_url}
              text={t.text}
              user={t.user.screen_name}/>
          )
        }) : null}
      </Grid>
    </div>
  );
};