import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';

import { AppDispatch, RootState } from '../../../../redux/store';
import { getCards } from '../../../../redux/thunks/home/index';
import { ladiesAppareance } from '../../../../dummy/ladies-appareance';
import { ladiesServices } from '../../../../dummy/ladies-services';
import { uiActions } from '../../../../redux/reducers/ui';
import IFilters from '../../../../interfaces/states/interface.filters';
import IFiltersForm from '../../../../interfaces/forms/interface.filters-form';
import IPartialFilters from '../../../../interfaces/objects/interface.partial-filters';
import regionsStats from '../../../../dummy/regions-stats';

const initialFormValues: IFiltersForm = {
  appareance: [],
  city: 'Santiago',
  name: '',
  promotion: false,
  services: [],
  type: '',
  video: false,
};

const FiltersModalForm = () => {
  const [formValues, setFormValues] = useState<IFiltersForm>(initialFormValues);
  const filters = useSelector((state: RootState): IFilters => state.ui.filters);
  const dispatch = useDispatch<AppDispatch>();

  const getUserFilters = useCallback(() => {
    const { name, type, services, appareance, promotion, video, city } = filters;

    const servicesArr = ladiesServices.filter((ladyServices) =>
      services.includes(ladyServices.name),
    );
    const appareanceArr = ladiesAppareance.filter((ladyAppareance) =>
      appareance.includes(ladyAppareance.name),
    );

    return {
      appareance: appareanceArr,
      city,
      name,
      promotion,
      services: servicesArr,
      type,
      video,
    };
  }, [filters]);

  useEffect(() => setFormValues(getUserFilters()), [getUserFilters]);

  const validateForm = () => {};

  const clearForm = (resetForm: any) => {
    resetForm({ values: initialFormValues });
  };

  const handleApplyFilters = (values: IFiltersForm) => {
    const { name, type, services, appareance, promotion, video, city } = values;

    const servicesStrArr = services.map((service: { id: number; name: string }) => service.name);
    const appareanceStrArr = appareance.map(
      (appareance: { id: number; name: string }) => appareance.name,
    );

    const partiaFilters: IPartialFilters = {
      appareance: appareanceStrArr,
      city,
      name,
      promotion,
      services: servicesStrArr,
      type,
      video,
    };

    dispatch(uiActions.handleApplyFilters({ ...partiaFilters }));
    dispatch(uiActions.handleToggleFiltersModal(false));
    dispatch(getCards({ ...partiaFilters }));
  };

  return (
    <Formik
      enableReinitialize
      initialValues={formValues}
      onSubmit={handleApplyFilters}
      validate={validateForm}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        setFieldValue,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={[2, 2]}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  label={`Nombre`}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={`Nombre`}
                  size="medium"
                  value={values.name}
                  variant="standard"
                />
              </FormControl>
            </Grid>

            <Grid item xs={5} md={3}>
              <FormControl fullWidth>
                <InputLabel id="type-selet-label">Tipo</InputLabel>
                <Select
                  id="select-type"
                  label={`Tipo`}
                  labelId="type-selet-label"
                  name="type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  size="medium"
                  value={values.type}
                  variant="standard"
                >
                  <MenuItem value="">
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value="VIP">VIP</MenuItem>
                  <MenuItem value="PREMIUM">Premium</MenuItem>
                  <MenuItem value="GOLD">Gold</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={7} md={3}>
              <FormControl fullWidth>
                <InputLabel id="select-region-label">Región</InputLabel>
                <Select
                  id="select-region"
                  label={'Región'}
                  labelId="select-region-label"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  variant="standard"
                  name="city"
                >
                  {regionsStats.map((region, idx) => (
                    <MenuItem key={idx} value={region.name}>
                      {region.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid className={`mt-3`} item xs={12}>
              <FormControl fullWidth>
                <Autocomplete
                  getOptionLabel={(option) => option.name}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  multiple
                  onChange={(evt, value) => setFieldValue('services', value)}
                  options={ladiesServices}
                  renderInput={(params) => (
                    <TextField {...params} label="Servicios" variant="standard" />
                  )}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      <Checkbox checked={values.services.includes(option)} />
                      {option.name}
                    </Box>
                  )}
                  value={values.services}
                />
              </FormControl>
            </Grid>

            <Grid className={`mt-3`} item xs={12}>
              <FormControl fullWidth>
                <Autocomplete
                  getOptionLabel={(option) => option.name}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  multiple
                  onChange={(evt, value) => setFieldValue('appareance', value)}
                  options={ladiesAppareance}
                  renderInput={(params) => (
                    <TextField {...params} label="Apariencia" variant="standard" />
                  )}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      <Checkbox checked={values.appareance.includes(option)} />
                      {option.name}
                    </Box>
                  )}
                  value={values.appareance}
                />
              </FormControl>
            </Grid>

            <Grid className={`mt-3`} item xs={12} md={6}>
              <FormGroup
                className={`p-3 d-flex jc-center ai-center`}
                aria-label="position"
                row
                sx={(theme) => ({ backgroundColor: theme.palette.grey[300], borderRadius: 5 })}
              >
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.video}
                      onChange={(evt, checked) => setFieldValue('video', checked, true)}
                    />
                  }
                  label="Con video"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.promotion}
                      onChange={(evt, checked) => setFieldValue('promotion', checked, true)}
                    />
                  }
                  label="En promoción"
                />
              </FormGroup>
            </Grid>

            <Grid className={`mt-5 d-flex jc-between`} item xs={12}>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={() => clearForm(resetForm)}
              >
                Limpiar
              </Button>
              <Button type="submit" variant="contained" size="large">
                Aplicar
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default FiltersModalForm;
