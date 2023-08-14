package resumemukhtarovich.resume.md.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import resumemukhtarovich.resume.md.Entity.Lit;
@CrossOrigin
public interface LitRepository extends JpaRepository<Lit, Integer> {
}
