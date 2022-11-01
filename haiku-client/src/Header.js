export function Header(props) {

    // need a function that handles the button clicks and changes state
    const setMainContent = props.setMainContent;
    const generateColour = props.generateColour;
    
    const HandleClick = (e) => {
        console.log('handle click ' + e.target.id)
        setMainContent(e.target.id);
        generateColour();

    }

    return (
        <div className="header-container">
            <div className="header-btn" id="about" onClick={HandleClick}>About Haiku Lunch</div>
            <div className="header-btn" id="haiku" onClick={HandleClick}>One More Bite</div>
        </div>
    )
}