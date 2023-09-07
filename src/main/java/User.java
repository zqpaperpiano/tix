import javax.annotation.processing.Generated;

@Entity
public class User {
    @Id @GeneratedValue
    private String userEmailId;
    private String name;
    private String userPassword;
    
    @OneToOne(mappedBy="user", cascade = CascadeType.ALL)

    private UserProfile profile;

    //Getters
    public String getUserEmailId() {
        return userEmailId;
    }

    public String getName() {
        return name;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public UserProfile getProfile() {
        return profile;
    }

    //Setters
    public void setUserEmailId(String userEmailId) {
        this.userEmailId = userEmailId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public void setProfile(UserProfile profile) {
        this.profile = profile;
    }

    
}
