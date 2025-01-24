pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('build') {
            steps {
                sh './run_cypress.sh'
            }
        }
    }
}
