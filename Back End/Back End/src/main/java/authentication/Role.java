package authentication;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @OneToMany(mappedBy = "role",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private List<UserRole> userRoles = new ArrayList<>();

    public Role() {
    }

    @JsonIgnore
    public List<UserRole> getUserRoles() {
        return userRoles;
    }

    @JsonProperty
    public void setUserRoles(List<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
