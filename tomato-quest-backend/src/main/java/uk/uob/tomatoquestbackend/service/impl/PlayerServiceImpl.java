package uk.uob.tomatoquestbackend.service.impl;

import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;
import uk.uob.tomatoquestbackend.entity.Login;
import uk.uob.tomatoquestbackend.entity.Player;
import uk.uob.tomatoquestbackend.repository.LoginRepo;
import uk.uob.tomatoquestbackend.repository.PlayerRepo;
import uk.uob.tomatoquestbackend.service.PlayerService;

import org.modelmapper.ModelMapper;

import java.util.List;

@Service
@Transactional
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private PlayerRepo playerRepo;

    @Autowired
    private LoginRepo loginRepo;

    @Override
    public LoginDTO savePlayer(PlayerDTO dto) {
        PlayerDTO savedPlayer = null;
        LoginDTO loggedPlayer = null;
        try{
            if (playerRepo.getPlayerByEmail(dto.getEmail()) == null) {
                savedPlayer = mapper.map(playerRepo.save(mapper.map(dto, Player.class)), PlayerDTO.class);
                if(savedPlayer != null) { // save login credentials to Login table
                    loggedPlayer = mapper.map(loginRepo.save(mapper.map(dto, Login.class)), LoginDTO.class);
                }
            }
            System.out.println(savedPlayer);
            System.out.println(loggedPlayer);
//            else {
////                throw new RuntimeException("Player already exists. Please try to login!");
//                throw new ServiceException(404, "Player already exists. Please try to login!");
//            }
            return loggedPlayer;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public PlayerDTO saveScore(PlayerDTO dto) {
        System.out.println("Service player : " + dto);
        Player playerByEmail = playerRepo.getPlayerByEmail(dto.getEmail());
        if (playerByEmail != null) {
            playerByEmail.setSuccess_score(dto.getSuccess_score());
            playerByEmail.setFailure_score(dto.getFailure_score());
            return mapper.map(playerRepo.save(playerByEmail), PlayerDTO.class);
        }
        return null;
    }

    @Override
    public List<PlayerDTO> getHighestScores() {
        System.out.println("Service player : getHighestScores ");
//        List<Player> topPlayerScores = playerRepo.getTopPlayerScores();
//        for (Player player : topPlayerScores) {
//            System.out.println(player.getEmail() + " : " + player.getSuccess_score() + " : " + player.getFailure_score());
//        }
        return mapper.map(playerRepo.getTopPlayerScores(), new TypeToken<List<PlayerDTO>>() {}.getType());
    }
}
