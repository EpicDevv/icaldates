import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ICalendarLink from "react-icalendar-link";


export default function Home() {
  const [data,setData] = useState([])
  console.log(data)
  const event = {
    title: "My Title",
    description: "My Description",
    startTime: "2022-04-12T10:30:00+10:00",
    endTime: "2022-04-15T12:00:00+10:00",
    location: "10 Carlotta St, Artarmon NSW 2064, Australia",
    attendees: [
      "Hello World <hello@world.com>",
      "Hey <hey@test.com>",
    ]
  }
useEffect(()=> {
  const getDates = async() => {
    const response = await fetch("/api/getical");
    const data = await response.json();
    // const arrOfObj1 = Object.values(data);
    const withNestedKeys = Object.entries(data).map(entry => {
      return {[entry[0]]: entry[1]};
    });
    setData(withNestedKeys);
  }
  getDates()
},[])
 
  return (
    <div>
       <ICalendarLink event={event}>
        Add to Calendar
      </ICalendarLink>
     
    </div>
  );
}
