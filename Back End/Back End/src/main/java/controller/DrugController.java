package controller;

import model.Drug;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import service.DrugService;
import store.DrugStore;

import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class DrugController {
    @Autowired
    private DrugStore drugStore;

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "drugs", method = RequestMethod.GET)
    public List<Drug> getAllDrugs() {
        return drugStore.getAllDrugs();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "drugs", method = RequestMethod.POST)
    public void addDrug(@RequestBody Drug drug) {
        drugStore.addDrug(drug);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "drugs", method = RequestMethod.PUT)
    public void updateDrug(@RequestBody Drug drug) {
        drugStore.updateDrug(drug);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @RequestMapping(path = "drugs/{id}", method = RequestMethod.DELETE)
    public void deleteDrug(@PathVariable int id) {
        drugStore.deleteDrug(id);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "drugs/findbyid/", method = RequestMethod.GET)
    public Drug findDrugById(@RequestParam int id) {
        return drugStore.findDrugById(id);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "drugs/findbyname/", method = RequestMethod.GET)
    public List<Drug> findDrugByName(@RequestParam String name) {
        return drugStore.findDrugByName(name);
    }
}

