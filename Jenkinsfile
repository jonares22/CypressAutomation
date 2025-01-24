pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage('execute test cases') {
            steps {
                sh './run_cypress.sh'
            }
        }
    }
    
    post {
        always {
            sh 'npm run allure:generate'
        }
    }
}
