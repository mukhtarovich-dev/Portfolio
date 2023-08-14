package resumemukhtarovich.resume.md.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import resumemukhtarovich.resume.md.Entity.Photo;
import resumemukhtarovich.resume.md.Repository.PhotoRepository;
import resumemukhtarovich.resume.md.Service.PhotoService;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.PhotoDto;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/photo")
public class PhotoController {
    private final PhotoService photoService;
    private final PhotoRepository repository;

    @PostMapping
    public HttpEntity<?> add(@RequestBody PhotoDto dto) {
        ApiResponse apiResponse = photoService.addPhoto(dto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> delete(@PathVariable Integer id) {
        ApiResponse apiResponse = photoService.deletePhoto(id);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @GetMapping
    public HttpEntity<?> get() {
        List<Photo> all = repository.findAll();
        return ResponseEntity.ok(all);
    }
}