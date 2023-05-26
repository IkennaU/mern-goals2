pipeline {
    agent any     
    stages {
        stage('client') {
            steps {
                echo 'executing npm...'  
                nodejs('Node-18.16') {
                sh 'npm install'     
                }       
            }
        }
        stage('backend') {   
             steps {
                echo 'executing gradle...'
                withGradle(){
                sh './gradlew -v'
                }
            }
        }      
           
          }     
    }
