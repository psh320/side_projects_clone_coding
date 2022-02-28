import React, {useEffect, useRef, useState} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {
    const [map_height, set_map_height] = useState(0);
    const mapStyles = {
        width: props.width,
        height: map_height,
    };
    const ref = useRef(null);
    useEffect(()=> {
        set_map_height(ref.current.offsetHeight);
    });
    return (
        <div className="googlemap" ref={ref}>
            <Map
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 0, lng: 0}}
            containerStyle={{ position: "relative", display: "block"}}
            />
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(GoogleMap)

  
