import background from "../../assets/images/background/9.jpg"

import btn_home from "../../assets/images/controls/home.png"
import btn_restart from "../../assets/images/controls/restart.png"
import btn_play from "../../assets/images/controls/play.png"
import btn_pause from "../../assets/images/controls/pause.png"
import btn_sound from "../../assets/images/controls/sounds_on.png"
import btn_timer from "../../assets/images/controls/timer.png"
import btn_level from "../../assets/images/controls/level.png"
import btn_next from "../../assets/images/controls/next.png"

import score_correct_icon from "../../assets/images/game_page/correct_score.png"
import score_wrong_icon from "../../assets/images/game_page/wrong_score.png"

import qs_board from "../../assets/images/game_page/qs_board.png"
// import qs_board from "../../assets/images/game_page/qs_board_2.png"
// import qs_board from "../../assets/images/game_page/wooden_board_3.png"
import sample_qs from "../../assets/images/game_page/equation_qs.png"

import answer_0 from "../../assets/images/game_page/answers/zero.png"
import answer_1 from "../../assets/images/game_page/answers/one.png"
import answer_2 from "../../assets/images/game_page/answers/two.png"
import answer_3 from "../../assets/images/game_page/answers/three.png"
import answer_4 from "../../assets/images/game_page/answers/four.png"
import answer_5 from "../../assets/images/game_page/answers/five.png"
import answer_6 from "../../assets/images/game_page/answers/six.png"
import answer_7 from "../../assets/images/game_page/answers/seven.png"
import answer_8 from "../../assets/images/game_page/answers/eight.png"
import answer_9 from "../../assets/images/game_page/answers/nine.png"

import green_tick from "../../assets/images/game_page/green_tick.png"
import red_cross from "../../assets/images/game_page/red_cross.png"

export const styleSheet = {
    main_container: {
        // border:'2px solid black',
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    //----------------------------------------------------------
    controls_bar_container: {
        // border:'2px solid black',
        display: "flex",
        backdropFilter: "blur(4px)",
    },
    controls_left_container: {
        // border:'2px solid blue',
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "50px",
    },
    controls_right_container: {
        // border:'2px solid blue',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "50px",
    },
    //----------------------------------------------------------
    btn_home_container: {
        // border:'2px solid red',
        height: "5vh",
        width: "5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_home})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: "10px !important",
        "&:hover": {
            cursor: "pointer",
            // height:"6vh",
            // width:"6vh",
            transform: "rotate(10deg)",
        },
    },
    btn_restart_container: {
        // border:'2px solid red',
        height: "5vh",
        width: "5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_restart})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: "10px !important",
        "&:hover": {
            cursor: "pointer",
            // height:"6vh",
            // width:"6vh",
            transform: "rotate(10deg)",
        },
    },
    btn_play_container: {
        // border:'2px solid red',
        height: "5vh",
        width: "5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_play})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: "10px !important",
        "&:hover": {
            cursor: "pointer",
            // height:"6vh",
            // width:"6vh",
            transform: "rotate(10deg)",
        },
    },
    btn_pause_container: {
        // border:'2px solid red',
        height: "5vh",
        width: "5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_pause})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: "10px !important",
        "&:hover": {
            cursor: "pointer",
            // height:"6vh",
            // width:"6vh",
            transform: "rotate(10deg)",
        },
    },
    btn_sound_container: {
        // border:'2px solid red',
        height: "5vh",
        width: "5vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_sound})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: "10px !important",
        "&:hover": {
            cursor: "pointer",
            // height:"6vh",
            // width:"6vh",
            transform: "rotate(10deg)",
        },
    },
    btn_timer_container: {
        // border:'2px solid red',
        height: "5vh",
        width: "5vh",
        backgroundImage: `url(${btn_timer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    btn_level_container: {
        // border:'2px solid red',
        height: "5vh",
        width: "5vh",
        backgroundImage: `url(${btn_level})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    btn_labels: {
        // border:'2px solid red',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 20px !important",
        // color:"red !important"

    },
    //----------------------------------------------------------
    score_qs_board_main_container: {
        // border:"2px solid pink",
        backdropFilter: "blur(4px)",
        // marginLeft:"10px",
    },
    score_container: {
        // border:"2px solid cyan",
        marginTop: "50px !important",
        height: "fit-content",
    },
    icon_correct_score_container: {
        // border:"2px solid red",
        display: "flex",
        flexDirection: "column",
        marginBottom: "50px !important",
    },
    icon_correct_score: {
        // border:"2px solid red",
        height: "5vh",
        width: "5vh",
        backgroundImage: `url(${score_correct_icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginLeft: "50px !important",
        marginRight: "10px !important",

    },
    icon_wrong_score: {
        // border:"2px solid red",
        height: "5vh",
        width: "5vh",
        backgroundImage: `url(${score_wrong_icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginLeft: "50px !important",
        marginRight: "10px !important",

    },
    lbl_scores: {
        // border:'2px solid deeppink',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    qs_board_main_container: {
        // border:'2px solid yellow',
        display: "flex",
        justifyContent: "center",
    },
    qs_board_container: {
        // border:'2px solid red',
        height: "65vh",
        width: "60vh",
        backgroundImage: `url(${qs_board})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundPositionY:"10px", //qs_board_2
        backgroundPositionY: "-30px", // qs_board
        marginLeft: "-150px !important",
    },
    qs_container: {
        // border:'2px solid blue',
        height: "450px",
        width: "250px",
        backgroundImage: `url(${sample_qs})`,
        backgroundSize: "cover",
        transform: "rotate(90deg)",
        backgroundPosition: "center",
        // marginTop:"-250px !important", // qs_board_2
        marginTop: "280px !important" // qs_board
    },
    //----------------------------------------------------------
    answer_container: {
        // border:'2px solid blue',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // marginLeft:"170px",
        backdropFilter: "blur(4px)",
        // position:"absolute"
        marginTop: "-100px",
        padding: "0px 100px !important",
    },
    btn_0: {
        backgroundImage: `url(${answer_0})`,
        height: "12vh",
        width: "9vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"13vh",
            // width:"10vh",
            transform: "rotate(5deg)",
        },
    },
    btn_1: {
        backgroundImage: `url(${answer_1})`,
        height: "14vh",
        width: "7vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"15vh",
            // width:"8vh",
            transform: "rotate(5deg)",
        },
    },
    btn_2: {
        backgroundImage: `url(${answer_2})`,
        height: "12vh",
        width: "9vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"13vh",
            // width:"10vh",
            transform: "rotate(5deg)",
        },
    },
    btn_3: {
        backgroundImage: `url(${answer_3})`,
        height: "13vh",
        width: "9vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"13vh",
            // width:"10vh",
            transform: "rotate(5deg)",
        },
    },
    btn_4: {
        backgroundImage: `url(${answer_4})`,
        height: "12vh",
        width: "9vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"13vh",
            // width:"10vh",
            transform: "rotate(5deg)",
        },
    },
    btn_5: {
        backgroundImage: `url(${answer_5})`,
        height: "13vh",
        width: "9vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"13vh",
            // width:"10vh",
            transform: "rotate(5deg)",
        },
    },
    btn_6: {
        backgroundImage: `url(${answer_6})`,
        height: "12vh",
        width: "9vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"13vh",
            // width:"10vh",
            transform: "rotate(5deg)",
        },
    },
    btn_7: {
        backgroundImage: `url(${answer_7})`,
        height: "13vh",
        width: "9vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"13vh",
            // width:"10vh",
            transform: "rotate(5deg)",
        },
    },
    btn_8: {
        backgroundImage: `url(${answer_8})`,
        height: "13vh",
        width: "9vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"13vh",
            // width:"10vh",
            transform: "rotate(5deg)",
        },
    },
    btn_9: {
        backgroundImage: `url(${answer_9})`,
        height: "13vh",
        width: "9vh",
        transform: "rotate(0deg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
            cursor: "pointer",
            // height:"13vh",
            // width:"10vh",
            transform: "rotate(5deg)",
        },
    },

    //==================================================
    answer_status_main_container: {
        // border:'2px solid yellow',
        display: "flex",
        justifyContent: "center",
    },
    green_tick_main_container: {
        // border:'2px solid red',
        height: "80vh",
        width: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    green_tick_container: {
        // border:'2px solid blue',
        height: "14vh",
        width: "14vh",
        backgroundImage: `url(${green_tick})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    red_cross_main_container: {
        // border:'2px solid red',
        height: "80vh",
        width: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    red_cross_container: {
        // border:'2px solid blue',
        height: "14vh",
        width: "14vh",
        backgroundImage: `url(${red_cross})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    txt_answer_container: {
        // border:'2px solid blue',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    happy_tomato_container: {
        // border:'2px solid blue',
        height: "40vh",
        width: "45vh",
        backgroundImage: `url(${score_correct_icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    sad_tomato_container: {
        // border:'2px solid blue',
        height: "43vh",
        width: "45vh",
        backgroundImage: `url(${score_wrong_icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    btn_next_container: {
        // border:'2px solid blue',
        height: "10vh",
        width: "10vh",
        transform: "rotate(0deg)",
        backgroundImage: `url(${btn_next})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: "20px !important",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(10deg)",
            // height:"12vh",
            // width:"12vh",
        },

    },
}