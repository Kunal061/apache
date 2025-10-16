pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout files from your GitHub repository
                git url: 'https://github.com/Kunal061/apache.git', branch: 'main'
            }
        }

        stage('Deploy to Apache') {
            steps {
                script {
                    sh '''
                    APACHE_WEB_ROOT="/var/www/html"
                    WORKSPACE_DIR="/var/jenkins_home/workspace/pipe_2_apache"

                    if [ ! -d "$APACHE_WEB_ROOT" ]; then
                      echo "Error: Apache web root does not exist: $APACHE_WEB_ROOT"
                      exit 1
                    fi

                    sudo cp -v "$WORKSPACE_DIR/index.html" "$APACHE_WEB_ROOT/"
                    sudo cp -v "$WORKSPACE_DIR/styles.css" "$APACHE_WEB_ROOT/"
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
