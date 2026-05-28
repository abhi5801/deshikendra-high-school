pipeline {
    agent any

    tools {
        maven 'maven'
    }

    environment {
        SONAR_TOKEN = credentials('sonar-token')
    }

    stages {

        stage('Checkout Code') {
            steps {

                git branch: 'main',
                url: 'https://github.com/abhi5801/deshikendra-high-school.git'
            }
        }

        stage('Build Application') {
            steps {

                sh 'mvn clean package'
            }
        }

        stage('Run Test Cases') {
            steps {

                sh 'mvn test'
            }
        }

        stage('SonarQube Analysis') {
            steps {

                withSonarQubeEnv('sonarqube') {

                    sh """
                    mvn sonar:sonar \
                    -Dsonar.projectKey=school-project \
                    -Dsonar.host.url=http://3.110.51.226:9000 \
                    -Dsonar.login=$SONAR_TOKEN
                    """
                }
            }
        }
    }

    post {

        success {
            echo 'Build and SonarQube Scan Successful!'
        }

        failure {
            echo 'Pipeline Failed!'
        }
    }
}
