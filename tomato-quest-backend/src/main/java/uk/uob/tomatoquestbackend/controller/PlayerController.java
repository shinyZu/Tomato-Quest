package uk.uob.tomatoquestbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uk.uob.tomatoquestbackend.dto.CommonResponseDTO;
import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;
import uk.uob.tomatoquestbackend.service.PlayerService;
import uk.uob.tomatoquestbackend.util.ResponseUtil;

import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin
@RequestMapping("api/v1/player")
public class PlayerController {

    @Autowired
    PlayerService playerService;

    @PostMapping(path = "save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity registerPlayer (@RequestBody PlayerDTO dto) {
        System.out.println(dto);
        LoginDTO savedPlayer = playerService.savePlayer(dto);
        if(savedPlayer != null) {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_CREATED, "Player registered successfully!" , savedPlayer), HttpStatus.CREATED);
        } else {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_NOT_FOUND, "Player already exists. Please try to login!"), HttpStatus.NOT_FOUND);
        }
//        return new ResponseEntity(new CommonResponseDTO(true, "Player registered successfully!" , playerService.savePlayer(dto)), HttpStatus.OK);
    }
}
