package store;

import authentication.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.RoleService;

import java.util.List;

@Transactional
@Service
public class RoleStore {
    @Autowired
    private RoleService roleService;

    public void addRole(Role role) {
        roleService.addRole(role);
    }

    public void updateRole(Role role) {
        roleService.updateDrug(role);
    }

    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }

    public void deleteRole(int id) {
        roleService.deleteRole(id);
    }
}
