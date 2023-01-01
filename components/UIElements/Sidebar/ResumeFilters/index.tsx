import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import { AppDispatch, RootState } from '../../../../redux/store';
import { ladiesAppareance } from '../../../../dummy/ladies-appareance';
import { ladiesServices } from '../../../../dummy/ladies-services';
import { uiActions } from '../../../../redux/reducers/ui';
import IFilters from '../../../../interfaces/states/interface.filters';

const initialFormValues: {
  appareance: { id: number; name: string }[];
  name: string;
  services: { id: number; name: string }[];
} = {
  appareance: [],
  name: '',
  services: [],
};

const ResumeFilters = () => {
  const [formValues, setFormValues] = useState<typeof initialFormValues>(initialFormValues);
  const userFilters = useSelector((state: RootState): IFilters => state.ui.filters);
  const dispatch = useDispatch<AppDispatch>();

  const getUserFilters = useCallback(() => {
    const { name, services, appareance } = userFilters;

    const servicesArr = ladiesServices.filter((ladyServices) =>
      services.includes(ladyServices.name),
    );
    const appareanceArr = ladiesAppareance.filter((ladyAppareance) =>
      appareance.includes(ladyAppareance.name),
    );

    return {
      appareance: appareanceArr,
      name,
      services: servicesArr,
    };
  }, [userFilters]);

  useEffect((): void => setFormValues(getUserFilters()), [getUserFilters]);

  const validateForm = () => {};

  const handleApplyFilters = (values: any) => {
    const { name, services, appareance } = values;

    const servicesStrArr = services.map((service: { id: number; name: string }) => service.name);
    const appareanceStrArr = appareance.map(
      (appareance: { id: number; name: string }) => appareance.name,
    );

    dispatch(
      uiActions.handleApplyFilters({
        appareance: appareanceStrArr,
        name,
        services: servicesStrArr,
      }),
    );
    dispatch(uiActions.handleToggleSidebar(false));
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
          <div className={`d-flex fd-column row-gap-3`}>
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

            <Autocomplete
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              multiple
              onChange={(evt, value) => setFieldValue('services', value)}
              options={ladiesServices}
              sx={{ maxWidth: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Servicios" variant="standard" />
              )}
              renderTags={(tagValues, getTagProps) => {
                return tagValues.map((option, idx) => (
                  // eslint-disable-next-line react/jsx-key
                  <Chip {...getTagProps({ index: idx })} label={option.name} size="small" />
                ));
              }}
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  <Checkbox checked={values.services.includes(option)} />
                  {option.name}
                </Box>
              )}
              value={values.services}
            />

            <Autocomplete
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              multiple
              onChange={(evt, value) => setFieldValue('appareance', value)}
              options={ladiesAppareance}
              sx={{ maxWidth: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Apariencia" variant="standard" />
              )}
              renderTags={(tagValues, getTagProps) => {
                return tagValues.map((option, idx) => (
                  // eslint-disable-next-line react/jsx-key
                  <Chip {...getTagProps({ index: idx })} label={option.name} size="small" />
                ));
              }}
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  <Checkbox checked={values.appareance.includes(option)} />
                  {option.name}
                </Box>
              )}
              value={values.appareance}
            />

            <Button className={`mt-2`} color="secondary" variant="outlined" type="submit">
              Filtrar
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ResumeFilters;
