import { Dialog, DialogContent, Grid } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';

import { AppDispatch, RootState } from '../../../redux/store';
import { IUiState, uiActions } from '../../../redux/reducers/ui';
import regionsStats from '../../../dummy/regions-stats';
import RegionInfo from './RegionInfo';
import IRegionStats from '../../../interfaces/objects/interface.region-stats';
import IFilters from '../../../interfaces/states/interface.filters';

interface IRegionPonderation {
  regionId: number;
  ponderation: number;
}

const ChileRegionsMap = dynamic(() => import('./ChileRegionsMap'), { ssr: false });

const ponderateRegions = (): IRegionPonderation[] => {
  const regionsSums = regionsStats.map(
    (region: any) => region.scorts.male + region.scorts.female + region.scorts.trans,
  );

  const max = Math.max(...regionsSums);
  const min = Math.min(...regionsSums);
  const ponderations = regionsSums.map((sum: number) => (sum - min) / (max - min));

  return ponderations
    .map((ponderation: number, index: number) => ({
      regionId: index + 1,
      ponderation,
    }))
    .sort((region1, region2) => region2.ponderation - region1.ponderation);
};

const RegionsModal = () => {
  const showRegionModal = useSelector((state: RootState): boolean => state.ui.showRegionModal);
  const filters = useSelector((state: RootState): IFilters => state.ui.filters);
  const [regionIdSelected, setRegionIdSelected] = useState<number | null>(null);
  const [regionOnHover, setRegionOnHover] = useState<IRegionStats | null>(null);
  const [regionsPonderated, setRegionsPonderated] = useState<IRegionPonderation[]>([]);
  const [regionUserSelected, setRegionUserSelected] = useState<IRegionStats | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setRegionsPonderated(ponderateRegions());
  }, []);

  useEffect(() => {
    if (filters.city) {
      const regionId = regionsStats.find((region: any) => region.name === filters.city)?.id;

      if (regionId) {
        setRegionIdSelected(regionId);
        setRegionUserSelected(regionsStats.find((region: any) => region.id === regionId) || null);
      }
    }
  }, [filters.city]);

  const handleCloseRegionsModal = () => {
    dispatch(uiActions.handleToggleRegionModal(false));
  };

  const handleClickRegion = useCallback((regionId: number) => {
    setRegionIdSelected(regionId);
    setRegionUserSelected(regionsStats.find((region: any) => region.id === regionId) || null);
  }, []);

  const handleHoverRegion = useCallback((regionId: number) => {
    setRegionOnHover(regionsStats.find((region: any) => region.id === regionId) || null);
  }, []);

  const handleLeaveRegion = useCallback(() => {
    setRegionOnHover(null);
  }, []);

  const handleApplyCity = () => {
    if (regionUserSelected) {
      dispatch(uiActions.handleToggleRegionModal(false));
      dispatch(uiActions.handleApplyFilters({ city: regionUserSelected.name }));
    }
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={`md`}
      onClose={handleCloseRegionsModal}
      open={showRegionModal}
      PaperProps={{
        style: {
          borderRadius: '20px',
          padding: 0,
          margin: 0,
        },
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <Grid container spacing={[2, 0]}>
          <Grid
            item
            xs={12}
            md={5}
            order={{ xs: 2, md: 1 }}
            sx={{ maxHeight: 1000, overflow: 'auto' }}
          >
            <ChileRegionsMap
              mouseOut={handleLeaveRegion}
              mouseOver={handleHoverRegion}
              onClick={handleClickRegion}
              regionIdSelected={regionIdSelected}
              regionsPonderated={regionsPonderated}
            />
          </Grid>
          <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
            <RegionInfo
              handleSelectRegion={handleApplyCity}
              regionOnHover={regionOnHover}
              regionUserSelected={regionUserSelected}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default RegionsModal;
