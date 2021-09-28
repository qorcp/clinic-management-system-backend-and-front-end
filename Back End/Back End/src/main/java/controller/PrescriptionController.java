package controller;

import model.Prescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import service.PrescriptionService;
import store.PrescriptionStore;

import javax.print.DocFlavor;
import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class PrescriptionController {
    @Autowired
    private PrescriptionStore prescriptionStore;

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "prescriptions", method = RequestMethod.GET)
    public List<Prescription> getAllPrescriptions() {
        return prescriptionStore.getAllPrescriptions();
    }

   @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "prescriptions", method = RequestMethod.POST)
    public void addPrescription(@RequestBody Prescription prescription) {
        prescriptionStore.addPrescription(prescription);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "prescriptions", method = RequestMethod.PUT)
    public void updatePrescription(@RequestBody Prescription prescription) {
        prescriptionStore.updatePrescription(prescription);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "prescriptions/{id}", method = RequestMethod.DELETE)
    public void deletePrescription(@PathVariable int id) {
        prescriptionStore.deletePrescription(id);
    }
}
