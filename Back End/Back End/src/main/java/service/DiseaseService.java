package service;

import model.Disease;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class DiseaseService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addDisease(Disease disease) {
        sessionFactory.getCurrentSession().save(disease);
    }

    public void updateDisease(Disease disease) {
        sessionFactory.getCurrentSession().update(disease);
    }

    public List<Disease> getAllDiseases() {
        Query query = sessionFactory.getCurrentSession().createQuery("from Disease");
        return query.list();
    }

    public Disease findDiseaseById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Disease d where d.id = :id");
        query.setInteger("id", id);
        return (Disease) query.uniqueResult();
    }

    public List<Disease> findDiseaseByName(String name) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Disease d where d.name like :name");
        query.setString(
                "name", "%" + name + "%");
        return query.list();
    }

    public void deleteDisease(int id) {
        Disease disease = findDiseaseById(id);
        sessionFactory.getCurrentSession().delete(disease);
    }
}
