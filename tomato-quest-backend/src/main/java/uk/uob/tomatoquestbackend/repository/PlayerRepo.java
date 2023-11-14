package uk.uob.tomatoquestbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uk.uob.tomatoquestbackend.entity.Player;

import java.util.List;

public interface PlayerRepo extends JpaRepository<Player, Integer> {
    Player getPlayerByEmail(String email);

    Player getLoginByUsernameAndPassword(String username, String password);

    @Query(value = "select new Player(p.email, p.username, p.success_score, p.failure_score) from Player p order by p.success_score desc , p.failure_score")
    List<Player> getTopPlayerScores();

    @Query(value = "select new Player(p.email, p.username, p.password, p.success_score, p.failure_score) from Player p")
    List<Player> getAllPlayers();
}
