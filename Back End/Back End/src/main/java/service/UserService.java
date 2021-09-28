package service;

import authentication.Users;
import authentication.UserRole;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class UserService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addUser(Users users) {
        for (UserRole userRole : users.getUserRoles()) {
            userRole.setUsers(users);
        }
        users.setUserRoles(users.getUserRoles());
        sessionFactory.getCurrentSession().save(users);
    }

    public void updateUser(Users users) {
        sessionFactory.getCurrentSession().update(users);
    }

    public List<Users> getAllUsers() {
        Query query = sessionFactory.getCurrentSession().createQuery("from Users");
        return query.list();
    }

   public Users findUserByUsername(String username) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Users u where u.username like :username");
       query.setString(
               "username", "%" + username + "%");
        return (Users) query.uniqueResult();
   }

   public void deleteUser(String username) {
        Users users = findUserByUsername(username);
        sessionFactory.getCurrentSession().delete(users);
   }
}
