import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";




class HousesService {
  async getHouses() {
    let res = await api.get("houses")
    console.log("gethouses");
    api.houses = res.data.map(h => new House(h))
  }
  async createHouse(newHouse) {
    console.log("help")
    let house = await api.post("houses", newHouse)
    console.log(house);

    // ProxyState.houses = [...ProxyState.houses, new House(house.data)]

    this.getHouses()
  }
  async deleteHouse(id) {
    let res = await api.delete("houses/" + id)
    console.log(res)

    // ProxyState.houses = ProxyState.houses.filter(house => house.id != id)

    this.getHouses()

  }

  async bid(id, newPrice) {
    let houseData = { price: newPrice }
    let res = await api.put("houses/" + id, houseData)
    console.log(res);

    // let oldHouseIndex = ProxyState.houses.findIndex(h => h.id == id)

    // let temp = ProxyState.houses
    // temp.splice(oldHouseIndex, 1, new House(res.data))
    // ProxyState.houses = temp

    this.getHouses()

  }



  async getOne(id) {
    //typically you would take in an id from your controller and pass that onto your api
    let res = await api.get("houses/" + id)
    console.log(res)
  }
}

//GET
//URL/api/collection

//GETBYID
//URL/api/collection/someId

//PUT
//URL/api/collection/someId, whatWeAreEditing

//POST
//URL/api/collection , whatWeArePosting

//DELETE
//URL/api/collection/someId
//api.delete(id)



// Singleton Pattern
export const housesService = new HousesService()