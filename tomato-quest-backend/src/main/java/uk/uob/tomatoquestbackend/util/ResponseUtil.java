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
    private int code;
    private String message;
    private Object data;

    public ResponseUtil(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
