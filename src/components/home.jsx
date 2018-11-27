import React, { Component } from 'react'
import '../assets/css/main.css'
export class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div id='home'>
        <nav>
          <ul>
            <div className='left'>
              <li id='logo' />
            </div>
            <div className='right'>
              <li id='accounts' />
              <li id='menu' />
            </div>
          </ul>
        </nav>
        <header>
          <h1>Explore<br />The Beauty</h1>
          <p>With our explorers, photographers, journalists and film makers</p>
          <div className='gradient' />
        </header>
        <main>
          <a id='mainLink1' href='#'>
            <div id='corner' />

            <h2>Good news:<br />Greens are growing back</h2>
            <p>Read now</p>
          </a>
          <a id='mainLink2' href='#'>
            <caption>
              <h3>Photography</h3>
              <p>Frustrated Alzheimer’s researchers seek better lab mice
              </p>
            </caption>
          </a>
          <a id='mainLink3' href='#'>
            <div className='play'>

              <div className='circle'>
                <div className='triangle' />
              </div>
            </div>
            <caption>
              <h3>Research</h3>
              <p>Scaintists discovered how DNA can reveal animal behavour </p>
            </caption>
          </a>
        </main>

      </div>
    )
  }
}
