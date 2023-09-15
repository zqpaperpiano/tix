package User;

import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

public class UserController {
    private UserService userService;

    public UserController(userService us){
        this.userService = us;
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.listUsers();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id){
        User user = userService.getUser();

        if(user == null) throw new UserNotFoundException(id);
        return userService.getUser(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        return bookService.addUser(user);
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User newUserInfo){
        User user = userService.updateUser(id, newBookInfo);
        if(user == null) throw new BookNotFoundException(id);
        
        return user;
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id){
        try{
            userService.deleteUser(id);
         }catch(EmptyResultDataAccessException e) {
            throw new UserNotFoundException(id);
         }
    }
    
}
