const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Log Page</h1>

        <form action="/logs" method="POST">
            Title: <input type='text' name='title' />
            Entry: <textarea name='entry' />
            Ship Is Broken: <input type='checkbox' name="shipIsBroken" /> 
            <input type='submit' value='Add New' />
        </form>
        <nav>
           <a href="/logs">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New