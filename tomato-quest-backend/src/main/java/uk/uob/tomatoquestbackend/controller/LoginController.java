package uk.uob.tomatoquestbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.service.LoginService;
import uk.uob.tomatoquestbackend.util.ResponseUtil;

import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin
@RequestMapping("api/v1/login")
public class LoginController {

    @Autowired
    LoginService loginService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        System.out.println("getAll of login");
        return new ResponseUtil(HttpServletResponse.SC_OK,"Get All", "Working fine");
    }

    @PostMapping(path = "player", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil login(@RequestBody LoginDTO dto){
        System.out.println(dto);
        return new ResponseUtil(HttpServletResponse.SC_OK, "Login Status", loginService.login(dto) ? "Player logged in successfully!" : "Failed to login. Please try again.");
    }
}
