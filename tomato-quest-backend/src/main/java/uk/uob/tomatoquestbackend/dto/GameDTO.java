package uk.uob.tomatoquestbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import uk.uob.tomatoquestbackend.entity.Player;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class GameDTO {
    private int game_id;
    private Player player;
}
