package User;

import org.springframework.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND) //404 Error
public class UserNotFoundException extends RuntimeException{
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public UserNotFoundException(Integer id) {
            super("Could not find user " + id);
    }
}
