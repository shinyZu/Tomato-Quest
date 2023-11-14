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
import uk.uob.tomatoquestbackend.service.LoginService;

import java.util.List;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private LoginRepo loginRepo;

    @Autowired
    private PlayerRepo playerRepo;

    @Value("${my.app.fixed.salt}")
    private String fixedSalt;

    @Override
    public List<LoginDTO> getAll() {
        try {
            System.out.println("Service login : getAll ");
            return mapper.map(loginRepo.getAllLoggedInPlayers(), new TypeToken<List<LoginDTO>>() {
            }.getType());
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public PlayerDTO login(LoginDTO dto) {
        System.out.println("Service login : " + dto);
        try {
            String hashpw = BCrypt.hashpw(dto.getPassword(), fixedSalt);
//            boolean checkpw = BCrypt.checkpw(dto.getPassword(), hashpw);
//            System.out.println("password is equal: " + checkpw);

            Player player = playerRepo.getLoginByUsernameAndPassword(dto.getUsername(), hashpw);
            System.out.println("player----" + player);

            if (player != null) {
                dto.setPassword(player.getPassword());
                LoginDTO loggedPlayer = mapper.map(loginRepo.save(mapper.map(dto, Login.class)), LoginDTO.class);
                System.out.println("loggedPlayer----" + loggedPlayer);
                return mapper.map(player, PlayerDTO.class);
            }
            return null;
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
