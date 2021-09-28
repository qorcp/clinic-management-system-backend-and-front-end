package controller;

import model.PrescribedDrug;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.method.P;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import service.PrescribedDrugService;
import store.PrescribedDrugStore;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class PrescribedDrugController {
    @Autowired
    private PrescribedDrugStore prescribedDrugStore;

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "prescribedDrugs", method = RequestMethod.GET)
    public List<PrescribedDrug> getAllPrescribedDrugs() {
        return prescribedDrugStore.getAllPrescribedDrugs();
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "prescribedDrugs", method = RequestMethod.POST)
    public void addPrescribedDrug(@RequestBody PrescribedDrug prescribedDrug) {
        prescribedDrugStore.addPrescribedDrug(prescribedDrug);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "prescribedDrugs", method = RequestMethod.PUT)
    public void updatePrescribedDrug(@RequestBody PrescribedDrug prescribedDrug) {
        prescribedDrugStore.updatePrescribedDrug(prescribedDrug);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "prescribedDrugs/{id}", method = RequestMethod.DELETE)
    public void deletePrescribedDrug(@PathVariable int id) {
        prescribedDrugStore.deletePrescribedDrug(id);
    }

    @RequestMapping(path = "prescribedDrugs/findbyprescription/", method = RequestMethod.GET)
    public List<PrescribedDrug> findPrescribedDrugByPrescription(@RequestParam int id) {
        return prescribedDrugStore.findPrescribedDrugByPrescription(id);
    }
}
