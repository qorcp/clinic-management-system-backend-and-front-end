package store;

import model.Patient;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.PatientService;

import java.util.Date;
import java.util.List;

@Transactional
@Service
public class PatientStore {
    @Autowired
    private PatientService patientService;

    public void addPatient(Patient patient) {
        patientService.addPatient(patient);
    }

    public void updatePatient(Patient patient) {
        patientService.updatePatient(patient);
    }

    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    public void deletePatient(int id) {
        patientService.deletePatient(id);
    }

    public List<Patient> findPatientByName(String name) {
        return patientService.findPatientByName(name);
    }

    public Patient findPatientById(int id) {
        return patientService.findPatientById(id);
    }

    public List<Patient> findPatientByBirthdate(Date birthdate) {
        return patientService.findPatientByBirthdate(birthdate);
    }
}
