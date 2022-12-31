import profiles from '../../dummy/profiles';

const obtainProfileGet = async (id: number): Promise<any> => {
  try {
    return profiles.find((profile: any) => profile.id === id);
  } catch (err: any) {
    console.error({ err });

    return null;
  }
};

export default obtainProfileGet;
