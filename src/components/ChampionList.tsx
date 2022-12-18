import React from 'react'
import './ChampionList.css'
import { makeObservable } from 'mobx'
import { observer } from 'mobx-react'

interface Champion {
  image: string
  name: string
}

const champions: Array<Champion> = [
  {
    image: '', // TODO
    name: 'Thresh',
  },
  {
    image: '', // TODO
    name: 'Braum',
  },
]

export default class ChampionList extends React.Component {
  render() {
    return (
      <div>
        {champions.map((champion) => (
          <ChampionListItem key={champion.name} champion={champion} />
        ))}
      </div>
    )
  }
}

interface ChampionListItemProps {
  champion: Champion
}

export class ChampionListItem extends React.Component<ChampionListItemProps> {
  render() {
    return (
      <div className="container">
        <p className="championName">{this.props.champion.name}</p>
      </div>
    )
  }
}
