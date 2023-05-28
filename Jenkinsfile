pipeline {
  agent any
  stages {
    stage('CheckOut Steps') {
      steps {
        git(url: 'https://github.com/IkennaU/mern-goals2.git', branch: 'main')
      }
    }

    stage('Logs') {
      parallel {
        stage('Logs') {
          steps {
            bat 'dir'
          }
        }

        stage('Front End Run') {
          steps {
            bat 'cd client && npm i'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'docker build -f client .'
      }
    }

  }
}