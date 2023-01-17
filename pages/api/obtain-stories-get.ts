import type { NextApiRequest, NextApiResponse } from 'next';

import IResponse from '../../interfaces/api/interface.response';
import sleep from '../../helpers/sleep';
import stories from '../../dummy/stories';

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
  try {
    await sleep(500);

    const data = stories.sort(
      (story1, story2) =>
        new Date(story2.publishDate).getTime() - new Date(story1.publishDate).getTime(),
    );

    return res.status(200).json({ data, error: null, success: true });
  } catch (err: any) {
    console.error(err);

    return res.status(200).json({
      data: [],
      error: { code: -1, message: err.message || 'Error inesperado' },
      success: false,
    });
  }
}

export default handler;
