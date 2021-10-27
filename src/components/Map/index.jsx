import { useEffect } from 'react';
import axios from 'axios';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer, ArcLayer } from '@deck.gl/layers';

const Map = () => {
    useEffect(() => {
        axios
            .get('https://state-boundries.herokuapp.com/api/borders/', {})
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    const COUNTRIES = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line
    const AIR_PORTS = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

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
            alert(`${info.object.properties.name} (${info.object.properties.abbrev})`);
        }
    };

    const layers = [
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any

        new GeoJsonLayer({
            id: 'base-map',
            data: COUNTRIES,
            // Styles
            stroked: true,
            filled: true,
            lineWidthMinPixels: 2,
            opacity: 0.4,
            getFillColor: [200, 200, 200],
            getLineColor: [60, 60, 60],
        }),
        new GeoJsonLayer({
            id: 'airports',
            data: AIR_PORTS,
            // Styles
            filled: true,
            pointRadiusMinPixels: 2,
            pointRadiusScale: 2000,
            getPointRadius: (f) => 11 - f.properties.scalerank,
            getFillColor: [200, 0, 80, 180],
            // Interactive props
            pickable: true,
            autoHighlight: true,
            onClick,
        }),
        new ArcLayer({
            id: 'arcs',
            data: AIR_PORTS,
            dataTransform: (d) => d.features.filter((f) => f.properties.scalerank < 4),
            // Styles
            getSourcePosition: (f) => [-0.4531566, 51.4709959], // London
            getTargetPosition: (f) => f.geometry.coordinates,
            getSourceColor: [0, 128, 200],
            getTargetColor: [200, 0, 80],
            getWidth: 1,
        }),
    ];

    return <DeckGL controller={true} initialViewState={INITIAL_VIEW_STATE} layers={layers}></DeckGL>;
};

export default Map;
