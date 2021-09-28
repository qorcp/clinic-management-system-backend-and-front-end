package controller;

import model.LabTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import store.LabTestStore;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class LabTestController {
    @Autowired
    private LabTestStore labTestStore;

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "labtests", method = RequestMethod.GET)
    public List<LabTest> getAllLabTests() {
        return labTestStore.getAllLabTests();
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "labtests", method = RequestMethod.POST)
    public void addLabTest(@RequestBody LabTest labTest) {
        labTestStore.addLabTest(labTest);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "labtests", method = RequestMethod.PUT)
    public void updateLabTest(@RequestBody LabTest labTest) {
        labTestStore.updateLabTest(labTest);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "labtests/{id}", method = RequestMethod.DELETE)
    public void deleteLabTest(@PathVariable int id) {
        labTestStore.deleteLabTest(id);
    }
}
