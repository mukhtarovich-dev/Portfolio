package resumemukhtarovich.resume.md.pyload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PhotoDto {
    private String name;
    private UUID photoId;
}
