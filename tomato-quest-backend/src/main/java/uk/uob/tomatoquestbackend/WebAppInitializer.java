package uk.uob.tomatoquestbackend;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
import uk.uob.tomatoquestbackend.config.WebAppConfig;
import uk.uob.tomatoquestbackend.config.WebRootConfig;

import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletRegistration;

public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{WebRootConfig.class};
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{WebAppConfig.class};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

}
