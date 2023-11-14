package uk.uob.tomatoquestbackend.service;

import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;

import java.util.List;

public interface PlayerService {

    LoginDTO savePlayer(PlayerDTO dto);

    PlayerDTO saveScore(PlayerDTO dto);

    List<PlayerDTO> getHighestScores();

    boolean deletePlayer(String email);

    List<PlayerDTO> getAll();
}
