pipeline {
	agent { label 'docker-slave-0' }
	stages{
		stage("Build Docker image and run container") {
			steps {
				sh '''
					sudo docker build -t ruds/pet-finder-dev .
				'''
				sh '''
					if [ "$(sudo docker ps -aq -f name=pet_finder)" ]; then
						sudo docker rm pet_finder -f
					fi &&\
					sudo docker run -p:4000:4000 -d --name pet_finder ruds/pet-finder-dev
				'''
			}
		}

		/* stage ("Verify container running and respond") {
			steps {
				sh '''
					curl -LI http://172.17.0.3:4000/api/pets/ -o /dev/null -w "%{http_code}\n" -s
				'''
			}
		} */
	}
}
