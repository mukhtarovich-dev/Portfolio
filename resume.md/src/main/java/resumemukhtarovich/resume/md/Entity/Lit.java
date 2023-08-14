package resumemukhtarovich.resume.md.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import resumemukhtarovich.resume.md.Entity.templete.AbsNameEntity;

import javax.persistence.Entity;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Lit extends AbsNameEntity {
    private UUID photoId;
}
