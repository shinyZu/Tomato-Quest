package uk.uob.tomatoquestbackend.service;

import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;

public interface LoginService {

    PlayerDTO login(LoginDTO dto);

    boolean logout(String username);
}
