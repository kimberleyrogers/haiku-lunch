export function Header(props) {

    // need a function that handles the button clicks and changes state
    const setMainContent = props.setMainContent;
    const generateColour = props.generateColour;
    const changeBackground = props.changeBackground
    
    const HandleClick = (e) => {
        // if main content is already haiku and e.target.id is also haiku... reload the page
        // otherwise act as normal

        console.log('handle click ' + e.target.id)
        setMainContent(e.target.id);
        // if main content is already
        changeBackground();


    }

    return (
        <div className="header-container">
            <div className="header-btn" id="about" onClick={HandleClick}>About Haiku Lunch</div>
            <div className="header-btn" id="haiku" onClick={HandleClick}>One More Bite</div>
        </div>
    )
}