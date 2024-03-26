import { AppState } from "../AppState.js";
import { House } from "../models/Homes.js";

class HomesService {
  createHouse(homeData) {
    console.log('house-service', homeData);
    const createdHouse = new House(homeData)
    console.log('home created', createdHouse);
    AppState.houses.push(createdHouse)
    this.saveHouse()
  }

  deleteHouse(houseId) {
    let houseToDelete = AppState.houses.findIndex(house => house.id == houseId)
    console.log('deleting', houseToDelete);
    AppState.houses.splice(houseToDelete, 1)
    console.log('house deleted', AppState.houses)

    this.saveHouse()
    console.log('local storage updated')
  }

  saveHouse() {
    let dataString = JSON.stringify(AppState.houses)
    localStorage.setItem('houses', dataString)
    console.log('houses', AppState.houses)
  }

  loadHouse() {
    let homeString = localStorage.getItem('houses')
    //console.log('Loading homes')
    const homesData = JSON.parse(homeString)
    //console.log('doing loading')
    if (homesData == null) return

    const homes = homesData.map(house => new House(house))
    console.log(homes);
    AppState.houses = homes
  }
}

export const homesService = new HomesService()