package uk.uob.tomatoquestbackend.service;

import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;

import java.util.List;

public interface LoginService {

    PlayerDTO login(LoginDTO dto);

    boolean logout(String username);

    List<LoginDTO> getAll();
}
