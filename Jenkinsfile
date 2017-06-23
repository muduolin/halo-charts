/*
pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        script {
          def scannerHome = tool 'SonarQube Scanner 2.8';
          echo "${scannerHome}"
          withSonarQubeEnv('Sonarqube Server 6.4') {
            sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=halo-charts -Dsonar.projectName=halo-charts -Dsonar.sources=."
          }
        }
      }
    }
  }
}*/
pipeline {
    agent any
    stages {
        /* "Build" and "Test" stages omitted */

        stage('Deploy - Staging') {
            steps {
                echo "staging"
            }
        }

        stage('Sanity check') {
            steps {
                input "Does the staging environment look ok?"
            }
        }

        stage('Deploy - Production') {
            steps {
                echo "production"
            }
        }
    }
}
