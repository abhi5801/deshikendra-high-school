pipeline {
    agent any

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

        stage('Check Files') {
            steps {

                sh 'ls -la'
            }
        }

        stage('SonarQube Analysis') {
            steps {

                withSonarQubeEnv('sonarqube') {

                    sh '''
                    sonar-scanner \
                    -Dsonar.projectKey=school-project \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://3.110.51.226:9000 \
                    -Dsonar.login=$SONAR_TOKEN
                    '''
                }
            }
        }
    }

    post {

        success {
            echo 'SonarQube Scan Successful!'
        }

        failure {
            echo 'Pipeline Failed!'
        }
    }
}
