package resumemukhtarovich.resume.md.Entity;

import lombok.*;
import resumemukhtarovich.resume.md.Entity.templete.AbsNameEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Project extends AbsNameEntity {
    @Column(nullable = false)
    private String link;
    private String description;
}
