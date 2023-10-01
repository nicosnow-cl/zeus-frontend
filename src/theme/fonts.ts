import { Quicksand, Source_Code_Pro, Source_Sans_3 } from 'next/font/google';

const quickSand = Quicksand({ subsets: ['latin'], display: 'swap' });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], display: 'swap' });
const sourceSans3 = Source_Sans_3({ subsets: ['latin'], display: 'swap' });

const fonts = {
  heading: quickSand.style.fontFamily,
  body: sourceCodePro.style.fontFamily,
};

export default fonts;
