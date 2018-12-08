import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import Link from './Link'
import LinkInput from './LinkInput'
import LinkError from './LinkError'
import NoScript from './NoScript'

class Links extends React.Component {

  render() {
    return (
      <div>
        <NoScript />
        <LinkInput />
        <LinkError />
        <div className='container grid-md' style={{ padding: 25 }}>
          { this.props.links.map(link => 
            <Link key={link.short_url} {...link} /> 
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ links: state.links })
const mapDispatchToProps = () => ({})

Links.propTypes = {
  links: PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Links)
