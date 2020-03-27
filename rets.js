const rets = require('@elm-street-technology/webapi-client');
require("dotenv").config();
const express = require('express');
const retsRouter = express.Router();

const clientSettings = {
    loginUrl: 'http://retsexport1.promatchcomplete.com:49202/login',
    username: 'back176',
    password: 'VwymmsN',
    version: 'RETS/1.7.2',
    userAgent: 'RETS node-client/5.2',
    method: 'GET'
}

function outputFields(obj, opts) {
    if (!obj) {
      console.log("      "+JSON.stringify(obj))
    } else {
      if (!opts) opts = {};

      var excludeFields;
      var loopFields;
      if (opts.exclude) {
        excludeFields = opts.exclude;
        loopFields = Object.keys(obj);
      } else if (opts.fields) {
        loopFields = opts.fields;
        excludeFields = [];
      } else {
        loopFields = Object.keys(obj);
        excludeFields = [];
      }
      for (var i = 0; i < loopFields.length; i++) {
        if (excludeFields.indexOf(loopFields[i]) != -1) {
          continue;
        }
        if (typeof(obj[loopFields[i]]) == 'object') {
          console.log("      " + loopFields[i] + ": " + JSON.stringify(obj[loopFields[i]], null, 2).replace(/\n/g, '\n      '));
        } else {
          console.log("      " + loopFields[i] + ": " + JSON.stringify(obj[loopFields[i]]));
        }
      }
    }
    console.log("");
}

retsRouter.get('/', (req, res) => {
    rets.getAutoLogoutClient(clientSettings, function(client) {
      console.log(client)

        return client.metadata.getResources()
            // .then(function(data) {
            //     for (var dataItem = 0; dataItem < data.results[0].metadata.length; dataItem++) {
            //         outputFields(data.results[0].metadata[dataItem], {fields: ['ResourceID', 'StandardName', 'VisibleName', 'ObjectVersion']});
            //     }
            // })
            // .then(function() {
            //     return client.metadata.getClass("Property");
            // }).then(function(data) {
            //   return data;
            // })
            .then(function() {
                return client.metadata.getTable("Property", "ResidentialProperty");
            }).then(function(data) {
                return data.results[0].metadata
            }).then(function (fieldsData) {
                var plucked = [];
                for (var fieldItem = 0; fieldItem < fieldsData.length; fieldItem++) {
                    plucked.push(fieldsData[fieldItem].SystemName);
                }
                return plucked;
            })
            .then(function (fields) {
                console.log("___________----------____________")
                return client.search.query("Property", "ResidentialProperty", "(DaysOnMarket=1+)", {limit: 100,offset:0})
                    .then(function (searchData) {
                      console.log(searchData)
                    res.send(searchData)
                })
    }).catch(function(err) {
          var error = err.error || err;
          console.log(" ERROR: issue encountered");
          outputFields(error);
        console.log('    ' + (error.stack||error).replace(/\n/g, '\n   '))
    })
})
})

module.exports = retsRouter;