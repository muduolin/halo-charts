pipeline {
  agent any
  stage('SonarQube analysis') {
    // requires SonarQube Scanner 2.8+
    def scannerHome = tool 'SonarQube Scanner 2.8';
    withSonarQubeEnv('Sonarqube Server 6.4') {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}
