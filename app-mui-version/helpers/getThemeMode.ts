import { PaletteMode } from '@mui/material';

const getThemeMode = () => localStorage.getItem( 'themeMode' ) as PaletteMode || 'light';

export default getThemeMode;