import { Chip, Tooltip, Typography } from '@mui/material';
import { Favorite, Verified } from '@mui/icons-material';

import styles from './index.module.scss';
import abbreviateNumber from '../../../../utils/abbreviateNumber';
import shortText from '../../../../utils/shortText';

export interface IVipCardContent {
  age: number;
  description: string;
  isHovering: boolean;
  likes: number;
  name: string;
  nationality: string;
  services: string[];
}

const SERVICE_MAX_LENGTH = 20;
const VIP_MAX_SERVICES = 8;

const getServiceChip = (service: string) => {
  if (service.length > SERVICE_MAX_LENGTH) {
    return (
      <Tooltip title={service}>
        <Chip
          className={`${styles.serviceChip}`}
          color="primary"
          label={shortText(service, SERVICE_MAX_LENGTH)}
          size="small"
        />
      </Tooltip>
    );
  }

  return <Chip className={`${styles.serviceChip}`} color="primary" label={service} size="small" />;
};

const VipCardContent = ({
  age,
  description,
  isHovering,
  likes,
  name,
  nationality,
  services = [],
}: IVipCardContent) => {
  return (
    <div className={`w-100 h-100 d-flex fd-column jc-between ${styles.contentContainer}`}>
      <div className={`m-2 d-flex jc-between`}>
        <Typography
          className={`${styles.text}`}
          color="white"
          component="div"
          gutterBottom
          variant="h5"
        >
          {`${name}, ${age}`}
        </Typography>

        <div className={`d-flex fd-column row-gap-1`}>
          <Chip
            className={`${styles.headerChip}`}
            color="primary"
            icon={<Verified />}
            label={`VIP`}
            size="small"
          />

          <Chip
            className={`${styles.headerChip}`}
            color="primary"
            icon={<Favorite />}
            label={abbreviateNumber(likes)}
            size="small"
          />
        </div>
      </div>

      <div
        className={`${styles.infoContainer} ${
          !isHovering ? styles.infoContainerHide : styles.infoContainerShow
        }`}
      >
        <div className={`p-1`}>
          <Typography
            className={`${styles.text} ${styles.nationalityText}`}
            variant="body2"
            color="white"
          >
            {nationality}
          </Typography>

          <Typography
            className={`mt-2 ${styles.descriptionText}`}
            variant="body2"
            color="white"
            sx={{ textAlign: 'justify' }}
          >
            {description}
          </Typography>
        </div>

        {services.length > 0 && (
          <div className={`mt-2 d-flex fw-wrap gap-1`}>
            {services.slice(0, VIP_MAX_SERVICES).map((service) => getServiceChip(service))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VipCardContent;
