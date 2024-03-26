import { AppState } from "../AppState.js";
import { homesService } from "../services/HomesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class HomeController {
  constructor() {
    console.log('home controller present')
    homesService.loadHouse()
    this.drawHouseHTML()
  }

  drawHouseHTML() {
    console.log('drawing the blueprints')
    const houses = AppState.houses
    let homeHTML = ''
    houses.forEach(house => homeHTML += house.HomeCard)
    const houseListElm = document.getElementById('homes-list')
    houseListElm.innerHTML = homeHTML
  }

  createHouse() {
    event.preventDefault()

    let homeData = getFormData(event.target)
    console.log('created on controller, moving on', homeData);
    homesService.createHouse(homeData)
    event.target.reset()
    this.drawHouseHTML()
  }


  deleteHouse(houseId) {
    console.log('deleting', houseId);
    homesService.deleteHouse(houseId)
    this.drawHouseHTML()
  }
}
