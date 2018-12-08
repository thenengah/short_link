import PropTypes from 'prop-types'
import React from 'react'
import ReactOnRails from 'react-on-rails'
import fetch from 'cross-fetch'
import { connect } from 'react-redux'
import 'spectre.css'

class LinkInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.inputReference = React.createRef()
    this.add = this.add.bind(this)
  }

  async add (e) {
    const res = await fetch('/add', { 
      method: 'post',
      headers: { 
        'X-CSRF-Token': ReactOnRails.authenticityToken(),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link: { url: this.inputReference.current.value } })
    })
    const { errors, link } = await res.json()
    if (errors.length) {
      this.props.dispatchAddLinkError(errors)
    } else {
      this.inputReference.current.value = ''
      this.props.dispatchAddLinkSuccess(link)
    }
  }

  render() {
    return (
      <div className='container grid-sm'>
        <div style={{ padding: '0 15px'}}>
          <div style={{ textAlign: 'center'}}>
            <h1 style={{ paddingTop: '10vh' }}>
              <a href="/">Short Link</a>
            </h1>
            <div>
              <p>Enter a url and click shorten to get a short link.</p>
              <div className="input-group">
                <input ref={this.inputReference} 
                  className="form-input" 
                  type="text" 
                  placeholder="Example: https://www.blacktangent.com" />
                <button onClick={this.add} className="btn btn-primary input-group-btn">Shorten</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchAddLinkSuccess: link => dispatch({ type: 'ADD_LINK_SUCCESS', link }),
  dispatchAddLinkError: errors => dispatch({ type: 'ADD_LINK_ERROR', errors })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkInput)
