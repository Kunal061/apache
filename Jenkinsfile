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
                sh '''
                   sudo mv -f index.html styles.css /var/www/html/
                   sudo systemctl restart httpd
                '''
            }
        }
    }
}
