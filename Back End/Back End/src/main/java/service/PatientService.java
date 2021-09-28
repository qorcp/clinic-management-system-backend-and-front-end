package service;

import model.Patient;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.PatientStore;

import java.util.Date;
import java.util.List;

@Transactional
@Service
public class PatientService {
    @Autowired
    private SessionFactory sessionFactory;

    public void addPatient(Patient patient) {
        sessionFactory.getCurrentSession().save(patient);
    }

    public void updatePatient(Patient patient) {
        sessionFactory.getCurrentSession().update(patient);
    }

    public List<Patient> getAllPatients(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient");
        query.setMaxResults(10);
        return query.list();
    }

    public void deletePatient(int id) {
        Patient patient = findPatientById(id);
        sessionFactory.getCurrentSession().delete(patient);
    }

    public List<Patient> findPatientByName(String name) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient p where p.name like :name");
        query.setMaxResults(10);
        query.setString(
                "name", "%" + name + "%");
        return query.list();
    }

    public Patient findPatientById(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient p where p.id = :id");
        query.setInteger("id", id);
        return (Patient) query.uniqueResult();
    }

    public List<Patient> findPatientByBirthdate(Date birthdate) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient p where p.birthdate = :birthdate");
        query.setMaxResults(10);
        query.setDate("birthdate", birthdate);
        return query.list();
    }
}
