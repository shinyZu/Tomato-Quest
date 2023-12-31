package uk.uob.tomatoquestbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;
import uk.uob.tomatoquestbackend.service.LoginService;
import uk.uob.tomatoquestbackend.util.ResponseUtil;

import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin
@RequestMapping("api/v1/login")
public class LoginController {

    @Autowired
    LoginService loginService;

    @GetMapping(path = "getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        System.out.println("Controller login : getAll");
        return new ResponseUtil(HttpServletResponse.SC_OK,"All logins", loginService.getAll());
    }

    @PostMapping(path = "player/log", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity login(@RequestBody LoginDTO dto){
        System.out.println("Controller login : " + dto);
        PlayerDTO loggedPlayer = loginService.login(dto);
        if (loggedPlayer != null) {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_OK, "Player logged in successfully!", loggedPlayer ), HttpStatus.OK);
        } else {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_NOT_FOUND, "Invalid credentials. Please try again!"), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(path = "player/logout", params = {"username"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity logout(@RequestParam String username){
        System.out.println("Controller logout : " + username);
        if (loginService.logout(username)) {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_OK, "Player logged out successfully!"), HttpStatus.OK);
        } else {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Something went wrong. Please try again!"), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
