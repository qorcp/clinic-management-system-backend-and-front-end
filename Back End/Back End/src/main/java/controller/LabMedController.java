package controller;

import model.LabMed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import store.LabMedStore;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class LabMedController {
    @Autowired
    private LabMedStore labMedStore;

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "labmeds", method = RequestMethod.GET)
    public List<LabMed> getAllLabMeds() {
        return labMedStore.getAllLabMeds();
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "labmeds", method = RequestMethod.POST)
    public void addLabMed(@RequestBody LabMed labMed) {
        labMedStore.addLabMed(labMed);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "labmeds", method = RequestMethod.PUT)
    public void updateLabMed(@RequestBody LabMed labMed) {
        labMedStore.updateLabMed(labMed);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "labmeds/{id}", method = RequestMethod.DELETE)
    public void deleteLabMed(@PathVariable int id) {
        labMedStore.deleteLabMed(id);
    }
}
