/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import './Root.css'
import { makeObservable, observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

function League(){
  const [playerSearch, setPlayerSearch] = useState('')

}
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
        <div className="container">
          <h5> League of Legends Player Search</h5>
          <input type="text"></input>
          <button>Search for Player</button>
          <Link to={`champions`}>CHANGE PAGE</Link>
          {this.title === 'op.gg' && <p>Show this if title is op.gg</p>}
        </div>
      </div>
    )
  }
}
