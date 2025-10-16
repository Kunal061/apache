pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/your-username/your-repo.git' // replace with your repo URL
        REPO_DIR = 'website_content'
        APACHE_WEB_ROOT = '/var/www/html'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    if (fileExists(REPO_DIR)) {
                        dir(REPO_DIR) {
                            sh 'git pull'
                        }
                    } else {
                        sh "git clone ${REPO_URL} ${REPO_DIR}"
                    }
                }
            }
        }

        stage('Deploy to Apache') {
            steps {
                script {
                    sh """
                    sudo cp ${REPO_DIR}/index.html ${APACHE_WEB_ROOT}/
                    sudo cp ${REPO_DIR}/styles.css ${APACHE_WEB_ROOT}/
                    sudo systemctl restart apache2
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
