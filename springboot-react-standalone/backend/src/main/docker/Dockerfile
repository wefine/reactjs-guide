FROM openjdk:8u131-jre-alpine
MAINTAINER ZXJOS
# port
EXPOSE 8080

# install Spring Boot artifact
VOLUME /tmp
# jar
ADD /maven/app.jar app.jar
RUN sh -c 'touch /app.jar'
#
ENV JAVA_OPTS=""
# entrypoint
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]
