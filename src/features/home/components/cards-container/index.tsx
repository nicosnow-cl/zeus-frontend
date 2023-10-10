import { Box, Grid } from '@radix-ui/themes';
import { getCards } from '../../services/getCards';
import { UserCard } from '../user-card';

export const CardsContainer = async () => {
  const userCards = await getCards();

  return (
    <Grid columns="3" gap="3" width="auto">
      {userCards.map((user, idx) => (
        <Box key={idx}>
          <UserCard user={user} />
        </Box>
      ))}
    </Grid>
  );
};
