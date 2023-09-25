import { createAsyncThunk } from '@reduxjs/toolkit';

import obtainAppearancesGet from '../../../services/home/obtainAppearancesGet';
import obtainServicesGet from '../../../services/home/obtainServicesGet';
import OthersActions from '../../actions/others';

export const getAppearances = createAsyncThunk(OthersActions.GET_APPEARANCES, async () => {
  return await obtainAppearancesGet();
});

export const getServices = createAsyncThunk(OthersActions.GET_SERVICES, async () => {
  return await obtainServicesGet();
});
