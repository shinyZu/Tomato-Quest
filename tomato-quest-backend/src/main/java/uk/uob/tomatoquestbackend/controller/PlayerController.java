package uk.uob.tomatoquestbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;
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

    @GetMapping(path = "getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        System.out.println("Controller player : getAll");
        return new ResponseUtil(HttpServletResponse.SC_OK,"All players", playerService.getAll());
    }

    @PostMapping(path = "save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity registerPlayer (@RequestBody PlayerDTO dto) {
        System.out.println("Controller player : registerPlayer : " + dto);
        System.out.println(dto);
        LoginDTO savedPlayer = playerService.savePlayer(dto);
        if(savedPlayer != null) {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_CREATED, "Player registered successfully!" , savedPlayer), HttpStatus.CREATED);
        } else {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_NOT_FOUND, "Player already exists. Please try to login!"), HttpStatus.NOT_FOUND);
        }
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

    @DeleteMapping(path = "delete", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deletePlayer(@RequestParam String email) {
        System.out.println("Controller player : " + email);
        if (playerService.deletePlayer(email)) {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_OK, "Player deleted successfully!"), HttpStatus.OK);
        } else {
            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_NOT_FOUND, "Error while deleting player!"), HttpStatus.NOT_FOUND);
        }
    }
}
