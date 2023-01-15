import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Chip from '@mui/material/Chip';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

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
  return (
    <div className={`p-5`}>
      <Accordion sx={{ backgroundColor: 'unset', backgroundImage: 'unset', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography variant="h3" fontWeight={300}>
            Servicios
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {services.length > 0 ? (
            services.map((service, idx) => (
              <Chip className={`mr-2 mb-2`} key={idx} label={service} />
            ))
          ) : (
            <Typography variant="subtitle1">Sin servicios informados</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: 'unset', backgroundImage: 'unset', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography variant="h3" fontWeight={300}>
            Horario
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table aria-label="simple table">
            <TableBody>
              {Object.keys(schedule).map((key, idx) => (
                <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6" textTransform="uppercase">
                      {getDayName(key)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">{(schedule as any)[key]}</Typography>
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
