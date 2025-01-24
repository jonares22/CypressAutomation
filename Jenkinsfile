pipeline {
    agent any
    tools {
        nodejs "node"
    }
    parameters {
        choice(name: 'type', choices: ['ui', 'api', 'regression'], description: 'Select testing type', defaultValue: 'regression'))
    }
    stages {
        stage('execute test cases') {
            steps {
                sh "./run_cypress.sh ${params.type}"
            }
        }
    }
    
    post {
        always {
            echo 'generating allure report'
            sh 'npm run allure:generate'
        }
    }
}
