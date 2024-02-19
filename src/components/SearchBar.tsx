import React from 'react'
import './SearchBar.css'
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
      <div className="searchbarContainer">
        <img src="/assets/icon-search-dark.svg" className="iconContainer"></img>

        <input value={this.props.searchText} onChange={this.props.handleChange} className="textInputContainer" placeholder="Search a Champion"/>
      </div>
    )
  }
}
