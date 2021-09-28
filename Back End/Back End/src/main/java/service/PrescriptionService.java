package service;

import model.PrescribedDrug;
import model.Prescription;
import model.Visit;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class PrescriptionService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addPrescription(Prescription prescription) {
        for (PrescribedDrug prescribedDrug : prescription.getPrescribedDrugs()) {
            prescribedDrug.setPrescription(prescription);
        }
        prescription.setPrescribedDrugs(prescription.getPrescribedDrugs());
        sessionFactory.getCurrentSession().save(prescription);
    }

    public void updatePrescription(Prescription prescription) {
        sessionFactory.getCurrentSession().update(prescription);
    }

    public List<Prescription> getAllPrescriptions() {
        Query query = sessionFactory.getCurrentSession().createQuery("from Prescription");
        query.setMaxResults(10);
        return query.list();
    }

    public Prescription findPrescriptionById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Prescription p where p.id = :id");
        query.setInteger("id", id);
        return (Prescription) query.uniqueResult();
    }

    public void deletePrescription(int id) {
        Prescription prescription = findPrescriptionById(id);
        for (PrescribedDrug prescribedDrug : prescription.getPrescribedDrugs()) {
            sessionFactory.getCurrentSession().delete(prescribedDrug);
        }
        sessionFactory.getCurrentSession().delete(prescription);
    }

//    public void removePrescribedDrugById(int id) {
//        Query query = sessionFactory.getCurrentSession().createQuery("from Prescription p where p.prescribed = :id")
//    }
}
