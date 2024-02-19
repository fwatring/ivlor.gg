import React from 'react'
import './ChampionList.css'
import { makeObservable, observable } from 'mobx'
import axios from 'axios'
import { observer } from 'mobx-react'

interface Champion {
  version: string
  id: string
  key: string
  name: string
  title: string
  blurb: string
  info: {attack: number
         defense: number
         magic: number
         difficulty: number
        }
  image: {full: string
          sprite: string
          group: string
          x: number
          y: number
          w: number
          h: number
  }
  tags: string[]
  partype: string
  stats: {
          hp: number
          hpperlevel: number
          mp: number
          mpperlevel: number
          movespeed: number
          armor: number
          armorperlevel: number
          spellblock: number
          spellblockperlevel: number
          attackrange: number
          hpregen: number
          hpregenperlevel: number
          mpregen: number
          mpregenperlevel: number
          crit: number
          critperlevel: number
          attackdamage: number
          attackdamageperlevel: number
          attackspeedperlevel: number
          attackspeed: number
  }
  
}

interface ChampionListProps {
  searchText: string
  freeChampionIds: number[]
  filter: string
}

@observer
export default class ChampionList extends React.Component<ChampionListProps> {
  constructor(props: any) {
    super(props)
    makeObservable(this)
  }

  @observable
  champions: Champion[] = []
  
  getChampions = () => {
    const APICallString = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json'

    axios
      .get(APICallString).then((response) => {
      this.champions = Object.values(response.data.data)
      console.log(response.data.data)
      
    }).catch(function (Error) {
      
    });
  }

  componentDidMount(): void {
    this.getChampions()
  }

  render() {
    console.log(this.champions)
    console.log(this.props.freeChampionIds)
    return (
      <div className="listContainer">
        {this.champions
          .filter((x,index,array) => {
            return x.name.toLowerCase().includes(this.props.searchText.toLowerCase())
          })
          .filter((x,index,array) => {
            return this.props.filter === 'rot'?this.props.freeChampionIds.includes(parseInt(x.key)): true
          })
          .filter((x,index,array) => {
            return this.props.filter === 'jng'?x.tags.includes("Fighter"): true
          })
          .map((x,index,array) => {
            return <ChampionListItem key={x.name} champion={x} />
      })
      }

      </div>
    )
  }
}

interface ChampionListItemProps {
  champion: Champion
}

@observer
export class ChampionListItem extends React.Component<ChampionListItemProps> {
  constructor(props: any) {
    super(props)
    makeObservable(this)
  }

  render() {
    return (
      <div>
        <div className="championContainer">
          <img
            className="championImage"
            src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${this.props.champion.image.full}`}
          />
        </div>
        <div className="championName">{this.props.champion.name}</div>
      </div>

    )
  }
}
