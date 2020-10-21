@Library('joom@master') _

def image = null
def alreadyCompleted = false
def uploadedTag
def gitCommit = getGitCommit()
def isBuildForDeploy = env.buildForDeploy == 'true'

pipeline {
  agent none

  parameters {
    booleanParam name: 'buildForDeploy', defaultValue: false, description: 'Was ran from deploy job'
  }

  environment {
    registry = 'jfrog.joom.it'
    registryCredential = 'cicd-robot-pusher'
  }

  options {
    lock("joom-js:web-pharmacy-lab-landing:$gitCommit")
  }

  stages {
    stage('Check is already build') {
      steps {
        script {
          imageTag = getLatestTag(project: 'joom-web-pharmacy-lab-landing', branch: BRANCH_NAME, commit: gitCommit)
          if (imageTag) {
            alreadyCompleted = true
          } else {
            imageTag = createTag(env.BRANCH_NAME, gitCommit)
          }
          env.IMAGE_TAG = imageTag
        }
      }
    }
    stage('Check build by commit') {
      when {
        expression { !isBuildForDeploy }
      }
      steps {
        script {
          uploadedTag = getLatestTag(project: 'joom-web-pharmacy-lab-landing', branch: '', commit: gitCommit, containerRegistries: ["$registry/pharmacy-lab-landing"])
        }
      }
    }
    stage('Retag build') {
      when {
        expression { uploadedTag }
      }
      steps {
        script {
          echo "Reupload already built docker images: $uploadedTag"
          image = docker.image("$registry/pharmacy-lab-landing/build:$uploadedTag")
          image.pull()
          alreadyCompleted = true
        }
      }
    }
    stage('Build:') {
      agent {
        label 'onspot'
      }
      when {
        expression { !alreadyCompleted }
      }
      stages {
        stage('Build image') {
          options {
            gitStatusWrapper(
              credentialsId: 'joombot-jenkins-github-rw',
              gitHubContext: 'continuous-integration/build',
              account: 'joomcode',
              repo: 'pharmacy-lab-landing',
              sha: gitCommit
            )
          }
          steps {
            script {
              image = docker.build("$registry/pharmacy-lab-landing/build:$IMAGE_TAG")
            }
          }
        }
        stage('Push image') {
          steps {
            script {
              docker.withRegistry("https://$registry", registryCredential) {
                docker.image(image.tag(IMAGE_TAG)).push()
              }
              currentBuild.displayName = "#$BUILD_NUMBER: $IMAGE_TAG"
              env.IMAGE_TAG = IMAGE_TAG
            }
          }
        }
        stage('Register image') {
          steps {
            script {
              publishBuiltTag(
                artifact: 'joom-web-pharmacy-lab-landing',
                tag: IMAGE_TAG,
                repository: 'joomcode/pharmacy-lab-landing',
                branch: env.BRANCH_NAME,
                commit: gitCommit
              )
            }
          }
        }
        stage('Deploy if master') {
          when {
            expression { env.BRANCH_NAME == 'master' }
          }
          steps {
            script {
              build job: 'deploy-production-kube', parameters: [
                string(name: 'DEPLOY', value: groovy.json.JsonOutput.toJson([
                  inventory: 'production',
                  versions : [
                    [
                      'chart'    : 'web-pharmacy-lab-landing',
                      'version'  : imageTag.toString(),
                      'maturity' : 'built'
                    ],
                  ],
                ])),
              ]
            }
          }
        }
      }
    }
  }
}
