import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  console.log(5)
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(house => {
    // NOTE Getters FAKE properties as methods
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}


export default class HousesController {
  constructor() {
    ProxyState.on("houses", _drawHouses)
    _drawHouses()
    this.getHouses()
  }

  getHouses() {
    try {
      housesService.getHouses()
    } catch (error) {
      console.error(error)
    }
  }

  createHouse() {
    window.event.preventDefault()
    debugger
    let form = window.event.target
    let newHouse = {
      bedrooms: form['bedrooms'].value,
      bathrooms: form['bathrooms'].value,
      year: form['year'].value,
      price: form['price'].value,
      description: form['description'].value,
      imgUrl: form['imgUrl'].value,
      levels: form['levels'].value
    }
    try {
      housesService.createHouse(newHouse)

    } catch (error) {
      console.error(error)
    }

    console.log(7)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-house-modal").modal('hide');
  }
  deleteHouse(id) {
    try {
      housesService.deleteHouse(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id, price) {
    try {
      console.log(id, price)
      housesService.bid(id, price)
    } catch (error) {
      console.error(error)
    }
  }

  getOne() {
    let id = ProxyState.houses[0].id
    housesService.getOne(id)
  }
}