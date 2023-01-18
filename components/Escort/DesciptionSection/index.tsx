import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface IDescriptionSectionProps {
  appareance: string[];
  color?: string;
  description: string;
  height: number;
  nacionality: string;
  size: string;
  skin: string;
  weight: number;
}

const DescriptionSection = ({
  appareance,
  color,
  description,
  height,
  nacionality,
  size,
  skin,
  weight,
}: IDescriptionSectionProps) => {
  return (
    <Grid className={`p-5`} container spacing={[3, 3]}>
      <Grid item xs={12} sm={7}>
        <Typography
          variant="body1"
          fontSize={18}
          fontWeight={300}
          textAlign="justify"
          style={{ color }}
        >
          &quot;{description}&quot;
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5}>
        <div className={`d-flex jc-between fw-wrap col-gap-2`}>
          <Typography
            color="primary"
            fontWeight={600}
            textTransform="uppercase"
            variant="subtitle1"
          >
            {nacionality}
          </Typography>
          <Typography
            color="primary"
            fontWeight={600}
            textTransform="uppercase"
            variant="subtitle1"
          >
            {skin}
          </Typography>
          <Typography
            color="primary"
            fontWeight={600}
            textTransform="uppercase"
            variant="subtitle1"
          >
            {height} CM
          </Typography>
          <Typography
            color="primary"
            fontWeight={600}
            textTransform="uppercase"
            variant="subtitle1"
          >
            {weight} KG
          </Typography>
          <Typography
            color="primary"
            fontWeight={600}
            textTransform="uppercase"
            variant="subtitle1"
          >
            {size} CM
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
