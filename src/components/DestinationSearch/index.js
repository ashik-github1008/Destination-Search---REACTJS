// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    // usersDetailsList: destinationsList,
  }

  onChangeSearchInput = event => {
    const searchValue = event.target.value
    this.setState({
      searchInput: searchValue.toLowerCase(),
    })
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state


    const searchResults = destinationsList.filter(eachList =>
      eachList.name.toLowerCase().includes(searchInput),
    )

    console.log(searchResults)

    return (
      <div className="app-container pt-5 pb-5">
        <h1 className="heading mb-5">Destination Search</h1>
        <div className="input-container mb-5 pl-3 pr-3">
          <input
            type="search"
            placeholder="Search"
            className="input"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destination-cards-container">
          {searchResults.map(eachItem => (
            <DestinationItem
              imageUrl={eachItem.imgUrl}
              descName={eachItem.name}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
