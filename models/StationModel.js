const BaseModel = require("./BaseModel");

module.exports = class StationModel extends BaseModel {
  constructor() {
    super();
    this.schema = "Stations";
  }

  getAllByKey(key) {
    return this.getAll()
        .filter((el) => {
          return el.category === key;
        })
        .sort( (a,b)=>{
            return parseInt(a.play_count) > parseInt(b.play_count) ? -1 : 1;
        });
  }

  getByKey(key) {
    return this.getAll()
      .filter((el) => {
        return el.station_key === key;
      })
      .pop();
  }

  getUrlKey(key) {
    return this.getAll()
      .filter((el) => {
        return el.stream_url === key;
      })
      .pop();
  }
}
