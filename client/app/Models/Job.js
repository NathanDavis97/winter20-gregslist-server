export default class House {
  constructor({ bedrooms, bathrooms, year, price, description, imgUrl, id, levels }) {
    console.log("bathrooms: constructor", 3)
    this.id = id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
    this.levels = levels
  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.bedrooms} - ${this.bathrooms} - ${this.levels} - ${this.year}</h4>
            <p class="card-text">${this.description}</p>
            <p class="card-text">${this.price}</p>
            <div class="text-right">
            <button type="button" class="btn btn-success" onclick="app.carsController.bid('${this.id}', '${this.price += 1000}')">Bid</button>
                <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }