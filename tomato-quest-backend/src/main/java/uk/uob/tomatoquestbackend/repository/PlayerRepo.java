package uk.uob.tomatoquestbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uk.uob.tomatoquestbackend.entity.Player;

import java.util.List;

public interface PlayerRepo extends JpaRepository<Player, Integer> {
    Player getPlayerByEmail(String email);

    Player getLoginByUsernameAndPassword(String username, String password);

//    @Query(value="select p.email, p.success_score, p.failure_score from Player p order by p.success_score desc, p.failure_score", nativeQuery=true)
    @Query(value = "select new Player(p.email, p.username, p.success_score, p.failure_score) from Player p order by p.success_score desc , p.failure_score")
//    @Query(value="select p.email, p.success_score, p.failure_score from Player p order by p.success_score desc, p.failure_score", nativeQuery=true)
    List<Player> getTopPlayerScores();
}
