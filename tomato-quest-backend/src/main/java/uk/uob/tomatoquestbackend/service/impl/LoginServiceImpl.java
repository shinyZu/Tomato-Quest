package uk.uob.tomatoquestbackend.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;
import uk.uob.tomatoquestbackend.entity.Login;
import uk.uob.tomatoquestbackend.entity.Player;
import uk.uob.tomatoquestbackend.repository.LoginRepo;
import uk.uob.tomatoquestbackend.repository.PlayerRepo;
import uk.uob.tomatoquestbackend.service.LoginService;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private LoginRepo loginRepo;

    @Autowired
    private PlayerRepo playerRepo;

    @Override
    public boolean login(LoginDTO dto) {
        System.out.println("Service login : " + dto);
        try {
            Player player = playerRepo.getLoginByUsernameAndPassword(dto.getUsername(), dto.getPassword());
            System.out.println("player----" + player);

            if(player != null){
                LoginDTO loggedPlayer = mapper.map(loginRepo.save(mapper.map(dto, Login.class)), LoginDTO.class);
                System.out.println("loggedPlayer----" + loggedPlayer);
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public boolean logout(String username) {
        System.out.println("Service logout : " + username);
        try {
            Login loggedPlayer = loginRepo.getLoginByUsername(username);
            if (loggedPlayer != null) { // if a player is already logged in -> logout
                loginRepo.delete(loggedPlayer);
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
