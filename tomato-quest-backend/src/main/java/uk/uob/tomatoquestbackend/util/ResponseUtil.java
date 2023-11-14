package uk.uob.tomatoquestbackend.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ResponseUtil {
    private int status;
    private String message;
    private Object data;

    public ResponseUtil(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
