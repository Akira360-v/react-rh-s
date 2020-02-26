import React from 'react'
import { NavLink } from 'react-router-dom'
// import MessagesExemple from '../components/exemple/MessagesExemple'

const StatisticsItem = props => {
  return (
    <div className="SettingsItem">
      <NavLink to={"/Statistics/" + props.id}>{props.name}</NavLink>
    </div>
  )
}



const Statistics = () => {

  let StatisticsData = [
    {id:1, name:'SettingsItem(1)'},
    {id:2, name:'SettingsItem(2)'},
    {id:3, name:'SettingsItem(3)'},
    {id:4, name:'SettingsItem(4)'},
  ]
  // let MessagesData = [
  //   {id:1, messages:'Hello Yo'},
  //   {id:2, messages:'Hello'},
  //   {id:3, messages:'Yo'},
  //   {id:4, messages:'Yo'},
  // ]

  return (
    <ul className="Statistics">
      Statistics
      <div className="">
      <StatisticsItem name={StatisticsData[0].name} id={StatisticsData[0].id} />
      <StatisticsItem name={StatisticsData[1].name} id={StatisticsData[1].id} />
      <StatisticsItem name={StatisticsData[2].name} id={StatisticsData[2].id} />
      <StatisticsItem name={StatisticsData[3].name} id={StatisticsData[3].id} />
      </div>
      {/* <MessagesExemple posts={MessagesData} /> */}
    </ul>
  )
}

export default Statistics
