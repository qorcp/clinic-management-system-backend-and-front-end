package store;

import model.Drug;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.DrugService;

import java.util.List;

@Transactional
@Service
public class DrugStore {
    @Autowired
    private DrugService drugService;

    public void addDrug(Drug drug) {
        drugService.addDrug(drug);
    }

    public void updateDrug(Drug drug) {
        drugService.updateDrug(drug);
    }

    public List<Drug> getAllDrugs() {
        return drugService.getAllDrugs();
    }

    public void deleteDrug(int id) {
        drugService.deleteDrug(id);
    }

    public Drug findDrugById(int id) {
        return drugService.findDrugById(id);
    }

    public List<Drug> findDrugByName(String name) {
        return drugService.findDrugByName(name);
    }
}
