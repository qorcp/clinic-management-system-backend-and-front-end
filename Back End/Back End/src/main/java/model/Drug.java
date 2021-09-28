package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "drug")
public class Drug {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private String usage;

//    @OneToMany(mappedBy = "drug", fetch = FetchType.EAGER)
//    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
//    @JsonIgnore
//    private List<PrescribedDrug> prescribedDrugs = new ArrayList<>();

    public Drug() {

    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUsage() {
        return usage;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsage(String usage) {
        this.usage = usage;
    }

//    public List<PrescribedDrug> getPrescribedDrugs() {
//        return prescribedDrugs;
//    }
//
//    public void setPrescribedDrugs(List<PrescribedDrug> prescribedDrugs) {
//        this.prescribedDrugs = prescribedDrugs;
//    }
}
