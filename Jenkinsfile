pipeline {
  agent any
  stages {
    stage('Test') {
      tools {
        'SonarQube Scanner 2.8'
      }
      steps {
        withSonarQubeEnv('Sonarqube Server 6.4') {
          sh "sonar-scanner -Dsonar.projectKey=halo-charts -Dsonar.projectName=halo-charts -Dsonar.sources=."
        }
      }
    }
  }
}
