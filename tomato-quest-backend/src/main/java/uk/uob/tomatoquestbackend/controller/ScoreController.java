//package uk.uob.tomatoquestbackend.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import uk.uob.tomatoquestbackend.dto.LoginDTO;
//import uk.uob.tomatoquestbackend.dto.PlayerDTO;
//import uk.uob.tomatoquestbackend.dto.ScoreDTO;
//import uk.uob.tomatoquestbackend.service.ScoreService;
//import uk.uob.tomatoquestbackend.util.ResponseUtil;
//
//import javax.servlet.http.HttpServletResponse;
//
//@RestController
//@CrossOrigin
//@RequestMapping("api/v1/score")
//public class ScoreController {
//
//    @Autowired
//    ScoreService scoreService;
//
//    @PostMapping(path = "save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity saveScore(@RequestBody ScoreDTO dto) {
//        System.out.println("Controller score : " + dto);
//        ScoreDTO savedScore = scoreService.saveScore(dto);
//        if (savedScore != null) {
//            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_OK, "Score saved successfully!", savedScore), HttpStatus.OK);
//        } else {
//            return new ResponseEntity(new ResponseUtil(HttpServletResponse.SC_NOT_FOUND, "Error while saving score!"), HttpStatus.NOT_FOUND);
//        }
//    }
//}
