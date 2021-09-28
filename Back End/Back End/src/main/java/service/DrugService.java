package service;


import model.Drug;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.OneToOne;
import java.util.List;

@Transactional
@Service
public class DrugService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addDrug(Drug drug) {
        sessionFactory.getCurrentSession().save(drug);
    }

    public void updateDrug(Drug drug) {
        sessionFactory.getCurrentSession().update(drug);
    }

    public List<Drug> getAllDrugs() {
        Query query = sessionFactory.getCurrentSession().createQuery("from Drug");
        query.setMaxResults(10);
        return query.list();
    }

    public void deleteDrug(int id) {
        Drug drug = findDrugById(id);
        sessionFactory.getCurrentSession().delete(drug);
    }

    public Drug findDrugById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Drug d where d.id = :id");
        query.setInteger("id", id);
        return (Drug) query.uniqueResult();
    }

    public List<Drug> findDrugByName(String name) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Drug d where d.name like :name");
        query.setMaxResults(10);
        query.setString(
                "name", "%" + name + "%");
        return query.list();
    }
}
