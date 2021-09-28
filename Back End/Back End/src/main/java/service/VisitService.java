package service;

import controller.PatientController;
import controller.PrescriptionController;
import model.LabMed;
import model.LabTest;
import model.Patient;
import model.Visit;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Transactional
@Service
public class VisitService {
    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private PatientService patientService;

    @Autowired
    private LabTestService labTestService;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addVisitNewPatient(Visit visit) {
        patientService.addPatient(visit.getPatient());
        for (LabTest labTest : visit.getLabTests()) {
            labTestService.addLabTest(labTest);
            labTest.setVisit(visit);
        }
        sessionFactory.getCurrentSession().save(visit);
    }

    public void addVisitReturningPatient(Visit visit) {
        for (LabTest labTest : visit.getLabTests()) {
            labTestService.addLabTest(labTest);
            labTest.setVisit(visit);
        }
        sessionFactory.getCurrentSession().save(visit);
    }

    public void updateVisit(Visit visit) {
        if (visit.getLabTests() != null) {
            for (LabTest labTest : visit.getLabTests()) {
                labTest.setVisit(visit);
                for (LabMed labMed : labTest.getLabMeds()) {
                    labMed.setLabTest(labTest);
                }
            }
        }
        sessionFactory.getCurrentSession().update(visit);
    }

    public List<Visit> getAllVisits(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Visit");
        query.setMaxResults(10);
        return query.list();
    }

    public void deleteVisit(int id) {
        Visit visit = findVisitById(id);
        sessionFactory.getCurrentSession().delete(visit);
    }

    public List<Visit> findVisitByDate(Date date) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Visit v where v.date =:date");
        query.setMaxResults(10);
        query.setDate("date", date);
        return query.list();
    }

    public List<Visit> findVisitByPatient(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Visit v where v.patient.id = :id");
        query.setMaxResults(10);
        query.setInteger("id", id);
        return query.list();
    }

    public Visit findVisitById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Visit v where v.id = :id");
        query.setInteger("id", id);
        return (Visit) query.uniqueResult();
    }
}
