package store;

import authentication.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.UserRoleService;

import java.util.List;

@Transactional
@Service
public class UserRoleStore {
    @Autowired
    private UserRoleService userRoleService;

    public void addUserRole(UserRole userRole) {
        userRoleService.addUserRole(userRole);
    }

    public void updateUserRole(UserRole userRole) {
        userRoleService.updateUserRole(userRole);
    }

    public List<UserRole> getAllUserRoles() {
        return userRoleService.getAllUserRoles();
    }

    public void deleteUserRole(int id) {
        userRoleService.deleteUserRole(id);
    }
}
