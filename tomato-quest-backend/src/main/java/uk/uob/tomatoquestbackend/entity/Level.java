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
public class Level {

    @Id
    private int level_id;
    private int level;

    @ManyToOne
    @JoinColumn(name = "game_id", referencedColumnName = "game_id")
    private Game game;
}
