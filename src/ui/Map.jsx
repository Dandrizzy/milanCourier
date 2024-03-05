import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useUrlPosition } from "../Hooks/useUrlPosition";
import { useNavigate, useParams } from "react-router-dom";
import { useUpsert } from "../Hooks/Upsert/useUpsert";
import Spinner from "./Spinner";
import { useGetSpecificApi } from "../Hooks/GetSpecific/useGetSpecificApi";
import { useGetSpecific } from "../Hooks/GetSpecific/useGetSpecific";


function Map() {

  const { isPending, upsert } = useUpsert();
  const { ticketId } = useParams();
  const { getSpecific } = useGetSpecificApi({ key: 'position', ticketId });

  const { data = [], isFetching } = useGetSpecific({ key: ['position', ticketId], fn: getSpecific });

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [mapLat, mapLng] = useUrlPosition();
  console.log(data);

  const cities = [
    {
      id: 1,
      position: {
        lat: mapLat || 40,
        lng: mapLng || 0,
      }
    }
  ];

  useEffect(
    function () {
      if (mapLat && mapLng) {

        setMapPosition([mapLat, mapLng]);
        upsert({ ticketId, lat: mapLat, lng: mapLng });
      }
    },
    [mapLat, mapLng, ticketId, upsert]
  );

  if (isPending || isFetching) return <Spinner />;

  return (
    <div className={styles.mapContainer + ' relative'}>

      <MapContainer
        center={mapPosition}
        zoom={4}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup className=" bg-blue-200">
              <span>Current location</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  const { ticketId } = useParams();

  useMapEvents({
    dblclick: (e) => navigate(`/ticket/adminMap/${ticketId}?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
