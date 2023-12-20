// src/components/Mapcomponent.jsx
import React, { useEffect } from "react";
import "bingmaps";

const Mapcomponent = ({ location }) => {
  const apikey = import.meta.env.VITE_MAP_API_KEY;
  const [long, lat] = location;
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.bing.com/api/maps/mapcontrol?key=${apikey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const map = new Microsoft.Maps.Map(document.getElementById("bing-map"), {
        center: new Microsoft.Maps.Location(long, lat),
        zoom: 14,
        mapTypeId: Microsoft.Maps.MapTypeId.ordnanceSurvey,
      });

      const locationPin = new Microsoft.Maps.Pushpin(map.getCenter(), {});

      map.entities.push(locationPin);
    };
  }, [apikey, long, lat]);

  return (
    <>
      <div
        id="bing-map"
        className="rounded-lg object-cover overflow-hidden"
        style={{ height: "100%" }}
      ></div>
    </>
  );
};

export default Mapcomponent;
