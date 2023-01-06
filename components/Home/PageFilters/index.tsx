import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';
import Search from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';

import { AppDispatch, RootState } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import IFilters from '../../../interfaces/states/interface.filters';
import styles from './index.module.scss';

export interface IPageFiltersProps {
  className?: string;
}

const PageFilters = ({ className }: IPageFiltersProps) => {
  const filters = useSelector((state: RootState): IFilters => state.ui.filters);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  const handleOpenFiltersModal = () => {
    dispatch(uiActions.handleToggleFiltersModal(true));
  };

  return (
    <>
      <Box
        className={`w-100 pointer ${styles.smallFilters} ${className}`}
        onClick={handleOpenFiltersModal}
        sx={{
          backgroundColor: theme.palette.grey[100],
          borderRadius: 5,
          boxShadow: 1,
        }}
      >
        <div className={`pl-3 d-flex jc-center ai-center col-gap-2 ${styles.gridItem}`}>
          <Typography color="disabled" style={{ fontSize: 'inherit' }}>
            Nombre
          </Typography>
          <CheckCircleOutline
            color={filters.name !== '' ? 'success' : 'disabled'}
            style={{ fontSize: 'inherit' }}
          />
        </div>

        <div className={`pl-3 d-flex jc-center ai-center col-gap-2 ${styles.gridItem}`}>
          <Typography color="disabled" style={{ fontSize: 'inherit' }}>
            Apariencia
          </Typography>
          <CheckCircleOutline
            color={filters.appareance.length ? 'success' : 'disabled'}
            style={{ fontSize: 'inherit' }}
          />
        </div>

        <div className={`pl-3 d-flex jc-center ai-center col-gap-2 ${styles.gridItem}`}>
          <Typography color="disabled" style={{ fontSize: 'inherit' }}>
            Servicios
          </Typography>
          <CheckCircleOutline
            color={filters.services.length ? 'success' : 'disabled'}
            style={{ fontSize: 'inherit' }}
          />
        </div>

        <div
          className={`pl-2 pr-2 d-flex jc-center ai-center ${styles.btn}`}
          style={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          }}
        >
          <Search />
        </div>
      </Box>

      <Box
        className={`d-flex jc-between ai-center pointer ${styles.normalFilters} ${className}`}
        onClick={handleOpenFiltersModal}
        sx={{
          backgroundColor: theme.palette.grey[100],
          borderRadius: 5,
          boxShadow: 1,
          margin: '0 auto',
          maxWidth: '800px',
          height: '65px',
        }}
      >
        <Grid container>
          <Grid className={`p-2 d-flex jc-center ai-center`} item xs={4}>
            <Typography className={`${styles.text}`} variant="body1">
              {filters.name !== '' ? filters.name : 'Nombre'}
            </Typography>
          </Grid>

          <Grid
            className={`p-2 d-flex jc-center ai-center`}
            item
            xs={4}
            style={{
              borderLeft: `1px solid ${theme.palette.grey['A400']}`,
              borderRight: `1px solid ${theme.palette.grey['A400']}`,
            }}
          >
            <Typography className={`${styles.text}`} variant="body1">
              {filters.services.length ? filters.services.join(', ') : 'Servicios'}
            </Typography>
          </Grid>

          <Grid className={`p-2 d-flex jc-center ai-center`} item xs={4}>
            <Typography className={`${styles.text}`} variant="body1">
              {filters.appareance.length ? filters.appareance.join(', ') : 'Apariencia'}
            </Typography>
          </Grid>
        </Grid>

        <div
          className={`h-100 pl-2 pr-2 d-flex jc-center ai-center`}
          style={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: '0px 20px 20px 0px',
            color: 'white',
            width: 60,
          }}
        >
          <Search />
        </div>
      </Box>
    </>
  );
};

export default PageFilters;
