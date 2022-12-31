import { Chip, Grid, Typography } from '@mui/material';

interface IDescriptionSectionProps {
  appareance: string[];
  description: string;
  nacionality: string;
}

const DescriptionSection = ({ appareance, description, nacionality }: IDescriptionSectionProps) => {
  return (
    <Grid container spacing={[2, 2]}>
      <Grid item xs={12} sm={7}>
        <Typography
          className={`p-5`}
          variant="body1"
          fontSize={18}
          fontWeight={300}
          textAlign="justify"
        >
          &quot;{description}&quot;
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5}>
        <div className={`pt-5 px-2 d-flex jc-between fw-wrap col-gap-2`}>
          <Typography fontSize={16} color="secondary" textTransform="uppercase">
            {nacionality}
          </Typography>
          <Typography fontSize={16} color="secondary" textTransform="uppercase">
            TRIGUEÑA
          </Typography>
          <Typography fontSize={16} color="secondary" textTransform="uppercase">
            168 CM
          </Typography>
          <Typography fontSize={16} color="secondary" textTransform="uppercase">
            66 KG
          </Typography>
          <Typography fontSize={16} color="secondary" textTransform="uppercase">
            97 - 60 - 109 CM
          </Typography>
        </div>

        {appareance.length && (
          <div className={`mt-3`}>
            {appareance.map((skill, idx) => (
              <Chip className={`mr-2 mb-2`} key={idx} label={skill} />
            ))}
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default DescriptionSection;
