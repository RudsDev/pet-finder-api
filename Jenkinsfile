node ('docker-slave-0') {
	stageResults = [:]
	stage('Build') {
		sh '''
			sudo docker build -t ruds/pet-finder-dev .
		'''
		sh '''
			if [ "$(sudo docker ps -aq -f name=pet_finder)" ]; then
				sudo docker rm pet_finder -f
			fi &&\
			sudo docker run -p:4000:4000 -d --name pet_finder ruds/pet-finder-dev
		'''
		sleep(5)
	}
	stage('Test') {
		node('master') {
				try {
					sh '''
						if [ "$(curl -LI http://192.168.33.12:4000/api/pets/ -o /dev/null -w '%{http_code}' -s)" -eq 200 ]; then
							exit 0
						else
							exit 1
						fi
					'''
					stageResults."{STAGE_NAME}" = "SUCCESS"
				}
				catch (exception) {
					unstable("[ERROR]: ${STAGE_NAME} failed!")
					currentBuild.result = "SUCCESS"
					stageResults."{STAGE_NAME}" = "FAILURE"
				}
		}
	}
	stage('Deploy') {
		echo stageResults."{STAGE_NAME}"
		if (stageResults.find{ it.key == "{STAGE_NAME}" } ?.value == "SUCCESS") {
			echo "Push Docker image"
			sh '''
				sudo docker push ruds/pet-finder-dev
			'''
		}
		else {
			echo "Something fail..."
		}
	}
}
