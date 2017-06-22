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
}
