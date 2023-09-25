import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Clear from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';

import { AppDispatch } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';

import styles from './index.module.scss';

const NoCardsFound = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleFiltersModal = () => {
    dispatch(uiActions.handleToggleFiltersModal(true));
  };

  return (
    <div className={`d-flex jc-center ai-center`} style={{ minHeight: 600 }}>
      <Card>
        <CardContent sx={{ position: 'relative' }}>
          <Clear className={`${styles.icon}`} />

          <div className={`p-2 d-flex fd-column jc-center ai-center row-gap-3 ${styles.content}`}>
            <Typography>Lo sentimos, no hemos encontrado ninguna acompañante</Typography>
            <Typography>Prueba cambiando tus filtros de búsqueda...</Typography>

            <div>
              <Button size="large" variant="outlined" onClick={handleToggleFiltersModal}>
                Filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoCardsFound;
