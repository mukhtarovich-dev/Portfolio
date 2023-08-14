package resumemukhtarovich.resume.md.pyload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LitDto {
    private String name;
    private UUID photoId;
}
