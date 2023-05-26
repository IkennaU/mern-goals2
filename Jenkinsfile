pipeline {
    agent any     
    stages {
        stage('run client') {
            steps {
                echo 'executing npm...'  
                nodejs('Node-18.16') {
                sh 'npm install'     
                }       
            }
        }
        stage('run backend') {   
             steps {
                echo 'executing gradle...'
                withGradle(){
                sh './gradlew -v'
                }
            }
        }      
           
          }     
    }
