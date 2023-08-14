package resumemukhtarovich.resume.md.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import resumemukhtarovich.resume.md.Entity.Project;
import resumemukhtarovich.resume.md.Repository.ProjectRepository;
import resumemukhtarovich.resume.md.Service.ProjectService;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.ProjectDto;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/project")
public class ProjectController {
    private final ProjectService projectService;
    private final ProjectRepository projectRepository;

    @PostMapping
    public HttpEntity<?> saveProject(@RequestBody ProjectDto dto) {
        try {
            ApiResponse apiResponse = projectService.addProject(dto);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return null;
        }
    }
    @DeleteMapping
    public HttpEntity<?> deleteProject(@RequestParam Integer id) {
        ApiResponse apiResponse = projectService.deleteProject(id);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @GetMapping
    private HttpEntity<?> getProject() {
        List<Project> all = projectRepository.findAll();
        return ResponseEntity.ok(all);
    }

}
