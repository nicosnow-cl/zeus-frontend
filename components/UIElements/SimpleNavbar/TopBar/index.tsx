import { MonetizationOn } from '@mui/icons-material';
import { Button } from '@mui/material';

import { ITopBarProps } from '../../Navbar/TopBar';

const TopBar = ({ backgroundColor }: ITopBarProps) => {
  return (
    <div style={{ backgroundColor }}>
      <div className={`wrapper d-flex jc-end`} style={{ height: '35px' }}>
        <div className={`d-flex ai-center col-gap-2`}>
          <Button
            endIcon={<MonetizationOn />}
            size={`small`}
            sx={{ height: 35, borderRadius: 0 }}
            variant="contained"
          >
            Anunciarme
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
