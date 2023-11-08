package uk.uob.tomatoquestbackend.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uk.uob.tomatoquestbackend.dto.LoginDTO;
import uk.uob.tomatoquestbackend.service.LoginService;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {
    @Override
    public boolean login(LoginDTO dto) {
        return true;
    }
}
