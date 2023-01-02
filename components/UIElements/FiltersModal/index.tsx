import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { AppDispatch, RootState } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import FiltersModalForm from './FiltersModalForm';

const FiltersModal = () => {
  const showFiltersModal = useSelector((state: RootState): boolean => state.ui.showFiltersModal);
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
