import React from 'react'

class Launch {
  constructor (
    public id: number,
    public name: string,
    public windowStart: string,
    public windowEnd: string,
    public locationName: string,
    public locationCountryCode: string
  ) {
    this.id = id
    this.name = name
    this.windowStart = windowStart
    this.windowEnd = windowEnd
    this.locationName = locationName
    this.locationCountryCode = locationCountryCode
  }
}

class App extends React.Component {
  state = {
    launches: []
  }

  componentWillMount () {
    this.fetchNextLaunches()
  }

  fetchNextLaunches () {
    fetch('https://launchlibrary.net/1.4/launch/next/10')
      .then((res: any) => {
        res.json()
          .then((data: any) => {
            let helperArray: Array<any> = []

            data.launches.map((launch: any) => {
              helperArray.push(new Launch(
                launch.id,
                launch.name,
                launch.windowstart,
                launch.windowend,
                launch.location.name,
                launch.location.countryCode
              ))
            })

            this.setState({ launches: helperArray })
          })
      })
  }

  render() { // exact behaviour as computed properties in Vue
    const launches = this.state.launches.map((launch: any, key: any) =>
      <div key={ launch.id }>{ launch.name }</div>
    )
    return (
      <>
        <header className="App-header">
          <h1>Space launch</h1>
          { launches }
        </header>
      </>
    )
  }
}

export default App
