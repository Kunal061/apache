pipeline {
    agent any

    environment {
        APACHE_WEB_ROOT = '/var/www/html'
    }

    stages {
        stage('Checkout') {
            steps {
                // Uses Jenkins' built-in Git step
                git url: 'https://github.com/Kunal061/apache.git', branch: 'main'
            }
        }

        stage('Deploy to Apache') {
            steps {
                script {
                    sh '''
                    if [ ! -d "${APACHE_WEB_ROOT}" ]; then
                      echo "Error: Apache web root does not exist: ${APACHE_WEB_ROOT}"
                      exit 1
                    fi

                    sudo cp -v index.html ${APACHE_WEB_ROOT}/
                    sudo cp -v styles.css ${APACHE_WEB_ROOT}/
                    sudo systemctl restart httpd
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Website successfully deployed on Amazon Linux!'
        }
        failure {
            echo 'Deployment failed! Check above logs.'
        }
    }
}
