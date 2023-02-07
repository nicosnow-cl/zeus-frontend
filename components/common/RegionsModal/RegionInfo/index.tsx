import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Female from '@mui/icons-material/Female';
import Grid from '@mui/material/Grid';
import Male from '@mui/icons-material/Male';
import Transgender from '@mui/icons-material/Transgender';
import Typography from '@mui/material/Typography';

import IRegionStats from '../../../../interfaces/objects/interface.region-stats';
import Logo from '../../Logo';
import regionsStats from '../../../../dummy/regions-stats';

export interface IRegionsInfoProps {
  handleClickRegion?: (regionId: number) => void;
  handleSelectRegion?: () => void;
  isMobile?: boolean;
  regionOnHover?: IRegionStats | null;
  regionUserSelected?: IRegionStats | null;
}

const RegionInfo = ({
  handleClickRegion,
  handleSelectRegion,
  isMobile = false,
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
        <Typography className={`mt-2 px-5`} textAlign={'center'} fontSize={18}>
          Usa el mapa para seleccionar la Región donde deseas buscar acompañantes
        </Typography>
      </Box>

      {regionToShow && (
        <>
          {isMobile && (
            <div className={`py-3`}>
              {regionsStats.map((region, idx) => (
                <IconButton
                  key={idx}
                  sx={{ width: 30, height: 30 }}
                  onClick={() => handleClickRegion && handleClickRegion(region.id)}
                  color={region.id === regionToShow.id ? 'secondary' : 'default'}
                >
                  <Typography>{region.number}</Typography>
                </IconButton>
              ))}
            </div>
          )}

          <Card sx={{ minWidth: '270px', width: '80%' }}>
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
            sx={{ borderRadius: 0, minWidth: '270px' }}
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
