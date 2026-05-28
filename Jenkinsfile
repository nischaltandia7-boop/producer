pipeline {
    agent any

    environment {
        IMAGE_NAME = "nischaltandia12345/producer1"
        EC2_IP = "13.203.97.95"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/your/repo.git'
            }
        }

        stage('Docker Login') {
            steps {
                sh 'docker login -u USERNAME -p PASSWORD'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:2 .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME:2'
            }
        }

        stage('Deploy to EC2') {
            steps {
                     sh '''
                     ssh -i ~/.ssh/nischal.pem -o StrictHostKeyChecking=no ec2-user@$EC2_IP << EOF
                     docker pull $IMAGE_NAME:2
                     docker stop app || true
                     docker rm app || true
                     docker run -d -p 3000:3000 --name app $IMAGE_NAME:2
                     EOF
                    '''
                 }
        }
    }
}