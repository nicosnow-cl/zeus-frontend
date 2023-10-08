import fs from 'fs';
import path from 'path';

export const LOCALES = ['es', 'en'];
export const LOCALES_FOLDER = path.join(process.env.rootDir as string, 'locales');
export const LOCALES_FILES = (locale: string) => fs.readdirSync(path.join(LOCALES_FOLDER, locale));
