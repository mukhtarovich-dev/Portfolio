package resumemukhtarovich.resume.md.Service;

import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.context.ApplicationContextException;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import resumemukhtarovich.resume.md.Entity.Description;
import resumemukhtarovich.resume.md.Repository.DescriptionRepository;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.DescriptionDto;

import javax.persistence.criteria.CriteriaBuilder;

@Service
@RequiredArgsConstructor
public class DescriptionService {
    private final DescriptionRepository descriptionRepository;

    public ApiResponse addDescription(DescriptionDto dto) {
        Description description = new Description(dto.getDescription());
        description.setName(dto.getName());
        descriptionRepository.save(description);
        return new ApiResponse("Saqlandi", true);
    }

    public ApiResponse deleteDescription(Integer id) {
        Description description = descriptionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("get"));
        descriptionRepository.delete(description);
        return new ApiResponse("O'chirildi", true);
    }

    public ApiResponse editDescription(Integer id, DescriptionDto dto) {
        Description description = descriptionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("get"));
        description.setDescription(dto.getDescription());
        description.setName(dto.getName());
        descriptionRepository.save(description);
        return new ApiResponse("Tahrilandi", true);
    }
}
