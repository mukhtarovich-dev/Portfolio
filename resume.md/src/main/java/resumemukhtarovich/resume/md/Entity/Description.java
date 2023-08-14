package resumemukhtarovich.resume.md.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import resumemukhtarovich.resume.md.Entity.templete.AbsNameEntity;
import javax.persistence.Column;
import javax.persistence.Entity;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Description extends AbsNameEntity {
    @Column(nullable = false)
    private String description;
}
