import { useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../../pages/_app';
import { AppDispatch, RootState } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import DraggableButton from '../../../UIElements/DraggableButton';
import IFilters from '../../../../interfaces/states/interface.filters';
import styles from './index.module.scss';

const NormalButtonFilters = () => {
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState): IFilters => state.ui.filters);
  const containerRef = useRef<HTMLDivElement>(null);

  const backgroundColor = theme?.palette.grey[100];
  const btnSize = 55;
  const color = theme?.palette.grey[500];
  const holderBackgroundColor = theme?.palette.grey[200];

  const handleOpenFiltersModal = () => {
    dispatch(uiActions.handleToggleFiltersModal(true));
  };

  return (
    <Box
      ref={containerRef}
      className={`d-flex jc-between ai-center pointer`}
      onClick={handleOpenFiltersModal}
      sx={{
        backgroundColor,
        borderRadius: '30px',
        boxShadow: 2,
        color,
        margin: '0 auto',
        maxWidth: '800px',
      }}
    >
      <Grid container>
        <Grid className={`p-2 d-flex jc-center ai-center`} item xs={4}>
          <Typography
            className={`${styles.text}`}
            sx={(theme) => ({
              color: filters.name.length && theme.palette.getContrastText(backgroundColor || ''),
            })}
          >
            {filters.name.length ? filters.name : 'Nombre'}
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
            sx={(theme) => ({
              color:
                filters.appareance.length && theme.palette.getContrastText(backgroundColor || ''),
            })}
          >
            {filters.appareance.length ? filters.appareance.join(', ') : 'Apariencia'}
          </Typography>
        </Grid>

        <Grid className={`p-2 d-flex jc-center ai-center`} item xs={4}>
          <Typography
            className={`${styles.text}`}
            sx={(theme) => ({
              color:
                filters.services.length && theme.palette.getContrastText(backgroundColor || ''),
            })}
          >
            {filters.services.length ? filters.services.join(', ') : 'Servicios'}
          </Typography>
        </Grid>
      </Grid>

      <div
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
        }}
        style={{
          backgroundColor: holderBackgroundColor,
          borderRadius: '50%',
          height: btnSize,
          minWidth: btnSize,
        }}
      >
        <DraggableButton
          containerRef={containerRef}
          btnSize={btnSize}
          onClick={handleOpenFiltersModal}
        />
      </div>
    </Box>
  );
};

export default NormalButtonFilters;
