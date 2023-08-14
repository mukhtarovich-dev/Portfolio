package resumemukhtarovich.resume.md.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import resumemukhtarovich.resume.md.Entity.Message;
@CrossOrigin
public interface MessageRepository extends JpaRepository<Message, Integer> {
}
