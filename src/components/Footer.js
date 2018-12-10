import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  footerContainer: {
    backgroundColor: 'red'
  }
}

class Footer extends Component {
  render() {
    const { classes }  = this.props

    return (
      <div className={classes.footerContainer}>
        Footer
      </div>
    )
  }
}

export default withStyles(styles, { name: 'Footer' })(Footer)
