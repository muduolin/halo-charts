node {
  stage('SonarQube analysis') {
    // requires SonarQube Scanner 2.8+
    def scannerHome = tool 'SonarQube Scanner 2.8';
    echo "${scannerHome}"
    withSonarQubeEnv('Sonarqube Server 6.4') {
      sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=halo-charts -Dsonar.projectName=halo-charts -Dsonar.sources=."
    }
  }
}
stage("SonarQube Quality Gate") { 
  timeout(time: 1, unit: 'HOURS') { 
     def qg = waitForQualityGate() 
     if (qg.status != 'OK') {
       error "Pipeline aborted due to quality gate failure: ${qg.status}"
    }
  }
}

