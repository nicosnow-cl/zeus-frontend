import obtainProfileGet from '../../services/escort/obtainProfileGet';

export const obtainProfileGetServerless = async (req: any, res: any, id: number) => {
  return obtainProfileGet(id);
};
