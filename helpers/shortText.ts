const shortText = ( text: string, maxLength: number ) => {
    if ( text.length > maxLength )
        return text.substr( 0, maxLength ) + '...';

    return text;
};

export default shortText;