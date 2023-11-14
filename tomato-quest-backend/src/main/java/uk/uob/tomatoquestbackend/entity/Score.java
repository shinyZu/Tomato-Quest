package uk.uob.tomatoquestbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

//@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int score_id;
    private int success_score;
    private int failure_score;

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "game_id", referencedColumnName = "game_id")
//    private Game game;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "email", referencedColumnName = "email")
    private Player player;

    public Score(int success_score, int failure_score, Player player) {
        this.success_score = success_score;
        this.failure_score = failure_score;
        this.player = player;
    }
}
