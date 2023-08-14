package resumemukhtarovich.resume.md.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import resumemukhtarovich.resume.md.Entity.Project;
@CrossOrigin
public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
