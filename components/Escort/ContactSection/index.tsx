import AttachMoney from '@mui/icons-material/AttachMoney';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LocationOn from '@mui/icons-material/LocationOn';
import PhoneIphone from '@mui/icons-material/PhoneIphone';
import Twitter from '@mui/icons-material/Twitter';
import useTheme from '@mui/material/styles/useTheme';
import WhatsApp from '@mui/icons-material/WhatsApp';

import CustomBoxAction from '../../UIElements/CustomBoxAction';
import formatNumberToString from '../../../helpers/formatNumberToString';
import ILocation from '../../../interfaces/objects/interface.location';
import IRrSs from '../../../interfaces/objects/interface.rrss';

export interface IContactSectionProps {
  location: ILocation;
  phoneNumber: string;
  price: number;
  rrss: IRrSs[];
}

const CUSTOM_BOX_ACTION_WIDTH = 270;

const getRrSsBoxAction = (rrss: IRrSs, idx: number) => {
  switch (rrss.type) {
    case 'facebook':
      return (
        <CustomBoxAction
          key={idx}
          icon={<Facebook />}
          title={'Facebook'}
          minWidth={CUSTOM_BOX_ACTION_WIDTH}
        />
      );
    case 'instagram':
      return (
        <CustomBoxAction
          key={idx}
          icon={<Instagram />}
          title={'Instagram'}
          minWidth={CUSTOM_BOX_ACTION_WIDTH}
        />
      );
    case 'twitter':
      return (
        <CustomBoxAction
          key={idx}
          icon={<Twitter />}
          title={'Twitter'}
          minWidth={CUSTOM_BOX_ACTION_WIDTH}
        />
      );
    case 'whatsapp':
      return (
        <CustomBoxAction
          key={idx}
          icon={<WhatsApp />}
          title={'Whatsapp'}
          minWidth={CUSTOM_BOX_ACTION_WIDTH}
        />
      );
    default:
      return <></>;
  }
};

const ContactSection = ({ location, phoneNumber, price, rrss }: IContactSectionProps) => {
  const theme = useTheme();

  return (
    <div
      className={`p-2 d-flex jc-between fw-wrap col-gap-2 row-gap-2`}
      style={{ backgroundColor: theme.palette.grey[200] }}
    >
      <CustomBoxAction
        icon={<PhoneIphone />}
        title={phoneNumber}
        minWidth={CUSTOM_BOX_ACTION_WIDTH}
      />

      {rrss.map((rrss, idx) => getRrSsBoxAction(rrss, idx))}

      <CustomBoxAction
        icon={<AttachMoney />}
        title={formatNumberToString(price)}
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
