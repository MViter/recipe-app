import React, { Component, Fragment } from 'react';
import RecipeCard from './../RecipeCard/index.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
root: {
overflow: 'hidden',
padding: `0 ${theme.spacing.unit * 3}px`,
},
wrapper: {
maxWidth: 1000,
},
paper: {
margin: theme.spacing.unit,
padding: theme.spacing.unit * 2,
},
});

class TheGrid extends Component {
  render () {
    const { classes } = this.props;
    let receipteArray = []
    for (let i = 0; i < 8; i++) {
receipteArray.push(<RecipeCard />)
}
      return (
<Fragment>
<div className={classes.root}>
<div className={classes.wrapper}>
<div className={classes.paper}>
                  {receipteArray}
</div>
</div>
</div>
</Fragment>
)
}
}
export default withStyles(styles)(TheGrid)