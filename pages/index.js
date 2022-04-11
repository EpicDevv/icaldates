import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
//   const event = {
//     title: "My Event Title",
//     description: "My event description",
//     location: "Birmingham",
//     startDate: new Date(),
//     endDate: new Date(),
//   };

//   console.log(event);

//   const saveCalInvite = () => {
//     // Create the .ics URL
//     let url = [
//       "BEGIN:VCALENDAR",
//       "VERSION:2.0",
//       "BEGIN:VEVENT",
//       "DTSTART:" + formatDate(event.startDate),
//       "DTEND:" + formatDate(event.endDate),
//       "SUMMARY:" + event.title,
//       "DESCRIPTION:" + event.description,
//       "LOCATION:" + event.location,
//       "BEGIN:VALARM",
//       "TRIGGER:-PT15M",
//       "REPEAT:1",
//       "DURATION:PT15M",
//       "ACTION:DISPLAY",
//       "DESCRIPTION:Reminder",
//       "END:VALARM",
//       "END:VEVENT",
//       "END:VCALENDAR",
//     ].join("\n");

//     let blob = new Blob([url], { type: "text/calendar;charset=utf-8" });

//     if (/msie\s|trident\/|edge\//i.test(window.navigator.userAgent)) {
//       // Open/Save link in IE and Edge
//       window.navigator(blob, "download.ics");
//     } else {
//       // Open/Save link in Modern Browsers
//       window.open(encodeURI("data:text/calendar;charset=utf8," + url));
//     }
//   };

//   const formatDate = (dateString) => {
//     let dateTime = new Date(dateString);
//     return [
//         dateTime.getUTCFullYear(),
//         pad(dateTime.getUTCMonth() + 1),
//         pad(dateTime.getUTCDate()),
//         "T",
//         pad(dateTime.getUTCHours()),
//         pad(dateTime.getUTCMinutes()) + "00Z"
//     ].join("");
// }

// const pad = (num) => {
//     // Ensure date values are double digits
//     return num < 10 ? "0" + num : num;
// }

  return (
    <div>
      {/* <section>
        <a className="cursor-pointer" onClick={saveCalInvite}>Add to Calendar</a>
      </section> */}
    </div>
  );
}
