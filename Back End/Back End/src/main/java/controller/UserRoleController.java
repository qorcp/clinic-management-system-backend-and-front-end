package controller;

import authentication.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import store.UserRoleStore;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class UserRoleController {
    @Autowired
    private UserRoleStore userRoleStore;

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "userroles", method = RequestMethod.GET)
    public List<UserRole> getAllUserRoles() {
        return userRoleStore.getAllUserRoles();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "userroles", method = RequestMethod.POST)
    public void addUserRole(@RequestBody UserRole userRole) {
        userRoleStore.addUserRole(userRole);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "userroles", method = RequestMethod.PUT)
    public void updateRole(@RequestBody UserRole userRole) {
        userRoleStore.updateUserRole(userRole);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "userroles/{id}", method = RequestMethod.DELETE)
    public void deleteRole(@PathVariable int id) {
        userRoleStore.deleteUserRole(id);
    }
}
