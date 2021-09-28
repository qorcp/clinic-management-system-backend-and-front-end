package service;

import model.LabMed;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class LabMedService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addLabMed(LabMed labMed) {
        sessionFactory.getCurrentSession().save(labMed);
    }

    public void updateLabMed(LabMed labMed) {
        sessionFactory.getCurrentSession().update(labMed);
    }

    public List<LabMed> getAllLabMeds() {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabMed");
        return query.list();
    }

    public LabMed findLabMedById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabMed l where l.id = :id");
        query.setInteger("id", id);
        return (LabMed) query.uniqueResult();
    }

    public void deleteLabMed(int id) {
        sessionFactory.getCurrentSession().delete(findLabMedById(id));
    }
}
