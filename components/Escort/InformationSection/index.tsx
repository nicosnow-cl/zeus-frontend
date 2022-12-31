import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Typography,
  useTheme,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import ISchedule from '../../../interfaces/objects/interface.schedule';

export interface IInformationSectionProps {
  schedule: ISchedule;
  services: string[];
}

const getDayName = (day: string) => {
  switch (day) {
    case 'monday':
      return 'Lunes';
    case 'tuesday':
      return 'Martes';
    case 'wednesday':
      return 'Miercoles';
    case 'thursday':
      return 'Jueves';
    case 'friday':
      return 'Viernes';
    case 'saturday':
      return 'Sabado';
    case 'sunday':
      return 'Domingo';
    default:
      return 'Lunes';
  }
};

const InformationSecion = ({ schedule, services }: IInformationSectionProps) => {
  const theme = useTheme();

  return (
    <div className={`p-5 h-100`}>
      <Accordion sx={{ backgroundColor: 'transparent !important', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography variant="h2" fontSize={28}>
            Servicios
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {services.map((service, idx) => (
              <Chip
                className={`mr-2 mb-2`}
                key={idx}
                label={service}
                sx={{ color: theme.palette.secondary.main }}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: 'transparent !important', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography variant="h2" fontSize={28}>
            Horario
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table aria-label="simple table">
            <TableBody>
              {Object.keys(schedule).map((key, idx) => (
                <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Typography variant="h3" fontSize={18} textTransform="uppercase">
                      {getDayName(key)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h3" fontSize={18}>
                      {schedule[key]}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default InformationSecion;
