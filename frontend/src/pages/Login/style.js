import login_img from "../../assets/images/background/15.png"
import bg_img from "../../assets/images/background/4.jpg"
import btn_login from "../../assets/images/login_page/btn_login.png"
import title_box from "../../assets/images/login_page/title_box.png"
// import login_img from "../../assets/images/login_page/happy_tomato.png"

import login_title_tag from "../../assets/images/login_page/login_title_tag.png"
import txt_input from "../../assets/images/login_page/txt_input_4.png"
import btn_ok from "../../assets/images/login_page/btn_ok.png"

export const styleSheet = {
    main_container: {
        // border: "2px solid black",
        height: "100vh",
        width: "100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundImage: `url(${bg_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
    },
    login_container: {
        // border: "2px solid red",
        padding: "20px 100px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    glass_container:{
        // border: "2px solid red",
        padding: "50px 0px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background: "rgba(255, 255, 255, 0.19)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(11.8px)",
        "-webkit-backdrop-filter": "blur(11.8px)",
    },
    title_container:{
        // border: "2px solid blue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"30px",
    },  
    title_tag:{
        // border: "2px solid red",
        height:"18vh",
        backgroundImage: `url(${login_title_tag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    txt_input_container:{
        // border: "2px solid blue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"11vh",
        width:"50vh !important",
        backgroundImage: `url(${txt_input})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border:"none",
        outline:"none",
    },
    btn_ok_container:{
        // border: "2px solid blue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    btn_ok:{
        // border: "2px solid blue",
        height:"10vh",
        backgroundImage: `url(${btn_ok})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "rotate(0deg)",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(10deg)",
        },
    },
    footer_container:{
        // border: "2px solid blue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"20px !important"
    },

    //====================================login_v1.jsx======================
    txt_title:{
        height:"20vh",
        width:"50vh",
        backgroundImage: `url(${title_box})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
    },
    
    img_container:{
        // border: "2px solid green",
        height:"85vh",
        width:"10vh",
        backgroundImage: `url(${login_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(11.8px)",
       "-webkit-backdrop-filter": "blur(11.8px)",
    },

    form_container:{
        border: "2px solid green",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
  
    login_text: {
        color: "#2c3e50",
    },
  
    btn_login: {
        backgroundColor: "#2c3e50",
        boxShadow: "5px 5px 10px 2px rgb(7 12 8 / 50%) !important",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#34495e !important",
        },
    },
  
    btn_login_disabled: {
        backgroundColor: "#7f8c8d !important",
        "&:hover": {
            cursor: "default",
            backgroundColor: "#7f8c8d !important",
        },
    },
  
    login_footer: {
        // border: "6px solid red",
        display: "flex",
        flexDirection: "column",
    },
  
    login_footer_text: {
        textAlign: "center",
        paddingTop: "10px",
    },
  
    txt_register: {
        "&:hover": {
            cursor: "pointer",
        },
    },

  }