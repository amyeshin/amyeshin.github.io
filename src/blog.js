import React from 'react';
import './projects.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Bread from './images/bread.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 250,
    borderRadius:6,
    boxShadow: '0 1px 5px rgba(0,0,0,.05), 0 5px 30px rgba(0,0,0,.2)',
  },
  blog_underlay: {
      background: '#feefec',
      borderRadius: 6,
      padding: '18px',
      marginBottom: '24px',
      maxHeight: 225,
  },
  img_border:{
      borderRadius:0,
  },
});

function Blog() {
  const classes = useStyles();

  return (
      <div className="project-container center">
        <div className="container left">
          <p> If you're wondering what I have been up to during quarantine,
              check out my blog. Here's one of my most recent posts on my
              experience tackling bread baking!</p>
        </div>

        <div className="project-img-wrapper">
            <div className={classes.blog_underlay}>
                <Button onClick={() => window.open('https://amyeshin.wixsite.com/blog/post/hopping-on-the-bread-baking-train')}>
                  <Card className={classes.root}>
                      <CardMedia>
                        <img className={classes.img_border} src={Bread} alt="Focaccia Bread"/>
                      </CardMedia>
                          <p>Hopping on the Bread Baking Train</p>
                  </Card>
                </Button>
            </div>
        </div>
      </div>
  );
}

export default Blog;
