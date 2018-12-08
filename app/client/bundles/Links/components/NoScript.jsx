import React from 'react'

export default class NoScript extends React.Component {
  render() {
    return (
      <React.Fragment>
        <noscript>
          <div className="bg-dark text-error text-center" style={{ padding: 10 }}>
            This page needs javascript enabled.
          </div>
        </noscript>
      </React.Fragment>
    );
  }
}
