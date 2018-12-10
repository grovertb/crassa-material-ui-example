import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  width1: {
    width: '100px'
  },
  width2: {
    width: '200px'
  },
  width3: {
    width: '300px'
  },
  width4: {
    width: '400px'
  },
  width5: {
    width: '500px'
  },
  width5: {
    width: '500px'
  },
  width6: {
    width: '600px'
  },
  width7: {
    width: '700px'
  }
}

class User extends Component {
  render() {
    return (
      <div>
        User
      </div>
    )
  }
}

export default withStyles(styles, { name: 'User' })(User)
