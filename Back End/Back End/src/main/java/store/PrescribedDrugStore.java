package store;

import model.PrescribedDrug;
import org.hibernate.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.PrescribedDrugService;
import service.PrescriptionService;

import java.util.List;

@Transactional
@Service
public class PrescribedDrugStore {
    @Autowired
    PrescribedDrugService prescribedDrugService;

    public void addPrescribedDrug(PrescribedDrug prescribedDrug) {
        prescribedDrugService.addPrescribedDrug(prescribedDrug);
    }

    public void updatePrescribedDrug(PrescribedDrug prescribedDrug) {
        prescribedDrugService.updatePrescribedDrug(prescribedDrug);
    }

    public List<PrescribedDrug> getAllPrescribedDrugs() {
        return prescribedDrugService.getAllPrescribedDrugs();
    }

    public PrescribedDrug findPrescribedDrugById(int id) {
        return prescribedDrugService.findPrescribedDrugById(id);
    }

    public void deletePrescribedDrug(int id) {
        prescribedDrugService.deletePrescribedDrug(id);
    }

    public List<PrescribedDrug> findPrescribedDrugByPrescription(int id) {
        return prescribedDrugService.findPrescribedDrugByPrescription(id);
    }


}
