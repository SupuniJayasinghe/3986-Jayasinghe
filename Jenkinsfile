pipeline {
    agent any
    stages {
        stage ('SCM checkout'){
            steps{
                retry(3){
                  checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/SupuniJayasinghe/3986-Jayasinghe']])
                }
            }
      
        }
         stage('build dockerfile'){
            steps {
                sh 'docker build -t supunij/3986-jayasinghe .'
            }
        
        }
         stage('dockerfile run'){
            steps{
                sh 'docker run -d -p 5000:3000 supunij/3986-jayasinghe'
         }
        }
        stage('show running containers'){
      steps{
        sh 'docker ps'
      }
    }
    
    }
}