package resumemukhtarovich.resume.md.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import resumemukhtarovich.resume.md.Entity.Message;
import resumemukhtarovich.resume.md.Repository.MessageRepository;
import resumemukhtarovich.resume.md.pyload.ApiResponse;
import resumemukhtarovich.resume.md.pyload.MessageDto;


@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;

    public ApiResponse sendMessage(MessageDto dto) {
        try {
            Message message = new Message();
            message.setMessage(dto.getMessage());
            message.setPhone(dto.getPhone());
            messageRepository.save(message);
            return new ApiResponse("Xabar Yuborildi", true);
        } catch (Exception e) {
            return new ApiResponse("Xabar yuborilmadi", false);
        }
    }

    public ApiResponse deleteMessage() {
        try {
            messageRepository.deleteAll();
            return new ApiResponse("Tarix tozalandi", true);
        } catch (Exception e) {
            return new ApiResponse("Hatolk", false);
        }
    }
}
