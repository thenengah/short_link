import PropTypes from 'prop-types'
import React from 'react'
import ReactOnRails from 'react-on-rails'
import fetch from 'cross-fetch'
import { connect } from 'react-redux'

class ShortLink extends React.Component {

  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this)
  }

  async remove () {
    // no error handling yet, just nice to remove for development 
    this.props.dispatchRemoveLink(this.props)
    await fetch('/remove', { 
      method: 'post',
      headers: { 
        'X-CSRF-Token': ReactOnRails.authenticityToken(),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        link: { 
          url: this.props.url
        }
      })
    })
  }

  render() {
    return (
      <div className="card bg-gray" style={{ margin: 10 }}>
        <div className="card-header">
          <div className="card-title h5">
            <a href={`/${this.props.short_url}`}>http://localhost:3000/{this.props.short_url}</a>
          </div>
          <div className="card-subtitle text-gray">Redirects to: <a href="/{url}">{this.props.url}</a></div>
        </div>
        <div className="card-footer">
          <button onClick={this.remove} className="btn btn-primary">Remove</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {} 
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchRemoveLink: link => {
      dispatch({ type: 'REMOVE_LINK_SUCCESS', link })
    }
  }
}

ShortLink.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  short_url: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortLink)
