package resumemukhtarovich.resume.md.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import resumemukhtarovich.resume.md.Entity.Description;

import java.util.Optional;
@CrossOrigin
public interface DescriptionRepository extends JpaRepository<Description, Integer> {
    Optional<Description> findByName(String name);
    boolean existsByName(String name);
}
