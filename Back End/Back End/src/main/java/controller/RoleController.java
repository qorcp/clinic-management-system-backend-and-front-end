package controller;

import authentication.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import store.RoleStore;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class RoleController {
    @Autowired
    private RoleStore roleStore;

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "roles", method = RequestMethod.GET)
    public List<Role> getAllRoles() {
        return roleStore.getAllRoles();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "roles", method = RequestMethod.POST)
    public void addRole(@RequestBody Role role) {
        roleStore.addRole(role);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "roles", method = RequestMethod.PUT)
    public void updateRole(@RequestBody Role role) {
        roleStore.updateRole(role);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "roles/{id}", method = RequestMethod.DELETE)
    public void deleteRole(@PathVariable int id) {
        roleStore.deleteRole(id);
    }
}
