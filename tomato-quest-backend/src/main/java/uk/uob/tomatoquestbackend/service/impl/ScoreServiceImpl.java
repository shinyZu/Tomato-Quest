package uk.uob.tomatoquestbackend.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

//@Service
//@Transactional
public class ScoreServiceImpl /*implements ScoreService*/ {
    @Autowired
    private ModelMapper mapper;

//    @Autowired
//    private ScoreRepo scoreRepo;

//    @Override
//    public ScoreDTO saveScore(ScoreDTO dto) {
//        System.out.println("Service score : " + dto);
//        try {
//            System.out.println("countRecords: " + scoreRepo.countRecords());
//            int recordCount = scoreRepo.countRecords();
//            if (recordCount == 0) {
//                System.out.println("Save score");
//                Score scoreToSave = new Score(dto.getSuccess_score(), dto.getFailure_score(), dto.getPlayer());
////                ScoreDTO savedScoreDTO = mapper.map(scoreRepo.save(mapper.map(dto, Score.class)), ScoreDTO.class);
//                Score savedScore = scoreRepo.save(scoreToSave);
//                return mapper.map(savedScore, ScoreDTO.class);
////                return savedScore;
//            } else {
//                Score existingScore = scoreRepo.getScoreByPlayer(new Player(dto.getPlayer().getEmail()));
//                System.out.println("existingScore: " + existingScore);
//                if (existingScore != null) {
//                    System.out.println("Update score");
//                    existingScore.setSuccess_score(dto.getSuccess_score());
//                    existingScore.setFailure_score(dto.getFailure_score());
//                    Score updatedScore = scoreRepo.save(existingScore);
//                    System.out.println("updatedScore: " + updatedScore);
//                    return mapper.map(updatedScore, ScoreDTO.class);
//                }
//            }
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//        return null;
//    }
}
