package uk.uob.tomatoquestbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.uob.tomatoquestbackend.entity.Login;

public interface LoginRepo extends JpaRepository<Login,String> {
    Login getLoginByUsernameAndPassword(String username, String password);

    Login getLoginByUsername(String username);
}
