package ticket;

import java.util.List;

import javax.persistence.*;
import venue.Venue;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode

public class Ticket {
    private  @Id @GeneratedValue (strategy = GenerationType.IDENTITY) Long id;
    private int category;

    @ManyToOne
    @JoinColumn(name = "venue_name", nullable = false)
    private Venue venue;
}