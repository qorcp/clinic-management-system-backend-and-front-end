package controller;

import model.Disease;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import store.DiseaseStore;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class DiseaseController {
    @Autowired
    private DiseaseStore diseaseStore;

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "diseases", method = RequestMethod.GET)
    public List<Disease> getAllDiseases() {
        return diseaseStore.getAllDiseases();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "diseases", method = RequestMethod.POST)
    public void addDisease(@RequestBody Disease disease) {
        diseaseStore.addDisease(disease);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "diseases/", method = RequestMethod.GET)
    public List<Disease> findDiseaseByName(@RequestParam String name) {
        return diseaseStore.findDiseaseByName(name);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "diseases", method = RequestMethod.PUT)
    public void updateDisease(@RequestBody Disease disease) {
        diseaseStore.updateDisease(disease);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "diseases/{id}", method = RequestMethod.DELETE)
    public void deleteDisease(@PathVariable int id) {
        diseaseStore.deleteDisease(id);
    }
}
