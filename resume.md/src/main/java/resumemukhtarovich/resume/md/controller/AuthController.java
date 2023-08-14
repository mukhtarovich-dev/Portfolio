package resumemukhtarovich.resume.md.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import resumemukhtarovich.resume.md.Entity.Enums.RoleName;
import resumemukhtarovich.resume.md.Entity.User;
import resumemukhtarovich.resume.md.Repository.AuthRepository;
import resumemukhtarovich.resume.md.Security.JwtTokenFilter;
import resumemukhtarovich.resume.md.Security.JwtTokenProvider;
import resumemukhtarovich.resume.md.Service.AuthService;
import resumemukhtarovich.resume.md.pyload.GetMal;
import resumemukhtarovich.resume.md.pyload.LoginDto;
import resumemukhtarovich.resume.md.pyload.ResToken;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthRepository authRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public HttpEntity<?> login(@RequestBody LoginDto request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getPhoneNumber(), request.getPassword())
        );
        User user = authRepository.findUserByPhoneNumber(request.getPhoneNumber()).get();
        ResToken resToken = new ResToken(generateToken(request.getPhoneNumber()));
        return ResponseEntity.ok(getmalumot(user, resToken));
    }

    public GetMal getmalumot(User user, ResToken resToken) {
        return new GetMal(user, resToken);
    }


    public String generateToken(String phoneNumber) {
        User user = authRepository.findUserByPhoneNumber(phoneNumber).get();
        return jwtTokenProvider.generateToken(user.getId());
    }

}
