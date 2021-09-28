package controller;

import authentication.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.method.P;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import store.UserStore;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class UserController {
    @Autowired
    private UserStore userStore;

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "users", method = RequestMethod.GET)
    public List<Users> getAllUsers() {
        return userStore.getAllUsers();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "users", method = RequestMethod.POST)
    public void addUser(@RequestBody Users users) {
        userStore.addUser(users);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "users", method = RequestMethod.PUT)
    public void updateUser(@RequestBody Users users) {
        userStore.updateUser(users);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "users/", method = RequestMethod.GET)
    public Users findUserByUsername(@RequestParam String username) {
        return userStore.findUserByUsername(username);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "users/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable String username) {
        userStore.deleteUser(username);
    }
}
