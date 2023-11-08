import home_bg from "../../assets/images//background/12.jpg"
import btn_play from "../../assets/images/home_page/btn_play.png"
import btn_settings from "../../assets/images/controls/settings.png"
import btn_help from "../../assets/images/controls/help.png"
import btn_sounds from "../../assets/images/controls/sounds_on.png"
import btn_logout from "../../assets/images/controls/timer.png"

export const styleSheet = {
    container_1:{
        // border:'2px solid black',
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${home_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundSize: "100vw 120vh",
        // backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        // backgroundPositionY: "0.5px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    main_container: {
        // border:'2px solid red',
    },
    top_container:{
        // border:'2px solid blue',
        height:"50vh",
    },
    bottom_container:{
        // border:'2px solid blue',
        height:"50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    btn_play_container:{
        // border:'2px solid blue',
        height:"15vh",
        width:"30vh",
        backgroundImage: `url(${btn_play})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop:"200px !important", 
        "&:hover": {
            cursor: "pointer",
            height:"18vh",
            width:"33vh",
        },       
    },
    controls_container:{
        // border:'2px solid pink',
        paddingRight:"50px",
        display:"flex",
        flexDirection:"column !important",
        alignItems:"flex-end",
    },
    settings_controls_container:{
        // border:'2px solid red',
        height:"5vh",
        width:"5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_settings})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop:"20px !important",
        marginBottom:"10px !important",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(10deg)",
        },
    },
    help_controls_container:{
        // border:'2px solid red',
        height:"5vh",
        width:"5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_help})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom:"10px !important",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(10deg)",
        },
    },
    sound_controls_container:{
        // border:'2px solid red',
        height:"5vh",
        width:"5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_sounds})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom:"10px !important",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(10deg)",
        },
    },
    logout_controls_container:{
        // border:'2px solid red',
        height:"5vh",
        width:"5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_logout})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(10deg)",
        },
    },
}