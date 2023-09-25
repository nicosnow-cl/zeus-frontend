import { useContext } from 'react';
import EmailRounded from '@mui/icons-material/EmailRounded';
import Facebook from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Grid';
import Instagram from '@mui/icons-material/Instagram';
import Link from 'next/link';
import Twitter from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../pages/_app';
import Breadcrumb from '../Breadcrumb';
import Constants from '../../../helpers/constants';
import ILink from '../../../interfaces/objects/interface.link';
import NavLinks from './NavLinks';

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
    title: 'Terminos y condiciones',
    href: '/terminos-y-condiciones',
  },
];

const Footer = () => {
  const { theme, router } = useContext(AppContext);

  const getCrumb = (): any => {
    const pathname = router?.pathname.split('/')[1];

    return { label: pathname?.toUpperCase() };
  };

  return (
    <div
      className={`w-100`}
      style={{ backgroundColor: theme?.palette.grey[800], color: 'white', fontSize: 10 }}
    >
      <div className={`py-3`} style={{ width: '75vw', maxWidth: '1200px', margin: '0 auto' }}>
        {router?.pathname !== '/' && <Breadcrumb crumbs={[getCrumb()]} />}

        <Grid className={`mt-2 pb-3`} container>
          <Grid className={`d-flex fd-column ai-start row-gap-3`} item xs={4} sm={1}>
            <Facebook fontSize="large" />
            <Instagram fontSize="large" />
            <Twitter fontSize="large" />
            <EmailRounded fontSize="large" />
          </Grid>

          <Grid
            className={`d-flex fd-column mb-3`}
            item
            style={{ maxWidth: 200, margin: '0 auto' }}
            xs={8}
            sm={7}
          >
            <NavLinks links={LINKS} style={{ color: 'white', fontSize: '1.1em' }} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography align="justify" fontSize="1.1em">
              Portal sobre acompañantes y masajistas para mayores de 18 años. Todas las anunciantes
              han sido entrevistadas personalmente. No poseemos vinculación laboral con las
              anunciantes y nos limitamos exclusivamente a brindar un servicio publicitario. Somos
              un medio publicitario legalmente constituido. Nos reservamos el derecho a publicación.
              Queda prohibida la copia o reproducción, total o parcial.
            </Typography>
          </Grid>
        </Grid>

        <div className={`pt-2 d-flex jc-between`} style={{ borderTop: '1px solid grey' }}>
          <Typography align="justify" fontSize="1.1em">
            Copyright © {new Date().getFullYear()} {AppName.replace('.cl', '')}. Todos los derechos
            reservados.
          </Typography>

          <div className={`d-flex`}>
            <Link className={`px-2`} href={`/politica-privacidad`}>
              <Typography fontSize="1.1em">Política de privacidad</Typography>
            </Link>
            <Link
              className={`px-2`}
              href={`/aviso-legal`}
              style={{ borderLeft: '1px solid grey', borderRight: '1px solid grey' }}
            >
              <Typography fontSize="1.1em">Aviso legal</Typography>
            </Link>
            <Link className={`px-2`} href={`/mapa-del-sitio`}>
              <Typography fontSize="1.1em">Mapa del sitio</Typography>
            </Link>
          </div>

          <Link href={`/`}>
            <Typography fontSize="1.1em">Chile</Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
