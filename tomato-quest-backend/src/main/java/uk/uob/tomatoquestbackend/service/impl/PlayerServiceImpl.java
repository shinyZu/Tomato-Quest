package uk.uob.tomatoquestbackend.service.impl;

import org.mindrot.jbcrypt.BCrypt;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;
import uk.uob.tomatoquestbackend.entity.Login;
import uk.uob.tomatoquestbackend.entity.Player;
import uk.uob.tomatoquestbackend.repository.LoginRepo;
import uk.uob.tomatoquestbackend.repository.PlayerRepo;
import uk.uob.tomatoquestbackend.service.PlayerService;

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

    @Value("${my.app.fixed.salt}")
    private String fixedSalt;

    @Override
    public List<PlayerDTO> getAll() {
        try {
            System.out.println("Service player : getAll ");
            return mapper.map(playerRepo.getAllPlayers(), new TypeToken<List<PlayerDTO>>() {
            }.getType());
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public LoginDTO savePlayer(PlayerDTO dto) {

        PlayerDTO savedPlayer = null;
        LoginDTO loggedPlayer = null;

        try {
            String hashpw = BCrypt.hashpw(dto.getPassword(), fixedSalt);
            System.out.println("hashpw : " + hashpw); // $2a$10$abcdefghabcdefghabcdeeLkNFNZ475Z1Uel0kODlLUY5Qw8EQdhm

            dto.setPassword(hashpw);
            if (playerRepo.getPlayerByEmail(dto.getEmail()) == null) {
                savedPlayer = mapper.map(playerRepo.save(mapper.map(dto, Player.class)), PlayerDTO.class);
                if (savedPlayer != null) { // save login credentials to Login table
                    loggedPlayer = mapper.map(loginRepo.save(mapper.map(dto, Login.class)), LoginDTO.class);
                }
            }
            System.out.println(savedPlayer);
            System.out.println(loggedPlayer);
            return loggedPlayer;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public PlayerDTO saveScore(PlayerDTO dto) {
        try {
            System.out.println("Service player : " + dto);
            Player playerByEmail = playerRepo.getPlayerByEmail(dto.getEmail());
            if (playerByEmail != null) {
                playerByEmail.setSuccess_score(dto.getSuccess_score());
                playerByEmail.setFailure_score(dto.getFailure_score());
                return mapper.map(playerRepo.save(playerByEmail), PlayerDTO.class);
            }
            return null;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public List<PlayerDTO> getHighestScores() {
        try {
            System.out.println("Service player : getHighestScores ");
            return mapper.map(playerRepo.getTopPlayerScores(), new TypeToken<List<PlayerDTO>>() {
            }.getType());
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public boolean deletePlayer(String email) {
        try {
            System.out.println("Service player : deletePlayer ");
            playerRepo.delete(new Player(email));
            return true;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
