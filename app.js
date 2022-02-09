const debug = require('debug')('challenge');
const axios = require('axios');
const CategoryModel = require("./models/CategoryModel");
const StationModel = require("./models/StationModel");

const run = async () => {
  // const categoryModel = new CategoryModel();
  // const stationModel = new StationModel();


  /**
   * Define your solution here
   */

};

const tsStart = Date.now();
debug(`Application started`);
run()
    .then(() => debug(`Application finished %s`, Date.now() - tsStart))
    .catch(console.error);
