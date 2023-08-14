package resumemukhtarovich.resume.md.Component;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import resumemukhtarovich.resume.md.Entity.Enums.RoleName;
import resumemukhtarovich.resume.md.Entity.Role;
import resumemukhtarovich.resume.md.Entity.User;
import resumemukhtarovich.resume.md.Repository.AuthRepository;
import resumemukhtarovich.resume.md.Repository.RoleRepository;

import java.util.Collections;


@Component
@Configuration
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final PasswordEncoder passwordEncoder;

    private final AuthRepository authRepository;

    private final RoleRepository roleRepo;


    @Value("${spring.jpa.hibernate.ddl-auto}")
    private String init;


    @Override
    public void run(String... args) throws Exception {
        if (init.equals("create-drop") || init.equals("create")) {
            for (RoleName value : RoleName.values()) {
                roleRepo.save(new Role(value));
            }
            authRepository.save(
                    new User(
                            "Dilbek", "Mukhtarovich", "500537027", passwordEncoder.encode("dilbekk070"), Collections.singletonList(roleRepo.findById(2).orElseThrow(() -> new ResourceNotFoundException("getRole")))
                    )
            );

        }
    }
}
