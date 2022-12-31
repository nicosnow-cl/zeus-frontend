import { Dialog, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../../redux/store';
import { IUiState, uiActions } from '../../../redux/reducers/ui';
import FiltersModalForm from './FiltersModalForm';

const FiltersModal = () => {
  const { showFiltersModal } = useSelector((state: RootState): IUiState => state.ui);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseFiltersModal = () => {
    dispatch(uiActions.handleToggleFiltersModal(false));
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={`md`}
      onClose={handleCloseFiltersModal}
      open={showFiltersModal}
    >
      <DialogContent>
        <FiltersModalForm />
      </DialogContent>
    </Dialog>
  );
};

export default FiltersModal;
