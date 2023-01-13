import Chip from '@mui/material/Chip';
import Favorite from '@mui/icons-material/Favorite';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Verified from '@mui/icons-material/Verified';

import abbreviateNumber from '../../../../helpers/abbreviateNumber';
import EscortType from '../../../../types/type.escort';
import shortText from '../../../../helpers/shortText';
import styles from './index.module.scss';

export interface IVipPremiumCardContent {
  age: number;
  description: string;
  isHovering: boolean;
  likes: number;
  name: string;
  nationality: string;
  services: string[];
  timeLapsedIcon?: JSX.Element;
  type: EscortType;
}

const SERVICE_MAX_LENGTH = 20;
const VIP_MAX_SERVICES = 8;
const PREMIUM_MAX_SERVICES = 5;

const getServiceChip = (service: string, type: EscortType) => {
  if (service.length > SERVICE_MAX_LENGTH) {
    return (
      <Tooltip title={service}>
        <Chip
          className={`${type === 'VIP' ? styles.serviceChipVip : styles.serviceChipPremium}`}
          color="primary"
          label={shortText(service, SERVICE_MAX_LENGTH)}
          size="small"
        />
      </Tooltip>
    );
  }

  return (
    <Chip
      className={`${type === 'VIP' ? styles.serviceChipVip : styles.serviceChipPremium}`}
      color="primary"
      label={service}
      size="small"
    />
  );
};

const VipPremiumCardContent = ({
  age,
  description,
  isHovering,
  likes,
  name,
  nationality,
  services = [],
  timeLapsedIcon,
  type,
}: IVipPremiumCardContent) => {
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
            className={`${type === 'VIP' ? styles.headerChipVip : styles.headerChipPremium}`}
            color="primary"
            icon={<Verified />}
            label={type}
            size="small"
          />

          <Chip
            className={`${type === 'VIP' ? styles.headerChipVip : styles.headerChipPremium}`}
            color="primary"
            icon={<Favorite />}
            label={abbreviateNumber(likes)}
            size="small"
          />
        </div>
      </div>

      <div>
        {timeLapsedIcon && timeLapsedIcon}

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
              {services
                .slice(0, type === 'VIP' ? VIP_MAX_SERVICES : PREMIUM_MAX_SERVICES)
                .map((service) => getServiceChip(service, type))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VipPremiumCardContent;
