const React = require('react')

class Show extends React.Component {
  render () {
    const log = this.props.log

    return (
      <div>
        <h1> Show Page </h1>
            Title: {}
            Entry: {}
            ship Is Broken: {log.shipIsBroken ? 'The Ship has been exposed' : 'Ship is ready to Lounch'}
      
      </div>
    );
  }
}

module.exports = Show;