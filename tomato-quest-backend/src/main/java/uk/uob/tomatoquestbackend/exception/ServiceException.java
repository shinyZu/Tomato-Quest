package uk.uob.tomatoquestbackend.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ServiceException extends RuntimeException{
    private int status;
    private String message;
}
