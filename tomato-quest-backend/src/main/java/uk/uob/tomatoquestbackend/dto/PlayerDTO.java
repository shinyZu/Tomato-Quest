package uk.uob.tomatoquestbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class PlayerDTO {
//    private int player_id;
    private String email;
    private String username;
    private String password;
    private int success_score;
    private int failure_score;

    public PlayerDTO(String email, String username, String password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public PlayerDTO(String email, int success_score, int failure_score) {
        this.email = email;
        this.success_score = success_score;
        this.failure_score = failure_score;
    }

    public PlayerDTO(String email, String username, int success_score, int failure_score) {
        this.email = email;
        this.username = username;
        this.success_score = success_score;
        this.failure_score = failure_score;
    }
}
