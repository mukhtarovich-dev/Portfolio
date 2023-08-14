package resumemukhtarovich.resume.md.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import resumemukhtarovich.resume.md.Entity.Lit;
import resumemukhtarovich.resume.md.Repository.LitRepository;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.LitDto;


@Service
@RequiredArgsConstructor
public class LitService {
    private final LitRepository litRepository;

    public ApiResponse addLit(LitDto dto) {
        try {
            Lit lit = new Lit(dto.getPhotoId());
            lit.setName(dto.getName());
            litRepository.save(lit);
            return new ApiResponse("Saqlandi", true);
        } catch (Exception e) {
            return new ApiResponse("Xatolik", false);
        }
    }

    public ApiResponse deleteLit(Integer id) {
        try {
            Lit lit = litRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("get"));
            litRepository.delete(lit);
            return new ApiResponse("O'chiritldi", true);
        } catch (Exception e) {
            return new ApiResponse("Xatolik", false);

        }
    }
}