import bg_img from "../../assets/images/background/4.jpg"
import register_title_tag from "../../assets/images/login_page/register_title_tag.png"
import txt_input from "../../assets/images/login_page/txt_input_4.png"
import btn_ok from "../../assets/images/login_page/btn_ok.png"

export const styleSheet = {
    main_container: {
        // border: "2px solid black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bg_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

    },
    login_container: {
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
        padding: "30px",
    },
    title_tag: {
        // border: "2px solid red",
        height: "20vh",
        backgroundImage: `url(${register_title_tag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    txt_input_container: {
        // border: "2px solid blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "11vh",
        // width: "50vh !important",
        height: "8vh",
        width: "40vh !important",
        backgroundImage: `url(${txt_input})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "none",
        outline: "none",
    },
    btn_ok_container: {
        // border: "2px solid blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    btn_ok: {
        // border: "2px solid blue",
        height: "8vh",
        backgroundImage: `url(${btn_ok})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "rotate(0deg)",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(10deg)",
        },
    },
    footer_container: {
        // border: "2px solid blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px !important"
    },
}