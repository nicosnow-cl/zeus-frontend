import { getCards } from '../../services/getCards';
import * as UserCard from '../user-card';

export const CardsContainer = async () => {
  const userCards = await getCards();

  return (
    <>
      {userCards.map((user, idx) => (
        <UserCard.Root key={idx}>
          <div className="absolute h-[600px] w-full overflow-hidden">
            <UserCard.BackgroundMedia avatar={user.avatar} medias={user.medias} />
          </div>

          <UserCard.AvatarWithName
            avatar={user.avatar}
            username={user.username}
            age={user.age}
            name={user.name}
          />
          <UserCard.Description description={user.description} />
          <UserCard.Actions />
        </UserCard.Root>
      ))}
    </>
  );
};
