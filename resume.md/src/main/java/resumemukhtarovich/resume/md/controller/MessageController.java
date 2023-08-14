package resumemukhtarovich.resume.md.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import resumemukhtarovich.resume.md.Entity.Message;
import resumemukhtarovich.resume.md.Repository.MessageRepository;
import resumemukhtarovich.resume.md.Service.MessageService;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.MessageDto;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/message")
public class MessageController {
    private final MessageService messageService;
    private final MessageRepository messageRepository;

    @PostMapping
    public HttpEntity<?> sendMsg(@RequestBody MessageDto dto) {
        try {
            ApiResponse apiResponse = messageService.sendMessage(dto);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping
    public HttpEntity<?> getMsg() {
        try {
            List<Message> all = messageRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping
    public HttpEntity<?> deleteAllMsg() {
        ApiResponse apiResponse = messageService.deleteMessage();
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }
}
