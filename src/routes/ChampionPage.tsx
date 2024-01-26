import React from 'react'
import ChampionList from '../components/ChampionList'
import SearchBar from '../components/SearchBar'
import { makeObservable, observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

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

  render() {
    return (
      <div>
        <SearchBar searchText={this.searchText} handleChange={this.handleChange} />
        <ChampionList searchText={this.searchText} />
      </div>
    )
  }
}
