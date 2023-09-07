import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;

import csd.week4.review.Review;
import lombok.*;


@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Venue {
    private @Id @GeneratedValue (strategy = GenerationType.IDENTITY) Long id;
    private String venue_name;
    
    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore

    private List<Ticket> tickets;
    private int category; //category number represents array index of prices
    private int[] prices; 
    public Venue(String venue_name){
        this.venue_name = venue_name;
    }

}