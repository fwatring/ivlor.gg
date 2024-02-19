import React from 'react'
import ChampionList from '../components/ChampionList'
import SearchBar from '../components/SearchBar'
import { makeObservable, observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import './ChampionPage.css'
import axios from 'axios'


@observer
export default class ChampionPage extends React.Component {
  constructor(props: any) {
    super(props)
    makeObservable(this)
  }

  @observable
  searchText = ''

  handleChange = (event: { target: { value: string } }) => {
    this.searchText = event.target.value
  }
  updateFilter = (value:string)=>()=>{this.filter=value}

  @observable
  filter = ''
  
  getRotation = () => {
   const API_KEY = "RGAPI-f54db447-50fe-4509-8aeb-216c2385977c"
   const APICallString: string = "https://na1.api.riotgames.com/lol/platform/v3/champion-rotations" + "?api_key=" + API_KEY

    axios
      .get(APICallString).then((response) => {
      this.freeChampionIds = response.data.freeChampionIds
      console.log(this.freeChampionIds)
      
    }).catch(function (Error) {
      
    })
  }

  componentDidMount(): void {
    this.getRotation()
  }

  @observable
  freeChampionIds = []



  render() {
    return (
      <div>
        <Link to={`/`}>Player Search Page</Link>
        <SearchBar searchText={this.searchText} handleChange={this.handleChange} />
        <div className="buttonRowContainer">

          <button type="button" className="buttonContainer leftButtonContainer" onClick={this.updateFilter("all")}>
          <img src="/assets/icon-position-all.svg" className="iconContainer"/>
          </button>
          <button type="button" className="buttonContainer" onClick={this.updateFilter("top")}>
            <img src="/assets/icon-position-top.svg" className="iconContainer"/>
          </button>
          <button type="button" className="buttonContainer" onClick={this.updateFilter("jng")}>
          <img src="/assets/icon-position-jng.svg" className="iconContainer"/>
          </button>
          <button type="button" className="buttonContainer" onClick={this.updateFilter("mid")}>
          <img src="/assets/icon-position-mid.svg" className="iconContainer"/>
          </button>
          <button type="button" className="buttonContainer" onClick={this.updateFilter("bot")}>
          <img src="/assets/icon-position-bot.svg"className="iconContainer"/>
          </button>
          <button type="button" className="buttonContainer" onClick={this.updateFilter("sup")}>
          <img src="/assets/icon-position-sup.svg" className="iconContainer"/>
          </button>
          <button type="button" className="buttonContainer rightButtonContainer" onClick={this.updateFilter("rot")}>
          <img src="/assets/icon-rotation.svg" className="iconContainer"/>
          </button>
        </div >
        <ChampionList searchText={this.searchText} freeChampionIds={this.freeChampionIds} filter={this.filter}/>
      </div>
    )
  }
}
