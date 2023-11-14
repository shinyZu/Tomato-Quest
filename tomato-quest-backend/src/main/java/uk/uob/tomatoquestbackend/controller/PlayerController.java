package uk.uob.tomatoquestbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uk.uob.tomatoquestbackend.dto.CommonResponseDTO;
import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;
import uk.uob.tomatoquestbackend.entity.Player;
import uk.uob.tomatoquestbackend.service.PlayerService;
import uk.uob.tomatoquestbackend.util.ResponseUtil;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

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

    @GetMapping(path = "score/getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getHighestScores() {
        System.out.println("Controller player : get leaderboard data ");
        List<PlayerDTO> highestScores = playerService.getHighestScores();
        if (highestScores != null) {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_OK, "Success!", highestScores), HttpStatus.OK);
        } else {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_NOT_FOUND, "Error while fetching score data!"), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(path = "score/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveScore(@RequestBody PlayerDTO dto) {
        System.out.println("Controller player : " + dto);
        PlayerDTO savedScore = playerService.saveScore(dto);
        if (savedScore != null) {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_OK, "Score saved successfully!", savedScore), HttpStatus.OK);
        } else {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_NOT_FOUND, "Error while saving score!"), HttpStatus.NOT_FOUND);
        }
    }
}
