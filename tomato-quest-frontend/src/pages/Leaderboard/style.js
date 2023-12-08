import background from "../../assets/images/background/13.jpg"
import leaderboard_tag from "../../assets/images/score_page/leaderboard_tag.png"
import lbl_score from "../../assets/images/login_page/txt_input_2.png"
import btn_home from "../../assets/images/controls/home.png"

export const styleSheet = {
    main_container: {
        // border: "2px solid black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

    },
    btn_home_container: {
        // border:'2px solid red',
        height: "5vh",
        width: "5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_home})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: "20px !important",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(10deg)",
        },
    },
    leaderboard_container: {
        // border: "2px solid red",
        padding: "20px 100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    glass_container: {
        // border: "2px solid red",
        padding: "50px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.19)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(11.8px)",
        "-webkit-backdrop-filter": "blur(11.8px)",
    },
    title_container: {
        // border: "2px solid blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
    },
    title_tag: {
        // border: "2px solid red",
        height: "17vh",
        backgroundImage: `url(${leaderboard_tag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    score_main_container:{
        // border: "2px solid red",
        height:'50vh',
        display:"flex",
        flexDirection:'column !important',
        justifyContent:'center',
        alignItems:'center',
        rowGap:10
    },
    lbl_score_container:{
        // border: "2px solid blue",
        // height: "19vh",
        width:"fit-content",
        backgroundImage: `url(${lbl_score})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
    },
    txt_container:{
        // border: "2px solid yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft:"2vh"
    },
}