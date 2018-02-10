 var blanqx = jQuery.noConflict();
 blanqx('[data-toggle="tooltip"]').tooltip();
 //cache DOM
 var quoteArea = blanqx('#customerQuote');
 var clientNameArea = blanqx('#clientName');
 var todayCopyRightArea = blanqx('myToday');
 var customerFeedback = [
     `Great food! Menu is awesome ,their  foods are not only great but also in the right price .I highly recommend them :)`,
     `Great Drinks! Menu is awesome , their drinks are super-awesome and I like their affordable price .I  highly recommend them :)`,
     `Great customercare! Menu is customer-friendly , the waiters & waitresses are warm-hearted .I highly recommend them :)`
 ];
 var clients = [`Joe Peter`, 'Sonia Winans', 'Linda Percy']

 function quoteGenerator(allQuotes) {
     var randCount = allQuotes.length - 1 || Math.floor(Math.random() * 2);
     var result = Math.floor(Math.random() * randCount)
     return allQuotes[result];
 }

 function clientNameGenerator(allClients) {
     var randCount = allClients.length - 1 || Math.floor(Math.random() * 2);
     var result = Math.floor(Math.random() * randCount)
     return allClients[result];
 }
 setInterval(() => {
     console.log('changing ..');
     quoteArea.text(quoteGenerator(customerFeedback));
     clientNameArea.text(clientNameGenerator(clients));
     console.log('changed!');
 }, 1000)
 var date = new Date()
 todayCopyRightArea.text(date.getFullYear());