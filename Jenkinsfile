pipeline {
    agent any

    environment {
        APACHE_WEB_ROOT = '/var/www/html'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repo using Jenkins git plugin:
                git url: 'https://github.com/Kunal061/apache.git', branch: 'main'
            }
        }

        stage('Deploy to Apache') {
            steps {
                script {
                    // Copy files from current workspace to Apache root
                    // Use sudo if permissions required; otherwise remove sudo
                    sh '''
                    if [ ! -d "${APACHE_WEB_ROOT}" ]; then
                      echo "Error: Apache web root does not exist: ${APACHE_WEB_ROOT}"
                      exit 1
                    fi

                    sudo cp -v ${WORKSPACE}/index.html ${APACHE_WEB_ROOT}/
                    sudo cp -v ${WORKSPACE}/styles.css ${APACHE_WEB_ROOT}/
                    sudo systemctl restart apache2
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Website successfully deployed!'
        }
        failure {
            echo 'Deployment failed! Check above logs.'
        }
    }
}
