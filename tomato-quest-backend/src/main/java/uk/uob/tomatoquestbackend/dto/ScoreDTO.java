package uk.uob.tomatoquestbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import uk.uob.tomatoquestbackend.entity.Game;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ScoreDTO {
    private int score_id;
    private int success_score;
    private int failure_score;
    private Game game;
}
