package service;

import authentication.Role;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class RoleService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addRole(Role role) {
        sessionFactory.getCurrentSession().save(role);
    }

    public void updateDrug(Role role) {
        sessionFactory.getCurrentSession().update(role);
    }

    public List<Role> getAllRoles() {
        Query query = sessionFactory.getCurrentSession().createQuery("from Role");
        return query.list();
    }

    public Role findRoleById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Role r where r.id = :id");
        query.setInteger("id", id);
        return (Role) query.uniqueResult();
    }

    public void deleteRole(int id) {
        Role role = findRoleById(id);
        sessionFactory.getCurrentSession().delete(role);
    }
}
