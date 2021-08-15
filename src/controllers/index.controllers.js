const indexControllers = {};

const modelsListVerbs = require('../models/listVerbs');

const moment = require('moment');
moment.locale('es');

indexControllers.searchVerbs = async (req, res) => {
   let searchVerbs;

   try {
      searchVerbs = await modelsListVerbs
         .find()
         .lean()
         .exec();
      // console.log(searchVerbs);

      if (searchVerbs) {
         res.json({
            searchVerbs,
            nowFecha: moment().format('YYYY-MM-DD'),
            nowHora: moment().format('HH:mm')
         });
      } else {
         res.json({
            searchVerbs: 'false',
            nowFecha: moment().format('YYYY-MM-DD'),
            nowHora: moment().format('HH:mm')
         });
      }
   } catch (e) {
      console.log(e);
   }
};

module.exports = indexControllers;