package resumemukhtarovich.resume.md.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import resumemukhtarovich.resume.md.Entity.Photo;

import javax.persistence.criteria.CriteriaBuilder;

@CrossOrigin
public interface PhotoRepository extends JpaRepository<Photo, Integer> {
}
