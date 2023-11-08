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
public class LevelDTO {
    private int level_id;
    private int level;
    private Game game;
}
