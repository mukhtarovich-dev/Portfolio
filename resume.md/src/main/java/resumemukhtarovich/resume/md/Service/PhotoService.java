package resumemukhtarovich.resume.md.Service;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import resumemukhtarovich.resume.md.Entity.Photo;
import resumemukhtarovich.resume.md.Repository.PhotoRepository;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.PhotoDto;

@Service
@RequiredArgsConstructor
public class PhotoService {
    private final PhotoRepository photoRepository;

    public ApiResponse addPhoto(PhotoDto dto) {
        try {
            Photo photo = new Photo(dto.getPhotoId());
            photo.setName(dto.getName());
            photoRepository.save(photo);
            return new ApiResponse("Saqlandi", true);
        } catch (Exception e) {
            return new ApiResponse("Xatolik", false);
        }
    }

    public ApiResponse deletePhoto(Integer id) {
        try {
            Photo photo = photoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("get"));
            photoRepository.delete(photo);
            return new ApiResponse("O'chirildi", true);
        } catch (Exception e) {
            return new ApiResponse("Xatolik", false);
        }
    }
}
