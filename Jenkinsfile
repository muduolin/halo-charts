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
        waitForQualityGate()
      }
    }
  }
}