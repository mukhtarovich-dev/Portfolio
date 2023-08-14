package resumemukhtarovich.resume.md.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import resumemukhtarovich.resume.md.Entity.Project;
import resumemukhtarovich.resume.md.Repository.ProjectRepository;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.ProjectDto;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ApiResponse addProject(ProjectDto dto) {
        try {
            Project build = Project.builder()
                    .link(dto.getLink())
                    .description(dto.getDescription())
                    .build();
            build.setName(dto.getName());
            projectRepository.save(build);
            return new ApiResponse("saqlandi", true);
        } catch (Exception e) {
            return new ApiResponse("Project saqlashda Xatolik", false);
        }
    }

    public ApiResponse deleteProject(Integer id) {
        try {
            Project project = projectRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getProject"));
            projectRepository.delete(project);
            return new ApiResponse("O'chirildi", true);
        } catch (Exception e) {
            return new ApiResponse("O'chirishda Xatolik", false);
        }
    }
}