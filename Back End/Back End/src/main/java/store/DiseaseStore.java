package store;

import model.Disease;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.DiseaseService;

import java.util.List;

@Transactional
@Service
public class DiseaseStore {
    @Autowired
    private DiseaseService diseaseService;

    public void addDisease(Disease disease) {
        diseaseService.addDisease(disease);
    }

    public void updateDisease(Disease disease) {
        diseaseService.updateDisease(disease);
    }

    public List<Disease> getAllDiseases() {
        return diseaseService.getAllDiseases();
    }

    public Disease findDiseaseById(int id) {
        return diseaseService.findDiseaseById(id);
    }

    public List<Disease> findDiseaseByName(String name) {
        return diseaseService.findDiseaseByName(name);
    }

    public void deleteDisease(int id) {
        diseaseService.deleteDisease(id);
    }
}
