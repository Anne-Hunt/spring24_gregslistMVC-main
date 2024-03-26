import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = generateId()
    this.address = data.address
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


  get HomeCard() {
    return `
    <div class="col-6 col-md-4">
        <div class="card">
          <img class="card-img-top"
            src="${this.imgUrl}"
            alt="Home for sale">
          <div class="card-body">
            <h4 class="card-title text-center text-success">${this.address}</h4>
            <p class="card-text">${this.year} (${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms</p>
            <p class="bg-success p-2 rounded text-light fw-bold text-end">$${this.price}</p>
            <button onclick="app.HomeController.deleteHouse('${this.id}')" class="btn btn-warning rounded-circle text-danger"><i class="mdi mdi-delete-outline"></i></button>
          </div>
        </div>
      </div>
    `
  }
}
