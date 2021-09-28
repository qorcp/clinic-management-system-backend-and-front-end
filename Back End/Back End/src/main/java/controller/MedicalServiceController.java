package controller;

import model.MedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import store.MedicalServiceStore;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class MedicalServiceController {
    @Autowired
    private MedicalServiceStore medicalServiceStore;

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "medicalservices", method = RequestMethod.GET)
    public List<MedicalService> getAllMedicalServices() {
        return medicalServiceStore.getAllMedicalServices();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "medicalservices", method = RequestMethod.POST)
    public void addMedicalService(@RequestBody MedicalService medicalService) {
        medicalServiceStore.addMedicalService(medicalService);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "medicalservices", method = RequestMethod.PUT)
    public void updateMedicalService(@RequestBody MedicalService medicalService) {
        medicalServiceStore.updateMedicalService(medicalService);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "medicalservices/{id}", method = RequestMethod.DELETE)
    public void deleteMedicalService(@PathVariable int id) {
        medicalServiceStore.deleteMedicalService(id);
    }
}
