import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface IDescriptionSectionProps {
  breast: string;
  color?: string;
  contexture: string;
  description: string;
  eyeColor: string;
  hairColor: string;
  height: number;
  languages: string[];
  nacionality: string;
  rear: string;
  size: number[];
  skin: string;
  waxing: string;
  weight: number;
}

const DescriptionSection = ({
  breast,
  color,
  contexture,
  description,
  eyeColor,
  hairColor,
  height,
  languages,
  nacionality,
  rear,
  size,
  skin,
  waxing,
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
            {size.join(' - ')} CM
          </Typography>
        </div>

        <div className={`mt-3`}>
          <Chip className={`mr-2 mb-2`} label={contexture} />
          <Chip className={`mr-2 mb-2`} label={breast} />
          <Chip className={`mr-2 mb-2`} label={eyeColor} />
          <Chip className={`mr-2 mb-2`} label={hairColor} />
          <Chip className={`mr-2 mb-2`} label={rear} />
          <Chip className={`mr-2 mb-2`} label={waxing} />
          <Chip className={`mr-2 mb-2`} label={skin} />

          {languages.map((language, idx) => (
            <Chip key={idx} className={`mr-2 mb-2`} label={language} />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default DescriptionSection;
