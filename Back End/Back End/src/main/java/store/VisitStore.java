package store;

import model.Visit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.VisitService;

import java.util.Date;
import java.util.List;

@Transactional
@Service
public class VisitStore {
    @Autowired
    private VisitService visitService;

    public void addVisitNewPatient(Visit visit) {
        visitService.addVisitNewPatient(visit);
    }

    public void addVisitReturningPatient(Visit visit) {
        visitService.addVisitReturningPatient(visit);
    }

    public void updateVisit(Visit visit) {
        visitService.updateVisit(visit);
    }

    public List<Visit> getAllVisits() {
        return visitService.getAllVisits();
    }

    public void deleteVisit(int id) {
        visitService.deleteVisit(id);
    }

    public List<Visit> findVisitByDate(Date date) {
        return visitService.findVisitByDate(date);
    }

    public List<Visit> findVisitByPatient(int id) {
        return visitService.findVisitByPatient(id);
    }
}
