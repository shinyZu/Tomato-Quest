package uk.uob.tomatoquestbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import uk.uob.tomatoquestbackend.dto.PlayerDTO;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Player {

    @Id
    private String email;
    private String username;
    private String password;

    private int success_score;
    private int failure_score;

    public Player(String email) {
        this.email = email;
    }

    public Player(String email, String username, String password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public Player(String email, int success_score, int failure_score) {
        this.email = email;
        this.success_score = success_score;
        this.failure_score = failure_score;
    }

    public Player(String email, String username, int success_score, int failure_score) {
        this.email = email;
        this.username = username;
        this.success_score = success_score;
        this.failure_score = failure_score;
    }
}
