pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Kunal061/apache.git'
            }
        }
        stage('Deploy Files') {
            steps {
                sh 'sudo cp index.html /var/www/html/'
                sh 'sudo cp styles.css /var/www/html/'
            }
        }
        stage('Restart Apache') {
            steps {
                sh 'sudo systemctl restart httpd'
            }
        }
    }
}
