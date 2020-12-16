import React, {useEffect, useState} from 'react'
import {GeolocationControl, Map, Placemark, SearchControl, YMaps} from "react-yandex-maps";
import './MapBlock.css'




const MapBlock = props=> {
    const ymaps = React.useRef(null);
    const placemarkRef = React.useRef(null);
    const mapRef = React.useRef(null);
    const [address, setAddress] = React.useState(props.value);

    useEffect(()=>{
        props.setFieldValue(props.name,address)
    },[address])
    const createPlacemark = (coords) => {

        return new ymaps.current.Placemark(
            coords,
            {
                iconCaption: "Секунду..."
            },
            {
                preset: "islands#violetDotIconWithCaption",
                draggable: false
            }
        );
    };

    const getAddress = (coords) => {
        placemarkRef.current.properties.set("iconCaption", "Секунду...");
        ymaps.current.geocode(coords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            setAddress(firstGeoObject.getAddressLine());
            placemarkRef.current.properties.set({
                iconCaption: firstGeoObject.getAddressLine(),
                balloonContent: firstGeoObject.getAddressLine()
            });
        });
    };

    const onMapClick = (e) => {
        const coords = e.get("coords");

        if (placemarkRef.current) {
            placemarkRef.current.geometry.setCoordinates(coords);
        } else {
            placemarkRef.current = createPlacemark(coords);
            mapRef.current.geoObjects.add(placemarkRef.current);
        }
        getAddress(coords);
    };

    return (
        <div className={'mapField'}>
            <input type="text" name={props.name} value={address}/>
            <YMaps enterprise query={{apikey: "1a9e7380-7d7d-47a9-bdb3-eb90e115a1a3"}}>
                <div className={'map-container'}>
                <Map
                    modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                    instanceRef={mapRef}
                    onLoad={(ympasInstance) => (ymaps.current = ympasInstance)}
                    onClick={onMapClick}
                    defaultState={{
                        center: [42.8746, 74.5698],
                        zoom: 16
                    }}
                    style={{width:'100%',height:'100%',position:'absolute'}}
                />
                </div>
            </YMaps>
        </div>
    );

}



export default MapBlock










