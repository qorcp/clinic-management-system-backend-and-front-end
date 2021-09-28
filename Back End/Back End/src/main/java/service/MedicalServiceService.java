package service;

import model.MedicalService;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.MethodInvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class MedicalServiceService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addMedicalService(MedicalService medicalService) {
        sessionFactory.getCurrentSession().save(medicalService);
    }

    public void updateMedicalService(MedicalService medicalService) {
        sessionFactory.getCurrentSession().update(medicalService);
    }

    public List<MedicalService> getAllMedicalServices() {
        Query query = sessionFactory.getCurrentSession().createQuery("from MedicalService");
        return query.list();
    }

    public MedicalService findMedicalServiceById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from MedicalService m where m.id = :id");
        query.setInteger("id", id);
        return (MedicalService) query.uniqueResult();
    }

    public void deleteMedicalService(int id) {
        sessionFactory.getCurrentSession().delete(findMedicalServiceById(id));
    }
}
