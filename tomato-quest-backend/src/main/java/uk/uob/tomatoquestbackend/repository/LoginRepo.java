package uk.uob.tomatoquestbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uk.uob.tomatoquestbackend.entity.Login;

import java.util.List;

public interface LoginRepo extends JpaRepository<Login,String> {

    @Query(value = "select new Login(l.username, l.password) from Login l")
    List<Login> getAllLoggedInPlayers();

    Login getLoginByUsernameAndPassword(String username, String password);

    Login getLoginByUsername(String username);
}
