import { Box } from '@mui/system';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index?: number;
    value?: number;
}

const TabPanel = ( props: TabPanelProps ) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `full-width-tabpanel-${ index }` }
            aria-labelledby={ `full-width-tab-${ index }` }
            { ...other }
        >   
            {
                value !== undefined && value === index ?  children : children
            }
        </div>
    );
};

export default TabPanel;