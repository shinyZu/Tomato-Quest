package uk.uob.tomatoquestbackend.service;

import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;

public interface PlayerService {

    LoginDTO savePlayer(PlayerDTO dto);
}
