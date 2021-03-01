var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key3c3ekykKo7uJhd'
});
var base = Airtable.base('appePiECcTIBWPH0R');

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3c3ekykKo7uJhd'}).base('appePiECcTIBWPH0R');

base('code4food').select({
    // Selecting the first 3 records in Site Content:
    maxRecords: 3,
    view: "Site Content"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('id'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
