package resumemukhtarovich.resume.md.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import resumemukhtarovich.resume.md.Entity.Lit;
import resumemukhtarovich.resume.md.Repository.LitRepository;
import resumemukhtarovich.resume.md.Service.LitService;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.LitDto;

import java.util.List;

@RestController
@RequestMapping("/api/lit")
@RequiredArgsConstructor
public class LitController {
    private final LitRepository litRepository;
    private final LitService litService;

    @PostMapping
    public HttpEntity<?> saveLit(@RequestBody LitDto dto) {
        ApiResponse apiResponse = litService.addLit(dto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteLit(@PathVariable Integer id) {
        ApiResponse apiResponse = litService.deleteLit(id);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @GetMapping
    public HttpEntity<?> get() {
        List<Lit> all = litRepository.findAll();
        return ResponseEntity.ok(all);
    }
}
