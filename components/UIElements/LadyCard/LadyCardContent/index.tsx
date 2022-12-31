import { Box } from '@mui/system';
import { Chip, Stack, Tooltip, Typography, useTheme } from '@mui/material';
import { Favorite, Verified } from '@mui/icons-material';

import abbreviateNumber from '../../../../utils/abbreviateNumber';
import EscortType from '../../../../types/type.escort';
import formatNumberToString from '../../../../utils/formatNumberToString';
import shortText from '../../../../utils/shortText';
import styles from './index.module.scss';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../../TabPanel/index';

export interface ILadyCardContent {
  age: number;
  description?: string;
  likes: number;
  name: string;
  nationality?: string;
  price?: number;
  services?: string[];
  type?: 'VIP' | 'PREMIUM' | 'GOLD';
  isHovering?: boolean;
}

const DESCRIPTION_MAX_LENGTH = 150;
const SERVICE_MAX_LENGTH = 20;
const VIP_MAX_SERVICES = 8;
const PREMIUM_MAX_SERVICES = 5;
const GOLD_MAX_SERVICES = 3;

const LadyCardContent = ({
  age,
  description,
  isHovering,
  likes,
  name,
  nationality,
  price,
  services = [],
  type = 'GOLD',
}: ILadyCardContent) => {
  const theme = useTheme();

  const getChipTypeClass = () => {
    if (type === 'VIP') return styles.typeVip;
    if (type === 'PREMIUM') return styles.typePremium;
    return styles.typeGold;
  };

  const getMaxNumberOfServices = () => {
    if (type === 'VIP') return VIP_MAX_SERVICES;
    if (type === 'PREMIUM') return PREMIUM_MAX_SERVICES;
    return GOLD_MAX_SERVICES;
  };

  const getServiceChip = (service: string) => {
    if (service.length > SERVICE_MAX_LENGTH) {
      return (
        <Tooltip title={service}>
          <Chip
            className={`${styles.typeVip} ${styles.chip}`}
            color="primary"
            label={shortText(service, SERVICE_MAX_LENGTH)}
            size="small"
          />
        </Tooltip>
      );
    }

    return (
      <Chip
        className={`${styles.typeVip} ${styles.chip}`}
        color="primary"
        label={service}
        size="small"
      />
    );
  };

  return (
    <Box className={`w-100 h-100 d-flex fd-column jc-between ${styles.ladyCardContentContainer}`}>
      <Box className={`m-2 d-flex jc-between`}>
        <Typography
          className={`${styles.text}`}
          color="white"
          component="div"
          gutterBottom
          variant="h5"
        >
          {`${name}, ${age}`}
        </Typography>

        <Box className={`d-flex fd-column row-gap-1`}>
          <Chip
            className={`${getChipTypeClass()}`}
            color="primary"
            icon={<Verified />}
            label={type}
            size="small"
          />

          <Chip
            className={`${getChipTypeClass()}`}
            color="primary"
            icon={<Favorite />}
            label={abbreviateNumber(likes)}
            size="small"
          />
        </Box>
      </Box>

      {
        {
          VIP: (
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'y' : 'y-reverse'}
              index={!isHovering ? 1 : 0}
            >
              <TabPanel key={0} dir={theme.direction}></TabPanel>

              <TabPanel key={1} dir={theme.direction}>
                <Stack className={`px-2 pb-2 ${styles.contentContainer}`} spacing={0.5}>
                  {nationality && type !== 'GOLD' && (
                    <Typography
                      className={`${styles.text} ${styles.nationalityText}`}
                      variant="body2"
                      color="white"
                    >
                      {nationality}
                    </Typography>
                  )}

                  {description && (
                    <Typography
                      className={`${styles.descriptionText}`}
                      variant="body2"
                      color="white"
                      sx={{ textAlign: 'justify' }}
                    >
                      {shortText(description, DESCRIPTION_MAX_LENGTH)}
                    </Typography>
                  )}

                  {services.length > 0 && (
                    <Box className={`d-flex fw-wrap`} sx={{ columnGap: '2px', rowGap: '2px' }}>
                      {services
                        .slice(0, getMaxNumberOfServices())
                        .map((service) => getServiceChip(service))}
                    </Box>
                  )}
                </Stack>
              </TabPanel>
            </SwipeableViews>
          ),
          PREMIUM: (
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'y' : 'y-reverse'}
              index={!isHovering ? 1 : 0}
            >
              <TabPanel key={0} dir={theme.direction}></TabPanel>

              <TabPanel key={1} dir={theme.direction}>
                <Stack className={`px-2 pb-2 ${styles.contentContainer}`} spacing={0.5}>
                  {nationality && type !== 'GOLD' && (
                    <Typography
                      className={`${styles.text} ${styles.nationalityText}`}
                      variant="body2"
                      color="white"
                    >
                      {nationality}
                    </Typography>
                  )}

                  {description && (
                    <Typography
                      className={`${styles.descriptionText}`}
                      variant="body2"
                      color="white"
                      sx={{ textAlign: 'justify' }}
                    >
                      {shortText(description, DESCRIPTION_MAX_LENGTH)}
                    </Typography>
                  )}

                  {services.length > 0 && (
                    <Box className={`d-flex fw-wrap`} sx={{ columnGap: '2px', rowGap: '2px' }}>
                      {services
                        .slice(0, getMaxNumberOfServices())
                        .map((service) => getServiceChip(service))}
                    </Box>
                  )}
                </Stack>
              </TabPanel>
            </SwipeableViews>
          ),
          GOLD: (
            <Box className={`p-2 d-flex jc-between`}>
              <Chip
                label={nationality}
                sx={{
                  backgroundColor: theme.palette.grey[300],
                  fontSize: 16,
                }}
              />

              {price && (
                <Chip
                  label={`$${formatNumberToString(price)} - 1h`}
                  sx={{
                    backgroundColor: theme.palette.grey[300],
                    color: theme.palette.success.dark,
                    fontSize: 16,
                  }}
                />
              )}
            </Box>
          ),
        }[type]
      }
    </Box>
  );
};

export default LadyCardContent;
