import { Box, Grid } from '@radix-ui/themes';
import { getCards } from '../../services/getCards';
import { UserCard } from '../user-card';

export const CardsContainer = async () => {
  const userCards = await getCards();

  return (
    <Grid columns="3" gap="5">
      {userCards.map((user, idx) => (
        <UserCard key={idx} user={user} />
      ))}
    </Grid>
  );
};
