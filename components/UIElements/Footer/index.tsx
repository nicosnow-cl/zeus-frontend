import { useContext } from 'react';
import EmailRounded from '@mui/icons-material/EmailRounded';
import Facebook from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../pages/_app';
import Constants from '../../../helpers/constants';
import LogoSvg from '../../../public/images/logo.svg';
import NavLinks from './NavLinks';
import ILink from '../../../interfaces/objects/interface.link';

const { AppName } = Constants;

const LINKS: ILink[] = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Anunciate',
    href: '/anunciate',
  },
  {
    title: 'Contacto',
    href: '/contacto',
  },
  {
    title: 'Preguntas frecuentes',
    href: '/preguntas-frecuentes',
  },
  {
    title: 'Mapa del sitio',
    href: '/mapa-del-sitio',
  },
  {
    title: 'Terminos y condiciones',
    href: '/terminos-y-condiciones',
  },
];

const Footer = () => {
  const { theme } = useContext(AppContext);

  const backgroundColor = theme?.palette.grey[700];
  const downBarBackgroundColor = theme?.palette.grey[900];
  const color = theme?.palette.primary.light;

  return (
    <div className={`w-100`} style={{ backgroundColor, color: 'white' }}>
      <div className={`p-1 d-flex jc-center`}>
        <IconButton size="large">
          <Facebook fontSize="large" style={{ color: 'white' }} />
        </IconButton>

        <IconButton size="large">
          <Instagram fontSize="large" style={{ color: 'white' }} />
        </IconButton>

        <IconButton size="large">
          <Twitter fontSize="large" style={{ color: 'white' }} />
        </IconButton>

        <IconButton size="large">
          <EmailRounded fontSize="large" style={{ color: 'white' }} />
        </IconButton>
      </div>

      <Grid className={`pb-2 footer-content`} container spacing={[2, 2]}>
        <Grid item xs={4} sm={2}>
          <div className={`d-flex fd-column row-gap-3 jc-center ai-center`}>
            <LogoSvg style={{ fill: 'white', maxHeight: '10rem', opacity: '0.3' }} />
            <Typography variant="h5" style={{ color }} fontWeight={600}>
              {AppName}
            </Typography>
          </div>
        </Grid>

        <Grid className={`pb-2`} item xs={8} sm={6}>
          <div className={`d-flex fd-column`} style={{ maxWidth: 200, margin: '0 auto' }}>
            <NavLinks links={LINKS} />
          </div>
        </Grid>

        <Grid className={`pb-2`} item xs={12} sm={4}>
          <Typography align="justify">
            Portal sobre escorts y masajistas para mayores de 18 años. Todas las anunciantes han
            sido entrevistadas personalmente. No poseemos vinculación laboral con las anunciantes y
            nos limitamos exclusivamente a brindar un servicio publicitario. Somos un medio
            publicitario legalmente constituido. Nos reservamos el derecho a publicación. Queda
            prohibida la copia o reproducción, total o parcial.
          </Typography>
        </Grid>
      </Grid>

      <Typography
        className={`w-100 p-1 d-flex jc-center ai-center`}
        variant="h6"
        style={{ backgroundColor: downBarBackgroundColor }}
      >
        {new Date().getFullYear()} - All Rights Reserved - Copyright: {AppName}
      </Typography>
    </div>
  );
};

export default Footer;
