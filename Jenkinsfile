pipeline {
  agent any
  stages {
    stage('CheckOut Steps') {
      steps {
        git(url: 'https://github.com/IkennaU/mern-goals2.git', branch: 'main')
      }
    }

    stage('Logs') {
      steps {
        bat 'dir'
      }
    }

  }
}