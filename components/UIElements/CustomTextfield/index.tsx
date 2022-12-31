import { TextField } from '@mui/material';

interface ICustomTextfieldProps {
    customClasses?: string;
    placeholder?: string;
    size?: "small" | "medium";
    width?: number | string;
    height?: number | string;
    label?: string;
    variant?: "standard" | "outlined" | "filled";
    labelAndBottomColor?: string;
}

const CustomTextfield = ( { customClasses, placeholder, size = "small", width, height, label, variant = 'standard', labelAndBottomColor }: ICustomTextfieldProps ) => {
    const sx = {
        width,
        height,
        '& .MuiInputBase-root': {
            color: 'white !important',
            '::before': {
                borderBottom: `2px solid ${ labelAndBottomColor }`,
            }
        },
        '& .MuiInputLabel-root': {
            color: `${ labelAndBottomColor }`,
        }
    };

    return (
        <TextField className={ `${ customClasses }` } placeholder={ placeholder } size={ size } sx={ { ...sx } } label={ label } variant={ variant } />
    );
};

export default CustomTextfield;