package store;

import model.LabTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import service.LabTestService;

import java.util.List;

@Transactional
@Service
public class LabTestStore {
    @Autowired
    private LabTestService labTestService;

    public void addLabTest(LabTest labTest) {
        labTestService.addLabTest(labTest);
    }

    public void updateLabTest(LabTest labTest) {
        labTestService.updateLabTest(labTest);
    }

    public List<LabTest> getAllLabTests() {
        return labTestService.getAllLabTests();
    }

    public LabTest findLabTestById(int id) {
        return labTestService.findLabTestById(id);
    }

    public void deleteLabTest(int id) {
        labTestService.deleteLabTest(id);
    }
}
