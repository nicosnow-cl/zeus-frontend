const triggerThemeModeChange = ( actionToDo: () => void ) => {
    window.addEventListener( 'themeModeChange', () => {
        actionToDo();
    } );
};

export default triggerThemeModeChange;