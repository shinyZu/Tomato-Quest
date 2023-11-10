package uk.uob.tomatoquestbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.uob.tomatoquestbackend.entity.Login;
import uk.uob.tomatoquestbackend.entity.Player;

public interface PlayerRepo extends JpaRepository<Player, Integer> {
    Player getPlayerByEmail(String email);

    Player getLoginByUsernameAndPassword(String username, String password);
}
