package resumemukhtarovich.resume.md.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import resumemukhtarovich.resume.md.Entity.Description;
import resumemukhtarovich.resume.md.Repository.DescriptionRepository;
import resumemukhtarovich.resume.md.Service.DescriptionService;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.DescriptionDto;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/description")
public class DescriptionController {
    private final DescriptionService descriptionService;
    private final DescriptionRepository descriptionRepository;

    @PostMapping
    public HttpEntity<?> addDescription(@RequestBody DescriptionDto dto) {
        try {
            ApiResponse apiResponse = descriptionService.addDescription(dto);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("Maqola saqlashda hatolik", false));
        }
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editDescription(@PathVariable Integer id, @RequestBody DescriptionDto dto) {
        try {
            ApiResponse apiResponse = descriptionService.editDescription(id, dto);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 400).body(apiResponse);
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("Maqola tahrirlashda hatolik", false));
        }
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteDescription(@PathVariable Integer id) {
        try {
            ApiResponse apiResponse = descriptionService.deleteDescription(id);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("Maqola O'chirishda hatolik", false));
        }
    }

    @GetMapping
    public HttpEntity<?> getDescription() {
        try {
            List<Description> all = descriptionRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("Maqola korishda  hatolik", false));
        }
    }

    @GetMapping("/{name}")
    public HttpEntity<?> getONeDesc(@PathVariable String name) {
        try {
            Description description = descriptionRepository.findByName(name).orElseThrow(() -> new ResourceNotFoundException("get"));
            return ResponseEntity.ok(description);
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse("Maqola korishda  hatolik", false));

        }
    }
}
