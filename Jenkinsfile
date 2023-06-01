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
            echo 'executing npm...'
            nodejs('Node-18.16') {
              bat 'cd client && npm i'
            }
          }
        }

      }
    }

    stage('Run Backend') {
      steps {
        echo 'executing gradle'
      }
    }

  }
}
