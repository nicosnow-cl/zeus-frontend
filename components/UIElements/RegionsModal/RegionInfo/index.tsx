import {
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { Female, FemaleOutlined, Male, Transgender } from '@mui/icons-material';
import { useState, useEffect } from 'react';

import IRegionStats from '../../../../interfaces/objects/interface.region-stats';
import Logo from '../../Logo';

export interface IRegionsInfoProps {
  handleSelectRegion?: () => void;
  regionOnHover?: IRegionStats | null;
  regionUserSelected?: IRegionStats | null;
}

const RegionInfo = ({
  handleSelectRegion,
  regionOnHover,
  regionUserSelected,
}: IRegionsInfoProps) => {
  const [regionToShow, setRegionToShow] = useState<IRegionStats | null>(null);
  const theme = useTheme();

  useEffect((): void => {
    if (regionOnHover) setRegionToShow(regionOnHover);
    else if (regionUserSelected) setRegionToShow(regionUserSelected);
    else setRegionToShow(null);
  }, [regionOnHover, regionUserSelected]);

  return (
    <Box
      className={`h-100 p-5 d-flex fd-column jc-center ai-center`}
      sx={{ backgroundColor: theme.palette.grey[200] }}
    >
      <Box className={`mb-5 d-flex fd-column`}>
        <Logo height={45} backgroundColor={theme.palette.grey[50]} navbar={false} />
        <Typography className={`mt-2 px-5`} variant="body1" textAlign={'center'} fontSize={18}>
          Usa el mapa para seleccionar la Región donde deseas buscar escorts
        </Typography>
      </Box>

      {regionToShow && (
        <>
          <Card sx={{ minWidth: '400px' }}>
            <CardContent className={`p-5`}>
              <Typography variant="h5">Región</Typography>

              <Typography className={`d-flex jc-between`} variant="h4" color="secondary">
                {regionToShow.name.split('').map((letter, idx) => (
                  <span key={idx}>{letter}</span>
                ))}
              </Typography>

              <Divider className={`mt-2 mb-2`} />

              <Grid container spacing={[2, 2]}>
                <Grid item xs={4}>
                  <Chip
                    avatar={
                      <Female
                        color="primary"
                        sx={{ color: `${theme.palette.primary.dark} !important` }}
                      />
                    }
                    className={`w-100`}
                    label={regionToShow.scorts.female}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Chip
                    avatar={
                      <Male color="info" sx={{ color: `${theme.palette.info.dark} !important` }} />
                    }
                    className={`w-100`}
                    label={regionToShow.scorts.male}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Chip
                    avatar={
                      <Transgender
                        color="info"
                        sx={{ color: `${theme.palette.warning.dark} !important` }}
                      />
                    }
                    className={`w-100`}
                    label={regionToShow.scorts.trans}
                  />
                </Grid>
              </Grid>

              <Chip
                className={`w-100 mt-2`}
                label={
                  <Typography variant="h6">
                    <Box className={`d-flex ai-center`}>
                      <span>Cantidad total</span>
                      <Chip
                        className={`ml-2`}
                        label={`${
                          regionToShow.scorts.female +
                          regionToShow.scorts.male +
                          regionToShow.scorts.trans
                        }`}
                        size="small"
                        color="secondary"
                      />
                    </Box>
                  </Typography>
                }
                size="medium"
                sx={{ backgroundColor: theme.palette.grey[300] }}
              />
            </CardContent>
          </Card>

          <Button
            className={`mt-5`}
            onClick={handleSelectRegion}
            size="large"
            sx={{ borderRadius: 0, minWidth: '300px' }}
            variant="contained"
          >
            Aplicar Región
          </Button>
        </>
      )}
    </Box>
  );
};

export default RegionInfo;
