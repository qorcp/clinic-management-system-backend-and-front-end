package controller;


import model.Visit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import service.VisitService;
import store.VisitStore;

import javax.print.DocFlavor;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@RestController
@RequestMapping(path = "/")
@CrossOrigin
public class VisitController {
    @Autowired
    private VisitStore visitStore;

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "visits", method = RequestMethod.GET)
    public List<Visit> getAllVisits() {
        return visitStore.getAllVisits();
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "visits/newpatient", method = RequestMethod.POST)
    public void addVisitNewPatient(@RequestBody Visit visit) {
        visitStore.addVisitNewPatient(visit);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "visits/returningpatient", method = RequestMethod.POST)
    public void addVisitReturningPatient(@RequestBody Visit visit) {
        visitStore.addVisitReturningPatient(visit);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "visits", method = RequestMethod.PUT)
    public void updateVisit(@RequestBody Visit visit) {
        visitStore.updateVisit(visit);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "visits/{id}", method = RequestMethod.DELETE)
    public void deleteVisit(@PathVariable int id) {
        visitStore.deleteVisit(id);
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "visits/findbydate/", method = RequestMethod.GET)
    public List<Visit> findVisitByDate(@RequestParam String date) {
        try {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
            return visitStore.findVisitByDate(simpleDateFormat.parse(date));
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

    @PreAuthorize("hasAnyRole('DOCTOR', 'ADMIN')")
    @RequestMapping(path = "visits/findbypatient/", method = RequestMethod.GET)
    public List<Visit> findVisitByPatient(@RequestParam int id) {
        return visitStore.findVisitByPatient(id);
    }
}
