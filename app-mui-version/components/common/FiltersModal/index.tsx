import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { AppDispatch, RootState } from '../../../redux/store';
import { getAppearances, getServices } from '../../../redux/thunks/others/index';
import { uiActions } from '../../../redux/reducers/ui';
import FiltersModalForm from './FiltersModalForm';

let FIRST_RENDER_DONE = false;

const FiltersModal = () => {
  const showFiltersModal = useSelector((state: RootState): boolean => state.ui.showFiltersModal);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseFiltersModal = () => {
    dispatch(uiActions.handleToggleFiltersModal(false));
  };

  useEffect(() => {
    if (FIRST_RENDER_DONE) return;

    dispatch(getAppearances());
    dispatch(getServices());
    FIRST_RENDER_DONE = true;
  }, [dispatch]);

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
