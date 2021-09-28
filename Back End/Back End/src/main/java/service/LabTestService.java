package service;

import model.LabMed;
import model.LabTest;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class LabTestService {
    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addLabTest(LabTest labTest) {
        for (LabMed labMed : labTest.getLabMeds()) {
            labMed.setLabTest(labTest);
        }
        labTest.setLabMeds(labTest.getLabMeds());
        sessionFactory.getCurrentSession().save(labTest);
    }

    public void updateLabTest(LabTest labTest) {
        for (LabMed labMed : labTest.getLabMeds()) {
            labMed.setLabTest(labTest);
        }
        sessionFactory.getCurrentSession().update(labTest);
    }

    public List<LabTest> getAllLabTests() {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabTest");
        return query.list();
    }

    public LabTest findLabTestById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabTest l where l.id = :id");
        query.setInteger("id", id);
        return (LabTest) query.uniqueResult();
    }

    public void deleteLabTest(int id) {
        sessionFactory.getCurrentSession().delete(findLabTestById(id));
    }
}
