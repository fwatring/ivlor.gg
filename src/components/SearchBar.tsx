import React from 'react'
import './ChampionList.css'
import { makeObservable, observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

interface SearchBarProps {
  searchText: string
  handleChange: any
}

export default class SearchBar extends React.Component<SearchBarProps> {
  render() {
    return (
      <div>
        <input type="text" value={this.props.searchText} onChange={this.props.handleChange} />
      </div>
    )
  }
}
