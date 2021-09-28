package controller;

import model.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import service.PatientService;
import store.PatientStore;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "/")

@CrossOrigin
public class PatientController {
    @Autowired
    private PatientStore patientStore;

    @PreAuthorize("hasAnyRole('ADMIN', 'DOCTOR')")
    @RequestMapping(path = "patients", method = RequestMethod.GET)
    public List<Patient> getAllPatients() {
        return patientStore.getAllPatients();
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "patients", method = RequestMethod.POST)
    public void addPatient(@RequestBody Patient patient) {
        patientStore.addPatient(patient);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "patients", method = RequestMethod.PUT)
    public void updatePatient(@RequestBody Patient patient) {
        patientStore.updatePatient(patient);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "patients/{id}", method = RequestMethod.DELETE)
    public void deletePatient(@PathVariable int id) {
        patientStore.deletePatient(id);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "patients/findbyname/", method = RequestMethod.GET)
    public List<Patient> findPatientByName(@RequestParam String name) {
        return patientStore.findPatientByName(name);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "patients/findbyid/", method = RequestMethod.GET)
    public Patient findPatientById(@RequestParam int id) {
        return patientStore.findPatientById(id);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "patients/findbybirthdate/", method = RequestMethod.GET)
    public List<Patient> findPatientByBirthdate(@RequestParam String birthdate) {
        try {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
            return patientStore.findPatientByBirthdate(simpleDateFormat.parse(birthdate));
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

//    @RequestMapping(path = "patients/findbybirthdate/{date}", method = RequestMethod.GET)
//    public List<Patient> getPatientsByDateOfBirth(@PathVariable("date") Date date) {
//        try {
//            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
//            return patientStore.findPatientByBirthdate(simpleDateFormat.parse(date));
//        } catch (ParseException e) {
//            e.printStackTrace();
//            return null;
//        }
//    }
}
