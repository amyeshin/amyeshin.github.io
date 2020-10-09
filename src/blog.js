import React from 'react';
import './projects.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bread from './images/bread.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 500,
    borderRadius:8,
  },
});

function Blog() {
  const classes = useStyles();

  return (
      <div className="container">
        <div className="bullet-wrapper">
          <p> If you're wondering what I have been up to during quarantine,
              check out my blog. Here's one of my most recent posts on my
              experience tackling bread baking!</p>
        </div>
        <div className="project-img-wrapper">
              <Card className={classes.root}>
                  <CardMedia>
                    <img src={Bread} alt="Focaccia Bread"/>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Hopping on the Bread Baking Train
                    </Typography>
                  </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => window.open('https://amyeshin.wixsite.com/blog/post/hopping-on-the-bread-baking-train')}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
        </div>
      </div>

  );
}

export default Blog;
