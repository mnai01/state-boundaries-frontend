import { useState, useEffect } from "react";
import axios from "axios";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer, ArcLayer } from "@deck.gl/layers";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  useEffect(() => {
    axios
      .get("https://state-boundries.herokuapp.com/api/borders/", {})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const COUNTRIES =
    "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson"; //eslint-disable-line
  const AIR_PORTS =
    "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";
  // state borders to replace air ports? different arc style?

  const INITIAL_VIEW_STATE = {
    latitude: 51.47,
    longitude: 0.45,
    zoom: 4,
    bearing: 0,
    pitch: 30,
  };
  const onClick = (info) => {
    if (info.object) {
      // eslint-disable-next-line
      alert(
        `${info.object.properties.name} (${info.object.properties.abbrev})`
      );
    }
  };

  const layers = [
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    // new GeoJsonLayer({
    //   id: "base-map",
    //   data: COUNTRIES,
    //   // Styles
    //   stroked: true,
    //   filled: true,
    //   lineWidthMinPixels: 2,
    //   opacity: 0.4,
    //   getFillColor: [200, 200, 200],
    //   getLineColor: [60, 60, 60],
    // }),
  ];
  console.log(process.env.REACT_APP_TOKEN);

  return (
    <DeckGL
      controller={true}
      initialViewState={INITIAL_VIEW_STATE}
      layers={layers}
      style={{ padding: 20 }}
    >
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
      />
    </DeckGL>
  );
};

export default Map;
