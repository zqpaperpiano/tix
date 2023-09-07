package User;

public interface UserService {
    List<User> listUsers();
    User.getUser(Integer id);
    User.addUser(User user);
    User.updateUser(Integer id, User user);

    void deleteUser(Integer id);
}
