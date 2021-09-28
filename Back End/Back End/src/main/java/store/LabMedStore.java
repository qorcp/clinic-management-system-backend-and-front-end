package store;

import model.LabMed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.LabMedService;
import java.util.List;

@Transactional
@Service
public class LabMedStore {
    @Autowired
    LabMedService labMedService;

    public void addLabMed(LabMed labMed) {
        labMedService.addLabMed(labMed);
    }

    public void updateLabMed(LabMed labMed) {
        labMedService.updateLabMed(labMed);
    }

    public List<LabMed> getAllLabMeds() {
        return labMedService.getAllLabMeds();
    }

    public LabMed findLabMedById(int id) {
        return labMedService.findLabMedById(id);
    }

    public void deleteLabMed(int id) {
        labMedService.deleteLabMed(id);
    }
}
