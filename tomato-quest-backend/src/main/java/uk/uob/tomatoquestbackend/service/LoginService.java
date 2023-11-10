package uk.uob.tomatoquestbackend.service;

import uk.uob.tomatoquestbackend.dto.LoginDTO;

public interface LoginService {

    boolean login(LoginDTO dto);

    boolean logout(String username);
}
