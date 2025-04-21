import React, { useEffect, useRef } from "react";

const MapModal = ({ onClose, onSelect }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const marker = useRef(null);

    useEffect(() => {
        const loadMap = () => {
            mapInstance.current = new window.google.maps.Map(mapRef.current, {
                center: { lat: 26.8467, lng: 80.9462 }, // Default: Lucknow
                zoom: 13,
            });

            mapInstance.current.addListener("click", (e) => {
                const latLng = e.latLng;
                if (marker.current) marker.current.setMap(null);
                marker.current = new window.google.maps.Marker({
                    position: latLng,
                    map: mapInstance.current,
                });

                const geocoder = new window.google.maps.Geocoder();
                geocoder.geocode({ location: latLng }, (results, status) => {
                    if (status === "OK" && results[0]) {
                        onSelect(results[0].formatted_address);
                    }
                });
            });
        };

        if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
            script.async = true;
            script.onload = loadMap;
            document.head.appendChild(script);
        } else {
            loadMap();
        }
    }, [onSelect]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-3xl h-[70vh] rounded-xl overflow-hidden relative">
                <div ref={mapRef} className="w-full h-full" />
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default MapModal;
