pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Kunal061/apache.git'
            }
        }

        stage('Deploy Files') {
            steps {
                echo "HELLO"
            }
        }
    }
}
