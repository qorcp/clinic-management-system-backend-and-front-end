package store;

import model.Prescription;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.PrescriptionService;

import java.util.List;

@Transactional
@Service
public class PrescriptionStore {
    @Autowired
    private PrescriptionService prescriptionService;

    public void addPrescription(Prescription prescription) {
        prescriptionService.addPrescription(prescription);
    }

    public void updatePrescription(Prescription prescription) {
        prescriptionService.updatePrescription(prescription);
    }

    public List<Prescription> getAllPrescriptions() {
        return prescriptionService.getAllPrescriptions();
    }

    public void deletePrescription(int id) {
        prescriptionService.deletePrescription(id);
    }
}
