package store;

import authentication.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.UserService;

import java.util.List;

@Transactional
@Service
public class UserStore {
    @Autowired
    UserService userService;

    public void addUser(Users users) {
        userService.addUser(users);
    }

    public void updateUser(Users users) {
        userService.updateUser(users);
    }

    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }

    public Users findUserByUsername(String username) {
        return userService.findUserByUsername(username);
    }

    public void deleteUser(String username) {
        userService.deleteUser(username);
    }
}
