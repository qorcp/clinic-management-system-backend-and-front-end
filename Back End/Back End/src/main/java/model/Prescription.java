package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "prescription")
public class Prescription {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(fetch = FetchType.EAGER)
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<PrescribedDrug> prescribedDrugs = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    private Visit visit;

    public Prescription() {};

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<PrescribedDrug> getPrescribedDrugs() {
        return prescribedDrugs;
    }

    public void setPrescribedDrugs(List<PrescribedDrug> prescribedDrugs) {
        this.prescribedDrugs = prescribedDrugs;
    }

    public void removePrescribedDrugById(int id) {
        for (PrescribedDrug prescribedDrug : prescribedDrugs) {
            if (prescribedDrug.getId() == id) {
                prescribedDrugs.remove(prescribedDrug);
            }
        }
    }

    @JsonIgnore
    public Visit getVisit() {
        return visit;
    }

    @JsonProperty
    public void setVisit(Visit visit) {
        this.visit = visit;
    }
}
