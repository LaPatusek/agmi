import GoogleMapReact from 'google-map-react';
import React from 'react';
import styles from './Map.module.css';

declare var process: {
  env: {
    REACT_APP_MAPS_API: string;
  };
};

const Map: React.FC = () => {
  const location = {
    center: {
      lat: 50.06119077930387,
      lng: 22.0378655022747,
    },
    zoom: 17,
  };

  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: { lat: location.center.lat, lng: location.center.lng },
      map,
      title: 'test'
    });
    return marker;
  };

  return (
    <div className={styles.map} id='mapa'>
      <div className={styles['google-map']}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_MAPS_API,
            language: 'pl',
          }}
          defaultCenter={location.center}
          center={location.center}
          defaultZoom={location.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        />
      </div>
    </div>
  );
};

export default Map;
