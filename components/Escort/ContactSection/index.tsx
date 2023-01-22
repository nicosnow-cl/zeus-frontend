import AttachMoney from '@mui/icons-material/AttachMoney';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LocationOn from '@mui/icons-material/LocationOn';
import PhoneIphone from '@mui/icons-material/PhoneIphone';
import Twitter from '@mui/icons-material/Twitter';
import WhatsApp from '@mui/icons-material/WhatsApp';

import { AppContext } from '../../../pages/_app';
import { useContext } from 'react';
import CustomBoxAction from '../../UIElements/CustomBoxAction';
import formatNumberToString from '../../../helpers/formatNumberToString';
import ILocation from '../../../interfaces/objects/interface.location';
import IPrice from '../../../interfaces/objects/interface.price';
import IRrSs from '../../../interfaces/objects/interface.rrss';
import Typography from '@mui/material/Typography';

export interface IContactSectionProps {
  hasPromo: boolean;
  location: ILocation;
  phoneNumber: string;
  price: IPrice;
  rrss: IRrSs[];
}

const CUSTOM_BOX_ACTION_WIDTH = 190;

const getRrSsBoxAction = (rrss: IRrSs, idx: number) => {
  switch (rrss.type) {
    case 'facebook':
      return (
        <CustomBoxAction
          key={idx}
          icon={<Facebook />}
          minWidth={CUSTOM_BOX_ACTION_WIDTH}
          onClick={() => window.open(rrss.url, '_blank')}
          title={'Facebook'}
        />
      );
    case 'instagram':
      return (
        <CustomBoxAction
          key={idx}
          icon={<Instagram />}
          minWidth={CUSTOM_BOX_ACTION_WIDTH}
          onClick={() => window.open(rrss.url, '_blank')}
          title={'Instagram'}
        />
      );
    case 'twitter':
      return (
        <CustomBoxAction
          key={idx}
          icon={<Twitter />}
          minWidth={CUSTOM_BOX_ACTION_WIDTH}
          onClick={() => window.open(rrss.url, '_blank')}
          title={'Twitter'}
        />
      );
    case 'whatsapp':
      return (
        <CustomBoxAction
          key={idx}
          icon={<WhatsApp />}
          minWidth={CUSTOM_BOX_ACTION_WIDTH}
          onClick={() => window.open(rrss.url, '_blank')}
          title={'Whatsapp'}
        />
      );
    default:
      return <></>;
  }
};

const ContactSection = ({ hasPromo, location, phoneNumber, price, rrss }: IContactSectionProps) => {
  const { theme } = useContext(AppContext);

  return (
    <div
      className={`p-2 d-flex jc-between fw-wrap col-gap-2 row-gap-2`}
      style={{ backgroundColor: theme?.palette.grey[200] }}
    >
      <CustomBoxAction
        icon={<PhoneIphone />}
        minWidth={CUSTOM_BOX_ACTION_WIDTH}
        onClick={() => navigator.clipboard.writeText(phoneNumber)}
        title={phoneNumber}
      />

      {rrss.map((rrss, idx) => getRrSsBoxAction(rrss, idx))}

      <CustomBoxAction
        icon={<AttachMoney />}
        title={
          hasPromo ? (
            <div className={`d-flex ai-center col-gap-2`}>
              {formatNumberToString(price.promo)}
              <Typography
                color="grey"
                style={{ textDecorationLine: 'line-through', fontSize: 11, lineHeight: 1 }}
              >
                ${formatNumberToString(price.normal)}
              </Typography>
            </div>
          ) : (
            formatNumberToString(price.normal)
          )
        }
        subtitle={`la hora`}
        minWidth={CUSTOM_BOX_ACTION_WIDTH}
      />

      <CustomBoxAction
        icon={<LocationOn />}
        title={location.name}
        subtitle={`tiene estacionamiento`}
        minWidth={CUSTOM_BOX_ACTION_WIDTH}
      />
    </div>
  );
};

export default ContactSection;
