import { PaletteMode } from '@mui/material';

const setThemeMode = ( mode: PaletteMode ) => {
    window.localStorage.setItem( "themeMode", mode );
    window.dispatchEvent( new Event( "themeModeChange" ) );
};

export default setThemeMode;