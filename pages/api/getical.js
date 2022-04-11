const ical = require('node-ical');



export default function handler(req, res) {
    
    const data = ical.fromURL('https://calendar.google.com/calendar/ical/g7njqfb0ro6s1m2rvf0023e8to%40group.calendar.google.com/public/basic.ics', {}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err });
        } else {

            res.status(200).json(data);
        }
    });



  }

