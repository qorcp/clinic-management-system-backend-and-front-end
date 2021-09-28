package service;

import model.Drug;
import model.PrescribedDrug;
import model.Prescription;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class PrescribedDrugService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addPrescribedDrug(PrescribedDrug prescribedDrug) {
        sessionFactory.getCurrentSession().save(prescribedDrug);
    }

    public void updatePrescribedDrug(PrescribedDrug prescribedDrug) {
        sessionFactory.getCurrentSession().update(prescribedDrug);
    }

    public List<PrescribedDrug> getAllPrescribedDrugs() {
        Query query = sessionFactory.getCurrentSession().createQuery("from PrescribedDrug");
        query.setMaxResults(10);
        return query.list();
    }

    public PrescribedDrug findPrescribedDrugById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from PrescribedDrug p where p.id = :id");
        query.setInteger("id", id);
        return (PrescribedDrug) query.uniqueResult();
    }

    public void deletePrescribedDrug(int id) {
        PrescribedDrug prescribedDrug = findPrescribedDrugById(id);
        Prescription prescription = prescribedDrug.getPrescription();


//        prescription.removePrescribedDrugById(id);


        sessionFactory.getCurrentSession().delete(prescribedDrug);
    }

    public List<PrescribedDrug> findPrescribedDrugByPrescription(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from PrescribedDrug p where p.prescription.id = :id");
        query.setInteger("id", id);
        return query.list();
    }
}
