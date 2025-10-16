pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Kunal061/apache.git', branch: 'main'
            }
        }

        stage('Deploy to Apache') {
            steps {
                script {
                    sh '''
                    if [ ! -d "/var/www/html" ]; then
                      echo "Error: Apache web root does not exist: /var/www/html"
                      exit 1
                    fi

                    sudo cp -v /var/jenkins_home/workspace/pipe_2_apache/index.html /var/www/html/
                    sudo cp -v /var/jenkins_home/workspace/pipe_2_apache/styles.css /var/www/html/
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
