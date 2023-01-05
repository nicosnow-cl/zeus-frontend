import 'leaflet/dist/leaflet.css';
import { GeoJsonObject } from 'geojson';
import { MapContainer, TileLayer } from 'react-leaflet';
import { memo, useState } from 'react';
import { useTheme } from '@mui/material';
import dynamic from 'next/dynamic';

import chileRegions from '../../../../assets/geo-json/chile-regions';
import getBlendStepsBetweenTwoColors from '../../../../helpers/getBlendStepsBetweenTwoColors';
import getHexToRgb from '../../../../helpers/getHexToRgb';

export interface IChileRegionsMapProps {
  mouseOut?: () => void;
  mouseOver?: (regionId: number) => void;
  onClick?: (regionId: number) => void;
  regionIdSelected?: number | null;
  regionsPonderated?: { regionId: number; ponderation: number }[];
}

const ChileRegionsMap = ({
  mouseOut,
  mouseOver,
  onClick,
  regionIdSelected,
  regionsPonderated,
}: IChileRegionsMapProps) => {
  const theme = useTheme();
  const defaultColorRgb = `rgb(${getHexToRgb(theme.palette.grey[400]).join(',')})`;
  const secondaryColorRgb = `rgb(${getHexToRgb(theme.palette.secondary.light).join(',')})`;
  const GeoJSON = dynamic(() => import('react-leaflet').then((rLeaflet) => rLeaflet.GeoJSON), {
    ssr: false,
  });

  const [regionsColors] = useState<string[]>(
    getBlendStepsBetweenTwoColors(secondaryColorRgb, defaultColorRgb, 16).map(
      (rgbColor) => `rgb(${rgbColor.join(',')})`,
    ),
  );

  const onEachFeature = (feature: any, layer: any) => {
    const { regionNumber } = feature;
    const defaultColor = regionsPonderated
      ? regionsColors[regionsPonderated.findIndex((region) => region.regionId === regionNumber)]
      : theme.palette.grey[400];

    if (regionIdSelected === regionNumber) {
      layer.setStyle({ color: theme.palette.primary.main, fillOpacity: 1 });
    } else layer.setStyle({ color: defaultColor, weight: 2 });

    layer.on('mouseover', function () {
      if (regionIdSelected !== regionNumber) layer.setStyle({ color: theme.palette.primary.main });
      mouseOver && mouseOver(regionNumber);
    });

    layer.on('mouseout', function () {
      if (regionIdSelected !== regionNumber) layer.setStyle({ color: defaultColor });
      mouseOut && mouseOut();
    });

    layer.on('click', function () {
      if (onClick) onClick(regionNumber);
    });
  };

  return (
    <MapContainer
      attributionControl={false}
      center={[-36.739055, -71.0574941]}
      closePopupOnClick={false}
      doubleClickZoom={false}
      dragging={false}
      scrollWheelZoom={false}
      style={{ height: 1000, width: '100%' }}
      touchZoom={false}
      trackResize={false}
      zoom={4.6}
      zoomControl={false}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={chileRegions as GeoJsonObject} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default memo(ChileRegionsMap);
