package uk.uob.tomatoquestbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CommonResponseDTO {
    private boolean success;
    private String message;
    private Object data;


    public CommonResponseDTO(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public CommonResponseDTO(boolean success, Object data) {
        this.success = success;
        this.data = data;
    }

}
