import { RefObject, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';
import Search from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../pages/_app';
import { AppDispatch, RootState } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import IFilters from '../../../interfaces/states/interface.filters';
import styles from './index.module.scss';
import DraggableButton from '../../UIElements/DraggableButton';
import { IconButton } from '@mui/material';
import SmallButtonFilters from './SmallButtonFilters';

export interface IPageFiltersProps {
  className?: string;
  containerRef?: RefObject<HTMLDivElement>;
}

const PageFilters = ({ className, containerRef }: IPageFiltersProps) => {
  const { device, theme } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState): IFilters => state.ui.filters);

  const backgroundColor = theme?.palette.grey[100];

  const handleOpenFiltersModal = () => {
    dispatch(uiActions.handleToggleFiltersModal(true));
  };

  if (device?.type === 'mobile') return <SmallButtonFilters />;

  return (
    <Box
      className={`d-flex jc-between ai-center pointer ${styles.normalFilters} ${className}`}
      // onClick={handleOpenFiltersModal}
      sx={{
        backgroundColor,
        borderRadius: 5,
        boxShadow: 1,
        margin: '0 auto',
        maxWidth: '800px',
        height: '65px',
      }}
    >
      <Grid container>
        <Grid className={`p-2 d-flex jc-center ai-center`} item xs={4}>
          <Typography
            className={`${styles.text}`}
            sx={(theme) => ({ color: theme.palette.getContrastText(backgroundColor || '') })}
          >
            {filters.name !== '' ? filters.name : 'Nombre'}
          </Typography>
        </Grid>

        <Grid
          className={`p-2 d-flex jc-center ai-center`}
          item
          xs={4}
          style={{
            borderLeft: `1px solid ${theme?.palette.grey['A400']}`,
            borderRight: `1px solid ${theme?.palette.grey['A400']}`,
          }}
        >
          <Typography
            className={`${styles.text}`}
            sx={(theme) => ({ color: theme.palette.getContrastText(backgroundColor || '') })}
          >
            {filters.services.length ? filters.services.join(', ') : 'Servicios'}
          </Typography>
        </Grid>

        <Grid className={`p-2 d-flex jc-center ai-center`} item xs={4}>
          <Typography
            className={`${styles.text}`}
            sx={(theme) => ({ color: theme.palette.getContrastText(backgroundColor || '') })}
          >
            {filters.appareance.length ? filters.appareance.join(', ') : 'Apariencia'}
          </Typography>
        </Grid>
      </Grid>

      <DraggableButton />

      {/* <div
        className={`h-100 pl-2 pr-2 d-flex jc-center ai-center`}
        style={{
          backgroundColor: theme?.palette.primary.main,
          borderRadius: '0px 20px 20px 0px',
          color: 'white',
          width: 60,
        }}
      >
        <Search />
      </div> */}
    </Box>
  );
};

export default PageFilters;
