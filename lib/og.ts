import { z } from 'zod';
import { paramsFactory } from './params';

export const postParams = paramsFactory(
  z.object({
    title: z.string(),
    coverImgUrl: z.string().optional(),
    date: z.string(),
  }),
);
