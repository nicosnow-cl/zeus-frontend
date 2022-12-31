import { Box } from '@mui/system';
import { Formik } from 'formik';
import { TextField, Button, Autocomplete, Checkbox, FormControl, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';

import { AppDispatch, RootState } from '../../../../redux/store';
import { IUiState, uiActions } from '../../../../redux/reducers/ui';
import { ladiesAppareance } from '../../../../dummy/ladies-appareance';
import { ladiesServices } from '../../../../dummy/ladies-services';

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
  const { filters } = useSelector((state: RootState): IUiState => state.ui);
  const dispatch = useDispatch<AppDispatch>();

  const getUserFilters = useCallback(() => {
    const { name, services, appareance } = filters;

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
  }, [filters]);

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
        promotion: filters.promotion,
        services: servicesStrArr,
        type: filters.type,
        video: filters.video,
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
          <Box className={`d-flex fd-column`}>
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

            <Box className={`mt-2`} sx={{ maxWidth: 200 }}>
              <Autocomplete
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                multiple
                onChange={(evt, value) => setFieldValue('services', value)}
                options={ladiesServices}
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
            </Box>

            <Box className={`mt-2`} sx={{ maxWidth: 200 }}>
              <Autocomplete
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                multiple
                onChange={(evt, value) => setFieldValue('appareance', value)}
                options={ladiesAppareance}
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
            </Box>

            <Button className={`mt-2`} color="secondary" variant="outlined" type="submit">
              Filtrar
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ResumeFilters;
