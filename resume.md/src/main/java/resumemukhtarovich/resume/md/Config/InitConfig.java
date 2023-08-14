package resumemukhtarovich.resume.md.Config;

import org.springframework.core.io.ClassPathResource;

import javax.swing.*;
import java.util.Properties;

public class InitConfig {
    public static boolean isStart(){
        Properties properties = new Properties();
        try {
            properties.load(new ClassPathResource("/application.properties").getInputStream());
            if (properties.getProperty("spring.jpa.hibernate.ddl-auto").equals("update")){
                return true;
            }else {
                String s = JOptionPane.showInputDialog("Ma'lumotlar bazasi Create yoki Create-drop holatida! Ma'lumotlar o'chirib yuboriladi! ");
                if (s != null && s.equals("dilbek")){
                    return true;
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }
}
