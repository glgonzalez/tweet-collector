import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

interface TweetProps {
  created_at: string;
  avatar: string;
  text: string;
  user: string;
}

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.default
  },
  text: {
    textAlign: 'start',
    width: '100%'
  },
  button: {
    textAlign: 'start'
  }
}));


export const Tweet = ({avatar, created_at, text, user}: TweetProps) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.paper}>
      <Grid container spacing={3}>
        <ButtonBase className={classes.button}>
          <Grid item className={classes.image}>
            <Avatar alt={user} src={avatar} className={classes.avatar} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='row'>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {user}
                </Typography>
              </Grid>
              <Grid item xs>
              <Typography variant='subtitle1'>{new Date(created_at).toDateString()}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography 
                variant="body2" 
                gutterBottom 
                className={classes.text}
                color='textPrimary'>
                {text}
              </Typography>
            </Grid>
          </Grid>
        </ButtonBase>
      </Grid>
    </Grid>
  );
}