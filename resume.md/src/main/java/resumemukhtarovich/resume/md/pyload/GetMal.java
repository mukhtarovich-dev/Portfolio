package resumemukhtarovich.resume.md.pyload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import resumemukhtarovich.resume.md.Entity.User;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GetMal {
    private User user;
    private ResToken resToken;
}
