import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import isEqual from 'lodash/isEqual';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Sort from '@mui/icons-material/Sort';

import { AppDispatch, RootState } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import ISort from '../../../interfaces/states/interface.sort';

const VALID_FIELDS = ['date', 'age', 'price', 'likes', 'name'];
const VALID_ORDERS = ['asc', 'desc'];

const CardsSorter = () => {
  const [anchorBtn, setAnchorBtn] = useState<null | HTMLElement>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const actualSort = useSelector((state: RootState) => state.ui.sort);
  const dispatch = useDispatch<AppDispatch>();
  const open = Boolean(anchorBtn);

  const hanleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorBtn(event.currentTarget);
  };

  const handleCloseMenu = (values: ISort) => {
    setAnchorBtn(null);
    handleApplySort(values);
  };

  const validateForm = (values: ISort) => {
    const errors: any = {};

    if (!values.field || !VALID_FIELDS.includes(values.field)) {
      errors.field = 'Field is required and must be a valid field';
    }

    if (!values.order || !VALID_ORDERS.includes(values.order)) {
      errors.order = 'Order is required and must be a valid order';
    }

    return errors;
  };

  const handleApplySort = (values: ISort) => {
    if (isEqual(values, actualSort)) return;

    dispatch(uiActions.handleApplySort(values));
    setIsDisabled(true);
  };

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setIsDisabled(false);
      clearTimeout(intervalId);
    }, 1000);

    return () => clearTimeout(intervalId);
  }, [isDisabled]);

  return (
    <>
      <IconButton disabled={isDisabled} onClick={hanleOpenMenu} size="large">
        <Sort fontSize="large" />
      </IconButton>

      <Formik initialValues={actualSort} onSubmit={handleApplySort} validate={validateForm}>
        {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
          return (
            <Menu
              anchorEl={anchorBtn}
              id="account-menu"
              open={open}
              onClose={() => handleCloseMenu(values)}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 20,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <form
                className={`px-3 py-1 w-100 d-flex ai-center col-gap-2`}
                onSubmit={handleSubmit}
              >
                <FormGroup>
                  <Select
                    name="field"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    size="small"
                    style={{ width: 85 }}
                    value={values.field}
                    variant="standard"
                  >
                    <MenuItem value={VALID_FIELDS[0]}>Fecha</MenuItem>
                    <MenuItem value={VALID_FIELDS[1]}>Edad</MenuItem>
                    <MenuItem value={VALID_FIELDS[2]}>Precio</MenuItem>
                    <MenuItem value={VALID_FIELDS[3]}>Likes</MenuItem>
                    <MenuItem value={VALID_FIELDS[4]}>Nombre</MenuItem>
                  </Select>
                </FormGroup>

                <Button
                  size="small"
                  onClick={() =>
                    setFieldValue(
                      'order',
                      values.order === VALID_ORDERS[0] ? VALID_ORDERS[1] : VALID_ORDERS[0],
                      true,
                    )
                  }
                  style={{ width: 40, minWidth: 40 }}
                >
                  {values.order.toUpperCase()}
                </Button>
              </form>
            </Menu>
          );
        }}
      </Formik>
    </>
  );
};

export default CardsSorter;
