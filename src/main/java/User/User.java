package User;
import javax.annotation.processing.Generated;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class User {
    @Id @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;
    private String userEmailId;
    private String name;
    private String userPassword;

    private Integer age;
    private String gender;
    
    @OneToOne(mappedBy="user", cascade = CascadeType.ALL)

    
}
