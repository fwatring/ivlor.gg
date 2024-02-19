/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Root.css';
import { makeObservable, observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function League() {
  const [playerSearch, setPlayerSearch] = useState<string>(''); // Added type annotation

  const API_KEY: string = "RGAPI-ac62d90c-af29-43ae-b10b-ac908617d198";

  function searchForPlayer(event: React.FormEvent<HTMLButtonElement>) { // Added type annotation
    const APICallString: string = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + playerSearch + "?api_key=" + API_KEY;
    axios.get(APICallString).then(function (response) {
      console.log(response);
    }).catch(function (Error) {
      console.log(Error);
    });
  }

  return (
    <div className="League">
      <div className="container">
        <h5> League of Legends Player Search</h5>
        <input type="text" value={playerSearch} onChange={e => setPlayerSearch(e.target.value)} /> {/* Fixed input element */}
        <button onClick={(e: React.FormEvent<HTMLButtonElement>) => searchForPlayer(e)}>Search For Player</button> {/* Fixed button element */}
        <Link to={`champions`}>Champions Page</Link>
      </div>
    </div>
  );
}

@observer
export default class App extends React.Component<{}, { title: string }> { // Added type annotations
  constructor(props: {}) {
    super(props);
    makeObservable(this);
  }

  @observable
  title: string = 'Ivlor.gg'; // Added type annotation

  @computed
  get titleFormatted(): string { // Added type annotation
    return this.title + '/nice';
  }

  @action
  changeTitle = () => {
    if (this.title === 'Ivlor.gg') {
      this.title = 'op.gg';
    } else {
      this.title = 'Ivlor.gg';
    }
  }

  render() {
    return (
      <div className="App">
        <League /> {/* Render League component */}
        <div className="container">
          {this.title === 'op.gg' && <p>Show this if title is op.gg</p>}
        </div>
      </div>
    );
  }
}
