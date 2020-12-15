import React, { Component } from 'react';
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       <div style={{ height: '50vh', width: '100%', marginTop: '40px' }}>
//         <GoogleMapReact
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;

// -----------------------------------------------------------------------------------------------

// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const MyMapComponent = withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </GoogleMap>
// )
 
// export default MyMapComponent;

import map from '../images/Map.PNG';

const Map = () => {
  return (
    <div className="box_GoogleMap">
      <img src={ '/dist/' + map }></img>
    </div>
  )
}

export default Map;