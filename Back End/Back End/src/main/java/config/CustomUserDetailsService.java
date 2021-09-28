package config;


import authentication.UserRole;
import authentication.UserRole;
import authentication.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import service.UserRoleService;
import service.UserService;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRoleService userRoleService;

    @Autowired
    UserService userService;

    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        Users appUser = userService.findUserByUsername(s);
        if (appUser == null) {
            System.out.println("User not found! " + s);
            throw new UsernameNotFoundException("User " + s + " was not found in the database");
        }
        System.out.println("Found User: " + appUser);
        final List<UserRole> userRoles = userRoleService.getAllUserRolePerUser(appUser.getId());

        List<GrantedAuthority> list = new ArrayList<>();
        if (userRoles != null) {
            for (final UserRole userRoleDB: userRoles) {
                // ROLE_USER, ROLE_ADMIN, ROLE_DOCTOR
                GrantedAuthority grantedAuthority = new GrantedAuthority() {
                    public String getAuthority() {
                        return userRoleDB.getRole().getName();
                    }
                };
                list.add(grantedAuthority);
            }}

        User user = new User(appUser.getUsername(), appUser.getPassword(),true,true,true, true, list );

        return user;

    }
}
