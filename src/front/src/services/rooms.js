import api from "./ServicesAPI";

class RoomsApi {
    constructor(api) {
        this.api = api;
    }

    async getRooms() {
        const {data} = await this.api.get(`rooms`);
        console.log(data);
        return data;
    }
}

export default new RoomsApi(api);
