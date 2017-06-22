pipeline {
  agent any
  stages {
    stage('Example') {
      steps {
        echo 'hello'
      }
    }
    stage('Test') {
      steps {
        def scannerHome = tool 'SonarQube Scanner 2.8'
        echo "${scannerHome}"
        withSonarQubeEnv('Sonarqube Server 6.4') {
          sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=halo-charts -Dsonar.projectName=halo-charts -Dsonar.sources=."
        }
      }
    }
  }
}
