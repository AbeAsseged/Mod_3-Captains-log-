const React = require("react")


class Index extends React.Component {
  render() {
    const { logs } = this.props
    return(
      <div>
        <h1> Logs Index Page </h1>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {
            logs.map((log, i) => {
              return (
                <li key={i}>
                  The{' '}
                  <a href={`/logs/${log._id}`}> {logs.title} </a>
                    {/* <a href={`/logs/${i}`}> for w/out mongoDb W12D1-2 not for for W12D3 */}
                  <a href={`/logs/${log._id}/edit`}>Edit This Ship</a>
                  <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                  <input type='submit' value='DELETE' />
                  </form>
                                     
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index