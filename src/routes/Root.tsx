/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import logo from '../assets/logo.svg'
import './Root.css'
import { makeObservable, observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

@observer
export default class App extends React.Component {
  constructor(props: {}) {
    super(props)
    makeObservable(this)
  }

  @observable
  title = 'Ivlor.gg'

  @computed
  get titleFormatted() {
    return this.title + '/nice'
  }

  @action
  changeTitle = () => {
    if (this.title === 'Ivlor.gg') {
      this.title = 'op.gg'
    } else {
      this.title = 'Ivlor.gg'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/routes/Root.tsx</code> and save to reload.
          </p>
          <p>Title: {this.title}</p>
          <p>TitleFormatted: {this.titleFormatted}</p>
          <button type="button" onClick={this.changeTitle}>
            CHANGE TITLE
          </button>
          <Link to={`champions`}>CHANGE PAGE</Link>
          {this.title === 'op.gg' && <p>Show this if title is op.gg</p>}
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}
