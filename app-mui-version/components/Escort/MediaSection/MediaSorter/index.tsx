import { Dispatch, SetStateAction } from 'react';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export interface IMediaSorterProps {
  order: 'images_first' | 'shuffle' | 'videos_first';
  setOrder: Dispatch<SetStateAction<'images_first' | 'shuffle' | 'videos_first'>>;
}

const VALID_ORDERS = ['images_first', 'shuffle', 'videos_first'];

const MediaSorter = ({ order, setOrder }: IMediaSorterProps) => {
  const handleApplyOrder = (evt: any) => {
    const { value } = evt.target;

    if (VALID_ORDERS.includes(value))
      setOrder(value as 'images_first' | 'shuffle' | 'videos_first');
  };

  return (
    <FormGroup className={`mt-3 mr-3`} style={{ marginLeft: 'auto', width: 200 }}>
      <Select value={order} size="small" onChange={handleApplyOrder}>
        <MenuItem value="shuffle">Aleatorio</MenuItem>
        <MenuItem value="images_first">Imagenes primero</MenuItem>
        <MenuItem value="videos_first">Videos Primero</MenuItem>
      </Select>
    </FormGroup>
  );
};

export default MediaSorter;
