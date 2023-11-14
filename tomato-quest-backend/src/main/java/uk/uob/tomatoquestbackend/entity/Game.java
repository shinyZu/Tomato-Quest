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
public class Game {
    @Id
    private int game_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "email", referencedColumnName = "email")
    private Player player;
}
