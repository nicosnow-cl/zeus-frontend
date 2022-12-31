import { Box } from '@mui/system';
import { Button } from '@mui/material';

interface INavLinksProps {
    className?: string;
    links?: Array<{ label: string, href: string; }>;
}

const NavLinks = ( { className, links }: INavLinksProps ) => {
    const btnSx = ( idx: number ) => ( {
        borderRadius: 0,
        borderBottom: idx === 0 ? '2px solid red' : '',

    } );

    return (
        <Box className={ `h-100 d-flex ai-center col-gap-1` }>
            { links && links?.map( ( link, idx ) => (
                <Button key={ idx } sx={ { ...btnSx( idx ) } }>
                    { link.label }
                </Button>
            ) ) }
        </Box>
    );
};

export default NavLinks;