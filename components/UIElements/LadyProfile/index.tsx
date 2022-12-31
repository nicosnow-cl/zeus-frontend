import {
  Button,
  Chip,
  Dialog,
  Divider,
  Grid,
  Slide,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { forwardRef } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { PhoneIphone, WhatsApp, Instagram, AttachMoney, LocationOn } from '@mui/icons-material';

import { AppDispatch, RootState } from '../../../redux/store';
import { IUiState, uiActions } from '../../../redux/reducers/ui/index';
import DialogNavbar from '../DialogNavbar';
import profileBanner from '../../../assets/imgs/profile-banner.jpg';
import SimpleAvatar from '../SimpleAvatar';
import CustomBoxAction from '../CustomBoxAction';
import LadyProfileMedia from '../LadyProfileMedia';

import img1 from '../../../assets/imgs/profile-pics/demo-1.jpg';
import img2 from '../../../assets/imgs/profile-pics/demo-2.jpg';
import img3 from '../../../assets/imgs/profile-pics/demo-3.jpg';
import img4 from '../../../assets/imgs/profile-pics/demo-4.jpg';
import img5 from '../../../assets/imgs/profile-pics/demo-5.jpg';
import img6 from '../../../assets/imgs/profile-pics/demo-6.jpg';
import img7 from '../../../assets/imgs/profile-pics/demo-7.jpg';
import img8 from '../../../assets/imgs/profile-pics/demo-8.jpg';
import img9 from '../../../assets/imgs/profile-pics/demo-9.jpg';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const srcImg =
  'https://cdn-ea-images.escort-advisor.com/public/images/uploadedimages/escort/53447/2022_07_28_15_34_15_dVtG8.jpg';
const avatarSize = 300;
const profileInfo = ['BRASILEÑA', 'TRIGUEÑA', '168 CM', '66 KG', '97 - 60 - 109 CM'];
const othersSkils = [
  'Contextura Delgada',
  'Cabello Negro',
  'Ojos Castaños',
  'Busto Mediano',
  'Cola Grande',
  'Depilación Full',
  'Depto Propio',
  'Domicilios',
  'Hoteles',
  'No Fuma',
  'Viajes',
  'Español',
];
const services = [
  'Amiga para un Trío',
  'Bailes Eróticos',
  'Besos',
  'Despedidas',
  'Disfraces',
  'Eventos y Cenas',
  'Juguetes',
  'Masaje NO Profesional',
  'Masturbación Rusa',
  'Oral Preservativo',
  'Parejas con Lésbico',
  'Parejas Hetero',
];

const imagesSrc = [img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img) => img.src);

const LadyProfile = () => {
  const { showLadyProfile } = useSelector((state: RootState): IUiState => state.ui);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  const handleCloseLadyProfile = () => {
    dispatch(uiActions.handleToggleLadyProfile(false));
  };

  const handleOpenLadyImage = () => {
    dispatch(uiActions.handleToggleLadyImage(true));
  };

  return (
    <Dialog fullScreen TransitionComponent={Transition} open={showLadyProfile}>
      <DialogNavbar onClose={handleCloseLadyProfile} />

      <Box sx={{ margin: '0 auto', width: '90%' }}>
        <Box
          className={`mt-5 mb-5`}
          sx={{
            backgroundColor: theme.palette.grey[100],
            borderRadius: 5,
          }}
        >
          <Box
            className={`w-100`}
            sx={{
              backgroundImage: `url(${profileBanner.src})`,
              backgroundSize: 'cover',
              height: 350,
              position: 'relative',
              borderRadius: '20px 20px 0 0',
            }}
          >
            <Box sx={{ position: 'absolute', left: 50, bottom: -(avatarSize / 4) }}>
              <SimpleAvatar src={srcImg} size={avatarSize} />
            </Box>
          </Box>

          <Box sx={{ paddingLeft: '350px', backgroundColor: theme.palette.grey[200] }}>
            <Grid className={`pl-5`} container spacing={[2, 2]}>
              <Grid className={`d-flex ai-center col-gap-1`} item xs={12}>
                <Typography variant="h2">
                  Diana<span style={{ fontSize: 30 }}>, 23 años</span>
                </Typography>
                <Divider orientation="vertical" sx={{ maxHeight: '65%' }} />
                <Typography variant="h5">Escort VIP</Typography>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={[2, 2]}>
            <Grid item xs={12} sm={7}>
              <Typography
                className={`p-5`}
                variant="body1"
                fontSize={21}
                fontWeight={300}
                textAlign="justify"
              >
                &quot;Hola, gracias por visitar mi anuncio! Mi nombre es Diana, y soy modelo de
                fotografía. Amo la cortesía y los buenos modales que combinados con mi picardía y
                buena conversación son la mezcla perfecta. Compartiremos un momento lleno de mucho
                erotismo, te recibiré en lencería sexy en un ambiente perfecto para un agradable y
                fantasioso momento&quot;
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Stack className={`pt-5`} direction="row" spacing={[0, 2]}>
                {profileInfo.map((info, idx) => (
                  <Typography
                    className={`d-flex jc-center ai-center`}
                    key={idx}
                    fontSize={13}
                    color="secondary"
                    textTransform="uppercase"
                  >
                    {info}
                  </Typography>
                ))}
              </Stack>

              <Box className={`mt-3`}>
                {othersSkils.map((skill, idx) => (
                  <Chip className={`mr-2 mb-2`} key={idx} label={skill} />
                ))}
              </Box>
            </Grid>
          </Grid>

          <Box
            className={`p-2 d-flex jc-between col-gap-2`}
            sx={{ backgroundColor: theme.palette.grey[200] }}
          >
            <CustomBoxAction icon={<PhoneIphone />} title={'+569 2092 6522'} />
            <CustomBoxAction icon={<WhatsApp />} title={'Whatsapp'} />
            <CustomBoxAction icon={<Instagram />} title={'Instagram'} />
            <CustomBoxAction icon={<AttachMoney />} title={'200.000'} subtitle={`la hora`} />
            <CustomBoxAction
              icon={<LocationOn />}
              title={'Las Condes'}
              subtitle={`tiene estacionamiento`}
            />
          </Box>

          <Grid container>
            <Grid
              item
              md={3}
              xs={12}
              sx={{ borderRadius: '0 0 0 20px', backgroundColor: theme.palette.grey[200] }}
            >
              <Box className={`h-100 p-5`}>
                <Typography variant="h2" fontSize={28}>
                  Servicios
                </Typography>

                <Box className={`mt-5`}>
                  {services.map((service, idx) => (
                    <Chip
                      className={`mr-2 mb-2`}
                      key={idx}
                      label={service}
                      sx={{ color: theme.palette.secondary.main }}
                    />
                  ))}
                </Box>

                <Divider className={`m-5`} />

                <Typography variant="h2" fontSize={28}>
                  Horario
                </Typography>

                <Box className={`mt-5`}>
                  <Grid container spacing={[2, 2]}>
                    <Grid className={`d-flex jc-between`} item xs={12}>
                      <Typography variant="h3" fontSize={18} textTransform="uppercase">
                        Lunes
                      </Typography>

                      <Typography variant="h3" fontSize={18}>
                        No disponible
                      </Typography>
                    </Grid>
                    <Grid className={`d-flex jc-between`} item xs={12}>
                      <Typography variant="h3" fontSize={18} textTransform="uppercase">
                        Martes
                      </Typography>

                      <Typography variant="h3" fontSize={18}>
                        No disponible
                      </Typography>
                    </Grid>
                    <Grid className={`d-flex jc-between`} item xs={12}>
                      <Typography variant="h3" fontSize={18} textTransform="uppercase">
                        Miercoles
                      </Typography>

                      <Typography variant="h3" fontSize={18}>
                        5pm - 12am
                      </Typography>
                    </Grid>
                    <Grid className={`d-flex jc-between`} item xs={12}>
                      <Typography variant="h3" fontSize={18} textTransform="uppercase">
                        Jueves
                      </Typography>

                      <Typography variant="h3" fontSize={18}>
                        5pm - 12am
                      </Typography>
                    </Grid>
                    <Grid className={`d-flex jc-between`} item xs={12}>
                      <Typography variant="h3" fontSize={18} textTransform="uppercase">
                        Viernes
                      </Typography>

                      <Typography variant="h3" fontSize={18}>
                        Full Time
                      </Typography>
                    </Grid>
                    <Grid className={`d-flex jc-between`} item xs={12}>
                      <Typography variant="h3" fontSize={18} textTransform="uppercase">
                        Sabado
                      </Typography>

                      <Typography variant="h3" fontSize={18}>
                        Full Time
                      </Typography>
                    </Grid>
                    <Grid className={`d-flex jc-between`} item xs={12}>
                      <Typography variant="h3" fontSize={18} textTransform="uppercase">
                        Domingo
                      </Typography>

                      <Typography variant="h3" fontSize={18}>
                        5pm - 10pm
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box
                className={`p-5`}
                sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}
              >
                {imagesSrc.map((src, idx) => (
                  <LadyProfileMedia
                    key={idx}
                    onClick={handleOpenLadyImage}
                    src={src}
                    type={`image`}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
};

export default LadyProfile;
