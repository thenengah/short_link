import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

class LinkError extends React.Component {
  render() {
    if (!this.props.errors.length) {
      return null
    } else {
      return (
        <div className='container grid-sm' style={{ padding: '10px 20px 0 20px' }}>
          <div className="bg-dark text-error text-center" style={{ padding: 10 }}>
            The url you entered is invalid. 
          </div>
        </div>
      )
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

LinkError.propTypes = {
  errors: PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkError)
