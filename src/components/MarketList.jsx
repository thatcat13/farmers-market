import React from "react";
import Market from "./Market";

const masterMarketList = [
  {
      day: "Sunday",
      location: "Lents International",
      hours: "9:00am - 2:00pm",
      booth: "4A"
   },
   {
      day: "Monday",
      location: "Pioneer Courthouse Square",
      hours: "10:00am - 2:00pm",
      booth: "7C"
   },
   {
      day: "Tuesday",
      location: "Hillsboro",
      hours: "5:00pm - 8:30pm",
      booth: "1F"
   },
   {
      day: "Wednesday",
      location: "Shemanski Park",
      hours: "10:00am - 2:00pm",
      booth: "3E"
   },
   {
      day: "Thursday",
      location: "Northwest Portland",
      hours: "2:00pm - 6:00pm",
      booth: "6D"
   },
   {
      day: "Saturday",
      location: "Beaverton",
      hours: "10:00am - 1:30pm",
      booth: "9G"
   }
]

function MarketList(props){
  const marketListStyle = {
    backgroundColor: '#ffead1',
    textAlign: 'center',
    width: '50vw',
    padding: 9,
    borderRadius: 10,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  }
  const marketPageStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20
  }
  return (
    <div style={marketPageStyle}>
      <div style={marketListStyle}>
        <h1>Market Info</h1>
        {masterMarketList.map((market, index) =>
          <Market day={market.day}
            location={market.location}
            hours={market.hours}
            booth={market.booth}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default MarketList;
