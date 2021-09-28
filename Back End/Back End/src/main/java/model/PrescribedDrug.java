package model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "prescribedDrug")
public class PrescribedDrug {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn
    private Drug drug;

    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Prescription prescription;

    @Column
    private String quantity;

    @Column
    private String dose;

    @Column
    private String howToUse;

    public PrescribedDrug() {};

    public int getId() {
        return id;
    }

    public Drug getDrug() {
        return drug;
    }

    public Prescription getPrescription() {
        return prescription;
    }

    public String getQuantity() {
        return quantity;
    }

    public String getDose() {
        return dose;
    }

    public String getHowToUse() {
        return howToUse;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setDrug(Drug drug) {
        this.drug = drug;
    }

    public void setPrescription(Prescription prescription) {
        this.prescription = prescription;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public void setDose(String dose) {
        this.dose = dose;
    }

    public void setHowToUse(String howToUse) {
        this.howToUse = howToUse;
    }
}
