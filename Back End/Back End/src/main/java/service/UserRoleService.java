package service;

import authentication.UserRole;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class UserRoleService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addUserRole(UserRole userRole) {
        sessionFactory.getCurrentSession().save(userRole);
    }

    public void updateUserRole(UserRole userRole) {
        sessionFactory.getCurrentSession().update(userRole);
    }

    public List<UserRole> getAllUserRoles() {
        Query query = sessionFactory.getCurrentSession().createQuery("from UserRole");
        return query.list();
    }

    public UserRole findUserRoleById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from UserRole us where us.id = :id");
        query.setInteger("id", id);
        return (UserRole) query.uniqueResult();
    }

    public void deleteUserRole(int id) {
        UserRole userRole = findUserRoleById(id);
        sessionFactory.getCurrentSession().delete(userRole);
    }

    public List<UserRole> getAllUserRolePerUser(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from UserRole u where u.user.id = :id");
        query.setInteger("id", id);
        return query.list();
    }
}
