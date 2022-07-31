const ical = require('node-ical');



export default function handler(req, res) {
    
    const data = ical.fromURL('https://calendar.google.com/calendar/ical/solocien.calendar%40gmail.com/public/basic.ics', {}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err });
        } else {

            res.status(200).json(data);
        }
    });



  }

