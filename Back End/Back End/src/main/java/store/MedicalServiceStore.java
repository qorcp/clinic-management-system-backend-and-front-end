package store;

import model.MedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.MedicalServiceService;

import java.util.List;

@Transactional
@Service
public class MedicalServiceStore {
    @Autowired
    private MedicalServiceService medicalServiceService;

    public void addMedicalService(MedicalService medicalService) {
        medicalServiceService.addMedicalService(medicalService);
    }

    public void updateMedicalService(MedicalService medicalService) {
        medicalServiceService.updateMedicalService(medicalService);
    }

    public List<MedicalService> getAllMedicalServices() {
        return medicalServiceService.getAllMedicalServices();
    }

    public MedicalService findMedicalServiceById(int id) {
        return medicalServiceService.findMedicalServiceById(id);
    }

    public void deleteMedicalService(int id) {
        medicalServiceService.deleteMedicalService(id);
    }
}
