pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Kunal061/apache.git'  // Your GitHub repo URL
        APACHE_WEB_ROOT = '/var/www/html'
    }

    stages {
        stage('Checkout') {
            steps {
                // Using Jenkins git step with credentials
                git url: "${REPO_URL}", credentialsId: 'github-creds', branch: 'main'
            }
        }

        stage('Deploy to Apache') {
            steps {
                script {
                    // Deploy only index.html and styles.css
                    sh """
                    cp -r index.html ${APACHE_WEB_ROOT}/
                    cp -r styles.css ${APACHE_WEB_ROOT}/
                    systemctl restart apache2
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Website has been successfully deployed!'
        }
        failure {
            echo 'Deployment failed. Please check logs.'
        }
    }
}
