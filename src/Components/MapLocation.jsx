import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../pages/About.css';

const MapLocation = () => {

  const storeLocation = {
    lat: 43.838392457329995,
    lng: 18.314265466554403
  }; 

  const handleApiLoaded = (map, maps) => {
    const storeLatLng = new maps.LatLng(storeLocation.lat, storeLocation.lng);
    const marker = new maps.Marker({ position: storeLatLng, map });
    maps.event.trigger(marker, 'click');
  };

  return (
    <div className = "map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={storeLocation}
        defaultZoom={15}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      />
    </div>
  );
};

export default MapLocation;
